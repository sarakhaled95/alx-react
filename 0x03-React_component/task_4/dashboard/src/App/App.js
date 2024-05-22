import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.isLoggedIn = props.isLoggedIn;
        this.logOut = props.logOut;
        this.HandelKeyPress = this.HandelKeyPress.bind(this);
        this.listNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: getLatestNotification() },
        ];
        this.listCourses = [
            { id: 1, name: "ES6", credit: 60 },
            { id: 2, name: "Webpack", credit: 20 },
            { id: 3, name: "React", credit: 40 },
        ];
    }
    componentDidMount() {
        document.addEventListener("keydown", this.HandelKeyPress)
    }
    HandelKeyPress = (e) => {
        if (e.ctrlKey && e.key === 'h') {
            alert("Logging you out");
            this.props.logOut()
        }
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.HandelKeyPress)
    }
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="heading-section">
                        <Notifications listNotifications={this.listNotifications} />
                        <Header />
                    </div>
                    {this.props.isLoggedIn ?
                        <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.listCourses} /></BodySectionWithMarginBottom>
                        :
                        <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
                    }
                    <BodySection title="News from the school">
                        <p>Random text</p>
                    </BodySection>
                        <Footer />
                </div>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => { return }
};

export default App;
