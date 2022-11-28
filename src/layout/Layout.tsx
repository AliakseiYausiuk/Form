import React, {ReactNode} from 'react';
import {Title} from '../component/Title/Title';
import {Header} from '../component/Header/Header';
import { Grid } from '@material-ui/core';

type PropsType = {
    children: ReactNode
}

export const Layout = ({children}: PropsType) => {
    return (
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Title/>
            {children}
        </Grid>
    )
}