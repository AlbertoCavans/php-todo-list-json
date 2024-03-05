<?php

$json_todos = file_get_contents("../json/todos.json");

header("Content-Type: application/json; charset=utf-8");

echo $json_todos;