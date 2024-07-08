function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map element not found!');
        return;
    }
    // マップの初期化処理を行う
    const map = new google.maps.Map(mapElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}