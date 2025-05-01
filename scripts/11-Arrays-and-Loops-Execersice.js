// const nums=[10,20,30];
// console.log(nums);
// nums[nums.length-1]=99;
// console.log(nums);


// const says = ['hi','hello','good'];

// function getLastValue(array){

//     return array[array.length-1];
// }

// console.log(getLastValue(says));
// console.log(getLastValue(nums));


// const nums=[1,20,22,24,5];

// function arraySwap(nums){

//     for(let i=0; i<nums.length/2 ; i++){
//         temp=nums[i];
//         nums[i] = nums[nums.length-i-1];
//         nums[nums.length-i-1] = temp;
//     }

//     return nums;
// }

// console.log(arraySwap(nums));
// console.log(arraySwap( ['hi','hello','good']));

// for(let i=0;i<=5;i++){
//     console.log(i*2);
// }

// for(let i=0;i<=5;i++){
//     console.log(5-i); 
// }

// let i=0;
// while(i<=5){
//     console.log(i*2);
//     i++;
// }
// let i=0;

// while(i<=5){
//     console.log(5-i);
//     i++;
// }

// function increseByOne(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 1;
//     }
//     return arr;
// }
// console.log(increseByOne([1,20,22,24,5]));

// function addnum(arr,num){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i]+num;
//     }
//     return arr;
// }

// console.log(addnum([10,20,30],4));

// function addArrays(arr1,arr2){

//     for(let i=0;i<arr1.length;i++){
//         arr1[i]=arr1[i]+arr2[i];
//     }
//     return arr1;
// }
// console.log(addArrays([1,1,2],[1,1,2]));

// function countPositiveNumber(arr){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=0){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countPositiveNumber([1,-3,5]));
// console.log(countPositiveNumber([-2,3,-5,7,10]));

// function minMax(nums){
//     if(nums.length === 0){
//         return {'min':null,'max':null}
//     }
//     let mini = nums[0];
//     let maxi = nums[0];
//     for(let i=1;i<nums.length;i++){

//         if(nums[i]>maxi){
//             maxi=nums[i];
//         }
//         if(nums[i]<mini){
//             mini=nums[i];
//         }

//     }
//     return {'min':mini,'max':maxi};
// }
// console.log(minMax([1,-3,5]));

// function countWords(words) {
//     let obj = {};
//     for (let i = 0; i < words.length; i++) {
//         const word =words[i];
//         obj[word]=(obj[word]||0  )+1;
//     }
//     return obj;
// }

// console.log(countWords(['apple', 'grapes', 'appel', 'apple']));


// const arr1=[10,20,30];
// const arr2=arr1.slice();
// arr2[1]=33;
// console.log(arr1);
// const [first,second,third] = [1,2,3];
//console.log(first + second + third);

// for (let i = 1; i <= 10; i++) {
//     if (i%3===0) {
//         continue;
//     }
//     console.log(i);
// }

// function check(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 'search'){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(check(['hello','world','search','good']));
// console.log(check(['not','found']));


// function findIndex(array,word){
//     for(let i=0;i<array.length;i++){

//         if(array[i] === word){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndex(['green','red','blue','red'],'red'));
// console.log(findIndex(['green','red','blue','red'],'yellow'));


// function removeEggs(foods){

//     for(let i=foods.length-1;i>=0;i--){

//         if(foods[i] === 'egg'){
//             foods.splice(i,1);
//         }
//     }
//     return foods;
// }

// const foods=['egg','apple','egg','egg','ham'];
// // foods.reverse();
// // console.log(foods);

// // console.log(removeEggs(foods));

// const foods1=foods.reverse().slice();
// foods1[0]=0;o
// console.log(foods);
// console.log(foods1);


// for(let i=1;i<=20;i++){

//     if(i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz");
        
//     }
//     else if (i%3 === 0){
//         console.log("Fizz");
        
//     }else if(i%5 === 0){
//         console.log("Buzz");
        
//     }else{
//         console.log(i);
        
//     }
// }


// function unique(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(! newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(unique(['green','red','blue','red']));
// console.log(unique(['red','green','green','red']));












