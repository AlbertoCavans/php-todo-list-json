<?php

$new_todo = [
    "task"=> $_POST["task"],
    "done"=> $_POST["done"] === "true",
];



$todos = json_decode(file_get_contents("../json/todos.json"), true);


$todos[] = $new_todo;


$json_todos = json_encode($todos);

file_put_contents("../json/todos.json", $json_todos);

header("Content-Type: application/json; charset=utf-8");

echo $json_todos;
