// Code your solution here
function findMatching(drivers, letter) {
  return drivers.filter(driver => driver.toLowerCase().includes(letter.toLowerCase()))
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()))
}
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
