var User=function(firstname,game){
    this.firstname=firstname;
    this.game=game;
    this.getcount=function(){
        console.log("${firstname} plays ${game}")
    };

}

var Ganesh= new User("Ganesh","football");
console.log(Ganesh);

var bankai= new User("bankai","cricket");
console.log(bankai);
