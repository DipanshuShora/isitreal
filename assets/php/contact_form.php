<?php
  if(isset($_POST['submit'])){
    $name = $_POST['your_name'];
    $email = $_POST['your_email'];
    $subject_txt = $_POST['subject'];
    $enquiry = $_POST['your_enquiry'];

    $to = 'saurabh@isitreal.co.in';
    $subject = $subject_txt;
    $message = $name."\n".$email."\n\n".$enquiry;
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
