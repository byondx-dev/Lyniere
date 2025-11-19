import { motion, AnimatePresence } from "motion/react";
import { X, Home, Bath, ChefHat, Bed, MonitorPlay, Sofa, Briefcase, Baby, Shirt, Dumbbell, Car, Trees, Settings, Sparkles, Heart, Shield, Zap, Wrench, Star, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface CulturalFeaturesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  edition: "dojo" | "barakah";
}

const roomsData = {
  bathroom: {
    icon: Bath,
    name: "Bad / Master-Bathroom",
    totalFeatures: 40,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: [
          "Intelligente Dusche mit Profilen",
          "Automatisch gefüllte Badewanne",
          "Fußbodenheizung mit Szenen",
          "Warmwasser-Optimierung",
          "Handtuchwärmer",
          "Smart-Lichtstimmung",
          "Aromatherapie-System",
          "Smart Mirror",
          "Musik + Raumklang",
          "Ambient Fog Light",
          "Personalisierte Duschprofile für Familie"
        ]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: [
          "Luftqualitätssensoren",
          "Anti-Schimmel-AI",
          "Körperanalyse im Boden",
          "Hautanalyse über Spiegel",
          "Dampfbad-Optimierung",
          "Temperatur- & Luftfeuchtigkeitsmanagement",
          "Wasserqualitätsanalyse",
          "Wellness-Routinen durch KI"
        ]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: [
          "Wasserlecksensor & automatische Absperrung",
          "Rutschgefahr-Sensor",
          "Notfallknopf",
          "Rauch-/Hitze-Überwachung",
          "Spiegelenteisung",
          "Überschwemmungsschutz"
        ]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: [
          "Duschwasser-Optimierung (20-30% Einsparungen)",
          "Energieeffiziente Warmwassersteuerung",
          "Automatische Lüftung nur bei Bedarf",
          "Automatisches Fenster öffnen/schließen",
          "Grau-Wasser Nutzung",
          "Eco-Mode für Wasser & Energie"
        ]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: [
          "Füllstandssensoren (Shampoo, Duschgel, Seife)",
          "Smart-Reinigungsplan",
          "Automatische Toilettenreinigung",
          "Automatisches Entfeuchten",
          "Smart Storage",
          "Automatische Lichtsteuerung",
          "Sprachsteuerung für alle Funktionen"
        ]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: [
          "Hotel-Spa-Feeling",
          "Premium LED-Ambient-Setups",
          "Wasserfall-/Regenwald-Duschmodi",
          "Hochwertige Displays im Spiegel",
          "Intelligente Düfte für jeden Anlass",
          "Chromo-Therapie Beleuchtung"
        ]
      }
    ]
  },
  toilet: {
    icon: Home,
    name: "Toilette",
    totalFeatures: 30,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: [
          "Sanitärdeckel öffnet sich automatisch",
          "Sitzheizung",
          "Automatische Nachtbeleuchtung",
          "Geräuschmaskierung für Privatsphäre",
          "Personalisierte Nutzerprofile",
          "Ambientes LED-Licht",
          "Warmluft-Trocknung"
        ]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: [
          "Bidet-Funktionen mit Warmwasser",
          "UV-Desinfektion",
          "Geruchsanalyse + Luftsterilisation",
          "Hygiene-Sensoren",
          "Wasserdruck-Anpassung",
          "Gesundheitsanalyse (Urin/Stuhl)",
          "Antibakterielle Beschichtung"
        ]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: [
          "Geruchssensor (Schimmel, Ausgasungen)",
          "Wassersensor (Überlauf)",
          "Anwesenheitserkennung",
          "Notfallknopf",
          "Rutschschutz-Warnung"
        ]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: [
          "Wasserverbrauchsoptimierte Spülung",
          "Automatische Spülung nur bei Bedarf",
          "Eco-Spülmodus",
          "Energiespar-Heizung"
        ]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: [
          "Toilettenpapier-Füllstand",
          "Reinigungsplan",
          "Smart Ventilation",
          "Automatischer Deckel & Spülung",
          "Selbstreinigungsfunktion",
          "Fernbedienung per App"
        ]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: [
          "Japan-Style-Experience",
          "Duftprofile",
          "High-End Private Mode",
          "Premium Soundsystem"
        ]
      }
    ]
  },
  kitchen: {
    icon: ChefHat,
    name: "Küche",
    totalFeatures: 50,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: [
          "Smart Oven mit Rezept-Automatik",
          "Intelligente Dunstabzug-Szenen",
          "Ambient Cooking Lighting",
          "KI-Kochassistent",
          "Smart Kaffeemaschine",
          "Personalisierte Kochprofile",
          "Temperatursteuerung nach Rezept",
          "Automatische Küchenbeleuchtung",
          "Smart Herdplatten mit Touch-Control",
          "Induktionsherd mit Topferkennung"
        ]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: [
          "Allergieerkennung bei Rezepten",
          "Lebensmittelqualitätssensor",
          "Wasserhärte-/Filteranalyse",
          "Kalorienberechnung automatisch",
          "Nährwertanalyse",
          "Frischeerkennung"
        ]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: [
          "Brandmelder (Hitze, CO, Gas)",
          "Herd-Abschaltung bei Abwesenheit",
          "Überkoch-Sensor",
          "Rauchableitung automatisiert",
          "Kindersicherungen",
          "Messererkennung & Warnung",
          "Fettbrand-Detektion"
        ]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: [
          "Energieoptimierung aller Geräte",
          "Kühlschrankenergie-Management",
          "Geschirrspüler stromsparend",
          "Wasserverbrauchsoptimierung",
          "Mülltrennungssensor",
          "Standby-Killer Automatik",
          "Eco-Mode für alle Geräte",
          "Restwärme-Nutzung"
        ]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: [
          "Kühlschrank-Inhaltsanalyse",
          "Haltbarkeitsüberwachung",
          "Automatische Einkaufslisten",
          "Inventar Pantry",
          "Offene Herdplatte-Alarm",
          "Automatisierte Reinigung",
          "Müllpressensystem",
          "Sprachsteuerung für alle Geräte",
          "Automatische Backofenreinigung",
          "Rezeptvorschläge basierend auf Bestand"
        ]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: [
          "Smart Wine Storage",
          "KI-gestützte Menüs",
          "Smart Bar (Drink-Erkennung)",
          "Premium-Lichtdesign",
          "Sous-Vide Integration",
          "Gourmet-Kochmodi"
        ]
      }
    ]
  },
  bedroom: {
    icon: Bed,
    name: "Schlafzimmer",
    totalFeatures: 40,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: [
          "Smart Bed (automatische Positionierung)",
          "Circadian Lighting",
          "Vorhänge/Smart Glass automatisch",
          "Intime Lichtprofile",
          "Klanglandschaften (Sleep Mode)",
          "Massage-Bett Funktionen",
          "Personalisierte Weck-Szenarien",
          "Abendroutinen mit Licht & Musik",
          "Automatische Matratzen-Anpassung",
          "White Noise Generator"
        ]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: [
          "Atemanalyse",
          "Schnarcherkennung",
          "Temperaturzonen im Bett",
          "Luftqualität optimiert",
          "Vitalanalyse am Morgen",
          "Stress- & Erholungsmetriken",
          "Schlafphasen-Tracking",
          "Herzfrequenz-Monitoring",
          "Schlafqualitäts-Berichte",
          "Anti-Allergie Luftfilterung"
        ]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: [
          "Notfallknopf",
          "Einbruchsensorik",
          "Smarte Nachtbeleuchtung",
          "Fenster-/Türüberwachung",
          "Rauchmelder Integration",
          "Überwachung Bewegung (nachts)"
        ]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: [
          "Temperaturautomatik (20% Heizkosten sparen)",
          "Auto-Off aller Geräte beim Schlafen",
          "Smart Blinds Energieoptimierung",
          "Heizungs-/Kühlungs-Scheduling",
          "Standby-Killer"
        ]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: [
          "Reinigungsroboter startet beim Verlassen",
          "Kleidungsautomation im Schrank",
          "Persönliche Routinen",
          "Smart Mirror",
          "Paarprofile",
          "Automatische Bettwäsche-Erinnerung",
          "Sprachsteuerung"
        ]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: [
          "Hotel-Suite Feeling",
          "Premium Duftsystem",
          "Ambient Design",
          "Musik-Scapes",
          "Sternenhimmel-Projektion",
          "Luxus-Textilien Erkennung"
        ]
      }
    ]
  },
  cinema: {
    icon: MonitorPlay,
    name: "Kinozimmer",
    totalFeatures: 35,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Sitzheizung", "Ambient Backlighting", "Kino-Szenen", "Getränkeautomatik"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["Akustikoptimierung", "Luftqualität"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Notbeleuchtung", "Türverriegelung", "Überhitzungsschutz"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Automatische Energieoptimierung", "Projektorabschaltung"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["Filmstartszenen", "Popcorn-Modus", "Kinderprofile", "Gaming-Mode", "Multiuser Profile"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Vibration Seats", "Surround Sound High-End", "AR/VR Zusätze", "KI-Filmempfehlungen", "Luxury Popcorn Station"]
      }
    ]
  },
  living: {
    icon: Sofa,
    name: "Wohnzimmer",
    totalFeatures: 35,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Abgestimmte Beleuchtung", "Adaptive Temperatursteuerung", "Automatischer Vorhang", "Musikzonen", "Smart Fireplace", "Multi-Sitzpositionssteuerung"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["Luftqualitätssensorik", "Feinstaubfilterung", "Lichttherapieszenen"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Bewegungsmelder (mmWave)", "Fenster-/Türsicherung", "CO₂/CO/Feuerwarnung", "Glasbruchmelder", "Notfallbeleuchtung"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Auto-Off aller Geräte", "Fernseher Standby-Optimierung", "Temperaturprofile", "Rollosteuerung"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["TV hochfährt aus Möbeln", "Möbelmotoren", "Smarte Steckdosen", "Roboterstart", "Automatische Raumprofile"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Ambient Light", "Wandprojektion", "Unsichtbare Lautsprecher", "Mood Walls", "KI-gestützte Deko-Ideen"]
      }
    ]
  },
  office: {
    icon: Briefcase,
    name: "Arbeitszimmer",
    totalFeatures: 30,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Intelligente Schreibtisch-Höhenverstellung", "Perfekte Arbeitsbeleuchtung", "Automatische Beschattung"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["Ergonomie-Erkennung", "Pausen-/Stretch-Erinnerungen", "Luftqualitätssensorik", "Circadian Lighting"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Zugangskontrolle (FaceID/RFID)", "Dokumentensicherung", "Rauch- & Überhitzungswarnung"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["PC/Monitor Auto-Off", "Klimasteuerung optimiert", "Energieverbrauchsmonitoring"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["KI-Assistent für Organisation", "Smart Whiteboard", "Voice-to-Notes", "Automatische Video-Call Beleuchtung", "Akustikoptimierung"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Luxus-Materialien", "Unsichtbare Technik-Panels", "Präsentations-/Pitch-Modus", "Personal AI Butler"]
      }
    ]
  },
  kids: {
    icon: Baby,
    name: "Kinderzimmer",
    totalFeatures: 40,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: [
          "Automatische Abend-Dimmbeleuchtung",
          "Sanftes Einschlaf-Licht (Sunset Simulation)",
          "Smart-Nachtlicht (aktiviert sich bei Bewegung)",
          "Musik-Einschlafmodus (Sleep Songs / White Noise)",
          "Temperaturprofil für Kinder (wärmer, sicherer)",
          "Lernmodus-Beleuchtung (fokussiert, augenschonend)",
          "Schul-/Kita-Wecker mit Licht- & Musikprofil",
          "Kreativmodus (Zeichen- & Kunstlicht)"
        ]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: [
          "Luftqualitätssensor (CO₂, VOC, Feinstaub)",
          "Allergensensor für Pollen & Staub",
          "Geräuschanalyse (Weinen, Schreien, Unruhe)",
          "Atemüberwachung (Kontaktlos, mmWave-basierend)",
          "Schnarcherkennung für Kinder",
          "Luftbefeuchter Automatik für gesunden Schlaf",
          "Temperatursteuerung während Schlafphasen",
          "Gute-Nacht-Sensorik (überwacht Luft, Temperatur, Geräusche)"
        ]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: [
          "Smart-Heizung mit Sicherheitssperre",
          "Fensterkontakt + automatische Abschaltung bei offenem Fenster",
          "Kindersichere Steckdosen (smart überwachbar)",
          "Smart-Bett-Bewegungserkennung (aus dem Bett aufgestanden?)",
          "Baby-/Kleinkind-Monitoring ohne Kamera (Radar-basiert)",
          "Sicherheitssensor an Tür (Ein-/Ausgehen erkannt)",
          "Elternbenachrichtigungen bei ungewöhnlichen Ereignissen",
          "Motion-Sick/Overheat-Alarme (bei heißem Wetter)"
        ]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: [
          "Automatische Abschaltung aller Geräte beim Schlafen",
          "Smart-Fenster (öffnet/schließt automatisch wegen Luftqualität)",
          "Automatische Raumreinigung durch Reinigungsroboter"
        ]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: [
          "Spielzeug-Tracking per RFID (Finde-Spielzeug-Funktion)",
          "Hausaufgaben-Assistant (Stimme + Display)",
          "Smart-Schrank (Kleidungserkennung + Erinnerung bei Restbestand)",
          "Room-Tidy-Mode (Aufräumhilfe – sprachgestützt)",
          "Good Night-Routine (schließt Vorhänge, dimmt Licht, startet Musik)",
          "Smart-Spielzeugkiste (zeigt was drin ist)",
          "Kinderprofil für Sicherheit & Inhalte",
          "Smart-Audiofilter (Blockiert laute Geräusche draußen)"
        ]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: [
          "Lernspiele über Wandprojektion",
          "Interaktive digitale Geschichten an Wand/Decke",
          "Digitaler Sternenhimmel an der Decke",
          "Bilderbuch-Projektion an die Wand",
          "KI-Geschichten Erzähler (Storytelling-Modus)"
        ]
      }
    ]
  },
  closet: {
    icon: Shirt,
    name: "Ankleidezimmer",
    totalFeatures: 30,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Licht automatisch beim Betreten", "Smart Mirrors mit Outfit-Vorschlägen", "Klimatisierte Schrankbereiche"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["Luftfeuchtigkeit für Kleidungsschutz", "Schuhdesinfektion (UV)"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["RFID-Tracking für Wertkleidung", "Sicherheitsmodus", "Feuchtigkeit/Sicherheitswarnungen"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Energieoptimierte Beleuchtung", "Automatische Off-Routine"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["Kleidungsinventar automatisch", "Waschempfehlungen", "Kofferpack-Routinen", "Saisonwechsel-Vorschläge", "Kleider-/Schuhsortierung", "Smart Laundry Integration"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Catwalk-Lichtmodus", "Virtuelle Outfits am Spiegel", "Designer-Empfehlungen per KI", "Smart Jewelry Safe"]
      }
    ]
  },
  gym: {
    icon: Dumbbell,
    name: "Gym / Fitnessraum",
    totalFeatures: 35,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Automatisches Sport-Beleuchtungsszenario", "Musik-Szenen für Workout", "Kühlung & Ventilation dynamisch"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["Herzfrequenz-Integration", "Trainingsanalyse", "Sauerstoff-/Luftqualitätssensor", "KI-Trainer"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Sturz-/Notfallerkennung", "Geräuschsensor", "Klimaanpassung gegen Überhitzung"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Geräteabschaltung", "Raumenergieoptimierung"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["Smart Equipment Start", "Raumprofile (Cardio, Kraft, Yoga)", "Spiegel mit Trainingsfeedback", "Gewichtserkennung & Logging"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Virtuelle Trainingswelten (AR/VR)", "Smart Sauna Integration", "Premium Sound System", "Ambient Light Gym Style"]
      }
    ]
  },
  garage: {
    icon: Car,
    name: "Garage",
    totalFeatures: 30,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Automatische Beleuchtung", "Musik beim Ein-/Aussteigen", "Temperaturkontrolle"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["CO-/Luftqualitätssensor", "Feuchtigkeitssensor"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Smart Drive-In (Tor automatisch)", "Fahrzeugüberwachung", "Öl-/Reifendruck-Warnung", "Werkzeuginventar-Alarm", "Ladekabelsicherheit E-Auto"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Optimierte Lademodi (Nachtstrom)", "Licht & Strom Auto-Off"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["Parkpositionserkennung", "Smart Tool Tracking", "Garagentor per Sprache & App", "Stauraum-Management"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Luxus-Lichtdesign für Auto-Showcase", "Fahrzeugpflege-Modus", "Präsentationsmodus"]
      }
    ]
  },
  garden: {
    icon: Trees,
    name: "Garten / Terrasse / Pool",
    totalFeatures: 40,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Automatische Gartenbeleuchtung", "Pooltemperatur-Profile", "Musik im Außenbereich", "Smart Firepit"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["UV-Sensorik", "Luftqualität außen", "Poolwasseranalyse (pH, Chlor)"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Pool-Kindersicherung", "Außenkamera mit Privatschutz", "Bewegungssensoren", "Wetterwarnsystem"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Bewässerungsoptimierung", "Regenwassernutzung", "Poolheizung effizient steuern"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["Automatische Rasenpflege-Roboter", "Pflanzensensoren", "Outdoor-Szenen", "Automatische Markise bei Sonne"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Wassershows / Lichtshows", "Outdoor Kino Setup", "Party-Modus", "Premium Landscaping AI"]
      }
    ]
  },
  utility: {
    icon: Settings,
    name: "Technikraum / Utility",
    totalFeatures: 20,
    categories: [
      {
        name: "Comfort & Lifestyle",
        icon: Sparkles,
        features: ["Autosteuerung aller Systeme zentral", "Geräuschreduzierte Geräte"]
      },
      {
        name: "Health & Wellness",
        icon: Heart,
        features: ["Luftfeuchtigkeit für Maschinenhaltbarkeit"]
      },
      {
        name: "Safety & Protection",
        icon: Shield,
        features: ["Notfall-Abschaltungen", "Brand-/Wasser-Detektion", "Temperaturwarnungen"]
      },
      {
        name: "Efficiency & Savings",
        icon: Zap,
        features: ["Stromkreis-Optimierung", "Wärmepumpensteuerung", "Energie-Dashboard"]
      },
      {
        name: "Convenience & Automation",
        icon: Wrench,
        features: ["Filterwechselwarnungen", "Geräteüberwachung", "Automatische Wartungspläne"]
      },
      {
        name: "Prestige & Experience",
        icon: Star,
        features: ["Sauber organisiertes High-End-Rack", "Touchscreen-Hausserverpanel"]
      }
    ]
  }
};

