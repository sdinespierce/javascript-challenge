// from data.js
let tableData = data;

// initialize variables
let tbody = d3.select("tbody");
let input = d3.select("#datetime");
let form = d3.select("form")

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
    console.log(dtFilter);
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


function updateFilter() {
    d3.event.preventDefault();
    console.log("TEST 1");
    let inputText = d3.select("#datetime").property("value");
    tableUpdate(inputText);
}

// filter from html form
input.on("change", updateFilter);
form.on("submit", updateFilter);


// bonus: filters for each of the columns --- on change

