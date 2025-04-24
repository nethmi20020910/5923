<?php
  $host='localhost';
  $user='root';
  $pass='';
  $database='icecream_db';
    

    $conn = new mysqli($host,$user,$pass,$database);

    if(!$conn){
        die("connection faild" . mysqli_connect_error());
    }

    if($conn){
        echo "connected successfully";
    }

        
$username = $_GET['username'];
$email = $_GET['email'];
$password = $_GET['password'];

    
    echo $username,$email,$password;
    $sql="INSERT INTO first_table(username,email,password) VALUES ('$username','$email','$password')";
    if($conn->query($sql) === TRUE){
        echo "Form submitted successfully";
    }

    else{
        echo "Error " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>
