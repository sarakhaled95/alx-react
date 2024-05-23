import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
export default function Header() {
    return (
        <div className={css(styles["App-header"])}>
            <img src={logo} className={css(styles.img)} alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
    );
}

const styles = StyleSheet.create({
    "App-header": {
        fontSize: "1.4rem",
        color: "#ce4550",
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #ce4550",
    },

    img: {
        width: "200px",
        height: "200px",
        '@media (max-width: 900px)': {
            width: '150px',
            height: '150px',
        },
    },

    h1: {
        '@media (max-width: 900px)': {
            fontSize: "1.4rem",
        },
    }

});