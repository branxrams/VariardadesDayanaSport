$(document).ready(function () {
    // Vincula el input con el select
    $("#search-input").autocomplete({
      source: function (request, response) {
        var options = $("#options option");
        var results = $.map(options, function (option) {
          if (
            $(option).text().toUpperCase().indexOf(request.term.toUpperCase()) >=
            0
          ) {
            return $(option).text();
          }
        });
        response(results);
      },
    });
  });