data = [0, 1, 2, 4, 5, 6, 8, 9]; // 7
pattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

pattern.forEach(function(item){
    let patternitem = item
    let found = false;
    data.forEach(function(dataItem){
        if (dataItem === patternitem) {
            found = true;
            return
        } 
    })
    if (!found) {
        console.log(`${patternitem} is missing`);
    }
});
