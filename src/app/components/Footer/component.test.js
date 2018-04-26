import React from "react";
import { shallow } from "enzyme";

import Footer from "./component";

const styles = {};

describe("The footer component mounts with styles and a div", () => {
  const shallowFooter = shallow(<Footer styles={styles} />);
  it("loads with a div", () => {
    expect(shallowFooter.find("div").length).toBe(1);
  });

  it("loads with 3 NavLinks", () => {
    expect(shallowFooter.find("NavLink").length).toBe(3);
  });
});
