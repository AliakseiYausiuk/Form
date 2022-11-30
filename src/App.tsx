import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import {Layout} from './layout/Layout';
import {Header} from './component/Header/Header';
import {Pages} from './component/Pages/Pages';

function App() {
    return (
        <Grid className="App">
            <Header/>
            <Layout>
                <Pages/>
            </Layout>
        </Grid>
    );
}

export default App;
