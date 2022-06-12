import React from 'react';
import { addPost, Post } from '../../../store/slices/postsSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const addNewPost = (e: React.FormEvent, postData: Post) => {
    e.preventDefault();
    dispatch(addPost({ ...postData }));
    navigate('/');
  };

  return <PostForm submitHandler={addNewPost} buttonText="Add post" />;
};

export default AddPostForm;
