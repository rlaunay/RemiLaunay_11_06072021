import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' >
                        <Home/>
                    </Route>
                    <Route path='/logement/:id' >
                        <Logement/>
                    </Route>
                    <Route path='/about' >
                        <About/>
                    </Route>
                    <Route path='*' >
                        <NotFound/>
                    </Route>
                </Switch>
            </Layout>
        );
    }
}

export default App;
