var CreateProjectView = Parse.View.extend ({

	createNewProjectTemplate:  _.template($('#create-new-project-template').text()),

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

});













