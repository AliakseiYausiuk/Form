import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {Title} from '../Title/Title';
import {NavLink} from 'react-router-dom';
import style from './getStart.module.css'

export type PropsTypeGetStart = {
    title: string
}

export const GetStart = ({title}: PropsTypeGetStart) => {
    return (
        <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
            <Title title={title}/>
            <Grid className={style.wrapper} container justifyContent={'center'} direction={'column'} alignItems={'center'}>
                <Button variant={'contained'} color={'secondary'}><NavLink className={style.link} to={'/login'}>Get
                    started</NavLink></Button>
            </Grid>
        </Grid>
    )
}