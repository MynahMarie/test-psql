const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('what you are going to test', (t)=> {
  runDbBuild(function(err, res){
   var expected = [{id: 1,
                   name: "Alina",
                   location: "Moscow"
                 }];
    getData((err, res) => {
      if(err){
        console.log(err);
      }else{
        // console.log("This is what we get: " + res);
        t.deepEqual(res, expected, "Should return 1 full row.");
        t.end();
      }
    });
 });
});

 tape('what you are going to test', (t)=> {
   runDbBuild(function(err, res){
    var expected = [{
      id: 1,
      name: "Alina",
      location: "Moscow"
    },
    {id: 2,
    name: "Marlen",
    location: "Haifa"
    }];

    var name = "Marlen";
    var location = "Haifa";
     postData(name, location, (err, res) => {
       if(err){
         console.log(err);
       }else{
         console.log("This is what we get: " + res);
       }
     });
     getData((err, res) => {
       if(err){
         console.log(err);
       }else{
         // console.log("This is what we get: " + res);
         t.deepEqual(res, expected, "Should return 2 full rows.");
         t.end();
       }
     });
  });
});
