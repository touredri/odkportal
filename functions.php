<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portal_odc";
try {
    $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Connection failed: " . $e->getMessage();
}
function generate ($promo){
    $length = 4;
    $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $chars_length = strlen($chars);
    for ($i = 0; $i < $length; $i++){
        $promo .= $chars[rand(0, $chars_length - 1)];
    }
    return $promo;
}

function getPromoId($promo) {
    global $con;
    $sql = "SELECT id FROM promotion p WHERE p.promotion = '$promo'";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result['id'];
}