let browserName="chrome"

if(browserName == "chrome"){
    console.log("Launching Chrome Browser")
}else {
    console.log("Launching default Browser")
}

let testType = "Smoke"

switch(true){
    case "Smoke":
    console.log("Running Smoke Tests")
    case "Sanity":
     console.log("Running Sanity Tests")   
      case "Regression":
     console.log("Running Sanity Tests")  
     default:         
     console.log("Running default smoke Tests")  
}