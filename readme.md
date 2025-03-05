**Step 01**: 
Check if service worker is supported by browser or not.
```javascript
if(navigator.serviceWorker){}
```
**Step 02**: 
If service worker is present, register it with the file where service worker code is present
```javascript
if(navigator.serviceWorker){
    navigator.serviceWorker
    .register("./sw.js")
    .then(resp => console.log("Service worker registered successfully"))
    .catch(err => console.error("Error registering service worker", err))
}
```

_**Note:** Check the application tab of our browser and go to service workers section and check if service workers are registered._

_**Working:** When our HTML page is loaded, the script.js file will get executed and the script.js file will register the service worker._

**Source of information:**  _namaste frontend system design/offline video_

# PWA ~ Progressive Web Apps
PWAs are a mix of both worlds. i.e. it combines the goodness of mobile and web applications. PWA acts as a native mobile app which is installable but it's a web application.

To make PWA we need 

1. Service workers for offline availability(not mandatory)
2. manifest.json file(generate using [link]([text](https://progressier.com/pwa-manifest-generator)))
3. Link the manifest.json file to the index.html and you are good to go.