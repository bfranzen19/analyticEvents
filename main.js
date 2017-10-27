// this code will track metrics regarding the corresponding page usage:

$(document).ready(function() {

// total time spent on the page:
  // start = new Date()
  // console.log('start: ' + start)
  // setTimeout(function() {
  //   console.log('finish: ' + new Date())
  //   console.log('elapsed time (in ms): ' + (new Date()-start) + ' ms')
  // })

// what percentage of the page was viewed. if they scroll down and then back up, record the furthest down they ever scrolled
  $(window).on('scroll', function() {
    var top = $(window).scrollTop()
    var doc = $(document).height()
    var winHeight = $(window).height()

    var scrollPercent = Math.ceil((top/(doc - winHeight)) * 100)
    console.log(scrollPercent + '%')

  })




// time spent hovering the mouse over EACH element on the page




// how many vowels were typed into the text area. count all the text that was typed, not just what ends up in the text area. example: user typed 'hello', then deleted it, and typed 'hello' again, it should record that they typed 4 vowels




// if the page was left by clicking a link, record which link was clicked




// when the user leaves the page, console.log all of the metrics collected. can use the 'unload' event to run a callback function when the user leaves the page. enable 'preseve log' in dev tools so that this can be viewed after leaving the page.





})  // end of document ready
