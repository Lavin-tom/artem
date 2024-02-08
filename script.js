document.addEventListener("DOMContentLoaded", function() {
    var dotSizeSlider = document.getElementById("dotSizeSlider");
    var imagePreview = document.getElementById("imagePreview");
    var halftoneInstance;

    function createHalftoneInstance() {
        var options = {
            dotSize: parseFloat(dotSizeSlider.value),
            dotSizeThreshold: 0.05,
            initVelocity: 0.02,
            oscPeriod: 1,
            oscAmplitude: 0,
            isAdditive: false,
            isRadial: false,
            channels: ['red', 'green', 'blue','lum'],
            isChannelLens: true,
            friction: 0.06,
            hoverDiameter: 0.3,
            hoverForce: -0.02,
            activeDiameter: 0.6,
            activeForce: 0.01
        };

        halftoneInstance = new BreathingHalftone(imagePreview, options);
    }

    createHalftoneInstance();

    dotSizeSlider.addEventListener("input", function() {
        var dotSize = parseFloat(dotSizeSlider.value);
        halftoneInstance.options.dotSize = dotSize;
        halftoneInstance.render();
    });

    document.getElementById('imageInput').addEventListener('change', function(event) {
        handleImageUpload(event);
    });

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
                
                if (halftoneInstance) {
                    halftoneInstance.destroy();
                }
                createHalftoneInstance();
            };

            reader.readAsDataURL(file);
        }
    }
});
