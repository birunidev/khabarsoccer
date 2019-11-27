// creating a database

let db = null;

const request = indexedDB.open("khabarsoccer", "1");
console.log("database created");

request.onupgradeneeded = e => {
    db = e.target.result;


    const sTeam = db.createObjectStore("saved_team", {
        keyPath: "id"
    });

    const sPlayer = db.createObjectStore("saved_player", {
        keyPath: "id"
    });


    console.log("Upgrade is called");
}

request.onsuccess = e => {
    db = e.target.result;
    console.log("success is called");
}

request.onerror = e => {
    console.log("Error !");
}

const btnSaveTeam = document.getElementById("save-team");
if (btnSaveTeam) {
    btnSaveTeam.addEventListener("click", () => {
        let urlTeam = new URLSearchParams(window.location.search);
        let idTeam = urlTeam.get("id");
        console.log(idTeam);
        fetchApi(base_url + "v2/teams/" + idTeam)
            .then(status)
            .then(json)
            .then(function (data) {
                console.log(data);

                const dataTeam = {
                    id: data.id,
                    image: data.crestUrl,
                    name: data.name
                }

                const tx = db.transaction("saved_team", "readwrite");
                const savedTeam = tx.objectStore("saved_team");
                savedTeam.add(dataTeam);
                alert("Team Berhasil Disimpan");


            });
    });
}


// const btnViewNote = document.getElementById("btnViewNote");
// if (btnViewNote) {
//     btnViewNote.addEventListener("click", );
// }




function viewSavedTeam() {

    const tx = db.transaction("saved_team", "readonly");
    const readTeam = tx.objectStore("saved_team");
    const request = readTeam.openCursor();
    let savedTeamHTML = ``;
    request.onsuccess = e => {
        const cursor = e.target.result;

        if (cursor) {
            // do something
            let urlTeamImage = cursor.value.image;
            urlTeamImage = urlTeamImage.replace(/^http:\/\//i, 'https://');
            savedTeamHTML += `<div class="team-info">
            <div class="club-image">
            <img src="${urlTeamImage}" alt="">
            </div>
            <p>${cursor.value.name}</p>
            <div class="trash" onClick="deleteTeam(${cursor.key});" >
            <i class="far fa-trash-alt"></i>
            </div>
            </div>`;

            cursor.continue();

        }


        const redTeam = document.getElementById("manageSavedTeam");
        if (redTeam) {
            redTeam.innerHTML = savedTeamHTML;
        }

    }


}


function deleteTeam(id) {

    console.log(id);
    const tx = db.transaction("saved_team", "readwrite");
    const deleteTeam = tx.objectStore("saved_team");
    deleteTeam.delete(id);

    alert("team deleted");
    timedRefresh(20);
}

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
}


const btnAddPlayer = document.getElementById("btnSavePlayer");


function addPlayer(id) {
    fetchApi(base_url + "v2/players/" + id)
        .then(status)
        .then(json)
        .then(function (data) {
            console.log(data);

            const tx = db.transaction("saved_player", "readwrite");
            const savedPlayer = tx.objectStore("saved_player");
            const playerDetail = {
                id: data.id,
                name: data.name,
                position: data.position,
                nationality: data.nationality
            };
            savedPlayer.add(playerDetail);
            alert("Player has been added");

        });
}

function viewPlayer() {
    const tx = db.transaction("saved_player", "readonly");
    const readPlayer = tx.objectStore("saved_player");
    const request = readPlayer.openCursor();
    let savedPlayerHTML = ``;
    let number = 1;
    request.onsuccess = e => {
        const cursor = e.target.result;

        if (cursor) {
            // do something
            savedPlayerHTML += `<tr><th>${number}</th>
            <th>${cursor.value.name}</th>
            <th>${cursor.value.position}</th>
            <th>${cursor.value.nationality}</th>
            <th><button onClick="deletePlayer(${cursor.key});"  class=""><i class="far fa-trash-alt"></i></button>
            </th></tr>`;
            number++;
            cursor.continue();

        }

        const rPlayer = document.querySelector(".manage-squad-team");
        if (rPlayer) {
            rPlayer.innerHTML = savedPlayerHTML;
        }

    }
}

function deletePlayer(id) {
    console.log(id);
    const tx = db.transaction("saved_player", "readwrite");
    const deleteTeam = tx.objectStore("saved_player");
    deleteTeam.delete(id);

    alert("team deleted");
    timedRefresh(20);
}