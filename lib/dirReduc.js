function dirReduc(path1){
    let modifiedPath=path1
    let i = 0
    if(path1.every(i => (typeof i === "string"))){
                while (i < path1.length-1) {
                    if(path1[i]== 'NORTH' && path1[i+1] == 'SOUTH'){
                        modifiedPath.splice(i,2)
                        i=0           
                    }
                    else if (path1[i]== 'SOUTH' && path1[i+1] == 'NORTH'){
                        modifiedPath.splice(i,2)
                        i=0 
                    }
                    else if (path1[i]== 'EAST' && path1[i+1] == 'WEST'){
                        modifiedPath.splice(i,2)
                        i=0 
                    }
                    else if (path1[i]== 'WEST' && path1[i+1] == 'EAST'){
                        modifiedPath.splice(i,2)
                        i=0 
                    }
                    else{
                        i++
                    }
                }
                return modifiedPath
    }
    else{
        throw Error ("Array elements are not string type")
    }
}

module.exports = dirReduc