document.getElementById('imageInput').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    const imagePreview = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreviewContainer.style.display = 'block'; 
        };

        reader.readAsDataURL(file);
    }
}

document.getElementById('convertBtn').addEventListener('click', function() {
    const imagePreview = document.getElementById('imagePreview');
    const img = imagePreview; 
    const options = {
        dotSize: 1/40,
        dotSizeThreshold: 0.05,
        initVelocity: 0.02,
        oscPeriod: 3,
        oscAmplitude: 0.2,
        isAdditive: false,
        isRadial: false,
        channels: ['red', 'green', 'blue'],
        isChannelLens: true,
        friction: 0.06,
        hoverDiameter: 0.3,
        hoverForce: -0.02,
        activeDiameter: 0.6,
        activeForce: 0.01
    };

    new BreathingHalftone(img, options);
});

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var dotSizeSlider = document.getElementById("dotSizeSlider");
    var previewCanvas = document.getElementById("previewCanvas");
    var halftoneInstance = new BreathingHalftone(previewCanvas, {
    });

    var imagePreview = document.getElementById("imagePreview");

    imagePreview.addEventListener("load", function() {
        halftoneInstance.options.image = imagePreview;
        halftoneInstance.render();
    });

    dotSizeSlider.addEventListener("input", function() {
        var dotSize = parseFloat(dotSizeSlider.value);
        halftoneInstance.options.dotSize = dotSize;
        halftoneInstance.render();
    });
});

