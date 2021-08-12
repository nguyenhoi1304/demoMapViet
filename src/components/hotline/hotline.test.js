import React from "react";
import { shallow } from "enzyme";
import Hotline from "./hotline";

describe("Hotline", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Hotline />);
    expect(wrapper).toMatchSnapshot();
  });
});
