# Ein Node-Typescript und Express-Server mit MONGODB-Verbindung

# 1. Initialisierung des Projekts

- Erstelle ein datei `server.js` im Projektverzeichnis.
- In Terminal:
  ```bash
  npm init -y
  ```
- in `package.json`:
  - Setze `"main": "server.js"` und `"type": "module"`.
  - Unter `"scripts"` füge `"start": "nodemon --env-file=.env server.js"` hinzu.
- Installiere die Abhängigkeiten:
  - dev dependencies:
  ```bash
  npm i typescript @types/node @types/express nodemon -D
  ```
- dependencies:
  ```bash
  npm i express mongoose
  ```
- führe den Befehl aus:
  ```bash
  npx tsc --init
  ```
  - dies erstellt eine `tsconfig.json` Datei. Diese Datei ist für die Konfiguration von TypeScript zuständig.
- Configuriere die `tsconfig.json` Datei:
  ```json
  {
    "compilerOptions": {
      "target": "ES2020",
      "module": "ESNext",
      "moduleResolution": "NodeNext",
      "outDir": "./dist",
      "rootDir": "./",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
  }
  ```
- installiere `rimraf`, um den `dist` Ordner zu löschen, wenn du den Befehl `npm run build` ausführst:
  ```bash
  npm i rimraf -D
  ```
- installiere `concurrently`, um mehrere Befehle gleichzeitig auszuführen:
  ```bash
  npm i concurrently -D
  ```
