// A simple log for the output
var log = "before: " + ds.Beer.length;

ds.Beer.all().remove();

// Main function
function doImport() {
    var lines = loadText(ds.getModelFolder().path + "/DataFolder/Import/data.csv" ).split("\n");
    var columns = [],
    	newBeer = {};
    	
    lines.forEach(function(oneLine) {
        columns = oneLine.split(",");
        newBeer = new ds.Beer({
            position: columns[0],
            name: columns[1],
            url: columns[2],
            brewery: columns[3],
            breweryUrl: columns[4],
            tags: columns[5],
            tagsUrl: columns[6],
            alcohol: columns[7],
            rating: columns[8],
            score: columns[9],
            image: columns[10]

        });
    	newBeer.save();
    });
}
// Call the function 
doImport();

// Log result
log += " / after: " + ds.Beer.length;