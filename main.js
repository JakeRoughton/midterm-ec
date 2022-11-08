function twoSmallest(arr){
  let num1 = arr[0];
  let num2 = arr[1];
  for(let i=0; i<arr.length;i++){
    if(arr.length < 1){
      return undefined;
    }
    else if(arr[i]<num1){
      num2=num1;
      num1=arr[i];
    }else if(i>0 && arr[i]<num2){
      num2=arr[i]
    }
  }
  return [num1,num2];
}

 if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }


 module.exports = {
    twoSmallest,
  }
