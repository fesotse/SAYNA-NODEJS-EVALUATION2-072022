<?php
$conn = mysqli_connect("localhost","root","","dumb");

$success = 0;
$msg= "Une erreur est survenue";

function insert(){
    global $conn;

    //vérification du formulaire
    if (!empty($_POST['firstname']) and !empty($_POST['lasstname']) and !empty($_POST['avis'])and !empty($_POST['note']) and !empty($_POST['formation'])){
        $fistname = htmlspecialchars(strip_tags($_POST['firstname']));
        $lastname = htmlspecialchars(strip_tags($_POST['lastname']));
        $avis = htmlspecialchars(strip_tags($_POST['avis']));
        $note = htmlspecialchars(strip_tags($_POST['note']));
        $formation = htmlspecialchars(strip_tags($_POST['formation']));
        $success = 1;
        echo 1;
        exit;
    } else{
        $msg = "";
    }

    //insertion a la base de donnée
    $query = "INSERT INTO contact VALUES('',$fistname,$lastname,$avis,$note,$formation)";
    mysqli_query($conn, $query);

    echo 1;
}
