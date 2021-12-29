// Write a JavaScript conditional statement to find the sign of product of three numbers. Displab an alert boa with the specified sign.

var a=1;
var b=-2;
var c=2;

if (a>0 && b>0 && c>0)
{
       alert("The sign is +");
}
else if (a<0 && b<0 && c<0)
        {
          console.log("The sign is -");
        }
        else if (a>0 && b<0 && c<0)
        {
          console.log("The sign is +");
        }
        else if (a<0 && b>0 && c<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }
// ouput:
//     The sign is -      