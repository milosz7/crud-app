import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './components/pages/Post/Post';
import Home from './components/pages/Home/Home';
import Error from './components/pages/Error/Error';
import Edit from './components/pages/Edit/Edit';
import Add from './components/pages/Add/Add';
import About from './components/pages/About/About';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='post'>
        <Route path='add' element={<Add />}></Route>
        <Route path=':id' element={<Post />}></Route>
        <Route path='edit/:id' element={<Edit />}></Route>
      </Route>
      <Route path='about' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
  );
}

export default App;
