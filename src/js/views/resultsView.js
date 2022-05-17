import previewView from './previewView.js';

class resultsView extends previewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found. Please try again!';
  _message = '';
}

export default new resultsView();
