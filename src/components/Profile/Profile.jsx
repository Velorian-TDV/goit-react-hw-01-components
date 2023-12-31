import React from "react";
import PropTypes from 'prop-types';
import { Wrapper, UserCard } from './Profile.styled';

function Profile({ avatar, username, tag, location, stats }) {
    return (
        <Wrapper>
            <UserCard>
                <div className="description">
                    <img
                        src={avatar}
                        alt="User avatar"
                        className="avatar"
                    />
                    <p className="name">{username}</p>
                    <p className="tag">@{tag}</p>
                    <p className="location">{location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views</span>
                        <span className="quantity">{stats.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </li>
                </ul>
            </UserCard>
        </Wrapper>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
}

export default Profile;