import React from 'react'
import { useGetUserByIdQuery } from '../../redux/service/user-service'
import { Stack, Typography } from '@mui/material'
export const UserDetail = () => {
  const { data, isLoading} = useGetUserByIdQuery(1)
  
  return (
    <div>
      {isLoading ? <h1>Loading...</h1> :  
        <Stack>
          <Typography variant='h2'>{data?.title}</Typography>
          <Typography variant='h4'>{data?.description}</Typography>
        </Stack>
      }
    </div>

  )
}
