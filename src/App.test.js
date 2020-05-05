import React from 'react';
import { render, waitForElement, fireEvent, findByTestId, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios')
afterEach(cleanup)

it('button is clicked', async () => {

  const { container } = render(<App />)

  const button = await findByTestId(container, "get-user-button")
  fireEvent.click(button) 

});

it("fetches and displays data", async () => {
  axiosMock.get.mockResolvedValueOnce(
    { 
    
      data: {
        greeting: "Hello there"
      }
    }
  );

 
  const url = "/users";
  const { getByTestId, asFragment } = render(<App url={url} />);

  expect(getByTestId("loading")).toHaveTextContent("Click to button to get users");

  /*I have a major issue here, the data recieved
    from the API was rendered in the Profile component <a child component>, how to test this component is confusing me.
  */
  const resolvedSpan = await waitForElement(() => getByTestId("resolved"));

  expect(resolvedSpan).toHaveTextContent(" ");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(asFragment()).toMatchSnapshot();
});



