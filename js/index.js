$('body').on('click', '.set button', fnPositionSet);

function fnPositionSet(event) {
    var _this = $(event.target);

    if (_this.hasClass('reduce')) fnReduce(_this.closest('.set').data());
    if (_this.hasClass('add')) fnAdd(_this.closest('.set').data());
}

function fnReduce(data) {
    var box = $('.parabola-test.' + data.type),
        boxPos = box.position(),
        boxBound = box[0].getBoundingClientRect(),
        parentPos = $('.model')[0].getBoundingClientRect();
    var _multiple;
    if (data.type == 'begin') _multiple = $('.begin-multiple').val();
    if (data.type == 'end') _multiple = $('.end-multiple').val();

    if (_multiple <= 0) {
        alert('倍数的值必须大于等于0');
        return false;
    }
    if (_multiple == '') {
        alert('倍数的值必须大于等于0');
        return false;
    }

    if (data.axis == 'x') {
        var _left = boxPos.left - (parentPos.width / 100) * _multiple;
        if (_left <= 0) _left = 0;
        box.css('left', (_left / parentPos.width) * 100 + '%');
    }
    if (data.axis == 'y') {
        var _top = boxPos.top - (parentPos.height / 100) * _multiple;
        if (_top <= 0) _top = 0;
        box.css('top', (_top / parentPos.height) * 100 + '%');
    }
}

function fnAdd(data) {
    var box = $('.parabola-test.' + data.type),
        boxPos = box.position(),
        boxBound = box[0].getBoundingClientRect(),
        parentPos = $('.model')[0].getBoundingClientRect();
    var _multiple;
    if (data.type == 'begin') _multiple = $('.begin-multiple').val();
    if (data.type == 'end') _multiple = $('.end-multiple').val();

    console.log(_multiple);
    if (_multiple <= 0) {
        alert('倍数的值必须大于等于0');
        return false;
    }
    if (_multiple == '') {
        alert('倍数的值必须大于等于0');
        return false;
    }
    if (data.axis == 'x') {
        var _left = boxPos.left + (parentPos.width / 100) * _multiple;
        if (_left >= (parentPos.width - boxBound.width)) _left = parentPos.width - boxBound.width;
        box.css('left', (_left / parentPos.width) * 100 + '%');
    }
    if (data.axis == 'y') {
        var _top = boxPos.top + (parentPos.height / 100) * _multiple;
        if (_top >= (parentPos.height - boxBound.height)) _top = parentPos.height - boxBound.height;
        box.css('top', (_top / parentPos.height) * 100 + '%');
    }
}
$('body').on('click', '.parabola-test.begin', function() {
    addCar({
        begin: $('.parabola-test.begin'),
        end: $('.parabola-test.end'),
        img: './img/logo.jpg',
        callback: function() {
            console.log('动画完成');
        }
    })
});
