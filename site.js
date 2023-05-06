/**
 * I like to wait for the DOMContentLoaded to do my DOM related stuff, but I'm almost
 * certain this would work without that too, as it's enqueued as last in the footer.
 */
if (document.readyState === "complete" || document.readyState === "loaded"  || document.readyState === "interactive") {
    // document is already ready to go
    app();
} else {
    $(document).on('DOMContentLoaded', app);
}

function app() {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    
    function highlightProject(scrollPos) {
        if ( typeof screen.orientation !== 'undefined' && window.innerWidth <= 480 && scrollPos > 0 ) {
            document.querySelectorAll('.project').forEach((el)=>{
                let top = el.getBoundingClientRect().top;
                if (  top < 200 && top > -200 ) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
        }
    }

    function parallaxBg(scrollPos) {
        let positionY = parseInt(40 + scrollPos / 4);
        document.querySelector('.main').style.backgroundPositionY = positionY + "px";
    }
    
    /**
     * Taken from: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
     * A great way of making sure that the scroll event runs optimally and does not
     * conflict with the page animation. It's probably unneccessary too, as we do nothing too
     * fancy, but it still looks nice.
     */
    document.addEventListener("scroll", () => {
        lastKnownScrollPosition = window.scrollY;
    
        if ( !ticking ) {
            window.requestAnimationFrame(() => {
                highlightProject(lastKnownScrollPosition);
                parallaxBg(lastKnownScrollPosition);
                ticking = false;
            });
        
            ticking = true;
        }
    }, {passive: true});

    highlightProject(window.scrollY);
    parallaxBg(window.scrollY);
}