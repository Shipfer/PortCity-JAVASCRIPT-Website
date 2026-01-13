document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GÖREV: Sayfa Yüklenme Olayı (Alert Mesajı)
    alert("PortCity Tanıtım Sitesine Hoş Geldiniz");


    // 2. ve 3. GÖREV: Menü Etkileşimi (Mouseover/out & Click)
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Sayfa yüklendiğinde aktif menüyü belirle
        if(link.href.includes(currentPath) && currentPath !== "/") {
            link.classList.add('active');
        }
        
        // Mouseover: Renk Değişimi
        link.addEventListener('mouseover', function() {
            this.style.color = '#ffcc00'; 
        });

        // Mouseout: Eski Haline Dönüş
        link.addEventListener('mouseout', function() {
            this.style.color = ''; 
        });

        // Click: Aktif Class Ataması
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // 4. GÖREV: Tema Değiştirme Butonu
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }


    // 5. GÖREV: Mouseover Bilgi Kutusu (Services Sayfası)
    const hoverItems = document.querySelectorAll('.hover-item');
    const infoDisplay = document.getElementById('info-display');

    if(hoverItems.length > 0 && infoDisplay) {
        hoverItems.forEach(item => {
            item.addEventListener('mouseover', function() {
                const infoText = this.getAttribute('data-info');
                infoDisplay.textContent = infoText;
            });

            item.addEventListener('mouseout', function() {
                infoDisplay.textContent = ""; 
            });
        });
    }


    // 6. GÖREV: Dinamik Aktivite Listesi (Array + Loop)
    const activityList = document.getElementById('dynamic-activities');
    if(activityList) {
        const activities = [
            "Tekne Turu 🚤",
            "Dalış Deneyimi 🤿",
            "Marina Restoranları 🍽️",
            "Gün Batımı Yürüyüşü 🌅"
        ];

        activities.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            activityList.appendChild(li);
        });
    }


    // 7. GÖREV: Beğeni Sayacı
    const likeBtn = document.getElementById('like-btn');
    const likeCountSpan = document.getElementById('like-count');
    let count = 0; 

    if(likeBtn && likeCountSpan) {
        likeBtn.addEventListener('click', () => {
            count++;
            likeCountSpan.textContent = count;
        });
    }


    // 8. GÖREV: İletişim Formu Kontrolü
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if(name === "" || email === "" || message === "") {
                alert("Lütfen tüm alanları doldurunuz!");
            } else {
                alert("Mesajınız başarıyla gönderildi: " + name);
                contactForm.reset(); 
            }
        });
    }


    // 9. GÖREV: Görsel Etkileşimi (Büyütme/Küçültme)
    const expandImg = document.getElementById('expandable-img');
    if(expandImg) {
        expandImg.addEventListener('click', () => {
            expandImg.classList.toggle('expanded');
        });
    }

});