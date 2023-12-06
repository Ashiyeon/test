// 1. JavaScript: 字串反轉


function reverseString(str) {
  // 實作你的解答
  let newString = [];
  for( let i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”




// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 

// 範例：

function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  return numbers.filter(function(number){
      return number > 5;
  })
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]





// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因


function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}

console.log(formatName("Ashi", "Weng")); // 預期輸出: Ashi Weng
console.log(formatName("Ashi", ""));     // 預期輸出: Ashi
console.log(formatName("", "Weng"));     // 預期輸出:  Weng
console.log(formatName("", ""));         // 預期輸出: 


function formatName(firstName, lastName) {
  let formattedName = '';
  
  // 如果 firstName 存在，直接賦值給 formattedName
  if (firstName) {
    formattedName = firstName;

    // 在內部的條件中，檢查 lastName 是否存在，如果存在則追加到 formattedName 中
    if (lastName) {
      formattedName += ' ' + lastName;
    }
    
  } else if (lastName) {
    // 如果 firstName 不存在但 lastName 存在，則將 lastName 賦值給 formattedName
    formattedName = lastName;
  }

  return formattedName;
}


console.log(formatName("Ashi", "Weng")); // 預期輸出: Ashi Weng
console.log(formatName("Ashi", ""));     // 預期輸出: Ashi
console.log(formatName("", "Weng"));     // 預期輸出: Weng
console.log(formatName("", ""));         // 預期輸出: 






