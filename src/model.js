import { API_KEY } from "./config";
import { API_URL } from "./config";
import {
  nameOfArrey,
  screenshotsOfArrey,
  tagsOfArrey,
  platformsOfArrey,
  storesOfArrey,
} from "./helper.js";
export const state = {
  games: [],
  page: 1,
  game: {},
  sspage: 0,
};

const createGameObject = function (igra) {
  return {
    id: igra.id,
    name: igra.name,
    released: igra.released,
    img: igra.background_image,
    rating: igra.rating,
    genres: nameOfArrey(igra.genres, "name"),
    platforms: platformsOfArrey(igra.platforms),
    screenshots: screenshotsOfArrey(igra.short_screenshots, "image"),
    stores: storesOfArrey(igra.stores),
    tags: tagsOfArrey(igra.tags),
  };
};

export const loadGames = async function (page = 1) {
  try {
    state.page = page;
    const res = await fetch(
      `${API_URL}games?key=${API_KEY}&page=${state.page}`
    );
    const data = await res.json();

    if (res.ok === false) throw new Error(`Wrong URL$ ${res.status}`);

    state.games = data.results.map((igra) => {
      return createGameObject(igra);
    });

    // console.log(state.games);
  } catch (err) {
    console.error(`ovo je eror ${err}`);
  }
};

export const loadGame = function (id) {
  try {
    state.game = state.games.find((igra) => id === igra.id);
  } catch (err) {
    console.error(`ovo je eror ${err}`);
  }
};
