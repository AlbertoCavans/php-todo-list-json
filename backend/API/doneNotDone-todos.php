<?php

var_dump($_POST);
/* 
$status_todo = [
    "task"=> $_POST["task"],
    "done"=> $_POST["done"] === "true",
];

$status_todo_index = (int) $_POST["index"];

$todos = json_decode(file_get_contents("../json/todos.json"), true);

$todos[$status_todo_index] = $status_todo;

$json_todos = json_encode($todos);

file_put_contents("../json/todos.json", $json_todos);


header("Content-Type: application/json; charset=utf-8");

echo $json_todos; */
