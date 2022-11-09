mainContainerElQ = document.querySelector('.container-fluid')
const el09 = $('#hour-09')
const el10 = $('#hour-10')
const el11 = $('#hour-11')
const el12 = $('#hour-12')
const el1 = $('#hour-1')
const el2 = $('#hour-2')
const el3 = $('#hour-3')
const el4 = $('#hour-4')
const el5 = $('#hour-5')
const cDayEl = $('#currentDay')


// get today times using js
const now = dayjs().format('dddd[, ]MMMM[ ]D[, ]YYYY')

//adds the day 
cDayEl.text(now)

//create function to specify elements according to my needs
function elementFromHtml (html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}


//testing function2
function editHtmltoAppend (hour,time,classStyle) {
elFromHtmlEdited = elementFromHtml  (`
<div id="hour-${hour}" class="row time-block ${classStyle}">
<div class="col-2 col-md-1 hour text-center py-3">${hour}${time}</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div>
`)
return elFromHtmlEdited
}

//This functions appends the elemnent into the mainContainer
function appendHtml () {
  mainContainerElQ.append(elFromHtmlEdited)
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
