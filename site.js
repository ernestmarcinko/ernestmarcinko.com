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
        if ( typeof screen.orientation !== 'undefined' && window.innerWidth <= 720 && scrollPos > 0 ) {
            let items = document.querySelectorAll('.project'),
                smallestDistance = 99999;
                closest = -1;
            items.forEach((el, i)=>{
                el.classList.remove('active')
                let distance = Math.abs(el.getBoundingClientRect().top - window.innerHeight / 2);
                if ( distance < smallestDistance ) {
                    smallestDistance = distance;
                    closest = i;
                }
            });
            if ( smallestDistance < window.innerHeight / 3 ) {
                items[closest].classList.add('active');
            }
        }
    }

    function parallaxBg(scrollPos) {
        let positionY = parseInt(40 + scrollPos / 4);
        document.querySelector('main').style.backgroundPositionY = positionY + "px";
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