let serverIP = '';
let isFetching = false;

function fetchConfig() {
    fetch('/config')
        .then(response => response.json())
        .then(config => {
            serverIP = config.serverIP;
        })
        .catch(error => console.error('Error fetching config:', error));
}

function sendCommand(command) {
    if (isFetching) return;
    isFetching = true;

    fetch(`http://192.168.1.213:3000/${command}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            isFetching = false;
        })
        .catch(error => {
            console.error('Error:', error);
            isFetching = false;
        });
}

fetchConfig();