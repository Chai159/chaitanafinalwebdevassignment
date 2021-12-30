document.querySelector('#submit').onclick = function () {
    const value = document.querySelector('#comment').value//Selects the input , with the values inside
    const list = document.querySelector('#list')//Selects the list
    const li = document.createElement('li') // This creates a list <li></li>
    li.textContent = value// returns the content in the input
    list.appendChild(li)}// adds there items as list

 
