$(document).ready(function() {

    $('.toggle-btn').on('click', function() {
        $('.sidebar').toggleClass('sidebar-show');
        $('.responsive-logo').toggle(600)

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

    url = $(location).attr('href').split('/').pop().replace(/.html/,"");
    navtext = $('.nav li a').data('value')
    console.log(url)

    if(url == navtext) {
        console.log('in Loop')
        $(this).addClass('active')
    }

    $('.nav li a').on('click', function() {
        clickValue = $(this).text();

        console.log(clickValue);
    })

});
