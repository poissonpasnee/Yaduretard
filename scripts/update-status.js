const fs = require("fs");
const path = require("path");

function buildSampleStatus() {
  const now = new Date();

  return {
    gare: "Toulouse Matabiau",
    statut: "Service maintenu",
    statutCode: "ok",
    message: "Aucun retard bloquant détecté pour le dernier train surveillé.",
    train: {
      numero: "00000",
      origine: "Bordeaux",
      destination: "Toulouse",
      gareSuivie: "Toulouse Matabiau",
      voie: "1",
      heurePrevue: "23:20",
      heureEstimee: "23:20",
      retardMinutes: 0
    },
    service: {
      heureTheorique: "23:20",
      heureCorrigee: "23:20",
      impact: false
    },
    updatedAt: now.toISOString()
  };
}

function main() {
  const outputDir = path.join(process.cwd(), "data");
  const outputFile = path.join(outputDir, "status.json");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const sample = buildSampleStatus();

  fs.writeFileSync(
    outputFile,
    JSON.stringify(sample, null, 2),
    "utf8"
  );

  console.log(`status.json mis à jour : ${outputFile}`);
}

main();
