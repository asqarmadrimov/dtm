var elSiteForm = document.querySelector (".site__form");
var elInputForm = document.querySelector (".input__form");
var elInputSelect = document.querySelector (".input__select");
var elSiteOutput = document.querySelector (".site__output");


elSiteForm.addEventListener ("submit", function(evt){
  evt.preventDefault();

  var inputValue = Number(elInputForm.value);
  var selectValue = Number(elInputSelect.value);
  var maxBall = 110;
  var minBall = 0;
  

  if (inputValue <= 0) {
    console.log ("0 dan katta bo'lgan sooni kiriting!");
    elSiteOutput.textContent = "0 katta bo'gan sonni kiriting!";

    return;
  } else if (inputValue > maxBall){
    console.log = ("Siz olim siz!");
    elSiteOutput.textContent = "Siz olimsiz!"

    return;
  } else if (isNaN(selectValue)) {
    console.log = ("Siz universitet tanlamadingiz!");
    elSiteOutput.textContent = "Siz universitet tanlamadingiz!"; 

    return;
  } else if (inputValue >= selectValue && inputValue <= maxBall) {
    console.log ("Tarbiklayman siz talaba bo'ldingiz");
    elSiteOutput.textContent = "Tarbiklayman siz talaba bo'ldingiz";

    return;
  } else if (inputValue <= selectValue && inputValue >= minBall) {
    console.log ("Afsuski sizni ballingiz yetmadi!");
    elSiteOutput.textContent = "Afsuski sizni ballingiz yetmadi!";
    
    return;
  }
})