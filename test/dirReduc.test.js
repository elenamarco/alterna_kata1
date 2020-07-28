const dirReduc = require('../lib/dirReduc.js')

describe ("dirReduc function", ()=>{
    function expectedRes(path1,path2){
        const modifiedPath = dirReduc(path1)
        expect(modifiedPath).toEqual(path2)
    }
    it("works for simple case", ()=>{
        const path1 = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
        expectedRes(path1, ["WEST"])
    })
    it ("works with non reducible path", ()=>{
        const path1 = ["NORTH", "WEST", "SOUTH", "EAST"]
        expectedRes(path1, path1)
        
    })
    it("throws errror when array elements are not string type" ,()=>{
        const path1 = [3]
        expect(()=>{
            dirReduc(path1)
        }).toThrow("Array elements are not string type")
    })

})