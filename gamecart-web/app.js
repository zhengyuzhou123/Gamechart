const REGIONS = ["US", "JP", "GB"];
const CURRENCIES = ["USD", "JPY", "GBP"];
const DATA_SOURCES = [
  { value: "mock", label: "Mock" },
  { value: "steamLive", label: "Steam Live (Fallback to Mock)" }
];

const USD_TO_CURRENCY = {
  USD: 1,
  JPY: 150,
  GBP: 0.79
};

const CURRENCY_TO_USD = {
  USD: 1,
  JPY: 1 / 150,
  GBP: 1 / 0.79
};

const MOCK_GAMES = [
  {
    id: "eldenring",
    name: "Elden Ring",
    shortDescription: "Open-world action RPG with deep combat and exploration.",
    groups: ["popular"],
    artwork: {
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    ratings: {
      steam: {
        media: { score: 95, scale: 100 },
        player: { score: 9.3, scale: 10 }
      },
      playStation: {
        media: { score: 96, scale: 100 },
        player: { score: 4.8, scale: 5 }
      },
      metacritic: {
        media: { score: 96, scale: 100 },
        player: { score: 8.2, scale: 10 }
      }
    },
    playerGuide: {
      releaseDate: "2022-02-25",
      genres: ["Action RPG", "Open World", "Soulslike"],
      modes: ["Single-player"],
      playtimeHours: { main: 55, completionist: 130 },
      difficulty: "Hard",
      developer: "FromSoftware",
      publisher: "Bandai Namco Entertainment",
      contentAdvisory: ["Fantasy Violence", "Mature Themes"],
      communityPulse: {
        summary:
          "Exploration freedom and build variety are standouts; boss spikes remain the biggest challenge.",
        steamSentiment: "Very Positive",
        playerFocus: "Great for players who like hard combat and deep progression.",
        recentIssues: [
          "Occasional traversal stutter on older GPUs.",
          "Some mods can break after major patches."
        ]
      },
      platformFeatures: {
        steam: {
          performance: "Up to 4K / 60fps (hardware dependent)",
          controller: "Full controller support",
          cloudSave: true,
          mods: true,
          extras: ["Steam Deck: Playable", "Ultrawide via community patches"]
        },
        playStation: {
          performance: "Performance mode targets 60fps",
          controller: "DualSense support",
          cloudSave: true,
          mods: false,
          extras: ["3D Audio", "Trophy integration"]
        }
      },
      priceIntel: {
        historicalLowUSD: { steam: 29.99, playStation: 39.99 },
        historicalLowDate: { steam: "2025-12-21", playStation: "2025-11-29" },
        saleEnds: { steam: "2026-03-10", playStation: "2026-03-12" },
        likelySaleWindow: "Major discounts roughly every 6-8 weeks."
      }
    },
    offers: [
      {
        id: "eldenring-steam",
        platform: "steam",
        currentPriceUSD: 39.99,
        originalPriceUSD: 59.99,
        version: "Standard",
        psPlusIncluded: false,
        buyURL: "https://store.steampowered.com/app/1245620",
        steamAppID: 1245620
      },
      {
        id: "eldenring-ps",
        platform: "playStation",
        currentPriceUSD: 49.99,
        originalPriceUSD: 69.99,
        version: "PS5 Standard",
        psPlusIncluded: false,
        buyURL: "https://store.playstation.com/en-us/product/UP0700-PPSA04610_00-ELDENRING000000",
        steamAppID: null
      }
    ]
  },
  {
    id: "hades",
    name: "Hades",
    shortDescription: "Roguelike dungeon crawler from Supergiant Games.",
    groups: ["todaysDeals"],
    artwork: {
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg"
    },
    ratings: {
      steam: {
        media: { score: 93, scale: 100 },
        player: { score: 9.7, scale: 10 }
      },
      playStation: {
        media: { score: 91, scale: 100 },
        player: { score: 4.7, scale: 5 }
      },
      metacritic: {
        media: { score: 93, scale: 100 },
        player: { score: 8.6, scale: 10 }
      }
    },
    playerGuide: {
      releaseDate: "2020-09-17",
      genres: ["Roguelike", "Action", "Indie"],
      modes: ["Single-player"],
      playtimeHours: { main: 22, completionist: 70 },
      difficulty: "Medium",
      developer: "Supergiant Games",
      publisher: "Supergiant Games",
      contentAdvisory: ["Fantasy Violence", "Mild Language"],
      communityPulse: {
        summary:
          "One of the most replayable action roguelikes, with strong narrative progression between runs.",
        steamSentiment: "Overwhelmingly Positive",
        playerFocus: "Excellent if you want short sessions with high replay value.",
        recentIssues: [
          "Few technical issues reported.",
          "Higher difficulty heat levels can be punishing for new players."
        ]
      },
      platformFeatures: {
        steam: {
          performance: "Very stable 60fps on most systems",
          controller: "Excellent controller support",
          cloudSave: true,
          mods: true,
          extras: ["Steam Deck: Verified", "Cross-save with supported platforms"]
        },
        playStation: {
          performance: "Stable 60fps target",
          controller: "DualSense support",
          cloudSave: true,
          mods: false,
          extras: ["Activity cards", "Fast load times"]
        }
      },
      priceIntel: {
        historicalLowUSD: { steam: 9.99, playStation: 12.49 },
        historicalLowDate: { steam: "2025-10-31", playStation: "2025-11-26" },
        saleEnds: { steam: "2026-03-08", playStation: "2026-03-09" },
        likelySaleWindow: "Frequent discounts, especially around indie spotlights."
      }
    },
    offers: [
      {
        id: "hades-steam",
        platform: "steam",
        currentPriceUSD: 14.99,
        originalPriceUSD: 24.99,
        version: "Standard",
        psPlusIncluded: false,
        buyURL: "https://store.steampowered.com/app/1145360",
        steamAppID: 1145360
      },
      {
        id: "hades-ps",
        platform: "playStation",
        currentPriceUSD: 19.99,
        originalPriceUSD: 24.99,
        version: "PS5 Standard",
        psPlusIncluded: true,
        buyURL: "https://store.playstation.com/en-us/product/UP2125-PPSA01383_00-HADESGAME000000",
        steamAppID: null
      }
    ]
  },
  {
    id: "cyberpunk2077",
    name: "Cyberpunk 2077",
    shortDescription: "Narrative open-world RPG set in Night City.",
    groups: ["popular"],
    artwork: {
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    ratings: {
      steam: {
        media: { score: 86, scale: 100 },
        player: { score: 8.0, scale: 10 }
      },
      playStation: {
        media: { score: 84, scale: 100 },
        player: { score: 4.2, scale: 5 }
      },
      metacritic: {
        media: { score: 86, scale: 100 },
        player: { score: 7.2, scale: 10 }
      }
    },
    playerGuide: {
      releaseDate: "2020-12-10",
      genres: ["Action RPG", "Open World", "Sci-Fi"],
      modes: ["Single-player"],
      playtimeHours: { main: 28, completionist: 105 },
      difficulty: "Medium",
      developer: "CD PROJEKT RED",
      publisher: "CD PROJEKT RED",
      contentAdvisory: ["Strong Language", "Violence", "Nudity"],
      communityPulse: {
        summary:
          "Current versions are much improved, especially with expansion content and reworked systems.",
        steamSentiment: "Very Positive",
        playerFocus: "Best for narrative-focused players who enjoy build experimentation.",
        recentIssues: [
          "Occasional quest scripting bugs still appear.",
          "Performance can vary widely on lower-end hardware."
        ]
      },
      platformFeatures: {
        steam: {
          performance: "Wide scalability; RT options on capable GPUs",
          controller: "Full controller support",
          cloudSave: true,
          mods: true,
          extras: ["Photo mode", "Strong mod ecosystem"]
        },
        playStation: {
          performance: "Quality and Performance modes available",
          controller: "DualSense haptics and adaptive triggers",
          cloudSave: true,
          mods: false,
          extras: ["3D Audio", "Faster loading on PS5"]
        }
      },
      priceIntel: {
        historicalLowUSD: { steam: 24.99, playStation: 24.99 },
        historicalLowDate: { steam: "2025-12-20", playStation: "2025-12-02" },
        saleEnds: { steam: "2026-03-11", playStation: "2026-03-13" },
        likelySaleWindow: "Large discounts usually return every major seasonal sale."
      }
    },
    offers: [
      {
        id: "cp2077-steam",
        platform: "steam",
        currentPriceUSD: 35.99,
        originalPriceUSD: 59.99,
        version: "Standard",
        psPlusIncluded: false,
        buyURL: "https://store.steampowered.com/app/1091500",
        steamAppID: 1091500
      },
      {
        id: "cp2077-ps",
        platform: "playStation",
        currentPriceUSD: 29.99,
        originalPriceUSD: 59.99,
        version: "PS5 Standard",
        psPlusIncluded: false,
        buyURL: "https://store.playstation.com/en-us/product/UP4497-PPSA03974_00-0000000000000CP1",
        steamAppID: null
      }
    ]
  }
];

// Catalog extension: major releases since 2015 with public 1M+ sales milestones.
const MILLION_SELLERS_2015_PLUS = [
  { id: "witcher3", name: "The Witcher 3: Wild Hunt", releaseDate: "2015-05-19", estimatedSalesM: 50, genres: ["Action RPG", "Open World"], developer: "CD PROJEKT RED", publisher: "CD PROJEKT" },
  { id: "fallout4", name: "Fallout 4", releaseDate: "2015-11-10", estimatedSalesM: 13, genres: ["RPG", "Open World"], developer: "Bethesda Game Studios", publisher: "Bethesda Softworks" },
  { id: "metalgearsolidv", name: "Metal Gear Solid V: The Phantom Pain", releaseDate: "2015-09-01", estimatedSalesM: 7, genres: ["Stealth", "Action"], developer: "Kojima Productions", publisher: "Konami" },
  { id: "gta5", name: "Grand Theft Auto V", releaseDate: "2015-04-14", estimatedSalesM: 200, genres: ["Action", "Open World"], developer: "Rockstar North", publisher: "Rockstar Games" },
  { id: "darksouls3", name: "Dark Souls III", releaseDate: "2016-04-12", estimatedSalesM: 10, genres: ["Action RPG", "Soulslike"], developer: "FromSoftware", publisher: "Bandai Namco Entertainment" },
  { id: "doom2016", name: "DOOM", releaseDate: "2016-05-13", estimatedSalesM: 4, genres: ["FPS", "Action"], developer: "id Software", publisher: "Bethesda Softworks" },
  { id: "battlefield1", name: "Battlefield 1", releaseDate: "2016-10-21", estimatedSalesM: 15, genres: ["FPS", "Multiplayer"], developer: "DICE", publisher: "Electronic Arts", modes: ["Single-player", "Multiplayer"] },
  { id: "overwatch", name: "Overwatch", releaseDate: "2016-05-24", estimatedSalesM: 50, genres: ["Hero Shooter", "Multiplayer"], developer: "Blizzard Entertainment", publisher: "Blizzard Entertainment", modes: ["Multiplayer"] },
  { id: "nierautomata", name: "NieR:Automata", releaseDate: "2017-02-23", estimatedSalesM: 8, genres: ["Action RPG", "Sci-Fi"], developer: "PlatinumGames", publisher: "Square Enix" },
  { id: "residentevil7", name: "Resident Evil 7 Biohazard", releaseDate: "2017-01-24", estimatedSalesM: 13, genres: ["Survival Horror"], developer: "Capcom", publisher: "Capcom" },
  { id: "divinityoriginalsin2", name: "Divinity: Original Sin 2", releaseDate: "2017-09-14", estimatedSalesM: 7, genres: ["CRPG", "Turn-Based"], developer: "Larian Studios", publisher: "Larian Studios" },
  { id: "monsterhunterworld", name: "Monster Hunter: World", releaseDate: "2018-01-26", estimatedSalesM: 25, genres: ["Action RPG", "Co-op"], developer: "Capcom", publisher: "Capcom", modes: ["Single-player", "Online Co-op"] },
  { id: "godofwar2018", name: "God of War", releaseDate: "2018-04-20", estimatedSalesM: 23, genres: ["Action", "Adventure"], developer: "Santa Monica Studio", publisher: "Sony Interactive Entertainment" },
  { id: "spiderman2018", name: "Marvel's Spider-Man", releaseDate: "2018-09-07", estimatedSalesM: 33, genres: ["Action", "Open World"], developer: "Insomniac Games", publisher: "Sony Interactive Entertainment" },
  { id: "rdr2", name: "Red Dead Redemption 2", releaseDate: "2018-10-26", estimatedSalesM: 70, genres: ["Action", "Open World"], developer: "Rockstar Games", publisher: "Rockstar Games" },
  { id: "assassinscreedodyssey", name: "Assassin's Creed Odyssey", releaseDate: "2018-10-05", estimatedSalesM: 10, genres: ["Action RPG", "Open World"], developer: "Ubisoft Quebec", publisher: "Ubisoft" },
  { id: "farcry5", name: "Far Cry 5", releaseDate: "2018-03-27", estimatedSalesM: 10, genres: ["FPS", "Open World"], developer: "Ubisoft Montreal", publisher: "Ubisoft" },
  { id: "sekiro", name: "Sekiro: Shadows Die Twice", releaseDate: "2019-03-22", estimatedSalesM: 10, genres: ["Action", "Soulslike"], developer: "FromSoftware", publisher: "Activision" },
  { id: "residentevil2remake", name: "Resident Evil 2", releaseDate: "2019-01-25", estimatedSalesM: 15, genres: ["Survival Horror"], developer: "Capcom", publisher: "Capcom" },
  { id: "devilmaycry5", name: "Devil May Cry 5", releaseDate: "2019-03-08", estimatedSalesM: 9, genres: ["Action", "Hack and Slash"], developer: "Capcom", publisher: "Capcom" },
  { id: "starwarsjedifallenorder", name: "Star Wars Jedi: Fallen Order", releaseDate: "2019-11-15", estimatedSalesM: 20, genres: ["Action Adventure"], developer: "Respawn Entertainment", publisher: "Electronic Arts" },
  { id: "deathstranding", name: "Death Stranding", releaseDate: "2019-11-08", estimatedSalesM: 5, genres: ["Action", "Adventure"], developer: "Kojima Productions", publisher: "505 Games" },
  { id: "control", name: "Control", releaseDate: "2019-08-27", estimatedSalesM: 4, genres: ["Action", "Sci-Fi"], developer: "Remedy Entertainment", publisher: "505 Games" },
  { id: "doometernal", name: "DOOM Eternal", releaseDate: "2020-03-20", estimatedSalesM: 3, genres: ["FPS", "Action"], developer: "id Software", publisher: "Bethesda Softworks" },
  { id: "lastofuspart2", name: "The Last of Us Part II", releaseDate: "2020-06-19", estimatedSalesM: 10, genres: ["Action", "Narrative"], developer: "Naughty Dog", publisher: "Sony Interactive Entertainment" },
  { id: "ghostoftsushima", name: "Ghost of Tsushima", releaseDate: "2020-07-17", estimatedSalesM: 13, genres: ["Action", "Open World"], developer: "Sucker Punch Productions", publisher: "Sony Interactive Entertainment" },
  { id: "ff7remake", name: "Final Fantasy VII Remake", releaseDate: "2020-04-10", estimatedSalesM: 7, genres: ["JRPG", "Action RPG"], developer: "Square Enix", publisher: "Square Enix" },
  { id: "assassinscreedvalhalla", name: "Assassin's Creed Valhalla", releaseDate: "2020-11-10", estimatedSalesM: 12, genres: ["Action RPG", "Open World"], developer: "Ubisoft Montreal", publisher: "Ubisoft" },
  { id: "residentevilvillage", name: "Resident Evil Village", releaseDate: "2021-05-07", estimatedSalesM: 10, genres: ["Survival Horror"], developer: "Capcom", publisher: "Capcom" },
  { id: "ittakestwo", name: "It Takes Two", releaseDate: "2021-03-26", estimatedSalesM: 20, genres: ["Co-op", "Adventure"], developer: "Hazelight Studios", publisher: "Electronic Arts", modes: ["Online Co-op", "Local Co-op"] },
  { id: "forzahorizon5", name: "Forza Horizon 5", releaseDate: "2021-11-09", estimatedSalesM: 10, genres: ["Racing", "Open World"], developer: "Playground Games", publisher: "Xbox Game Studios", modes: ["Single-player", "Multiplayer"] },
  { id: "godofwarragnarok", name: "God of War Ragnarök", releaseDate: "2022-11-09", estimatedSalesM: 15, genres: ["Action", "Adventure"], developer: "Santa Monica Studio", publisher: "Sony Interactive Entertainment" },
  { id: "horizonforbiddenwest", name: "Horizon Forbidden West", releaseDate: "2022-02-18", estimatedSalesM: 9, genres: ["Action RPG", "Open World"], developer: "Guerrilla Games", publisher: "Sony Interactive Entertainment" },
  { id: "stray", name: "Stray", releaseDate: "2022-07-19", estimatedSalesM: 2, genres: ["Adventure", "Puzzle"], developer: "BlueTwelve Studio", publisher: "Annapurna Interactive" },
  { id: "hogwartslegacy", name: "Hogwarts Legacy", releaseDate: "2023-02-10", estimatedSalesM: 24, genres: ["Action RPG", "Open World"], developer: "Avalanche Software", publisher: "Warner Bros. Games" },
  { id: "baldursgate3", name: "Baldur's Gate 3", releaseDate: "2023-08-03", estimatedSalesM: 15, genres: ["CRPG", "Turn-Based"], developer: "Larian Studios", publisher: "Larian Studios" },
  { id: "spiderman2", name: "Marvel's Spider-Man 2", releaseDate: "2023-10-20", estimatedSalesM: 11, genres: ["Action", "Open World"], developer: "Insomniac Games", publisher: "Sony Interactive Entertainment" },
  { id: "diablo4", name: "Diablo IV", releaseDate: "2023-06-05", estimatedSalesM: 12, genres: ["Action RPG", "Loot"], developer: "Blizzard Entertainment", publisher: "Blizzard Entertainment", modes: ["Single-player", "Online"] },
  { id: "armoredcore6", name: "Armored Core VI: Fires of Rubicon", releaseDate: "2023-08-25", estimatedSalesM: 3, genres: ["Action", "Mecha"], developer: "FromSoftware", publisher: "Bandai Namco Entertainment" },
  { id: "helldivers2", name: "Helldivers 2", releaseDate: "2024-02-08", estimatedSalesM: 12, genres: ["Co-op Shooter", "Live Service"], developer: "Arrowhead Game Studios", publisher: "Sony Interactive Entertainment", modes: ["Online Co-op"] },
  { id: "palworld", name: "Palworld", releaseDate: "2024-01-19", estimatedSalesM: 25, genres: ["Survival", "Monster Collection"], developer: "Pocketpair", publisher: "Pocketpair", modes: ["Single-player", "Online Co-op"] },
  { id: "blackmythwukong", name: "Black Myth: Wukong", releaseDate: "2024-08-20", estimatedSalesM: 20, genres: ["Action RPG"], developer: "Game Science", publisher: "Game Science" },
  { id: "spacemarine2", name: "Warhammer 40,000: Space Marine 2", releaseDate: "2024-09-09", estimatedSalesM: 4, genres: ["Action", "Shooter"], developer: "Saber Interactive", publisher: "Focus Entertainment" }
];

const REAL_COVER_BY_ID = {
  witcher3: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
  fallout4: "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg",
  metalgearsolidv: "https://cdn.cloudflare.steamstatic.com/steam/apps/287700/header.jpg",
  gta5: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
  darksouls3: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
  doom2016: "https://cdn.cloudflare.steamstatic.com/steam/apps/379720/header.jpg",
  battlefield1: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238840/header.jpg",
  overwatch: "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg",
  nierautomata: "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/header.jpg",
  residentevil7: "https://cdn.cloudflare.steamstatic.com/steam/apps/418370/header.jpg",
  divinityoriginalsin2: "https://cdn.cloudflare.steamstatic.com/steam/apps/435150/header.jpg",
  monsterhunterworld: "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg",
  godofwar2018: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
  spiderman2018: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
  rdr2: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
  assassinscreedodyssey: "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg",
  farcry5: "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/header.jpg",
  sekiro: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg",
  residentevil2remake: "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg",
  devilmaycry5: "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg",
  starwarsjedifallenorder: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/header.jpg",
  deathstranding: "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/header.jpg",
  control: "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/header.jpg",
  doometernal: "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg",
  lastofuspart2: "https://cdn.cloudflare.steamstatic.com/steam/apps/2531310/header.jpg",
  ghostoftsushima: "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg",
  ff7remake: "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/header.jpg",
  assassinscreedvalhalla: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
  residentevilvillage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg",
  ittakestwo: "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg",
  forzahorizon5: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
  godofwarragnarok: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg",
  horizonforbiddenwest: "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/header.jpg",
  stray: "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/header.jpg",
  hogwartslegacy: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
  baldursgate3: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
  spiderman2: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
  diablo4: "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg",
  armoredcore6: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/header.jpg",
  helldivers2: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",
  palworld: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
  blackmythwukong: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",
  spacemarine2: "https://cdn.cloudflare.steamstatic.com/steam/apps/2183900/header.jpg"
};

const storage = {
  wishlist: "gamecart.wishlist",
  region: "gamecart.region",
  currency: "gamecart.currency",
  source: "gamecart.source"
};

const memoryStorage = new Map();

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return memoryStorage.has(key) ? memoryStorage.get(key) : null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    memoryStorage.set(key, String(value));
  }
}

