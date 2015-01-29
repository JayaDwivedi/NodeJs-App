/**
 * Created by jayad on 1/29/2015.
 */
module.exports=function(app){

    require('../routes/todo.route')(app);
    app.use('/api/*',function(req, res, next) {
        res.json({'error':'No such service present'},400);
    });

    app.use('*',function(req, res, next){
        res.send('<html><body><h1>404 page not found</h1></body></html>',400);
    });

    //var app;
}