import React from 'react';
import './Main.css';
const Main = ((props)=> {
    return (
        <React.Fragment>
            <main className="main">
                {props.children}
            </main>
        </React.Fragment>
    );
});

export default Main;
