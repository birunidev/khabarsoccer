const base_url = 'https://api.football-data.org/';


const fetchApi = url => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': "19bdf560d7264a9887d821c9cf153e08"
        }
    });
}

function status(response) {
    if (response.status !== 200) {
        console.log('Error : ' + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}

function json(response) {
    // Mengembalikan sebuah Promise berupa objek/array JavaScript
    // yang diubah dari teks JSON.
    return response.json();
}

function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log('Error : ' + error);
}




function getEnglandStanding() {

    if ('caches' in window) {

        caches.match(base_url + "v2/competitions/2021/standings")
            .then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        let standingHTML = "";

                        data.standings[0].table.forEach(function (standing) {
                            standingHTML += `
                        <tr class="row-first centered">
                                        <th class="centered">${standing.position}</th>
                                        <th class="centered">${standing.team.name}</th>
                                        <th class="centered">${standing.playedGames}</th>
                                        <th class="centered">${standing.won}</th>
                                        <th class="centered">${standing.draw}</th>
                                        <th class="centered">${standing.lost}</th>
                                        <th class="centered">${standing.goalsFor}</th>
                                        <th class="centered">${standing.goalsAgainst}</th>
                                        <th class="centered">${standing.points}</th>
                                    </tr>
                        `;
                        });

                        // Sisipkan komponen card ke dalam elemen dengan id# content
                        $('#standingEngland').html(standingHTML);
                    });
                }
            });
    }

    fetchApi(base_url + 'v2/competitions/2021/standings')
        .then(status)
        .then(json)
        .then(function (data) {
            let standingHTML = "";

            data.standings[0].table.forEach(function (i) {
                standingHTML += `
            <tr class="row-first centered">
                            <th class="centered">${i.position}</th>
                            <th class="centered">${i.team.name}</th>
                            <th class="centered">${i.playedGames}</th>
                            <th class="centered">${i.won}</th>
                            <th class="centered">${i.draw}</th>
                            <th class="centered">${i.lost}</th>
                            <th class="centered">${i.goalsFor}</th>
                            <th class="centered">${i.goalsAgainst}</th>
                            <th class="centered">${i.points}</th>
                        </tr>
            `;
            });

            // Sisipkan komponen card ke dalam elemen dengan id# content
            $('#standingEngland').html(standingHTML);


        })
        .catch(error);
}





function getTeams() {

    if ('caches' in window) {
        caches.match(base_url + 'v2/competitions/2021/teams')
            .then(function (response) {
                if (response) {
                    response.json().then(function (data) {

                        let teamHTML = '';
                        data.teams.forEach(function (team) {
                            let urlTeamImage = team.crestUrl;
                            urlTeamImage = urlTeamImage.replace(/^http:\/\//i, 'https://');
                            teamHTML += `<a href=./pages/detailteam.html?id=${team.id}>
                            <div class="team-info">
                                <div class="club-image">
                                    <img src="${urlTeamImage}" alt="">
                                </div>
                                <p>${team.name}</p>
                            </div></a>`;

                        });

                        $('#team-list').html(teamHTML);
                        $('#team-page').html(teamHTML);
                    });
                }
            })
    }

    fetchApi(base_url + 'v2/competitions/2021/teams')
        .then(status)
        .then(json)
        .then(function (data) {

            let teamHTML = '';
            data.teams.forEach(function (team) {
                let urlTeamImage = team.crestUrl;
                urlTeamImage = urlTeamImage.replace(/^http:\/\//i, 'https://');
                teamHTML += `<a href=./pages/detailteam.html?id=${team.id}>
                <div class="team-info">
                    <div class="club-image">
                        <img src="${urlTeamImage}" alt="">
                    </div>
                    <p>${team.name}</p>
                </div></a>`;

            });

            $('#team-list').html(teamHTML);
            $('#team-page').html(teamHTML);
        })
}

// fetchApi(base_url + 'v2/teams/57')
//     .then(status)
//     .then(json)
//     .then(function (data) {
//         console.log(data);
//     })

function getTeamById() {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    if ('caches' in window) {
        caches.match(base_url + 'v2/teams/' + idParam)
            .then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        let urlTeamImage = data.crestUrl;
                        urlTeamImage = urlTeamImage.replace(/^http:\/\//i, 'https://');
                        let imageTeam = `<img src="${urlTeamImage}" alt="">`;
                        let nameTeam = data.name;
                        let detailTeam = `<li>Name : ${data.name} </li>
                    <li>Short Name : ${data.shortName} </li>
                    <li>Address : ${data.address}</li>
                    <li>Phone : ${data.phone}</li>
                    <li>Email : ${data.email}</li>
                    <li>Website : ${data.website}</li>
                    <li>Founded : ${data.founded}</li>
                    <li>Club colors : ${data.clubColors} </li>`;



                        let squadDetail = '';
                        let number = 1;
                        data.squad.forEach(function (sq) {

                            squadDetail += `<tr>
                            <th>${number}</th>
                            <th>${sq.name}</th>
                            <th>${sq.position}</th>
                            <th>${sq.countryOfBirth}</th>
                            <th><button id="btnSavePlayer" onClick="addPlayer(${sq.id})" ><i class="far fa-heart"></i></button></th>
                        </tr>`;
                            number++;
                        });

                        $('.img-logo-wrapper').html(imageTeam);
                        $('.team-name-one').html(nameTeam);
                        $('.detail-info-team').html(detailTeam);
                        $('.detail-squad-team').html(squadDetail);

                    });
                }
            })
    }


    fetchApi(base_url + 'v2/teams/' + idParam)
        .then(status)
        .then(json)
        .then(
            function (data) {
                let urlTeamImage = data.crestUrl;
                urlTeamImage = urlTeamImage.replace(/^http:\/\//i, 'https://');
                let imageTeam = `<img src="${urlTeamImage}" alt="">`;
                let nameTeam = data.name;
                let detailTeam = `<li>Name : ${data.name} </li>
                <li>Short Name : ${data.shortName} </li>
                <li>Address : ${data.address}</li>
                <li>Phone : ${data.phone}</li>
                <li>Email : ${data.email}</li>
                <li>Website : ${data.website}</li>
                <li>Founded : ${data.founded}</li>
                <li>Club colors : ${data.clubColors} </li>`;



                let squadDetail = '';
                let number = 1;
                data.squad.forEach(function (sq) {

                    squadDetail += `<tr>
                        <th>${number}</th>
                        <th>${sq.name}</th>
                        <th>${sq.position}</th>
                        <th>${sq.countryOfBirth}</th>
                        <th><button id="btnSavePlayer" onClick="addPlayer(${sq.id})" ><i class="far fa-heart"></i></button></th>
                    </tr>`;
                    number++;
                });

                $('.img-logo-wrapper').html(imageTeam);
                $('.team-name-one').html(nameTeam);
                $('.detail-info-team').html(detailTeam);
                $('.detail-squad-team').html(squadDetail);

            }
        )
    console.log('fetch dari team id');


}