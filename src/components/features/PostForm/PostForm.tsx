import { Form, Button } from 'react-bootstrap';
import { useState, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormBase from '../../common/FormBase/FormBase';
import shortid from 'shortid';
import { convertDate } from '../../../helpers/convertDate';
import FormQuill from '../../common/FormQuill/FormQuill';
import FormError from '../../common/FormError/FormError';
import FormSelectBase from '../../common/FormSelectBase/FormSelectBase';

export interface FormData {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  category: string;
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
  baseCategory?: string;
}

const PostForm = ({
  submitHandler,
  id,
  baseTitle,
  baseAuthor,
  baseDate,
  baseCategory,
  baseDesc,
  baseContent,
  buttonText,
}: Props) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm<FormData>();
  const [content, setContent] = useState(baseContent || '');
  const [errorQuill, setErrorQuill] = useState(false);

  const [data, setData] = useState<FormData>({
    id: id ? id : shortid(),
    title: baseTitle ? baseTitle : '',
    author: baseAuthor ? baseAuthor : '',
    publishedDate: baseDate ? baseDate : '',
    category: baseCategory ? baseCategory : '',
    shortDescription: baseDesc ? baseDesc : '',
    content: content,
  });

  const validateQuill = () => {
    if (content.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
      setErrorQuill(true);
    } else {
      setErrorQuill(false);
    }
  };

  const handleSubmit = () => {
    if (!errorQuill) {
      submitHandler(data);
    }
  };

  useMemo(() => {
    setData({
      ...data,
      content: content,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const updateData = (prop: keyof typeof data, value: string) => {
    setData({
      ...data,
      [prop]: value,
    });
  };
  return (
    <Form onSubmit={validate(handleSubmit)} className="my-4">
      <FormBase
        title="Title"
        type="text"
        placeholder="Enter title"
        id="postTitle"
        label="title"
        value={data.title}
        onChange={(e) => updateData('title', e.target.value)}
        register={register}
        minLength={3}
        required
        errorMsg={errors.title && <FormError message="Title is too short (min: 3)" />}
      />
      <FormBase
        title="Author"
        type="text"
        placeholder="Enter author"
        id="postAuthor"
        label="author"
        value={data.author}
        onChange={(e) => updateData('author', e.target.value)}
        register={register}
        minLength={3}
        required
        errorMsg={errors.author && <FormError message="Author is too short (min: 3)" />}
      />
      <FormBase
        title="Published"
        type="date"
        max={new Date().toISOString().slice(0, 10)}
        placeholder="Enter date"
        id="postPublishDate"
        label="publishedDate"
        value={convertDate(data.publishedDate)}
        onChange={(e) => updateData('publishedDate', convertDate(e.target.value))}
        register={register}
        minLength={10}
        required
        errorMsg={errors.publishedDate && <FormError message="Field is required" />}
      />
      <FormSelectBase
        title="Category"
        selectedCategory={data.category || ''}
        label="category"
        register={register}
        required
        onChange={(e) => updateData('category', e.target.value)}
        errorMsg={errors.category && <FormError message="Field is required" />}
      />
      <FormBase
        title="Description"
        type="text"
        as="textarea"
        rows={5}
        placeholder="Enter a short description of a post"
        id="postDescription"
        label="shortDescription"
        value={data.shortDescription}
        onChange={(e) => updateData('shortDescription', e.target.value)}
        register={register}
        minLength={15}
        required
        errorMsg={
          errors.shortDescription && <FormError message="Description is too short (min: 15)" />
        }
      />
      <FormQuill title="Content" value={content} onChange={setContent} />
      {errorQuill && <FormError message="Please enter any content" />}
      <Button className="mt-3" type="submit" onClick={() => validateQuill()} variant="primary">
        {buttonText}
      </Button>
    </Form>
  );
};

export default PostForm;
