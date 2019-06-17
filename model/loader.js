const fs = require('fs');
const mongoose = require("mongoose");

const PortfolioItems = require("./portfolioModel.js");

mongoose.connect("mongodb://localhost/portfoliodb", { useNewUrlParser: true });
 
fs.readFile('data.csv', 'utf8', function(err, contents) {
    let filelines = contents.split('\r\n');
    filelines.forEach(line =>    
    {
        let fields = line.split(',');
        // techs.forEach(tech => 
        let profItem = {
            sequence: fields[0],
            title: fields[1],
            description: fields[2],
            repolink: fields[3],
            sitelink: fields[4],
            iconname: fields[5],
            techs: fields[6]
        }

        PortfolioItems.find({sequence : profItem.sequence})
                        .then(function(foundItem) {
                            let addItem = profItem;
                            console.log("Adding",addItem);
                            if (foundItem.length == 0) {
                                PortfolioItems.create(addItem).then(function(dbItem) {
                                    // If saved successfully, send the the new User document to the client
                                    console.log("Add ",dbItem.sequence);
                                  });                                
                            }
                        });
    });
});
 