import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios')
afterEach(cleanup)

const getComponent = ({ props = {} } = {}) => {
  const mockUser = {
    login: { username: "aminat" },
    name: { first: "jumoke" },
    picture: { medium: "https://www.images.com/picture" },
    location: { city: "Lagos" },
    email: "jumoke@gmail.com",
  };
  const apiResponse = Promise.resolve({ data: { results: [mockUser] } });
  axiosMock.get = jest.fn().mockReturnValue(apiResponse);
  return {
    ...render(<App {...props} />),
    apiResponse,
    mockUser,
  };
};

describe("App", () => {
  it("should render successfully", async () => {
    const { getByText, getByTestId } = getComponent();
    expect(getByText(/hello there, i am aminat./i));
    expect(getByTestId("get-user-button"));
  });

  it("should fetch and displays data when button is clicked", async () => {
    const url = "/users";
    const { getByTestId, getByAltText, apiResponse, mockUser } = getComponent({
      props: { url },
    });
    const btn = getByTestId("get-user-button");
    fireEvent.click(btn);

    await act(() => apiResponse);
    expect(getByAltText(mockUser.name.first));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  })
})