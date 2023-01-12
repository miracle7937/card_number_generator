function generateCard() {
    let cardNum = "";
    let sum = 0;
    let digit = 0;
    while (sum % 10 !== 0 || cardNum.length !== 12) {
        cardNum = "";
        sum = 0;
        for (let i = 0; i < 12; i++) {
            digit = Math.floor(Math.random() * 10);
            cardNum += digit;
        }

        console.log("consoled----------" + cardNum);

        cardNum = cardNum.split('').reverse();
        console.log(cardNum.length);
        
        for (let i = 0; i < cardNum.length; i++) {
            digit = parseInt(cardNum[i]);
            if (i % 2 !== 0) {
                digit = digit * 2;
                if (digit > 9) {
                    digit = digit - 9;
                }
            }
            sum += digit;
        }
    }
  
    return cardNum.reverse().join().replaceAll(",", "");

}
console.log(generateCard());
