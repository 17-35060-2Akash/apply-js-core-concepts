function leapYear(year) {
    if (year % 4 === 0) {
        console.log(year + ' is a Leap Year!');
    }
    else {
        console.log(year + ' is Not a leap Year!');
    }
}

leapYear(2020);