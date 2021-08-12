import React from "react";
import { shallow } from "enzyme";
import Demomapsapi from "./demomapsapi";

describe("Demomapsapi", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Demomapsapi />);
    expect(wrapper).toMatchSnapshot();
  });
});
