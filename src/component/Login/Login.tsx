import React, {useState} from 'react';
import {Button, Grid, Snackbar, TextField} from '@material-ui/core';
import styles from './login.module.css'
import {SubmitHandler, useForm} from 'react-hook-form';
import {Title} from '../Title/Title';
import {FormValues} from '../Signup/Signup';
import {Alert} from '@mui/material';

export type PropsTypeLogin = {
    title: string
}


export const Login = ({title}: PropsTypeLogin) => {
    const [open, setOpen] = useState(false);

    const getUser = (email: string, password: number) => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (email === user.email && password === user.password) {
            setOpen(true);
        }
    }

    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<FormValues>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        getUser(data.email, data.password);
        reset();
    }


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const alertBar = <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
            This is a success message!
        </Alert>
    </Snackbar>

    return (
        <Grid className={styles.wrapper} container direction={'column'}>
            <Title title={title}/>
            <TextField className={styles.email} label="Email" variant="standard" margin="normal" type={'email'}
                       {...register('email', {
                           required: 'Поле обязательно к заполнению',
                           minLength: {
                               value: 2,
                               message: 'Минимум 2 символа'
                           },
                           pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/
                       })} error={!!errors?.email}
                       helperText={errors?.email?.message ? `${errors.email.message}` : ''}/>
            <TextField className={styles.password} label="Password" variant="standard" type={'password'} margin="normal"
                       {...register('password', {
                           pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                           required: 'Поле обязательно к заполнению',
                           minLength: {
                               value: 6,
                               message: 'Минимум 6 символов, одна за главная буква, одна маленькая, спец. символ, цифра'
                           },
                       })} error={!!errors?.password}
                       helperText={errors?.password?.message ? `${errors.password.message}` : ''}/>
            <Button className={styles.btn} variant="contained" color={'secondary'}
                    onClick={handleSubmit(onSubmit)} disabled={!isValid}>Enter</Button>
            {alertBar}
        </Grid>
    )
}
