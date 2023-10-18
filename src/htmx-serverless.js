import htmx from "htmx.org";
import htmxServerless from "htmx-serverless";

htmxServerless.init(htmx);

const duck = {}
let duckCount = 0;
duck.getDuck = function(text, params, xhr){
    let status = 'bad, get more.';
    

    if ( duckCount > 0 && duckCount < 10 ) {
        status = 'okay.'
    } else if ( duckCount < 20 ) {
        status = 'getting better.'
    } else if ( duckCount < 50 ) {
        status = 'getting better and better.'
    } else if ( duckCount < 100 ) {
        status = 'even better!'
    } else if ( duckCount < 200 ) {
        status = 'marvelous!'
    } else if ( duckCount < 500 ) {
        status = 'duckolitios!'
    } else if ( duckCount < 500 ) {
        status = 'what???'
    }

    return `You have ${duckCount++} 🦆, it is ${status}`;
}

export default duck;