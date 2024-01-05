let serverIP = '';
let isFetching = false;

async function fetchConfig() {
    try {
        const response = await fetch('/config');
        const config = await response.json();
        serverIP = config.serverIP;
    } catch (error) {
        console.error('Error fetching config:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const volumeButtons = document.querySelectorAll('.vol-up, .vol-down, .rewind, .forward');
    
    volumeButtons.forEach(button => {
        button.addEventListener('touchstart', (event) => {
            event.preventDefault(); // Prevents the default touch behavior, like zooming
            const command = button.getAttribute('data-command');
            sendCommand(command);
        });
    });
});

const sendCommand = async (command) => {
    if (isFetching) return;
    isFetching = true;

    try {
        const response = await fetch(`http://${serverIP}:3000/${command}`);
        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        isFetching = false;
    }
};

fetchConfig();