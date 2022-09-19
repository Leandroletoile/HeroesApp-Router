import { getAllHeroes } from "./heroSlice";
import { fetchHeroes } from "../../heroes/helpers/fetchHeroes";

export const startAllHeroes = () => {
    return async (dispatch) => {

        const heroes = await fetchHeroes();

        dispatch(getAllHeroes(heroes));

    }
}
