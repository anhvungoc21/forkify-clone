import icons from 'url:../../img/icons.svg';
import View from './parentView.js';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  _message = 'Recipe successfully uploaded!';

  constructor() {
    super();
    this._addHandlerModel();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  reRenderForm() {
    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="My Recipe" required name="title" type="text" />
        <label>URL</label>
        <input value="myurl" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="myimage" required name="image" type="text" />
        <label>Publisher</label>
        <input value="My Name" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="30" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="1" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value=""
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value=""
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=""
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>
    </div>`
    );
  }

  _addHandlerModel() {
    // Export to another function and bind `this` OR use const self = this;
    [this._btnOpen, this._btnClose, this._overlay].forEach(btn => {
      btn.addEventListener('click', this.toggleWindow.bind(this));
    });
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)]; // Get all data in the form
      const data = Object.fromEntries(dataArr); // Convert entries array to object
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
