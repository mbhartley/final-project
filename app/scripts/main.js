$(function(){

  Parse.initialize("wRZ1tP8WGEzVkIIcDZHWOQyb6hXAHcIe1bYtyxb0", "LsSHeEh1sK899IlTAtzCOlM86oCppYeuCUYIt5oR");

}),

//Instructor Registration, on click of 'save' button in registration modal
$('.js-save-instructor-registration').click(function() {
	console.log('Instructor Registration is firing!');
	var user = new Parse.User();
	//capture the value of user inputs from instructor registration modal    
	var username = $('.js-instructor-username').val();
	var password = $('.js-instructor-password').val();
	var email    = $('.js-instructor-email').val();
    //set user input values as Parse object values
	user.set('username', username);
	user.set('password', password);
	user.set('email', email);
	//'signUp' must be used in place of 'save'; save will be used for subsequent edits only
	user.signUp(null, {
	    success: function(user) {
	    	//on success, input fields are cleared, modal is hidden, and success alert is activated
		    $('.js-instructor-username').val('');
		    $('.js-instructor-password').val('');
		    $('.js-instructor-email').val('');
		    $('.js-instr-reg-modal').modal('hide');
		    alert('You have successfully registered with Platform. Click OK to continue and log in.')

		},

		error: function(user, error) {
		    //on duplicate username entered, error message is appended via Bootstrap 'has error' state
		    console.log(error);
		    $('.js-instructor-username').val('');
		    $('.create-username').addClass('has-error');
		    $('.error-message').append('Sorry,' + ' ' + error.message + '.' + ' ' + 'Please try again.');
		}
	});
})
/*clear the value of all input fields when closing the register modal, but still need to find a way to clear 
the error message if user closes modal after error message is received*/
$('.js-close-instructor-registration').click(function(){
	$('.js-instructor-username').val('');
	$('.js-instructor-password').val('');
	$('.js-instructor-email').val('');
})

//Instructor Login, on click of 'Login' button in login modal
$('.js-instructor-login').click(function(){
	console.log('Instructor Login is Firing!')
	//capture the values of user inputs from login modal
	var instructorName = $('.js-instructor-login-username').val();
	var instructorPassword = $('.js-instructor-login-password').val();
  //pass those values in as parameters of the Parse login method
  Parse.User.logIn(instructorName, instructorPassword, {
      success: function(user) {
      	console.log('successful login')
        //on successful login, the Instructor user will be taken to the Teacher View page; alert is temporary
        alert('Login Successful. Click OK')
      },
      error: function(user, error) {
      	console.log(error)
      	//if an incorrect username or password is entered, user will see error message in modal
      	$('.login-error-message').append('ERROR: Invalid username/password combination. Please try again.');
      
      }
  });

})
/*clear the value of all input fields when closing the login modal, but still need to find a way to clear
the error message if user closes the modal after error message is received*/
$('.js-close-instructor-login').click(function(){
	console.log('clear login fields firing');
	$('.js-instructor-login-username').val('');
	$('.js-instructor-login-password').val('');
})




	
