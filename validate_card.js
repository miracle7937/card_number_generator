function validateCard(cardNum) {
    // Convert cardNum to a string and reverse it
    cardNum = cardNum.toString().split('').reverse();

    // Initialize sum variable
    let sum = 0;

    // Loop through the digits
    for (let i = 0; i < cardNum.length; i++) {
        let digit = parseInt(cardNum[i]);
        if (i % 2 !== 0) {
            digit = digit * 2;
            if (digit > 9) {
                digit = digit - 9;
            }
        }
        sum += digit;
    }

    // Check if sum is divisible by 10
    return sum % 10 === 0;
}