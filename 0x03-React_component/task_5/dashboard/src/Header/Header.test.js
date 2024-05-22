import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";

describe("Header", () => {
    it("renderwithout crashing", () => {
        const wraper = shallow(<Header />);
        expect(wraper.exists()).toEqual(true);
    });
    it("should render h1", () => {
        const wraper = shallow(<Header />);
        expect(wraper.exists("img")).toEqual(true);
        expect(wraper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    })
})