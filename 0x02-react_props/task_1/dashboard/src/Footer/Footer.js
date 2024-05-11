import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
    return (
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy()}
        </div>
    );
}

export default Footer;