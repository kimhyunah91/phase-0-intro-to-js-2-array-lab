// Write your solution here!
const cats = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph)
  return cats
}
function destructivelyPrependCat(Bob) {
  cats.unshift(Bob)
  return cats
}
function destructivelyRemoveLastCat(Garfield) {
  cats.pop(Garfield)
  return cats
}
function destructivelyRemoveFirstCat(Milo) {
  cats.shift(Milo)
  return cats
}
function appendCat(Broom) {
  const newcats = [...cats, Broom]
  return newcats
}
function prependCat(Arnold) {
  const addCats = [Arnold, ...cats]
  return addCats
}
function removeLastCat(Milo, Otis){
  const goneCats = cats.slice (0, 2)
  return goneCats
}
function removeFirstCat(Otis, Garfield) {
  const letsGoCats = cats.slice(1)
  return letsGoCats
}