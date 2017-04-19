<?php
    include "connectToDB.php";

    $users = json_decode(file_get_contents("php://input"));

    $conn = connectToDB();

    $rez = true;

    foreach ($users as $key => $user) {
        $query = "UPDATE Users SET FirstName='{$user->firstName}', LastName='{$user->lastName}', Age={$user->age} WHERE Id={$user->id};";
        if ($conn->query($query) !== true) {
            $rez = false;
            break;
        }
    }

    if ($rez){
        returnResult("Records are updated successfully!");
    }
    dbError();
?>