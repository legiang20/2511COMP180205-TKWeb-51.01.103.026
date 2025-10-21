// script.js
$(document).ready(function() {
    const music = document.getElementById('music');
    let isPlaying = false;

    // 1. Chức năng Bật/Tắt Nhạc Nền
    $('#nhac').click(function() {
        if (isPlaying) {
            music.pause();
            isPlaying = false;
            $(this).text('🎵 Bật Nhạc');
        } else {
            // Cần tương tác người dùng để phát, nên dùng .then()
            music.play().then(() => {
                isPlaying = true;
                $(this).text('🔇 Tắt Nhạc');
            }).catch(error => {
                alert("Vui lòng tương tác với trang trước để có thể bật nhạc.");
            });
        }
    });

    // 2. Tương tác chi tiết Sản phẩm (jQuery slideToggle)
    $('.item').click(function() {
        const details = $(this).next('.details'); 
        details.slideToggle(300); 
        $(this).toggleClass('highlight');
    });

    // 3. Xử lý Form Đăng ký (demo)
    $('#form').submit(function(event) {
        event.preventDefault(); 
        const name = $('#regname').val();
        if (name === "") {
             alert("Vui lòng điền tên để đăng ký!");
             return;
        }
        alert(`Cảm ơn ${name}! Bạn đã đăng ký thành công. Hẹn gặp tại bữa tiệc!`);
        this.reset();
    });
});