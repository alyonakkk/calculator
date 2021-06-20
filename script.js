$(function () {
    $('#datepicker').datepicker({
        dateFormat: 'dd/mm/yy'
    });

    $('#slider-1').slider({
        animate: 'fast',
        range: 'min',
        min: 1000,
        max: 3000000,
        slide: function (event, ui) {
            $('#summn').val(ui.value);
        }
    });
    $('#summn').val($('#slider-1').slider('value'));

    $('#slider-2').slider({
        animate: 'fast',
        range: 'min',
        min: 1000,
        max: 3000000,
        slide: function (event, ui) {
            $('#summadd').val(ui.value);
        }
    });
    $('#summadd').val($('#slider-2').slider('value'));

    $('.submit').on('click', function () {
        let summn = parseInt($('#summn').val());
        let summadd = parseInt($('#summadd').val());
        let years = $('#years').val();
        let radio = $('input[name = "radio"]:checked').val();
        let daysy = 365;
        let percent = 10;
        let result = 0;
        
        let date = $('#datepicker').datepicker('getDate');
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let daysn = lastDay.getDate();


        if (radio == 'yes') {
            let add = summadd + (summadd * (percent / 100));
            result = summn + add + ((summn) * (percent / 100) * (daysy * years) / 365);
            $('#result').text(result);
        } else {
            result = summn + (summn * (percent / 100) * (daysy * years) / 365);
            $('#result').text(result);
        }
    });
});