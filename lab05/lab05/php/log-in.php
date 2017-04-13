<?php
$email = $_POST["username"];
$conn = new mysqli("localhost:3310", "root", "Install_new!", "Lab05");
if ($conn->connect_error){
	echo json_encode(["result" => "Database is unavailable."]);
	return;
}
$sql = "SELECT Password, ID FROM Users Where Users.Email = '{$email}';";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
	echo json_encode(["result" => "You are not registered."]);
	return;
}

$password = $_POST["password"];
$row = $result->fetch_assoc();
if ($row["Password"] == $password) {
	$sql = "INSERT INTO Tokens (UserID, Token) VALUES ('{$row["ID"]}', '{$email}IsLoggedIn');";
	$result = $conn->query($sql);
	if ($conn->query($sql) === TRUE) {
		setcookie("token", "{$email}IsLoggedIn", time() + 86400, "/");
		echo json_encode(["result" => "You are logged in successfully."]);
	}
	else {
		echo json_encode(["result" => "Database is unavailable."]);
	}

}
else {
	echo json_encode(["result" => "Password is incorrect."]);
}
?>