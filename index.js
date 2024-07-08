function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map element not found!');
        return;
    }
    // マップの初期化処理を行う
    const map = new google.maps.Map(mapElement, {
        center: {
            lat: -34.397, //経度
            lng: 150.644 //緯度
        },
        zoom: 2
    });

    // マーカーの追加
    const marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 }, // マーカーを立てる位置の指定
      map: map // マーカーを立てる地図の指定
   });
}