/**
 * Created by ania on 8/10/16.
 */

$(document).ready(function() {

    var button = document.getElementById("button_go");
    var input = document.getElementById("pass");

    $(button).on('click', function (event){
        event.preventDefault();

        var password = $(input).val();      //pobieramy wartość inputa

        if (password.length == 0) {
            var usrInfoField = document.getElementsByClassName("no_pass");
            $ (usrInfoField).show().fadeOut(9000);
        }

        else {
            sendAjax(password);     //przekazujemy argument do funkcji sendAjax
        }
    });

    function sendAjax (pass) {      //pass=password z linijki 21.
        if (pass.length > 0) {
            $.ajax({
                type: "post",
                data: {
                    login: "efi",
                    password: pass    //takie hasło ma być wysyłane do api, jakie użytkownik wpisze, ale w API jest hasło "camp" i tylko takie będzie dobre
                },
                url: "https://efigence-camp.herokuapp.com/api/login",
                error: function (response) {
                    console.log(response.responseText);
                },
                success: function (response) {
                    console.log(response);
                }
            });
        }
    }
});