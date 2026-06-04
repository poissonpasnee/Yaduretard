const fs = require('fs');

const data = {
  status: 'ok',
  message: 'Test GitHub OK',
  train_number: '000000',
  line: 'Bordeaux -> Toulouse -> Sete',
  station: 'Toulouse Matabiau',
  scheduled_time: '23:20',
  estimated_time: '23:20',
  track: 'Voie 1',
  source: 'github-test',
  updated_at: new Date().toISOString()
};

fs.writeFileSync('data/status.json', JSON.stringify(data, null, 2));
console.log('ok');
