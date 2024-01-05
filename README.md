# PC Remote Controller

## Overview

PC Remote Controller is an Electron and Node.js application that allows you to control video playback on your computer using your phone or any other device connected to your local network. It's ideal for managing video playback from the comfort of your bed or couch.

## Features

- Play/Pause video playback.
- Rewind and fast-forward video.
- Control system volume.

## Prerequisites

- Python (version 3.10 was verified to work; other versions might be compatible).
- Node.js (version 16.17.0 was used; later versions might also be compatible).
- Electron for desktop application functionality.

## Installation

1. **Clone the Repository**:

```
git clone https://github.com/duptala/PC-remote-control.git
cd PC-remote-control
```

2. **Install Dependencies**:

```
npm install
```

3. **Rebuild RobotJS for Electron Compatibility**:

```
npm run rebuild
```

4. **Set Up Environment Variables**:

- Rename the `.envtemplate` file to `.env`.
- Find your computer's local IP address (IPv4) using `ipconfig` on Windows or `ifconfig` on macOS/Linux.
- Edit the `.env` file and replace the placeholder with your actual local IP address. For example:
  ```
  SERVER_IP=192.168.1.213
  ```
- Save the `.env` file with your changes.

## Usage

1. **Start the Server**:

```
npm start
```

This command starts the server on your local machine and opens the Electron application.

2. **Access the Interface**:

- On any device connected to the same network, open a web browser.
- Navigate to `http://your.local.IP.address:3000`.
- Example: `http://192.168.1.213:3000`.

3. **Control Your Videos**:

- Use the web interface presented to play/pause, rewind, forward, or adjust the volume of the video playing on your computer.

## Contributing

Contributions to the PC Remote Controller project are welcome! Feel free to submit pull requests or create issues for bugs and feature suggestions.

## Security Note

This application is designed for use within a secure local network. Do not expose the server to the public internet, as it could pose security risks.