const state = {
  search: "",
  region: loadSetting(storage.region, "US", REGIONS),
  currency: loadSetting(storage.currency, "USD", CURRENCIES),
  dataSource: loadSetting(storage.source, "mock", DATA_SOURCES.map((d) => d.value)),
  wishlist: new Set(loadJSONArray(storage.wishlist)),
  detailLoading: false,
  detailMessage: ""
};

const steamCache = new Map();
const inflightSteamRequests = new Map();
const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 215'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#1b2d45'/>
          <stop offset='100%' stop-color='#0d1726'/>
        </linearGradient>
      </defs>
      <rect width='460' height='215' fill='url(#g)'/>
      <circle cx='390' cy='45' r='50' fill='rgba(78,153,214,0.18)'/>
      <text x='30' y='118' fill='#d4e6ff' font-size='28' font-family='Arial'>GameCart</text>
    </svg>`
  );
mergeMillionSellerCatalog();

const appRoot = document.querySelector("#app");
const tabButtons = Array.from(document.querySelectorAll(".tab-btn"));

try {
  init();
} catch (error) {
  console.error("GameCart initialization failed:", error);
  if (appRoot) {
    appRoot.innerHTML = `<div class="empty">App failed to initialize. Try opening via http://localhost:8080.</div>`;
  }
}

