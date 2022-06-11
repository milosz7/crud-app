import { Form, Button } from 'react-bootstrap';
import FormBase from '../../common/FormBase/FormBase';
import React, { useState } from 'react';
import { addPost } from '../../../store/slices/postsSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router';
import shortid from 'shortid';
import { convertDate } from '../../../helpers/convertDate'

const AddPostForm = () => {
  let navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');

  const addNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addPost({
        id: shortid(),
        title: title,
        author: author,
        publishedDate: convertDate(date),
        shortDescription: desc,
        content: content,
      })
    );
    navigate('/');
  };

  return (
    <Form onSubmit={addNewPost} className="my-4">
      <FormBase
        title="Title"
        type="text"
        placeholder="Enter title"
        id="postTitle"
        onChange={(e) => setTitle(e.target.value)}
        isValid={title ? true : false}
      />
      <FormBase
        title="Author"
        type="text"
        placeholder="Enter author"
        id="postAuthor"
        onChange={(e) => setAuthor(e.target.value)}
        isValid={author ? true : false}
      />
      <FormBase
        title="Published"
        type="date"
        placeholder="Enter date"
        id="postPublishDate"
        onChange={(e) => setDate(e.target.value)}
        isValid={date ? true : false}
      />
      <FormBase
        type="text"
        title="Description"
        as="textarea"
        rows={5}
        placeholder="Enter a short description of a post"
        id="postDescription"
        onChange={(e) => setDesc(e.target.value)}
        isValid={desc ? true : false}
      />
      <FormBase
        title="Content"
        rows={5}
        as="textarea"
        placeholder="Enter the text content of a post"
        id="postContent"
        onChange={(e) => setContent(e.target.value)}
        isValid={content ? true : false}
        type="text"
      />
      <Button type="submit" variant="primary">
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;
