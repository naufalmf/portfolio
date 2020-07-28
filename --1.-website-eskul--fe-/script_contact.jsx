const input_1 = ($('#input-1001').width());
const input_2 = ($('#input-501').width());
const _width___ = {
    input__1: `transform : translateX(-${input_1}px)`,
    input__2: `transform : translateX(-${input_2}px)`
}
document.getElementById('span-1001').setAttribute('style', `${_width___.input__1}`);
document.getElementById('span-501').setAttribute('style', `${_width___.input__2}`);
document.getElementById('span-1002').setAttribute('style', `${_width___.input__1}`);
document.getElementById('span-502').setAttribute('style', `${_width___.input__2}`);