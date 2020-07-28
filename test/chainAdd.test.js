const chainAdd = require('../lib/chainAdd.js')

describe("Chain add function", ()=>{
    it("works for simple case: two arguments", ()=>{
        sum = chainAdd(2)(3)
        expect(sum).toEqual(5)
    })

})