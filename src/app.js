import getData from "./lib/service";

let data = getData(1);

data.then((result) => console.log(result));