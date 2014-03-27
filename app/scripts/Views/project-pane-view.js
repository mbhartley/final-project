var ProjectPaneView = Parse.View.extend({

	projectsPaneTemplate: _.template($('#renderedProject').text()),

	events: {
	  'click .project-remove'			 : 'removeProject',
	  'click .project-edit'  			 : 'editProject',
	  'click .project-collaborate' : 'goToCollaboratePage',
	},

	initialize: function(){
	  $('.project-pane').prepend(this.el);
	  this.render();
	},

	render: function(){
		var renderedProjectsPaneTemplate = this.projectsPaneTemplate({model: this.model});
	  this.$el.html(renderedProjectsPaneTemplate);
	},

	removeProject: function(){
	  console.log('removeProject Firing!');
	  this.model.destroy({
	    success: function(project) {
	      console.log('delete successful')
	      $('.project-thumbnails').empty();
	    },
	    error: function(project, error) {
	      console.log('The delete failed')	      
	    }
	  });
	},

	editProject: function(){
		console.log('editProject firing!');
		window.router.navigate('instructorPage/createNewProject', {trigger: true});
	},

	goToCollaboratePage: function(){
		new CollaborationView();
	  window.router.navigate('instructorPage/:collaboration', {trigger: true});
	}


})