$(document).ready(function(){
    
    $('.toggle-btn').on('click',function(){
        $('.sidebar').toggleClass('sidebar-show');
        $('.content-area').toggleClass('content-area-overlay');
    });

    $('.content-area').on('click', function() {
        console.log('within loop');
    });

});

