<?php
  if(isset($_POST['send'])){
    $name = $_POST['name'];
    $email = $_POST['emailid'];
    $company = $_POST['company'];
    $msg = $_POST['message'];

    $to = 'saurabh@isitreal.co.in';
    $subject = $company;
    $message = $name."\n".$email."\n\n".$msg;
    $headers =  'MIME-Version: 1.0' . "\r\n";
    $headers .= 'From: '.$email. "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    if(mail($to,$subject,$message,$headers)){
      echo "Send Successfully";
    }
    else {
      echo "Something Went Wrong";
    }
  }
?>
