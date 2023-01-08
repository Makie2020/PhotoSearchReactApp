import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/navbar/navbar';
import HomePage from './components/pages/HomePage/homePage';
import SearchPage from './components/pages/SearchPage/searchPage';
import FavoritePage from './components/pages/FavoritePage/favoritePhotosPage';
import Footer from './components/footer/footer';
import "./sass/mystyles.scss"

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>  
          <Route exact path='PhotoSearchReactApp/' element={< HomePage />}></Route>  
          <Route exact path='PhotoSearchReactApp/search' element={< SearchPage />}></Route>  
          <Route exact path='PhotoSearchReactApp/favorite' element={< FavoritePage />}></Route>  
        </Routes>
        <Footer/>  
    </Router>
  );
}

export default App;

