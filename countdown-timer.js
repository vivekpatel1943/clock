//create a counter in javascript countdown from 30 to 0;
function counter(n){
    
    let i = n;

    let intervalID =   setInterval(function(){
                            console.log(i--);
                        },1000)



    setTimeout(function(){
        clearInterval(intervalID);
    },(n+2)*1000)
    
    
}

counter(10);





