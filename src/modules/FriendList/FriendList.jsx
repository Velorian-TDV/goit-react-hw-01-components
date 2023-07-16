import React from 'react';
import { Wrapper, Friends } from './style.module';

function FriendList(props) {

    const { friends } = props;

    return (
        <Wrapper>
            <Friends>            {
                friends.map(data => {
                    return (
                        <li className="item" key={data.id}>
                            <span className="status" data-status={data.isOnline}></span>
                            <img className="avatar" src={data.avatar} alt="User avatar" width="48" />
                            <p className="name">{data.name}</p>
                        </li>
                    )
                })
            }
            </Friends>
        </Wrapper>
    )
}

export default FriendList;