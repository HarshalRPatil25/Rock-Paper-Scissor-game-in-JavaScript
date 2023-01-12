
    const computer_choice=document.getElementById('computer_choice');
    const user_choice=document.getElementById('user_choice');
    const result_choice=document.getElementById('result');
    const btn=document.querySelectorAll('button')
    let userchoice;
    let compechoice;
    let resulte;

btn.forEach(btn=>btn.addEventListener('click',(e)=>{



    userchoice=e.target.id;
    user_choice.innerHTML=userchoice;
    compchoice()
    res()
}
))
function compchoice() {
  const num = Math.floor(Math.random() * 3) + 1 
  
  if (num === 1) {
     compechoice = 'Rocks'
  }
  if (num === 2) {
    compechoice = 'Scissors'
  }
  if (num === 3) {
    compechoice = 'Papers'
  }
  computer_choice.innerHTML = compechoice;
}


function res(){
    if(userchoice===compechoice){
        resulte="It's a draw";
    }
     if(compechoice=='Rocks' && userchoice==='Papers'){
        resulte='You win'
        }
     if(compechoice==='Rocks' && userchoice==='Scissors'){
        resulte="You loose";
    }
     if(compechoice==='Papers' && userchoice==='Scissors'){
        resulte="You Win";
    }
     if(compechoice==='Papers' && userchoice==='Rocks'){
        resulte="You loose";
    }
     if(compechoice==='Scissors' && userchoice==='Rocks'){
        resulte="You Win";
    }
     if(compechoice==='Scissors' && userchoice==='Papers'){
        resulte='You losse';
    }

   result_choice.innerHTML=resulte;

}

