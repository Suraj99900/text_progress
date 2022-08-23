$(document).ready(function(){
    $('.count_text').text(0+"% Progress");
    $('#textarea').attr('maxlength','101');

    $('#textarea').keyup(function() {

        var len = $(this).val().length;
        // $('.error__smg').hide();
        if(len <= 100){
            $('.error__smg').css('visibility','hidden');
            $('#count_text').text($(this).val().length);
            $(this).css('border','none')
            $('#count_text').css('color','var(--text-color-200)');

            $('.progress').animate(
                {width:len+"%"},"fast"
            );
            $('.count_text').text(len+"% Progress");

        }
        else{
            $(this).css('border','1px solid red');
            $('#count_text').css('color','red');
            // $('.error__smg').show();
            $('.error__smg').css('visibility','visible');

           
        }

    })

    $('#textarea').focusin(function(){
        $('.content').css('backdrop-filter','blur(7px)');
    })

    $('#textarea').focusout(function(){
        $('.content').css('backdrop-filter','blur(0px)');
    })

})
