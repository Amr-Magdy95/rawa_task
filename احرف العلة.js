const find_vowels = (phrase, n) =>{
    const vowels = "aieouAIEOU";
    let res = '';

    for (let i = 0; i < phrase.length; i++ ){
        if(vowels.includes(phrase[i])){
            res += phrase[i];
        }
    }

    if(res.length >= n){
        console.log(res);
    }
    else{
        console.log("Invalid\n");
    }
}
find_vowels('Queen', 3);
find_vowels('First Time', 3);
find_vowels('Apple', 2);
find_vowels('Riyadh', 2);
find_vowels('Riyadh', 3);