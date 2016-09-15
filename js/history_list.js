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

        function compare (a,b) {
            if (a.date < b.date)
                return 1;
            if (a.date > b.date)
                return -1;
            return 0;
        }

        /*funkcja sortująca tablicę od największych do najmniejszych dat*/
        msg.content.sort(compare);

        for (i=0; i < msg.content.length; i++) {

            /* zmienna tworząca datę w odpowiednim formacie do wypchnięcia na stronę*/
            var apiDateEdited = msg.content[i].date.substr(0,10).split("-").reverse().join(".");

            var html = "<li class='small-12 columns'><div class='row collapse history_elem'><div class='small-2 columns'><div class='history_date'>" + apiDateEdited + "</div></div>" +
                "<div class='small-7 columns'>" +
                "<div class='history_payment'>" +
                "<div class='history_payment_transaction'>" + msg.content[i].description + "</div>" +
                "<div class='history_payment_category'>" + msg.content[i].category + "</div>" +
                "   </div>" +
                "</div>" +
                "<div class='small-3 columns'><div class='history_value'><span>" + msg.content[i].amount +"</span> " + msg.content[i].currency + "</div></div></div></li>";

            $(".list").append(html);
        }

        }
    );


});