function snail(array){
    let snailArray = []
    let dir= "right"
    let i_max= array[0].length-1
    let j_max= array.length-1
    let i_min=0
    let j_min=0
    let flag = 0
    let j = 0
    let i = 0
    if (i_max != j_max){
        throw Error("Array is not square")
    }else{
    while(flag == 0){
        switch (dir){
            case ("right"):
                i=i_min
                j=j_min
                while(i<=i_max){
                    snailArray.push(array[j][i])
                    i++
                }
                j_min++
                dir = "down"
            case("down") : 
                i = i_max
                j = j_min
                while(j<=j_max){
                    snailArray.push(array[j][i])
                    j++
                }
                dir = "left"
                i_max--
            case("left") :
                i = i_max
                j = j_max
                while(i>=i_min){
                    snailArray.push(array[j][i])
                    i--
                }
                dir = "up"
                j_max--
            case("up") :
                j=j_max
                i=i_min
                while(j>= j_min){
                    snailArray.push(array[j][i])
                    j--
                }
                dir= "right"
                i_min++
        }      
        if(snailArray.length == array[0].length*array.length){
            flag = 1
            return snailArray
        }
    }
    }
}

module.exports = snail