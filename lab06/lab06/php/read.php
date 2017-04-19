<?php
    include "connectToDB.php";

    $user = json_decode(file_get_contents("php://input"));

    $conn = connectToDB();
    $query = "SELECT * FROM Users;";
    $rows = $conn->query($query);

    $users = array();
    while($r = mysqli_fetch_assoc($rows)) {
        $users[] = $r;
    }

    echo json_encode($users);
?>