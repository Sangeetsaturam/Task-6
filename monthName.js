//Write a JavaScript function to get the month name from a particular date.
var month = function(date){
    months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return months[date.getMonth()];
    };
    console.log(month(new Date("10/11/2009")));
    console.log(month(new Date("11/13/2014")));

// output:
// October
// November