function init() {
  if (!appRoot) {
    throw new Error("Missing #app root element.");
  }

  if (!location.hash) {
    location.hash = "#home";
  }

  window.addEventListener("hashchange", render);

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      if (tab === "home") {
        location.hash = "#home";
      } else if (tab === "wishlist") {
        location.hash = "#wishlist";
      } else if (tab === "settings") {
        location.hash = "#settings";
      }
    });
  });

  appRoot.addEventListener("click", onAppClick);
  appRoot.addEventListener("input", onAppInput);
  appRoot.addEventListener("change", onAppChange);

  render();
}

function onAppClick(event) {
  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) return;

  const action = actionNode.dataset.action;

  if (action === "openGame") {
    location.hash = `#game/${actionNode.dataset.gameId}`;
    return;
  }

  if (action === "toggleWishlist") {
    const gameID = actionNode.dataset.gameId;
    if (!gameID) return;
    if (state.wishlist.has(gameID)) {
      state.wishlist.delete(gameID);
    } else {
      state.wishlist.add(gameID);
    }
    persistWishlist();
    render();
    return;
  }

  if (action === "removeWishlist") {
    const gameID = actionNode.dataset.gameId;
    if (!gameID) return;
    state.wishlist.delete(gameID);
    persistWishlist();
    render();
  }
}

