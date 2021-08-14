// from data.js
let tableData = data;

// initialize variables
let tbody = d3.select("tbody");
let input = d3.select("#datetime");
let form = d3.select("form")

// loop through data, create row, insert into td cells
//TODO: right justify, Capitalize City Names, fix &#44 string in comments field
function fullTable () {
    tableData.forEach((report) => {
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        }); 
    })
};

//create initial table with full results
fullTable();

// func to apply filter
function tableUpdate(dtFilter) {
    console.log(dtFilter);
    //clears existing table html
    tbody.html("");
    filteredData = tableData.filter(sighting => sighting.datetime === dtFilter);

    filteredData.forEach((report) => {
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        }); 
    })
};


function updateFilter() {
    d3.event.preventDefault();
    console.log("TEST 1");
    let inputText = d3.select("#datetime").property("value");
    // if the field is empty, it resets the table
    // else use the string to filter the table
    if (inputText === "") {
        fullTable();
    }
    else {
        tableUpdate(inputText);
    }
    
};

// filter from html form
input.on("change", updateFilter);
form.on("submit", updateFilter);

