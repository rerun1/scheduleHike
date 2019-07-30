$(document).ready (function() {

  $( "form#schedule" ).submit(function( event ) {
    event.preventDefault();


    var userAdventure = $("input[name='hike']:checked").val();

    if(userAdventure=="gorge"){
      $("#gorgeHike").show();
      $("#coastHike").hide();
      $("#mountainHike").hide();
      $("#display").hide();
    } else if(userAdventure=="coast"){
      $("#coastHike").show();
      $("#gorgeHike").hide();
      $("#mountainHike").hide();
      $("#display").hide();
    } else if(userAdventure=="mountain"){
      $("#mountainHike").show();
      $("#gorgeHike").hide();
      $("#coastHike").hide();
      $("#display").hide();
    } else {
      $("#display").show();
      $("#gorgeHike").hide();
      $("#coastHike").hide();
      $("#mountainHike").hide();
    }

  });
  $("form#gorgeSchedule").submit (function(event){
    event.preventDefault();

    var userEvent = $("select#selectGorgeHike").val();
    var userEmail = $("input#hikerEmail").val();

    $("#confirmationGorge").show();

    $(".gorgeEvent").text(userEvent);

    if(userEvent=="cape"){
      $(".gorgeDate").text("March 8th");
    } else if(userEvent=="multnomah"){
      $(".gorgeDate").text("June 12th");
    } else if(userEvent=="beacon"){
      $(".gorgeDate").text("April 4th");
    } else if(userEvent=="table"){
      $(".gorgeDate").text("May 21st");
    } else {
      $(".gorgeDate").text("June 1st");
    }

    $(".userEmail").text(userEmail);

  });

  $("form#coastSchedule").submit (function(event){
    event.preventDefault();

    var userEvent2 = $("select#selectCoastHike").val();
    var userEmail2 = $("input#hikerEmail2").val();

    $("#confirmationCoast").show();

    $(".coastEvent").text(userEvent2);

    if(userEvent2=="saddle"){
      $(".coastDate").text("June 12th");
    } else if(userEvent=="neahkanie"){
      $(".coastDate").text("July 8th");
    } else {
      $(".coastDate").text("August 4th");
    }

    $(".userEmail2").text(userEmail2);

  });
  $("form#mountainSchedule").submit (function(event){
    event.preventDefault();

    var userEvent3 = $("select#selectMountainHike").val();
    var userEmail3 = $("input#hikerEmail3").val();

    $("#confirmationMountain").show();

    $(".mountainEvent").text(userEvent3);

    if(userEvent3=="mtHood"){
      $(".mountainDate").text("June 12th");
    } else if(userEvent=="mtStHelens"){
      $(".mountainDate").text("July 8th");
    } else {
      $(".mountainDate").text("August 4th");
    }

    $(".userEmail3").text(userEmail3);

  });



});
