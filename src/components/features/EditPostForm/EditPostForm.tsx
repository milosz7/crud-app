import PostForm from '../PostForm/PostForm';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { editPost, Post } from '../../../store/slices/postsSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectPostById } from '../../../store/slices/postsSlice';
import { SubmitHandler } from "react-hook-form"

const EditPostForm = () => {
  let { id } = useParams();

  const [postData] = useAppSelector((state) => selectPostById(state, id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const postEdit: SubmitHandler<Post> = (postData) => {
    dispatch(editPost({ ...postData }));
    navigate('/');
  };
  if (!postData) return <Navigate to="/" />;
  return (
    <PostForm
      submitHandler={postEdit}
      buttonText="Edit post"
      id={postData.id}
      baseTitle={postData.title}
      baseAuthor={postData.author}
      baseDate={postData.publishedDate}
      baseCategory={postData.category}
      baseDesc={postData.shortDescription}
      baseContent={postData.content}
    />
  );
};

export default EditPostForm;
