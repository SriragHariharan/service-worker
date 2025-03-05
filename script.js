//check if service worker is supported by browser or not
if(navigator.serviceWorker){
    
    //register a service worker
    navigator.serviceWorker.register('./sw.js', {scope: './'}) //scope helps to cache files only from within a specific directory(folder) eg: /app, /login
    .then((sw) => console.log('Service worker is registered'))
    .catch((err) => console.log("Error in registering service worker", err));
}

//install app button
// Install prompt functionality
let deferredPrompt;
const installButton = document.createElement('button');
installButton.textContent = "Install App";
installButton.style.position = 'fixed';
installButton.style.bottom = '20px';
installButton.style.right = '20px';
installButton.style.padding = '10px 20px';
installButton.style.backgroundColor = '#2EC6FE';
installButton.style.color = 'white';
installButton.style.border = 'none';
installButton.style.fontSize = '16px';
installButton.style.borderRadius = '5px';
installButton.style.cursor = 'pointer';
installButton.style.display = 'none'; // Hidden by default
document.body.appendChild(installButton);

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();  // Prevent default browser prompt
    deferredPrompt = e;  // Store the event
    installButton.style.display = 'block';  // Show the install button

    installButton.addEventListener('click', () => {
        // Show the install prompt
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((result) => {
            if (result.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;  // Reset deferredPrompt
            installButton.style.display = 'none';  // Hide the install button
        });
    });
});