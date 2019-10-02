//設定中心點座標
var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 25.0477505, lng: 121.5170599 }
});
//顯示各區的點
var data = [
    {
        position: { lat: 25.08865, lng: 121.524396 },
        map: map,
        title: "士林觀光夜市"
    },
    {
        position: { lat: 25.055955, lng: 121.515059 },
        map: map,
        title: "寧夏觀光夜市"
    },
    {
        position: { lat: 25.038608, lng: 121.498443 },
        map: map,
        title: "華西街觀光夜市"
    },
    {
        position: { lat: 25.03676, lng: 121.497592 },
        map: map,
        title: "廣州街觀光夜市"
    },
    {
        position: { lat: 25.036341, lng: 121.497596 },
        map: map,
        title: "梧州街觀光夜市"
    },
    {
        position: { lat: 25.036768, lng: 121.50056 },
        map: map,
        title: "西昌街觀光夜市"
    },
    {
        position: { lat: 25.029151, lng: 121.505872 },
        map: map,
        title: "南機場夜市"
    },
    {
        position: { lat: 24.991503, lng: 121.541845 },
        map: map,
        title: "景美夜市"
    },
    {
        position: { lat: 25.050915, lng: 121.577515 },
        map: map,
        title: "饒河街觀光夜市"
    },
    {
        position: { lat: 25.030215, lng: 121.554209 },
        map: map,
        title: "臨江街觀光夜市"
    },
    {
        position: { lat: 25.067854, lng: 121.515871 },
        map: map,
        title: "大龍街夜市"
    },
    {
        position: { lat: 25.063353, lng: 121.511152 },
        map: map,
        title: "延三觀光夜市"
    },
    {
        position: { lat: 25.049081, lng: 121.542153 },
        map: map,
        title: "遼寧街夜市"
    },
    {
        position: { lat: 25.064292, lng: 121.524372 },
        map: map,
        title: "雙城街夜市"
    }
];
//跑迴圈依序將值塞入到 marker
for (let marker = [], i = 0; i < data.length; i++) {
    marker[i] = new google.maps.Marker(data[i]);
    console.log(marker[i].title);
    marker[i].addListener("click", function() {
        map.setZoom(15);
        map.setCenter(marker[i].getPosition());
        if (document.getElementById("mySelect").value !== marker[i].title) {
            document.getElementById("mySelect").value = marker[i].title;
            information();
            myFunction();
        }
    });
    document.getElementById("mySelect").addEventListener("change", function() {
        if (document.getElementById("mySelect").value == marker[i].title) {
            map.setZoom(15);
            map.setCenter(marker[i].getPosition());
        } else if (document.getElementById("mySelect").value == "請選擇") {
            map.setZoom(12);
            map.setCenter({ lat: 25.0477505, lng: 121.5170599 });
        }
    });
}
