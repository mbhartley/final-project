var InstructorView = Parse.View.extend({

	projectsTemplate: _.template($('#projects').text()),

	events: {
	  'click .project-remove': 'removeProject',
	  //'click .project-edit'  : 'editProject',
	},

	initialize: function(){
	  console.log('instructor view INITIALIZED!');
	  $('body').empty();
	  $('body').prepend(this.el);
	  this.render();
	},

	render: function(){
	  console.log('instructor view RENDERED!');
	  var renderedProjectsTemplate = this.projectsTemplate({model: this.model});
	  console.log(this.model);
	  this.$el.html(renderedProjectsTemplate);
	},

	removeProject: function(){
	  console.log('removeProject Firing!');
	  this.model.destroy({
	    success: function(project) {
	      console.log('delete successful')
	      $('.project-thumbnails').empty();
	    },
	    error: function(project, error) {
	      // The delete failed.
	      // error is a Parse.Error with an error code and description.
	    }
	  });
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

