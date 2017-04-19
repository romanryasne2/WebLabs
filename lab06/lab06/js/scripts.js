function create() {
    const firstName = $("input[name=firstName]").val();
    const lastName = $("input[name=lastName]").val();
    const age = $("input[name=age]").val();

    const data = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    $.post("../php/create.php",
        JSON.stringify(data),
        showResult,
        "json");
}

function showResult(response) {
    $(".modal-body > p").text(response.result);
    $("#my-dialog").modal("show");
}

function read() {
    $.getJSON("../php/read.php",
        (response) => {
            var table = $("#table");
            for (var i = 0; i < response.length; i++) {
                table.append(`<tr>
                                  <td>${response[i].Id}</td>
                                  <td>${response[i].FirstName}</td>
                                  <td>${response[i].LastName}</td>
                                  <td>${response[i].Age}</td>
                             </tr>`);
            }
        });
}

var oldData;

function readToUpdate() {
    $.getJSON("../php/read.php",
        (response) => {
            oldData = response;
            var table = $("#table");
            for (var i = 0; i < response.length; i++) {
                table.append(`<tr>
                                  <td class="idCell">${response[i].Id}</td>
                                  <td><input class="form-control" type="text" name="firstName" value="${response[i].FirstName}"></td>
                                  <td><input class="form-control" type="text" name="lastName" value="${response[i].LastName}"></td>
                                  <td><input class="form-control" type="text" name="age" value="${response[i].Age}"></td>
                             </tr>`);
            }
        });
}

function update() {
    var rows = $("#table>tbody").children();
    var newData = [];
    for (var i = 1; i < rows.length; i++) {
        newData.push({
            id: $(rows[i]).find(".idCell").text(),
            firstName: $(rows[i]).find("input[name=firstName]").val(),
            lastName: $(rows[i]).find("input[name=lastName]").val(),
            age: $(rows[i]).find("input[name=age]").val()
        });
    }

    $.post("../php/update.php",
        JSON.stringify(newData),
        showResult,
        "json");
}

function readToDelete() {
    $.getJSON("../php/read.php",
        (response) => {
            var table = $("#table");
            for (var i = 0; i < response.length; i++) {
                table.append(`<tr>
                                  <td class="idCell">${response[i].Id}</td>
                                  <td><input class="form-control" type="text" name="firstName" value="${response[i].FirstName}"></td>
                                  <td><input class="form-control" type="text" name="lastName" value="${response[i].LastName}"></td>
                                  <td><input class="form-control" type="text" name="age" value="${response[i].Age}"></td>
                                  <td><input class="form-control" type="checkBox"></td>
                             </tr>`);
            }
        });
}

function deleteRecords() {
    var rows = $("#table>tbody").children();
    var ids = [];
    for (var i = 1; i < rows.length; i++) {
        if ($(rows[i]).find("input[type=checkbox]").is(":checked")) {
            ids.push($(rows[i]).find(".idCell").text());
        }
    }

    $.post("../php/delete.php",
        JSON.stringify(ids),
        showResult,
        "json");
}