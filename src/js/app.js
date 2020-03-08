class ClickCounter{
    constructor(){
        this.clickCount =600;
        this.companionCount=0;
        this.companioncost=100;
        this.companionPurchased=0;
        this.compounderPurchased=0;
        this.compounderCost=10;
        this.compounderCount =0;
    
    }
    recordClick(){
     this.clickCount++;
    }
    buyCompanion(){
      if(this.clickCount>=100){
          this.companionCount++;
          this.clickCount-=100;
          this.companioncost = this.companioncost+(this.companioncost*0.1);
          this.companionPurchased++;

      }  
    }
    buyCompounder(){
        if( this.clickCount>=10){
            this.compounderCount++;
            this.clickCount-=10;
            this.compounderCost =this.compounderCost+(this.compounderCost*0.1);
            this.compounderPurchased++;
            
        }
    }
}
game = new ClickCounter();
const displayNumberOfClicks = document.getElementById('number');
const displayCompanionPurchased = document.getElementById('compa');
const displayCompounderPurchased = document.getElementById('compa3');
const myImage = document.getElementById('img');
const ButtonToBuyCompanion = document.getElementById('compa2');
const displayTheCostOfCompanion =document.getElementById('compa5');
const displayTheCostOfCompounder = document.getElementById('compa6');
const ButtonToBuyCompounder = document.getElementById('compa4');
displayNumberOfClicks.innerText = game.clickCount;
displayTheCostOfCompanion.innerText = game.companioncost;
displayTheCostOfCompounder.innerText = game.compounderCost;



displayCompanionPurchased.innerText = game.companionPurchased;



displayCompounderPurchased.innerText = game.compounderPurchased;

myImage.addEventListener('click',()=>{
    game.recordClick();
    displayNumberOfClicks.innerText = game.clickCount;
   

});

ButtonToBuyCompanion.addEventListener('click',()=>{
    game.buyCompanion();
    displayCompanionPurchased.innerText = game.companionPurchased;
    displayNumberOfClicks.innerText = game.clickCount;
    displayTheCostOfCompanion.innerText =game.companioncost.toFixed(2);
});

ButtonToBuyCompounder.addEventListener('click',()=>{
    game.buyCompounder();
    displayNumberOfClicks.innerText = game.clickCount;
    displayCompounderPurchased.innerText = game.compounderPurchased;
    displayTheCostOfCompounder.innerText = game.compounderCost.toFixed(2);


    
})




