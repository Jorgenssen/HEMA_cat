// - переводить строку из фио в объект жсон
// - добавлять в общий лист бойцов
// - перестраивать табличку на основании этого общего листа

var tournamentChoice = null
var maxRoundTime = 0
var areasAmount = 0 


var listOfFighters = []

function addFighterOnClick() {
    var fio = document.getElementById("fioInput").value;
    var club = document.getElementById("clubInput").value;
    var city = document.getElementById("cityInput").value;

    console.log("test");
    
    console.log(fio);

    addFighterToList(fio, club, city);
    
}

function addFighterToList(fio, club, city) {

    var fighter = {
        fio: fio,
        club: club,
        city: city,
    };

    console.log("Добавлен новый боец");
    console.log(fighter);

    listOfFighters.push(fighter);
    console.log("Текущий лист бойцов");    
    console.log(listOfFighters); 

    formTable()

}

function uploadFightersList() {
    console.log("Uploading fighters list");

    var fightersCsv = document.getElementById("listUpload").files[0];

    if (!fightersCsv) {
        alert("No file selected")
        return
    }

    var reader = new FileReader();

    reader.onload = function(){
        var data = reader.result;
        var lines = data.split('\n')
        var result = [];

        for (i=0; i<lines.length; i++){
            console.log(lines[i])
            data = lines[i].split(', ')
            addFighterToList(data[0], data[1], data[2])
        }
    }
    
    reader.readAsText(fightersCsv)

    

    
}

function formTable() {
    
    var bodyRows = "";
    for (let i = 0; i < listOfFighters.length; i++) {
        el = listOfFighters[i];
        // console.log(el)
        toAdd = "<tr><td>" + el.fio + "</td><td>" + el.club + "</td><td>" + el.city + "</td></tr>";
        // console.log(toAdd)
        bodyRows += toAdd
        console.log(bodyRows)

        document.getElementById("fighterListTable").innerHTML = bodyRows;
    }


}


function sendConfig() {
    if (document.getElementById("tournamentChoice2").checked) {
        var tournamentType = document.getElementById("tournamentChoice2").value
    } else {
        var tournamentType = document.getElementById("tournamentChoice1").value
    }

    var maxRoundTime = document.getElementById("maxRoundTime").value;
    var roundMaxPoints = document.getElementById("roundMaxPoints").value;
    var areasAmount = document.getElementById("areasAmount").value;
    
    var configToSend = {
        tournamentType: tournamentType,
        maxRoundTime: maxRoundTime,
        roundMaxPoints: roundMaxPoints,
        areasAmount: areasAmount,
        fighters: listOfFighters
    }

    console.log(configToSend);
    
    fetch('http://127.0.0.1:5000/wizard', {
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify(configToSend)
    })
    
}