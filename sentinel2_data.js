// Определите область интереса (AOI)
var aoi = ee.Geometry.Polygon(
[[[40.281715,54.915698],[40.622635,54.915698],[40.622635,54.775148],[40.281715,54.775148],[40.281715,54.915698]]]);

// Загрузите коллекцию Sentinel-2
var collection = ee.ImageCollection('COPERNICUS/S2_SR')  // Surface Reflectance (SR)
  .filterBounds(aoi)  // Фильтр по области интереса
  .filterDate('2022-08-01', '2022-08-31')  // Фильтр по дате
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10));  // Фильтр по облачности

// Выберите первое изображение из коллекции
var image = collection.first();

// Визуализация изображения
var visualization = {
  bands: ['B4', 'B3', 'B2'],  // RGB (красный, зеленый, синий)
  min: 0,
  max: 3000
};

// Добавьте изображение на карту
Map.centerObject(aoi, 10);  // Центрирование карты на AOI с масштабом 10
Map.addLayer(image, visualization, 'Sentinel-2 RGB');

// Выведите информацию о изображении
print('Изображение Sentinel-2:', image);
print('Количество изображений в коллекции:', collection.size());
// Экспорт изображения в Google Drive
Export.image.toDrive({
  image: image,
  description: 'Sentinel2_Export',
  folder: 'GEE_Exports',
  region: aoi,
  scale: 10,  // Разрешение (в метрах)
  maxPixels: 1e13
});
