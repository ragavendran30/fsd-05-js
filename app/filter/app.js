//write click event for each a-tag - DONE
//get class name of the element - DONE
//hide all cards - DONE
//show cards with specific class name


let filterWrapper = document.getElementById('filter-1'),
    filterLinks = filterWrapper.querySelectorAll('.filter-link');


function hideAllcards(){
    let cards = filterWrapper.querySelectorAll('.card');
        cards.forEach(function(card){
        card.style.display = 'none';
    });
}
function showCards(filterType){
    console.log(filterType);
    if(filterType == "all"){
        cardType = '.card';
    }
    else{
    cardType = '.'+filterType;
    }
    console.log(cardType);
    let cardAll = filterWrapper.querySelectorAll(cardType);
        cardAll.forEach(function(card){
        card.style.display = 'block';
    });

}
function printMe(filterLink){
    filterLink.addEventListener('click', function(){
    //get class name of the element - DONE
        
        let currentElement = this;
        filterType = currentElement.classList[1];

    //hide all cards
    hideAllcards();
    showCards(filterType);

    })
}
//write click event for each a-tag

filterLinks.forEach(printMe);