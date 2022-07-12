import logo from './logo.svg';
import './App.css';
import ShowBlog from './blog-componentes/ShowBlogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreateBlog from './blog-componentes/CreateBlog';
import EdirBlog from './blog-componentes/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ShowBlog />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/editar/:id' element={<EdirBlog />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;