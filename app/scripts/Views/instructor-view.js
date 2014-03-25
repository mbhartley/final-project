var InstructorView = Parse.View.extend({

	projectsTemplate: _.template($('#projects').text()),

	initialize: function(){
	  console.log('instructor view INITIALIZED!');
	  $('body').empty();
	  $('body').prepend(this.el);
	  this.render();
	},

	render: function(){
	  console.log('instructor view RENDERED!');
	  var renderedProjectsTemplate = this.projectsTemplate({model: this.model});
	  console.log(this.model)
	  this.$el.html(renderedProjectsTemplate);
	}	
});

