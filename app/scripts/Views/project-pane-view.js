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
	  //this.listenTo(this.model, "change", this.render);
	},

	render: function(){
	 	var renderedProjectsPaneTemplate = this.projectsPaneTemplate({model: this.model});
	  this.$el.html(renderedProjectsPaneTemplate);
	},

	removeProject: function(){
	  console.log('removeProject Firing!');
	  this.$el.html('');
	  this.model.destroy({
	    success: function(project) {
	      console.log('delete successful')
	    },
	    error: function(project, error) {
	      console.log('The delete failed')	      
	    }
	  });
	},

	editProject: function(){
	  console.log('editProject firing!');
	  //window.router.navigate('instructorPage/createNewProject', {trigger: true});
	//   var editableText = $("<input type='text' class='form-control js-project-name'>");
	//   var divHtml = $("#js-edit-project-name").html();
	//   editableText.val(divHtml);
	//   $("#js-edit-project-name").replaceWith(editableText);
	//   editableText.focus();
	  
	//   $('.js-project-name').on('keypress', function(event) {
	//     if(event.which == 13 && $(this).val() != '') {
	//     	//var project = new Project();
	// 	    this.project.set('projectName', $('.js-project-name').val()),
	// 	    this.project.save();
	//     }
	//   })

	 },

	goToCollaboratePage: function(){
	  new CollaborationView();
	  window.router.navigate('instructorPage/:collaboration', {trigger: true});
	}


})









