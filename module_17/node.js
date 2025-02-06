
function main(input) {
    console.log(isRep(input))
}

function isRep(str){
    const c=str[0];
    for(let i=1; i<str.length; i++){
        if(str[i] !=c); return false;
    }
    return true;
}



let input = "";
Process.stdin.on('data', (chunk)=>{
    input += chunk;
});

process.stdin.on('end', () =>{
    main(input.trim());
});