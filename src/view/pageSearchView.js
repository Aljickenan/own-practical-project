import { MAX_PAGE } from "../config";

class pageSearchView {
  _parentElement = document.querySelector(".form-input-search");

  renderSearchBar(Page) {
    const HTMLSearch = this._parentElement.firstElementChild;
    Page = HTMLSearch.value;
    HTMLSearch.value = "";
    HTMLSearch.focus();
    this.renderPageNumber(Page);
    return Page;
  }

  renderPageNumber(page) {
    const HTMLPage = this._parentElement.lastElementChild;
    if (page < MAX_PAGE && page > 0) HTMLPage.innerHTML = page;
    return;
  }

  addEventHendler(hendler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log(e);
      hendler();
    });
  }
}

export default new pageSearchView();
