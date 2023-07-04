<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portal_odc";

    $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



