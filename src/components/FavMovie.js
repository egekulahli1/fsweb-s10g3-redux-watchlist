import { useDispatch } from "react-redux";
import { REMOVE_FAV } from "../actions/actions";
import { useSelector } from "react-redux";

export default function FavMovie({ title, id }) {
  const dispatch = useDispatch();
  const favMovies = useSelector((store) => store.favorites);
  const sira = useSelector((store) => store.sira);
  const favorilerdenCikar = (sira) => {
    console.log("favoriden kaldir");
    dispatch({ type: REMOVE_FAV, payload: sira });
  };


  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button onClick= {() => favorilerdenCikar(sira)} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}
