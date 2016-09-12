/**
 * Created by ania on 9/12/16.
 */

$(document).ready(function() {
        var hamburgerIcon = document.getElementsByClassName("hamburger_icon");

        $(hamburgerIcon).on("click touch", function (event) {
            event.preventDefault();

            var menuSmall = document.getElementById("myTopnav");

            if (menuSmall.className === "topnav") {
                menuSmall.className += " responsive";
            }
            else {
                menuSmall.className = "topnav";
            }
        })
});

