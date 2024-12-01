import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import BaseEducPage from './BaseEducPage/BaseEducPage';
import SignupPage from './Signup/Signup';
import NotFoundPage from './NotFoundPage/NotFoundPage';


const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/main' element={<MainPage/>}></Route>
        <Route path='/base' element={<BaseEducPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
