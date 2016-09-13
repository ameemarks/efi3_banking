/**
 * Created by ania on 9/11/16.
 */

$(document).ready (function() {
    var buttonAll = document.getElementById("button_all");
    var buttonUnfinished = document.getElementById("button_unfinished");
    var optionsElem = document.getElementsByClassName("account_options_elem");
    var awardsElem = document.getElementsByClassName("awards_elem");

    function klikanie (button, elem, hidden) {

        $(button).on("click touch", function(event){
            event.preventDefault();

            for (i=0; i < elem.length; i++) {

                if (elem[i].dataset.unfinished == "false") {
                    if (hidden) {
                        $(elem[i]).fadeOut(1000);
                    }
                    else {
                        $(elem[i]).fadeIn(1000);
                    }
                }
            }
        });
    }

    klikanie (buttonAll, optionsElem, false);
    klikanie (buttonUnfinished, optionsElem, true);
    klikanie (buttonAll, awardsElem, false);
    klikanie (buttonUnfinished, awardsElem, true);
});
