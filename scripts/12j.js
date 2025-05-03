const multifly = (x, y) => {
    return x * y;
}
// console.log(multifly(2, 3));
// console.log(multifly(7, 10));

// const multifly = (x , y)=>  x * y;
// console.log(multifly(2,3));
// console.log(multifly(7,10));

const countPositives = (nums) => {
    let count = 0;

    nums.forEach(element => {
        if (element > 0) {
            count++;
        }
        console.log(element);

    });
    return count;
}

// console.log("The total number of positive elements are " + countPositives([1, -2, 5]));
// console.log("The total number of positive elements are " + countPositives([-2, 3, -5, 7, 10]));

const addNum = (arr, num) => {
    let newArr = arr.map((value, index) => {
        return value + num;
    })
    return newArr;
};

//console.log(addNum([1, 2, 3], 10));

const removeEgg = (foods, n = 2) => {
    let count = 0;
    const newFoods = foods.filter(item => {
        if (item === 'egg' && count < n) {
            count++;
            return false;
        } else {
            return true;
        }
    })
    return newFoods;

}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
