// $(document).ready(function(){

  class Tamagotchi {
    constructor(name, hunger, boredom, sleeplevel, age){

      this.name = name;
      this.hunger = hunger;
      this.boredom = boredom;
      this.sleeplevel = sleeplevel;
      this.age = age;
    }
// end of Tamagotchi class
}
 const nyanFinn = new Tamagotchi('name', 5, 5, 5, 1);


 // //    THIS IS THE TEMPLATE FOR THE FORM INPUT

 $('#petNameSubmit').on('submit', (e) => {
     e.preventDefault();
     let $userPetInput = $('#petNameInput').val();
     nyanFinn.name = $userPetInput;

    checkAndUpdatenyanFinnInHtml();
    $('#petNameSubmit').empty();

 });

  $('#feedButton').click(clickedFeedButton);
  $('#funButton').click(clickedPlayButton);
  $('#exerciseButton').click(clickedExerciseButton);
  $('#sleepButton').click(clickedSleepButton);
  $('#heart').hide();

  checkAndUpdatenyanFinnInHtml();

/// FUNCTIONS FOR BUTTON PRESS

//        ON OFF BUTTONS FOR NIGHT MODE
  function toggleOnByInput() {
    $('#toggle-trigger').prop('checked', true).change(
      $('body').css('background-color','black')
      )}
  function toggleOffByInput() {
    $('#toggle-trigger').prop('checked', false).change(
    $('body').css('background-color','white')

      )}

  function clickedFeedButton() {
    nyanFinn.boredom++;
    nyanFinn.hunger++;
    nyanFinn.sleeplevel++
    checkAndUpdatenyanFinnInHtml();
  }

  function clickedPlayButton() {
    nyanFinn.hunger--;
    nyanFinn.boredom++
    checkAndUpdatenyanFinnInHtml();
  }

  function clickedExerciseButton() {
    nyanFinn.boredom--;
    nyanFinn.hunger--;
    nyanFinn.sleeplevel--
    checkAndUpdatenyanFinnInHtml();
  }
  function clickedSleepButton() {
    nyanFinn.hunger--;
    nyanFinn.sleeplevel--;
    checkAndUpdatenyanFinnInHtml();
  }



  function checkAndUpdatenyanFinnInHtml() {

    // CALL THE METHODS TO SET THE RANGE FROM 0-10 --- THIS IS REDUNDANT NOW
    // nyanFinn.checkboredom(nyanFinn.boredom);
    // nyanFinn.checkSleeplevel(nyanFinn.sleeplevel);
    // nyanFinn.checkAge(nyanFinn.age);
    // nyanFinn.checkHunger(nyanFinn.hunger);


    checkVitals();
    updatenyanFinnInHtml();
  }

  function checkVitals() {
    if (nyanFinn.age >= 3) {
          function moveRight() {
              $("#heart").animate({left: "+=20"}, 1000, function() {
                  setTimeout(moveLeft, 20);
              });
          }

          function moveLeft(){
              $("#heart").animate({left: "-=20"}, 1000, function () {
                  setTimeout(moveRight, 20);
              });
          }
      setTimeout(moveRight, 20);
      setTimeout(moveLeft, 20);
    }
    if (nyanFinn.age > 5) {
      $('#nyanFinnImg').empty();
      $('#nyanFinnImg').attr("src","https://lh3.googleusercontent.com/-tzsUc0YMBbQ/Ve7s6gtv9pI/AAAAAAAAPSU/GzaaAVFgLa4/w530-h265-n/Lady-Rainicorn-Nyan-V2.gif");
    }

    if (nyanFinn.hunger < 1 || nyanFinn.hunger >= 10) {
      $('#nyanFinnImg').empty();
      $('#nyanFinnImg').attr("src","https://api.audiotool.com/track/nyan_cat_is_dead/cover/512.jpg");
    //  alert('YOU ATE TOO MUCH')
      $('body').css('background-color', 'red')
      $('.heart_animation').remove();

          }
    if (nyanFinn.boredom < 1 || nyanFinn.boredom >= 10) {
        $('#nyanFinnImg').empty();
        $('#nyanFinnImg').attr("src","https://i.imgflip.com/28gohp.jpg");
      //  alert('your friend could not be adequately entertained')
        $('body').css('background-color', 'red')
        $('.happy_animation').remove();
        $('#happyProg').empty();
          }
    if (nyanFinn.sleeplevel < 1 || nyanFinn.sleeplevel >= 10) {
        $('#nyanFinnImg').empty();
        $('#nyanFinnImg').attr("src","http://www.ericjeckert.com/mazes/wp-content/uploads/2013/11/nyan-cat.jpg");
      //  alert('your precious nyan had trouble resting properly... bad work');

        $('body').css('background-color', 'red')

          }


  }


  // timer
  let seconds = 0;

  $('#start-game').click(function(){
    $('#heart').show();


  	const timePassing = () => {
  	console.log(`IT HAS BEEN ${seconds} seconds`)
  	seconds++;
  	if(seconds % 4 == 0){
  		nyanFinn.hunger++;
  	}
  	if(seconds % 6 == 0){
  		nyanFinn.boredom++;
  	}
  	if(seconds % 8 == 0){
  		nyanFinn.sleeplevel++;
  	}
  	if(seconds % 3 == 0){
  		nyanFinn.age++;
  	}
  	if(Math.floor(Math.random() * 16) > 4){
  		nyanFinn.boredom--
  	}
    if(nyanFinn.hunger >= 10 || nyanFinn.boredom >= 10 || nyanFinn.sleeplevel >= 10){
//  		alert("nyan finn is dead :( ");
      $('#heart').hide();
  		clearInterval(timePasses);
  	}
    if(nyanFinn.hunger <= 0 || nyanFinn.boredom <= 0 || nyanFinn.sleeplevel <= 0){
  //    alert("nyan finn is dead :( ");
      $('#heart').hide();
      clearInterval(timePasses);
    }


    checkAndUpdatenyanFinnInHtml();
    updatenyanFinnInHtml();






  	}
  	const timePasses = setInterval(timePassing, 1000)
  })

// function defintion
  function updatenyanFinnInHtml() {
    $('.name').text(nyanFinn.name);
    $('.hunger').text(nyanFinn.hunger);
    $('.boredom').text(nyanFinn.boredom);
    $('.sleepyness').text(nyanFinn.sleeplevel);
    $('.age').text(nyanFinn.age);
    // PROG BAR
    $('#hungerProg').css("width", (nyanFinn.hunger * 10)+ "%");
    $('#boredProg').css("width", (nyanFinn.boredom * 10)+ "%");
    $('#ageProg').css("width", (nyanFinn.age * 10)+ "%");
    $('#sleepProg').css("width", (nyanFinn.sleeplevel * 10)+ "%");

  }




// });
