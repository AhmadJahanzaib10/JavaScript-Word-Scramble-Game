const wordText = document.querySelector('.word');
const wordHint = document.querySelector('.hint span');
const timeText = document.querySelector('.time b');
const refreshBtn = document.querySelector('.refresh');
const checkBtn = document.querySelector('.check');
const input = document.querySelector('input');
let correctWord, Timer;

const words = [ 
    {word:"javascript",hint:"Popular Scripting Language"},
    {word:"amazon",hint:"Biggest Online Store"},
    {word:"microsoft",hint:"Top Tech Institute"},
    {word:"chatgpt",hint:"Recently Launched AI"},
];

const initTimer = (maxTime)=>{
  clearInterval(Timer);
  Timer = setInterval(() => {
    if(maxTime > 0){
      maxTime--;
      return timeText.innerHTML = maxTime;
    }
    clearInterval(Timer);
    alert(`Time Up ${correctWord.toLocaleUpperCase()} was the correct word.`);
    initGame();
  }, 1000);
}



function initGame(){
     initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]; // retrives random object from words array.

    let wordsArray = randomObj.word.split("");  // creates array of the retrived word seprating them by each letter.

    for(let i=0; i<=(wordsArray.length -1); i++){
      let j =  Math.floor(Math.random() * i);  // genertaes a random integer number in between the length of wordsArray.
      // Shuffling and swiping wordArray letters randomly
      let temp = wordsArray[i];
      wordsArray[i] = wordsArray[j];
      wordsArray[j] = temp;
    }
    wordText.innerHTML = wordsArray.join("");
    wordHint.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    input.value = "";
    input.setAttribute("maxlength", correctWord.length);
    
}
initGame();

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", ()=>{
  let userWord = input.value.toLocaleLowerCase();
    if(!userWord){
      return alert(`Please enter a word.`);
    }
    if(userWord !== correctWord){
      return alert(`Oops!! ${userWord} is not correct word.`);
    }
    else{
      alert(`Congrats! ${userWord} is  correct word.`);
      input.value = "";
      initGame();
   }
});


