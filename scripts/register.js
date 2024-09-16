// Get form element by id
const registerForm = document.getElementById('register');
// Handle formn submit event
registerForm.onsubmit = function(event) {
    event.preventDefault();
    console.log(event)
}