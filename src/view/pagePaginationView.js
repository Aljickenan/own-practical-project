class pagePaginationView {
  _prev = document.querySelector(".prev-pag");
  _next = document.querySelector(".next-pag");

  renderPaginaiton(btn) {
    const prev = document.querySelector(".prev-pag");
    const next = document.querySelector(".next-pag");
    if (this._btn === prev) return;
  }

  addEventHendlerPrev(hendler) {
    this._prev.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".prev-pag");
      if (!btn) return;
      console.log(btn);
      hendler();
    });
  }
  addEventHendlerNext(hendler) {
    this._next.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".next-pag");
      if (!btn) return;
      hendler();
    });
  }
}

export default new pagePaginationView();
