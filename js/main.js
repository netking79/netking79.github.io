// 智览浏览器官网 - 交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 导航栏滚动效果
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        }
    });

    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                navLinks.style.position = 'static';
                navLinks.style.flexDirection = 'row';
                navLinks.style.background = 'transparent';
                navLinks.style.boxShadow = 'none';
                navLinks.style.padding = '0';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = 'white';
                navLinks.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '16px';
            }
        });
    }

    // 下载按钮点击统计（可选功能）
    const downloadButtons = document.querySelectorAll('.btn-primary, .btn-download');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('用户点击下载按钮');
            // 可以在这里添加统计代码
        });
    });

    // 页面加载动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .feature-detail-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
