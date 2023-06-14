let getData = fetch("time.json")
let getDataWResponce = getData.then(response => response.json())
getDataWResponce.then(data => {let ctvar = data.time;})
