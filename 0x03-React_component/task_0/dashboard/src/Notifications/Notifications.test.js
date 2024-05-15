import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
    it("renders Notification component without crashing", () => {
        const notification = shallow(<Notifications />);

        expect(notification).toBeDefined();
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("ul")).toBeDefined();
    });

    it("renders three list items", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("li")).toHaveLength(3);
    });

    it("renders correct text", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("p").text()).toBe("Here is the list of notifications");
    });
    it("displays menu item when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);

        expect(wrapper.find("div.menuItem").exists()).toBe(true);
        expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
    });

    it("does not display notifications when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);

        expect(wrapper.find("div.Notifications").exists()).toBe(false);
    });

    it("does not display menuItem when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(wrapper.find("div.menuItem").exists()).toBe(true);
    });

    it("displays Notifications when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(wrapper.find("div.Notifications").exists()).toBe(true);
    });
});