

// Write a loop to iterate through the array and print out each name on a seperate line
let classList = ["Sara","George","Rufus","Gertrude","Santana","Yohannes","Ralph","Shannon","Martin","Oberlin"]

/*
for each name in classList print each name with a number
*/
classList.forEach(person => {

    console.log(classList.indexOf(person)+1 + ". " + person)
    
});

// let classList 

// Try iterating through the array to display the following output
//
// 1. Sara
// 2. George
// 3. Rufus
// 4. Gertrude
// 5. Santana
// 6. Yohannes
// 7. Ralph
// 8. Shannon
// 9. Martin
// 10. Oberlin
