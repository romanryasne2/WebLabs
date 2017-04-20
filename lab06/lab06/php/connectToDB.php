<?php
	function connectToDB(){
		$conn = new mysqli("localhost:3310", "root", "Install_new!", "Lab06");
		if ($conn->connect_error){
            dbError();
		}
		return $conn;
	}

	function returnResult($result){
		exit(json_encode(["result" => $result]));
	}

    function dbError() {
        returnResult("Something went wrong with database. Check input data or try again later.");
    }
?>