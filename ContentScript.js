window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
  document.body.innerHTML += `
    <div id="append-popup">
        <iframe 
          src="${chrome.runtime.getURL("/popup.html")}" 
          name='{ "context": "content" }'> 
        </iframe>
    </div>
  `;
}


