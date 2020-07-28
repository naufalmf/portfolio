const _spJur_ = document.querySelector('main form .inputBox select');
_spJur_.addEventListener('change', (event) => {
    $('#spanJur').addClass('spanUp');
    $(_spJur_).addClass('bor-bot');
});