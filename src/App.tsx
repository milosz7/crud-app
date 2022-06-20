import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './components/pages/Post/Post';
import Home from './components/pages/Home/Home';
import Error from './components/pages/Error/Error';
import Edit from './components/pages/Edit/Edit';
import Add from './components/pages/Add/Add';
import About from './components/pages/About/About';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer'
import { Container } from 'react-bootstrap';



const App = () => {

  useEffect(() => {
    document.title = 'CRUD App.'
  }, [])

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='post'>
          <Route path='add' element={<Add />}></Route>
          <Route path=':id' element={<Post />}></Route>
          <Route path='edit/:id' element={<Edit />}></Route>
        </Route>
        <Route path='categories' element={<Categories />}></Route>
        <Route path='categories/:category' element={<Category />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
