var bookLookup = { 
    "1 Cor": "1<sup>st</sup> Corinthians",
    "2 Cor": "2<sup>nd</sup> Corinthians",
    "Matth": "St Matthew"
};

function toggleHamburger() {
    var x = document.getElementById("navbar");
    if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function numberToReference(number) {
    switch(number.substr(number.length - 1)) {
        case "1":
            number += "<sup>st</sup>";
          break;
        case "2":
            number += "<sup>nd</sup>";
          break;
        case "3":
            number += "<sup>rd</sup";
          break;
        default:
            number += "<sup>th</sup>";
      }

      return number;
}