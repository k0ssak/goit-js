function calculateDiscount(numberOfProducts, basketSum, shippingCost, paymentType, shippingType) { 
    // do some complicated stuff
}

calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');
calculateDiscount(5, 321, 10, 'card', 'inpost');

// add a parameter - ups
function calculateDiscount(numberOfProducts, basketSum, dayOfTherYear, shippingCost, paymentType, shippingType) { 

}

// better to do something like
function calculateDiscount(discountParams) { 
    discountParams.basketSum
    discountParams.dayOfTherYear
    // ...
}

calculateDiscount({
    numberOfProducts: 5,
    basketSum: 321,
    shippingCost: 10,
    paymentType: 'card',
    shippingType: 'poczta'
});

function calculateDiscount(discountParams) { 
    const { numberOfProducts, basketSum } = discountParams
}

function calculateDiscount({ numberOfProducts, basketSum }) { 
  
}