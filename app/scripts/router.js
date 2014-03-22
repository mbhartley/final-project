var Router = Backbone.Router.extend({

	routes: {

		''                  			  : 'home',
		'instructorPage'    			  : 'instructorPage',
		'studentPage'       			  : 'studentPage',
		'instructorPage/createNewProject': 'createNewProjectPage',
		'instructorPage/:collaboration'   : 'collaborationPage',
		'studentPage/: viewProjectPage'   : 'viewProjectPage',
		'studentPage/: collaboration'	  : 'collaborationPage',

	},

	initialize: function(){
		console.log('Hey guys, unto us a router is born!')
	},

	instructorPage: function(){
	    console.log('isntructorPage firing away!')
  	    new InstructorView();
    },

    createNewProjectPage: function(){
    	console.log('createNewProjectPage is ON FIRE!')
    	new CreateProjectView();
    }

    


    

})