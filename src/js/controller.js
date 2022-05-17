import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_DELAY, MODAL_RERENDER_DELAY } from './config.js';

///////////////////////////////////////
/// CONTROLLING RECIPE
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // Get the hash

    if (!id) return;

    recipeView.renderSpinner(); // Spinner while fetching data

    // Update active element on search results column
    resultsView.update(model.getSearchResultsPage());

    // Update bookmarks view for active recipe
    bookmarksView.update(model.state.bookmarks);

    await model.loadRecipe(id);

    // 2. Rendering recipe:
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError(); // Rendered by recipeView
  }
};

/// CONTROLLING SEARCH RESULTS
const controlSearchResults = async function () {
  try {
    // 1. Get query & Load results
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    await model.loadSearchResults(query);

    // 2. Render results
    resultsView.render(model.getSearchResultsPage(1)); // Begins on first page

    // 3. Render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (gotoPage) {
  // Render new results
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlUpdateServings = function (newServings) {
  // Update recipe servings
  model.updateServings(newServings);
  // Update view -- Ingredients only
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  // Add/remove bookmark
  if (model.state.recipe.bookmarked === false) {
    model.addBookmark(model.state.recipe);
  } else {
    model.removeBookmark(model.state.recipe.id);
  }
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlLoadBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    // Upload recipe data
    await model.uploadRecipe(newRecipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Close form window
    addRecipeView.renderMessage();
    setTimeout(() => addRecipeView.toggleWindow(), MODAL_CLOSE_DELAY);

    // ReRender modal
    setTimeout(() => addRecipeView.reRenderForm(), MODAL_RERENDER_DELAY);

    // Render bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`); // Change URL without reloading
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlLoadBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlUpdateServings);
  recipeView.addHandlerBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClickPage(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
////////////////////////////////////////////////////////////////////// HASH CHANGE
