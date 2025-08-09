package com.example.creamy.qr;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

public class QRCodeGenerator {
    public static void main(String[] args) {
        String coffeeShopUrl = "https://creamycaffe.netlify.app";
        String filePath = "coffee_qr.png"; // saved in project folder

        try {
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(coffeeShopUrl, BarcodeFormat.QR_CODE, 300, 300);

            Path path = FileSystems.getDefault().getPath(filePath);
            MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);

            System.out.println("✅ QR Code generated: " + filePath);
        } catch (WriterException | IOException e) {
            System.err.println("Error generating QR: " + e.getMessage());
        }
    }
}
