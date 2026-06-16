# zeug und quer Doku

Version 1.0

## Willkommen
Die Doku zeigt euch, wie ihr die wichtigsten Inhalte an der Website selbständig bearbeiten könnt. Die Doku wird mit Projektabschluss weiterausgebaut.
Sollten Inhalte hier fehlen, bitte umgehend kontaktieren.



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Dokumentation Content Management

- [Gallerie](#gallerie)
- [Aktuelles](#aktuelles)
- [Steckbrief](#steckbrief)
- [Sponsoren](#sponsoren)
- [Con Anima Konzert](#con-anima-konzert)
- [Singende Hände Konzerte und Proben](#singende-hände-konzerte-und-proben)
- [MusiCasa Projekte](#musicasa-projekte)
- [Navigationshintergründe](#navigationshintergründe)


## Gallerie

### Vorbereitung
- Die Bilder komprinieren mit [Image Compressor](https://image.pi7.org/compressor)
- Es werden jpg, jpeg, png für die Gallerie unterstützt

### Bilder hinzufügen

- In den Projektordner gehen und nach src->assets->images navigieren.
- Im Projektunterordner im high_quality-Ordner die Originalbild Datei hochladen
- Im Projektunterordner das komprimierte Bild hochladen

### Bilder entfernen
- Hochauflösendes und entsprechend das komprimierte Bild aus der Ordnerstruktur löschen

```JSON
├── src
│   ├── assets
│   │   ├── assets
│   |   |   ├── images
│   |   |   |   ├── [projekt_unterseite]
│   |   |   |   |   ├── Pi7compressed[image_name0].jpg
│   |   |   |   |   ├── Pi7compressed[image_name1].jpg
│   |   |   |   |   ├── Pi7compressed[image_name2].jpg
│   |   |   |   |   ├── high_quality
│   |   |   |   |   |   ├── image_name0.jpg
│   |   |   |   |   |   ├── image_name1.jpg
│   |   |   |   |   |   ├── image_name2.jpg
```

### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)

### Good to know:
- Es werden primär die komprimierten Bilder genommen.
- Es sollten immer gleich viele komprimierte und hochauflösende Bilder geben.

## Aktuelles

Wie können neue Aktuelles-Einträge erstellt, bearbeitet oder gelöscht werden.

### Vorbereitung

In den Ordner `src->assets->data->vereinszeug->aktuelles.json` navigieren.

Die Aktuelles Karten werden basierend auf der Reihenfolge in dieser Datei angezeigt.

### JSON Aufbau

| Variable          |           Inhalt            | Pflichtfeld |
|:------------------|:---------------------------:|------------:|
| title             |          Titeltext          |           ✅ |
| image_path        | public/images/.../image.jpg |           ✅ |
| short_description |            text             |           ❌ |
| long_description  |         langer text         |           ✅ |
| date              |            text             |           ✅ |

#### JSON Beispiel
```yaml
{
      "title": "OCA - Konzert und Innovationsfonds",
      "image_path": "/images/musi_casa/Pi7compressed018_DSC04701.jpg",
      "short_description": "Innovative Musik: Orchester con anima erhält Förderung und lädt zur Sommerserenade",
      "long_description": "Das Orchester con anima erhält den Innovationsfonds des Ministeriums für Wissenschaft, Forschung und Kunst Baden-Württemberg für ein geplantes Side-by-Side-Projekt mit Studierenden der Musikhochschule. Das Projekt wird in einem gemeinsamen Konzert im Juni 2019 münden. Nun lädt das Ensemble zunächst zu seiner Sommerserenade am 22. August 2018, 19.30h im Historischen Kaufhaus am Münsterplatz ein!",
      "date": "06.05.2023"
}
```
### Einfügen und Bearbeiten
Um einen neuen Eintrag hinzuzufügen, über den obersten Eintrag, folgendes Template einfügen und bearbeiten:
```yaml
{
      "title": "Titel",
      "image_path": "/images/.../bildname.jpg",
      "short_description": "Kurze Beschreibung",
      "long_description": "Lange Beschreibung",
      "date": "01.01.2026"
},
```
#### Bild hinzufügen
Dafür in den `public->data->images->aktuelles`-Ordner navigieren und das passende Bild hochladen.



### Löschen eines Eintrags
In dem Fall einen Eintrag komplett inklusive der direkt umklammerden `{ }` einfach herauslöschen.

### Good to know
- Die Einträge müssen zwischen `{ }` mit einem Komma getrennt werden.
- Keine Zeilenumbrüche in einem Fließtext hinzufügen. Bestenfalls den Text vorher in einem Texteditor schreiben und ohne Formatierung einfügen


### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)



## Steckbrief
Wie können Steckbriefe bearbeitet werden.

### Vorbereitung

In den Ordner `src->assets->data->projekt_unterseite->projekt_steckbrief.json` navigieren.

### JSON Aufbau

#### Inhalt

| Variable          |                Inhalt                | Pflichtfeld |
|:------------------|:------------------------------------:|------------:|
| title             |              Titeltext               |           ✅ |
| foundingYear      |                 text                 |           ✅ |
| concertsPerYear   |                 text                 |           ✅ |
| responsible       |                 text                 |           ✅ |
| projects          |                 text                 |           ✅ |
| projects.title    |                 text                 |           ❌ |
| projects.subitems | Liste mit text, durch Komma getrennt |           ❌ |

#### Styling
| Variable             |  Inhalt   | Pflichtfeld |
|:---------------------|:---------:|------------:|
| containerBg          | css-style |           ✅ |
| headerTextColor      | css-style |           ✅ |
| titleTextColor       | css-style |           ✅ |
| badgeTitleBg         | css-style |           ✅ |
| badgeTitleText       | css-style |           ✅ |
| badgeYearBg          | css-style |           ✅ |
| badgeYearText        | css-style |           ✅ |
| boxBg                | css-style |           ✅ |
| sectionTitleColor    | css-style |           ✅ |
| textColor            | css-style |           ✅ |
| subTextColor         | css-style |           ✅ |
| concertsBoxBg        | css-style |           ✅ |
| concertsTextColor    | css-style |           ✅ |
| responsibleBoxBg     | css-style |           ✅ |
| responsibleTextColor | css-style |           ✅ |

- für die Texte wird beim CSS-Styling der prefix `text-` verwendet
- für die Hintergründe wird der prefix `bg-` verwendet
- gefolgt von `[#hexcode]` und optional `/number` um die Saturation abzuschwächen
- allgemein kann hier jeder gewünschte CSS code eingefügt werden. Als Unterstützung bieten sich jegliche AI-Tools wie ChatGPT, Claude oder Gemini an.


#### JSON Beispiel
```yaml
{
  "title": "zeug und quer e.V.",
  "foundingYear": "2015",
  "concertsPerYear": "ca. 15–20 Konzerte pro Jahr",
  "responsible": "Vereinsvorstand: Katharina Schmauder, Samira Nowarra, Hansjörg Schmauder",
  "projects": [
    {
      "title": "6 dauerhafte Projekte, etliche einmalige Initiativen und Projekt-Starthilfen insbesondere in den Bereichen:",
      "subitems": [
        "Kulturelle Bildung und Teilhabe",
        "Inklusion",
        "Musikvermittlung in postmigrantischen Communities"
      ]
    }
  ],
  "colors": {
    "containerBg": "bg-gradient-to-br from-[#B8C8D6]/60 via-[#E9EEF3]/80 to-white shadow-md border border-[#3F6576]/30 rounded-2xl",
    "headerTextColor": "text-[#12243D]",
    "titleTextColor": "text-[#12243D]",
    "badgeTitleBg": "bg-[#F5E7B2]",
    "badgeTitleText": "text-[#162A4B]",
    "badgeYearBg": "bg-[#3F6576]",
    "badgeYearText": "text-white",
    "boxBg": "bg-white/85 backdrop-blur-sm shadow-md",
    "sectionTitleColor": "text-[#2C4D67]",
    "textColor": "text-[#1F1F1F]",
    "subTextColor": "text-[#3A3A3A]",
    "concertsBoxBg": "bg-[#F5E7B2]/70",
    "concertsTextColor": "text-[#162A4B]",
    "responsibleBoxBg": "bg-[#C4D1DF]/60",
    "responsibleTextColor": "text-[#162A4B]"
  }
}
```
### Bearbeiten
- Zum Bearbeiten, den Inhalt einer Variable einfach überschreiben.
- Für die Subitems muss jeder Bulletpoint mit einem Komma getrennt werden.
- Für die Farben kann einfach der [Colorpicker](https://www.google.com/search?client=opera&q=hex+color+picker&sourceid=opera&ie=UTF-8&oe=UTF-8) für den Hex-Code verwendet werden. Dann muss nur der Inhalt innerhalb der `[]` ausgetauscht werden


### Good to know
- Die Einträge müssen zwischen `{ }` mit einem Komma getrennt werden.
- Keine Zeilenumbrüche in einem Fließtext hinzufügen. Bestenfalls den Text vorher in einem Texteditor schreiben und ohne Formatierung einfügen


### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)



## Sponsoren

Wie können Sponsoren hinzugefügt und bearbeitet werden.

### Vorbereitung

In den Ordner `src->assets->data->projekt_unterseite->projekt_content.json` navigieren.

### JSON Aufbau

| Variable |        Inhalt         | Pflichtfeld |
|:---------|:---------------------:|------------:|
| id       | fortlaufende Ganzzahl |           ✅ |
| url      |         text          |           ✅ |
| name     |         text          |           ❌ |
| current  |        boolean        |           ✅ |

- die ID muss fortlaufend erhöht werden, startend von 1
- ein boolean hat entweder den Wert `true` oder `false` - dieser bestimmt, ob ein Sponsor aktuell oder der Vergangenheit angehört.
  Aktuelle Sponsoren werden farbig dargestellt und vergangene sind ausgegraut.


#### JSON Beispiel
```yaml
{
      "id": 1,
      "url": "aventis",
      "name": "Sponsor 1",
      "current": true
},
```

### Welche URL für welchen Sponsor

Die URL ist notwendig um die passende Grafik zu laden.

Folgende Sponsoren stehen zur Verfügung;

#### Sponsorenliste
| URL                       |                          Sponsor                           |
|:--------------------------|:----------------------------------------------------------:|
| aventis                   |                     Aventis Foundation                     |
| bundesregierung           |                      Bundesregierung                       |
| bwKunst                   |  Baden-Württemberg für Wissenschaft, Forschung und Kunst   |
| bwSoziales                | Baden-Württemberg für Soziales, Gesundheit und Integration |
| deutscheOrchesterStiftung |                Deutsche Orchester Stiftung                 |
| kulturStiftungDerLaender  |                 Kulturstiftung der Länder                  |
| kulturamtFreiburg         |                     Kulturamt Freiburg                     |
| lbbw                      |           Stiftung Landesbank Baden-Württemberg            |
| neustartkultur            |                       Neustartkultur                       |
| prohelvetia               |            Schweizer Kulturstiftung prohelvetia            |
| sickStiftung              |             Renate und Waltraut Sick Stiftung              |
| sparkasse                 |                         Sparkasse                          |

### Bearbeiten
Oben stehendes Beispiel verwenden, um einen neuen Eintrag zu machen.

Wenn veralteter Sponsor den Wert bei current auf `false`setzen.


### Good to know
- Die Einträge müssen zwischen `{ }` mit einem Komma getrennt werden.
- Keine Zeilenumbrüche in einem Fließtext hinzufügen. Bestenfalls den Text vorher in einem Texteditor schreiben und ohne Formatierung einfügen


### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)



## Con Anima Konzert

Wie können Con Anima Konzerte hinzugefügt, gelöscht und bearbeitet werden.

### Vorbereitung

In den Ordner `src->assets->data->con_anima->con_anima_concerts.json` navigieren.

### JSON Aufbau

| Variable |        Inhalt         | Pflichtfeld |
|:---------|:---------------------:|------------:|
| title       | text |           ✅ |
| date      |         text          |           ✅ |
| location     |         text          |           ✅ |
| mapsUrl  |        mapsURL        |           ✅ |

- die maps url ist der Link beim Teilen einer Location von Google Maps


#### JSON Beispiel
```yaml
  {
    "title": "Con Anima Frühjahreskonzert",
    "date": "Samstag, 20.06, 11:30 Uhr",
    "location": "Stadthalle Graz",
    "mapsUrl": "https://www.google.com/maps/place/Stadthalle+Graz"
  },
```

### Bearbeiten
Oben stehendes Beispiel verwenden, um einen neuen Eintrag zu machen und Inhalte entsprechen aktualisieren.

Die Reihenfolge ist abhängig, wie es in dieser Datei eingetragen wird.


### Good to know
- Die Einträge müssen zwischen `{ }` mit einem Komma getrennt werden.
- Keine Zeilenumbrüche in einem Fließtext hinzufügen. Bestenfalls den Text vorher in einem Texteditor schreiben und ohne Formatierung einfügen


### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)


## Singende Hände Konzerte und Proben

identisch zu [Con Anima Konzerten](#con-anima-konzert). Die Datei befindet sich entsprechend im Unterordner `singing_hands`


## MusiCasa Projekte

Wie können neue MusiCasa-Projekte erstellt, bearbeitet oder gelöscht werden.

### Vorbereitung

In den Ordner `src->assets->data->musi_casa->musicasa_projects.json` navigieren.

Die Projekt Karten werden basierend auf der Reihenfolge in dieser Datei angezeigt.

### JSON Aufbau

| Variable |  Inhalt  | Pflichtfeld |
|:-----|:--------:|------:|
| title   | Titeltext| ✅ |
| image_path   |  public/images/.../image.jpg  |   ✅ |
| date   | text |    ✅ |
| long_description   | langer text |    ✅ |
| responsible   | Liste an text durch Komma getrennt |    ✅ |

#### JSON Beispiel
```yaml
  {
    "title": "Ein Haus aus Klang",
    "image_path": "/images/musi_casa/Pi7compressed014_DSC04682.jpg",
    "date": "12.10.2025",
    "long_description": "\"Wir bauen ein Haus aus Klang\" - Unter diesem Motto sollen im Juli und September jeweils dreitätige Workshops stattfinden, bei denen Kinder verschiedenster kultureller Hintergründe zusammenkommen und gemeinsam aus Alltagsmaterialien eine Klangskulptur bauen. Woraus die Skulptur besteht, dem sind kaum Grenzen gesetzt. Denn auch vermeintlicher Müll ist oft der ideale Klanggeber bei einem solchen Rieseninstrument. Das Alltagsmaterial wird hierbei also mit anderen 'Ohren' erkundet und bewerkelt. Zu Beginn bauen die Kinder in kleinen Gruppen daraus verschiedene Instrumente, die am Ende zu einer Großen Skulptur zusammengebracht werden. Während der drei Tage wird hierauf in unterschiedlichster Weise Musik gemacht: Durch gemeinsame Improvisationen und dem Komponieren eigener Stücke. Damit rückt neben der Sensibilisierung zum Gegenständlichen auch das sozialen Interagieren in der Gruppe in den Fokus. Und zwar sowohl im gemeinsamen Konstruieren und Planen auf sprachlicher Ebene, wie im instrumental-musikalischen auf non-verbaler Ebene.",
    "responsible": [
      "Anna Müller",
      "Lukas Braun",
      "Mara Stein"
    ]
},
```
### Einfügen und Bearbeiten
Um einen neuen Eintrag hinzuzufügen, über den obersten Eintrag, folgendes Template einfügen und bearbeiten:
```yaml
  {
    "title": "Titel",
    "image_path": "/images/musi_casa/bild.jpg",
    "date": "12.10.2025",
    "long_description": "lange Beschreibung",
    "responsible": [
      "Person 1",
      "Person 2"
    ]
  },
```
#### Bild hinzufügen
Dafür in den `public->data->images->musi_casa`-Ordner navigieren und das passende Bild hochladen.


### Löschen eines Eintrags
In dem Fall eine Eintrag komplett inklusive der direkt umklammerden `{ }` einfach rauslöschen.

### Good to know
- Die Einträge müssen zwischen `{ }` mit einem Komma getrennt werden.
- Die Einträge bei `responsible`müssen mit einem Komma getrennt werden
- Keine Zeilenumbrüche in einem Fließtext hinzufügen. Bestenfalls den Text vorher in einem Texteditor schreiben und ohne Formatierung einfügen


### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)



## Navigationshintergründe

### Vorbereitung
Navigiere zu `src->assets->images->navigation`

### Bearbeitung

Sollten andere Hintergründe gewünscht werden oder noch Logos hinzugefügt werden, muss entsprechend das Bild hier überschrieben werden.

**Wichtig** der Dateiname der Bilder darf **NICHT** verändert werden.

Es werden jpeg, png, jpg unterstützt.

Beachtet, dass Bilder verwendet werden, die mit unterschiedlichen Bildschirmformaten funktionieren sollen.


### Nachbereitung
- Lokal testen und Projekt bauen, siehe [Projekt Setup](#project-setup)