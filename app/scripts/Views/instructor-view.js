var InstructorView = Parse.View.extend({

	projectsTemplate: _.template($('#projects').text()),

	initialize: function(){
		//inject this.el into the DOM
	  $('body').html(this.el);
	  this.render();
	},

	render: function(){
		//render the template to the page
	  var renderedProjectsTemplate = this.projectsTemplate({model: this.model});
	  this.$el.html(renderedProjectsTemplate);
	},

});

