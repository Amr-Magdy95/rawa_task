const clock = (x) => {
  if (x.includes("am") || x.includes("pm")) {
    let a, b, c;
    let x1 = x.split(":");
    let x2 = x1[1].split(" ");
    a = x1[0];
    b = x2[0];
    c = x2[1];
    if (c == "am") {
      console.log(a + ":" + b);
    } else {
      a = +a + 12;
      console.log(a + ":" + b);
    }
  }else{
    let a, b,c = "am";
    let x1 = x.split(":");
    a = x1[0];
    b = x1[1];
    if( +a == 12 && b == "00" ){
        console.log("0:00");
        return;
    }
    if( +a >= 12){
         a-=12;
         c = "pm"
    }

    console.log(a+":"+ b +" " +c);
    
  }
};
clock("10:30 am");
clock("7:13 pm");
clock("19:00");
clock("12:00");
