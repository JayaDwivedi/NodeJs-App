/**
 * Created by jayad on 1/29/2015.
 */

var projects=[];
exports.list=function(req,res){
    res.send(projects);
}

exports.create=function(req,res){
    console.log("Controller is here",req.id);
    projects.push(req.body);
    res.send(req.body);
}

exports.projectById=function(req,res,next,id){
    projects.forEach(function(project,index){
        if(project.id===parseInt(id)){
            req.project = project;
        }
    });
    next();
}

exports.read=function(req,res){
    res.send(req.project);
}

exports.update=function(req,res){
    var project = req.project;
    if(req.body.projectText!=undefined){
        project.projectText=req.body.projectText;
    }
    if(req.body.completed!=undefined){
        project.completed=req.body.completed;
    }
    res.send(project);
}

exports.delete=function(req,res){
    console.log("here",res);
    var project = req.project;
    projects.splice(projects.indexOf((project),1));
    res.send(project);
}