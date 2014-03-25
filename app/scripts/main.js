$(function(){

  Parse.initialize("wRZ1tP8WGEzVkIIcDZHWOQyb6hXAHcIe1bYtyxb0", "LsSHeEh1sK899IlTAtzCOlM86oCppYeuCUYIt5oR");

  window.router = new Router();

  Backbone.history.start();


//$(function(){

  $('.js-save-new-project').click(function(){
    //create a new instance of the Project Object
    var project = new Project();
    /*this new instance includes the following UI data, which is being captured
    from input fields via JQuery functions; key-value pairs are being set in Parse*/
    project.set('projectName', $('.js-project-name').val()),
    project.set('projectDescription', $('.js-project-description').val()),
    project.set('projectDueDate', $('.js-project-due-date').val()),
    project.set('projectInstructions', $('.js-project-instructions').val()),
    //the object and its key-value pairs are saved to Parse
    project.save(null, {    
      success: function(project) {
        alert('New object created with objectId: ' + project.id);
        var createdProject = new ProjectCollection();
        /*if the object successfully saves, immediately fetch data from Parse
        and send the model (object?) through to the InstructorView*/
        createdProject.fetch({
          success:function(){       
            //createdProject.each(function(createdProject){
              new InstructorView({model: createdProject});
            //})
          }
        })
        //fire the router to navigate to the instructorPage
        window.router.navigate("instructorPage", {trigger: true});
      },
      error: function(project, error) {
        alert('Failed to create new object, with error code: ' + error.description);
      }
    })
  });
//});
});


  
