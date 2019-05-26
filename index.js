let items = [
    {name : "Item 01", size : "Medium", price : 19.99},
    {name : "Item 02", size : "Small", price : 29.99},
    {name : "Item 03", size : "Large", price : 19.99},
    {name : "Item 04", size : "Medium", price : 39.99},
    {name : "Item 05", size : "Small", price : 49.99},
    {name : "Item 06", size : "Medium", price : 9.99},
    {name : "Item 07", size : "Small", price : 19.99},
    {name : "Item 08", size : "Medium", price : 39.99},
    {name : "Item 09", size : "Large", price : 79.99},
    {name : "Item 10", size : "Small", price : 89.99},
    {name : "Item 11", size : "Medium", price : 99.99},
    {name : "Item 12", size : "Large", price : 19.99},
    {name : "Item 13", size : "Medium", price : 29.99},
    {name : "Item 14", size : "Small", price : 19.99},
    {name : "Item 15", size : "Medium", price : 49.99},
    {name : "Item 16", size : "Small", price : 39.99},
    {name : "Item 17", size : "Large", price : 19.99},
    {name : "Item 18", size : "Medium", price : 29.99},
    {name : "Item 19", size : "Small", price : 79.99},
    {name : "Item 20", size : "Medium", price : 19.99},
    {name : "Item 21", size : "Medium", price : 19.99},
    {name : "Item 22", size : "Small", price : 29.99},
    {name : "Item 23", size : "Large", price : 19.99},
    {name : "Item 24", size : "Medium", price : 39.99},
    {name : "Item 25", size : "Small", price : 49.99},
    {name : "Item 26", size : "Medium", price : 9.99},
    {name : "Item 27", size : "Small", price : 19.99},
    {name : "Item 28", size : "Medium", price : 39.99},
    {name : "Item 29", size : "Large", price : 79.99},
    {name : "Item 30", size : "Medium", price : 19.99},
    {name : "Item 31", size : "Medium", price : 19.99},
    {name : "Item 32", size : "Small", price : 29.99},
    {name : "Item 33", size : "Large", price : 19.99},
    {name : "Item 34", size : "Medium", price : 39.99},
    {name : "Item 35", size : "Small", price : 49.99},
    {name : "Item 36", size : "Medium", price : 9.99},
    {name : "Item 37", size : "Small", price : 19.99},
    {name : "Item 38", size : "Medium", price : 39.99},
    {name : "Item 39", size : "Large", price : 79.99}
]

let numberToDisplay = 5;

let itemList = (start, numberToDisplay) => {
    let itemDiv = document.getElementById('items') 
    itemDiv.innerHTML = ""
    let end = start + numberToDisplay
    let ul = document.createElement('ul')

    items.forEach((item, index) => {
        if(index >= start && index <= end){
            let li = document.createElement('li')
            li.innerText = `Index: ${index} - Item Name: ${item.name} Item Size: ${item.size} Item Price: ${item.price}`
            ul.appendChild(li)
        }
    });
    document.getElementById('items').appendChild(ul);
}

let pagination = () => {
    let pagination = document.getElementById('pagination')
    let pages = items.length / numberToDisplay
    pages = Math.ceil(pages)
    let ul = document.createElement('ul')

    let first = document.createElement('li')
    first.innerText = "First"
    first.addEventListener('click', function(){
        itemList(0, numberToDisplay)
    })
    
    ul.appendChild(first)

    for(let i = 1; i <= pages; i++ ){
        let li = document.createElement('li')
        li.innerText = i
        li.setAttribute('id', (i - 1))
        li.addEventListener('click', function(event){
            let itemToStart = event.target.id * numberToDisplay 
            itemList(itemToStart, numberToDisplay)
        })
        ul.appendChild(li)
    }

    let last = document.createElement('li')
    last.innerText = "Last"
    last.addEventListener('click', function(){
        let itemToStart = (pages - 1) * numberToDisplay
        itemList(itemToStart, numberToDisplay)
    })

    ul.appendChild(last)
    pagination.appendChild(ul)
}

itemList(0, numberToDisplay);
pagination()