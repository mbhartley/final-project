var InstructorView = Parse.View.extend({

	welcomeInstructorTemplate: _.template($('#welcome-instructor-template').text()),

	initialize: function(){
	  console.log('instructor view INITIALIZED!');
	  //$('body').empty();
	  $('body').prepend(this.el);
	  this.render();
	},

	render: function(){
	  console.log('instructor view RENDERED!');
	  var renderedWelcomeInstructorTemplate = this.welcomeInstructorTemplate({model: this.model});
	  this.$el.html(this.welcomeInstructorTemplate);
	}	
});

