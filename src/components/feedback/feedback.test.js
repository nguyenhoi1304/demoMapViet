import React from "react";
import { shallow } from "enzyme";
import Feedback from "./feedback";

describe("Feedback", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper).toMatchSnapshot();
  });
});
