<?php

    // $connection = mysqli_connect(
    //     'localhost',
    //     'root',
    //     'password',
    //     'tasks-app'
    // );

    // if($connection){
    //     echo 'Database is connected';
    // }
    $servername = "localhost";
    $database = "tasks-app";
    $username = "root";
    $password = "root";
    // Create connection
    $connection = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }
    // echo "Connected successfully";
    // mysqli_close($connection);



?>

