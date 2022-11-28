import React from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import styles from './form.module.css'
import {useForm} from 'react-hook-form';


export const Form = () => {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: 'onBlur'});
    const onSubmit = (data: any) => {
        reset();
    }

    return (
        <Grid className={styles.wrapper} container direction={'column'}>
            <TextField className={styles.email} label="Email" variant="standard" margin="normal" type={'text'}
                       {...register('Email', {
                           required: 'Поле обязательно к заполнению',
                           minLength: {
                               value: 2,
                               message: 'Минимум 2 символа'
                           },
                           pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/
                       })} error={!!errors?.Email}
                       helperText={errors?.Email?.message ? `${errors.Email.message}` : ''}/>
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
                    onClick={handleSubmit(onSubmit)} disabled={!isValid}>Outlined</Button>
        </Grid>
    )
}
