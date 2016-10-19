var BATATA = {
     init: function(){
        this.variables();
        this.events();
        this.initModules();
    },
    variables: function() {
        
    },
    events: function() {
        
    },
    initModules: function() {
        $("#header").load("/modules/header.html");
        $("#search").load("/modules/search.html");
        $("#footer").load("/modules/footer.html");
    }
}

$(document).ready(function () { BATATA.init(); });