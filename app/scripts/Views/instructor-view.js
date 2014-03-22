var InstructorView = Parse.View.extend({

	welcomeInstructorTemplate: _.template($('#welcome-instructor-template').text()),

	initialize: function(){
		$('body').empty();
		console.log('instructor view INITIALIZED!');
		$('body').prepend(this.el);
		this.render();
	},

	render: function(){
		console.log('instructor view RENDERED!');
		this.$el.html(this.welcomeInstructorTemplate());
	}	
});

