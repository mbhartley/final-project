var CreateProjectView = Parse.View.extend ({

	createNewProjectTemplate:  _.template($('#create-new-project-template').text()),

	events: {
	  'click .js-save-new-project': 'saveProject',
	},

	initialize: function(){
	  console.log('CreateProjectView INITIALIZED!')
	  $('body').empty();
	  $('body').prepend(this.el);
	  this.render();
	},

	render: function(){
	  console.log('CreateProjectView RENDERED!');
	  this.$el.html(this.createNewProjectTemplate());
	},

	
	saveProject: function(){
	  //create a new instance of the Project Object
	  var project = new Project();
	  /*this new instance includes the following UI data, which is being captured
	  from input fields via JQuery functions; key-value pairs are being set in Parse*/
	  project.set('projectName', $('.js-project-name').val()),
	  project.set('projectDescription', $('.js-project-description').val()),
	  project.set('projectDueDate', $('.js-project-due-date').val()),
	  project.set('projectInstructions', $('.js-project-instructions').val()),
	  project.set('instructor', Parse.User.current()),
	  project.setACL(new Parse.ACL(Parse.User.current())),	
	  //the object and its key-value pairs are saved to Parse
	  project.save(null, {    
	    success: function(project) {
	      alert('New object created with objectId: ' + project.id);
	      //fire the router to navigate to the instructorPage
	      window.router.navigate("instructorPage", {trigger: true});
	      	
	      /*if the object successfully saves, immediately fetch data from Parse
	      and send the model (object?) through to the InstructorView*/
	      
	        
	    },
        error: function(project, error) {
          alert('Failed to create new object, with error code: ' + error.description);
        }
	  })		  
	}
});













