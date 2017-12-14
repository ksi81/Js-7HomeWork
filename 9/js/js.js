// Задание 9. Создайте скрипт для проверки наличия на странице элементов h1-h6 выводя при этом их количество. Если какого-либо заголовка нет — вывести предупреждение.
$(document).ready(function() {
    $('button').on('click', function() {
        var tegYes = '';
        var tegNo = '';
        if ($('h1').length) {
            tegYes += 'Тегов &#60;h1&#62;: ' + $('h1').length + '</br>';
        } else {
            tegNo += '&#60;h1&#62;: 0 ';
        }
        if ($('h2').length) {
            tegYes += 'Тегов &#60;h2&#62;: ' + $('h2').length + '</br>';
        } else {
            tegNo += 'Тегов &#60;h2&#62;: 0 ' + '</br>';
        }
        if ($('h3').length) {
            tegYes += 'Тегов &#60;h3&#62;: ' + $('h3').length + '</br>';
        } else {
            tegNo += 'Тегов &#60;h3&#62;: 0 ' + '</br>';
        }
        if ($('h4').length) {
            tegYes += 'Тегов &#60;h4&#62;: ' + $('h4').length + '</br>';
        } else {
            tegNo += 'Тегов &#60;h4&#62;: 0 ' + '</br>';
        }
        if ($('h5').length) {
            tegYes += 'Тегов &#60;h5&#62;: ' + $('h5').length + '</br>';
        } else {
            tegNo += 'Тегов &#60;h5&#62;: 0 ' + '</br>';
        }
        if ($('h6').length) {
            tegYes += 'Тегов &#60;h6&#62;: ' + $('h6').length + '</br>';
        } else {
            tegNo += 'Тегов &#60;h6&#62;: 0.' + '</br>';
        }
        $('.out').html(tegYes);
        $('.out2').html(tegNo);
    });

});
// Задание 10.. Модифицируйте скрипт 9 таким образом, чтобы он определял наличие meta title, meta description, meta keywords, рассчитывая длину первых двух. Если они отсутсвуют — выводится предупреждение.

var metaInfo = '';

if ($('meta[name=keywords]').length) {
    metaInfo += `Есть  тег "keywords" meta-tag!<br>`;
} else {
    metaInfo += `Нет keywords! <br>`;
}
if ($('meta[name=title]').length > 1) {
    metaInfo += `Длина тега  title- ` + ('meta[name=content]').length + `.<br>`;
} else {
    metaInfo += `Нет тега "title"!<br>`;
}
if ($('meta[name=description]').length) {
    metaInfo += `Длина тега description"  - ` + ('meta[name=description]').length `.<br>`;
} else {
    metaInfo += `Нет тега  "description"!<br>`;
}

$('.out3').html(metaInfo);
