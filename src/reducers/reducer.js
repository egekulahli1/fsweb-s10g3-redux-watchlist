import { movies } from './../movies';
import { ADD_TO_FAV, REMOVE_FAV, SONRAKI_FILM, ONCEKI_FILM } from './../actions/actions';


const initialState = {
    movies: movies,
    favorites: [],
    sira : 0
    };





const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            if (state.favorites.includes(movies[action.payload])) {
                alert("Bu film zaten favorilerinizde");
                return state;
                 }

            const favSira = action.payload;
            
        return {
            ...state,
            favorites: [...state.favorites, movies[favSira]],
        }

        case REMOVE_FAV:
            const favSira2 = action.payload;
            return {
                ...state,
                favorites: state.favorites.filter((fav) => fav.order !== favSira2),
            };


        case SONRAKI_FILM:
         return {...state, sira: state.sira + 1};

         case ONCEKI_FILM:
            return {...state, sira: state.sira - 1};
      
        default:
        return state;
    }
    };


    export default reducer;