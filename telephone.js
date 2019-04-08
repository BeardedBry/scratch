function telephoneCheck(str) {
    let regex =/(^1?|^\s?)\s?(?:(\(\d{3}\)|\d{3}))\-?\s?(\d{3})\-?\s?(\d{4})$/;
     return regex.test(str);
   }
   

  console.log(telephoneCheck("2 (757) 622-7382"));