export const insertTeam = async (playerOne, playerTwo) => {
    const serverResponse = await fetch('http://194.135.92.216:4000/insert-team', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            playerOne: playerOne,
            playerTwo: playerTwo
        }) // body data type must match "Content-Type" header
    });
    const jsonResp = await serverResponse.json();
    return jsonResp;
}

export const getRegisteredTeams = async () => {
    const serverResponse = await fetch('http://194.135.92.216:4000/get-teams', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    const jsonResp = await serverResponse.json();
    return jsonResp;
}