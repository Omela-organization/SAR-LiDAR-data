Export.image.toCloudStorage({
  image: sarHhDb.mean(),
  description: 'SAR_HH_2017_dB',
  bucket: 'your-bucket-name', // Имя вашего бакета в Google Cloud Storage
  fileNamePrefix: 'SAR_HH_2017_dB',
  region: Map.getBounds(true),
  scale: 30,
  maxPixels: 1e13
});
