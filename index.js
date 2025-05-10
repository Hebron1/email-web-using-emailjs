document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const form = document.getElementById('form')
    emailjs.sendForm('service_e7medxb', 'template_uuzc7v6', form || this).then(() => {
        alert('You can do it!')
    }, (error) => {
        alert('This is error', error)
    })
})