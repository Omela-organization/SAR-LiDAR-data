Export.image.toDrive({
  image: sarHhDb.mean(),
  description: 'SAR_HH_2017_dB',
  folder: 'GEE_Exports', // Папка в Google Drive
  fileNamePrefix: 'SAR_HH_2017_dB',
  region: Map.getBounds(true),
  scale: 30,
  maxPixels: 1e13
});
