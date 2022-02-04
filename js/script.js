


// jquerry

$(document).ready(function () {
    let navbar = document.querySelector('.navbar');
    document.querySelector('.fa-bars').onclick = () => {
        navbar.classList.toggle('active');
    }


    $('.logo').click(function (){
        console.log("works");
        location.href = "http://localhost:5500/index.html";
    });
});




// javascript

$('.lol .digits .count').each(function () {
    $(this).prop('Counter',0).animate({
            Counter: $(this).text()
    }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                    $(this).text(Math.ceil(now));
            }
    });
});