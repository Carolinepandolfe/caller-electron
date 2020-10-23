import React from 'react';
import './Attendance.css';

const LastCalls = ((props)=> {
    return (
        <React.Fragment>
            <div className="content">
                <span>{props.chamadas}</span>
            </div>
        </React.Fragment>
    );
});

export default LastCalls;
