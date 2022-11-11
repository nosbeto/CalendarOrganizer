//creating my consts
const el09 = $('#hour-09')
const el10 = $('#hour-10')
const el11 = $('#hour-11')
const el12 = $('#hour-12')
const el1 = $('#hour-1')
const el2 = $('#hour-2')
const el3 = $('#hour-3')
const el4 = $('#hour-4')
const el5 = $('#hour-5')
const saveBtn = $('.btn')
const cDayEl = $('#currentDay')

//this creates an array of my elements
const elementsArray = [el09,el10,el11,el12,el1,el2,el3,el4,el5]


//Creating dayjs values to be used to compare them against time of the day and change color accordingly
const nineTime = dayjs().set('hour',9).set('minute',00)
const tenTime = dayjs().set('hour',10).set('minute',00)
const elevenTime = dayjs().set('hour',11).set('minute',00)
const twelveTime = dayjs().set('hour',12).set('minute',00)
const oneTime = dayjs().set('hour',13).set('minute',00)
const twoTime = dayjs().set('hour',14).set('minute',00)
const threeTime = dayjs().set('hour',15).set('minute',00)
const fourthTime = dayjs().set('hour',16).set('minute',00)
const fiveTime = dayjs().set('hour',17).set('minute',00)



//This creates an array of my times
const timesArray = [nineTime,tenTime,elevenTime,twelveTime,oneTime,twoTime,threeTime,fourthTime,fiveTime]

//Changing my classes accordingly
function changingClass () {
  for (var i=0; i < elementsArray.length; i++) {
    console.log(elementsArray[i]) 
      if ((dayjs().diff(timesArray[i],'minutes') > 0) === true) {
        elementsArray[i].removeClass('future');
        elementsArray[i].addClass('past');
  }
  if ((dayjs().diff(timesArray[i],'minutes') < 0) === true) {
    elementsArray[i].removeClass('past');
    elementsArray[i].removeClass('present');
    elementsArray[i].addClass('future');
  }
  if ((dayjs().diff(timesArray[i],'hours') === 0) === true) {
  elementsArray[i].removeClass('past');
  elementsArray[i].removeClass('future');
  elementsArray[i].addClass('present');
}
  } 
}

changingClass()

//This works
var saveBtn2 = $('.saveBtn')

// add a listener for the entire box
saveBtn2.on('click', function(event) {
  event.preventDefault();
  var userInput = $(event.target).siblings('textarea').val()
  var id = $(event.target).parent('div').attr("id")
  localStorage.setItem(id,userInput)
});


// get today times using js
const now = dayjs().format('dddd[, ]MMMM[ ]D[, ]YYYY')

//adds the day 
cDayEl.text(now)


///This is just something I created for fun 
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

// // 
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(`${key}: ${localStorage.getItem(key)}`)
// }


$('#hour-09 .description').val(localStorage.getItem('hour-09'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-01 .description').val(localStorage.getItem('hour-01'))
$('#hour-02 .description').val(localStorage.getItem('hour-02'))
$('#hour-03 .description').val(localStorage.getItem('hour-03'))
$('#hour-04 .description').val(localStorage.getItem('hour-04'))
$('#hour-05 .description').val(localStorage.getItem('hour-05'))
$('#hour-06 .description').val(localStorage.getItem('hour-06'))
$('#hour-07 .description').val(localStorage.getItem('hour-07'))



//This functions appends the elemnent into the mainContainer
function appendHtml () {
  mainContainerElQ.append(elFromHtmlEdited)
}
