

module.exports = function(app){
    var index = require(`../controllers/index.server.controller`)
    app.get('/', index.render)
    //console.log(`Rendering `/` from index.server.routes`)
}