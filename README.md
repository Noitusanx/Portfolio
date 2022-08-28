<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <!--================= UNICONS ======================-->
   <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!--================ Swiper CSS ===================== -->
    <link rel="stylesheet" href="swiper-bundle.min.css">

   <!--=================== CSS ==========================-->
   <link rel="stylesheet" type="text/css" href="display.css">

    <title>Portfolio Website</title>
</head>
<body>

<!--=========================== Header ======================-->
<!-- Navigation = List dari link (digunakan untuk mendefinisikan satu set tautan navigasi)-->
<!-- Untuk menghubungkan link harus ada id dan href -->
<header class="header" id="header">
    <nav class="nav container">
        <a href="#" class="nav_logo">Noitusan</a>
        <div class="nav_menu" id="nav-menu">
            <ul class="nav_list grid">
             <li class="nav_item">
                <a href="#home" class="nav_link active-link">
                    <i class="uil uil-estate nav_icon"></i> Home
                </a>
             </li>
             <li class="nav_item">
                <a href="#about" class="nav_link">
                    <i class="uil uil-user nav_icon"></i> About
                </a>
             </li>
             <li class="nav_item">
                <a href="#skills" class="nav_link">
                    <i class="uil uil-file-bookmark-alt nav_icon"></i> Skills
                </a>
             </li>
             <li class="nav_item">
                <a href="#services" class="nav_link">
                    <i class="uil uil-briefcase-alt nav_icon"></i> Services
                </a>
             </li>
             <li class="nav_item">
                <a href="#portfolio" class="nav_link">
                    <i class="uil uil-scenery nav_icon"></i> Portfolio
                </a>
             </li>
             <li class="nav_item">
                <a href="#contact" class="nav_link">
                    <i class="uil uil-message nav_icon"></i> Contactme
                </a>
             </li>
            </ul>
        <i class="uil uil-times nav_close" id="nav-close"></i>
        </div>
        
        <!-- Bentuk aplikasi -->
        <div class="nav_btns">
            <!-- Button theme change -->
            <i class="uil uil-moon change-theme" id="theme-button"></i>

            <div class="nav_toggle" id="nav-toggle">
                <i class="uil uil-apps"></i>
            </div>
        </div>
    </nav>
</header>

<!--================ Main =====================-->
<main class="main">
<!--================ Home =======================-->
<!-- Blank yaitu membuka link dengan new window -->
<!-- Home content membungkus gambar hingga deskripsi -->
<section class="home section" id="home">
    <div class="home_container container grid">
        <div class="home_content grid">
            <div class="home_social">
                <a href="https://github.com/" target="_blank" class="home_social-icon">
                    <i class="uil uil-github"></i>
                </a>
                <a href="https://id.linkedin.com/" target="_blank" class="home_social-icon">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="https://www.whatsapp.com/" target="_blank" class="home_social-icon">
                    <i class="uil uil-whatsapp"></i>
                </a>
            </div>

            <!-- Bentuknya dan Image -->
            <div class="home_img">
                <?xml version="1.0" standalone="no"?>
                <!-- Berikan class pada svg -->
                <svg class="home_blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <!-- Buat fillnya di CSS sehingga warnanya dapat diubah dengan mudah -->
                    <path d="M54.7,-62.9C70.9,-51.7,84.1,-34.4,84.4,-17.2C84.7,0.1,72.2,17.3,61.4,35C50.6,52.6,41.5,70.8,27.5,76.1C13.5,81.4,-5.3,74,-24.5,67.1C-43.7,60.2,-63.2,54,-71.8,40.7C-80.4,27.4,-78.1,7,-74.9,-13.6C-71.7,-34.2,-67.7,-55,-55.1,-66.9C-42.4,-78.8,-21.2,-81.8,-1,-80.7C19.3,-79.5,38.6,-74.2,54.7,-62.9Z" transform="translate(100 100)" />
                    <image class="home_blob_img" x= '46' y= '-15' xlink:href="Nobell.png"></image>
                </svg>
            </div>

            <div class="home_data">
                <h1 class="home_title">Hi, I'am Noitusan</h1>
                <h2 class="home_subtitle">Fullstack Developer</h2>
                <p class="home_description">I'm learning to make a portfolio and this is a picture of my cat named Nobel ^^</p>
                <a href="contact" class="button botton-flex"> Contactme
                    <i class="uil uil-message button_icon"></i> 
                </a>
            </div>
        </div>
        
        <!-- Tulisan scroll down -->
        <div class="home_scroll">
            <a href="#about" class="home_scroll-button button-flex">
                <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                <span class="home_scroll-name">Scroll down</span>
                <i class="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
        </div>
    </div>
