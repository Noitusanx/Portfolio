// Menu Show Hidden
const navmenu = document.getElementById("nav-menu"),
navtoggle = document.getElementById("nav-toggle"),
navclose = document.getElementById("nav-close");

//  =================== Membuka menu ===================
// Menu show (Jika icon app ditekan maka akan muncul menu)
// Nama dari classlist harus sesuai dengan nama dari cssnya (show-menu)
if(navtoggle){
    navtoggle.addEventListener("click", ()=>{
    navmenu.classList.add("show-menu");
    })
}

// ================ Remove menu ==================
// Jika menekan tanda silang maka menu disembunyikan
if(navclose){
    navclose.addEventListener("click", ()=>{
        navmenu.classList.remove("show-menu");
    })
}

// Menghapus menu mobile
// Menghapus menu mobile queryselectorall (memilih seluruh class)
const navlink = document.querySelectorAll(".nav_link");

function linkAction(){
    const navmenu = document.getElementById("nav-menu");
    // Ketika memilih salah satu link kita menghapus(keluar) dari seluruh menunya
    navmenu.classList.remove("show-menu");
}
navlink.forEach(n => n.addEventListener("click", linkAction));

// ===================== Accordion Skills =================
const skills_Content = document.getElementsByClassName(
    "skills_content"),
    skills_Header = document.querySelectorAll(".skills_header");

function toggleskills(){
    let itemclass = this.parentNode.className;

    // Menutup class
    // Jika class skills open 1 terbuka dan ingin membuka skills_close maka skills open 1 menjadi tertutup (close)
    for (let i = 0; i < skills_Content.length; i++) {
        skills_Content[i].className = "skills_content skills_close";
    }

    // Membuka class
    // Jika class yang dipanggil merupakan skills yang close maka akan dibuka seperti class skills open
    if(itemclass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open";
    }
}

// Jika skills_header diclick maka akan melakukan toggleskills
skills_Header.forEach((bantuan)=> {
    bantuan.addEventListener("click", toggleskills);
})


// // // =================== Qualification Tabs =======================
const tabs = document.querySelectorAll("[data-target]"),
tabs_contents = document.querySelectorAll("[data-content]")

// Jika menekan education maka akan menampilkan bagian education saja (target)
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        // Jika menekan "Work" maka bagian yang "Education" (qualification_active) akan dihapus dan hanya menampilkan yang work saja

        tabs_contents.forEach(tab_content => {
            tab_content.classList.remove("qualification_active")
        })

        // Nama dari qualification_active sesuai dengan yang di CSS

        target.classList.add("qualification_active")

        // Memberikan qualification_active pada tabs yang dipilih misal work dan digabung dengan css sehingga warna dari work akan menjadi biru ketika ditekan

        tabs.forEach(tab => {
            tab.classList.remove("qualification_active")
        })
        tab.classList.add("qualification_active")
    })
})

// ================= Services Modal ======================
const modal_views = document.querySelectorAll(".services_modal"),
    modal_buttons = document.querySelectorAll(".services_button"),
    modal_closes = document.querySelectorAll(".services_modal-close")

// Nama dari active-modal harus sesuai dengan nama yang di CSS-nya
// Ketika modal dijalankan maka akan menambahkan classlist active-modal yang terdapat di CSS sehingga akan menampilkan macam-macam dari services modal
let modal = function(modal_click){
    modal_views[modal_click].classList.add("active-modal")
}

// Jika modal_button diklik maka akan menjalankan let modal
modal_buttons.forEach((modal_button, i) => {
    modal_button.addEventListener("click", () => {
        modal(i)
    })
})

// Ketika tombol (x) ditekan maka classList active-modal dihapus sehingga tidak menampilkan lagi macam-macam dari services modal
modal_closes.forEach((modal_close) => {
    modal_close.addEventListener("click", ()=>{
        modal_views.forEach((modal_view) => {
            modal_view.classList.remove("active-modal")
        })
    })
})

// =================== Portfolio Swiper =====================
let swiper_portfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// ================== Testimonial Swiper ======================
// grapcursor = cursornya berubah jadi grap sedangkan jika grab aja cursornya tetap namun tetap dapat memegang item
// Loop berarti jika sudah habis maka kembali ke awal lagi
// breakpoints (tulisannya harus benar karena fungsi ini terdapat pada swiper-bundle-js) 568 berarti jika lebih dari atau sama dengan 568 maka slidesPerviewnya akan terbagi menjadi dua

let swiper_testimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568:{
            slidesPerView: 2,
        }
    }
});

// ============== Scroll section active link ==================
// Didapat dari github
// Icon menjadi berwarna ketika discroll atau di klik (menuju tempatnya) misal ke about maka icon about menjadi berwarna
// Section id merujuk pada section section di html, nav_menu merujuk pada menu menu yang terdapat di html dan active-link merujuk pada CSS

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ============== Change Background Header ==================
// Didapatkan dari github
// Memberikan bayangan pada header ketika dilakukan scroll (vertikal)
// Header merujuk pada class header di html, scroll-header pada terdapat pada css

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ==================== Show scroll up ========================
// didapat dari github
// Ketika layar discroll kebawah maka akan menampilkan tanda panah
// id harus sesuai dengan id yang terdapat di html, nama show-scroll sesuai dengan di CSS

function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

// =================== Dark light theme ======================
// Didapat dari github
// idnya harus sesuai yang di HTMl, const darktheme harus sesuai dengan yang di CSS, icontheme diambil dari iconscout
const themeButton = document.getElementById('theme-button')
const darkTheme = 'tema-gelap'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
