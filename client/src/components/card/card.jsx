import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDeleteUserMutation } from '../../redux/service/user-service'
import { useEditUserMutation } from '../../redux/service/user-service'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`

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
      <CustomLink to={`/user-detail/${id}`}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h4'>{description}</Typography>
      </CustomLink>
      <Button onClick={() => deleteMutationFn(id)} variant='contained'>delete</Button>
      <Button onClick={() => editItem(id)} variant='contained'>edit</Button>
    </Stack>
  )
}
