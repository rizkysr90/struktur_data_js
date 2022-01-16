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

//let say i will insert element at index 1

for (let i = len; i >= 1; i--) {
    if (i === 1) {
        init[i] = 1000
        len++
    } else {
        init[i] = init[i-1]
    }
}

console.log(init)