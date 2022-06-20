import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  publishedDate: string;
  category: string;
  author: string;
};

const initialState = [
  {
    id: '1',
    title: 'Article title',
    shortDescription: 'Short description of the article...',
    content: 'Main content of the article',
    publishedDate: '02-02-2022',
    category: 'movies',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'Coffee vs Tea',
    shortDescription: 'Comparision of the most popular hot beverages',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ornare dolor, mattis malesuada dui tempor vitae. Ut urna urna, sodales sit amet purus non, vulputate lobortis est. Sed at.',
    publishedDate: '02-06-2022',
    category: 'news',
    author: 'Mike Smith',
  },
  {
    id: '3',
    title: 'Football Legends',
    shortDescription: 'Taking a look at the best football players of the 21st century',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ornare dolor, mattis malesuada dui tempor vitae. Ut urna urna, sodales sit amet purus non, vulputate lobortis est. Sed at.',
    publishedDate: '05-04-2021',
    category: 'sport',
    author: 'Jane Legett',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removePost: (state, action: PayloadAction<string>) => {
      return state.filter((post) => post.id !== action.payload);
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    editPost: (state, action: PayloadAction<Post>) => {
      return state.map((post) => (post.id === action.payload.id ? action.payload : post));
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const selectPostByCategory = (state: RootState, category: string) =>
  state.posts.filter((post) => category === post.category);

export const selectPostById = (state: RootState, id: string | undefined) =>
  state.posts.filter((post) => post.id === id);

export const { removePost, addPost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
