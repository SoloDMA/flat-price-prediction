
$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 700);

    });
});


// $(document).ready(function () {
//     $('#prediction').attr('hidden', 'true');
// });

addEventListener('click', function () {
    $('#flat-district').removeAttr('style');
    $('#error').remove();
});

addEventListener('click', function () {
    $('#flat-type').removeAttr('style');
    $('#error').remove();
});

addEventListener('submit', function (e) {
    if(document.flat_info.district.value == 0){
        e.preventDefault();
        $('#flat-district').css({'background-color': '#ff7979', 'color':'white'});
        $('#flat-district').append('<option id="error" selected disabled hidden>Поле обязательно для заполнения!</option>');
    }
    if(document.flat_info.type.value == 0){
        e.preventDefault();
        $('#flat-type').css({'background-color': '#ff7979', 'color':'white'});
        $('#flat-type').append('<option id="error" selected disabled hidden>Поле обязательно для заполнения!</option>');
    }
})