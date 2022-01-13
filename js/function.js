function createPreview(file) {
    let imgCodified = URL.createObjectURL(file);
    let img = $('<div class = "add-photo-container"><div class = "photo-container"><figure> <img src = "' + imgCodified + '" alt = "Foto"><figcaption><i class="fas fa-times"></i></figcaption></figure></div></div>');
    $(img).insertBefore("#add-new-photo");
}