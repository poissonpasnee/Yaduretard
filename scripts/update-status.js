const fs = require('fs');
const path = require('path');

const now = new Date().toISOString();

const samples = [
  {
    status: 'ok',
    message: 'Début de service maintenu, aucun retard impactant détecté.',
    train_number: '876201',
    line: 'Bordeaux → Toulouse → Sète',
    station: 'Toulouse Matabiau',
    scheduled_time: '23:20',
    estimated_time: '23:20',
    track: 'Voie 1',
    source: 'github-simulation',
    updated_at: now
  },
  {
    status: 'delay',
    message: 'Retard estimé de 12 min sur le train utile pour Toulouse Matabiau.',
    train_number: '876251',
    line: 'Bordeaux → Toulouse → Sète',
    station: 'Toulouse Matabiau',
    scheduled_time: '23:20',
    estimated_time: '23:32',
    track: 'Voie 1',
    source: 'github-simulation',
    updated_at: now
  },
  {
    status: 'unknown',
    message: 'Trafic perturbé, estimation à confirmer.',
    train_number: '876299',
    line: 'Bordeaux → Toulouse → Sète',
    station: 'Toulouse Matabiau',
    scheduled_time: '23:20',
    estimated_time: null,
    track: 'Voie 2',
    source: 'github-simulation',
    updated_at: now
  }
];

const sample = samples[Math.floor(Math.random() * samples.length)];
const output = path.join(__dirname, '..', 'data', 'status.json');

fs.writeFileSync(output, JSON.stringify(sample, null, 2) + '
');
console.log('status.json updated');
