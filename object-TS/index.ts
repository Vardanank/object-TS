interface MetroStation {
    name: string;
    opened?: number;
}

interface AdministrativeDistrict {
    name: string;
    population?: number;
    streets?: string[];
    metroStations?: (string | MetroStation)[];
}

interface Capital {
    name: string;
    population?: number;
    ethnicity?: (string | EthnicGroup)[];
    origin?: {
        motherLand: string;
        modernCountries: (string | Country)[];
    };
    administrativeDistricts?: AdministrativeDistrict[];
}

interface Country {
    name: string;
    population?: number;
    subregion?: string;
    capital?: Capital;
}

interface EthnicGroup {
    name: string;
    population?: number;
}

interface Ocean {
    name: string;
    surfaceArea?: number;
    averageDept?: number;
    maxDept?: number;
    maxWidth?: number;
    seas?: Sea[];
    anotherName?: string;
    firstName?: string;
    largestSeas?: Sea[]; 
}

interface Sea {
    name: string;
    surfaceArea?: number;
    maxDept?: number;
    largestSeas?: Sea[];
    french?: string;
    islands?: string[];
    gulfs?: string[];
}

interface World {
    mainlands: WorldMainlands[];
    population: number;
    planetName: string;
    oceans: Ocean[];
}
interface WorldMainlands {
    name: string;
    area?: number;
    population?: number;
    religions?: string[];
    languagesMostCommon?: string[];
    bigCountries?: Country[];
}

const world: World = {
    mainlands: [
        {
            name: "Europe",
            area: 10_180_000,
            population: 745_173_774,
            religions: ["christianity", "islam", "other"],
            languagesMostCommon: ["Russian", "German", "English", "French"],
            bigCountries: [
                {
                    name: "Russia",
                    population: 144_444_359,
                    subregion: "Eastern Europe",
                    capital: {
                        name: "Moscow",
                        population: 13_104_177,
                        ethnicity: [{ name: "russian", population: 9_074_375 }, "tatars", { name: "armenian", population: 68_018 }],
                        origin: {
                            motherLand: "Armenian highland",
                            modernCountries: ["Armenia", "turkey", "Georgia", "Iran"],
                        },
                    },
                },
                {
                    name: "Germany",
                    population: 83_294_633,
                },
            ],
        },
        { name: "Asia", area: 44_579_000, population: 4_694_576_167 },
        { name: "North America", area: 24_709_000, population: 592_296_233 },
        { name: "South America", area: 17_840_000, population: 434_254_119 },
        { name: "Australia", area: 7_689_850, population: 25_921_089 },
        { name: "Africa", area: 30_370_000, population: 1_393_676_444 },
    ],
    population: 8_000_000_000,
    planetName: "Earth",
    oceans: [
        {
            name: "pacific",
            surfaceArea: 165_250_000,
            averageDept: 4200,
            maxDept: 10_911,
            largestSeas: [
                { name: "philippineSea"},
                {
                    name: "coralSea",
                    french: " Mer de Corail",
                    islands: ["vanuatu", "New Caledonia"],
                },
                { name: "Chilian"},
            ],
        },
        {
            name: "Atlantic",
            surfaceArea: 85_133_000,
            averageDept: 3646,
            maxDept: 8376,
            seas: [
                {
                    name: "Baltic",
                    gulfs: ["Gulf of Bothnia", "Gulf of Finland", "Gulf of Riga", "Bay of Gdansk"],
                },
                {
                    name: "Black sea",
                    surfaceArea: 436402,
                    maxDept: 2212,
                },
            ],
        },
        { name: "Indian Ocean", surfaceArea: 70_560_000, maxDept: 7290, maxWidth: 7600 },
        { name: "Southern Ocean", surfaceArea: 20_327_000, anotherName: "Atlantic Ocean" }, 
        { name: "Arctic Ocean", surfaceArea: 14_060_000 },
    ],
};

console.log(world);
