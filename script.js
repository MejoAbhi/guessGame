let write = document.getElementById('write');
let btn = document.getElementById('btn');
let note = document.getElementById('note');
let count = document.getElementById('count');
let totalCount = 1;
let ans = Math.floor(Math.random()*100)+1;

btn.addEventListener('click',()=>{
    if(write.value==''){
         note.innerHTML ="Please enter a Number"
         write.value=''
    }else{

        guessTheNumber()
    }
    
    


})
console.log(ans);

function guessTheNumber(){
    if(write.value>ans){

        note.innerHTML = "Number is high from the actual value";
        count.innerHTML ="Attempt:-"+totalCount++;
        write.value =""
    }
    else if(write.value<ans){

        note.innerHTML = "Number is low from the actual value";
        count.innerHTML ="Attempt:-"+totalCount++;
        write.value =""
    }
   else{
        note.innerHTML ="Congratulations!!! You got it..";
        setTimeout(() => {
            resetGame();
        }, 2000);
    }

}
function resetGame(){
    totalCount=0
    let ans = Math.floor(Math.random()*100)+1;
    note.innerHTML ="";
    count.innerHTML ="";
    write.value ="";
}
