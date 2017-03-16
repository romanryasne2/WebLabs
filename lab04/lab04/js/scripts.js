function task1() {
    $(".modal-body > p").text("Вітаємо на нашому сервісі!");
    $("#my-dialog").modal("show");
}

var Number = 0;

function task2() {
    $("#files").prepend(`<div class="form-group">
                            <label>Файл №${++Number}:</label>
                            <input class="form-control" type="file" name="file${Number}"/>
                        </div>`);
}

function task3() {
    $(".modal-body > p").text("Відкрито після натискання по кнопці.");
    $("#my-dialog").modal("show");
}

function showModal() {
    $("#my-dialog").modal("show");
}

function task4() {
    $("#first-name > h2").text("Вас звати " + $("input[name=firstName]").val() + ". Ми Вас вітаємо!");
}

function task5() {
    $("#current-url > h2").text("Поточна сторінка " + window.location.href);
}

function changeImage() {
    $("#image1").attr("src", $("#image1").attr("src").replace("image1", "image2"));
    setTimeout(changeToPreviousImage, 1000);
}

function changeToPreviousImage() {
    $("#image1").attr("src", $("#image1").attr("src").replace("image2", "image1"));
    setTimeout(changeImage, 1000);
}