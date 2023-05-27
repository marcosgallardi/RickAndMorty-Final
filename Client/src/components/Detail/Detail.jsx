import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styled from '../Detail/Detail.module.css';

export const Detail = () => {

    const { detailId } = useParams();

    const navigate = useNavigate();

    const [character, setCharacter] = useState({
        name: "",
        status: "",
        specie: "",
        gender: "",
        origin: "",
        image: ""
    })

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter({
                        name: char.name,
                        status: char.status,
                        specie: char.specie,
                        gender: char.gender,
                        origin: char.origin.name,
                        image: char.image
                    });
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    const volverHome = () => {
        navigate("/home")
    }



    return (
        <>

            <div className={styled.row}>
                <button onClick={volverHome} className={styled.boton}>Regresar</button>
                <div className={styled.col}>
                    {character.name && <h2>Nombre: <span>{character.name}</span></h2>}
                    {character.status && <h4>STATUS: <span>{character.status}</span></h4>}
                    {character.specie && <h4>ESPECIE: <span>{character.specie}</span></h4>}
                    {character.gender && <h4>GENERO: <span>{character.gender}</span></h4>}
                    {character.origin && <h4>ORIGIN: <span>{character.origin}</span></h4>}
                </div>
                <div className={styled.col}>
                    {character.origin && <img src={character.image} alt="image" />}
                </div>
            </div>
        </>
    )
}




