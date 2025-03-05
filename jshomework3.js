function pow(x,y){
    let sobaka = 1;
    for(let i = 0;i < y;i++){
        sobaka *= x;
    }
    return sobaka;
}
console.log(pow(5,5));

///  
// function pow(x,y){
//     let i = 0;
//     while (i < y) {
//     result *= x;                   ////ще один спосіб
//     i++;
//   }
//   return result;
// }
// console.log(pow(7,8));
