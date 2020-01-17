//MAp

  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// "nap,teachers,ear" or "PAN,cheaters,era"

let map = new Map();

for(let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("")
    map.set(sorted,word)
    
}

