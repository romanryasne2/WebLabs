<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8"/>
    <title></title>
    <link href="../libs/bootstrap.css" rel="stylesheet"/>
    <link href="../css/styles.css" rel="stylesheet" />
    <script src="../libs/jquery.js"></script>
    <script src="../libs/bootstrap.js"></script>
    <script src="../js/scripts.js"></script>
</head>
<body class="with-background">
	<h3 class="text-center">
		<?php
    if(isset($_COOKIE["token"])) {
        $token = $_COOKIE["token"];
        $conn = new mysqli("localhost:3310", "root", "Install_new!", "Lab05");
        if ($conn->connect_error) {
            echo "Database is unavailable.";
	        return;
        }
        $sql = "SELECT UserID FROM Tokens Where Token = '{$token}';";
        $result = $conn->query($sql);

        if ($result->num_rows == 0) {
            echo "You are not authenticated.";;
	        return;
        }
        $row = $result->fetch_assoc();
        $id = $row["UserID"];
        $sql = "SELECT FirstName, LastName FROM Users Where Users.ID = '{$id}';";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        echo "Hi {$row["FirstName"]} {$row["LastName"]}! There is no secret!";
    }
    else {
        echo "You are not authenticated.";
    }
        ?>			
	</h3>
</body>
</html>