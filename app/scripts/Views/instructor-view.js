var InstructorView = Parse.View.extend({

	projectsTemplate: _.template($('#projects').text()),

	

	initialize: function(){
	  $('body').html(this.el);
	  this.render();
	},

	render: function(){
	  var renderedProjectsTemplate = this.projectsTemplate({model: this.model});
	  console.log(this.model);
	  this.$el.html(renderedProjectsTemplate);
	},

	
	//editProject: function(){
	//	console.log('editProject firing!');
	//	var query = new Parse.Query(Project);
	//	query.get(this.model, {
	//	  success: function(Project) {
	//	    // The object was retrieved successfully.
	//	  },
	//	  error: function(object, error) {
	//	    // The object was not retrieved successfully.
	//	    // error is a Parse.Error with an error code and description.
	//	  }
	//	});
	//	//window.router.navigate("instructorPage/createNewProject", {trigger: true});
	//}


});

