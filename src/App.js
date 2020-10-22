import React from 'react';
import './App.css';
import Topbar from './components/Tobbar/Topbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


const App = ( (props)=> {
    return (
        <React.Fragment>
			<Topbar />
            <Main />
			<Footer />
		</React.Fragment>
    );
})


export default App;
