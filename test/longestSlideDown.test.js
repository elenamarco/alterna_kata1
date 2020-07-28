const longestSlideDown = require('../lib/longestSlideDown.js')

describe ("Longest slide down function", ()=>{
    it ("works for simple case", ()=>{
        res = longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])
        expect(res).toEqual(23)
    })
    // it ("works with repeated numbers", ()=>{
    //     res = longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 9, 9, 3]])
    //     expect(res).toEqual(30)
    // })
})