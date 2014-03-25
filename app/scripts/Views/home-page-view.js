var HomePageView = Parse.View.extend({

  homePageTemplate: _.template($('#home-page-template').text()),

  events: {
  	'click .js-save-instructor-registration': 'registerInstructor',
  	'click .js-instructor-login': 'loginInstructor'
  },

  initialize: function(){
  	console.log('HomePageView Initialized!');
    $('body').empty;
  	$('body').append(this.el);
  	this.render();
  },

  render: function(){
  	console.log('HomePageView Rendered!');
  	this.$el.html(this.homePageTemplate());
  },

  loginInstructor: function(){
  	//capture the values of user inputs from login modal
  	var instructorName = $('.js-instructor-login-username').val();
  	var instructorPassword = $('.js-instructor-login-password').val();
  	//pass those values in as parameters of the Parse login method
  	Parse.User.logIn(instructorName, instructorPassword,{
  	  success: function(user) {
  	    console.log('successful login');
  	    /*on successful login: fire the instructorPage route and hide the modal*/
  	    window.router.navigate("instructorPage", {trigger: true});
  	    //this.destroy();
  	    //$('.js-instr-login-modal').modal('hide');
  	  },
  	  error: function(user, error) {
  	    console.log(error)
  	    //if an incorrect username or password is entered, user will see error message in modal
  	    $('.login-error-message').append('ERROR: Invalid username/password combination. Please try again.');
  	      
  	  }
  	});
  },

  registerInstructor: function(){
  	console.log('Instructor Registration is firing!');
	var user = new Parse.User();

    //set user input values as Parse object values
	user.set('username', $('.js-instructor-username').val());
	user.set('password', $('.js-instructor-password').val());
	user.set('email', 	 $('.js-instructor-email').val());

	//'signUp' must be used in place of 'save'; save will be used for subsequent edits only
	user.signUp(null, {
	  success: function(user) {
	    //on success, navigate away from page to instructorPage
		router.navigate("instructorPage", {trigger: true});
		// this.destroy();
	  },

	  error: function(user, error) {
	    //on duplicate username entered, error message is appended via Bootstrap 'has error' state
		console.log(error);
		$('.js-instructor-username').val('');
		$('.create-username').addClass('has-error');
		$('.error-message').append('Sorry,' + ' ' + error.message + '.' + ' ' + 'Please try again.');
	  }
	});
  }

})