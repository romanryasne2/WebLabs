<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link href="../libs/bootstrap.css" rel="stylesheet"/>
    <link href="../css/styles.css" rel="stylesheet" />
    <script src="../libs/jquery.js"></script>
    <script src="../libs/bootstrap.js"></script>
</head>
<body class="with-background">
    <?php 
        function getFirstName(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return $_GET["firstName"];
            }
            else {
                return $_POST["firstName"];
            }
        }

        function getLastName(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return $_GET["lastName"];
            }
            else {
                return $_POST["lastName"];
            }
        }

        function getMethod(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return "GET";
            }
            else {
                return "POST";
            }
        }

        function getFileExtension(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return pathinfo($_GET["fileName"], PATHINFO_EXTENSION);
            }
            else {
                return pathinfo($_POST["fileName"], PATHINFO_EXTENSION);
            }
        }

        function getCommand(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return $_GET["command"];
            }
            else {
                return $_POST["command"];
            }
        }

        function getCountry(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return $_GET["country"];
            }
            else {
                return $_POST["country"];
            }
        }

        function getEmail(){
            if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                return $_GET["email"];
            }
            else {
                return $_POST["email"];
            }
        }
    ?>
    <div class="container">
        <h3 class="text-center">Отримана інформація на іншому приймачі</h3>
        <div class="col-xs-6">
        <div>
         <label>Ім'я: <?php echo getFirstName(); ?> </label>
        </div>
        <div>
            <label>Прізвище: <?php echo getLastName(); ?> </label>
        </div>
        <div>
            <label>Електронна пошта: <?php echo getEmail(); ?> </label>
        </div>
        <div>
            <label>Країна: <?php echo getCountry(); ?> </label>
        </div>
        </div>
        <div class="col-xs-6">
        <div>
            <label>Метод: <?php echo getMethod(); ?> </label>
        </div>
        <div>
            <label>Назва програми: <?php echo getCommand(); ?> </label>
        </div>
        <div>
            <label>Розширення файлу: <?php echo getFileExtension(); ?> </label>
        </div>
        </div>
    </div>
</body>
</html>