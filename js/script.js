// إنشاء الخريطة
const map = L.map('map').setView([15.5007, 32.5599], 11);

// Basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// بيانات تجريبية (زي properties عندك)
const properties = [
  {
    id: 1,
    name: "أرض 1",
    status: "Built",
    polygon: [
      [15.51, 32.56],
      [15.52, 32.56],
      [15.52, 32.57],
    ]
  },
  {
    id: 2,
    name: "أرض 2",
    status: "Empty",
    polygon: [
      [15.49, 32.54],
      [15.50, 32.55],
      [15.51, 32.54],
    ]
  }
];

// لون حسب الحالة
function getStyle(status) {
  if (status === "Built") {
    return { color: "#1b7f4b", fillColor: "#5ee07c", fillOpacity: 0.4 };
  }
  return { color: "#c62828", fillColor: "#ffb3b3", fillOpacity: 0.5 };
}

// رسم العقارات
properties.forEach(p => {

  const polygon = L.polygon(p.polygon, getStyle(p.status)).addTo(map);

  polygon.bindPopup(`
    <h3>${p.name}</h3>
    <p>📌 الحالة: ${p.status}</p>
    <a href="#" class="popup-btn">عرض التفاصيل</a>
  `);

});