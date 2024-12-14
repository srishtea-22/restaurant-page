export function contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const newText = document.createElement('p');
    newText.innerHTML = `Phone: (555) 987-6543 <br> Email: contact@bearrestaurant.com <br> Address: 5678 Forest Drive, Redwood City, CA 94061`;
    content.appendChild(newText);
}