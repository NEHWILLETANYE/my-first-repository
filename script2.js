//sample data to use
let fellows = [
    { name: "Sharon" , role: "Frontened", points: 75, category: "Tech"},
    { name: "Anita" ,  role:  "Backened", points: 88, category: "Tech"},
    { name: "Vanessa" , role: "Designer", points: 85, category: "Designer"},
    { name: "Precious" , role: "Data", points: 45, category: "Tech"},
    { name: "Rodrick" , role: "UI", points: 55, category: "Design"}// duplicate name
];

let numbers = [ 1, 2, 3, 2, 4, 5, 3, 1];


//Challenge 1: Find duplicates in a list
// Approach: Use a set to track items we've seen. If se see it again, add to duplicates array
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item)
        } else {
            seen.add(item);
        }
    }
    return [...duplicates];
}
console.log("Duplicates in numbers:", findDuplicates(numbers));//[2, 3, 1]


//Challenge 2: Count how many fellows scored above X
//Approach: Use.filter() to get fellows above the threshold, then check.length
function countAboveX(Fellows, X) {
    let topFellows = fellows.filter(fellow => fellow.points > X);
    return topFellows.length;
}
console.log("Fellows above 85 points:", countAboveX(fellows, 85));//2


//Challenge 3: Group items by category 
//Approach: Use.reduce() to build an object where keys are categories and values are arrays of fellows
function groupByCategory(fellows) {
    return fellows.reduce((grouped, fellows) => {
        let category = fellows.category;
        if (!grouped[ category]) {
            grouped[category] = []//Create new array for category
        }
        grouped[category].push(fellows);
        return grouped;
    } , {});
}
console.log("Fellows grouped by category:", groupByCategory(fellows));