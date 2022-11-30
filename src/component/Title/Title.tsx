import React from 'react';
import {Typography} from '@material-ui/core';

export type PropsTypeTitle = {
    title: string
}

export const Title = ({title}: PropsTypeTitle) => {
    return <Typography variant={'h1'} align={'center'}>{title}</Typography>
}