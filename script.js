//check if service worker is supported by browser or not
if(navigator.serviceWorker){
    
    //register a service worker
    navigator.serviceWorker.register('./sw.js')
    .then((sw) => console.log('Service worker is registered'))
    .catch((err) => console.log("Error in registering service worker", err));
}