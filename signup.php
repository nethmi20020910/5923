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

        
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confpassword = $_POST['confpassword'];

    
    echo $username,$email,$password,$confpassword;
    $sql="INSERT INTO third_table(username,email,password,confpassword) VALUES ('$username','$email','$password','$confpassword')";
    if($conn->query($sql) === TRUE){
        echo "Form submitted successfully";
    }

    else{
        echo "Error " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>
