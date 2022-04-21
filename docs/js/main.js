$(document).ready(function(){

	//slider
	if(window.location.href.indexOf('index') > -1){
	  $('.galeria').bxSlider({
	    mode: 'fade',
	    slideWidth: 1200,
	    responsive: true
	  });
	}

	//post
	if(window.location.href.indexOf('index') > -1){
		var posts = [
		{
			title: 'Prueba de titulo 1',
			date: moment().format('MMM Do YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, ligula aliquam egestas feugiat, nunc velit sagittis purus, in tempor urna elit ut risus. Integer tempor ipsum nec orci luctus ultrices. Duis laoreet eros sit amet lectus sagittis dapibus.'
		},
		{
			title: 'Prueba de titulo 2',
			date: moment().format('MMM Do YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, ligula aliquam egestas feugiat, nunc velit sagittis purus, in tempor urna elit ut risus. Integer tempor ipsum nec orci luctus ultrices. Duis laoreet eros sit amet lectus sagittis dapibus.'
		},
		{
			title: 'Prueba de titulo 3',
			date: moment().format('MMM Do YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, ligula aliquam egestas feugiat, nunc velit sagittis purus, in tempor urna elit ut risus. Integer tempor ipsum nec orci luctus ultrices. Duis laoreet eros sit amet lectus sagittis dapibus.'
		},
		{
			title: 'Prueba de titulo 4',
			date: moment().format('MMM Do YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, ligula aliquam egestas feugiat, nunc velit sagittis purus, in tempor urna elit ut risus. Integer tempor ipsum nec orci luctus ultrices. Duis laoreet eros sit amet lectus sagittis dapibus.'
		},
		{
			title: 'Prueba de titulo 5',
			date: moment().format('MMM Do YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, ligula aliquam egestas feugiat, nunc velit sagittis purus, in tempor urna elit ut risus. Integer tempor ipsum nec orci luctus ultrices. Duis laoreet eros sit amet lectus sagittis dapibus.'
		},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>${item.content}</p>
						<a href="#" class="button-more">Leer más</a>
					</article>
			`;

			$("#posts").append(post);
		});
	}

	//selector de tema
	var theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:0
		},500);

		return false;
	});

		//login falso
		$("#login form").submit(function(){
			var form_name = $("#form_name").val();

			localStorage.setItem("form_name", form_name);
		});

		var form_name = localStorage.getItem("form_name");

		if(form_name != null && form_name != "undefined"){
			var about_parrafo = $("#about p");

			about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
			about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
			
			$("#login").hide();

			$("#logout").click(function(){
				localStorage.clear();
				location.reload();
			});

		}

		//acordeon
		if(window.location.href.indexOf('about') > -1){
			$("#acordeon").accordion();
		}

		//reloj
		if(window.location.href.indexOf('reloj') > -1){
			
			setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
			}, 1000);
			
		}

		//validacion 
		if(window.location.href.indexOf('contact') > -1){
			
				$("form input[name='date']").datepicker({
					dateFormat: 'dd-mm-yy'
				});

				$.validate({
					errorMessagePosition: 'top',
					scrollToTopOnError: true
				});
			
		}
});