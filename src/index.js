import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './userContext';
import './CSS/index.css';
import Navbar from './Navbar';
import Home from './Home';
import App from './App';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Private from './Private';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <UserContextProvider>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<App/>}/>
    <Route path='Inscription' element={<Inscription/>}/>
    <Route path='private-home' element={<Home/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='connexion' element={<Connexion/>}/>
    <Route path='/private' element={<Private/>}>
        <Route path="/private/private-home" element={<Home/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
