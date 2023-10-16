import htmx from "htmx.org";
import htmxServerless from "htmx-serverless";

htmxServerless.init(htmx);

htmxServerless.handlers.set('/clicked', 
    `<button hx-get="/clicked2" hx-swap="outerHTML" hx-ext="serverless">
        Hey!
    </button>`
);
htmxServerless.handlers.set('/clicked2', 
    `<button hx-get="/clicked3" hx-swap="outerHTML" hx-ext="serverless">
        Okay then!
    </button>`
);
htmxServerless.handlers.set('/clicked3', 
    `<button hx-get="/clicked4" hx-swap="outerHTML" hx-ext="serverless">
        Stop it now.
    </button>`
);
htmxServerless.handlers.set('/clicked4', 
    `<button hx-get="/clicked5" hx-swap="outerHTML" hx-ext="serverless">
        Just stop pls..
    </button>`
);
htmxServerless.handlers.set('/clicked5', 
    `<button hx-get="/clicked6" hx-swap="outerHTML" hx-ext="serverless">
        Sus.
    </button>`
);
htmxServerless.handlers.set('/clicked6', 
    `<button hx-get="/clicked" hx-swap="outerHTML" hx-ext="serverless">
        I'm done.
    </button>`
);