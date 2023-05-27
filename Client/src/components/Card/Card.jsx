import { connect } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import styled from "../Card/Card.module.css";

function Card({
  id,
  name,
  species,
  gender,
  image,
  origin,
  status,
  onClose,
  addFavorites,
  deleteFavorites,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      deleteFavorites(id);
    } else {
      setIsFav(true);
      addFavorites({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        origin,
        status,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <>
      <div className={styled.card}>
        <img src={image} alt="" />

        <div className={styled.espacio}>
          <Link to={`/detail/${id}`}>
            <a className={styled.letra}>{name}</a>
          </Link>

          <p>
            <span className={styled.black}>Especie:</span> {species}
          </p>
          <p>
            <span className={styled.black}>Genero:</span> {gender}
          </p>
          <button className={styled.boton} onClick={onClose}>
            X
          </button>

          {isFav ? (
            <button onClick={handleFavorite} className={styled.boton}>
              ❤️
            </button>
          ) : (
            <button onClick={handleFavorite} className={styled.boton}>
              🤍
            </button>
          )}
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => {
      dispatch(addFavorites(character));
    },

    deleteFavorites: (id) => {
      dispatch(deleteFavorites(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
