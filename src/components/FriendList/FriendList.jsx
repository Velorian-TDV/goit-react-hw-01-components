import React from 'react';
import PropTypes, { shape } from 'prop-types';
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
        shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList;