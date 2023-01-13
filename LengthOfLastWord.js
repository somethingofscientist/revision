// 58. Length of Last Word


let s = "chetan  is coming ba4ck"

function length(s) {

    let str1 = s.trim().split(" ")
    console.log(str1.length)
    let res =  str1[str1.length -1]
    console.log(res)
    let r = res.length
    return r
}

console.log(length(s))