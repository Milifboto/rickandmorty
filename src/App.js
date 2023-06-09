import React from 'react';
import { useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Detail from "./views/detail/Detail";
import About from "./views/about/About";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import ErrorPage from './views/error/ErrorPage';
import Favorites from "../src/components/Favorites/Favorites"
import "./App.css";

function App() {

  const [characters, setCharacters] = useState([]);

  
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }
  
  function onClose(id) {
   let deleted = characters.filter(character => character.id !== Number(id))

   setCharacters(deleted);
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
    <Routes>
      <Route path="/" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </div>
  );
}
export default App;
