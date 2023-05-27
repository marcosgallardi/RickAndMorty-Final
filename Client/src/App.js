import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import styled from "./App.module.css";
import { Cards } from "./components/Cards/Cards.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { About } from "./components/About/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import { Form } from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  let navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { username, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${username}&password=${password}`
      );

      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    const { data } = await axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    );

    if (data.name) {
      characters.find((element) => element.id === data.id) === undefined
        ? setCharacters((characters) => [...characters, data])
        : window.alert("No puede usar mas de una tarjeta igual");
    } else {
      window.alert("No hay personajes con ese ID");
    }
  };

  const random = () => {
    let numeroRandom = Math.floor(Math.random() * 826);
    onSearch(numeroRandom);
  };

  const onClose = (id) => {
    setCharacters(characters.filter((element) => element.id !== id));
  };

  let location = useLocation();

  return (
    <div className={styled.background}>
      <div>
        {location.pathname !== "/" ? (
          <NavBar onSearch={onSearch} random={random} logout={logout} />
        ) : undefined}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Form login={login} />} />

          <Route
            path="/Home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Favorites" element={<Favorites />} />

          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
