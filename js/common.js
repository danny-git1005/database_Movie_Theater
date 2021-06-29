let aboutUs = $('.nav-item:contains("關於我們")');
let editors = $('.editor_wrapper');
let currentPath = window.location.pathname;
aboutUs.on('click', function() {
    if (currentPath != "/Movie-Theater/index.html") {
        window.location.href = "./index.html#js_editor"
    }
    $('html,body').animate({scrollTop:editors.offset().top},30);
});