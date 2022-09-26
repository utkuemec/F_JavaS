

exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }

        req.session.lastVisit = new Date();

        
    res.render('index', {
        title:'Express App',
        description : 'This is a simple expression app for demonstrating EJS'
    });
    //console.log(`response complete `/` from index.server.routes`)
    };
    