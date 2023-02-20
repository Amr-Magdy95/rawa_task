const odd_even = (n)=>{
    let even = 0, odd = 0;
    while(n % 10 != 0){
        const lastDigit = n % 10;
        if( lastDigit % 2 ==0 ){
            even += lastDigit;
        }
        else{
            odd += lastDigit;
        }
        n = Math.floor(n/10);
    } 
    if( odd >  even){
        console.log('odd');

    }
    else if ( even > odd){
        console.log('even');
    }
    else{
        console.log('equal');
    }
}

odd_even(97428);
odd_even(81961);
odd_even(54870);
odd_even(26341);