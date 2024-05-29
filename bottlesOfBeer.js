var bottles = [];

var count = 99;

function bottlesOfBeer () {
    while (count >= 0) {
        if (count > 1) {
             bottles.push(count + " bottles of beer on the wall " + count + " bottles of beer. Take 1 down, pass it around, " + (count-1) + " bottles of beer on the wall.");
        
        } else if (count === 1) {
            bottles.push(count + " bottle of beer on the wall " + count + " bottles of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        }else {
            bottles.push("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        count--;
    } 
    console.log(bottles);
}

