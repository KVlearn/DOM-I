// You will be making a timer that:
//   * Counts up to 10 seconds => when secondTens ===1, stop
//   * Increments every 10 ms
//   * Has digits change to red when it gets to 10 seconds
//   * Should not count past 10 seconds 
``
// select values 
const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens"); /* when secondTens ===1, stop */
const secondOnes = document.getElementById("secondOnes"); /* when secondOnes ===0, increment secondTens */
const msHundreds = document.getElementById("msHundreds"); /* when msHundreds ===0, increment secondOnes. */
const msTens = document.getElementById("msTens"); /* when msTens ===0,increment msHundreds, and set msTens=0? */
const buttons=document.querySelectorAll('button')
const start = buttons[0];
const reset = buttons[1];

let  countermsec = 0;
let  countersec=0;
let  maxsec=0;
/*initialize*/
secondTens.textContent='0';/*assign as string, as its a const*/
secondOnes.textContent='0';
msHundreds.textContent='0';
msTens.textContent='0';
start.onclick = startTimer;
reset.onclick = resetTimer;
let timer;
function startTimer(){
    // digits.classList.add('yellowDigit');
timer = setInterval(runTimer,10) /*perform runTimer function at interval of every 10ms*/
}

function resetTimer(){
    secondTens.innerText="0"; /*assign as string, as its a const*/
    secondOnes.innerText="0";
    msHundreds.innerText="0";
    msTens.innerText="0";
    countermsec = 0;
    countersec=0;
    maxsec=0;
    digits.classList.add('yellowDigit');
    start.disabled =false;
}

/*Note,second parameter is in millisecond (ie 1s=1000ms)*/

function runTimer (){

msTens.innerHTML++;/*increment millisecond Tens for every 10ms (every call)*/
countermsec++;/* two counters, one for millisecond, another for second, note 1000ms is one second, here we increment interval by 10ms, so when the counter hits 100, we have incremented 1second */
countersec++;

if (countermsec ===10){ /* when millisec reaches 10 ie 100ms increase mshundreds */
msHundreds.innerHTML++;
msTens.innerHTML = 0;
countermsec =0;
}
if( countersec===100){ /* when second reaches 100 ie 10 times 10ms : 1000ms is done*/
secondOnes.innerHTML ++; /*increase ones in second */
msHundreds.innerHTML = 0;
countersec=0;
maxsec++;
}

if(maxsec === 10){
    secondTens.innerHTML =1;
    secondOnes.innerHTML =0;
    clearInterval(timer);
    digits.classList.remove('yellowDigit');
    digits.classList.add('redDigit');
    /*disable start button*/
    start.disabled =true;
}
}
    