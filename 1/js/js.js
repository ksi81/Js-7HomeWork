$(document).ready(function() {
    // Задание 1. Добавьте на страницу элемент input[type=»text»]. Справа от input расположите кнопку «+». При нажатии кнопки «+» добавьте еще один элемент input ниже. Возле появившегося элемента создайте кнопку «-» при нажатии на которую данный input будет удаляться. Внизу формы расположите кнопку «собрать», по нажатию которой текст из элементов input будет выведен в расположенный на странице textarea.
    // Внимание: Количество input на странице не больше . Удалять можно все элементы input кроме последнего.
    $(".pluss").click(function() {
        $("<div><p class='new'><input type='text' id='inp'><span class='red'></span><button class='minus'> - </button></p></div>").appendTo(".menu");
        $('.minus').on('click', function() {
            $(this)[0].parentElement.remove();
        });
    });

    $('#summ').on('click', function() {
        // console.log('test');
        var inpAll = document.querySelectorAll('input[id="inp"]');
        var out = '';
        var ruls = $('input[type="radio"]:checked').val();
        // console.log(inpAll);
        function_check(inpAll);
        if (ruls == 'even') {
            for (var i = 0; i < inpAll.length; i++) {
                if (i % 2 != 0) {
                    out += inpAll[i].value + ' ';
                }
                $('.out').html(out);
                // console.log(out);
            }
        } else if (ruls == 'notEven') {
            for (var i = 0; i < inpAll.length; i++) {
                if (i % 2 == 0) {
                    out += inpAll[i].value + ' ';
                }
                $('.out').html(out);
            }
        } else if (ruls == 'all') {
            for (var i = 0; i < inpAll.length; i++) {
                out += inpAll[i].value + ' ';
            }
            $('.out').html(out);
        }
    });
});
// Задание 3. Модифицируйте задание 1 добавив проверку на пустые input. Пустой input подсвечивается красным цветом, а рядом выводится надпись «Заполните поле!».


function function_check(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].value == '') {
            // alert('Пустое поле')
            a[i].nextElementSibling.innerHTML = 'Пустое поле!';
        } else if (a[i].value != '') {
            a[i].nextElementSibling.innerHTML = '';

        }
    }

}
