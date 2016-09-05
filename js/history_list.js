/**
 * Created by ania on 8/31/16.
 */

$(document).ready(function() {

    function ajaxPost( data, endpoint, method, success ) {
        $.ajax({
                method: method,
                url: "https://efigence-camp.herokuapp.com/api/"+endpoint,
                data: data
            })
            .done(function (msg) {
                success(msg);

            });
    }


    ajaxPost(null, "data/history", "GET", function (msg) {
            console.log(msg);

        for (i=0; i < msg.content.length; i++) {       //wchodzę do obiektu z API, do jego atrybutu content, w którym jest tablica

            console.log(msg.content[i]);
            var html = "<li><div class='row'><div class='small-1 columns'><div class='history_date'>" + msg.content[i].date + "</div></div><div class='small-9 columns'><div class='history_payment'><div class='history_payment_transaction>" + msg.content[i].description + "</div><div class='history_payment_category'>" + msg.content[i].category + "</div></div></div><div class='small-2 columns'><div class='history_value'>" + msg.content[i].amount + " " + msg.content[i].currency + "</div></div></div></li>";

            $(".list").append(html);
        }

        }
    );


});
