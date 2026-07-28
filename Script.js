/* =====================================
   GRAHA MITRA BATAKO
   script.js
===================================== */



// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};


function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ===============================
// NAVBAR ACTIVE
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow =
            "0 3px 10px rgba(0,0,0,.08)";

    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(
    ".card, .produk-card, .testi-card, .galeri-grid img"
);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        } else {

            item.style.opacity = "0";
            item.style.transform = "translateY(40px)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// COPYRIGHT TAHUN OTOMATIS
// ===============================

const tahun = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =
        `© ${tahun} Graha Mitra Batako. Seluruh Hak Cipta Dilindungi.`;

}


// Ganti dengan nomor WhatsApp Graha Mitra Batako
const nomorWA = "6285709733153";

function kirimWhatsApp(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const qty = document.getElementById("qty").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    if (!nama || !telepon || !qty || !alamat) {
        alert("Silakan lengkapi semua data.");
        return;
    }

    const pesan = `Halo Graha Mitra Batako.
Saya ingin memesan batako.

Nama : ${nama}
No. HP : ${telepon}
Jumlah : ${qty} buah
Alamat : ${alamat}

Mohon informasi total harga dan ongkos kirim.

Terima kasih.`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}
