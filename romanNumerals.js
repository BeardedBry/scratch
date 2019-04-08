function convertToRoman(num) {
  num = num.toString();
  let length = num.length;
  let romanNum = [];
  
  if(num.charAt(length-1) > 0){
      console.log(num.charAt(length-1))
    romanNum.push(ones(num.charAt(length-1)));
  }

  if(num.charAt(length-2) > 0){
    console.log(num.charAt(length-2))
    romanNum.push(tens(num.charAt(length-2)));
  }

  if(num.charAt(length-3) > 0){
    console.log(num.charAt(length-3))
    romanNum.push(hunds(num.charAt(length-3)));
  }

  if(num.charAt(length-4) > 0){
    console.log(num.charAt(length-4))
    romanNum.push(thous(num.charAt(length-4)));
  }
  
 return romanNum.reverse().join('');
}

console.log(convertToRoman(36));

function ones(n){
    n = Number(n);
  let newN = '';
  switch(n){
    case 1:
      newN += 'I';
      break;
    case 2:
      newN += 'II';           
      break;
    case 3:
      newN += 'III';
      break;
    case 4:
      newN += 'IV';
      break;
     case 5:
      newN += 'V';
      break;
    case 6:
      newN += 'VI';
      break;
    case 7:
      newN += 'VII';
      break;
    case 8:
      newN += 'VIII';
      break;
    case 9:
      newN += 'IX';
      break;
   }
  return newN;
  }

  function tens(n){
    n = Number(n);
    let newN = '';

    switch(n){
        case 1:
          newN += 'X';
          break;
        case 2:
          newN += 'XX';           
          break;
        case 3:
          newN += 'XXX';
          break;
        case 4:
          newN += 'XL';
          break;
         case 5:
          newN += 'L';
          break;
        case 6:
          newN += 'LX';
          break;
        case 7:
          newN += 'LXX';
          break;
        case 8:
          newN += 'LXXX';
          break;
        case 9:
          newN += 'XC';
          break;
       }
      return newN;
      }

      function hunds(n){
        n = Number(n);
        let newN = '';
    
        switch(n){
            case 1:
              newN += 'C';
              break;
            case 2:
              newN += 'CC';           
              break;
            case 3:
              newN += 'CCC';
              break;
            case 4:
              newN += 'CD';
              break;
             case 5:
              newN += 'D';
              break;
            case 6:
              newN += 'DC';
              break;
            case 7:
              newN += 'DCC';
              break;
            case 8:
              newN += 'DCCC';
              break;
            case 9:
              newN += 'CM';
              break;
    }
    return newN;
}

function thous(n){
    n = Number(n);
    let newN = '';

    switch(n){
        case 1:
          newN += 'M';
          break;
        case 2:
          newN += 'MM';           
          break;
        case 3:
          newN += 'MMM';
          break;
        case 4:
          newN += 'MV';
          break;
         case 5:
          newN += 'V';
          break;
        case 6:
          newN += 'VM';
          break;
        case 7:
          newN += 'VMM';
          break;
        case 8:
          newN += 'VMMM';
          break;
        case 9:
          newN += 'MX';
          break;
       }
      return newN;
      }