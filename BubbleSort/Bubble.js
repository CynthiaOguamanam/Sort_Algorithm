const myArray = [9, 1, 5, 7,0,3,8]

const myArray2 = [
    {name:'Cynthia', age: 18},
    {name:'Precious', age: 12},
    {name:'Luciana', age: 23},
    {name:'Blessing', age: 15},
]


    myArray2.sort((a,b)=>{
        return a-b
    });

    console.log('This is the unsorted out', myArray)


        //i being the path = n-1; and j the loop = n-1...
    const a = myArray;
    const n = a.length;
    //adding -i  for(i=0; i<n-1 -i; i++) to the code it makes it stop iterating immediately the condition is met; whereby the set is in ascending order;
    for(i=0; i<n-1 ; i++){
        for(j=0; j<n-1; j++){
            if(a[j] > a[j+1]){
                let swap = a[j];
                a[j] = a[j+1];
                a[j+1] = swap
            }
        }
    }
  console.log('This is sorted out', a)

  