function onAppInput(event) {
  if (event.target.id === "search-input") {
    state.search = event.target.value;
    updateHomeSections();
  }
}

function onAppChange(event) {
  if (event.target.id === "region-select") {
    state.region = event.target.value;
    saveSetting(storage.region, state.region);
    render();
    return;
  }

  if (event.target.id === "currency-select") {
    state.currency = event.target.value;
    saveSetting(storage.currency, state.currency);
    render();
    return;
  }

  if (event.target.id === "source-select") {
    state.dataSource = event.target.value;
    saveSetting(storage.source, state.dataSource);
    render();
  }
}

function render() {
  const route = getRoute();
  renderTabs(route.tab);

  if (route.tab === "home") {
    renderHome();
    return;
  }

  if (route.tab === "wishlist") {
    renderWishlist();
    return;
  }

  if (route.tab === "settings") {
    renderSettings();
    return;
  }

  if (route.tab === "game") {
    renderGameDetail(route.gameId);
    return;
  }

  location.hash = "#home";
}

function renderTabs(currentTab) {
  const active = currentTab === "game" ? "home" : currentTab;

  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === active);
  });
}

function renderHome() {
  const catalogStats = getCatalogStats();
  appRoot.innerHTML = `
    <section class="stack">
      <input
        id="search-input"
        class="search"
        type="search"
        value="${escapeHTML(state.search)}"
        placeholder="Search games"
      />
      <p class="note">Catalog: ${catalogStats.total} games · ${catalogStats.millionPlusSince2015} titles with 1M+ sales milestones (2015+).</p>
      <div id="home-sections">
        ${homeSectionsHTML()}
      </div>
    </section>
  `;
}

function updateHomeSections() {
  const route = getRoute();
  if (route.tab !== "home") {
    return;
  }

  const sectionsNode = document.querySelector("#home-sections");
  if (!sectionsNode) {
    return;
  }

  sectionsNode.innerHTML = homeSectionsHTML();
}

function homeSectionsHTML() {
  const q = state.search.trim().toLowerCase();
  const filtered = q
    ? MOCK_GAMES.filter((g) => g.name.toLowerCase().includes(q))
    : MOCK_GAMES;
  const sorted = [...filtered].sort((a, b) => releaseTimestamp(b) - releaseTimestamp(a));

  const deals = sorted.filter((g) => g.groups.includes("todaysDeals"));
  const popular = sorted.filter((g) => g.groups.includes("popular"));

  if (q) {
    return renderGameSection("Search Results", sorted);
  }

  return `${renderGameSection("Today's Deals", deals)}${renderGameSection("Popular", popular)}`;
}

function renderGameSection(title, games) {
  if (!games.length) {
    return `
      <section class="section">
        <div class="section-head"><h2 class="section-title">${title}</h2></div>
        <div class="empty">No games in this section.</div>
      </section>
    `;
  }

  return `
    <section class="section">
      <div class="section-head"><h2 class="section-title">${title}</h2></div>
      <ul class="game-list">
        ${games.map((game) => renderGameRow(game)).join("")}
      </ul>
    </section>
  `;
}

function renderGameRow(game) {
  const offers = resolveOffers(game.offers);
  const best = getCheapestOffer(offers);
  const steam = game.ratings?.steam;
  const ps = game.ratings?.playStation;
  const mc = game.ratings?.metacritic;
  const guide = game.playerGuide || {};
  const dealInsight = getDealInsight(game, offers);
  const valueLabel = buildValueLabel(game, offers);
  const releaseLabel = formatDate(guide.releaseDate);
  const salesLabel = formatSales(guide.estimatedSalesM);
  const bestLabel = best
    ? `From ${formatCurrentPrice(best)} on ${platformLabel(best.platform)}`
    : "No offers";
  const ratingLabel = `评分：Steam M${formatScoreValue(steam?.media)} / U${formatScoreValue(steam?.player)} · PS M${formatScoreValue(ps?.media)} / U${formatScoreValue(ps?.player)} · MC M${formatScoreValue(mc?.media)} / U${formatScoreValue(mc?.player)}`;
  const quickFactsLabel = `玩法：${formatArray(guide.genres, 2)} · 模式：${formatArray(guide.modes, 1)} · 主线约 ${formatHours(guide.playtimeHours?.main)} · 销量 ${salesLabel}`;

  return `
    <li class="game-row steam-row">
      <div class="game-media">
        <img class="game-thumb" src="${escapeHTML(getGameImage(game, "cover"))}" alt="${escapeHTML(game.name)} cover" loading="lazy" onerror="this.onerror=null;this.src='${escapeHTML(FALLBACK_IMAGE)}'" />
      </div>
      <div class="row-main">
        <div class="row-top">
          <div>
            <h3 class="row-title">${escapeHTML(game.name)}</h3>
            <p class="row-desc">${escapeHTML(game.shortDescription)}</p>
          </div>
          <span class="mini-tag">${escapeHTML(releaseLabel)}</span>
        </div>
        <p class="row-meta">${escapeHTML(quickFactsLabel)}</p>
        <div class="row-pills">
          <span class="info-pill ${dealInsight.toneClass}">${escapeHTML(dealInsight.label)}</span>
          <span class="info-pill neutral">Sales ${escapeHTML(salesLabel)}</span>
          ${valueLabel ? `<span class="info-pill neutral">${escapeHTML(valueLabel)}</span>` : ""}
        </div>
      </div>
      <div class="row-side">
        <p class="row-price row-price-strong">${escapeHTML(bestLabel)}</p>
        <p class="row-price">${escapeHTML(ratingLabel)}</p>
        <button class="link-btn" type="button" data-action="openGame" data-game-id="${game.id}">Detail</button>
      </div>
    </li>
  `;
}

function renderGameHero(game, wishlisted, offers) {
  const guide = game.playerGuide || {};
  const dealInsight = getDealInsight(game, offers);
  const valueLabel = buildValueLabel(game, offers);
  const salesLabel = formatSales(guide.estimatedSalesM);

  return `
    <section class="hero-banner">
      <img class="hero-image" src="${escapeHTML(getGameImage(game, "hero"))}" alt="${escapeHTML(game.name)} hero" loading="eager" onerror="this.onerror=null;this.src='${escapeHTML(FALLBACK_IMAGE)}'" />
      <div class="hero-overlay">
        <div class="hero-top">
          <div>
            <h2 class="hero-title">${escapeHTML(game.name)}</h2>
            <p class="hero-subtitle">${escapeHTML(game.shortDescription)}</p>
          </div>
          <button
            class="heart-btn ${wishlisted ? "active" : ""}"
            type="button"
            data-action="toggleWishlist"
            data-game-id="${game.id}"
          >${wishlisted ? "♥ Wishlisted" : "♡ Add to Wishlist"}</button>
        </div>
        <div class="row-pills">
          <span class="info-pill neutral">Release ${escapeHTML(formatDate(guide.releaseDate))}</span>
          <span class="info-pill neutral">${escapeHTML(formatArray(guide.genres, 2))}</span>
          <span class="info-pill neutral">Main ${escapeHTML(formatHours(guide.playtimeHours?.main))}</span>
          <span class="info-pill neutral">Sales ${escapeHTML(salesLabel)}</span>
          <span class="info-pill ${dealInsight.toneClass}">${escapeHTML(dealInsight.label)}</span>
          ${valueLabel ? `<span class="info-pill neutral">${escapeHTML(valueLabel)}</span>` : ""}
        </div>
      </div>
    </section>
  `;
}

