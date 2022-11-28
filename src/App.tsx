import React from 'react';
import './App.css';
import {Form} from './component/Form/Form';
import {Title} from './component/Title/Title';
import {Grid} from '@material-ui/core';
import {Layout} from './layout/Layout';
import {Header} from './component/Header/Header';

function App() {
    return (
        <Grid className="App">
            <Header/>
            <Layout>
                <Form/>
            </Layout>
        </Grid>
    );
}

export default App;
