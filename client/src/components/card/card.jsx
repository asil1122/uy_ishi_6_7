import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDeleteUserMutation } from '../../redux/service/user-service'
import { useEditUserMutation } from '../../redux/service/user-service'

export const Card = ({ title, description, id }) => {
  const [deleteMutationFn] = useDeleteUserMutation();
  const [editMutationFn] = useEditUserMutation();

  
  const editItem = () => {
    const editTitle = prompt('title');
    const editDescription = prompt('description');
    editMutationFn({ id, title: editTitle, description: editDescription });
  };

  return (
    <Stack>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='h4'>{description}</Typography>
      <Button onClick={() => deleteMutationFn(id)} variant='contained'>delete</Button>
      <Button onClick={() => editItem(id)} variant='contained'>edit</Button>
    </Stack>
  )
}
