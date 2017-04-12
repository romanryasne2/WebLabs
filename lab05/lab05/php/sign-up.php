<?php
$email = $_POST["email"];
$conn = new mysqli("localhost:3310", "root", "Install_new!", "Lab05");
if ($conn->connect_error){
	echo "Database is unavailable.";
	return;
}
$sql = "SELECT Count(*) as count FROM Users Where Users.Email = '{$email}';";
$result = $conn->query($sql);

if (mysqli_fetch_assoc($result)["count"] > 0) {
    echo "You are already registered.";
	return;
}

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$password = $_POST["password"];
$sql = "INSERT INTO Users (FirstName, LastName, Email, Password) VALUES ('{$firstName}', '{$lastName}', '{$email}', '{$password}');";
$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "You are registered successfully.";
}
else {
    echo "Database is unavailable";
}
?>