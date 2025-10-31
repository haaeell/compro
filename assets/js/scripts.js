
setTimeout(() => {
        AOS.init({
                duration: 600,
                once: true,
                offset: 80,
                easing: 'ease-in-out'
        });
}, 50);
window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".custom-navbar");
        if (window.scrollY > 60) {
                navbar.classList.add("scrolled");
        } else {
                navbar.classList.remove("scrolled");
        }
});

function loadComponent(id, file, callback) {
        fetch(`/components/${file}`)
                .then(response => response.text())
                .then(data => {
                        document.getElementById(id).innerHTML = data;

                        if (id === "navbar") setActiveNav();
                        if (id === "all-products") initProductTabs();

                        if (callback && typeof callback === "function") {
                                callback();
                        }

                        AOS.refresh();
                })
                .catch(err => console.error(`Gagal memuat komponen ${file}:`, err));
}


function initProductTabs() {
        const typeTabs = document.querySelectorAll('#coffeeTabs .nav-link');
        const productCards = document.querySelectorAll('.product-card');

        if (!typeTabs.length || !productCards.length) return; // amanin dulu

        typeTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                        typeTabs.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        const type = tab.dataset.type;

                        productCards.forEach(card => {
                                if (card.dataset.type === type) {
                                        card.style.display = 'block';
                                        card.classList.add('fade-in');
                                } else {
                                        card.style.display = 'none';
                                        card.classList.remove('fade-in');
                                }
                        });

                        setTimeout(() => AOS.refresh(), 100);
                });
        });
}



function setActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentPath) {
                        link.classList.add('active');
                }
        });
}

