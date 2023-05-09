import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "../../allFunc/AllFuncs";
import {IPost, IPosts} from "./PostDTO";

export const postsApi = createApi({
    reducerPath: "posts/api",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl()
    }),
    tagTypes: ["addPost"],
    endpoints: build => ({
        getPosts: build.query<IPost[], any>({
            query: (params) => ({
                url: "/posts"
            }),
            providesTags: ["addPost"]
        }),
        addPost: build.mutation<IPost, IPost>({
            query: (data) => ({
                url: "/posts",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["addPost"]
        }),
        editePost: build.mutation<IPost, IPost>({
            query: (data) => ({
                url: "/posts/"+data.id,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["addPost"]
        }),

        deletePost: build.mutation<IPost, IPost>({
            query: (data) => ({
                url: "/posts/" + data.id,
                method: "DELETE",
            }),
            invalidatesTags: ["addPost"]
        }),
    })
})
export const {useGetPostsQuery, useAddPostMutation,useEditePostMutation,useDeletePostMutation} = postsApi
