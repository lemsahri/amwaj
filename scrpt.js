document.addEventListener('DOMContentLoaded', function() {
    // تنشيط القائمة المتنقلة
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // تعديل القائمة عند تغيير حجم الشاشة
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
    
    // إرسال طلب عبر واتساب
    const whatsappButtons = document.querySelectorAll('.whatsapp-order');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            const productDesc = this.getAttribute('data-desc');
            
            // استبدل هذا الرقم برقم هاتفك (بدون علامة +)
            const whatsappNumber = '212638881326';
            
                       // إنشاء رسالة واتساب
                       const message = مرحباً، أود طلب المنتج التالي:\n\n +
                       *اسم المنتج:* ${productName}\n +
                       *السعر:* ${productPrice}\n +
                       *الوصف:* ${productDesc}\n\n +
                       الرجاء التواصل معي لإتمام الطلب.;

            
            // تشفير الرسالة للرابط
            const encodedMessage = encodeURIComponent(message);
            
            // فتح واتساب
            window.open (https)//wa.me/${whatsappNumber}?text=${encodedMessage}, '_blank');
        });
    });
    
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // إغلاق القائمة المتنقلة إذا كانت مفتوحة
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثير عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
