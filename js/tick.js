/**
 * Created by ania on 9/13/16.
 */
/**
 * Created by ania on 9/11/16.
 */

$(document).ready (function() {

    /*
    *ignorowanie kliknięć na rodzica poprzez warunek: element, na który się klika ma być różny od elementu z listenerem
    *if (e.target !== e.currentTarget) {}
    *
    *rodzeństwo elementu, na który się klika (div z klasą front), posiadające klasę "tick":
    *var clickedItemTick = $(e.target).siblings(".tick");
    *
     */

    var theParent = document.querySelector("#box_account_options_parent");
    theParent.addEventListener("click", makeTick, false);

    var awardsParent = document.querySelector("#box_awards_parent");
    awardsParent.addEventListener("click", makeTick, false);

    function makeTick(e) {

        if (e.target !== e.currentTarget) {

            var clickedItemTick = $(e.target).siblings(".tick");
            var clickedItemPercentage = $(e.target).siblings(".percentage");

            if (clickedItemTick.hasClass("tick_hidden")) {
                clickedItemPercentage.addClass("percentage_hidden");
                clickedItemTick.removeClass("tick_hidden");
            }
            else {
                clickedItemTick.addClass("tick_hidden");
                clickedItemPercentage.removeClass("percentage_hidden");
            }

        }
        e.stopPropagation();
    }
});
