import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login", () => {
    it("render without craching", () => {
        const wraper = shallow(<Login />);
        expect(wraper.exists()).toEqual(true);
    })
    it("should have 2 input tags and 2 label tags", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("label")).toHaveLength(2);
        expect(wrapper.find("input")).toHaveLength(2);
    });
});