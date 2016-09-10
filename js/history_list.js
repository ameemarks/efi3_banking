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
            console.log("Poniżej jest msg:");
            console.log(msg);

            console.log("poniżej jest tablica msg.content z obiektami:");
            console.log(msg.content);

            function compare (a,b) {
                if (a.date < b.date)
                    return 1;
                if (a.date > b.date)
                    return -1;
                return 0;
            }
            msg.content.sort(compare);          // funkcja sortująca tablicę od największych do najmniejszych dat

            for (i=0; i < msg.content.length; i++) {

                console.log(msg.content[i]);
                var apiDateEdited = msg.content[i].date.substr(0,10).split("-").reverse().join(".");
                console.log("zmienna apiDateEdited:");
                console.log(apiDateEdited);


                var html = "<li><div class='row'><div class='small-2 columns'><div class='history_date'>" + apiDateEdited + "</div></div>" +
                    "<div class='small-7 columns'>" +
                    "<div class='history_payment'>" +
                    "<div class='history_payment_transaction'>" + msg.content[i].description + "</div>" +
                    "<div class='history_payment_category'>" + msg.content[i].category + "</div>" +
                    "   </div>" +
                    "</div>" +
                    "<div class='small-3 columns'><div class='history_value'>" + msg.content[i].amount + " " + msg.content[i].currency + "</div></div></div></li>";

                $(".list").append(html);
            }

        }
    );


});