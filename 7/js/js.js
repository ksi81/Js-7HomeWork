// Задание 6. Дан блок с изображением. При наведении мыши, на блок, открывается текстовый блок с черным фоном, прозрачность фона .. Направление раскрытия — с правой части родителя. Если мышь убрана — то блок закрывается с задержкой по времени.

$(document).ready(function() {
    $('img').on('mouseover', function() {
        if ($(this).attr('alt') == undefined || $(this).attr('alt') == '') {
            // $('.out').html(`атрибут alt: ` + $(this).attr("alt"));
            $('.out2').html(`Пустой атрибут alt`)
            $(this).css('box-shadow', '0 0 3px red');
            $('.out').html(`Адрес ссылки: ` + $(this).attr("src"))
        } else {
            $('.out').html(`Aтрибут alt: ` + $(this).attr("alt"))
            $('.out2').html(` `)
        }
    });


});

$('img').on('mouseover', function() {
    if ($(this).attr("alt") == undefined || $(this).attr("alt") == "") {
        $('.out2').html(`Пустой атрибут alt`);
    } else {
        $('.out').html(`alt:` + $(this).attr("alt"));
        $('.out2').html("");
    }
    if ($(this).attr("alt") == undefined) {
        $(this).css('box-shadow', ' 5 5 5px red');
        $('.out2').html(`Пустой атрибут alt`);
    }

    $('img').on('mouseleave', removeAll);
});

function removeAll() {
    $('.out').html("");
    $('.out2').html("");
    $(this).css('box-shadow', '0 0 0');
}
