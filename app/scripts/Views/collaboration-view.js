var CollaborationView = Parse.View.extend ({

	collaborationViewTemplate: _.template($('#collaboration-view-template').text()),

	events: {
		'keypress .js-message': 'sendMessage'
	},

	initialize: function(){
    console.log (Parse.User.current().attributes.username);
		$('body').empty();
		$('body').prepend(this.el);
    this.render();
  	var newMessage = new MessageCollection();
      newMessage.fetch({
        success:function(newMessage){      
        	newMessage.each(function(project){
            new RenderMessagesView({model: project});
        	})
        }
      })
	},

	render: function(){
		var renderedCollaborationViewTemplate = this.collaborationViewTemplate({model: this.model});
	  this.$el.html(renderedCollaborationViewTemplate);
	},

	sendMessage: function(e){
		if ( e.which === 13 ) {

      var message = new Message();
      message.set('newMessage', $('.js-message').val()),
      message.set('date', Date.now());
      message.set('instructor', Parse.User.current()),
      message.set('sender', Parse.User.current().attributes.username)	      


      message.save(null, {    
        success: function(project) {
        	var message = new MessageCollection();
          $('.js-message').val('');
          message.fetch({
            success:function(newMessage){  
            	//message.each(function(project){
                new RenderMessagesView({model: project});
            	//})
            }
          })    
        },
        error: function(project, error) {
          alert('Failed to create new object, with error code: ' + error.description);
        }
      })
    }		  
	},
})