</section>

<!--=================== About ====================-->
<!-- Span digunakan untuk memberikan style pada bagian tertentu -->
<section class="about section" id="about">
    <h2 class="section_title">About Me</h2>
    <span class="section_subtitle">My Introduction</span>
    <div class="about_container container grid">
        <img src="Nobell2.jpg" alt="" class="about_img">
        <div class="about_data">
            <p class="about_description">In the learning stage of creating a web using HTML, CSS and Javascript and also learning the programming languages C, Python, Java.</p>

            <!-- Masing masing harus dibungkus dengan div sehingga tulisannya menjadi kebawah -->
            <div class="about_info">
                <div>
                    <span class="about_info-title">01+</span>
                    <span class="about_info-name">Year <br> experience</span>
                </div>
                <div>
                    <span class="about_info-title">04+</span>
                    <span class="about_info-name">Completed <br> project</span>
                </div>
                <div>
                    <span class="about_info-title">01+</span>
                    <span class="about_info-name">Adorablee <br> cat</span>
                </div>
            </div>

        <!-- Download digunakan agar gambarnya bisa didownload -->
            <div class="about_buttons">
                <a download="" href="CV.jpg" class="button button-flex">
               Download CV <i class="uil uil-download-alt button_icon"></i>
                </a> 
            </div>
        </div>
    </div>
</section>

<!--===================== Skills ====================-->
<!-- Id pada skills ini bertujuan ketika user menekan skills maka akan langsung merujuk ke skills  -->

<section class="skills section" id="skills">
    <h2 class="section_title">Skills</h2>
    <span class="section_subtitle">My technical level</span>
    
    <div class="skills_container container grid">
        <div>
            <!-- ============= Skills 1 =========== -->
            <div class="skills_content skills_open">
                <div class="skills_header">
                    <i class="uil uil-brackets-curly skills_icon"></i>
                    <div>
                        <h1 class="skills_title">Frontend Developer</h1>
                        <span class="skills_subtitle">More than 5 months</span>
                    </div>
                    <!-- Sehingga tanda panahnya menjadi dibawah tulisan -->
                    <i class="uil uil-angle-down skills_arrow"></i>
                </div>

                <div class="skills_list grid">
                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">HTML</h3>
                            <span class="skills_number">80%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_html"></span>
                        </div>
                    </div>

                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">CSS</h3>
                            <span class="skills_number">75%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_css"></span>
                        </div>
                    </div>

                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">JavaScript</h3>
                            <span class="skills_number">85%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_javascript"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ============= Skills 2 =========== -->
            <div class="skills_content skills_close">
                <div class="skills_header">
                    <i class="uil uil-server-network-alt skills_icon"></i>
                    <div>
                        <h1 class="skills_title">Backend Developer</h1>
                        <span class="skills_subtitle">More than 1 year</span>
                    </div>
                    <i class="uil uil-angle-down skills_arrow"></i>
                </div>

                <div class="skills_list grid">
                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">C</h3>
                            <span class="skills_number">90%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_c"></span>
                        </div>
                    </div>
                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">Java</h3>
                            <span class="skills_number">80%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_java"></span>
                        </div>
                    </div>
                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">Python</h3>
                            <span class="skills_number">50%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_python"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ============= Skills 3 =========== -->
            <div class="skills_content skills_close">
                <div class="skills_header">
                    <i class="uil uil-swatchbook skills_icon"></i>
                    <div>
                        <h1 class="skills_title">Designer</h1>
                        <span class="skills_subtitle">More than 1 year</span>
                    </div>
                    <i class="uil uil-angle-down skills_arrow"></i>
                </div>

                <div class="skills_list grid">
                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">Photoshop</h3>
                            <span class="skills_number">70%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_photoshop"></span>
                        </div>
                    </div>

                    <div class="skills_data">
                        <div class="skills_titles">
                            <h3 class="skills_name">Figma</h3>
                            <span class="skills_number">30%</span>
                        </div>
                        <div class="skills_bar">
                            <span class="skills_persentase skills_figma"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--===================== Qualification ====================-->
