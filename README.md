# Responsiv-Slider

Dette en responsiv bilde-sldier laget med React og Vite. Den viser forskjellige typer innhold, inkludert bilder, API-data og videoer, i en slider/karusellvisning. Brukeren kan navigere mellom lysbildene ved hjelp av "Neste" og "Forrige" knappene. 

## Hvordan kjøre dette prosjektet

Først må du klone prosjektet til din lokale maskin. Du kan gjøre dette ved å kjøre følgende kommando i terminalen:

```sh
git clone https://github.com/Konge5678/Responsiv-Slider.git
```

Så gå inn i prosjektet mappen:
```sh
cd Responsiv-Slider
```

Installer nødvendige avhengigheter ved å kjøre:
```sh
npm install
```

Når alle avhengighetene er installert, kan du starte prosjektet ved å kjøre:
```sh
npm run dev
```

Du vil da kunne se den i nettleseren din med å gå til `http://localhost:5173` 
Den skal også bli hostet på ip-en din eks: `http://192.158.1.38:5173/` du skal da også kunne åpne den på telefonen

## Slides

Den første sliden er et bilde med en bildetekst og kreditasjon for fotografen.

Den andre sliden er fortskjellig for brukeren er på Pc eller telefon/tablet. på Pc vil brukeren få opp en tilfeldig Chuck Norris vits hentet fra [chuckcorris.io](https://api.chucknorris.io/), mens hvis brukeren er på telefon/tablet vil den vise gps cordinatene til brukeren, altså Latitude og Longitude. Brukerens GPS-posisjon hentes ved hjelp av 
```sh 
navigator.geolocation.getCurrentPosition
```
funksjonen i nettleseren. Denne funksjonen er en del av Geolocation API som er innebygd i de fleste moderne nettlesere.
[shecodes.io](https://www.shecodes.io/athena/9970-retrieve-user-location-with-geolocation-in-react#:~:text=in%204.33%20seconds-,To%20retrieve%20the%20user's%20current%20location%20using%20geolocation%20in%20React,to%20handle%20the%20error%20case.) og [educative.io](https://www.educative.io/answers/how-to-use-geolocation-call-in-reactjs) var gode ressurser for å lære om å bruke Geolocation API-et. Obs! når du bruker telefon visning på pc hender det seg at du må refreshe siden for å få op gps kordinatene og hvis du hoster den på ip-en din å går inn på telefonen hender det seg at den ikke gir tilgang til gps siden den ser på siden som usikker.

Den tredje sliden har en youtube video som blir automatisk avspilt når brukeren er på den sliden. Jeg har gjort dette med å bygge inn youtube videoen i en iframe. den har funksjoner som : autoplay; clipboard-write; encrypted-media; gyroscope; og picture-in-picture"  
som tilater forskjellige funksjoner i iframe, som autoplay og picture-in-picture. Den har også allowFullScreen som tillater den å bli vist i fullskjerm. Obs! noen gange vis du bytter mellom pc og telefon view vil youtube video sliden henge seg opp så man må refreshe



