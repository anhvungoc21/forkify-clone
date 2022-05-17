import View from './parentView.js';   

class searchView extends View {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const res = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return res;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
}

export default new searchView();
