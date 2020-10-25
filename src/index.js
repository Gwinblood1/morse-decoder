const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function translate(str) {
  let letter = MORSE_TABLE[str];
  let l="";
     return letter;
 }
 
function decode(expr) {
  //   tmpArrayNumber = [];
  //   tmpStringNumber = "";
    
  //   for (let i = 0; i < expr.length; i += 10) {
  //     tmpStringNumber = expr.substring(i, i + 10)
  //     oneNumber = ""
  //     for (let j = 0; j < tmpStringNumber.length; j += 2) {
  //       tmpOneNumber = tmpStringNumber.substring(j, j + 2)
  //       if (tmpOneNumber == "00") {
  //         oneNumber += ""
  //       } else if (tmpOneNumber == "11") {
  //         oneNumber += "-"
  //       } else if (tmpOneNumber == "10") {
  //         oneNumber += "."
  //       }
  //     }
  
  //     if (oneNumber == "") {
  //       oneNumber += "**********"
  //     }
  //     tmpArrayNumber.push(oneNumber)
  //     tmpStringNumber = ''
  //   }
  
  
  //   finalArray = []
  //   for (let i = 0; i < tmpArrayNumber.length; i++) {
  //     if (tmpArrayNumber[i] == "**********") {
  //       finalArray.push(" ")
  //       continue
  //     }
  //     for (let [key, value] of Object.entries(MORSE_TABLE)) {
  //       if (tmpArrayNumber[i] == key) {
  //         finalArray.push(value)
  //       }
  //     }
  //   }
  //   console.log(finalArray.join(""))
  //   return finalArray.join("")
  // }
  
    let solution = "";
    let string = "";
    let number = "";
    for (let i = 0, j=1 ; i <= expr.length; i++ , j++) {
        if(expr.charAt(i)!="0"){
            number = expr.charAt(i) + expr.charAt(i+1);
            if(number == "10"){
                string += ".";
            }
            else if(number == "11"){
                string += "-";
            }
            else if(number == "**"){
                solution += " ";
                i += 8;
                j = -1;
            }
        }
        i++;
        j++;
        if(j == 10){
            j = 0;
            solution += translate(string);
            string = "";
        }
    }
    return solution;
}
  
  module.exports = {
    decode
  }