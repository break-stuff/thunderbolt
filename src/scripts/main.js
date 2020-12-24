const $bottomNav = document.querySelector('.bottom-nav');

document.querySelector('main').addEventListener('wheel', function(e) {
    let delta = e.wheelDelta ? e.wheelDelta : -1 * e.deltaY;
    
    if (delta < -5){
        $bottomNav.classList.add('hide-nav')
    }else if (delta > 5){
        $bottomNav.classList.remove('hide-nav')
    }
});
