("#searchButton").on("click", function () {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': `${searchTerm}`,
        // 'begin_date': "20120101",
        // 'end_date': "20180101",
        'sort': "newest",
        'page': 10
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log('%c result', 'color: red',);
    }).fail(function (err) {
        throw err;
    });

    var searchTerm = $("#searchTerm").val();
    var beginDate = $("#startYear").val();
    var endDate = $("#endYear").val();



})