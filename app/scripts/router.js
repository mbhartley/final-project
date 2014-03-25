var Router = Backbone.Router.extend({

	routes: {

		''                  			  : 'homePage',
		'instructorPage'    			  : 'instructorPage',
		'studentPage'       			  : 'studentPage',
		'instructorPage/createNewProject' : 'createNewProjectPage',
		'instructorPage/:collaboration'   : 'collaborationPage',
		'studentPage/: viewProjectPage'   : 'viewProjectPage',
		'studentPage/: collaboration'	  : 'collaborationPage',

	},

	initialize: function(){
	  
	},

	homePage: function(){
	  new HomePageView();
	},

	instructorPage: function(){
	  	var createdProject = new ProjectCollection();
	  	createdProject.fetch({
	  	  success:function(){       
	  	  	createdProject.each(function(createdProject){
	  	    	new InstructorView({model: createdProject});
	  	  	})
	  	  }
	  	})
    },

    createNewProjectPage: function(){
      new CreateProjectView();
    }
})