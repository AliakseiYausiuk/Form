import React from 'react';
import {Button, ButtonGroup, Grid} from '@material-ui/core';
import styles from './header.module.css'
import {NavLink} from 'react-router-dom';


export const Header = () => {
    return (
        <Grid className={styles.header} container justifyContent={'flex-end'}>
            <ButtonGroup color={'secondary'}>
                <Button variant={'contained'}><NavLink to={'/'} className={styles.link}>Get Start</NavLink></Button>
                <Button variant={'contained'}><NavLink to={'/login'} className={styles.link}>Log In</NavLink></Button>
                <Button variant={'contained'}><NavLink to={'/singup'} className={styles.link}>Sign Up</NavLink></Button>
            </ButtonGroup>
        </Grid>
    )
}