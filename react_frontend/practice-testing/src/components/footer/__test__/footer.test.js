import React from "react";
import Footer from "../Footer";

import { shallow } from "enzyme";

describe("<Header />", () => {
  it("Header component loads with 4 links", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.containsMatchingElement(<h1>This is the footer.</h1>)).toBe(
      true
    );
  });
});
