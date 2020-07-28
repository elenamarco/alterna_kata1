const snail = require('../lib/snail.js')

describe("Snail function", ()=>{
    it("works for simple case", ()=>{
        array1 = [[1,2,3],[4,5,6],[7,8,9]]
        array2 = snail(array1)
        expect(array2).toEqual([1,2,3,6,9,8,7,4,5])
    })
     it("throws error for arrays that are not square", ()=>{
        array1=[[1,2,3,4],[4,5,6,4],[7,8,9,4]]
         expect(()=>{
            snail(array1)
         }).toThrow("Array is not square")
    })

})