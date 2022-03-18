

const colors = ['red', 'blue', 'black', 'green', '#333']


let cards = document.querySelectorAll('.game-card')
const btn = document.querySelector('.btn')
var foo = (e) => {
    cardOpen(e.target)
}

// btn.addEventListener('click', initGame)
initGame()

function initGame(){

    completeColors()
    shuffleCards()
}

function completeColors(){

    let a = 0
    
    for(i = colors.length; i != cards.length; i++){
    
        if( a < colors.length ){
            colors.push(colors[a])
    
            a++
    
            if( a == colors.length){
                a = 0
            } 
        }
        
    }
}

function shuffleCards() {

    const UIwrapper = document.querySelector('.game-container')

    cards.forEach( function(e, i){

        e.setAttribute('color', colors[i])
    })

    let unshuffled = Array.from(cards);

    console.log(unshuffled);

    cards = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    console.log(cards);
    
    UIwrapper.innerHTML = ''

    cards.forEach( e => {UIwrapper.appendChild(e)
  
        e.addEventListener('click', foo )

    })

}

function cardOpen(card){
    card.style.backgroundColor = card.getAttribute('color')
    card.setAttribute('open', 1)

    let openCards = document.querySelectorAll('[open]')

    if(openCards.length == 2){

        if(openCards[0].getAttribute('color') == openCards[1].getAttribute('color')){
            document.querySelector('h1').innerText = 'You Win!'
            document.querySelector('.text').innerText = 'Now fuck off'
            document.querySelector('.timer-wrapper').innerHTML = 'No timer for you'

            cards.forEach( e => {
                e.removeEventListener('click', foo)
            })

            btn.classList.add('active')

        } else{
            openCards.forEach(e => {
                setTimeout(() => {
                    
                    e.style.backgroundColor = ''
                    e.removeAttribute('open')
                }, 1000);
            })
        }

    }
}


