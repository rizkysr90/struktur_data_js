let init = [0,0,0,0,0]
let len = 0
// The length of array init is 0 but the capacity is five
//let's insert some value
init[0] = 100
len++
init[1] = 200
len++
init[2] = 300
len++

for (let i = len; i>=0; i--){
    init[i] = init[i-1]
}
init[0] = 99
len++
console.log(init)