<section class="qualification section">
    <h2 class="section_title">Qualification</h2>
    <span class="section_subtitle">My personal journey</span>

    <div class="qualification_container container">
        <div class="qualification_tabs">
            <div class="qualification_button button-flex qualification_active" data-target="#education">
                <i class="uil uil-graduation-cap qualification_icons"></i>
                Education
            </div>
            <div class="qualification_button button-flex" data-target="#work">
                <i class="uil uil-briefcase-alt qualification_icons"></i>
                Work
            </div>
        </div>

        <div class="qualification_sections">
            <!-- ========= Qualification content 1 ==========-->
            <div class="qualification_content qualification_active" data-content id="education">
                <!-- ========= Qualification 1 =========-->
                <div class="qualification_data">
                    <div>
                        <h3 class="qualification_title">Information technology</h3>
                        <span class="qualification_subtitle">USK - Indonesia </span>
                        <div class="qualification_calender"><i class="uil uil-calendar-alt"></i> 2021 - - Now 
                        </div>
                    </div>

                    <div>
                        <span class="qualification_rounder"></span>
                        <span class="qualification_line"></span>
                    </div>
                </div>

                <!-- ========= Qualification 2 =========-->
                <div class="qualification_data">
                    <!-- Div disini berguna agar tulisannya menjadi ke sebelah kanan -->
                    <div></div>

                    <div>
                        <span class="qualification_rounder"></span>
                        <span class="qualification_line"></span>
                    </div>

                    <div>
                        <h3 class="qualification_title">Web Design</h3>
                        <span class="qualification_subtitle">Learning from Youtube</span>
                        <div class="qualification_calender"><i class="uil uil-calendar-alt"></i> 2020 - - Now 
                        </div>
                    </div>
                </div>
                
                <!-- ========= Qualification 3 =========-->
                <div class="qualification_data">
                    <div>
                        <h3 class="qualification_title">Web Development</h3>
                        <span class="qualification_subtitle">Bootcamp</span>
                        <div class="qualification_calender"><i class="uil uil-calendar-alt"></i> 2022 - - Now 
                        </div>
                    </div>

                    <div>
                        <span class="qualification_rounder"></span>
                        <span class="qualification_line"></span>
                    </div>
                </div>

                <!-- ========= Qualification 4 =========-->
                <div class="qualification_data">
                    <div></div>

                    <div>
                        <span class="qualification_rounder"></span>
                        <!-- <span class="qualification_line"></span> -->
                    </div>

                    <div>
                        <h3 class="qualification_title">Game Development</h3>
                        <span class="qualification_subtitle">Learning from Youtube </span>
                        <div class="qualification_calender"><i class="uil uil-calendar-alt"></i> 2022 - - Now 
                        </div>
                    </div>
                </div>
            </div>

            <!-- ========= Qualification content 2 ==========-->
            <div class="qualification_content" data-content id="work">
                <!-- ========= Qualification 1 =========-->
                <div class="qualification_data">
                    <div>
                        <h3 class="qualification_title">Fullstack Developer</h3>
                        <span class="qualification_subtitle">Unknown - Indonesia </span>
                        <div class="qualification_calender"><i class="uil uil-calendar-alt"></i> 2024 - - Hopefully 
                        </div>
                    </div>

                    <div>
                        <span class="qualification_rounder"></span>
                        <span class="qualification_line"></span>
                    </div>
                </div>

                <!-- ========= Qualification 2 =========-->
                <div class="qualification_data">
                    <div></div>

                    <div>
                        <span class="qualification_rounder"></span>
                        <!-- <span class="qualification_line"></span> -->
                    </div>

                    <div>
                        <h3 class="qualification_title">Software Engineer</h3>
                        <span class="qualification_subtitle">Unknown - USA </span>
                        <div class="qualification_calender"><i class="uil uil-calendar-alt"></i> 2025 - - Hopefully
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<!--===================== Services ====================-->
<section class="services section" id="services">
    <h2 class="section_title">Services</h2>
    <span class="section_subtitle">What I offer</span>

    <div class="services_container container grid">
        <!--================== Services 1 ==================-->
        <div class="services_content">
            <div>
                <i class="uil uil-web-grid services_icon"></i>
                <h3 class="services_title">UI/UX <br> Designer</h3>
            </div>
            
            <span class="button button-flex button-small button-link services_button">
                View More
                <i class="uil uil-arrow-right button_icon"></i>
            </span>

            <div class="services_modal">
                <div class="services_modal-content">
                    <h4 class="services_modal-title">
                        UI/UX <br> Designer
                    </h4>
                    <i class="uil uil-times services_modal-close"></i>
                    <ul class="services_modal-services grid">
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>Web page Development.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I create ux element interactions.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I position your company brand.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--================== Services 2 ==================-->
        <div class="services_content">
            <div>
                <i class="uil uil-arrow services_icon"></i>
                <h3 class="services_title">Frontend <br> Developer</h3>
            </div>
            <span class="button button-flex button-small button-link services_button">
                View More
                <i class="uil uil-arrow-right button_icon"></i>
            </span>

            <div class="services_modal">
                <div class="services_modal-content">
                    <h4 class="services_modal-title">Frontend <br> Developer</h4>
                    <i class="uil uil-times services_modal-close"></i>
                    <ul class="services_modal-services grid">
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>Web page Development.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I create ux element interactions.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I position your company brand.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--================== Services 3 ==================-->
        <div class="services_content">
            <div>
                <i class="uil uil-pen services_icon"></i>
                <h3 class="services_title">Branding <br> Designer</h3>
            </div>
            <span class="button button-flex button-small button-link services_button">
                View More
                <i class="uil uil-arrow-right button_icon"></i>
            </span>

            <div class="services_modal">
                <div class="services_modal-content">
                    <h4 class="services_modal-title">Branding <br> Designer</h4>
                    <i class="uil uil-times services_modal-close"></i>
                    <ul class="services_modal-services grid">
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I develop the user interface.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>Web page Development.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I create ux element interactions.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p>I position your company brand.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!--===================== Portfolio ==================-->
<!-- tanda "#" aja pada hred akan merujuk ke yang paling atas -->
<!-- Memakai bantuan swiper -->
<section class="portfolio section" id="portfolio">
    <h2 class="section_title">Portfolio</h2>
    <span class="section_subtitle">Most recent work</span>
    <div class="portfolio_container container swiper mySwiper">
        <div class="swiper-wrapper">
            <!--============== Portfolio 1 ================-->
            <div class="portfolio_content grid swiper-slide">
                <img src="Portfolio1.jpg" alt="" class="portfolio_image">
                <div class="portfolio_data">
                    <h3 class="portfolio_title">Modern Website</h3>
                    <p class="portfolio_description">Website adaptable to all devices, with and animated interactions.</p>
                    <a href="#" class="button button-flex button-small portfolio_button">
                        Demo
                        <i class="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
            <!--============= Portfolio 2 ==============-->
            <div class="portfolio_content grid swiper-slide">
                <img src="Portfolio2.jpg" alt="" class="portfolio_image">
                <div class="portfolio_data">
                    <h3 class="portfolio_title">Brand Design</h3>
                    <p class="portfolio_description">Make products more attractive to customers with cool animations.</p>
                    <a href="#" class="button button-flex button-small portfolio_button">
                        Demo
                        <i class="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
            <!--=============== Portfolio 3 =================-->
            <div class="portfolio_content grid swiper-slide">
                <img src="Portfolio3.jpg" alt="" class="portfolio_image">
                <div class="portfolio_data">
                    <h3 class="portfolio_title">Game Development</h3>
                    <p class="portfolio_description">Create fun and simple games that anyone can play</p>
                    <a href="#" class="button button-flex button-small portfolio_button">
                        Demo
                        <i class="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
        </div>
        <!-- Add arrows (dengan sedikit perombakan)-->
        <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper_portfolio-icon"></i>
        </div>
        <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper_portfolio-icon"></i>
        </div>
        <!-- Add pagination -->
        <div class="swiper-pagination"></div>
    </div>
