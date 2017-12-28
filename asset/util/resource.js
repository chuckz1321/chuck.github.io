function getLocalResource(path,res) {
    $.ajax({
        type: "GET",
        url: path,
        dataType: "text",
        success: function(rs) {
            res(rs);
        },
        error: function(err) {
            alert(err);
        }
    });
}