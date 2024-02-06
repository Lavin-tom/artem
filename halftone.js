function convertToHalftone(imageData, threshold) {
    const { width, height, data } = imageData;

    const halftoneData = new ImageData(width, height);

    for (let i = 0; i < data.length; i += 4) {

        const grayValue = (data[i] + data[i + 1] + data[i + 2]) / 3;
		
        const pixelValue = grayValue > threshold ? 255 : 0;

        halftoneData.data[i] = pixelValue; 
        halftoneData.data[i + 1] = pixelValue;   
        halftoneData.data[i + 2] = pixelValue; 
        halftoneData.data[i + 3] = 255;        
    }

    return halftoneData;
}
