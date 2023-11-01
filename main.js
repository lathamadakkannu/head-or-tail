var a=prompt("Enter the word head or tail");

const result=new Promise((resolve,reject)=>{
    //let toss=true;
    //let  toss=false;
    if(a=="head"){
        resolve()
    }
    else if (a=="tail"){
        reject()
    }
    else{
        document.write("Enter the correct word-head or tail")
    }
})
result.then(success).catch(failure)
function success(){
    document.write("Toss Head or Tail:<br><br>")
    document.write("The Toss is Head- Success");
}
function failure(){
    document.write("Toss Head or Tail:<br><br>")
    document.write("The Toss is Tail- Failure");

}




