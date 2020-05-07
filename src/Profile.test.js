import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile", () => {
  it("should render user details", () => {
    const userMock = {
      login: { username: "aminat" },
      name: { first: "jumoke" },
      picture: { medium: "https://www.images.com/picture" },
      location: { city: "Lagos" },
      email: "jumoke@gmail.com",
    };
    const { getByText, getByAltText } = render(<Profile user={userMock} />);
    expect(getByAltText(userMock.name.first))
    expect(getByText(userMock.email, { exact: false }))
    expect(
      getByText(userMock.location.city, { exact: false })
    )
  });
});
