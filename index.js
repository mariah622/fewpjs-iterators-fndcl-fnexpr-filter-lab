// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (driver, string){
    return driver.filter( match => match.toLowerCase() === string.toLowerCase())
    

}


function fuzzyMatch (driver, string){
    return driver.filter (match => match.toLowerCase().indexOf(string.toLowerCase()) === 0)

}

function matchName (driver, string) {
    return driver.filter ( driver => driver.name === string)

}