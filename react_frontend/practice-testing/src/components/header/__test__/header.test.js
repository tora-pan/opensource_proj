import React from "react";
import Header from "../Header";

import { shallow } from "enzyme";

describe("<Header />", () => {
  it("Header component loads with 4 links", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<li>Home</li>)).toBe(true);
  });
});
