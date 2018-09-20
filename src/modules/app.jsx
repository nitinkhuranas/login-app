import React from 'react';
import { Provider } from 'react-redux';
import store from './globalStore';
import Routes from './routes/routes.jsx';

function App(props) {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    
}

export default App;