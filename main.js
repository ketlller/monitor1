var btn = document.querySelector('button');
var div = document.querySelector('.div');

var divBuy = document.querySelector('.buy span');
var divSell = document.querySelector('.sell span');
var divBuyPZM_BTC = document.querySelector('.buyPZM_BTC span');
var divSellPZM_BTC = document.querySelector('.sellPZM_BTC span');

var divBuyCOIN_USD = document.querySelector('.buyCOIN_USD span');
var divSellCOIN_USD = document.querySelector('.sellCOIN_USD span');
var divBuyCOIN_USD_livecoin = document.querySelector('.buyCOIN_USD_livecoin span');
var divSellCOIN_USD_livecoin = document.querySelector('.sellCOIN_USD_livecoin span');
var divBuyCOIN_USD_hotbit = document.querySelector('.buyCOIN_USD_hotbit span');
var divSellCOIN_USD_hotbit = document.querySelector('.sellCOIN_USD_hotbit span');

var divBuyCOIN_USD_livecoin1 = document.querySelector('.BuyCOIN_USD_livecoin1 span');
var divSellCOIN_USD_livecoin1 = document.querySelector('.SellCOIN_USD_livecoin1 span');
var divBuyCOIN_USD1 = document.querySelector('.BuyCOIN_USD1 span');
var divSellCOIN_USD1 = document.querySelector('.SellCOIN_USD1 span');
var divBuyCOIN_USD_hotbit1 = document.querySelector('.BuyCOIN_USD_hotbit1 span');
var divSellCOIN_USD_hotbit1 = document.querySelector('.SellCOIN_USD_hotbit1 span');
 
var btcalphalivecoin = document.querySelector('.inputdrub1 span');
var livecoinbtcalpha = document.querySelector('.inputdrub2 span');
var btcalphahotbit = document.querySelector('.inputdrub3 span');
var hotbitbtcalpha = document.querySelector('.inputdrub4 span');
var hotbitlivecoin = document.querySelector('.inputdrub5 span');
var livecoinhotbit = document.querySelector('.inputdrub6 span');

var counter = document.querySelector('#counter');
var counter1 = document.querySelector('#counter1');
var counter2 = document.querySelector('#counter2');
var counter3 = document.querySelector('#counter3');
var counter4 = document.querySelector('#counter4');
var counter5 = document.querySelector('#counter5');

var counterS11 = document.querySelector('#counterS11');
var counterS22 = document.querySelector('#counterS21');
var counterS33 = document.querySelector('#counterS33');
var counterS44 = document.querySelector('#counterS44');
var counterS55 = document.querySelector('#counterS55');
var counterS66 = document.querySelector('#counterS66');

var counterS111 = document.querySelector('#counterS111');
var counterS222 = document.querySelector('#counterS221');
var counterS333 = document.querySelector('#counterS333');
var counterS444 = document.querySelector('#counterS444');
var counterS555 = document.querySelector('#counterS555');
var counterS666 = document.querySelector('#counterS666');

var counterS1111 = document.querySelector('#counterS1111');
var counterS2222 = document.querySelector('#counterS2221');
var counterS3333 = document.querySelector('#counterS3333');
var counterS4444 = document.querySelector('#counterS4444');
var counterS5555 = document.querySelector('#counterS5555');
var counterS6666 = document.querySelector('#counterS6666');

var counterS11111 = document.querySelector('#counterS11111');
var counterS22222 = document.querySelector('#counterS22221');
var counterS33333 = document.querySelector('#counterS33333');
var counterS44444 = document.querySelector('#counterS44444');
var counterS55555 = document.querySelector('#counterS55555');
var counterS66666 = document.querySelector('#counterS66666');



 var currentPrice_BuyCOIN_USD = null;
 var currentPrice_SellCOIN_USD = null;
  var currentPrice_BuyCOIN_USD_livecoin = null;
  var currentPrice_SellCOIN_USD_livecoin = null;
var currentPrice_BuyCOIN_USD_hotbit = null;
var currentPrice_SellCOIN_USD_hotbit = null;

 var previousPositive = true; 
var previousPositive1 = true; 
var previousPositive2 = true; 
var previousPositive3 = true; 
var previousPositive4 = true; 
var previousPositive5 = true; 

var previousPositive11 = true; 
var previousPositive22 = true; 
var previousPositive33 = true; 
var previousPositive44 = true; 
var previousPositive55 = true; 
var previousPositive66 = true; 

var previousPositive111 = true; 
var previousPositive222 = true; 
var previousPositive333 = true; 
var previousPositive444 = true; 
var previousPositive555 = true; 
var previousPositive666 = true; 

