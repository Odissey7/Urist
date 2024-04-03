


document.querySelector('.burger').onclick = function () {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.mobel_nav_list').classList.toggle('mobel_nav_list-active');
    document.querySelector('.wrap_abs_tel').classList.toggle('wrap_abs_tel-active');
}

document.querySelector('#lphone2').onclick = function () {
    document.querySelector('.input_text2').classList.add('input_text_active');
}


const btn_more = document.querySelector('.btn_more');
const cards = Array.from(document.querySelectorAll('.work_link'));




window.addEventListener('resize', event => {
    if (event.target.window.innerWidth > 989) response1();
    if (event.target.window.innerWidth <= 989 && event.target.window.innerWidth > 659) response2();
    if (event.target.window.innerWidth <= 659) response3();
})

function openCatalog() {
    btn_more.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hidden'));
        btn_more.classList.add('hidden');
    })
}

function response1() {
    if (window.innerWidth > 989) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 8) {
                item.classList.remove('hidden')
            } else if (index > 8) {
                btn_more.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response1()


function response2() {
    if (window.innerWidth <= 989 && window.innerWidth > 659) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 5) {
                item.classList.remove('hidden')
            } else if (index > 5) {
                btn_more.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response2()


function response3() {
    if (window.innerWidth <= 659) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 2) {
                item.classList.remove('hidden')
            } else if (index > 2) {
                btn_more.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response3()





$(document).on('click', '#sf2, #consultSubmit, #asideSubmit', function(e) {
    e.preventDefault();
    let phone = $(this).closest('form').find('.mask').val();
    let name = $(this).closest('form').find('input[name="name"]').val();
    let header = $(this).closest('form').data('title')
    let text = $(this).closest('form').find('.ltext').val()
    if ((phone.search('_') == -1) && phone != "") {
        $.post("/templates/1/ajaxmail_2.php", {
            id: 'main',
            name: name,
            header: header,
            phone: phone,
            text: text,
            dat: new Date()
        }, onAjaxSuccess);
        function onAjaxSuccess(data) {
            $('.succ').html(data);
            $('.lname').val('')
            $('.ltext').val('')
            $('.mask').val('');
            $.fancybox.open('<div class="message"><h2>Заявка отправлена</h2><p>' + data + '</p></div>');
        }
    } else {
        $(this).parents('form').find('.mask').focus();
    }
});


jQuery(document).ready(function () {

    $(".phone").mask("+7 (999) 999-99-99"); 
    

    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    form.find('.status_good').html('Форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			    form.find('.status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});


document.querySelector('#lname2').onclick = function () {
    document.querySelector('.input_text').classList.add('input_text_active');
}