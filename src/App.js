import React from 'react';
import Topbar from './components/Tobbar/Topbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = (()=> {
    return (
        <React.Fragment>
			<Topbar />
            <Main 
                password="Senha" numberPassword="100"
                room="Sala" numberRoom="2" call="Últimas Chamadas" 
                callPassword="Senha" callPasswordNumber="10" 
                callRoom="Sala" callRoomNumber="20" 
            />
			<Footer />
		</React.Fragment>
    );
})

export default App;
