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

        
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

    
    echo $name,$email,$message;
    $sql="INSERT INTO second_table(name,email,message) VALUES ('$name','$email','$message')";
    if($conn->query($sql) === TRUE){
        echo "Form submitted successfully";
    }

    else{
        echo "Error " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>
