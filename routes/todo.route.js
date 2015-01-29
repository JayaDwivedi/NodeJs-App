/**
 * Created by jayad on 1/29/2015.
 */
var  projects = require('../controllers/todos.controller');
module.exports=function(app){
    app.route('/api/projects').
        get(projects.list)
        .post(projects.create);

    app.route('/api/projects/:projectId')
        .get(projects.read)
        .put(projects.update)
        .delete(projects.delete);

    app.param('projectId' , projects.projectById);

};
