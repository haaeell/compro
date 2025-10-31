const galleryItems = [
        { src: "https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800", alt: "Coffee Plantation Morning" },
        { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800", alt: "Coffee Beans Drying" },
        { src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800", alt: "Cup of Coffee" },
        { src: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?w=800", alt: "Coffee Cup and Beans" },
        { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800", alt: "Coffee Packaging" },
        { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800", alt: "Coffee Farm View" },
        { src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800", alt: "Coffee Roasting Process" },
        { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800", alt: "Another Coffee Drying" },
];

function renderGallery() {
        const topWrapper = document.getElementById("galleryTopWrapper");
        const bottomWrapper = document.getElementById("galleryBottomWrapper");
        if (!topWrapper || !bottomWrapper) return;

        // 🔁 Duplicate slides for continuous scrolling illusion
        const doubledItems = [...galleryItems, ...galleryItems];

        topWrapper.innerHTML = doubledItems
                .map(
                        (item, i) => `
              <div class="swiper-slide gallery-card" onclick="openGalleryModal(${i % galleryItems.length})">
                <img src="${item.src}" alt="${item.alt}" class="img-fluid rounded">
              </div>`
                )
                .join("");

        bottomWrapper.innerHTML = doubledItems
                .map(
                        (item, i) => `
              <div class="swiper-slide gallery-card" onclick="openGalleryModal(${i % galleryItems.length})">
                <img src="${item.src}" alt="${item.alt}" class="img-fluid rounded">
              </div>`
                )
                .join("");

        initGallerySwiper();
}

function initGallerySwiper() {
        // 🔼 Atas – Mengalir ke kiri
        new Swiper(".gallery-top", {
                slidesPerView: 3,
                spaceBetween: 25,
                loop: false,
                freeMode: true,
                allowTouchMove: false,
                speed: 9000,
                autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                },
                breakpoints: {
                        320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        992: { slidesPerView: 3.5 },
                },
        });

        // 🔽 Bawah – Mengalir ke kanan (reverse)
        new Swiper(".gallery-bottom", {
                slidesPerView: 3,
                spaceBetween: 25,
                loop: false,
                freeMode: true,
                allowTouchMove: false,
                speed: 9000,
                autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                },
                breakpoints: {
                        320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        992: { slidesPerView: 3.5 },
                },
        });
}

function openGalleryModal(index) {
        const wrapper = document.getElementById("galleryModalWrapper");
        wrapper.innerHTML = galleryItems
                .map(
                        (item) => `
              <div class="swiper-slide text-center">
                <img src="${item.src}" alt="${item.alt}" class="img-fluid rounded-4">
                <p class="text-light mt-3">${item.alt}</p>
              </div>`
                )
                .join("");

        const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
        modal.show();

        if (window.galleryViewer) window.galleryViewer.destroy();
        window.galleryViewer = new Swiper(".gallery-viewer", {
                initialSlide: index,
                loop: true,
                navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                },
        });
}

document.addEventListener("DOMContentLoaded", renderGallery);
