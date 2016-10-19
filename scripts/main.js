var BATATA = {
     init: function(){
        this.initModules();
    },
    initModules: function() {
        $("#header").load("/modules/header.html");
        $("#search").load("/modules/search.html");
        $("#cardsSmall").load("/modules/cardsSmall.html");
        $("#cardsBig").load("/modules/cardsBig.html");
        $("#footer").load("/modules/footer.html");
    }
}

$(document).ready(function () { BATATA.init(); });