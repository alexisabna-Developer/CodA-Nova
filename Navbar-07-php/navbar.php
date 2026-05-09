<header>
    <!-- Header section of the website -->

    <nav class="navbar">
        <!-- Navigation bar container -->

        <a href="index.php" class="logo">CodA-Nova</a>
        <!-- Clickable logo that redirects to the home page -->

        <ul class="menu-item">
            <!-- Unordered list containing navigation links -->

            <li>
                <!-- List item for Home link -->

                <a href="index.php">Home</a>
                <!-- Link to the homepage -->
            </li>

            <li>
                <!-- List item for About link -->

                <a href="#">About</a>
                <!-- Placeholder link for About page -->
            </li>

            <li>
                <!-- List item for Services link -->

                <a href="#">Services</a>
                <!-- Placeholder link for Services page -->
            </li>

            <li>
                <!-- List item for Contact link -->

                <a href="#">Contact</a>
                <!-- Placeholder link for Contact page -->
            </li>

            <li>
                <!-- List item for Login / Logout button -->

                <?php if(!isset($_SESSION['user'])) { ?>
                <!-- Check if the user is NOT connected -->

                    <a href="login.php" class="login-btn">Login</a>
                    <!-- Display Login button -->

                <?php } else { ?>
                <!-- Otherwise, user is connected -->

                    <a href="logout.php" class="login-btn">Logout</a>
                    <!-- Display Logout button -->

                <?php } ?>
                <!-- End of PHP condition -->

            </li>

        </ul>
        <!-- End of navigation list -->

    </nav>
    <!-- End of navbar -->

</header>
<!-- End of header -->