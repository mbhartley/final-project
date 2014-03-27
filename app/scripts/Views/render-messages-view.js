var RenderMessagesView = Parse.View.extend({
  
	className: 'rendered-message',

	messagesTemplate: _.template($('#message-pane').text()),

	initialize: function(){
				$('.message-pane').prepend(this.el);
			  this.render();
			},

		render: function(){
			var renderedMessagesTemplate = this.messagesTemplate({model: this.model});
		  this.$el.html(renderedMessagesTemplate);
		},

})