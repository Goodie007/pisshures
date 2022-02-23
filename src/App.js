import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Explore from './Screens/Explore';
import Categories from './Screens/Categories';
import Nature from './Screens/Nature';
import Arts from './Screens/Arts';
import Animals from './Screens/Animals';
import History from './Screens/History';
import Foods from './Screens/Foods';
import Fashion from './Screens/Fashion';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route index element={<HomePage />} />
           <Route path="explore" element={<Explore />} />
           <Route path="categories" element={<Categories />} />
           <Route path="nature" element={<Nature />} />
           <Route path="arts" element={<Arts />} />
           <Route path="animals" element={<Animals />} />
           <Route path="history" element={<History />} />
           <Route path="foods" element={<Foods />} />
           <Route path="fashion" element={<Fashion />} />
           <Route path="login" element={<Login />} />
           <Route path="signup" element={<Signup />} />
         </Routes>
      </BrowserRouter> 
      <HomePage />
       {/* <Login />  */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;