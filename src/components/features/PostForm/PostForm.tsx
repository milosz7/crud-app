import { Form, Button } from 'react-bootstrap';
import FormBase from '../../common/FormBase/FormBase';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import shortid from 'shortid';
import { convertDate } from '../../../helpers/convertDate';
import FormQuill from '../../common/FormQuill/FormQuill';

export interface FormData {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  shortDescription: string;
  content: string;
}

interface Props {
  submitHandler: SubmitHandler<FormData>;
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
  const {register, handleSubmit: validate, formState: { errors } } = useForm<FormData>();
  const [content, setContent] = useState(baseContent || '');

  const [data, setData] = useState<FormData>({
    id: id ? id : shortid(),
    title: baseTitle ? baseTitle : '',
    author: baseAuthor ? baseAuthor : '',
    publishedDate: baseDate ? baseDate : '',
    shortDescription: baseDesc ? baseDesc : '',
    content: content,
  })

  useEffect(() => {
    setData({
      ...data,
      content: content,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[content])

  const updateData = (prop: keyof typeof data, value: string) => {
    setData({
      ...data,
      [prop]: value
    })
  }
  return (
    
    <Form onSubmit={validate(submitHandler)} className="my-4">
      <FormBase
        title="Title"
        type="text"
        placeholder="Enter title"
        id="postTitle"
        label='title'
        value={data.title}
        onChange={(e) => updateData('title', e.target.value)}
        register={register}
        required
        errorMsg={errors.title && "Field is required"}
      />
      <FormBase
        title="Author"
        type="text"
        placeholder="Enter author"
        id="postAuthor"
        label='author'
        value={data.author}
        onChange={(e) => updateData('author', e.target.value)}
        register={register}
        required
      />
      <FormBase
        title="Published"
        type="date"
        max={new Date().toISOString().slice(0, 10)}
        placeholder="Enter date"
        id="postPublishDate"
        label='publishedDate'
        value={convertDate(data.publishedDate)}
        onChange={(e) => updateData('publishedDate', convertDate(e.target.value))}
        register={register}
        required
      />
      <FormBase
        title="Description"
        type="text"
        as="textarea"
        rows={5}
        placeholder="Enter a short description of a post"
        id="postDescription"
        label='shortDescription'
        value={data.shortDescription}
        onChange={(e) => updateData('shortDescription', e.target.value)}
        register={register}
        required
      />
      <FormQuill title="Content" value={content} onChange={setContent} />
      <Button type="submit" variant="primary">
        {buttonText}
      </Button>
    </Form>
  );
};

export default PostForm;
