export function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const newText = document.createElement('p');
    const list = document.createElement('ul');

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.textContent = "Braised Short Ribs – Slow-cooked to perfection, served with mashed potatoes and roasted vegetables"
    li2.textContent = "Seared Scallops – Accompanied by a creamy cauliflower puree and a drizzle of truffle oil";
    li3.textContent = "Wild Mushroom Risotto – Arborio rice with a medley of wild mushrooms, finished with Parmesan";

    list.append(li1, li2, li3);
    newText.appendChild(list);
    content.appendChild(newText);
}