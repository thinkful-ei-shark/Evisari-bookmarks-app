import api from './api.js';
import buttons from './buttons.js';
import store from './store.js';

function initialView() {
    return `
      <button id="new">New</button>
      <select id="filter" placeholder="Filter By" tabindex="1">
           <option value="">Filter By</option>
           <option value="1">1+ star</option>
           <option value="2">2+ stars</option>
           <option value="3">3+ stars</option>
           <option value="4">4+ stars</option>
           <option value="5">5 stars</option>
      </select>
      ${bookmarks()}
      `;
  }
  
  function addBookmarkView() {
    return `
      <div>
      <label>Title:</label>
      <input id="title" type="text" placeholder="title">
      </div>
      <div>
      <label>URL Link:</label>
      <input type="text" placeholder="url link">
      </div>
      <div>
      <label>Description:</label> 
      <input type="text-area" placeholder="description">
      </div>
      <div>
      <label>Rating:</label>
      <select name="rating">  
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
      <option value="four">4</option>
      <option value="five">5</option>
      </select>
      </div>
      <div>
      <button id="cancel">Cancel</button>
      <button id="add">Add</button>
      </div>
      `;
  }

  function bookmarks() {
    try {
      return `<ul>${store.bookmarks
        .map((x) => `<li data-bookmark-id=${x.id}>${x.title}-${x.rating}</li>`)
        .join('')}</ul>`;
    } catch(err) {
       console.log(err.message);
    } 
  }

function render(currentView) {
  $("h1").html("My Bookmark App");
  $("main").html(currentView());
  buttons.addButton(); 
  buttons.newButton(); 
  buttons.cancelButton();
}

export default {
  initialView, 
  addBookmarkView,
  bookmarks,
  render
}