const fs = require("fs");
const { parse } = require("csv-parse");

let stateData = [];
let populationData = [];

const readCSV = (csvPath) =>
{
  const data = [];
  return new Promise((resolve, reject) =>
    fs
      .createReadStream(csvPath)
      .pipe(
        parse({
          delimiter: ",",
          columns: true,
          trim: true,
        })
      )
      .on("data", function (row) {
        data.push(row);
      })
      .on("error", function (error) {
        console.log(error.message);
      })
      .on("end", () => {
        resolve(data);
      })
  );
}
async function generateJson() {
  const statesPromise = readCSV("./problem-1/states.csv");
  const populationPromise = readCSV("./problem-1/population-by-zip-code.csv")
  const [statesData, populationData] = await Promise.all([statesPromise, populationPromise]);
  
  const result = {"pop_total_by_state": [], "average_pop_per_zip": 0, "average_pop_per_state": 0}
}

generateJson();
