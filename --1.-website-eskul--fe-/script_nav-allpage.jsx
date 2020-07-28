const _width = ($('nav').width());
const _inputMore_ = document.querySelector('header nav #list-nav li #input-more');
const _listMore_ = document.querySelector('header nav #list-nav li #list-more');
const _menuToggle_ = document.querySelector('header nav #toggle #input-toggle');
const _slideList_ = document.querySelector('header nav #list-nav');
const _itemList = document.querySelector('header nav #list-nav #item-list');
const _span1_ = document.querySelector('header nav #toggle .hum-menu .span-1');
const _span2_ = document.querySelector('header nav #toggle .hum-menu .span-2');
const _span3_ = document.querySelector('header nav #toggle .hum-menu .span-3');
const _hum_ = document.querySelector('header nav #toggle #hum');
_inputMore_.addEventListener('click', function() {
    _listMore_.classList.toggle('listOn');
});
if (_width < 577) {
    _inputMore_.addEventListener('click', (event) => {
        _itemList.classList.toggle('list-onSlide');
    })
};
_menuToggle_.addEventListener('click', function() {
    _slideList_.classList.toggle('slideUl');
    _span1_.classList.toggle('span1');
    _span2_.classList.toggle('span2');
    _span3_.classList.toggle('span3');
    _hum_.classList.toggle('right6');
});
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('#list-nav').removeClass('slideUl')
        $('#hum').removeClass('right6')
        $('.span-1').removeClass('span1');
        $('.span-2').removeClass('span2');
        $('.span-3').removeClass('span3');
        $('#list-more').removeClass('listOn');
        $('#item-list').removeClass('list-onSlide');
    }
});