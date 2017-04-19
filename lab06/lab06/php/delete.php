<?php
    include "connectToDB.php";

    $ids = json_decode(file_get_contents("php://input"));

    $conn = connectToDB();

    $rez = true;

    foreach ($ids as $key => $id) {
        $query = "DELETE FROM Users WHERE Id={$id};";
        if ($conn->query($query) !== true) {
            $rez = false;
            break;
        }
    }

    if ($rez){
        returnResult("Records are deleted successfully!");
    }
    dbError();
?>