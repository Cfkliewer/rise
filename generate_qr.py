import qrcode
from PIL import Image
import os

# URL to encode
url = "https://www.822athletics.com"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # High error correction for logo overlay
    box_size=10,
    border=4,
)

# Add data
qr.add_data(url)
qr.make(fit=True)

# Create QR code image
qr_img = qr.make_image(fill_color="black", back_color="white").convert('RGB')

# Open logo image
logo_path = r"C:\Users\deltabro\Downloads\Photo Apr 03 2019, 10 56 53 AM.png"
logo = Image.open(logo_path)

# Calculate logo size (roughly 1/5 of QR code size)
qr_width, qr_height = qr_img.size
logo_size = qr_width // 5

# Resize logo
logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

# Calculate position to center logo
logo_pos = ((qr_width - logo_size) // 2, (qr_height - logo_size) // 2)

# Paste logo onto QR code
qr_img.paste(logo, logo_pos, logo if logo.mode == 'RGBA' else None)

# Save the final QR code
output_path = "822athletics_qr_code.png"
qr_img.save(output_path)

print(f"QR code generated successfully: {output_path}")
