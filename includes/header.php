<!-- header -->
 <header class="ease"> 
    <div class="contain">
        <div class="logo">
            <a href="index.php" style="display:block;">
                <img src="images/logo.png" alt="">
            </a>
        </div>
        <div class="toggle">
            <span></span>
        </div>
        <nav class="ease">
            <div nav>
                <ul id="nav">
                    <li>
                        <a class="<?=($page == 'index' || $page == '') ? 'active' : '' ?>" href="index.php">Home</a>
                    </li>
                    <li>
                        <a href="about.php" class="<?=($page == 'about') ? 'active' : '' ?>">About
                        </a>
                    </li>
                    <li>
                        <a href="services.php" class="<?=($page == 'services') ? 'active' : '' ?>">Services
                        </a>
                    </li>
                    <li>
                        <a href="contact.php" class="<?=($page == 'contact') ? 'active' : '' ?>">Contact</a>
                    </li>
                </ul>
                <div id="cta">
                        <a href="direct-bit.php" class="webBtn colorBtn" class="<?=($page == 'contact') ? 'active' : '' ?>">
                            Direct Bid
                        </a>
                </div>
            </div>
        </nav>
    </div>
</header>