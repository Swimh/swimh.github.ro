const draggables = document.querySelectorAll('.draggable')
const squares = document.querySelectorAll('.square')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})



squares.forEach(square => {
  square.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  square.addEventListener('drop', (e) => {
    e.preventDefault()
    console.log(e)
    console.log(square)
    for(let i=0; i<square.children.length; i++) {
      square.children[i].remove()
    }
    
    const draggable = document.querySelector('.dragging')
    console.log(draggable)
    square.appendChild(draggable)
    
    
  })
})