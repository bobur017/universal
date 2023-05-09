import React, {FormEvent, useEffect, useMemo, useState} from 'react';
import {
    useAddPostMutation,
    useDeletePostMutation,
    useEditePostMutation,
    useGetPostsQuery
} from "../reducers/posts/UsersApi";
import {Button, Carousel, Form, Modal} from "react-bootstrap";
import {IPost} from "../reducers/posts/PostDTO";

function Posts() {
    const postDTO = {
        "id": '',
        "title": '',
        "body": ''
    }
    const [show, setShow] = useState(false);
    const [ipostState, setIpostState] = useState(postDTO);

    const handleClose = () => setShow(false);
    const handleShow = (data: any) => {
        if (data) {
            setIpostState(data);
        } else {
            setIpostState(postDTO);
        }
        setShow(true)
    };
    const {data: IPost} = useGetPostsQuery("")
    const [addPost, {isLoading, data, isError}] = useAddPostMutation();
    const [deletePost, deletes] = useDeletePostMutation();
    const [editePostFunc, editePost] = useEditePostMutation();
    useEffect(() => {
        console.log(data, "data")
    }, [data]);

    const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ipostState.id) {
            // @ts-ignore
            editePostFunc(ipostState);
        } else {
            addPost({body: ipostState.body, title: ipostState.title} as IPost);
        }
        handleClose();
    }

    return (
        <div>
            <div>
                <button className={"rounded-2xl bg-cyan-300 p-3 border-solid border-b-emerald-600 border-2"}
                        onClick={() => handleShow(null)}>ADD Post
                </button>
            </div>
            <div className={'grid grid-cols-4 gap-4 p-2'}>
                {
                    IPost?.map((item, index) =>
                        <div key={index}
                             className={"text-center border-solid border-2 border-sky-500 mb-2 rounded-2xl"}>
                            <div onClick={() => handleShow(item)}>
                                {item.body}
                            </div>
                            <div>
                                <button onClick={() => deletePost(item)}
                                        className={"border-solid border-2 border-amber-600 rounded-2xl bg-amber-200"}>
                                    delete
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={(e) => submitPost(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Body</Form.Label>
                        <Form.Control name={'body'} value={ipostState.body} onChange={(e) => setIpostState({
                            ...ipostState,
                            [e.target.name]: e.target.value
                        })}/>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name={'title'} value={ipostState.title} onChange={(e) => setIpostState({
                            ...ipostState,
                            [e.target.name]: e.target.value
                        })}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default Posts;
