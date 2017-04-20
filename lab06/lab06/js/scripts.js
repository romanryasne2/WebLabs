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

function readToAllInOne() {
    $("#table").children().empty();
    //$("#table").append(`<tbody></tbody>`);
    $("#table>tbody").append(`<tr>
                                  <th>Id</th>
                                  <th>First name</th>
                                  <th>Last name</th> 
                                  <th>Age</th>
                                  <th>Update action</th>
                                  <th>Delete action</th>
                              </tr>`);
    $.getJSON("../php/read.php",
        (response) => {
            oldData = response;
            var table = $("#table>tbody");
            for (var i = 0; i < response.length; i++) {
                table.append(`<tr>
                                  <td class="idCell">${response[i].Id}</td>
                                  <td><input class="form-control" type="text" name="firstName" value="${response[i].FirstName}"></td>
                                  <td><input class="form-control" type="text" name="lastName" value="${response[i].LastName}"></td>
                                  <td><input class="form-control" type="text" name="age" value="${response[i].Age}"></td>
                                  <td><input class="btn btn-primary center-block" type="submit" value="Update" onclick="updateRow(${i + 1})"></td>
                                  <td><input class="btn btn-primary center-block" type="submit" value="Delete" onclick="deleteRow(${i + 1})"></td>
                             </tr>`);
            }
            table.append(`<tr>
                              <td class="idCell"></td>
                              <td><input class="form-control" type="text" name="firstName" value=""></td>
                              <td><input class="form-control" type="text" name="lastName" value=""></td>
                              <td><input class="form-control" type="text" name="age" value=""></td>
                              <td><input class="btn btn-primary center-block" type="submit" value="Create" onclick="createRow()"></td>
                              <td></td>
                          </tr>`);
        });
}

function deleteRow(i) {
    var ids = [];
    var rows = $("#table>tbody").children();
    ids.push($(rows[i]).find(".idCell").text());
    $.post("../php/delete.php",
        JSON.stringify(ids),
        (response) => {
            showResult(response);
            readToAllInOne();
        },
        "json"); 
}

function updateRow(i) {
    var rows = $("#table>tbody").children();
    var newData = [];
    newData.push({
        id: $(rows[i]).find(".idCell").text(),
        firstName: $(rows[i]).find("input[name=firstName]").val(),
        lastName: $(rows[i]).find("input[name=lastName]").val(),
        age: $(rows[i]).find("input[name=age]").val()
    });

    $.post("../php/update.php",
        JSON.stringify(newData),
        showResult,
        "json");
}

function createRow() {
    var row = $("#table>tbody").children().last();

    const firstName = $(row).find("input[name=firstName]").val();
    const lastName = $(row).find("input[name=lastName]").val();
    const age = $(row).find("input[name=age]").val();

    const data = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    $.post("../php/create.php",
        JSON.stringify(data),
        (response) => {
            showResult(response);
            readToAllInOne();
        },
        "json");
}