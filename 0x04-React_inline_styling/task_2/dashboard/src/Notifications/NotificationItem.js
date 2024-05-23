import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.selected_style = this.props.type === 'default' ? itemStyles.default : itemStyles.urgent;
    }
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            this.props.value ?
                <li
                    data-notification-type={type}
                    onClick={() => this.props.markAsRead(id)}
                    className={css(this.selected_style)}
                >{value}</li>
                :
                <li
                    data-notification-type={type}
                    dangerouslySetInnerHTML={{ __html: html }}
                    onClick={() => { console.log('empty func'); }}
                    className={css(this.selected_style)}
                ></li>
        );
    }
};
const itemStyles = StyleSheet.create({
    urgent: {
        color: 'red'
    },

    default: {
        color: 'blue'
    }
});

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
        html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => {
        console.log("empty func");
    },
    id: 0,
};

export default NotificationItem;