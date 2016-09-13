/**
 * Created by ania on 9/13/16.
 */
/**
 * Created by ania on 9/11/16.
 */

$(document).ready (function() {
    //var buttonAll = document.getElementById("button_all");
    //var buttonUnfinished = document.getElementById("button_unfinished");
    var optionsElem = document.getElementsByClassName("account_options_elem");
    //var awardsElem = document.getElementsByClassName("awards_elem");

    $.each(optionsElem , function (index, value){
        console.log(index + ':' + value);
    });
    //sitepoint jquery each

    /* function klikTick (box) {

        $(box).on("click touch", function(){
            //event.preventDefault();
            alert("działa!");
            //$(this).addClass("tick");

              for (i=0; i < elem.length; i++) {

                    if (elem[i].dataset.unfinished == "false") {
                        if (hidden) {
                            $(elem[i]).fadeOut(1000);        //addClass("hidden")
                        }
                        else {
                            $(elem[i]).fadeIn(1000);        //removeClass("hidden")
                        }
                    }

        });
    }

    klikTick (optionsElem);
    klikTick (optionsElem);
    klikTick (awardsElem);
    klikTick (awardsElem);  } */
});
