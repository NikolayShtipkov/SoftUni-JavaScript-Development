function solve(n){
    
    if(n > 65){
        console.log('elder');
    }
    else if(n > 19){
        console.log('adult');
    }
    else if(n > 13){
        console.log('teenager');
    }
    else if(n > 2){
        console.log('child');
    }
    else{
        console.log('baby');
    }
}