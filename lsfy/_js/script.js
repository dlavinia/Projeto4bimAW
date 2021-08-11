
$(document).ready(function(){
  /* affix the navbar after scroll below header */
 $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
});
var target_date = new Date("february 21, 2020").getTime();
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;
}, 1000);

// contagem para o ultimo dia de aula
var target_date2 = new Date("december 11, 2020").getTime();
var dias2, horas2, minutos2, segundos2;
var regressiva2 = document.getElementById("regressiva2");

setInterval(function () {

    var current_date2 = new Date().getTime();
    var segundos_f2 = (target_date2 - current_date2) / 1000;

dias2 = parseInt(segundos_f2 / 86400);
    segundos_f2 = segundos_f2 % 86400;
    
    horas2 = parseInt(segundos_f2 / 3600);
    segundos_f2 = segundos_f2 % 3600;
    
    minutos2 = parseInt(segundos_f2 / 60);
    segundos2 = parseInt(segundos_f2 % 60);

	document.getElementById('dia2').innerHTML = dias2;
	document.getElementById('hora2').innerHTML = horas2;
	document.getElementById('minuto2').innerHTML = minutos2;
	document.getElementById('segundo2').innerHTML = segundos2;
	}, 1000);

// playlists: