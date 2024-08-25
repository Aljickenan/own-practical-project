class gamePaginationView {
  _parentElement = document.querySelector(".screenshot-tag");

  addEventHendler(hendler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-game");
      if (!btn) return;

      hendler(btn);
    });
  }

  getSSPage(btns, imgs, page) {
    const btn = btns.classList;
    if (btn[1] === "btn--left--game") {
      page = --page;
      if (page < 0) {
        return imgs.length - 1;
      }
      return page;
    } else {
      page = ++page;
      if (page > imgs.length - 1) {
        return 0;
      }
      return page;
    }
  }
}

export default new gamePaginationView();
