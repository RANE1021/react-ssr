import React from "react";
import { shallow } from "enzyme";

import Example from "./component";

const styles = {};

describe("The about component mounts with styles and three divs", () => {
  const shallowExample = shallow(<Example styles={styles} />);
  it("loads with divs", () => {
    expect(shallowExample.find("div").length).toBe(3);
  });
});
