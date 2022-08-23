// for(i=0; i<= 10; i++){
//     console.log(i)
// };

//recall
//recursive function
// const count = (n) =>{
//     for(i=n; i>= 0; i--){
//         console.log(i)
//     }
// };
// count(10)

// const reCall = (n) =>{
//     if(n === 0) {
//         return
//     }
//     console.log(n)
//     return reCall(n-1);
// }

// console.log("this is recall", reCall(10))

// //Fibonacci helps us to get data from a sequence(following its index position): first  value is added to the second value to give the result

// const fibonacci = (n) =>{

//     if(n < 2){
//         return 1
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// };

// console.log(fibonacci(40));

// //if a large number is inputed it takes time to compile, therefore the presence of MEMORISED FIBONACCI: which stored the last countdown and adds new input to avoid the recompilaton

// const memoFib = (index, array) => {
//     array = array || [];

//     if(array[index]){
//         array[index];
//     }else {
//         if(index < 2) {
//             return 1
//         } else {
//         array[index] = memoFib(index -1, array) + memoFib(index -2, array)
//         }
//     }
//     return array[index];
// }
// console.log("memoFib: ", memoFib(1000))
//@ 10,000 it stopped cos the array is full



//HarmlessRandomnote algorithm takes two parameter: detects sort of an hate speech

const harmless = (testNote, speechNote) => {
    let dataSet = speechNote.split("");
    let testData = testNote.split("");

    let dataObject = {}
    //iterate through the speech and put in the object

        dataSet.forEach((word) => {
            if(!dataObject[word]){
                dataObject[word] = 0
            }
            dataObject[word]++;
        });

            //checks and removes one if it matches if true, good if false., it throws false...
            
        // return dataObject;
};

console.log(harmless ("", "This is a boy and the boy loves to play so give the boy a break"))
