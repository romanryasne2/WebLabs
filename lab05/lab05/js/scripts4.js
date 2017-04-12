function getData() {
    $.getJSON("../json/data4.json",
        {},
        function(data) {
            $("#data").append(`<label>Ім'я: ${data.firstName}</label>
                               <br/>`)
                .append(`<label>Прізвище: ${data.lastName}</label>
                         <br/>`)
                .append(`<label>Вік: ${data.age}</label>
                         <br/>`)
                .append(`<label>Книги:</label>
                         <div id="books" class="container"></div>
                         <br/>`);
            data.books.forEach(function(item) {
                $("#books").append(`<label><i>Автор:</i> ${item.author}</label>
                                    <label><i>Книга:</i> ${item.title}</label>
                                    <br/>`);
            });
        });
}