(function ($) {
    $('#table').DataTable( {
        "ajax": "http://localhost:3000/table",
        "columns": [
            {"data" : "first_name"},
            {"data" : "last_name"},
            {"data" : "email"},
            {"data" : "phone"},
            {"data" : "street_address"},
            {"data" : "city"},
            {"data" : "state"}
        ]
    });

})(jQuery);