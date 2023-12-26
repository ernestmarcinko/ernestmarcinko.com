import htmx from "htmx.org";
import htmxServerless from "htmx-serverless";

htmxServerless.init(htmx);

function garbage() {
    return `<p class='idiot'>You are an idiot.</p>`;
}

export default garbage;