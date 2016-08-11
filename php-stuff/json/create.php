<?php
//session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('HTTP/1.1 200 OK');
header('Content-type: application/json');

$value = json_decode(file_get_contents('php://input'));

echo json_encode([
	"token"=>"234567fghjkl",
	"data"=>$value
	]);