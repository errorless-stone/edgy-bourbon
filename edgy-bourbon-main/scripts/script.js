// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");


 
$( function() {
  var $start_counter = $( "#event-start" ),
    $drag_counter = $( "#event-drag" ),
    $stop_counter = $( "#event-stop" ),
    counts = [ 0, 0, 0 ];
 
  $( "#dogePic" ).draggable({
    start: function() {
      counts[ 0 ]++;
      updateCounterStatus( $start_counter, counts[ 0 ] );
      },
    drag: function() {
      counts[ 1 ]++;
      updateCounterStatus( $drag_counter, counts[ 1 ] );
      },
    stop: function() {
      counts[ 2 ]++;
      updateCounterStatus( $stop_counter, counts[ 2 ] );
      
      $("#wow-balance").text(counts[1]+counts[2]+" Wows, keep going!")
      }
  
    });
 
  function updateCounterStatus( $event_counter, new_count ) {
    // first update the status visually...
    if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
      $event_counter.addClass( "ui-state-hover" )
        .siblings().removeClass( "ui-state-hover" );
      }
    // ...then update the numbers
    $( "span.count", $event_counter ).text( new_count );
    }
  
  } );


  $("#purge-wows").click(function () {
    
    $("#instructions").text("Drag the doge around to earn wows!")
      }

  );

  //  { containment: "#dogeHouse", scroll: false }, { 
   
  // $("#dogeDiv").draggable(
  //   {
  //   start: function () {
  //     counts[0]++;
  //     //updateCounterStatus($start_counter, counts[0]);
  //     console.log(counts[0]);
  //   }
  // }
  // );

  $("#dogePic").draggable({
    containment: "#dogeHouse",
    scroll: false,
    zIndex:1000,
  });




  // let userGreeting = "Hello there, "; 

  // $("button").click(function () {
  //   userGreeting += $("#fname").val();

  //   $("#greetingOutput").text(userGreeting);
  // });
});