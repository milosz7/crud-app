import { Form, Button } from 'react-bootstrap';
import FormBase from '../../common/FormBase/FormBase';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { convertDate } from '../../../helpers/convertDate';

interface Props {
  submitHandler: Function;
  buttonText: string;
  id?: string;
  baseTitle?: string;
  baseAuthor?: string;
  baseDate?: string;
  baseDesc?: string;
  baseContent?: string;
}

const PostForm = ({
  submitHandler,
  id,
  baseTitle,
  baseAuthor,
  baseDate,
  baseDesc,
  baseContent,
  buttonText,
}: Props) => {
  const [title, setTitle] = useState(baseTitle ? baseTitle : '');
  const [author, setAuthor] = useState(baseAuthor ? baseAuthor : '');
  const [date, setDate] = useState(baseDate ? convertDate(baseDate) : '');
  const [desc, setDesc] = useState(baseDesc ? baseDesc : '');
  const [content, setContent] = useState(baseContent ? baseContent : '');

  const postData = {
    id: id ? id : shortid(),
    title: title,
    author: author,
    publishedDate: convertDate(date),
    shortDescription: desc,
    content: content,
  };

  useEffect(() => {
    const dateInput: HTMLInputElement = document.querySelector('input[type^="date"')!;
    dateInput.max = new Date().toISOString().slice(0, 10);
  });

  return (
    <Form onSubmit={(e) => submitHandler(e, postData)} className="my-4">
      <FormBase
        title="Title"
        type="text"
        placeholder="Enter title"
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        isValid={title ? true : false}
      />
      <FormBase
        title="Author"
        type="text"
        placeholder="Enter author"
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        isValid={author ? true : false}
      />
      <FormBase
        title="Published"
        type="date"
        placeholder="Enter date"
        id="postPublishDate"
        value={date}
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
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        isValid={desc ? true : false}
      />
      <FormBase
        title="Content"
        rows={5}
        as="textarea"
        placeholder="Enter the text content of a post"
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        isValid={content ? true : false}
        type="text"
      />
      <Button type="submit" variant="primary">
        {buttonText}
      </Button>
    </Form>
  );
};

export default PostForm;
