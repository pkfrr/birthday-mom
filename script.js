// ฟังก์ชันสำหรับแสดง/ซ่อนข้อความพิเศษ
function revealMessage() {
    const msgBox = document.getElementById('message');
    if (msgBox.style.display === 'none' || msgBox.style.display === '') {
        msgBox.style.display = 'block';
    } else {
        msgBox.style.display = 'none';
    }
}

// ฟังก์ชันสร้างดอกไม้ตกแบบสุ่ม
function createFlower() {
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷'];
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = randomFlower;
    
    // ตำแหน่ง X แบบสุ่ม
    const randomX = Math.random() * window.innerWidth;
    flower.style.left = randomX + 'px';
    flower.style.top = '-30px';
    
    // ความเร็วการตกแบบสุ่ม (3-8 วินาที)
    const duration = Math.random() * 5 + 3;
    flower.style.animationDuration = duration + 's';
    
    document.querySelector('.flowers-container').appendChild(flower);
    
    // ลบดอกไม้หลังจากตกจอไปแล้ว
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// สร้างดอกไม้ตกทุก 0.5 วินาที
setInterval(createFlower, 500);

// เพิ่มเอฟเฟคการกระเบิด
document.querySelector('.btn').addEventListener('click', function() {
    playClickEffect();
});

// ฟังก์ชันสร้างเอฟเฟคการกระเบิด
function playClickEffect() {
    const button = document.querySelector('.btn');
    const rect = button.getBoundingClientRect();
    
    // สร้างหลายๆ อนุภาค
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.textContent = '✨';
        
        document.body.appendChild(particle);
        
        // สร้าง animation สำหรับอนุภาค
        const angle = (i / 5) * Math.PI * 2;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;
        let opacity = 1;
        
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Console message
console.log('🎂 สุขสันต์วันเกิดคุณแม่นะครับ! 💖');
