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


   // 吹き出しの内容を設定
   const infoWindow = new google.maps.InfoWindow({
    content: '<div>練馬区役所</div>'
    });

// マーカーをクリックしたときに吹き出しを表示する
marker.addListener('click', function() {
    infoWindow.open(map, marker);
});
}

// Google Maps APIのコールバック関数を指定
window.initMap = initMap;