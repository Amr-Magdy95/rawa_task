const sepString = (x)=>{
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "", idx=0;
    while (idx < x.length){
        if(alpha.includes(x[idx])){
            res = res + " " + x[idx].toLowerCase();
        }
        else{
            res += x[idx];
        }
        idx++;
    }
    console.log(res);

}
sepString("wePlayTennis");
sepString("iLikeCats");
sepString("computerScience");
sepString("thankYou");