import React from 'react';
import './Attendance.css';

const Content = ((props)=> {
    return (
        <React.Fragment>
            <div className="content">
                <span>{props.atendimento}</span>
            </div>
        </React.Fragment>
    );
});

export default Content;
