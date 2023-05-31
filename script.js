let lb=document.getElementById('leftb');
let rb=document.getElementById('rightb');
console.log(rb);
let counter=0;
let div= document.getElementsByClassName('hello')
lb.addEventListener('click',(e)=>{
    counter--;
    if(counter==-1)
    {counter=5;
    }
    console.log(counter);
    console.log(div[0])
    div[0].innerHTML= `<img src="images/${counter}.png" alt='hello' >`
})
rb.addEventListener('click',(e)=>{
    counter++;
    if(counter==6)
    {counter=0;
    }
    console.log(counter);
    console.log(div[0])
    div[0].innerHTML= `<img src="images/${counter}.png" alt='hello' >`
})
