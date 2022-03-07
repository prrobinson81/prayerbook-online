var paschalFullMoonLookup = [
    { "goldenNumber": 1, "month": 4, "day": 14 }, 
    { "goldenNumber": 2, "month": 4, "day": 3 }, 
    { "goldenNumber": 3, "month": 3, "day": 23 }, 
    { "goldenNumber": 4, "month": 4, "day": 11 }, 
    { "goldenNumber": 5, "month": 3, "day": 31 }, 
    { "goldenNumber": 6, "month": 4, "day": 18 }, 
    { "goldenNumber": 7, "month": 4, "day": 8 }, 
    { "goldenNumber": 8, "month": 3, "day": 28 }, 
    { "goldenNumber": 9, "month": 4, "day": 16 }, 
    { "goldenNumber": 10, "month": 4, "day": 5 }, 
    { "goldenNumber": 11, "month": 3, "day": 25 }, 
    { "goldenNumber": 12, "month": 4, "day": 13 }, 
    { "goldenNumber": 13, "month": 4, "day": 2 }, 
    { "goldenNumber": 14, "month": 3, "day": 22 }, 
    { "goldenNumber": 15, "month": 4, "day": 10 }, 
    { "goldenNumber": 16, "month": 3, "day": 30 }, 
    { "goldenNumber": 17, "month": 4, "day": 17 }, 
    { "goldenNumber": 18, "month": 4, "day": 7 }, 
    { "goldenNumber": 19, "month": 3, "day": 27 }
];

// let easterSunday = GetEasterDate();
// let year = easterSunday.getFullYear();

function GetEasterDate(year) {
    // const d = new Date();
    // let year = d.getFullYear();

    let goldenNumber = (year % 19) + 1;
    let goldenNumberObj = paschalFullMoonLookup[goldenNumber - 1];

    if(goldenNumberObj.goldenNumber == goldenNumber) {
        let paschalFullMoon = new Date(year, goldenNumberObj.month - 1, goldenNumberObj.day);
        let day = paschalFullMoon.getDay();

        return new Date(year, paschalFullMoon.getMonth(), paschalFullMoon.getDate() + (7 - day));
    }
    else {
        return null;
    }
}

function GetFeastDate(calendar, feast, year) {
    switch(feast.dateType) {
        case "fixed":
            return new Date(year, feast.month - 1, feast.day);
            break;
        case "moveable":
            switch(feast.anchorFeast)
            {
                case "EasterSunday":
                    var baseDate = GetEasterDate(year); // new Date(easterSunday);
                    baseDate.setDate(baseDate.getDate() + feast.dateDiff);
                    return baseDate;
                    break;
                default:
                    var anchorFeast = Object.values(calendar).find(sunday => sunday.id === feast.anchorFeast);
                    var baseDate = new Date(GetFeastDate(calendar, anchorFeast, year));
                    if(feast.relationship) {
                        switch(feast.relationship) {
                            case "SundayNext":
                                baseDate.setDate(baseDate.getDate() + (7 - baseDate.getDay()));
                                return baseDate;
                            case "SundayBefore":
                                baseDate.setDate(baseDate.getDate() - baseDate.getDay());
                                return baseDate;
                            default:
                                return null;
                        }
                    } else {
                        baseDate.setDate(baseDate.getDate() + feast.dateDiff);
                        return baseDate;
                    }
            }

            break;
        default:
            return null;
    }
}

function GetAllSundays(year) {
    return fetch("./js/dates.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        for (let i in result) {                   
            result[i].Date = GetFeastDate(result, result[i], year);
        }

        result.sort(function(a, b) {
            return a.Date - b.Date;
        });

        return result;
    });
}