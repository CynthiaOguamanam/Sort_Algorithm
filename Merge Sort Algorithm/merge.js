let aa = [1];
  const mergeSort = (array) =>{
      if(array.length < 2){
          return array;
      }

      const mid = Math.floor(array.length/2);

      const myLeft = array.slice(0, mid);
      const myRight = array.slice(mid, array.length);

      return merge(mergeSort(myLeft), mergeSort(myRight))

  };

  const merge = (left, right) =>{
      let result = []

      while(left.length && right.length){
          if(left[0] > right[0]){
            result.push(left.shift())
          } else{
            result.push(right.shift())

          }
      }

      while(left.length){
          result.push(left.shift())
      }
      while(right.length){
        result.push(left.shift())
    }
    return result;
  };


  const myArray3 = [9, 1, 5, 7,0,3,8]   
  console.log(mergeSorty (myArray3))
