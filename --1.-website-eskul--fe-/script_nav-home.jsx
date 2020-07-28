const _height = ($('.jumbotron').height());
const _inputToggle = document.querySelector('header nav #toggle #input-toggle');
const _hum_ = document.querySelector('header nav #toggle .hum-menu');
const _toggle_ = document.querySelector('header nav #toggle');
const _span1_ = document.querySelector('header nav #toggle .hum-menu .span-1');
const _span2_ = document.querySelector('header nav #toggle .hum-menu .span-2');
const _span3_ = document.querySelector('header nav #toggle .hum-menu .span-3');
const _listNav = document.querySelector('header nav ul');
const _inputMore = document.querySelector('header nav ul li #input-more');
const _listMore = document.querySelector('header nav ul li #list-more');
const _itemList = document.querySelector('header nav ul #item-list');
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > _height) {
            $('#navbar').removeClass('noScroll');
            $('#navbar').addClass('onScroll');
            $('#navbar').addClass('onScroll');
            $('#navbar').removeClass('noScroll');
            $('#logo').removeClass('dis-none');
            $('#list-nav').addClass('list-onScroll-hide');
            $('#toggle').addClass('menu-toggle');
            $('#toggle').removeClass('dis-none');
            $('#a-fix').removeClass('dis-none');
            $('#list-more').removeClass('list-more-visible');
            $('#list-more').addClass('list-more-visible2');
            $('#input-more').addClass('input-more-onScroll');
            $('#input-more').removeClass('input-more');

        } else {
            $('#navbar').removeClass('onScroll');
            $('#navbar').addClass('noScroll');
            $('#navbar').removeClass('onScroll');
            $('#navbar').addClass('noScroll');
            $('#logo').addClass('dis-none');
            $('#list-nav').removeClass('list-onScroll-hide');
            $('#list-nav').removeClass('list-onScroll-visible');
            $('#toggle').removeClass('menu-toggle');
            $('#toggle').addClass('dis-none');
            $('#a-fix').addClass('dis-none');
            $('.hum-menu').removeClass('transform-hum');
            $('#list-more').addClass('list-more-visible');
            $('#list-more').removeClass('list-more-visible2');
            $('#input-more').addClass('input-more');
            $('#input-more').removeClass('input-more-onScroll');
        }
    });
});
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('#list-nav').removeClass('list-onScroll-visible');
        $('#hum').removeClass('transform-hum')
        $('.span-1').removeClass('span1');
        $('.span-2').removeClass('span2');
        $('.span-3').removeClass('span3');
        $('#list-more').removeClass('list-on');
        $('#item-list').removeClass('marg-120');
    }
});
_inputToggle.addEventListener('click', function() {
    _hum_.classList.toggle('transform-hum');
    _span1_.classList.toggle('span1');
    _span2_.classList.toggle('span2');
    _span3_.classList.toggle('span3');
    _listNav.classList.toggle('list-onScroll-visible');
    $('#list-more').removeClass('list-on');
    $('#item-list').removeClass('marg-120');
});


_inputMore.addEventListener('click', function() {
    _listMore.classList.toggle('list-on');
    if ($(window).scrollTop() > _height) {
        _itemList.classList.toggle('marg-120');
    }
});