function renderGameDetail(gameID) {
  const game = MOCK_GAMES.find((g) => g.id === gameID);

  if (!game) {
    appRoot.innerHTML = `<div class="empty">Game not found.</div>`;
    return;
  }

  const wishlisted = state.wishlist.has(game.id);
  const offers = resolveOffers(game.offers);
  const recommendation = recommendationText(offers);

  appRoot.innerHTML = `
    <section class="stack detail-stack">
      ${renderGameHero(game, wishlisted, offers)}

      <div class="recommend">系统建议：${escapeHTML(recommendation)}</div>

      <div class="offer-shelf">
        ${offers.map((offer) => renderOfferCard(offer)).join("")}
      </div>

      <div class="detail-panels">
        ${renderRatingsPanel(game)}
        ${renderPlayerSnapshot(game, offers)}
        ${renderPriceIntelPanel(game, offers)}
        ${renderPlatformFeaturesPanel(game)}
        ${renderCommunityPanel(game)}
      </div>

      ${
        state.dataSource === "steamLive"
          ? `<p class="note">${state.detailLoading ? "Loading Steam live price..." : "Steam live price enabled. Request failures will fallback to Mock."}</p>`
          : `<p class="note">Using Mock price data.</p>`
      }
      ${state.detailMessage ? `<p class="note">${escapeHTML(state.detailMessage)}</p>` : ""}
    </section>
  `;

  ensureSteamLivePrices(game).catch(() => {
    state.detailMessage = "Steam request failed. Mock price is shown.";
    render();
  });
}

function renderOfferCard(offer) {
  const currentText = formatCurrentPrice(offer);
  const originalText = formatOriginalPrice(offer);

  return `
    <article class="offer-card">
      <div class="offer-top">
        <h3>${platformLabel(offer.platform)}</h3>
        <span class="badge">-${offerDiscountPercent(offer)}%</span>
      </div>
      <div class="price-line">
        <span class="price-current">${escapeHTML(currentText)}</span>
        <span class="price-original">${escapeHTML(originalText)}</span>
      </div>
      <p class="hint">Version: ${escapeHTML(offer.version)}</p>
      ${offer.platform === "playStation" && offer.psPlusIncluded ? `<span class="ps-plus">PS Plus 可玩</span>` : ""}
      <a class="buy-btn" href="${offer.buyURL}" target="_blank" rel="noopener noreferrer">Buy</a>
    </article>
  `;
}

