<?php
$table = json_decode(file_get_contents("php://input"), true);

$rez = checkResult($table);

if ($rez == 0) {
	if (isEnd($table)){
		echo json_encode(["result" => "It's a draw.",
			              "isEnd" => true]);
	}
	else {
		$t = true;
		while ($t) {
			$row = mt_rand(0, 2);
			$cell = mt_rand(0, 2);
			if ($table[$row][$cell] == 0){
				$t = false;
				$table[$row][$cell] = -1;
		        $rez = checkResult($table);
				echo json_encode([
					"row" => $row,
					"cell" => $cell,
					"isEnd" => isEnd($table) || ($rez != 0),
					"rez" => $rez,
					"result" => resultString($rez)
				]);
			}
		}
	}
}
else {
	echo json_encode(["result" => resultString($rez),
		              "isEnd" => true]);
}

return;

function resultString($rez) {
	if ($rez > 0) {
		return "You are winner!";
	}
	else if ($rez < 0) {
		return "You are loser...";
	}
	else {
		return "It's a draw.";
	}
}

function isEnd($table){
	$t = true;
	for ($i = 0; $i < count($table); $i++) {
		for ($j = 0; $j < count($table[$i]); $j++) {
			if ($table[$i][$j] == 0) {
				$t = false;
			}
		}
	}
	return $t;
}

function checkResult($table) {
	for ($i = 0; $i < count($table); $i++) {
	    $sum = 0;
		for ($j = 0; $j < count($table[$i]); $j++) {
			$sum += $table[$i][$j];
		}
		if ($sum == 3){
			return 1;
		}
		else if ($sum == -3) {
			return -1;
		}
	}
	for ($i = 0; $i < count($table); $i++) {
	    $sum = 0;
		for ($j = 0; $j < count($table[$i]); $j++) {
			$sum += $table[$j][$i];
		}
		if ($sum == 3){
			return 1;
		}
		else if ($sum == -3) {
			return -1;
		}
	}
	$sum = 0;
	for ($i = 0; $i < count($table); $i++) {
        $sum += $table[$i][$i];
	}
	if ($sum == 3){
		return 1;
	}
	else if ($sum == -3) {
		return -1;
	}
	$sum = 0;
	for ($i = 0; $i < count($table); $i++) {
		$sum += $table[$i][count($table) - 1 - $i];
	}
	if ($sum == 3){
		return 1;
	}
	else if ($sum == -3) {
		return -1;
	}
	return 0;
}
?>