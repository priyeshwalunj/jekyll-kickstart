$(document).ready(function() {

    $('.toggle-btn').on('click', function() {
        $('.sidebar').toggleClass('sidebar-show');
    });

    
    
    var sidebarShow = $('.sidebar').hasClass('sidebar-show');
    
    if(sidebarShow) {

        $('.content-area').on('click', function() {
            console.log('content click')
        })
        console.log('true');
        $('.sidebar').removeClass('.sidebar-show');
    }

    $('.sidebar').on('change', function() {
        console.log('content click')
    })
});