const categoryColors = {
  "Comfort & Lifestyle": { light: "#F59E0B", dark: "#D97706" },
  "Health & Wellness": { light: "#10B981", dark: "#059669" },
  "Safety & Protection": { light: "#EF4444", dark: "#DC2626" },
  "Efficiency & Savings": { light: "#3B82F6", dark: "#2563EB" },
  "Convenience & Automation": { light: "#8B5CF6", dark: "#7C3AED" },
  "Prestige & Experience": { light: "#EC4899", dark: "#DB2777" }
};

export function CulturalFeaturesDrawer({ isOpen, onClose, edition }: CulturalFeaturesDrawerProps) {
  const [selectedRoom, setSelectedRoom] = useState<keyof typeof roomsData>("bathroom");
  const [openMobileRoom, setOpenMobileRoom] = useState<keyof typeof roomsData | null>(null);
  
  const accentColor = edition === "dojo" ? "#2DD4BF" : "#C9A677";

  const rooms = Object.entries(roomsData);

  const toggleMobileRoom = (key: keyof typeof roomsData) => {
    setOpenMobileRoom(openMobileRoom === key ? null : key);
  };

  // Block body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            style={{ width: '100vw', height: '100vh', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full lg:w-[60vw] z-[9999] flex flex-col"
            style={{
              backgroundColor: 'var(--color-bg-primary)',
            }}
          >
            {/* Header */}
            <div 
              className="p-6 lg:p-8 border-b relative overflow-hidden flex-shrink-0"
              style={{
                borderColor: `${accentColor}30`,
                background: `linear-gradient(135deg, ${accentColor}10, transparent)`,
              }}
            >
              {/* Glow */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: accentColor }}
              />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl lg:text-3xl xl:text-4xl mb-2"
                    style={{ color: accentColor }}
                  >
                    {edition === "dojo" ? "Dojo Living" : "Barakah Living"}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base lg:text-lg"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Komplette Feature-Übersicht aller Räume
                  </motion.p>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    border: `2px solid ${accentColor}`,
                  }}
                >
                  <X className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: accentColor }} />
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
              {/* Mobile: Accordion List */}
              <div className="lg:hidden w-full overflow-y-auto py-4 px-4 pb-8 space-y-2">
                {rooms.map(([key, room]) => {
                  const Icon = room.icon;
                  const isOpen = openMobileRoom === key;

                  return (
                    <div key={key}>
                      {/* Room Button */}
                      <button
                        onClick={() => toggleMobileRoom(key as keyof typeof roomsData)}
                        className="w-full text-left p-4 rounded-2xl transition-all duration-300"
                        style={{
                          backgroundColor: isOpen ? `${accentColor}20` : 'var(--color-bg-secondary)40',
                          border: `2px solid ${isOpen ? accentColor : 'transparent'}`,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                              backgroundColor: isOpen ? `${accentColor}30` : `${accentColor}15`,
                              border: `1px solid ${accentColor}`,
                            }}
                          >
                            <Icon 
                              className="w-5 h-5" 
                              style={{ color: isOpen ? accentColor : `${accentColor}80` }} 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p 
                              className="text-sm mb-1 transition-colors duration-300 truncate"
                              style={{ 
                                color: isOpen ? accentColor : 'var(--color-text-primary)',
                              }}
                            >
                              {room.name}
                            </p>
                            <p 
                              className="text-xs"
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              {room.totalFeatures} Features
                            </p>
                          </div>
                          <ChevronDown
                            className="w-5 h-5 transition-transform duration-300 shrink-0"
                            style={{
                              color: accentColor,
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        </div>
                      </button>

                      {/* Dropdown Content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pl-4 pr-4 pb-2 space-y-4">
                              {/* Room Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div
                                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                                  style={{
                                    backgroundColor: `${accentColor}20`,
                                    border: `2px solid ${accentColor}`,
                                    boxShadow: `0 0 30px ${accentColor}30`,
                                  }}
                                >
                                  <Icon className="w-6 h-6" style={{ color: accentColor }} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h3 className="text-xl mb-1">
                                    {room.name}
                                  </h3>
                                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                    {room.totalFeatures} intelligente Funktionen
                                  </p>
                                </div>
                              </div>

                              {/* Categories */}
                              {room.categories.map((category, idx) => {
                                const CategoryIcon = category.icon;
                                const colors = categoryColors[category.name as keyof typeof categoryColors];

                                return (
                                  <div
                                    key={idx}
                                    className="p-4 rounded-2xl"
                                    style={{
                                      backgroundColor: 'var(--color-bg-secondary)40',
                                      border: `1px solid ${colors.light}30`,
                                    }}
                                  >
                                    {/* Category Header */}
                                    <div className="flex items-center gap-2 mb-3">
                                      <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{
                                          backgroundColor: `${colors.light}20`,
                                          border: `1px solid ${colors.light}`,
                                        }}
                                      >
                                        <CategoryIcon className="w-4 h-4" style={{ color: colors.dark }} />
                                      </div>
                                      <h4 
                                        className="text-base"
                                        style={{ color: colors.dark }}
                                      >
                                        {category.name}
                                      </h4>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-2">
                                      {category.features.map((feature, featureIdx) => (
                                        <div
                                          key={featureIdx}
                                          className="flex items-start gap-2 p-2 rounded-lg"
                                          style={{
                                            backgroundColor: 'var(--color-bg-primary)40',
                                            border: `1px solid ${colors.light}20`,
                                          }}
                                        >
                                          <div
                                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                            style={{ backgroundColor: colors.light }}
                                          />
                                          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                            {feature}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Desktop: Sidebar + Content Area */}
              <>
                {/* Room Tabs - Left Sidebar (Desktop only) */}
                <div 
                  className="hidden lg:block w-72 border-r overflow-y-auto py-6 px-4 space-y-2"
                  style={{ borderColor: `${accentColor}20` }}
                >
                  {rooms.map(([key, room]) => {
                    const Icon = room.icon;
                    const isActive = selectedRoom === key;

                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedRoom(key as keyof typeof roomsData)}
                        className="w-full text-left p-4 rounded-2xl transition-all duration-300 group"
                        style={{
                          backgroundColor: isActive ? `${accentColor}20` : 'var(--color-bg-secondary)40',
                          border: `2px solid ${isActive ? accentColor : 'transparent'}`,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                              backgroundColor: isActive ? `${accentColor}30` : `${accentColor}15`,
                              border: `1px solid ${accentColor}`,
                            }}
                          >
                            <Icon 
                              className="w-5 h-5" 
                              style={{ color: isActive ? accentColor : `${accentColor}80` }} 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p 
                              className="text-sm mb-1 transition-colors duration-300 truncate"
                              style={{ 
                                color: isActive ? accentColor : 'var(--color-text-primary)',
                              }}
                            >
                              {room.name}
                            </p>
                            <p 
                              className="text-xs"
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              {room.totalFeatures} Features
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Content Area (Desktop only) */}
                <div className="hidden lg:block flex-1 overflow-y-auto p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedRoom}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Room Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                          {(() => {
                            const Icon = roomsData[selectedRoom].icon;
                            return (
                              <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                                style={{
                                  backgroundColor: `${accentColor}20`,
                                  border: `2px solid ${accentColor}`,
                                  boxShadow: `0 0 30px ${accentColor}30`,
                                }}
                              >
                                <Icon className="w-8 h-8" style={{ color: accentColor }} />
                              </div>
                            );
                          })()}
                          <div className="min-w-0 flex-1">
                            <h3 className="text-3xl mb-1">
                              {roomsData[selectedRoom].name}
                            </h3>
                            <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
                              {roomsData[selectedRoom].totalFeatures} intelligente Funktionen
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="space-y-6">
                        {roomsData[selectedRoom].categories.map((category, idx) => {
                          const Icon = category.icon;
                          const colors = categoryColors[category.name as keyof typeof categoryColors];

                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="p-6 rounded-3xl"
                              style={{
                                backgroundColor: 'var(--color-bg-secondary)40',
                                border: `1px solid ${colors.light}30`,
                              }}
                            >
                              {/* Category Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                                  style={{
                                    backgroundColor: `${colors.light}20`,
                                    border: `1px solid ${colors.light}`,
                                  }}
                                >
                                  <Icon className="w-5 h-5" style={{ color: colors.dark }} />
                                </div>
                                <h4 
                                  className="text-lg"
                                  style={{ color: colors.dark }}
                                >
                                  {category.name}
                                </h4>
                              </div>

                              {/* Features List */}
                              <div className="grid grid-cols-2 gap-3">
                                {category.features.map((feature, featureIdx) => (
                                  <div
                                    key={featureIdx}
                                    className="flex items-start gap-2 p-3 rounded-xl"
                                    style={{
                                      backgroundColor: 'var(--color-bg-primary)40',
                                      border: `1px solid ${colors.light}20`,
                                    }}
                                  >
                                    <div
                                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                                      style={{ backgroundColor: colors.light }}
                                    />
                                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                      {feature}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}