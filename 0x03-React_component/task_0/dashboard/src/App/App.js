import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
];

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="heading-section">
                        <Notifications listNotifications={listNotifications} />
                        <Header />
                    </div>
                    {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
                    <div className="App-footer">
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
    isLoggedIn: false,
};

export default App;
