import React from "react";
import { shallow } from "enzyme";

import TotalStats from "./component";

const styles = {};

describe("The home component mounts with styles and four divs", () => {
  const shallowTotalStats = shallow(<TotalStats styles={styles} />);
  it("loads with divs", () => {
    expect(shallowTotalStats.find("div").length).toBe(4);
  });

  it('matches previous snapshot', () => {
    expect(TotalStats).toMatchSnapshot()
  })
});
