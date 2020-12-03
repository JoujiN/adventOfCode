const list = [1721,979,366,299,675,1456]
let res

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (j === i) {
            continue
        } else if (list[i] + list[j] === 2020) {
            res = list[i] * list[j]
            break
        }
        
    }
    
}

console.log("Answer is ", res)