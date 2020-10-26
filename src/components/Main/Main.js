import React from 'react';
import './Main.css';
const Main = ((props)=> {
    return (
        <React.Fragment>
            <main className="main">
               <div className="current">
                   <div className="current__password">
                        <span>{props.password}</span>
                        <div>
                            <span className="current__password--blink">{props.numberPassword}</span>
                        </div>
                   </div>
                   <div className="current__room">
                        <span>{props.room}</span>
                        <div>
                            <span className="current__room--blink">{props.numberRoom}</span>             
                        </div>
                   </div>
                </div> 
                <div className="last">
                    <span className="last-call">{props.call}</span>
                    <div className="last__caller">
                        <div className="last__password">
                            <span>{props.callPassword}</span>
                            <span>{props.callPasswordNumber}</span>
                        </div>
                        <div className="last__room">
                            <span>{props.callRoom}</span>
                            <span>{props.callRoomNumber}</span>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
});

export default Main;
