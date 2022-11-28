import React from 'react';
import {Button, ButtonGroup, Grid} from '@material-ui/core';
import styles from './header.module.css'


export const Header = () => {
    return (
        <Grid className={styles.header} container justifyContent={'flex-end'}>
            <ButtonGroup color={'secondary'}>
                <Button variant={'contained'}>Get Start</Button>
                <Button variant={'contained'}>Log In</Button>
                <Button variant={'contained'}>Log Up</Button>
            </ButtonGroup>
        </Grid>
    )
}