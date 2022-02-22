import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Explore from './Screens/Explore';
import Categories from './Screens/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route index element={<HomePage />} />
           <Route path="explore" element={<Explore />} />
           <Route path="categories" element={<Categories />} />
         </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;