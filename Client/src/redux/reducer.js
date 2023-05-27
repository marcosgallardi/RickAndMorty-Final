import {ADD_FAVORITES,DELETE_FAVORITES,FILTER,ORDER} from "./actionsType"
let inicialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = inicialState,{type,payload})  => {
    switch (type) {

        case ADD_FAVORITES:
            return { ...state, myFavorites: payload, allCharacters: payload };
                
        ////////// sin backend/////////
        /*case "ADD_FAVORITES":

            return {
                ...state, 
                allCharacters: [...state.allCharacters,payload],
                myFavorites:[...state.allCharacters,payload]
            
            };*/


            case DELETE_FAVORITES:
                return { ...state, myFavorites: payload };


        /*case "DELETE_FAVORITES":
            return{
                ...state, ...state.myFavorites.filter(element => element.id !== payload)
            } ; 
*/
        case FILTER:

            const filtro = [...state.allCharacters].filter(element => element.gender === payload )
            return{
            ...state,
            myFavorites:filtro
            };

        case ORDER:
         const order = [...state.allCharacters].sort((a,b) => {if(a.id > b.id){
                return payload === "Ascendente" ? 1 : -1
            }else if(a.id < b.id){
                return payload === "Descendente" ? 1 : -1
            }else{
                return 0
            }
        })
            return{
              ...state,
              myFavorites:order
            }
    
        default:
            return{
                ...state
            };
           
    }

};
export default rootReducer;