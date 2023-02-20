const numberToPhrase = (n)=>{
    const ones =  ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens =  ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds =  ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    const all = [ones, tens, hundreds];
    let res = "", idx=0;
    while( n % 100 !=0){
        const number = n % 10;
        res = all[idx][number] +" " +  res;
        idx++;
        n = Math.floor(n / 10);
    }
    console.log(res);
    
}

numberToPhrase(703);
numberToPhrase(999);
numberToPhrase(460);
numberToPhrase(20);