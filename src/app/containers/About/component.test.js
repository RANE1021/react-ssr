
import React from "react";
import { shallow } from "enzyme";

import AboutContainer from "./component";

const styles = {};

describe("The home component mounts with one div and About component", () => {
  const shallowAboutContainer = shallow(<AboutContainer styles={styles} />);
  it("loads with divs", () => {
    expect(shallowAboutContainer.find("div").length).toBe(1);
  });

  it('matches previous snapshot', () => {
    expect(AboutContainer).toMatchSnapshot()
  })
});
