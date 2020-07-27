
const functions = {
    one: (func)=>{
        return (func!=undefined) ? func(1) : 1
    },
    two: (func)=>{
        return (func!=undefined) ? func(2) : 2
    },
    three: (func)=>{
        return (func!=undefined) ? func(3) : 3
    },
    four: (func)=>{
        return (func!=undefined) ? func(4) : 4
    },
    five: (func)=>{
        return (func!=undefined) ? func(5) : 5
    },
    six: (func)=>{
        return (func!=undefined) ? func(6) : 6
    },
    seven: (func)=>{
        return (func!=undefined) ? func(7) : 7
    },
    eight: (func)=>{
        return (func!=undefined) ? func(8) : 8
    },
    nine: (func)=>{
        return (func!=undefined) ? func(9) : 9
    },
    plus: (num1)=>{
        return function(res){
            return num1+res
        }
        
    },
    minus: (num1)=>{
        return function(res){
            return res-num1
        }
        
    },
    times: (num1)=>{
        return function(res){
            return num1*res
        }
        
    },
    dividedBy: (num1)=>{
        return function(res){
            return Math.floor(res/num1)
        }
        
    }

}
module.exports = functions