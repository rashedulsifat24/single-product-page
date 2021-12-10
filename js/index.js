
//Best price 
const bestPrice=document.getElementById('best-price');

//Memory
const memorySizeeightgb=document.getElementById('8gb-memory');
const memorySizesixteenGb=document.getElementById('16gb-memory');

const memoryCostExtra=document.getElementById('extra-memory-cost');

function memoryCost(cost){
    memoryCostExtra.innerText=cost;
    calculation();
}
memorySizesixteenGb.addEventListener('click',function(){
    memoryCost('180')
})
memorySizeeightgb.addEventListener('click',function(){
    memoryCost('0');
})

//storage
const storageSize256=document.getElementById("storage-256gb");
const storageSize512=document.getElementById("storage-512gb");
const storageSize1tb=document.getElementById(id="storage-1tb");

const storeCostExtra=document.getElementById('extra-store-cost');

function storageCost(cost){
    storeCostExtra.innerText=cost;
    calculation();
}
storageSize256.addEventListener('click',function(){
    storageCost('0');   
})

storageSize512.addEventListener('click',function(){
    storageCost('100');
})
storageSize1tb.addEventListener('click',function(){
    storageCost('180');
})

//delivery fee
const withFreeDeliveryCost=document.getElementById('delivery-free');
const deliverWithCharge=document.getElementById('delivery-with-charge');

const extraCostForDelivery=document.getElementById('extra-delivery-cost');

function deliveryCost(cost){
    extraCostForDelivery.innerText=cost;
    calculation();
}

withFreeDeliveryCost.addEventListener('click',function(){
    deliveryCost('0');
})
deliverWithCharge.addEventListener('click',function(){
    deliveryCost('20');
})

//total price
const totalPriceCost=document.getElementById('total-price');
const finalTotalPrice=document.getElementById('final-total');

const pomoInputValue=document.getElementById('pomo-input');
const pomoApplyButton=document.getElementById('pomo-apply-btn');

function calculation(){
    const bestPriceValue=bestPrice.innerText;
    const extraMemoryCostValue=memoryCostExtra.innerText;
    const extraStorageCostValue=storeCostExtra.innerText;
    const  extraDeliveryCostValue=extraCostForDelivery.innerText;

    const totalCostValue=parseInt(bestPriceValue)+parseInt(extraMemoryCostValue)+parseInt(extraStorageCostValue)+parseInt(extraDeliveryCostValue);
    totalPriceCost.innerText=totalCostValue;

    finalTotalPrice.innerText=totalCostValue;
    const finalTotalPrice=parseInt(finalTotalPrice.innerText);
    return finalTotalPrice;
}
// pomo apply
pomoApplyButton.addEventListener('click',function(){
    const finalTotalProductPric=calculation();
    const pomoCode='stevekaku';
    const pomoInputCode=pomoInputValue.value;
    if(pomoCode.toLowerCase() == pomoInputCode.toLowerCase() ){
       const dis=(finalTotalProductPric*20)/100;
     const finalTotalpriceWithDiscount= finalTotalProductPric-dis;
      finalTotalPrice.innerText=finalTotalpriceWithDiscount;
      pomoInputValue.value='';
    }
    else{
        pomoInputValue.value='';
    }
})


