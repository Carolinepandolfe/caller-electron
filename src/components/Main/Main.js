import React from 'react';
import './Main.css';
const Main = ( ()=> {
    return (
        <React.Fragment>
            <main className="main">
                <div className="main__content">
                    <div className="main__senha">
                        <span>Senha</span>
                        <span>100</span>
                    </div>
                    <div className="main__senha">
                        <span>Sala</span>
                        <span>2</span>
                    </div>
                </div>
                <div className="main__content">
                    <div>
                        <span>Últimas Chamadas</span>
                        <div>
                            <span>Senha</span>
                            <span>45</span>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
});

export default Main;
