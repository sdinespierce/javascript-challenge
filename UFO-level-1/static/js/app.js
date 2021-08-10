// from data.js
let tableData = data;

tbody = d3.select("tbody");

// loop through data, create row, insert into td cells
// could do only 50chars of comments with a see more option that expands it

//TODO: right justify, Capitalize City Names, fix &#44 string in comments field
tableData.forEach((report) => {
    let row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    }); 
})


// filter from html form



// bonus: filters for each of the columns --- on change

