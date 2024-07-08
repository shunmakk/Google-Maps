function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map element not found!');
        return;
    }
    // マップの初期化処理を行う
    const map = new google.maps.Map(mapElement, {
        center: {
            lat: 35.7356, //経度
            lng: 139.6516 //緯度
        },
        zoom: 15
    });

    // マーカーの追加
    const marker = new google.maps.Marker({
        position: { lat: 35.7356, lng: 139.6516 }, // マーカーを立てる位置の指定
      map: map // マーカーを立てる地図の指定
   });
}