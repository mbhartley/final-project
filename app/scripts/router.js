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
	  console.log('Hey guys, unto us a router is born!')
	},

	homePage: function(){
	  console.log('homePage Firing')
	  new HomePageView();
	},

	instructorPage: function(){
	  	console.log('isntructorPage Firing!')
	  	var createdProject = new ProjectCollection();
	  	createdProject.fetch({
	  	  success:function(){ 
	  	  console.log('fetch firing');      
	  	  	createdProject.each(function(createdProject){
	  	    	new InstructorView({model: createdProject});
	  	  	})
	  	  }
	  	})
  	  	//new InstructorView();
    },

    createNewProjectPage: function(){
      console.log('createNewProjectPage Firing!')
      new CreateProjectView();
    }

})