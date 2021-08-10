// from data.js
let tableData = data;

// initialize variables
tbody = d3.select("tbody");
input = d3.select("#datetime");

// loop through data, create row, insert into td cells
//TODO: right justify, Capitalize City Names, fix &#44 string in comments field
tableData.forEach((report) => {
    let row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    }); 
})

// func to apply filter
function tableUpdate(dtFilter) {
    // this prints out
    console.log("test");

    //clears existing table html
    tbody.html("");
    // date filter --- page reloads with ENTER - ignore default?
    filteredData = tableData.filter(sighting => sighting.datetime === dtFilter);

    filteredData.forEach((report) => {
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        }); 
    })
}


function updateFilter(event) {
    console.log("TEST 1")
    let inputText = d3.event.target.value;
    tableUpdate(inputText)
}

// filter from html form
input.on("change", updateFilter);


// bonus: filters for each of the columns --- on change

