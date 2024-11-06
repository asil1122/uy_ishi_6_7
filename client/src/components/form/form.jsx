import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUserMutation } from '../../redux/service/user-service';
import { Button, Stack, TextField } from '@mui/material';

export const Form = () => {
    const { handleSubmit, register, reset } = useForm();
    const [MutationFn] = useCreateUserMutation();

    const submit = (data) => {
        MutationFn(data).unwrap().then((res) => {})
        reset();
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <Stack gap={'20px'} mb={'40px'}>
                <TextField placeholder='Title' {...register('title')}/>
                <TextField placeholder='Description' {...register('description')}/>
                <Button type='submit' variant='contained'>Send</Button>
            </Stack>
        </form>
    </div>
  )
}
