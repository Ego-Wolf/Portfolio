                        // Coding for animation cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});


function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);
}
animateCircles();

                            // Coding cho phần loading-animation-pages
// Hiệu ứng loading của class "loader" và "body.loading" của scrollbar
document.addEventListener("DOMContentLoaded", function () {
    // Thêm lớp 'loading' khi DOM đã sẵn sàng
    document.body.classList.add('loading');

    // Gọi hàm hiển thị loading animation ở đây
    setTimeout(function() {
        $('.loader').fadeToggle();
    }, 5000);
    
    // setTimeout để giả lập việc loading animation hoàn thành
    setTimeout(function () {
        // Xóa lớp 'loading' khi loading animation hoàn thành
        document.body.classList.remove('loading');
    }, 500);
});

// loading animation coffee
document.addEventListener("DOMContentLoaded", function () {
    let master = gsap.timeline();
    master.add(text()).add(labelLoading()).add(cup()).add(progressBar());
});

function text() {
    let text = gsap.timeline();
    text.from(".line_inner", 1, {
        y: "90%",
        duration: 2.5,
        opacity: 0,
        delay: 0,
        ease: "power1.out",
        stagger: { amount: 0.2, opacity: 1 }
    });
    return text;
}

function labelLoading() {
    let labelLoading = gsap.timeline();
    gsap.from(".progress__label", 0.7, {
        y: "90%",
        duration: 2.5,
        opacity: 0,
        delay: 0,
        ease: "power3.out",
        stagger: { amount: 0.2, opacity: 1 }
    });
    gsap.from(".progress__wrapper", 0.7, {
        y: "90%",
        duration: 2.5,
        opacity: 0,
        delay: 0,
        ease: "power3.out",
        stagger: { amount: 0.2, opacity: 1 }
    });
    gsap.from(".cup", 1, {
        y: "90%",
        rotation: -180,
        duration: 2,
        opacity: 0,
        delay: 0,
        ease: "power3.out",
        stagger: { amount: 0.2, opacity: 1 }
    });

    return labelLoading;
}

function cup() {
    let cup = gsap.timeline();
    gsap.from(".coffee", 0.7, {
        duration: 2.5,
        opacity: 0,
        delay: 0.6,
        ease: "power3.out",
        stagger: { amount: 2, opacity: 1 }
    });
    return cup;
}

function progressBar() {
    let progressBar = gsap.timeline();
    gsap.from(".progress__bar", {
        duration: 7,
        width: 0,
        opacity: 0,
        delay: 0.6,
        ease: "power3.out",
        stagger: { amount: 2, opacity: 1 }
    });
    return progressBar;
}                   



    // Coding cho phần toggle class="Btn-darkmode-toggle-home-banner" của home
document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.getElementById('darkmode-toggle');
    var banner1 = document.querySelector('.img-content .banner-1');
    var banner2 = document.querySelector('.img-content .banner-2');

    // darkModeToggle.addEventListener('change', function() {
    //     if (darkModeToggle.checked) {
    //         banner1.style.display = 'none';
    //         banner2.style.display = 'block';
    //     } else {
    //         banner1.style.display = 'block';
    //         banner2.style.display = 'none';
    //     } 
    // });

    function toggleBanners() {
        setTimeout(function() {
            banner1.style.display = (darkModeToggle.checked) ? 'none' : 'block';
            banner2.style.display = (darkModeToggle.checked) ? 'block' : 'none';
        }, 300); // Thời gian delay, đơn vị là mili-giây (500ms = 0.5s)
    }

    darkModeToggle.addEventListener('change', function() {
        toggleBanners();
    });

    // Gọi hàm khi được tải trang
    toggleBanners();
});

                        // Coding cho phần active của header
