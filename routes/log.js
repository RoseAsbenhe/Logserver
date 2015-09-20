var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req);
    // Set our internal DB variable
    var db = req.db;
    var reqBody = req.body;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "pluginName" : reqBody.pluginName,
        "userid" : reqBody.userid,
        "url" : reqBody.url,
        "sslStatus" : reqBody.sslStatus,
        "theme" : reqBody.theme,
        "trust" : reqBody.trust,
        "text" : reqBody.text
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database. "+err+" doc: "+doc);
        }
        else {
            // And forward to success page
            res.send("success");
        }
    });
});

module.exports = router;
