import React from "react";
import { shallow } from "enzyme";

import Image from "./component";

const styles = {};

describe("The footer component mounts with styles and two divs", () => {
  const shallowImage = shallow(<Image styles={styles} />);
  it("loads with two divs", () => {
    expect(shallowImage.find("div").length).toBe(2);
  });

  it('matches previous snapshot', () => {
    expect(Image).toMatchSnapshot()
  })
});

// snapshot
