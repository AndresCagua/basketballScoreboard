let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let countHome = 0;
let countGuest = 0;
function plus1H(){
    countHome += 1
    homeScore.textContent = countHome 
}
function plus1G(){
    countGuest += 1
    guestScore.textContent = countGuest 
}
function plus2H(){
     countHome += 2
    homeScore.textContent = countHome 
}
function plus2G(){
   countGuest += 2
    guestScore.textContent = countGuest
}
function plus3H(){
     countHome += 3
    homeScore.textContent = countHome 
}
function plus3G(){
   countGuest += 3
    guestScore.textContent = countGuest
}
function reset(){
    countHome = 0;
    countGuest = 0;
    guestScore.textContent = 0;
    homeScore.textContent = 0;
}