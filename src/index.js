module.exports = function check(str, bracketsConfig) {
    if(str.length%2 !== 0) return false

    let brackets

    for(let i = 0; i < bracketsConfig.length; ) {
        brackets = bracketsConfig[i].join('')
        if(str.includes(brackets)) {
            str = str.replace(brackets, '')
            i = 0
        }
        else i++
    } 
   
    return str.length === 0 ? true : false 
}
