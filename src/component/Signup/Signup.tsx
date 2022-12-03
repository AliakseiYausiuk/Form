import React from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import styles from '../Login/login.module.css'
import {useForm, SubmitHandler} from 'react-hook-form';
import {Title} from '../Title/Title';

export type PropsTypeSinup = {
    title: string
}
export type FormValues = {
    email: string
    password: number
}


export const Signup = ({title}: PropsTypeSinup) => {
    console.log(localStorage.getItem('user'))

    const setLocalStorage = (email: string, password: number) => {

        const user = {
            email,
            password
        }
        localStorage.setItem('user', JSON.stringify(user));
    }

    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<FormValues>({mode: 'onBlur'});
    const onSubmit: SubmitHandler<FormValues> = (data: any) => {
        setLocalStorage(data.email, data.password);
        reset();
    }

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
                    onClick={handleSubmit(onSubmit)} disabled={!isValid}>Save</Button>
        </Grid>
    )
}