function renderRatingsPanel(game) {
  const ratings = game.ratings || {};
  const entries = [
    { key: "steam", label: "Steam", value: ratings.steam },
    { key: "playStation", label: "PlayStation", value: ratings.playStation },
    { key: "metacritic", label: "Metacritic", value: ratings.metacritic }
  ];

  return `
    <section class="section panel">
      <div class="section-head">
        <h3 class="section-title">评分总览</h3>
      </div>
      <div class="rating-grid">
        ${entries
          .map(
            (entry) => `
            <article class="rating-card rating-${entry.key}">
              <h4 class="rating-source">${entry.label}</h4>
              <div class="rating-row">
                <span class="rating-key">媒体测评</span>
                <strong class="rating-value">${formatScoreLabel(entry.value?.media)}</strong>
              </div>
              <div class="rating-row">
                <span class="rating-key">玩家测评</span>
                <strong class="rating-value">${formatScoreLabel(entry.value?.player)}</strong>
              </div>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPlayerSnapshot(game, offers) {
  const guide = game.playerGuide || {};

  return `
    <section class="section panel">
      <div class="section-head">
        <h3 class="section-title">玩家快照</h3>
      </div>
      <div class="snapshot-grid">
        <article class="snapshot-card">
          <span class="snapshot-key">Release</span>
          <strong class="snapshot-value">${escapeHTML(formatDate(guide.releaseDate))}</strong>
        </article>
        <article class="snapshot-card">
          <span class="snapshot-key">Genres</span>
          <strong class="snapshot-value">${escapeHTML(formatArray(guide.genres, 3))}</strong>
        </article>
        <article class="snapshot-card">
          <span class="snapshot-key">Modes</span>
          <strong class="snapshot-value">${escapeHTML(formatArray(guide.modes, 2))}</strong>
        </article>
        <article class="snapshot-card">
          <span class="snapshot-key">Playtime</span>
          <strong class="snapshot-value">Main ${escapeHTML(formatHours(guide.playtimeHours?.main))} · 100% ${escapeHTML(formatHours(guide.playtimeHours?.completionist))}</strong>
        </article>
        <article class="snapshot-card">
          <span class="snapshot-key">Difficulty</span>
          <strong class="snapshot-value">${escapeHTML(guide.difficulty || "--")}</strong>
        </article>
        <article class="snapshot-card">
          <span class="snapshot-key">Studio</span>
          <strong class="snapshot-value">${escapeHTML(guide.developer || "--")}</strong>
        </article>
        <article class="snapshot-card">
          <span class="snapshot-key">Sales</span>
          <strong class="snapshot-value">${escapeHTML(formatSales(guide.estimatedSalesM))}</strong>
        </article>
      </div>
      <p class="note">Publisher: ${escapeHTML(guide.publisher || "--")} · 交易建议：${escapeHTML(getDealInsight(game, offers).label)}${buildValueLabel(game, offers) ? ` · ${escapeHTML(buildValueLabel(game, offers))}` : ""}</p>
    </section>
  `;
}

function renderPriceIntelPanel(game, offers) {
  const intel = game.playerGuide?.priceIntel || {};
  const platforms = ["steam", "playStation"];

  return `
    <section class="section panel">
      <div class="section-head">
        <h3 class="section-title">价格情报</h3>
      </div>
      <div class="intel-grid">
        ${platforms
          .map((platform) => {
            const offer = offers.find((item) => item.platform === platform);
            const currentUSD = offer ? comparableUSD(offer) : null;
            const historicalLowUSD = intel.historicalLowUSD?.[platform];
            const gapLabel = formatGapVsLow(currentUSD, historicalLowUSD);
            const lowLabel =
              typeof historicalLowUSD === "number"
                ? formatMoney(historicalLowUSD * USD_TO_CURRENCY[state.currency], state.currency)
                : "--";
            const lowDateLabel = formatDate(intel.historicalLowDate?.[platform]);
            const saleEndLabel = formatDate(intel.saleEnds?.[platform]);

            return `
              <article class="intel-card">
                <h4 class="rating-source">${platformLabel(platform)}</h4>
                <div class="rating-row">
                  <span class="rating-key">Current</span>
                  <strong class="rating-value">${offer ? escapeHTML(formatCurrentPrice(offer)) : "--"}</strong>
                </div>
                <div class="rating-row">
                  <span class="rating-key">All-time low</span>
                  <strong class="rating-value">${escapeHTML(lowLabel)}</strong>
                </div>
                <div class="rating-row">
                  <span class="rating-key">Gap vs ATL</span>
                  <strong class="rating-value">${escapeHTML(gapLabel)}</strong>
                </div>
                <p class="note">ATL date: ${escapeHTML(lowDateLabel)} · Sale ends: ${escapeHTML(saleEndLabel)}</p>
              </article>
            `;
          })
          .join("")}
      </div>
      <p class="note">Discount pattern: ${escapeHTML(intel.likelySaleWindow || "No historical pattern yet.")}</p>
    </section>
  `;
}

function renderPlatformFeaturesPanel(game) {
  const features = game.playerGuide?.platformFeatures || {};
  const entries = [
    { platform: "steam", value: features.steam },
    { platform: "playStation", value: features.playStation }
  ];

  return `
    <section class="section panel">
      <div class="section-head">
        <h3 class="section-title">平台体验对比</h3>
      </div>
      <div class="feature-grid">
        ${entries
          .map((entry) => {
            const feature = entry.value || {};
            return `
              <article class="feature-card">
                <h4 class="rating-source">${platformLabel(entry.platform)}</h4>
                <div class="rating-row">
                  <span class="rating-key">Performance</span>
                  <strong class="rating-value">${escapeHTML(feature.performance || "--")}</strong>
                </div>
                <div class="rating-row">
                  <span class="rating-key">Controller</span>
                  <strong class="rating-value">${escapeHTML(feature.controller || "--")}</strong>
                </div>
                <div class="rating-row">
                  <span class="rating-key">Cloud Save</span>
                  <strong class="rating-value">${feature.cloudSave ? "Yes" : "No"}</strong>
                </div>
                <div class="rating-row">
                  <span class="rating-key">Mods</span>
                  <strong class="rating-value">${feature.mods ? "Yes" : "No"}</strong>
                </div>
                ${
                  Array.isArray(feature.extras) && feature.extras.length
                    ? `<ul class="feature-list">${feature.extras.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
                    : ""
                }
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderCommunityPanel(game) {
  const community = game.playerGuide?.communityPulse || {};
  const advisories = game.playerGuide?.contentAdvisory || [];
  const issues = Array.isArray(community.recentIssues) ? community.recentIssues : [];

  return `
    <section class="section panel">
      <div class="section-head">
        <h3 class="section-title">社区风向与风险提示</h3>
      </div>
      <article class="community-card">
        <p class="hint">${escapeHTML(community.summary || "No community summary yet.")}</p>
        <div class="row-pills">
          <span class="info-pill neutral">Steam sentiment: ${escapeHTML(community.steamSentiment || "--")}</span>
          <span class="info-pill neutral">玩家倾向: ${escapeHTML(community.playerFocus || "--")}</span>
        </div>
        ${
          issues.length
            ? `<ul class="issue-list">${issues.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
            : `<p class="note">No major recurring issues listed.</p>`
        }
        ${
          advisories.length
            ? `<div class="tag-wrap">${advisories.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>`
            : ""
        }
      </article>
    </section>
  `;
}

function renderWishlist() {
  const games = MOCK_GAMES.filter((g) => state.wishlist.has(g.id));

  if (!games.length) {
    appRoot.innerHTML = `
      <section class="stack">
        <h2>Wishlist</h2>
        <div class="empty">Wishlist is empty. Add games from Game Detail.</div>
      </section>
    `;
    return;
  }

  appRoot.innerHTML = `
    <section class="stack">
      <h2>Wishlist</h2>
      <ul class="game-list">
        ${games.map((game) => {
          const offers = resolveOffers(game.offers);
          const best = getCheapestOffer(offers);
          const bestLabel = best
            ? `From ${formatCurrentPrice(best)} on ${platformLabel(best.platform)}`
            : "No offers";
          return `
            <li class="game-row steam-row">
              <div class="game-media">
                <img class="game-thumb" src="${escapeHTML(getGameImage(game, "cover"))}" alt="${escapeHTML(game.name)} cover" loading="lazy" onerror="this.onerror=null;this.src='${escapeHTML(FALLBACK_IMAGE)}'" />
              </div>
              <div class="row-main">
                <div class="row-top">
                  <div>
                    <h3 class="row-title">${escapeHTML(game.name)}</h3>
                    <p class="row-desc">${escapeHTML(game.shortDescription)}</p>
                  </div>
                </div>
                <p class="row-price">${escapeHTML(bestLabel)}</p>
              </div>
              <div class="row-side">
                <button class="link-btn" type="button" data-action="openGame" data-game-id="${game.id}">Detail</button>
                <button class="remove-btn" type="button" data-action="removeWishlist" data-game-id="${game.id}">Remove</button>
              </div>
            </li>
          `;
        }).join("")}
      </ul>
    </section>
  `;
}

function renderSettings() {
  appRoot.innerHTML = `
    <section class="stack">
      <h2>Settings</h2>
      <div class="form">
        <label class="form-row" for="region-select">
          <span>Region</span>
          <select id="region-select">
            ${REGIONS.map((r) => `<option value="${r}" ${state.region === r ? "selected" : ""}>${r}</option>`).join("")}
          </select>
        </label>

        <label class="form-row" for="currency-select">
          <span>Currency</span>
          <select id="currency-select">
            ${CURRENCIES
              .map((c) => `<option value="${c}" ${state.currency === c ? "selected" : ""}>${c}</option>`)
              .join("")}
          </select>
        </label>

        <label class="form-row" for="source-select">
          <span>Data Source</span>
          <select id="source-select">
            ${DATA_SOURCES
              .map((s) => `<option value="${s.value}" ${state.dataSource === s.value ? "selected" : ""}>${escapeHTML(s.label)}</option>`)
              .join("")}
          </select>
        </label>

        <p class="note">Steam live URL: https://store.steampowered.com/api/appdetails?appids=APPID&cc=REGION&filters=price_overview</p>
        <p class="note">Deep-link style route in web: #game/eldenring</p>
      </div>
    </section>
  `;
}

function getRoute() {
  const raw = location.hash.replace(/^#/, "").trim();
  if (!raw || raw === "home") return { tab: "home" };
  if (raw === "wishlist") return { tab: "wishlist" };
  if (raw === "settings") return { tab: "settings" };

  const gameMatch = raw.match(/^game\/(.+)$/);
  if (gameMatch) {
    return { tab: "game", gameId: gameMatch[1].toLowerCase() };
  }

  return { tab: "home" };
}

function resolveOffers(offers) {
  return offers
    .map((offer) => {
      if (offer.platform !== "steam" || state.dataSource !== "steamLive" || !offer.steamAppID) {
        return offer;
      }

      const cacheKey = `${offer.steamAppID}-${state.region}`;
      const livePrice = steamCache.get(cacheKey);
      if (!livePrice) return offer;
      return { ...offer, livePrice };
    })
    .sort((a, b) => platformOrder(a.platform) - platformOrder(b.platform));
}

function platformOrder(platform) {
  return platform === "steam" ? 0 : 1;
}

function platformLabel(platform) {
  return platform === "steam" ? "Steam" : "PlayStation";
}

function recommendationText(offers) {
  const ps = offers.find((o) => o.platform === "playStation");
  if (ps && ps.psPlusIncluded) {
    return "有 PS Plus 别买直接玩";
  }

  const cheapest = getCheapestOffer(offers);
  if (!cheapest) return "暂无可比较报价";

  return `当前更划算平台 = ${platformLabel(cheapest.platform)}`;
}

function getCheapestOffer(offers) {
  if (!offers.length) return null;

  let winner = offers[0];
  let winnerPriceUSD = comparableUSD(offers[0]);

  for (let i = 1; i < offers.length; i += 1) {
    const p = comparableUSD(offers[i]);
    if (p < winnerPriceUSD) {
      winner = offers[i];
      winnerPriceUSD = p;
    }
  }

  return winner;
}

function comparableUSD(offer) {
  if (offer.livePrice) {
    const rate = CURRENCY_TO_USD[offer.livePrice.currency] || null;
    if (rate) {
      return offer.livePrice.current * rate;
    }
  }

  return offer.currentPriceUSD;
}

function offerDiscountPercent(offer) {
  if (offer.livePrice) {
    return Math.max(0, Math.round(offer.livePrice.discountPercent || 0));
  }

  if (offer.originalPriceUSD <= 0) return 0;
  const pct = ((offer.originalPriceUSD - offer.currentPriceUSD) / offer.originalPriceUSD) * 100;
  return Math.max(0, Math.round(pct));
}

function formatCurrentPrice(offer) {
  if (offer.livePrice && offer.livePrice.currency === state.currency) {
    if (offer.livePrice.currentFormatted) return offer.livePrice.currentFormatted;
    return formatMoney(offer.livePrice.current, offer.livePrice.currency);
  }

  const converted = offer.currentPriceUSD * USD_TO_CURRENCY[state.currency];
  return formatMoney(converted, state.currency);
}

function formatOriginalPrice(offer) {
  if (offer.livePrice && offer.livePrice.currency === state.currency) {
    if (offer.livePrice.originalFormatted) return offer.livePrice.originalFormatted;
    return formatMoney(offer.livePrice.original, offer.livePrice.currency);
  }

  const converted = offer.originalPriceUSD * USD_TO_CURRENCY[state.currency];
  return formatMoney(converted, state.currency);
}

function mergeMillionSellerCatalog() {
  const existing = new Set(MOCK_GAMES.map((game) => game.id));

  MILLION_SELLERS_2015_PLUS.forEach((entry, index) => {
    if (existing.has(entry.id)) {
      return;
    }

    MOCK_GAMES.push(buildMillionSellerGame(entry, index));
    existing.add(entry.id);
  });
}

function buildMillionSellerGame(entry, index) {
  const basePrice = typeof entry.basePriceUSD === "number" ? entry.basePriceUSD : 59.99;
  const steamCurrent = roundUSD(typeof entry.steamCurrentUSD === "number" ? entry.steamCurrentUSD : Math.max(14.99, basePrice * 0.68));
  const steamOriginal = roundUSD(typeof entry.steamOriginalUSD === "number" ? entry.steamOriginalUSD : Math.max(basePrice, steamCurrent + 15));
  const psCurrent = roundUSD(typeof entry.psCurrentUSD === "number" ? entry.psCurrentUSD : Math.max(19.99, steamCurrent + 5));
  const psOriginal = roundUSD(typeof entry.psOriginalUSD === "number" ? entry.psOriginalUSD : Math.max(psCurrent + 10, steamOriginal + 5));
  const releaseDate = entry.releaseDate || "2015-01-01";
  const releaseTime = releaseTimestamp({ playerGuide: { releaseDate } });
  const lowSteam = roundUSD(Math.max(9.99, steamCurrent * 0.72));
  const lowPS = roundUSD(Math.max(9.99, psCurrent * 0.75));
  const saleWindowStart = Number.isFinite(releaseTime) ? new Date(releaseTime) : new Date("2015-01-01");
  const searchName = encodeURIComponent(entry.name);
  const steamURL = entry.steamStoreURL || `https://store.steampowered.com/search/?term=${searchName}`;
  const psURL = entry.playStationStoreURL || `https://store.playstation.com/en-us/search/${searchName}`;
  const realCover = REAL_COVER_BY_ID[entry.id];
  const labels = realCover
    ? { cover: realCover, hero: realCover }
    : buildLabeledArtwork(entry.name, releaseDate.slice(0, 4));
  const millionPlusSales = Math.max(1, Number(entry.estimatedSalesM || 1));
  const metaBase = clampNumber(Math.round(78 + Math.min(16, millionPlusSales / 2)), 74, 97);
  const userBase10 = clampNumber(Number((6.9 + Math.min(2.6, millionPlusSales / 15)).toFixed(1)), 6.8, 9.6);
  const userBase5 = clampNumber(Number((3.6 + Math.min(1.2, millionPlusSales / 28)).toFixed(1)), 3.5, 4.9);
  const mainHours = Math.max(10, Math.round(16 + millionPlusSales * 1.4));
  const completionistHours = Math.max(mainHours + 12, Math.round(mainHours * 2.3));
  const groups = index % 4 === 0 ? ["todaysDeals"] : ["popular"];

  return {
    id: entry.id,
    name: entry.name,
    shortDescription: buildGeneratedDescription(entry, millionPlusSales),
    groups,
    artwork: {
      cover: labels.cover,
      hero: labels.hero
    },
    ratings: {
      steam: {
        media: { score: clampNumber(metaBase - 1, 70, 97), scale: 100 },
        player: { score: userBase10, scale: 10 }
      },
      playStation: {
        media: { score: clampNumber(metaBase, 70, 97), scale: 100 },
        player: { score: userBase5, scale: 5 }
      },
      metacritic: {
        media: { score: clampNumber(metaBase, 70, 97), scale: 100 },
        player: { score: clampNumber(Number((userBase10 - 0.4).toFixed(1)), 6.0, 9.5), scale: 10 }
      }
    },
    playerGuide: {
      releaseDate,
      estimatedSalesM: millionPlusSales,
      genres: Array.isArray(entry.genres) && entry.genres.length ? entry.genres : ["Action", "Adventure"],
      modes: Array.isArray(entry.modes) && entry.modes.length ? entry.modes : ["Single-player"],
      playtimeHours: {
        main: typeof entry.mainHours === "number" ? entry.mainHours : mainHours,
        completionist: typeof entry.completionistHours === "number" ? entry.completionistHours : completionistHours
      },
      difficulty: entry.difficulty || "Medium",
      developer: entry.developer || "--",
      publisher: entry.publisher || "--",
      contentAdvisory: entry.contentAdvisory || ["Violence"],
      communityPulse: {
        summary: "销量与社区活跃度长期稳定，适合追求成熟内容和大规模讨论生态的玩家。",
        steamSentiment: "Mostly Positive",
        playerFocus: "适合希望获得稳定更新、完善攻略和活跃社群支持的玩家。",
        recentIssues: [
          "跨平台性能与补丁节奏会随版本周期波动。",
          "大促期间价格变化快，建议先看历史低价。"
        ]
      },
      platformFeatures: {
        steam: {
          performance: "PC scalability depends on hardware",
          controller: "Controller supported",
          cloudSave: true,
          mods: true,
          extras: ["Community guides", "Workshop/mod ecosystem (title dependent)"]
        },
        playStation: {
          performance: "Quality / Performance options (title dependent)",
          controller: "DualSense support (title dependent)",
          cloudSave: true,
          mods: false,
          extras: ["Trophies", "PS ecosystem integration"]
        }
      },
      priceIntel: {
        historicalLowUSD: { steam: lowSteam, playStation: lowPS },
        historicalLowDate: {
          steam: formatISODate(new Date(saleWindowStart.getTime() + 1000 * 60 * 60 * 24 * 30)),
          playStation: formatISODate(new Date(saleWindowStart.getTime() + 1000 * 60 * 60 * 24 * 45))
        },
        saleEnds: {
          steam: formatISODate(new Date(Date.now() + 1000 * 60 * 60 * 24 * 10)),
          playStation: formatISODate(new Date(Date.now() + 1000 * 60 * 60 * 24 * 12))
        },
        likelySaleWindow: "Seasonal sales and publisher events usually create the best pricing windows."
      }
    },
    offers: [
      {
        id: `${entry.id}-steam`,
        platform: "steam",
        currentPriceUSD: steamCurrent,
        originalPriceUSD: steamOriginal,
        version: "Standard",
        psPlusIncluded: false,
        buyURL: steamURL,
        steamAppID: typeof entry.steamAppID === "number" ? entry.steamAppID : null
      },
      {
        id: `${entry.id}-ps`,
        platform: "playStation",
        currentPriceUSD: psCurrent,
        originalPriceUSD: psOriginal,
        version: "PS5 Standard",
        psPlusIncluded: false,
        buyURL: psURL,
        steamAppID: null
      }
    ]
  };
}

function buildLabeledArtwork(title, yearLabel) {
  const safeTitle = escapeSVGText(title);
  const safeYear = escapeSVGText(yearLabel || "");
  const seed = hashSeed(`${title}-${yearLabel}`);
  const hue1 = seed % 360;
  const hue2 = (hue1 + 42) % 360;
  const hue3 = (hue1 + 210) % 360;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 215'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='hsl(${hue1} 58% 26%)'/>
        <stop offset='100%' stop-color='hsl(${hue2} 64% 11%)'/>
      </linearGradient>
    </defs>
    <rect width='460' height='215' fill='url(#g)'/>
    <circle cx='400' cy='40' r='54' fill='hsla(${hue3} 80% 72% / 0.24)'/>
    <circle cx='78' cy='172' r='42' fill='hsla(${hue2} 78% 62% / 0.12)'/>
    <rect x='18' y='152' width='220' height='36' rx='9' fill='rgba(7,18,30,0.68)'/>
    <text x='32' y='176' fill='#d5e8fb' font-size='13' font-family='Arial'>Million Seller 2015+</text>
    <text x='24' y='64' fill='#f0f7ff' font-size='24' font-family='Arial' font-weight='700'>${safeTitle}</text>
    <text x='24' y='92' fill='#b4d2ed' font-size='16' font-family='Arial'>${safeYear}</text>
  </svg>`;
  const encoded = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return { cover: encoded, hero: encoded };
}

function buildGeneratedDescription(entry, salesM) {
  const releaseYear = String(entry.releaseDate || "").slice(0, 4) || "2015+";
  const genres = Array.isArray(entry.genres) && entry.genres.length
    ? entry.genres.slice(0, 2).join(" / ")
    : "Action / Adventure";
  return `${releaseYear} · ${genres} · Sales ${formatSales(salesM)}`;
}

function hashSeed(value) {
  let hash = 0;
  const text = String(value || "");
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 100000;
  }
  return Math.abs(hash);
}

function escapeSVGText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function roundUSD(value) {
  return Math.round(Number(value) * 100) / 100;
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, Number(value)));
}

function formatISODate(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function releaseTimestamp(game) {
  const releaseDate = game?.playerGuide?.releaseDate;
  const value = releaseDate ? new Date(releaseDate).getTime() : NaN;
  return Number.isFinite(value) ? value : 0;
}

function getCatalogStats() {
  const thresholdTime = new Date("2015-01-01").getTime();
  const millionPlusSince2015 = MOCK_GAMES.filter((game) => {
    const release = releaseTimestamp(game);
    const sales = Number(game?.playerGuide?.estimatedSalesM || 0);
    return release >= thresholdTime && sales >= 1;
  }).length;

  return {
    total: MOCK_GAMES.length,
    millionPlusSince2015
  };
}

function formatSales(value) {
  if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
    return "1M+";
  }

  if (value >= 10) {
    return `${Math.round(value)}M+`;
  }

  return `${value.toFixed(1)}M+`;
}

function getGameImage(game, type = "cover") {
  const candidate = game?.artwork?.[type];
  if (typeof candidate === "string" && candidate.trim().length > 0) {
    return candidate;
  }

  return FALLBACK_IMAGE;
}

function formatMoney(amount, currency) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "JPY" ? 0 : 2,
    maximumFractionDigits: currency === "JPY" ? 0 : 2
  }).format(amount);
}

function formatArray(values, maxCount = 2) {
  if (!Array.isArray(values) || !values.length) {
    return "--";
  }

  return values.slice(0, maxCount).join(" / ");
}

function formatHours(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "--";
  }

  return `${Math.round(value)}h`;
}

function formatDate(value) {
  if (!value) {
    return "--";
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(parsed);
}

function buildValueLabel(game, offers) {
  const mainHours = game.playerGuide?.playtimeHours?.main;
  const cheapest = getCheapestOffer(offers);
  if (typeof mainHours !== "number" || !cheapest) {
    return "";
  }

  const priceUSD = comparableUSD(cheapest);
  if (!(priceUSD > 0)) {
    return "";
  }

  const value = mainHours / priceUSD;
  return `Value ${value.toFixed(2)}h per USD`;
}

function getDealInsight(game, offers) {
  const cheapest = getCheapestOffer(offers);
  if (!cheapest) {
    return { label: "Deal data unavailable", toneClass: "neutral" };
  }

  const historicalLowUSD = game.playerGuide?.priceIntel?.historicalLowUSD?.[cheapest.platform];
  if (!(typeof historicalLowUSD === "number" && historicalLowUSD > 0)) {
    return { label: "Deal quality unknown", toneClass: "neutral" };
  }

  const currentUSD = comparableUSD(cheapest);
  const gap = ((currentUSD - historicalLowUSD) / historicalLowUSD) * 100;
  const gapText = `${gap >= 0 ? "+" : ""}${Math.round(gap)}% vs ATL`;

  if (currentUSD <= historicalLowUSD * 1.05) {
    return { label: `Great deal (${gapText})`, toneClass: "good" };
  }

  if (currentUSD <= historicalLowUSD * 1.2) {
    return { label: `Good deal (${gapText})`, toneClass: "ok" };
  }

  return { label: `Fair price (${gapText})`, toneClass: "warn" };
}

function formatGapVsLow(currentUSD, lowUSD) {
  if (!(typeof currentUSD === "number" && typeof lowUSD === "number" && lowUSD > 0)) {
    return "--";
  }

  const gap = ((currentUSD - lowUSD) / lowUSD) * 100;
  return `${gap >= 0 ? "+" : ""}${Math.round(gap)}%`;
}

function formatScoreLabel(metric) {
  if (!metric || typeof metric.score !== "number" || typeof metric.scale !== "number") {
    return "--";
  }

  const decimals = metric.scale <= 10 ? 1 : 0;
  const value = Number(metric.score).toFixed(decimals);
  return `${value}/${metric.scale}`;
}

function formatScoreValue(metric) {
  if (!metric || typeof metric.score !== "number") {
    return "--";
  }

  const decimals = metric.scale && metric.scale <= 10 ? 1 : 0;
  return Number(metric.score).toFixed(decimals);
}

async function ensureSteamLivePrices(game) {
  if (state.dataSource !== "steamLive") {
    state.detailLoading = false;
    state.detailMessage = "";
    return;
  }

  if (state.detailLoading) {
    return;
  }

  const steamOffers = game.offers.filter((o) => o.platform === "steam" && o.steamAppID);
  if (!steamOffers.length) return;

  const pending = steamOffers.filter((offer) => {
    const cacheKey = `${offer.steamAppID}-${state.region}`;
    return !steamCache.has(cacheKey) && !inflightSteamRequests.has(cacheKey);
  });

  if (!pending.length) {
    state.detailLoading = false;
    state.detailMessage = "";
    return;
  }

  state.detailLoading = true;
  state.detailMessage = "";
  render();

  const results = await Promise.all(
    pending.map((offer) => fetchSteamPriceOverview(offer.steamAppID, state.region))
  );

  const allFailed = results.every((r) => !r);
  state.detailLoading = false;
  state.detailMessage = allFailed ? "Steam request failed. Mock price is shown." : "";
  render();
}

async function fetchSteamPriceOverview(appID, region) {
  const cacheKey = `${appID}-${region}`;
  if (steamCache.has(cacheKey)) {
    return steamCache.get(cacheKey);
  }

  if (inflightSteamRequests.has(cacheKey)) {
    return inflightSteamRequests.get(cacheKey);
  }

  const url = `https://store.steampowered.com/api/appdetails?appids=${appID}&cc=${region}&filters=price_overview`;

  const request = fetch(url)
    .then(async (response) => {
      if (!response.ok) return null;
      const payload = await response.json();
      const entry = payload?.[String(appID)];
      const po = entry?.success ? entry?.data?.price_overview : null;
      if (!po || typeof po.final !== "number" || typeof po.initial !== "number") {
        return null;
      }

      const parsed = {
        currency: String(po.currency || "USD").toUpperCase(),
        original: po.initial / 100,
        current: po.final / 100,
        discountPercent: Number(po.discount_percent || 0),
        originalFormatted: po.initial_formatted || "",
        currentFormatted: po.final_formatted || ""
      };

      steamCache.set(cacheKey, parsed);
      return parsed;
    })
    .catch(() => null)
    .finally(() => {
      inflightSteamRequests.delete(cacheKey);
    });

  inflightSteamRequests.set(cacheKey, request);
  return request;
}

function persistWishlist() {
  safeStorageSet(storage.wishlist, JSON.stringify(Array.from(state.wishlist)));
}

function loadSetting(key, fallback, allowed) {
  const value = safeStorageGet(key);
  if (value && allowed.includes(value)) return value;
  return fallback;
}

function saveSetting(key, value) {
  safeStorageSet(key, value);
}

function loadJSONArray(key) {
  try {
    const raw = safeStorageGet(key);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
