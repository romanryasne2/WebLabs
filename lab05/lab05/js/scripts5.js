function analyzText() {
    $.ajax({
        type: "POST",
        url: "../php/analyz-text.php",
        data: JSON.stringify({ text: $("#text-field").val() }),
        dataType: "json",
        success: (response) => {
            $("#data").empty();
            for (let key in response) {
                if (response.hasOwnProperty(key)) {
                    $("#data").append(`<label>${key}: ${response[key]}</label>
                                   <br/>`);
                }
            }
        }
    });
}

var matrix = new Array(3);

function xoInitialize() {
    const table = $("#xo-table")[0];
    for (let i = 0; i < table.rows.length; i++) {
        matrix[i] = new Array(3);
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            matrix[i][j] = 0;
            table.rows[i].cells[j].onclick = function() {
                tableText(this);
            };
        }
    }

}

function tableText(cell) {
    $(cell).html('<img src="../images/zero.png" alt="Нулик"/>');
    $(cell).prop("onclick", null).off("click");
    matrix[$(cell).closest("tr").index()][$(cell).index()] = 1;
    $.ajax({
        type: "POST",
        url: "../php/x-o.php",
        data: JSON.stringify(matrix),
        dataType: "json",
        success: (response) => {
            if (response.isEnd) {
                $(".modal-body > p").text(response.result);
                const table = $("#xo-table")[0];
                for (let i = 0; i < table.rows.length; i++) {
                    matrix[i] = new Array(3);
                    for (let j = 0; j < table.rows[i].cells.length; j++) {
                        matrix[i][j] = 0;
                        $(table.rows[i].cells[j]).prop("onclick", null).off("click");
                    }
                }
                $("#my-dialog").modal("show");
            }
            if (response.rez <= 0) {
                var cell = $("#xo-table")[0].rows[response.row].cells[response.cell];
                $(cell).html('<img src="../images/cross.png" alt="Хрестик"/>');
                $(cell).prop("onclick", null).off("click");
                matrix[$(cell).closest("tr").index()][$(cell).index()] = -1;
            }
        }
    });
}

function validatePassword() {
    if ($("input[name=password]").val() !== $("#check").val()) {
        $("#check")[0].setCustomValidity("Паролі не збігаються");
        return false;
    }
    else {
        $("#check")[0].setCustomValidity("");
        return true;
    }
}