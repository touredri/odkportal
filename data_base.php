<?php
require('functions.php');
$storage = 'uploads/';
global $con;

if (isset($_POST['submit'])) {
    $values = [
        'name' => $_POST['name'],
        'lastname' => $_POST['lastname'],
        'email' => $_POST['email'],
        'contact' => $_POST['contact'],
        'age' => $_POST['age'],
        'birthday' => $_POST['birthday'],
        'certified_year' => $_POST['certified_year'],
    ];
    $promo = $_POST['promotion'];
    $promoId = getPromoId($promo);
    $matricule = generate($promo);
    $imgName = $_FILES['img']['name'];
    $tmp = $_FILES['img']['tmp_name'];
    $imgPath = $storage . $imgName;
    if (move_uploaded_file($tmp, $imgPath)) {
        $sql = "INSERT INTO details (matricule, name, lastname, contact, email, certified_year, age, birthday, profile, promo) VALUES ('$matricule', :name, :lastname, :contact, :email, :certified_year, :age, :birthday, :img, '$promoId')";
        $stmt = $con->prepare($sql);
        $stmt->bindParam(':img', $imgPath);
        foreach ($values as $key => $value) {
            $stmt->bindValue(':' . $key, $value);
        }
        $stmt->execute();
    } else {
        echo "Error " . "<br>";
    }
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

$data = $con->query("SELECT * FROM details left join promotion p on p.id = details.promo");
$datas = $data->fetchAll(PDO::FETCH_ASSOC);

$response = array();

foreach ($datas as $data) {
    $resp = [
        'matricule' => $data['matricule'],
        'name' => $data['name'],
        'lastname' => $data['lastname'],
        'contact' => $data['contact'],
        'email' => $data['email'],
        'certified_year' => $data['certified_year'],
        'age' => $data['age'],
        'birthday' => $data['birthday'],
        'profile' => $data['profile'],
        'promo' => $data['promotion'],
    ];
    $response[] = $resp;
}

$jsonResponse = json_encode($response);
header('Content-Type: application/json');
echo $jsonResponse;
