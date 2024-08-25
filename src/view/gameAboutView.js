class gameAboutView {
  _parentElement = document.querySelector(".games");

  addEventHendler(hendler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".game");
      hendler(btn);
    });
  }

  _renderTags(HTML, tags) {
    HTML.innerHTML = `<b>This game have:</b>
            ${tags
              .map((tag, index) => {
                if (index < 20) {
                  return `<li>${tag.name}</li>`;
                } else return;
              })
              .join("")}
    `;
  }

  _renderStoreConsole(HTML, tags, title) {
    HTML.innerHTML = `<b>${title}</b>
            ${tags.map((tag) => `<li>${tag}</li>`).join("")}
    `;
  }

  _renderImg(img) {
    return `
    <img
      src="${img}"
      alt="imgs"
      class="ss-img"
            />`;
  }

  renderScreenshots(img) {
    const HTML = document.querySelector(".screenshot-tag");
    return (HTML.innerHTML = `<button class="btn-game btn--left--game">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
                />
              </svg>
            </button>
            ${this._renderImg(img)}
            <button class="btn-game btn-right-game">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"
                />
              </svg>
            </button>
              
            `);
  }

  renderGameAbout(game) {
    const overlay = document.querySelector(".overlay");
    const title = document.querySelector(".title-tag");
    const tags = document.querySelector(".list-tag");
    const store = document.querySelector(".store-tag");
    const consols = document.querySelector(".console-tag");
    overlay.classList.toggle("hidden");

    // render title
    title.textContent = game.name;

    // render tags
    this._renderTags(tags, game.tags);
    this._renderStoreConsole(store, game.stores, "Can buy on:");
    this._renderStoreConsole(consols, game.platforms, "Can play on:");
    this.renderScreenshots(game.screenshots[0]);
  }

  removeGameAbout() {
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".game-tags");
      const bt = e.target.closest(".btn-game");
      if (btn || bt) return;
      overlay.classList.add("hidden");
    });
    return 0;
  }
}

export default new gameAboutView();
