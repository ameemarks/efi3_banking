/**
 * Created by ania on 8/24/16.
 */
/**
 * Created by ania on 8/10/16.
 */

$(document).ready(function() {

    function ajaxPost( data, endpoint, method, success ) {      //opakowanie ajaxa w funkcję, dzięki czemu możemy do środka zamiast sztywnych danych przekazać argumenty

        $.ajax({                        //funkcja jQuery, ma zawierać to, co zawiera nasze API
                method: method,         //może być po prostu: method zamiast method: method - jeśli atrybut ma taką samą nazwę jak wartość, to można to pominąć
                url: "https://efigence-camp.herokuapp.com/api/"+endpoint, //endpoint - końcówka adresu; naszym adresem dla API jest ...herokuapp... + /data/summary, czyli endpoint
                //url: getAjaxAddress(endpoint); Kuba podmienił, robiąc nową funkcję poniżej, żeby było bardziej uniwersalnie
                data: data          //czyli dodatkowe dane, np. w przypadku loginpage to login i hasło
            })
            .done(function (msg) {      //funkcja, która wykonuje się jako sukces
                success(msg);

            });
    }

    /*Made by Kuba 31.08.2016
    function getAjaxAddress (endpoint) {
        return "https://efigence-camp.herokuapp.com/api/" + endpoint;
    }
     */

    ajaxPost(null, "data/summary", "GET", function (msg) {      //wywołujemy jako funckję anonimową funkcję wyżej, przy czym podajemy jej, co chcemy w console.log, a to wiemy z API
        var apiBalance = msg.content[0].balance;
        var apiFunds = msg.content[0].funds;
        var apiPayments = msg.content[0].payments;

        var numberWithSpaces = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");      //RegEx
        };

        document.getElementById("balance").innerHTML = (numberWithSpaces(apiBalance)+",00").bold() + " PLN";
        document.getElementById("funds").innerHTML = (numberWithSpaces(apiFunds)+",00").bold() + " PLN";
        document.getElementById("payments").innerHTML = (numberWithSpaces(apiPayments)+",00").bold() + " PLN";

        }
    );


});

// https://hithub.com/efigence/Efi-Camp-2016-API
// https://efigence-camp.herokuapp.com/api/data/summary

// w consoli: curl -X get adress-http.... lub curl --data "login=efi&password"
// lub plugin insomnia, webowo: hurl.it

// endpoint - do nich wysyłamy zapytanie, na które otrzymujemy odpowiedź  zawartą na githubie w obiekcie

//co się zmienia: url,