</section>

<!-- ============== Project in Mind ===================== -->
<section class="project section">
    <div class="project_bg">
        <div class="project_container container grid">
            <div class="project_data">
                <h2 class="project_title">You have a new Project</h2>
                <p class="project_description">Contact me now and get 20% discount on your new project!</p>
                <a href="#contact" class="button button-flex button-white">Contactme
                    <i class="uil uil-message project_icon button_icon"></i>
                </a>
            </div>
            <img src="Nobel3.png" alt="" class="project_image">
        </div>
    </div>
</section>

<!-- ================= Testimonial ======================= -->
<section class="testimonial section">
    <h2 class="section_title">Testimonial</h2>
    <span class="section_subtitle">My client saying</span>
    <div class="testimonial_container container swiper mySwiper">
        <div class="swiper-wrapper">
            <!-- =============== Testimonial 1 ============= -->
            <div class="testimonial_content swiper-slide">
                <div class="testimonial_data">
                    <div class="testimonial_header">
                        <img src="Leo.jpg" alt="" class="testimonial_image">

                        <div>
                            <h3 class="testimonial_nama">Leo Andres</h3>
                            <span class="testimonial_client">Client</span>
                        </div>
                    </div>

                    <div>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                    </div>
                </div>

                <p class="testimonial_description">
                    I got a good impression, my ball sales were selling very well because of the attractive design that brought many customers.
                </p>
            </div>

            <!-- ============= Testimonial 2 ============= -->
            <div class="testimonial_content swiper-slide">
                <div class="testimonial_data">
                    <div class="testimonial_header">
                        <img src="steph.jpg" alt="" class="testimonial_image">
                        <div>
                            <h3 class="testimonial_nama">Stap Carry</h3>
                            <span class="testimonial_client">Client</span>
                        </div>
                    </div>

                    <div>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                    </div>
                </div>

                <p class="testimonial_description">
                    My basketball shoes are selling very well because of the attractive design of the website, three points!
                </p>
            </div>

            <!-- ============= Testimonial 3 ================-->
            <div class="testimonial_content swiper-slide">
                <div class="testimonial_data">
                    <div class="testimonial_header">
                        <img src="swift.jpg" alt="" class="testimonial_image">
                        <div>
                            <h3 class="testimonial_nama">Swiftay</h3>
                            <span class="testimonial_client">Client</span>
                        </div>
                    </div>

                    <div>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                        <i class="uil uil-favorite testimonial_icon-star"></i>
                    </div>
                </div>

                <p class="testimonial_description">
                    Thanks to the cool website design, my musical instrument sales got a lot of customers, thank you swifties!
                </p>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-testimonial"></div>
    </div>