document.addEventListener("DOMContentLoaded", function () {
    const headerItems = document.querySelectorAll("header nav a");

    headerItems.forEach(item => {
        item.addEventListener("click", function () {
            // Xóa class "active" từ tất cả các mục
            headerItems.forEach(item => item.classList.remove("active"));

            // Thêm class "active" vào mục được chọn
            this.classList.add("active");
        });
    });
});


                        // Coding cho phần Scroll sections của header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// The code below will changing the background color of header when scroll the mouse down && link the id each of sections into the items of header when click into the header
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}





                            // Codding cho phần autoSlide của projects
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các input và label trong phần projects
    var slides = document.querySelectorAll('.projects input[name="slide"]');
    var labels = document.querySelectorAll('.projects label');


    // Thiết lập biến đếm và thời gian delay
    var slideIndex = 0;
    var intervalTime = 2000; // 2 giây

    // Hàm tự động chuyển slide
    function autoSlide() {
        // Chuyển slide tiếp theo
        slideIndex = (slideIndex + 1) % slides.length;

        // Kích hoạt sự kiện click cho label tương ứng
        labels[slideIndex].click();
    }

    // Thiết lập interval để gọi hàm autoSlide sau mỗi khoảng thời gian
    var slideInterval = setInterval(autoSlide, intervalTime);

    // Dừng interval khi con trỏ chuột hover lên phần projects
    document.querySelector('.projects').addEventListener('mouseover', function() {
        clearInterval(slideInterval);
    });

    // Tiếp tục interval khi con trỏ chuột rời khỏi phần projects
    document.querySelector('.projects').addEventListener('mouseout', function() {
        slideInterval = setInterval(autoSlide, intervalTime);
    });
});


                        // Coding for the book function
// Turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// Contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    // Prevent the default action of the click event
    event.preventDefault();

    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

// create reverse index function 
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages -1;
    }
}

// Back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    // Prevent the default action of the click event
    event.preventDefault();

    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

// Opening animation 
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Delay before starting the opening animation
const delayBeforeAnimation = 5000; // in milliseconds

let bookOpened = false; // Variable to track whether the book is open or closed

// Function to start the opening animation
function startOpeningAnimation() {
    // Check if the book is already opened
    if (bookOpened) {
        return;
    }

    // Opening animation (cover right animation)
    setTimeout(() => {
        coverRight.classList.add('turn');
        hideOpenBookButton();
    }, 2100)

    setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 2800)

    // Opening animation (page left or profile page animation)
    setTimeout(() => {
        pageLeft.classList.add('turn');
        pageLeft.style.zIndex = 20;

        // Toggle a class on the "Open The Book" button to change its name
        const openBookButton = document.getElementById('openBookButton');
        openBookButton.classList.add('book-opened');
        
        showOpenBookButton();
        // Set the bookOpened variable to true when the book is opened
        bookOpened = true;
    }, 4000); // or 3200

    // Additional opening animation (all cover right animation)
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 2100)
    });
}

// Start the opening animation after the specified delay
setTimeout(startOpeningAnimation, delayBeforeAnimation);


// Function to hide the "Open The Book" button
function hideOpenBookButton() {
    const openBookButton = document.getElementById('openBookButton');
    // openBookButton.innerHTML = "Open The Book";
    openBookButton.style.opacity = 0;
    openBookButton.style.pointerEvents = 'none'; // Disable button clicks
}

// Function to show the "Open The Book" button
function showOpenBookButton() {
    const openBookButton = document.getElementById('openBookButton');
    // openBookButton.innerHTML = "Close The Book";
    openBookButton.style.opacity = 1;
    openBookButton.style.pointerEvents = 'auto'; // Enable button clicks
}


// Closing the book immediately when the "Open The Book" button is clicked
document.getElementById('openBookButton').addEventListener('click', function () {
    // Check if the book is already open
    if (bookOpened) {
        // Lấy ra trang màu xanh của sách
        const coverRight = document.querySelector('.cover.cover-right');

        // Loại bỏ lớp 'turn' để đóng trang
        coverRight.classList.remove('turn');

        // Thiết lập lại chỉ số trang hiện tại
        pageNumber = 0;

        // Hiển thị lại nút "Open The Book"
        showOpenBookButton();

        // Đặt lại z-index để trang màu xanh của sách quay trở lại vị trí ban đầu
        setTimeout(() => {
            coverRight.style.zIndex = 100;
        }, 500);

        // Set the bookOpened variable to false when the book is closed
        bookOpened = false;
    }
});












