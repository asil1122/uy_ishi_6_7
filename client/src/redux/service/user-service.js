import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaceQuery } from "../../config/create-base-query";

export const userService = createApi({
reducerPath: "userService",
baseQuery: createBaceQuery(),
tagTypes: ["User"],
endpoints: (build) => ({
    getUsers: build.query({
        query: (page = 1) => {
            return {
                url: `/todos`,
                params: {
                    _limit: 4,
                    _page: page,
                }
            }
        },
        transformResponse: (data, res) => {
            let countData = res?.response.headers.get('X-Total-count');
            if (countData % 4 != 0){
                return { data, pageSize: Math.round((Number(countData) + 1) / 4)}
            }
            return { data, pageSize: Math.round(Number(countData)/4) }
        },
        providesTags: ['User'],
    }),
    createUser: build.mutation({
        query: (data) => ({
            url: '/todos',
            method: "POST",
            body: data,
        }),
        invalidatesTags: ['User']
    }),
    deleteUser: build.mutation({
        query: (id) => ({
            url: `/todos/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: ['User']
    }),
    editUser: build.mutation({
        query: (data) => ({
            url: `/todos/${data.id}`,
            method: "PATCH",
            body: data
        }),
        invalidatesTags: ['User']
    }),
    getUserById: build.query({
        query: (id) => ({
            url: `/todos/${id}`,
        }),
    })
})
})

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation, useEditUserMutation, useGetUserByIdQuery} = userService;