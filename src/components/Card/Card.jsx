import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({character, onClose, addFav, removeFav, myFavorites }) {
  
  const {id, name, status, species, gender, origin, image} = character;
  
  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(false);

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else{
      setIsFav(true)
      addFav({id, name, status, species, gender, origin, image})
    }
  }

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className={style.cardContainer}>

    <button onClick={handleFavorite}> {isFav ? "❤️" : "🤍"} </button>

      <div className={style.imageContainer}>
        <button
          className={style.closeButton}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <img
          className={style.characterImage}
          onClick={navigateHandler}
          src={image}
          alt={name}
        />
        <h2 className={style.name}>{name}</h2>
      </div>
      
      <div className={style.atributes}>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <div className={style.origin}>
        <h2>{origin.name}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
   )(Card);
