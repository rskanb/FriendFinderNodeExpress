

var friends =  require("../data/friends");

module.exports = function(app){
app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("/api/friends", function(req,res){
    // console.log(req.body.score);
    // console.log(friends[0].scores);
    var total = 0;
    var difference = [];
    for (var i=0; i<friends.length; i++){
        var innerArrayLength = friends[i].scores.length;
       for (var j =0; j<innerArrayLength; j++){
            console.log(`user score ${req.body.score[j]}`);
            console.log(`friend score ${friends[i].scores[j]}`);
            total += Math.abs(parseInt(req.body.score[j])-friends[i].scores[j]);
            console.log(total);
       };
       difference.push(total);
       total=0;
       console.log(difference);
    };

    const indexOfMin = difference.indexOf(Math.min(...difference));
    console.log(indexOfMin);
    console.log(friends[indexOfMin]);
    res.json(friends[indexOfMin]);

});
}