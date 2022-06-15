import { Form, Button } from 'react-bootstrap';
import FormBase from '../../common/FormBase/FormBase';
import React, { useState } from 'react';
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

  const [data, setData] = useState({
    id: id ? id : shortid(),
    title: baseTitle ? baseTitle : '',
    author: baseAuthor ? baseAuthor : '',
    publishedDate: baseDate ? convertDate(baseDate) : '',
    shortDescription: baseDesc ? baseDesc : '',
    content: baseContent ? baseContent : ''
  })

  const updateData = (prop: keyof typeof data, value: string) => {
    setData({
      ...data,
      [prop]: value
    })
  }

  return (
    <Form onSubmit={(e) => submitHandler(e, data)} className="my-4">
      <FormBase
        title="Title"
        type="text"
        placeholder="Enter title"
        id="postTitle"
        value={data.title}
        onChange={(e) => updateData('title', e.target.value)}
        isValid={data.title ? true : false}
      />
      <FormBase
        title="Author"
        type="text"
        placeholder="Enter author"
        id="postAuthor"
        value={data.author}
        onChange={(e) => updateData('author', e.target.value)}
        isValid={data.author ? true : false}
      />
      <FormBase
        title="Published"
        type="date"
        max={new Date().toISOString().slice(0, 10)}
        placeholder="Enter date"
        id="postPublishDate"
        value={data.publishedDate}
        onChange={(e) => updateData('publishedDate', convertDate(e.target.value))}
        isValid={data.publishedDate ? true : false}
      />
      <FormBase
        type="text"
        title="Description"
        as="textarea"
        rows={5}
        placeholder="Enter a short description of a post"
        id="postDescription"
        value={data.shortDescription}
        onChange={(e) => updateData('shortDescription', e.target.value)}
        isValid={data.shortDescription ? true : false}
      />
      <FormBase
        title="Content"
        rows={5}
        as="textarea"
        placeholder="Enter the text content of a post"
        id="postContent"
        value={data.content}
        onChange={(e) => updateData('content', e.target.value)}
        isValid={data.content ? true : false}
        type="text"
      />
      <Button type="submit" variant="primary">
        {buttonText}
      </Button>
    </Form>
  );
};

export default PostForm;
