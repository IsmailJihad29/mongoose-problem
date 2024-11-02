//?Leap Year Checker

const checkLeapYear = year => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "Happy New Year!";
    } else {
      return "There won't be a February 29th this year!";
    }
  };
  
  console.log(checkLeapYear(2025)); 

  