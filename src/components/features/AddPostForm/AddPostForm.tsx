import { addPost, Post } from '../../../store/slices/postsSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const addNewPost = (data: Post) => {
    dispatch(addPost({ ...data}));
    navigate('/');
  };

  return <PostForm submitHandler={addNewPost} buttonText="Add post" />;
};

export default AddPostForm;
