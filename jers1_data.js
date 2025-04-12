var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/SAR')
              	.filter(ee.Filter.date('2017-01-01', '2018-01-01')); \\ дата устанавливается по желанию
var sarHh = dataset.select('HH');
var sarHhVis = {
  min: 0.0,
  max: 10000.0,
};
Map.setCenter(136.85, 37.37, 4);
Map.addLayer(sarHh, sarHhVis, 'SAR HH');
 
// Применение фильтра для уменьшения шума
var sarHhFiltered = sarHh.map(function(image) {
  return image.focalMean(30, 'circle', 'meters');
});
 
// Преобразование в децибелы
var sarHhDb = sarHhFiltered.map(function(image) {
  return image.log10().multiply(10);
});
 
// Визуализация с новыми параметрами
var sarHhDbVis = {
  min: -50,
  max: 50,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};
 
Map.addLayer(sarHhDb, sarHhDbVis, 'SAR HH (dB)');
