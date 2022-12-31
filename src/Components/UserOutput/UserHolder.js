import React from 'react';
import './UserHolder.css'

function UserHolder(props) {
    function onClick() {
        props.handleClick(props.id);
    }

    return ( 
        <div className='user-holder' onClick={onClick}>
            <p>{props.name} ({props.age} years old)</p>
        </div>
     );
}

export default UserHolder;