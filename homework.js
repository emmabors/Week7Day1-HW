//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names, dog_string){
    for(let name of dog_names){
        if (dog_string.includes(name)){ 
            return `Matched ${name}`
    } else {
            return `No Match`
    }
    }   
}
    
console.log(findWords(dog_names,dog_string))

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0){
            console.log(i);
        } 
    }
return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// codewars #1//

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  var splitString = str.split('');
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join('');
  return joinArray
}

console.log(solution('world'))
console.log(solution('word'))

// codewars #2//

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't

function lovefunc(flower1,flower2){
    if (flower1 % 2 == 0&&flower2 % 2 !== 0) {
        return true
    }else if(flower1 % 2 !== 0&&flower2 % 2 == 0){
        return true
    }else return false
}
