const submitButton = document.getElementById("submit");
const inputCollection = document.querySelectorAll('input');

inputCollection.forEach(element => {
    element.addEventListener("keyup", (e) => {
        let completed = true;
        inputCollection.forEach(input => {
            if (input.value === '') {
                completed = false
            }
        })
    
        if (completed) {
            submitButton.disabled = false;
        }
    })
})

