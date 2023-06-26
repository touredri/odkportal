<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <label> Name
            <input type="text" name="text1" placeholder="write what you want">
        </label>
        <label> Number
            <input type="number" name="nbr1" placeholder="type any number you want">
        </label>
        <input type="submit" name="send" value="send">
    </form>
    <?php
        echo "<h2>Hello </h2>";
        if (isset($_POST['send'])) {
            if ($_POST['text1'].include('')) {
                echo "Type another name";
            }
        //echo ;
    }
    ?>
</body>
</html>