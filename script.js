const form = document.querySelector('form');
const replaceImages = () =>{

    const images = document.querySelectorAll('img');
    images.forEach((image) => image.src = 'l1nk.dev/KW43c');
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: replaceImages,    
    });

});