var shoppingCart ={
    books: 3,
    sunglass: 5,
    keyboard: 3,
    mouse: 7, 
    pen:25
}
var pencount = shoppingCart.pen;
console.log(pencount);
var pencount2 = shoppingCart['pen'];
var properties = Object.keys(shoppingCart);
console.log(properties);
var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);
var propertyName ='mouse';
var propertiesValue = shoppingCart[propertyName];
console.log(propertiesValue,propertyName);