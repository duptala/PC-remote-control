# PC Remote Controller

## Overview

Remote Controller is a Node.js application that allows you to control video playback on your computer using your phone or any other device connected to your local network. It's ideal for situations like watching videos on your computer while lying in bed or sitting away from your desk.

## Features

- Play/Pause video playback.
- Rewind and forward video.
- Control volume.

## Prerequisites

- Python version 3.10 or below (Python 3.12 is not compatible).
- Node.js version 16 or below.

## Installation

1. **Clone the Repository**:

`git clone https://github.com/duptala/PC-remote-control.git`
`cd PC-remote-control`

2. **Install Dependencies**:
   `npm install`

3. **Set Up Environment Variables**:

- Create a `.env` file in the root directory.
- Find your computer's local IP address using `ipconfig` (look for IPv4 Address).
- Add your IP address to the `.env` file:
  ```
  SERVER_IP=your.local.IP.address
  ```

## Usage

1. **Start the Server**:
   `npm start`

   This will start the server on your local machine.

2. **Access the Interface**:

- On any device connected to the same network, open a web browser.
- Navigate to `http://your.local.IP.address:3000`.
- Example: `http://192.168.1.213:3000`.

3. **Control Your Videos**:

- Use the interface presented to play/pause, rewind, forward, or adjust the volume of the video playing on your computer.

## Security Note

This application is designed for use within a secure local network. Do not expose the server to the public internet, as it could pose security risks.
