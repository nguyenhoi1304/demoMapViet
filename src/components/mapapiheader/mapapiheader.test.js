import React from "react";
import { shallow } from "enzyme";
import Mapapiheader from "./mapapiheader";

describe("Mapapiheader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Mapapiheader />);
    expect(wrapper).toMatchSnapshot();
  });
});
