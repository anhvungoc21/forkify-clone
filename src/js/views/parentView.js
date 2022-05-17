import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // -- DOM SELECTIVE UPDATING ALGORITHM --
    // document.createRange() => document becomes the context node
    const newDOM = document.createRange().createContextualFragment(newMarkup); // new document fragment with newMarkup
    const newElements = Array.from(newDOM.querySelectorAll('*')); // Get all elements of the new "virtual" DOM

    const curElements = Array.from(this._parentElement.querySelectorAll('*')); // Get all elements from current (part of) the DOM

    // Compare elements for selective change
    newElements.forEach((newEl, i) => {
      const curEl = curElements.at(i);
      // Update changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // nodeValue will return textContent if node only contains text
        curEl.textContent = newEl.textContent;
      }

      // Update changed attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        ); // Copy attributes from newEl
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use> 
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    // The `use` tag uses nodes in svg document
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const html = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
