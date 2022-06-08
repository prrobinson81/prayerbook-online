var bookLookup = { 
    "Isaiah": { "full": "Isaiah", "cw": "Isa" },
    "Jer": { "full": "Jeremiah", "cw": "Jer" },
    "Joel": { "full": "Joel", "cw": "Joel" },
    "S.Matth": { "full": "St Matthew", "cw": "Matt" },
    "S.Mark": { "full": "St Mark", "cw": "Mark" },
    "S.Luke": { "full": "St Luke", "cw": "Luke" },
    "S.John": { "full": "St John", "cw": "John" }, 
    "Acts": { "full": "The Acts of the Apostles", "cw": "Acts" },
    "Rom": { "full": "St Paul's Letter to the Romans", "cw": "Rom" },
    "1 Cor": { "full": "St Paul's 1<sup>st</sup> Letter to the Corinthians", "cw": "1 Cor" },
    "2 Cor": { "full": "St Paul's 2<sup>nd</sup> Letter to the Corinthians", "cw": "2 Cor" },
    "Gal": { "full": "St Paul's Letter to the Galations", "cw": "Gal" },
    "Ephes": { "full": "St Paul's Letter to the Ephesians", "cw": "Eph" },
    "Philip": { "full": "St Paul's Letter to the Philippians", "cw": "Phil" },
    "Coloss": { "full": "St Paul's Letter to the Colossians", "cw": "Col" },
    "1 Thess": { "full": "St Paul's 1<sup>st</sup> Letter to the Thessalonians", "cw": "1 Thess" },
    "2 Thess": { "full": "St Paul's 2<sup>nd</sup> Letter to the Thessalonians", "cw": "2 Thess" },
    "1 Tim": { "full": "St Paul's 1<sup>st</sup> Letter to Timothy", "cw": "1 Tim" },
    "2 Tim": {"full": "St Paul's 2<sup>nd</sup> Letter to Timothy", "cw": "2 Tim" },
    "Tit": { "full": "St Paul's Letter to Titus", "cw": "Titus" },
    "Phil": { "full": "St Paul's Letter to Philemon", "cw": "Philem" },
    "Hebr": { "full": "The Letter to the Hebrews", "cw": "Heb" },
    "S.James": { "full": "The Letter of St James", "cw": "James" },
    "1 S.Peter": { "full": "The 1<sup>st</sup> Letter of St Peter", "cw": "1 Pet" },
    "2 S.Peter": { "full": "The 2<sup>nd</sup> Letter of St Peter", "cw": "2 Pet" },
    "1 S.John": { "full": "The 1<sup>st</sup> Letter of St John", "cw": "1 John" },
    "2 S.John": { "full": "The 2<sup>nd</sup> Letter of St John", "cw": "2 John" },
    "3 S.John": { "full": "The 3<sup>rd</sup> Letter of St John", "cw": "3 John" },
    "Jud": { "full": "The Letter of Jude", "cw": "Jude" },
    "Rev": { "full": "The Revelation to John", "cw": "Rev" }
};

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

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