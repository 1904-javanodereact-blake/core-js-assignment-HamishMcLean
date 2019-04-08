/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  //square
    if (shape === 'square') { //printing square
      for(let i=height; i>0; i--){ //vertical printing
        for(let j=height; j>0; j--){ //horizontal printing
          process.stdout.write(character);
        }
        process.stdout.write("\n");
      }
    }
  //triangle
    if (shape === 'triangle'){ //printing triangle
      for(let i = 0; i< height; i++){ //vertical printing
        for(let j = 0; j <=i; j++){ // horitzontal printing
          process.stdout.write(character);
        }
        process.stdout.write("\n");
      }
    }
  //diamond
  if (shape === 'diamond'){// a broken diamond code ... I will one day come back and complete this
    for(let row = 0; row<height; row++){// loop for row
      for(let column=0; column<height; column++){//
        if(row < Math.ceil(height/2)){
        if((column<(Math.ceil(height/2)-row)) || (column>Math.ceil(height/2)+row)){
          process.stdout.write(' ');
        }
        else{
          process.stdout.write(character);
        }
      }
       /* if(row > Math.ceil(height/2)){
          if((column<(Math.ceil(height/2)-row*2-2) || (column>(height/2)+row)){
            process.stdout.write(' ');
          }
          else{
            process.stdout.write(character);
          }
        }*/
      }
      
      process.stdout.write("\n");
    }
  }
}

printShape('diamond', 5, '%');