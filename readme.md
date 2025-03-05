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