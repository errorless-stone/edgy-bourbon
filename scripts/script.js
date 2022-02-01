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
      if(counts[1]+counts[2] < 500)
      {
        $("#wowBalance").text(counts[1]+counts[2]+" Wows ... not much great.");
      }
      else{
        $("#wowBalance").text(counts[1]+counts[2]+" Wows ... much awesome!");
      }
      },
    stop: function() {
      counts[ 2 ]++;
      updateCounterStatus( $stop_counter, counts[ 2 ] );
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


  $("#purgeWows").click(function () {
    
    $("#wowBalance").text("Oh noes, you have no wows!")
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