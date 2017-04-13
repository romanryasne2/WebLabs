<?php
$email = $_POST["email"];
$conn = new mysqli("localhost:3310", "root", "Install_new!", "Lab05");
if ($conn->connect_error){
	echo json_encode(["result" => "Database is unavailable."]);
	return;
}
$sql = "SELECT * FROM Users Where Users.Email = '{$email}';";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	echo json_encode(["result" => "You are already registered."]);
	return;
}

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$password = $_POST["password"];
$sql = "INSERT INTO Users (FirstName, LastName, Email, Password) VALUES ('{$firstName}', '{$lastName}', '{$email}', '{$password}');";
$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
	echo json_encode(["result" => "You are registered successfully."]);
}
else {
    echo json_encode(["result" => "Database is unavailable."]);
}
?>