const functions = require('../lib/functions.js')

describe("Functions", ()=>{

    it("works for simpler case: return number", ()=>{
        const num = functions.one()
        expect(num).toEqual(1)
    })
    it("works multiplying two numbers", ()=>{
        const num = functions.seven(functions.times(functions.five()))
        expect(num).toEqual(35)
    })
    it ("works for substraction function", ()=>{
        const num = functions.eight(functions.minus(functions.three()))
        expect(num).toEqual(5)
    })
    it ("works dividing two numbers", ()=>{
        const num =functions.eight(functions.dividedBy(functions.three()))
        expect(num).toEqual(2)
    }
    )
})