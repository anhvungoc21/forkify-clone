import icons from 'url:../../img/icons.svg';
import View from './parentView.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClickPage(handler) {
      this._parentElement.addEventListener('click', function (e) {
          const btn = e.target.closest('.btn--inline')
          if (!btn) return;
          const gotoPage = Number.parseInt(btn.dataset.goto)
          handler(gotoPage)
      })
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, there are more
    if (curPage === 1 && numPages > 1) {
      return this._createNextButton(curPage + 1);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._createPrevButton(curPage - 1);
    }

    // Other page
    if (curPage < numPages) {
      return `${this._createPrevButton(curPage - 1)}${this._createNextButton(
        curPage + 1
      )}`;
    }

    // Page 1 and only
    return '';
  }

  _createPrevButton(prevPage) {
    return `
      <button data-goto="${prevPage}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${prevPage}</span>
      </button>`;
  }

  _createNextButton(nextPage) {
    return `
      <button data-goto="${nextPage}" class="btn--inline pagination__btn--next">
          <span>Page ${nextPage}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
          </svg>  
      </button>`;
  }
}

export default new paginationView();
