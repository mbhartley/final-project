var CollaborationView = Parse.View.extend ({

	collaborationViewTemplate: _.template($('#collaboration-view-template').text()),

		events: {
			'keypress .js-message': 'sendMessage'
		},

		initialize: function(){
			$('body').empty();
			$('body').prepend(this.el);
		  this.render();
			},

		render: function(){
			var renderedCollaborationViewTemplate = this.collaborationViewTemplate({model: this.model});
		  this.$el.html(renderedCollaborationViewTemplate);
		},

  	sendMessage: function(e){
  		if ( e.which === 13 ) {

	      var message = new Message();
	      	message.set('newMessage', $('.js-message').val()),
	      	message.set('instructor', Parse.User.current()),
		      message.setACL(new Parse.ACL(Parse.User.current())),	      

	      message.save(null, {    
	        success: function(project) {
	          //alert('New object created with objectId: ' + project.id);
	          $('.js-message').val('');
	          var newMessage = new MessageCollection();
	          newMessage.fetch({
	            success:function(newMessage){      
	            	newMessage.each(function(project){
	                new RenderMessagesView({model: project});
	            	})
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
