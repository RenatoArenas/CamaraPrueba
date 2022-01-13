$(document).ready(function() {

    $(document).on("click", "#add-new-photo", function() {
        $("#imgInput").click();
    });

    $(document).on("change", "#imgInput", function() {
        console.log(this.files);
        let files = this.files;
        let element;
        let validatedImages = ["image/png", "image/jpeg", "image/svg"];
        let elementsNoValids = false;

        for (let i = 0; i < files.length; i++) {
            element = files[i];

            if (validatedImages.indexOf(element.type) != -1) {
                createPreview(element);
            }
            else {
                elementsNoValids = true;
            }
        }
    });
});