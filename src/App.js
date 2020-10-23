import React from 'react';
import Topbar from './components/Tobbar/Topbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Content from './components/Content/Attendance';
import LastCalls from './components/Content/Attendance';
import './App.css';

const App = (()=> {
    return (
        <React.Fragment>
			<Topbar />
            <Main>
                <div className="container container__attendance">
                    <Content atendimento="Senha" />
                    <Content atendimento="2" />
                    <Content atendimento="Sala" />
                    <Content atendimento="20" />
                </div>
                <div className="container">
                    <LastCalls chamadas="Últimas Chamadas" />
                    <div className="container">
                        <Content atendimento="Senha" />
                        <Content atendimento="45" />
                        <Content atendimento="Sala" />
                        <Content atendimento="20" />                    
                    </div>
                </div>
            </Main>
			<Footer />
		</React.Fragment>
    );
})

export default App;
