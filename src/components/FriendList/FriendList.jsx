import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Friends } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <Wrapper>
            <Friends>
                {friends.map((data) => {
                    return (
                        <FriendListItem
                            key={data.id}
                            isOnline={data.isOnline}
                            avatar={data.avatar}
                            name={data.name}
                        />
                    );
                })}
            </Friends>
        </Wrapper>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
}

export default FriendList;