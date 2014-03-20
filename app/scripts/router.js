var Router = Backbone.Router.extend({

	routes: {

		''                  			  : 'home',
		'instructorPage'    			  : 'instructorPage',
		'studentPage'       			  : 'studentPage',
		'instructorPage/:createNewProject': 'sortEvents',
		'instructorPage/:collaboration'   : 'collaborationPage',
		'studentPage/: viewProjectPage'   : 'viewProjectPage',
		'studentPage/: collaboration'	  : 'collaborationPage',

	},

	initialize: function(){
		console.log('Hey guys, unto us a router is born!')
	},

	home: function(){
		console.log('im HOME!');
	},

	instructorPage: function(){
	    console.log('isntructorPage firing away!')
	    $('body').empty();
  	    new InstructorView();
    },

    

})