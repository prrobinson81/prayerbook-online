var bookLookup = { 
    "Isaiah": "Isaiah",
    "Joel": "Joel",
    "S.Matth": "St Matthew",
    "S.Mark": "St Mark",
    "S.Luke": "St Luke",
    "S.John": "St John",
    "Acts": "The Acts of the Apostles",
    "Rom": "St Paul's Letter to the Romans",
    "1 Cor": "St Paul's 1<sup>st</sup> Letter to the Corinthians",
    "2 Cor": "St Paul's 2<sup>nd</sup> Letter to the Corinthians",
    "Gal": "St Paul's Letter to the Galations",
    "Ephes": "St Paul's Letter to the Ephesians",    
    "Philip": "St Paul's Letter to the Philippians",
    "Coloss": "St Paul's Letter to the Colossians",
    "1 Thess": "St Paul's 1<sup>st</sup> Letter to the Thessalonians",
    "2 Thess": "St Paul's 2<sup>nd</sup> Letter to the Thessalonians",
    "1 Tim": "St Paul's 1<sup>st</sup> Letter to Timothy",
    "2 Tim": "St Paul's 2<sup>nd</sup> Letter to Timothy",
    "Tit": "St Paul's Letter to Titus",
    "Phil": "St Paul's Letter to Philemon",
    "Hebr": "The Letter to the Hebrews",
    "S.James": "The Letter of St James",
    "1 S.Peter": "The 1<sup>st</sup> Letter of St Peter",
    "2 S.Peter": "The 2<sup>nd</sup> Letter of St Peter",
    "1 S.John": "The 1<sup>st</sup> Letter of St John",
    "2 S.John": "The 2<sup>nd</sup> Letter of St John",
    "3 S.John": "The 3<sup>rd</sup> Letter of St John",
    "Jud": "The Letter of Jude",
    "Rev": "The Revelation to John"
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