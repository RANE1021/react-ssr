import React from "react";
import { shallow } from "enzyme";

import HomeExample from "./component";

const styles = {};

describe("The home component mounts with styles and three divs", () => {
  const shallowHomeExample = shallow(<HomeExample styles={styles} />);
  it("loads with divs", () => {
    expect(shallowHomeExample.find("div").length).toBe(3);
  });

  it('matches previous snapshot', () => {
    expect(HomeExample).toMatchSnapshot()
  })
});
