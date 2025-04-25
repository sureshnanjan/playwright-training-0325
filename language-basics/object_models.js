var angelFish = {ItemID: 'EST-1'	,ProductID: 'FI-SW-01',	Description:'Large',	ListPrice: 16.50	}
// 		Large Angelfish	$16.50
var tiger = {}

console.log(angelFish)
console.log(angelFish.prototype)
console.log(tiger)
console.log(tiger.prototype)

// Constructor Functions
function Fish(item_id, prod_id,desc,price) {
    this.ItemID = item_id;
    this.ProductID = prod_id;
    this.Description = desc;
    this.price = price;
    this.prototype = {};
 
}

var newangel = new Fish(1,1,"Value1",100)
var newtiger = new Fish(2,2,"Value2",200);

Fish.prototype.displayProduct = function(){
    // template string
    // `{this.I}{}{}{}`

 return `${this.ItemID}-${this.ProductID}-${this.Description}-${this.price}`
}

console.log(newangel.displayProduct());
console.log(newtiger.displayProduct());
console.log(Fish.prototype)

//var result = Fish(1,2,"",100)


