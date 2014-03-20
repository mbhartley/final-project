var InstructorView = Parse.View.extend ({

	welcomeInstructorTemplate: _.template($('#welcome-instructor-template').text()),

	initialize: function(){
		console.log('instructor view INITIALIZED!');		               
	}

})