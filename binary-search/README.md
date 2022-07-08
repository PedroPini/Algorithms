## Binary Search

Is an algorithm for finding an item from a _sorted_ list of items. So we will always need a sorted array
in order to apply a binary search algorithm.

Having emphasized this requirement, the next steps are very easy

```
//Sorted array
const values = [0,1,2,3,4,5,6,7,8,9,10]

const binary = (val, array) => {
 //lower will always be the first position of the array(as it's a sorted array will always be the smallest number)
 let lower = array[0];
 //upper will follow the same idea, just being the biggest number
 let upper = array[array.length -1];
 while(lower <= upper){
   // now we break the array in half, very important is to use Math.floor as sometimes your division can be decimal and we are looking for integer numbers
   const middle = Math.floor((upper-lower)/2);

   if(val === array[middle]){
     return middle;
   }
   //if our number is bigger than our middle we decrease upper value or if it's bigger we increase
   if(val < array[middle]){
     upper = middle - 1;
   } else{
     upper = middle + 1;
   }

 }
 return -1;
}
```
