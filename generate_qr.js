const QRCode = require('qrcode');
const sharp = require('sharp');
const fs = require('fs');

async function generateQRWithLogo() {
  try {
    const url = 'https://www.822athletics.com';
    const logoPath = 'C:\\Users\\deltabro\\Downloads\\Photo Apr 03 2019, 10 56 53 AM.png';
    const outputPath = '822athletics_qr_code.png';

    // Generate QR code as buffer with high error correction
    const qrBuffer = await QRCode.toBuffer(url, {
      errorCorrectionLevel: 'H',
      type: 'png',
      width: 600,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });

    // Get QR code dimensions
    const qrImage = sharp(qrBuffer);
    const qrMetadata = await qrImage.metadata();

    // Calculate logo size (about 1/5 of QR code)
    const logoSize = Math.floor(qrMetadata.width / 5);

    // Create white square with padding - make it align properly to avoid black pixels showing
    const whiteSquareSize = Math.floor(qrMetadata.width / 3.2); // Slightly larger for clean edges
    const whiteSquare = await sharp({
      create: {
        width: whiteSquareSize,
        height: whiteSquareSize,
        channels: 3,
        background: { r: 255, g: 255, b: 255 }
      }
    }).png().toBuffer();

    // Resize logo with white background
    const resizedLogo = await sharp(logoPath)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toBuffer();

    // Calculate position to center the white square
    const whiteSquarePosition = {
      left: Math.floor((qrMetadata.width - whiteSquareSize) / 2),
      top: Math.floor((qrMetadata.height - whiteSquareSize) / 2)
    };

    // Calculate position to center the logo
    const logoPosition = {
      left: Math.floor((qrMetadata.width - logoSize) / 2),
      top: Math.floor((qrMetadata.height - logoSize) / 2)
    };

    // Composite white square first, then logo on top
    const finalImage = await sharp(qrBuffer)
      .composite([
        {
          input: whiteSquare,
          left: whiteSquarePosition.left,
          top: whiteSquarePosition.top
        },
        {
          input: resizedLogo,
          left: logoPosition.left,
          top: logoPosition.top
        }
      ])
      .toFile(outputPath);

    console.log(`QR code generated successfully: ${outputPath}`);
    console.log(`Size: ${finalImage.width}x${finalImage.height}`);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
}

generateQRWithLogo();
