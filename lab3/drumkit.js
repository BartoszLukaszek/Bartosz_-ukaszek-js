var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "1":
      var boom = new Audio('/lab3/sounds/boom.wav');
      boom.play();
      break;

    case "2":
      var clap = new Audio('/lab3/sounds/clap.wav');
      clap.play();
      break;

    case "3":
      var hihat = new Audio('/lab3/sounds/hihat.wav');
      hihat.play();
      break;

    case "4":
      var kick = new Audio('/lab3/sounds/kick.wav');
      kick.play();
      break;

    case "5":
      var openhat = new Audio('/lab3/sounds/openhat.wav');
      openhat.play();
      break;

    case "6":
      var ride = new Audio('/lab3/sounds/ride.wav');
      ride.play();
      break;

    case "7":
      var snare = new Audio('/lab3/sounds/snare.wav');
      snare.play();
      break;

      case "8":
        var tink = new Audio('/lab3/sounds/tink.wav');
        tink.play();
        break;


    case "9":
        var tom  = new Audio('/lab3/sounds/tom.wav');
        tom.play();
        break;

        


    default: console.log(key);



    

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}