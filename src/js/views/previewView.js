import icons from 'url:../../img/icons.svg';
import View from './parentView.js';

class previewView extends View {
  _generateMarkup() {
    return this._data
      .map(preview => this._generateMarkupPreview(preview))
      .join('');
  }

  _generateMarkupPreview(preview) {
    const id = window.location.hash.slice(1);

    // href triggers load event
    return `
    <li class="preview">
        <a class="preview__link ${
          preview.id === id ? 'preview__link--active' : ''
        }" href="#${preview.id}">
            <figure class="preview__fig">
                <img src="${preview.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${preview.title}</h4>
              <p class="preview__publisher">${preview.publisher}</p>
              <div class="preview__user-generated ${
                preview.key ? '' : 'hidden'
              }">
                  <svg>
                      <use href="${icons}#icon-user"></use>
                   </svg>
              </div>
            </div>
        </a>
    </li>
  `;
  }
}

export default previewView;
