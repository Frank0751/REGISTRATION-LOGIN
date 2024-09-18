//Get the form element by id
const loginForm = document.querySelector('#login');
//Handle form submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //Collect form data
    const formData = new FormData(loginForm);
    //Send data to backend
    //Display success message to user
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account Login Successfully';
})

//Take this to a new js page
//Write fullname function
//function fullname(firstName, lastName) {
    //return firstName + lastName;
  //  return `${firstName} ${lastName}`

//const myName = fullname('Frank', 'Koomson');
//console.log(myName);
