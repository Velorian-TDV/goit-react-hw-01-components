import React from "react";

function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li className="item">
            <span className="status" data-status={isOnline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

export default FriendListItem;