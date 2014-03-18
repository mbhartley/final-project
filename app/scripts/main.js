$(function(){

Parse.initialize("wRZ1tP8WGEzVkIIcDZHWOQyb6hXAHcIe1bYtyxb0", "LsSHeEh1sK899IlTAtzCOlM86oCppYeuCUYIt5oR");

}),

/*test working!!!
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});*/


$('#save-instructor-registration').click(function() {
	console.log('RegisterInstructor is firing!');
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
	    	//on success, input fields are cleared
		    $('.js-instructor-username').val('');
		    $('.js-instructor-password').val('');
		    $('.js-instructor-email').val('');
		    $('.js-instr-reg-modal').modal('hide');
		    alert('You have successfully registered with Platform. Click Okay to continue and log in.')

		},

		error: function(user, error) {
		    // on error, error alert is thrown; this could be done better
		    console.log(error);
		    $('.create-username').addClass('has-error has-feedback');
		    $('.error-message').append('Sorry,' + ' ' + error.message + '.' + ' ' + 'Please try again.');
		}
	});
})




	
