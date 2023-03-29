import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Community from './pages/Community';
import CoffeeChat from './pages/CoffeeChat';
import MyProfile from './pages/MyProfile';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/community" element={<Community />} />
        <Route path="/coffeeChat" element={<CoffeeChat />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
