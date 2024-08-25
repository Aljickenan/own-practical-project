class renderGamesView {
  _parentElement = document.querySelector(".games");
  _header;

  addHendlerRender(hendler) {
    window.addEventListener("load", hendler);
  }

  _gameTitle(name) {
    const arreyName = name.split(" ");
    if (arreyName.length < 4) return name;

    let result = arreyName.slice(0, 3).join(" ");

    const other = arreyName
      .slice(3)
      .map((rijec) => rijec.charAt(0).toUpperCase())
      .join("");

    result += " " + other;

    return result;
  }

  renderGames(games) {
    this._parentElement.innerHTML = "";

    games.forEach((game) => {
      const html = `
            <button class="game" data-id="${game.id}">
            <img src="${game.img}" alt="test" class="img-game" />
            <div class="game-about">
            <div><p class="game-name">${this._gameTitle(game.name)}</p></div>
            </div>
            </button> 
            `;
      this._parentElement.insertAdjacentHTML("beforeend", html);
    });
  }
}

export default new renderGamesView();
