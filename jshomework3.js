function pow(x,y){
    let sobaka = 1;
    for(let i = 0;i < y;i++){
        sobaka *= x;
    }
    return sobaka;
}
console.log(pow(5,5));