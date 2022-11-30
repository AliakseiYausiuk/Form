import React from 'react';
import {Grid} from '@material-ui/core';
import {Title} from '../Title/Title';

export type PropsTypeGetStart = {
    title: string
}

export const GetStart = ({title}: PropsTypeGetStart) => {
    return (
        <Grid>
            <Title title={title}/>
        </Grid>
    )
}