<?php session_start(); ?> 
<!-- Start PHP session to store user information like login status -->

<!DOCTYPE html>
<!-- Define the document type as HTML5 -->

<html lang="en">
<!-- Start the HTML document and set language to English -->

<head>
    <!-- Head section contains page settings and links -->

    <meta charset="UTF-8">
    <!-- Support special characters and text encoding -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Make the website responsive on mobile devices -->

    <title>CodA-Nova | PHP Dynamic Navbar</title>
    <!-- Title displayed in the browser tab -->

    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Connect external CSS file for styling -->
</head>

<body>
<!-- Start of visible page content -->

    <?php require 'navbar.php'; ?>
    <!-- Import and display the navbar component -->

        <script src="assets/js/script.js"></script>

</body>
<!-- End of page content -->

</html>
<!-- End of HTML document -->