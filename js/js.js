/**
 * Created by Jester on 13.07.2017.
 */
$(function(){
    console.log("test");
    var bag = document.getElementById('bag');
    var trunk = document.getElementById('trunk')

    var oldY = bag.getBoundingClientRect().top;
    var oldX = bag.getBoundingClientRect().left;

    bag.onmousedown = function(e) { // 1. отследить нажатие

        // подготовить к перемещению
        // запомнить кординати
        bag.oldX = bag.left;
        bag.oldY = bag.top;

        // 2. разместить на том же месте, но в абсолютных координатах
        bag.style.position = 'absolute';
        moveAt(e);

        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.appendChild(bag);

        bag.style.zIndex = 1000; // показывать мяч над другими элементами

        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(e) {
            bag.style.left = e.pageX - bag.offsetWidth / 2 + 'px';
            bag.style.top = e.pageY - bag.offsetHeight / 2 + 'px';
        }

        // 3, перемещать по экрану
        document.onmousemove = function(e) {
            moveAt(e);
        }

        // 4. отследить окончание переноса
        bag.onmouseup = function() {

            bag.style.left = oldX + 'px';
            bag.style.top = oldY + 'px';
            document.onmousemove = null;
            bag.onmouseup = null;
        }
    }

});