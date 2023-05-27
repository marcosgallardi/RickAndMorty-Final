import { useState } from 'react';
import styled from '../SearchBar/SearchBar.module.css'

export function SearchBar({ onSearch, random }) {


   const [character, setCharacter] = useState(0);

   const handleChange = (event) => {
      setCharacter(event.target.value)
   };


   return (
      <div className={styled.container}>
         <input className={styled.inputs} type='search' onChange={handleChange} />
         <button className={styled.boton} onClick={() => onSearch(character)}>Agregar</button>
         <button className={styled.boton} onClick={(random)}>Tarjeta Random</button>

      </div>
   );
}
