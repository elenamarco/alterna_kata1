function longestSlideDown(pyramid){
    let i = 0
    let j = 1
    let slide = []
    let sum = pyramid[0][0]
    while(j < pyramid.length){
        if(pyramid[j][i] < pyramid[j][i+1]){
            sum += pyramid[j][i+1]
            i++
        }
        else if (pyramid[j][i] > pyramid[j][i+1]){
            sum += pyramid[j][i]
        }
        // else if(pyramid[j][i]==pyramid[j][i+1]){
        //     let i_pos = [i, i+1]        
        //     while(pyramid[j][i]==pyramid[j][i+1] && j < pyramid.length){
        //         sum += pyramid[j][i]
        //         j++
        //         i++
        //         i_pos.push(i+1)
        //     }
        // }
        j++
        }
    return sum

}

module.exports = longestSlideDown