

const  RandomGenerator = (start, end) => {
    // Ensure start and end are numbers
    start = Number(start);
    end = Number(end);
    
    // Swap if start is greater than end
    if (start > end) {
        [start, end] = [end, start];
    }
    
    // Generate random number in range (inclusive)
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


module.exports = RandomGenerator;