var previousPositive1111 = true; 
var previousPositive2222 = true; 
var previousPositive3333 = true; 
var previousPositive4444 = true; 
var previousPositive5555 = true; 
var previousPositive6666 = true; 

var previousPositive11111 = true; 
var previousPositive22222 = true; 
var previousPositive33333 = true; 
var previousPositive44444 = true; 
var previousPositive55555 = true; 
var previousPositive66666 = true; 


 btn.addEventListener('click', () => {  


   var val1 = document.querySelector("#new_type1").value;
   var val2 = document.querySelector("#new_type2").value;
   var val3 = document.querySelector("#new_type3").value;
   //var val4 = document.querySelector("#new_type4").value;
   
    var targetUrl_COIN_USD = 'https://btc-alpha.com/api/v1/orderbook/PZM_USD/'; 
   targetUrl_COIN_USD=targetUrl_COIN_USD.replace(/[^\/]+(?=\/$)/,val1);
   
    var targetUrl_COIN_USD_Livecoin = 'https://api.livecoin.net/exchange/order_book?currencyPair=PZM/USD';
   targetUrl_COIN_USD_Livecoin=targetUrl_COIN_USD_Livecoin.replace(/[^\=]*$/,val2);
   
      var targetUrl_COIN_USD_hotbit1 = 'https://api.hotbit.io/api/v1/order.book?market=PZM/USDT&side=1&offset=0&limit=1'; 
   targetUrl_COIN_USD_hotbit1=targetUrl_COIN_USD_hotbit1.replace(/([?&]market=)[^&]+/,'$1'+val3);


   
      var targetUrl_COIN_USD_hotbit2 = 'https://api.hotbit.io/api/v1/order.book?market=PZM/USDT&side=2&offset=0&limit=1'; 
   targetUrl_COIN_USD_hotbit2=targetUrl_COIN_USD_hotbit2.replace(/([?&]market=)[^&]+/,'$1'+val3);



   
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    
let resUrl1 = proxyUrl + targetUrl_COIN_USD;
let resUrl2 = proxyUrl + targetUrl_COIN_USD_Livecoin;
let resUrl3 = proxyUrl + targetUrl_COIN_USD_hotbit1;
let resUrl4 = proxyUrl + targetUrl_COIN_USD_hotbit2;

console.log()
   
   
   
   
   
   
   
 
   fetch(resUrl1)
    .then(res => {
      res.json().then(body => {
      divBuyCOIN_USD.innerHTML = body.buy[0].price;  
    divBuyCOIN_USD1.innerHTML = body.buy[0].amount; 
      divSellCOIN_USD.innerHTML = body.sell[0].price;
    divSellCOIN_USD1.innerHTML = body.sell[0].amount;
    
      currentPrice_BuyCOIN_USD = body.buy[0].price;
      currentPrice_SellCOIN_USD = body.sell[0].price;
    
    
   
    });
  })
  .catch(err => console.log(err)); 


     

   fetch(resUrl2)
    .then(res => {
      res.json().then(body => {  
      divBuyCOIN_USD_livecoin.innerHTML = body.bids[0][0];
    divBuyCOIN_USD_livecoin1.innerHTML = body.bids[0][1];
      divSellCOIN_USD_livecoin.innerHTML = body.asks[0][0];
    divSellCOIN_USD_livecoin1.innerHTML = body.asks[0][1];
    
       currentPrice_BuyCOIN_USD_livecoin = body.bids[0][0];
       currentPrice_SellCOIN_USD_livecoin = body.asks[0][0];
        
 var value = (((currentPrice_BuyCOIN_USD*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);   
      livecoinbtcalpha.innerHTML = value;
 var value1 = (((currentPrice_SellCOIN_USD_hotbit*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);
      livecoinhotbit.innerHTML = value1;    
 var value2 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_SellCOIN_USD)-100).toFixed(2); 	 
      btcalphalivecoin.innerHTML = value2;        
  var value3 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_BuyCOIN_USD_hotbit)-100).toFixed(2);
      hotbitlivecoin.innerHTML = value3; 
 var value4 = (((currentPrice_SellCOIN_USD_hotbit*100)/currentPrice_SellCOIN_USD)-100).toFixed(2);         
      btcalphahotbit.innerHTML = value4;
 var value5 = (((currentPrice_BuyCOIN_USD*100)/currentPrice_BuyCOIN_USD_hotbit)-100).toFixed(2);      
      hotbitbtcalpha.innerHTML = value5; 	      
      console.log(body);
	      
 if(value > 0) {      
      if(value > 0) {
        if(previousPositive) {
          counter.innerHTML++;
          previousPositive = false;
        }
}	      
      } else {
        previousPositive = true;
      }
        
if(value1 > 0) {        
        if(value1 > 0) {
        if(previousPositive1) {
          counter1.innerHTML++;
          previousPositive1 = false;
        }
}		
      } else {
        previousPositive1 = true;
      }
	      
if(value2 > 0) {        
        if(value2 > 0) {
        if(previousPositive2) {
          counter2.innerHTML++;
          previousPositive2 = false;
        }
 }		
      } else {
        previousPositive2 = true;
      }

if(value3 > 0) {
        if(value3 > 0) {
        if(previousPositive3) {
          counter3.innerHTML++;
          previousPositive3 = false;
        }
 }		
      } else {
        previousPositive3 = true;
      }
        
if(value4 > 0) {	      
        if(value4 > 0) {
        if(previousPositive4) {
          counter4.innerHTML++;
          previousPositive4 = false;
        }
}		
      } else {
        previousPositive4 = true;
      }

if(value5 > 0) {	
        if(value5 > 0) {
        if(previousPositive5) {
          counter5.innerHTML++;
          previousPositive5 = false;
        }
}		
      } else {
        previousPositive5 = true;
      }
        
	      
	      
	      
if(value > 1.49) {      
      if(value > 0) {
        if(previousPositive11) {
          counterS11.innerHTML++;
          previousPositive11 = false;
        }
}	      
      } else {
        previousPositive11 = true;
      }
        
if(value1 > 1.49) {        
        if(value1 > 0) {
        if(previousPositive22) {
          counterS22.innerHTML++;
          previousPositive22 = false;
        }
}		
      } else {
        previousPositive22 = true;
      }
	      
if(value2 > 1.49) {        
        if(value2 > 0) {
        if(previousPositive33) {
          counterS33.innerHTML++;
          previousPositive33 = false;
        }
 }		
      } else {
        previousPositive33 = true;
      }

if(value3 > 1.49) {
        if(value3 > 0) {
        if(previousPositive44) {
          counterS44.innerHTML++;
          previousPositive44 = false;
        }
 }		
      } else {
        previousPositive44 = true;
      }
        
if(value4 > 1.49) {	      
        if(value4 > 0) {
        if(previousPositive55) {
          counterS55.innerHTML++;
          previousPositive55 = false;
        }
}		
      } else {
        previousPositive55 = true;
      }

if(value5 > 1.49) {	
        if(value5 > 0) {
        if(previousPositive66) {
          counterS66.innerHTML++;
          previousPositive66 = false;
        }
}		
      } else {
        previousPositive66 = true;
      }
        
	      
	      
	      
if(value > 2.49) {      
      if(value > 0) {
        if(previousPositive111) {
          counterS111.innerHTML++;
          previousPositive111 = false;
        }
}	      
      } else {
        previousPositive111 = true;
      }
        
if(value1 > 2.49) {        
        if(value1 > 0) {
        if(previousPositive222) {
          counterS222.innerHTML++;
          previousPositive222 = false;
        }
}		
      } else {
        previousPositive222 = true;
      }
	      
if(value2 > 2.49) {        
        if(value2 > 0) {
        if(previousPositive333) {
          counterS333.innerHTML++;
          previousPositive333 = false;
        }
 }		
      } else {
        previousPositive333 = true;
      }

if(value3 > 2.49) {
        if(value3 > 0) {
        if(previousPositive444) {
          counterS444.innerHTML++;
          previousPositive444 = false;
        }
 }		
      } else {
        previousPositive444 = true;
      }
        
if(value4 > 2.49) {	      
        if(value4 > 0) {
        if(previousPositive555) {
          counterS555.innerHTML++;
          previousPositive555 = false;
        }
}		
      } else {
        previousPositive555 = true;
      }

if(value5 > 2.49) {	
        if(value5 > 0) {
        if(previousPositive666) {
          counterS666.innerHTML++;
          previousPositive666 = false;
        }
}		
      } else {
        previousPositive666 = true;
      }
        
	      
	      
	   	      
	      	      
if(value > 5) {      
      if(value > 0) {
        if(previousPositive1111) {
          counterS1111.innerHTML++;
          previousPositive1111 = false;
        }
}	      
      } else {
        previousPositive1111 = true;
      }
        
if(value1 > 5) {        
        if(value1 > 0) {
        if(previousPositive2222) {
          counterS2222.innerHTML++;
          previousPositive2222 = false;
        }
}		
      } else {
        previousPositive2222 = true;
      }
	      
if(value2 > 5) {        
        if(value2 > 0) {
        if(previousPositive3333) {
          counterS3333.innerHTML++;
          previousPositive3333 = false;
        }
 }		
      } else {
        previousPositive3333 = true;
      }

if(value3 > 5) {
        if(value3 > 0) {
        if(previousPositive4444) {
          counterS4444.innerHTML++;
          previousPositive4444 = false;
        }
 }		
      } else {
        previousPositive4444 = true;
      }
        
if(value4 > 5) {	      
        if(value4 > 0) {
        if(previousPositive5555) {
          counterS5555.innerHTML++;
          previousPositive5555 = false;
        }
}		
      } else {
        previousPositive5555 = true;
      }

if(value5 > 5) {	
        if(value5 > 0) {
        if(previousPositive6666) {
          counterS6666.innerHTML++;
          previousPositive6666 = false;
        }
}		
      } else {
        previousPositive6666 = true;
      }
        
	      
	      
	   	      
if(value > 10) {      
      if(value > 0) {
        if(previousPositive11111) {
          counterS11111.innerHTML++;
          previousPositive11111 = false;
        }
}	      
      } else {
        previousPositive11111 = true;
      }
        
if(value1 > 10) {        
        if(value1 > 0) {
        if(previousPositive22222) {
          counterS22222.innerHTML++;
          previousPositive22222 = false;
        }
}		
      } else {
        previousPositive22222 = true;
      }
	      
if(value2 > 10) {        
        if(value2 > 0) {
        if(previousPositive33333) {
          counterS33333.innerHTML++;
          previousPositive33333 = false;
        }
 }		
      } else {
        previousPositive33333 = true;
      }

if(value3 > 10) {
        if(value3 > 0) {
        if(previousPositive44444) {
          counterS44444.innerHTML++;
          previousPositive44444 = false;
        }
 }		
      } else {
        previousPositive44444 = true;
      }
        
if(value4 > 10) {	      
        if(value4 > 0) {
        if(previousPositive55555) {
          counterS55555.innerHTML++;
          previousPositive55555 = false;
        }
}		
      } else {
        previousPositive55555 = true;
      }

if(value5 > 10) {	
        if(value5 > 0) {
        if(previousPositive66666) {
          counterS66666.innerHTML++;
          previousPositive66666 = false;
        }
}		
      } else {
        previousPositive66666 = true;
      }
        
	      
	    	      	      
	  	      
	      
	      
	      
	      
if(currentPrice_SellCOIN_USD_livecoin < currentPrice_BuyCOIN_USD && $('#livecoinbtcalpha_notificator').prop('checked'))beep();	      
if(currentPrice_SellCOIN_USD_livecoin < currentPrice_SellCOIN_USD_hotbit && $('#livecoinhotbit_notificator').prop('checked'))beep();	      
if(currentPrice_SellCOIN_USD < currentPrice_BuyCOIN_USD_livecoin && $('#btcalphalivecoin_notificator').prop('checked'))beep();
if(currentPrice_BuyCOIN_USD_hotbit < currentPrice_BuyCOIN_USD_livecoin && $('#hotbitlivecoin_notificator').prop('checked'))beep();        
if(currentPrice_SellCOIN_USD < currentPrice_SellCOIN_USD_hotbit && $('#btcalphahotbit_notificator').prop('checked'))beep();        
if(currentPrice_BuyCOIN_USD_hotbit < currentPrice_BuyCOIN_USD && $('#hotbitbtcalpha_notificator').prop('checked'))beep();        
       
          
      
          
     
        
     
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
  fetch(resUrl3)
    .then(res => {
      res.json().then(body => {  
      
    divBuyCOIN_USD_hotbit.innerHTML = body.result.orders[0].price;
    divBuyCOIN_USD_hotbit1.innerHTML = body.result.orders[0].left;
     
    currentPrice_BuyCOIN_USD_hotbit = body.result.orders[0].price;
     
        
         
      
        
       
     console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   fetch(resUrl4)
    .then(res => {
      res.json().then(body => {  
 	 divSellCOIN_USD_hotbit.innerHTML = body.result.orders[0].price;
   divSellCOIN_USD_hotbit1.innerHTML = body.result.orders[0].left;
    
   currentPrice_SellCOIN_USD_hotbit = body.result.orders[0].price;
            
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   });



  function beep() {
	(new Audio("beep.wav")).play();
};
  
