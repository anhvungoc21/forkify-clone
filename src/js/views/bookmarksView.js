import previewView from './previewView.js';

class bookmarksView extends previewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = "You haven't bookmarked anything yet! ";
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new bookmarksView();
