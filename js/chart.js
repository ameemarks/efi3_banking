/**
 * Created by ania on 9/14/16.
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

        /* funkcja sortująca tablicę od największych do najmniejszych dat */
        function compare (a,b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        }
        msg.content.sort(compare);

        /* wyciągnięcie daty 30. od końca; zmienne do wstawienia do wykresu:series pointStart  */
        var apiDate=msg.content[msg.content.length-31].date.substr(0,10).split("-");
        var year = apiDate[0];
        var month = apiDate[1]-1;
        var day = apiDate[2];

        /* zmienna tworząca kolejne sumy kwot podanych w api jako .amount */
        var apiAmountTotal = 0;
        var arrAmount = [];

        /*dane do tablicy z 30 ostatnich dni*/
        for (i=msg.content.length-31; i < msg.content.length; i++) {

            //console.log("Amount + currency + status=" + msg.content[i].amount + msg.content[i].currency + msg.content[i].status);
            var apiAmount = msg.content[i].amount;
            if (msg.content[i].currency == "EUR") {
                apiAmount = apiAmount * 4.3
            }

            if (msg.content[i].status == "outcome") {
                apiAmount = apiAmount * (-1)
            }

            //console.log("Zmienna apiAmount: " + apiAmount);
            apiAmountTotal = apiAmountTotal + apiAmount;
            //console.log("zmienna apiAmountTotal:" + apiAmountTotal);

            /* wypchnięcie kolejnych sum kwot do tablicy arrAmount */
            arrAmount.push(apiAmountTotal);

        }
        //console.log("zmienna arrAmount = " + arrAmount);

        $(function () {
            $('#container').highcharts({
                legend: {
                    enabled: false
                },
                chart: {
                    type: 'areaspline'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        day: '%e.%b'
                    },
                    tickWidth: 0
                },

                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                tooltip: {
                    pointFormat: 'Funds available:<br/><b>{point.y:,.0f}</b>'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.8
                    },
                    area: {
                        pointStart: 0,          //miejsce, gdzie zaczyna się oś x
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    },
                    series: {
                        lineWidth: 0,
                        marker: {
                            enabled: false          //kropki wskazujące punkty na wykresie
                        }
                    }
                },
                series: [{
                    data: arrAmount,
                    pointStart: Date.UTC(year, month, day),     //punkt początkowy, od którego tworzone są daty na osi x
                    pointInterval: 24 * 3600 * 1000, // one day
                    color: '#0893c2',
                    negativeColor: '#e81c7b'
                }]
            });
        });

    });
});
