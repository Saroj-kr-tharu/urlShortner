

// number to binary
const NumberToBinary = (number) => {

    return number.toString(2);

}



// 4.1 pad the binary number to ensure it's length is multiple of 6
const BinaryPadded = (binaryNumber) => {
    return binaryNumber.padStart(Math.ceil(binaryNumber.length / 6) * 6, '0');
}

// 4.2 Split into array of 6 bits each and binary number to string by comparing with EncodeData 
const NumberToString = (Number, encodeData) => {

    const currentBinary = NumberToBinary(Number);
    const paddedBinary = BinaryPadded(currentBinary);


    let shortUrlArray = [];

    for (let i = 0; i < paddedBinary.length; i += 6) {
        const binaryChunk = paddedBinary.slice(i, i + 6);

        const char = encodeData[binaryChunk];
        if (char) {
            shortUrlArray.push(char);
        }
    }

    return shortUrlArray.join('');
   
}

module.exports = NumberToString;