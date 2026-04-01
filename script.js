let startTime, timerInterval;
const fab = document.getElementById('fab');
const menu = document.getElementById('optionsMenu');
const timerContainer = document.getElementById('timerContainer');
const stopwatch = document.getElementById('stopwatch');

// إظهار وإخفاء قائمة المواصلات
fab.onclick = () => menu.classList.toggle('hidden');

function startTrip(type) {
    menu.classList.add('hidden');
    timerContainer.classList.remove('hidden');
    startTime = Date.now();
    
    timerInterval = setInterval(() => {
        let diff = Date.now() - startTime;
        let h = Math.floor(diff / 3600000);
        let m = Math.floor((diff % 3600000) / 60000);
        let s = Math.floor((diff % 60000) / 1000);
        stopwatch.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}

document.getElementById('finishBtn').onclick = () => {
    clearInterval(timerInterval);
    let price = prompt("أدخل سعر المواصلة:");
    if (price !== null) {
        alert("تم التسجيل بنجاح! السعر: " + price + " جنيه");
        timerContainer.classList.add('hidden');
        // هنا هنضيف مستقبلاً كود الحفظ في الموبايل والرسومات البيانية
    }
};
