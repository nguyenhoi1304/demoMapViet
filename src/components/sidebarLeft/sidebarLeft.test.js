import React from "react";
import { shallow } from "enzyme";
import SidebarLeft from "./sidebarLeft";

describe("SidebarLeft", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SidebarLeft />);
    expect(wrapper).toMatchSnapshot();
  });
});
