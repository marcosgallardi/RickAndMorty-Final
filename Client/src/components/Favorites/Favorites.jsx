import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrderCards = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));

      case "filter":
        return dispatch(filterCards(value));

      default:
        break;
    }
  };

  return (
    <div>
      {myFavorites.map(
        ({ id, name, species, gender, image, origin, status }) => {
          return (
            <Card
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin}
              status={status}
            />
          );
        }
      )}

      <div>
        <select name="order" id="" onChange={handleOrderCards}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name="filter" id="" onChange={handleOrderCards}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Descendente">Genderless</option>
          <option value="Descendente">unknown</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
