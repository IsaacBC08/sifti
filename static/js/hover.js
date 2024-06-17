
let buttons = document.querySelectorAll(".boton")
buttons.forEach(button => {
    let text = button.textContent
    button.innerHTML = ''
    for (let char of text) {
        let span = document.createElement('span')
        span.textContent = char === '  ' ? '\u00A0' : char
        button.appendChild(span)
    }
    let spans = button.querySelectorAll('span')
    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover')
            }, index * 50)
        })
    })
    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover')
            }, index * 50)
        })
    })
});

let buttonAdmin = document.querySelectorAll(".boton-admin")
buttonAdmin.forEach(button => {
    let text = button.textContent
    button.innerHTML = ''
    for (let char of text) {
        let span = document.createElement('span')
        span.textContent = char === '  ' ? '\u00A0' : char
        button.appendChild(span)
    }
    let spans = button.querySelectorAll('span')
    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover')
            }, index * 50)
        })
    })
    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover')
            }, index * 50)
        })
    })
});