<?php
    include "connectToDB.php";

    $user = json_decode(file_get_contents("php://input"));

    $conn = connectToDB();

    $query = "INSERT INTO Users (FirstName, LastName, Age) VALUES ('{$user->firstName}', '{$user->lastName}', '{$user->age}');";

    if ($conn->query($query) === true) {
        returnResult("Record is created successfully!");
    }
    dbError();
?>