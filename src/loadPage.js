export function loadPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const newText = document.createElement('p');
    newText.textContent = "Step into The Bear, where culinary brilliance meets gritty determination. Chef Carmen Berzatto brings his high-end dining expertise to the heart of Chicago, transforming his family’s sandwich shop into a haven of innovation and flavor. Can he turn chaos into culinary perfection? Come taste the journey.";

    content.appendChild(newText);
}