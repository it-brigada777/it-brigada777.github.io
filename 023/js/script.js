$(document).ready(function(){$('.gallery').slick({infinite:!0,dots:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,}}]});$(function(){$("[data-fancybox]").fancybox()});$(function(){$('ul.tabs').delegate('li:not(.current)','click',function(){$(this).addClass('current').siblings().removeClass('current').parents('div.servis-tab').find('div.box').hide().eq($(this).index()).fadeIn(150)})})
$('.dot-pick').click(function(){if($('.dot-pick').hasClass('active')){$('.dot-pick').removeClass('active');$('.form-tel').removeClass('active');$('.form-mail').addClass('active');$('.input-mail').css('display','block');$('.input-tel').css('display','none')}else{$('.dot-pick').addClass('active');$('.form-tel').addClass('active');$('.form-mail').removeClass('active');$('.input-mail').css('display','none');$('.input-tel').css('display','block')}});$("#menu").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500)});$('.menu-icon').click(function(){if($('.top-menu ul').css('display')=='block'){$('.top-menu ul').slideToggle("slow");$('.menu-icon').removeClass('menu-icon-open')}else{$('.top-menu ul').slideToggle("slow");$('.menu-icon').addClass('menu-icon-open')}});$('.piker-yes').click(function(){$('.sity-piker').css('display','none')});$('.sity-select li').click(function(){document.title='Выездной ремонт компьютеров '+$(this).text();$('.hc-left-title').text('Выездной ремонт компьютеров '+$(this).text());$('.top-slogan span').text('Выездной компьютерный сервис '+$(this).text());$('.sity-top').text($(this).text());$('.sity-piker').css('display','none');$('.sity-id').text($(this).data("id"))})});