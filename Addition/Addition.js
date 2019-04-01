var sum = (first, second) => {
    
    if (!first && !second ){
        return 0;
    }
    let all = 0;

    let element = (first, second) => {

        if (!first && !second) {
            return all;
        }

        if (!second) {
            all= all + first;

        } else if (second) {
            all = all + first + second;

        } 
        return element;
    }
    return element(first,second);
}

console.log(sum(2,3)(4)(8)(0,9)())