import React from "react";
import { shallow } from "enzyme";
import Polygon from "./polygon";

describe("Polygon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Polygon />);
    expect(wrapper).toMatchSnapshot();
  });
});
