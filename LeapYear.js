function leapYear(year){
  if(year % 4 === 0){
      console.log("This Year LeapYear");
  }else if(year % 400 === 0 || year % 100 !=0 ){
      console.log("This Year LeapYear");
  }else{
      console.log("This Year Not LeapYear");
  }
}

leapYear(2002)