var bookLookup = { 
    "Isaiah": "Isaiah",
    "Joel": "Joel",
    "S.Matth": "St Matthew",
    "S.Mark": "St Mark",
    "S.Luke": "St Luke",
    "S.John": "St John",
    "Acts": "Acts",
    "Rom": "Romans",
    "1 Cor": "1<sup>st</sup> Corinthians",
    "2 Cor": "2<sup>nd</sup> Corinthians",
    "Gal": "Galations",
    "Ephes": "Ephesians",    
    "Philip": "Philippians",
    "Coloss": "Colossians",
    "1 Thess": "1<sup>st</sup> Thessalonians",
    "2 Thess": "2<sup>nd</sup> Thessalonians",
    "1 Tim": "1<sup>st</sup> Timothy",
    "2 Tim": "2<sup>nd</sup> Timothy",
    "Tit": "Titus",
    "Phil": "Philemon",
    "Hebr": "Hebrews",
    "S.James": "St James",
    "1 S.Peter": "1<sup>st</sup> St Peter",
    "2 S.Peter": "2<sup>nd</sup> St Peter",
    "1 S.John": "1<sup>st</sup> St John",
    "2 S.John": "2<sup>nd</sup> St John",
    "3 S.John": "3<sup>rd</sup> St John",
    "Jud": "Jude",
    "Rev": "Revelation"
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
    if(number > 10 && number < 20) {
        return number += "<sup>th</sup>";
    }

    switch(number.substr(number.length - 1)) {
        case "1":
            number += "<sup>st</sup>";
          break;
        case "2":
            number += "<sup>nd</sup>";
          break;
        case "3":
            number += "<sup>rd</sup>";
          break;
        default:
            number += "<sup>th</sup>";
    }

    return number;
}