</section>



<!--===================== Contact Me =========================-->
<!-- Nama id harus sesuai dengan nama link, id tidak memakai # -->
<section class="contactme section" id="contact">
    <h2 class="section_title">Contact Me</h2>
    <span class="section_subtitle">Get in touch</span>

    <div class="contact_container container grid">
        <div>
            <div class="contact_information">
                <i class="uil uil-phone contact_icon"></i>

                <div>                    
                    <h3 class="contact_title">Call Me</h3>
                    <span class="contact_subtitle">0813-5810</span>
                </div>
            </div>

            <div class="contact_information">
                <i class="uil uil-envelope contact_icon"></i>

                <div>
                    <h3 class="contact_title">Email</h3>
                    <span class="contact_subtitle">habilnasutionx@gmail.com</span>
                </div>
            </div>

            <div class="contact_information">
                <i class="uil uil-location-pin-alt contact_icon"></i>

                <div>
                    <h3 class="contact_title">Location</h3>
                    <span class="contact_subtitle">Atjeh - Indonesia</span>
                </div>
            </div>
        </div>

        <form action="" class="contact_form grid">
            <div class="contact_inputs grid">
                <div class="contact_content">
                    <label for="" class="contact_label">Name</label>
                    <input type="text" class="contact_input">
                </div>
                <div class="contact_content">
                    <label for="" class="contact_label">Email</label>
                    <input type="email" class="contact_input">
                </div>
            </div>

            <div class="contact_content">
                <label for="" class="contact_label">Project</label>
                <input type="text" class="contact_input">
            </div>
            <div class="contact_content">
                <label for="" class="contact_label">Message</label>
                <textarea name="" id="" cols="0" rows="7" class="contact_input"></textarea>
            </div>

            <div>
                <a href="#" class="button button-flex">
                    Send Message
                    <i class="uil uil-message button_icon"></i>
                </a>
            </div>
        </form>
    </div>
</section>
</main>

<!-- ====================== Footer ======================= -->
<!-- footer biasanya digunakan untuk contact misal link-->
<footer class="footer">
    <div class="footer_bg">
        <div class="footer_container container grid">
            <div>
                <h1 class="footer_title">Noitusan</h1>
                <span class="footer_subtitle">Fullstack Developer</span>
            </div>
            
            <ul class="footer_links">
                <li>
                    <a href="#services" class="footer_link">Services</a>
                </li>
                <li>
                    <a href="#portfolio" class="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" class="footer_link">Contactme</a>
                </li>
            </ul>
            

            <!-- Blank agar warna linknya tidak keliatan -->
            <div class="footer_socials">
                <a href="https://www.instagram.com/" target="_blank" class="footer_social">
                    <i class="uil uil-instagram-alt"></i>
                </a>
                <a href="https://line.me/id/" target="_blank" class="footer_social">
                    <i class="uil uil-line"></i>
                </a>
                <a href="" class="footer_social" target="_blank">
                    <i class="uil uil-twitter-alt"></i>
                </a>
            </div>
        </div>

        <!-- &#169; merupakan bentuk c (copyright) -->
        <p class="footer_copy">&#169; Bedimcode. All right reserved</p>
    </div>
</footer>

<!-- ================= Scroll Top ========================= -->
<a href="#" class="scroll-up" id="scroll-up">
    <i class="uil uil-arrow-up scroll-up_icon"></i>
</a>


<!-- ================== Swiper JS ======================== -->
    <script src="swiper-bundle.min.js"></script>

  <!--=================== Main JS ====================-->
    <script src="display.js"></script>
</body>
</html>
