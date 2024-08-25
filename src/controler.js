import * as model from "./model.js";
import renderGamesView from "./view/renderGamesView";
import pageSearchView from "./view/pageSearchView.js";
import pagePaginationView from "./view/pagePaginationView.js";
import gameAboutView from "./view/gameAboutView.js";
import { MAX_PAGE } from "./config.js";
import gamePaginationView from "./view/gamePaginationView.js";

const renderSpiner = function (parentEl) {
  const html = `
        <div class="spiner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="M314-115q-104-48-169-145T80-479q0-26 2.5-51t8.5-49l-46 27-40-69 191-110 110 190-70 40-54-94q-11 27-16.5 56t-5.5 60q0 97 53 176.5T354-185l-40 70Zm306-485v-80h109q-46-57-111-88.5T480-800q-55 0-104 17t-90 48l-40-70q50-35 109-55t125-20q79 0 151 29.5T760-765v-55h80v220H620ZM594 0 403-110l110-190 69 40-57 98q118-17 196.5-107T800-480q0-11-.5-20.5T797-520h81q1 10 1.5 19.5t.5 20.5q0 135-80.5 241.5T590-95l44 26-40 69Z"
          />
        </svg>
      </div>
  `;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", html);
};

const controleGames = async function () {
  renderSpiner(document.querySelector(".games"));
  await model.loadGames(model.state.page);
  renderGamesView.renderGames(model.state.games);
};

const controlePageSearch = async function () {
  // Take value of input
  model.state.page = pageSearchView.renderSearchBar(model.state.page);

  if (model.state.page > MAX_PAGE) return;
  if (model.state.page < MAX_PAGE && model.state.page > 0) {
    // Cleare model of games
    model.state.games.length = 0;
    console.log(model.state.games.length);

    // Load new games on screen
    renderSpiner(document.querySelector(".games"));
    await model.loadGames(model.state.page);
    renderGamesView.renderGames(model.state.games);
  }
  return;
};

const controlePagePaginationPrev = async function () {
  // In case we are on page 1
  renderSpiner(document.querySelector(".games"));
  if (model.state.page === 1) return;

  // In case we are in middle of pages
  model.state.games.length = 0;
  model.state.page--;

  pageSearchView.renderPageNumber(model.state.page);

  await model.loadGames(model.state.page);
  renderGamesView.renderGames(model.state.games);
};

const controlePagePaginationNext = async function () {
  renderSpiner(document.querySelector(".games"));
  // In case we are on page 1
  if (model.state.page >= MAX_PAGE) return;

  // In case we are in middle of pages
  model.state.games.length = 0;
  model.state.page++;

  pageSearchView.renderPageNumber(model.state.page);

  await model.loadGames(model.state.page);
  renderGamesView.renderGames(model.state.games);
};

const controleGameAbout = function (btn) {
  // get data for thate game only
  model.loadGame(Number(btn.dataset.id));
  // render about-game displey
  gameAboutView.renderGameAbout(model.state.game);
  model.state.sspage = gameAboutView.removeGameAbout();
};

const controleGamePagination = function (btn) {
  const imgs = model.state.game.screenshots;
  model.state.sspage = gamePaginationView.getSSPage(
    btn,
    imgs,
    model.state.sspage
  );
  gameAboutView.renderScreenshots(imgs[model.state.sspage]);
};

const init = function () {
  renderGamesView.addHendlerRender(controleGames);
  pageSearchView.addEventHendler(controlePageSearch);
  pagePaginationView.addEventHendlerPrev(controlePagePaginationPrev);
  pagePaginationView.addEventHendlerNext(controlePagePaginationNext);
  gamePaginationView.addEventHendler(controleGamePagination);
  gameAboutView.addEventHendler(controleGameAbout);
};
init();
