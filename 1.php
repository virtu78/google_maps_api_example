<?php
$myFile = "data.json";
$myJSON=json_encode(stripslashes(file_get_contents('php://input')));
file_put_contents($myFile,$myJSON);
echo '{ "success": true }';
?>
