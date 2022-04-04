import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Compnents/Blog/Blog';
import Dashbord from './Compnents/Dashbord/Dashbord';
import Header from './Compnents/Header/Header';
import Home from './Compnents/Home/Home';
import NotFound from './Compnents/NotFound/NotFound';
import Review from './Compnents/Review/Review';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Review />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
