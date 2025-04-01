<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$time=date('Y-m-d H:i:s');
echo("data:Szerveridő: {$time}\n\n")
?>