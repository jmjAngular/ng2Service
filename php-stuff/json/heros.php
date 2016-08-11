<?php
//session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
/*
if (!isset($_SESSION['user'])) {

    $_SESSION['user'] = 0;
}
$_SESSION['user'] = +1;

echo $_SESSION['user'];

//print_r($_SERVER);
exit;
*/
echo '{
  "data": [
    { "id": "1", "name": "Windstorm" },
    { "id": "2", "name": "Bombasto" },
    { "id": "3", "name": "Magneta" },
    { "id": "4", "name": "Tornado" }
  ]
}';

