import React from "react";
import PropTypes from 'prop-types';

function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li className="item">
            <span className="status" data-status={isOnline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default FriendListItem;