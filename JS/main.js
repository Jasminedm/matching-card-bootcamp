/** 
Want to see two cards 
compare if both cards are equal
two decks doing same thing, match suite and value
when flip cards that are clicked ~
push clicked cards into an array
if array.length is two
check if the value and suite are equal
if equal do nothing, if not equal flip back over
API SITE: https://deckofcardsapi.com/
**/

let arrayOfClicked = [];
let arrayOfMatched = [];
function cardGame() {
  //create two decks, using only these N/S(name & suit) cards
  fetch(
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2&cards=AS,KC,QH,JS,2D"
  )
    .then((res) => res.json())
    .then((decks) => {
      const deckId = decks.deck_id;
      //draw all 10 cards
      fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=10`)
        .then((res) => res.json())
        .then((draw) => {
          document.getElementById("card1").addEventListener("click", checkEqual);
          document.getElementById("card2").addEventListener("click", checkEqual);   
          document.getElementById("card3").addEventListener("click", checkEqual);
          document.getElementById("card4").addEventListener("click", checkEqual);   
          document.getElementById("card5").addEventListener("click", checkEqual);  
          document.getElementById("card6").addEventListener("click", checkEqual);
          document.getElementById("card7").addEventListener("click", checkEqual);
          document.getElementById("card8").addEventListener("click", checkEqual);
          document.getElementById("card9").addEventListener("click", checkEqual);
          document.getElementById("card10").addEventListener("click", checkEqual);
          function checkEqual(clickEvent) {
            //Push clicked card into empty array
            arrayOfClicked.push(clickEvent.target);
            //variable representing (the number I gave in html) index of the cards
            const clickCardIndex =
              clickEvent.target.getAttribute("data-card-number");
            //Data inside each card
            const clickCardData = draw.cards[clickCardIndex];
            //when cards are clicked they should flip(img src will change to card face)
            clickEvent.target.src = clickCardData.image;
            //if array.length is two
            if (arrayOfClicked.length == 2) {
              //check if the value and suite of (*BOTH CARDS*) are equal
              if (arrayOfClicked[0].src === arrayOfClicked[1].src) {
                //push matching cards into arrayOfMatched
                arrayOfMatched.push(clickEvent.target);
                if (arrayOfMatched.length == 5) {
                  document.querySelector('h1').innerText= 'GAME OVER' //Report GameOver with a button to refresh page********
                }
              } 
            } else if (arrayOfClicked.length == 3) {
              //when cards dont match, the img src changes back to img/Pirates_card_back.webp
              //How to target (PASSED IN (clickEvent) images/ The Images currently inside the array) image src to change it
              console.log("No Match");
              //Add Delay before flip******
                if(arrayOfClicked[0].src !== arrayOfClicked[1].src){
              arrayOfClicked[0].src = "img/pinkGirkCArd.jpg";
              arrayOfClicked[1].src = "img/pinkGirkCArd.jpg";
                }
              arrayOfClicked.splice(0, 2); //empty array
              //check if this is working*******
                
            }
          }
        });
    });
}
cardGame();

const reloadButton = document.querySelector("button");

reloadButton.addEventListener("click", () => {
  window.location.reload()
});





