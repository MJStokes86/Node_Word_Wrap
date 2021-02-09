// Problem Description

// You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, and a column number. The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number. You try to break lines at word boundaries.

// Like a word processor, break the line by replacing the last space in a line with a newline.
'use strict';



class Wrapper {
    static create() {
        Wrapper.new
    }
    // If it has empty space, it will break off the last one
    hasEmptySpace(string, col_num) {
        let space = string.substr(0, col_num).includes(" ");
        let index = string.substr(0, col_num).lastIndexOf(" ");

        return space ? index : col_num; // This determines if there is any space or not based on the input column number so the line of code can execute and produce the correct results
   }

   // The wrap function takes on two arguments known as the string and the column number. This function will execute the input string and the line breaks based on the length of the string and the given column number 

    wrap(string, col_num) {


       if (string.length <= col_num) {
         return string;
       }

       if (string.length >= col_num) {

        // The wrapLeft variable extracts the column number input from the input text. 
        
        // The wrapRight variable marks the beginning of the extraction at the position of the column number, then extracts the remainder of the string

        // The excessLines extracts the remaining lines
          
       const wrapLeft = string.substr(0, this.hasEmptySpace(string, col_num)).trim() 

       const wrapRight = string.substr(this.hasEmptySpace(string, col_num)).trim();

       const excessLines = this.wrap(wrapRight, col_num);
       
        // This returns the string with a new line
       return [wrapLeft, excessLines].join("\n");
       

       }


    }

    

}

  
 console.log(Wrapper.prototype.wrap("hello world", 5)); 
 //Should return "hello\nworld"
  
  module.exports = Wrapper;
  