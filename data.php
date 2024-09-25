<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ltimindtree"

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$email= POST[email];
$password= POST[password];
$sql="INSERT INTO `dataset`(`email`, `password`) VALUES ('$email','$password')";
?>
