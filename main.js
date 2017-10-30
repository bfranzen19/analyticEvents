// this code will track metrics regarding the corresponding page usage:
$(document).ready(function() {
$(window).on('beforeunload', function() {

// total time spent on the page:
  start = new Date()
  // console.log('start: ' + start)
  setTimeout(function() {
    // console.log('finish: ' + new Date())
    console.log('elapsed time (in ms): ' + (new Date()-start) + ' ms')
  })

// what percentage of the page was viewed. if they scroll down and then back up, record the furthest down they ever scrolled
  $(window).on('scroll', function() {
    var top = $(window).scrollTop()
    var doc = $(document).height()
    var winHeight = $(window).height()

    var scrollPercentages = []
    var scrollPercent = Math.ceil((top/(doc - winHeight)) * 100)
    scrollPercentages.push(scrollPercent)
    var maxPercent = Math.max(scrollPercentages)
    console.log(maxPercent + '%')
  })

// time spent hovering the mouse over EACH element on the page
var last
var diff

$('*').hover(function(event) {
  st = event.timeStamp
}, function() {
  diff = event.timeStamp - st
  console.log('time spent hovering on ' + event.currentTarget.tagName + ' element: ' + diff + ' ms')
})

// how many vowels were typed into the text area. count all the text that was typed, not just what ends up in the text area. example: user typed 'hello', then deleted it, and typed 'hello' again, it should record that they typed 4 vowels
var vowels = ['a', 'e', 'i', 'o', 'u']
var count = 0
var vowelsFound = []

// console.log($('textarea').val())
$('#countChars').on('blur', function() {
  var currentText = $(this).val()

  for(var i=0 ; i<currentText.length ; i++) {
    currentText[i]
    for(var j=0 ; j<vowels.length ; j++) {
      if(currentText[i] === vowels[j]) {
        vowelsFound.push(currentText[i])
        count = j + 1
      } else {
        j++
        console.log('number of vowels found: ' + vowelsFound.length)
      }
    }
  }
})

// if the page was left by clicking a link, record which link was clicked
var recordLink = function(event) {
  console.log('the page was left by clicking: ' + event.currentTarget.id)
}

$('a').on('click', recordLink)


// when the user leaves the page, console.log all of the metrics collected. can use the 'unload' event to run a callback function when the user leaves the page. enable 'preseve log' in dev tools so that this can be viewed after leaving the page.


})   // end of beforeunload
})  // end of document ready
