$('document').ready(function() {

    
    var origDocHeight = document.body.offsetHeight;

    
    $("body").contents().clone().appendTo("body");


    $(document).scroll(function(){ 

        var scrollWindowPos = $(document).scrollTop(); 

        if(scrollWindowPos >= origDocHeight ) { 
            $(document).scrollTop(0); 
        }       
    });

}); 

