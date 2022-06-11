import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

type Post = {id: string, title: string, shortDescription: string, content: string, publishedDate: string, author: string}

const initialState = [
  {
    id: '1',
    title: 'Article title',
    shortDescription: 'Short description of the article...',
    content: 'Main content of the article',
    publishedDate: '02-02-2022',
    author: 'John Doe'
  },
  {
    id: '2',
    title: 'Coffee vs Tea',
    shortDescription: 'Comparision of the most popular hot beverages',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ornare dolor, mattis malesuada dui tempor vitae. Ut urna urna, sodales sit amet purus non, vulputate lobortis est. Sed at.',
    publishedDate: '02-06-2022',
    author: 'Mike Smith'
  },
  {
    id: '3',
    title: 'Football Legends',
    shortDescription: 'Taking a look at the best football players of the 21st century',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ornare dolor, mattis malesuada dui tempor vitae. Ut urna urna, sodales sit amet purus non, vulputate lobortis est. Sed at.',
    publishedDate: '05-04-2021',
    author: 'Jane Legett'
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removePost: (state, action: PayloadAction<string>) => {
      return [...state.filter(post => post.id !== action.payload)]
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload)
    }
  }
});

export const selectAllPosts = (state: RootState) => state.posts;

export const selectPostById = (state: RootState, id: string | undefined) => state.posts.filter(post => post.id === id)

export const { removePost, addPost } = postsSlice.actions;

export default postsSlice.reducer;