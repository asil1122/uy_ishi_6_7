import React from 'react'
import { useGetUsersQuery } from '../../redux/service/user-service';
import { IconButton, Skeleton, Stack } from '@mui/material';
import { Card } from '../../components/card';
import { Form } from '../../components/form';

export const Users = () => {
    const [page, setPage] = React.useState(1);
    const { data, isLoading, isFetching } = useGetUsersQuery(page)

    const change = (newPage) => {
        setPage(newPage);
    }

  return (
    <Stack>
        <Form/>
        {isLoading || isFetching ? (
            <div>
                <Stack gap={'2px'} mb={'20px'}>
                    <Skeleton height={'72px'} width={'100%'}/>
                    <Skeleton height={"42px"} width={"100%"} />
                    <Skeleton height={"37px"} width={"100%"} />
                </Stack>
                <Stack gap={'2px'} mb={'20px'}>
                    <Skeleton height={'72px'} width={'100%'}/>
                    <Skeleton height={"42px"} width={"100%"} />
                    <Skeleton height={"37px"} width={"100%"} />
                </Stack>
                <Stack gap={'2px'} mb={'20px'}>
                    <Skeleton height={'72px'} width={'100%'}/>
                    <Skeleton height={"42px"} width={"100%"} />
                    <Skeleton height={"37px"} width={"100%"} />
                </Stack>
                <Stack gap={'2px'} mb={'20px'}>
                    <Skeleton height={'72px'} width={'100%'}/>
                    <Skeleton height={"42px"} width={"100%"} />
                    <Skeleton height={"37px"} width={"100%"} />
                </Stack>
            </div>
        ): (data?.data?.map((item) => <Card key={item.id} {...item}/>))}

        {Array(data?.pageSize)?.fill(null)?.map((_, index) => (
            <Stack  key={index} direction={'row'} justifyContent={'center'}>
            <IconButton onClick={() => change(index + 1)} sx={{ bgcolor: `${page == index + 1 ? 'red' : ''}`}}>
                {index + 1}
            </IconButton>
            </Stack>
        ))}
    </Stack>
)
}
