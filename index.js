// Get the button element
const joinBtn = document.getElementById('join-btn');
print(joinBtn)
// Add an event listener to the button
joinBtn.addEventListener('click', async () => {
    // Create a new QRCode reader instance
    const qrCodeReader = new ZXing.QRCodeReader();

    // Read the QR code from the camera stream
    const result = await qrCodeReader.read();

    // Check if the QR code was read successfully
    if (result) {
        // Extract the Wi-Fi credentials from the QR code data
        const wifiCredentials = result.data.split(',')[1];

        // Prompt the user to join the Wi-Fi network
        navigator.network.connect(wifiCredentials).then(() => {
            console.log('Connected to Wi-Fi network');
        }).catch((error) => {
            console.error('Error connecting to Wi-Fi network:', error);
        });
    } else {
        console.log('Failed to read QR code');
    }
});