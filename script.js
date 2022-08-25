//1.For the given JSON iterate over all loop(for,forin,forof,forEach)
//a.For loop

var arr = [12, 13, 14, 15, 16];
for (var i=0; i<arr.length; i++){
    console.log(arr[i]);
}



//b. For...in loop

var player={
        name: "Dharun",
        age: 22,
        game: "Swimming"
};
for (var key in player){
        console.log(key,player[key]);
    }


//c. For...of loop

var player={
    name: "Dharun",
    age: 22,
    game: "swimming"
};
for (var key of Object.keys(player)){
    console.log(key,player[key]);
}


//d. ForEach loop

var number = [12, 14, 22, 26, 31];
var num = 0;
for (var num of number){
  if(number > num){
    num = number
  }
}
console.log("The highest number is",num);
