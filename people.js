const peopleNames = require("./names.js")
const peopleHobbies = require("./hobbies.js")

// const fullName = peopleNames('andrea', 'potenza')
// console.log(fullName)

// const hobbies = peopleHobbies('collezionare francobolli','equtazione','falegnameria')
// console.log(hobbies)

// function namesHobbies() {
//     return {peopleNames, peopleHobbies}
// }
// const people = namesHobbies(fullName, hobbies)
// console.log(people)

/**
 * {
 *  firstName: 'pippo',
 *  lastName: 'franco',
 *  hobbies: ['raccontare barzellette', 'cantare', 'bere con martufello']
 * }
 */

function namesHobbies() {

    const fullName = peopleNames('andrea', 'potenza')

    const hobbies = peopleHobbies('collezionare francobolli','equtazione','falegnameria')

    return {
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        hobbies: hobbies.hobbies
    }
}

console.log(namesHobbies());