// We analyze assembly line codes
// PART 1: define the function and pass parameters
function assembly(currentStation, currentLine, x1, x2, n, a, t) {
    // PART 2: check the current station and the current line either exit or exit on the next line
    if (currentStation == n - 1) { // if the current station is the last station
        if (currentLine == 0) { // if the current line is 0 we exit
            return x1; // time to exit
        } else {
            return x2;
        }
    }

    // PART 3: same line
    let same = assembly(currentStation + 1, currentLine, x1, x2, n, a, t) + a[currentLine][currentStation + 1];

    // PART 4: different line
    let differentLine = assembly(currentStation + 1, currentLine == 0 ? 1 : 0, x1, x2, n, a, t)
        + a[currentLine == 0 ? 1 : 0][currentStation + 1] + t[currentLine][currentStation + 1];

    // PART 5: check the least time taken on both line 0 and line 1 = we take the minimum
    return Math.min(differentLine, same);
}

// PART 6: we declare the main function
function main() {
    const n = 4; // these are the number of stations

    let a = [
        [4, 5, 3, 2], // nodes on line 1
        [2, 10, 1, 4] // nodes on line 2
    ];
    let t = [
        [0, 7, 4, 5],
        [0, 9, 2, 8]
    ];

    const e1 = 10;
    const e2 = 12;
    const x1 = 18;
    const x2 = 20;

    const x = assembly(a, 0, 0, x1, x2, n, t) + e1 + a[0][0];
    const y = assembly(a, 1, 0, x1, x2, n, t) + e2 + a[1][0];

    console.log(Math.min(x, y));
}

main();
