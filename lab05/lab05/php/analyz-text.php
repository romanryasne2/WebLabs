<?php
$data = json_decode(file_get_contents("php://input"), true);
$str = $data["text"];
$length = strlen($str);
$rez = array();
for ($i = 0; $i < $length; $i++) {
	if (!array_key_exists ( $str[$i] , $rez )){
		$rez[$str[$i]] = 0;
	}
    $rez[$str[$i]]++;
}
echo json_encode($rez);
?>