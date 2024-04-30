window.addEventListener('load', function() {
    positionFooter();
});

window.addEventListener('resize', function() {
    positionFooter();
});

function positionFooter() {
    const footer = document.querySelector('footer');


    //!For esuring that it has the same starting location as the header.
    const headerLeftOffset = document.querySelector('header').getBoundingClientRect().left;

    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    if (windowHeight > bodyHeight) {
        const footerOffset = windowHeight - bodyHeight;
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = headerLeftOffset + 'px';
        footer.style.width = '100%';
        footer.style.marginTop = footerOffset + 'px';
    } else {
        footer.style.position = 'static';
        footer.style.marginTop = '0';
    }
}
