var Router = Backbone.Router.extend({

	routes: {

		''                  			  			: 'homePage',
		'instructorPage'    			  			: 'instructorPage',
		//'studentPage'       			  			: 'studentPage',
		'instructorPage/createNewProject' : 'createNewProjectPage',
		'instructorPage/:collaboration'   : 'collaborationPage',
		//'studentPage/: viewProjectPage'   : 'viewProjectPage',
		//'studentPage/: collaboration'	  	: 'collaborationPage',

	},

	initialize: function(){
	  
	},

	homePage: function(){
	  new HomePageView();
	},

	instructorPage: function(){
		new InstructorView();
		console.log('instructorPage Firing')
	  	var createdProject = new ProjectCollection();
	  	createdProject.fetch({
	  	  success:function(createdProject){  
	  	    console.log('success callback on fetch firing')     
	  	  	createdProject.each(function(project){
	  	      new ProjectPaneView({model: project});
	  	  	})
	  	  }
	  	})
    },

    createNewProjectPage: function(){
      new CreateProjectView();
    },

    collaborationPage: function(){
    	new CollaborationView();
    }
})