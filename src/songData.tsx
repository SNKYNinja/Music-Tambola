interface SongData {
    id: number | string;
    name: string;
    movie: string;
    disabled?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    audio?: any;
    diff?: "Easy" | "Medium" | "Hard",
}

export const songData: SongData[] = [
    {
        id: "1",
        name: "TUM SE HEE",
        movie: "JAB WE MET"
    },
    {
        id: "2",
        name: "ZARA SA",
        movie: "JANNAT"
    },
    {
        id: "3",
        name: "THE HUMMA SONG",
        movie: "OK JAANU",
    },
    {
        id: "4",
        name: "JASHAN E BAHARA",
        movie: "JODHA AKBAR",
    },
    {
        id: "5",
        name: "TU CHEEZ BADI HAI MAST MAST",
        movie: "MACHINE",
    },
    {
        id: "6",
        name: "UDE DIL BEFIKRE",
        movie: "BEFIKRE",
    },
    {
        id: "7",
        name: "TOH DISHOOM",
        movie: "DISHOOM",
    },
    {
        id: "8",
        name: "DIL IBADAT",
        movie: "TUM MILE",
    },
    {
        id: "9",
        name: "CHAAR KADAM",
        movie: "PK",
    },
    {
        id: "10",
        name: "SANAM TERI KASAM",
        movie: "SANAM TERI KASAM",
    },
    {
        id: "11",
        name: "JAMAL KUDU",
        movie: "ANIMAL",
    },
    {
        id: "12",
        name: "AAJ KI RAAT",
        movie: "STREE 2",
    },
    {
        id: "13",
        name: "CHARACTER DHEELA",
        movie: "READY",
    },
    {
        id: "14",
        name: "LUUT PUTT GAYA",
        movie: "DUNKI",
    },
    {
        id: "15",
        name: "UDI UDI JAYE",
        movie: "RAEES",
    },
    {
        id: "16",
        name: "O MERI ZOHRAJABEEN",
        movie: "PHIR HERA PHERI",
    },
    {
        id: "17",
        name: "JHAK MAAR KE",
        movie: "DESI BOYZ",
    },
    {
        id: "18",
        name: "ISHQ SUFIYANA",
        movie: "THE DIRTY PICTURE",
    },
    {
        id: "19",
        name: "MILAN ABHI AADHA ADHURA HAI",
        movie: "VIVAH",
    },
    {
        id: "20",
        name: "CHIKNI CHAMELI",
        movie: "AGNEEPATH",
    },
    {
        id: "21",
        name: "MAUJA HI MAUJA",
        movie: "JAB WE MET",
    },
    {
        id: "22",
        name: "ZOR KA ZHATKA",
        movie: "ACTION REPLAY",
    },
    {
        id: "23",
        name: "PIYA O RE PIYA",
        movie: "TERE NAAL LOVE HO GAYA",
    },
    {
        id: "24",
        name: "KAJRA RE",
        movie: "BUNTY AUR BABLI",
    },
    {
        id: "25",
        name: "HALE DIL",
        movie: "MURDER 2",
    },
    {
        id: "26",
        name: "HAAN TU HAIN",
        movie: "JANNAT",
    },
    {
        id: "27",
        name: "HUM SAATH SAATH HAIN",
        movie: "HUM SAATH - SAATH HAIN",
    },
    {
        id: "28",
        name: "GUZARISH",
        movie: "GHAJINI",
    },
    {
        id: "29",
        name: "DIL MAI BAJI GUITAR",
        movie: "APNA SAPNA MONEY MONEY",
    },
    {
        id: "30",
        name: "JALEBI BAI",
        movie: "DOUBLE DHAAMAL",
    },
    {
        id: "31",
        name: "CHUP CHUP KE",
        movie: "RUSH",
    },
    {
        id: "32",
        name: "KHUDA JAANE",
        movie: "BACHNA AE HASEENO",
    },
    {
        id: "33",
        name: "CRAZY KIYA RE",
        movie: "DHOOM 2",
    },
    {
        id: "34",
        name: "GAL MITTHI MITTHI",
        movie: "AISHA",
    },
    {
        id: "35",
        name: "AAPKA KYA HOGA",
        movie: "HOUSEFULL",
    },
    {
        id: "36",
        name: "SAAT SAMUNDAR",
        movie: "VISWATMA",
    },
    {
        id: "37",
        name: "TERE MAST MAST DO NAIN",
        movie: "DABANGG",
    },
    {
        id: "38",
        name: "PSYCHO SAIYAAN",
        movie: "SAAHO",
    },
    {
        id: "39",
        name: "KIYA KIYA",
        movie: "WELCOME",
    },
    {
        id: "40",
        name: "MALANG",
        movie: "DHOOM 3",
    },
    {
        id: "41",
        name: "MEHBOOBA MEHBOOBA",
        movie: "SHOLAY",
    },
    {
        id: "42",
        name: "AYAASHI",
        movie: "BADMAASH Company",
    },
    {
        id: "43",
        name: "AB TO FOREVER",
        movie: "TA RA RUM PUM",
    },
    {
        id: "44",
        name: "DIL KYU YEH MERA",
        movie: "KITES",
    },
    {
        id: "45",
        name: "HOTH RASILEY",
        movie: "WELCOME",
    },
    {
        id: "46",
        name: "KORE KORE SAPNE",
        movie: "SOORYAVANSHAM",
    },
    {
        id: "47",
        name: "SAJNA VE SAJNA",
        movie: "VICKY VIDYA KA WOH WALA VIDEO",
    },
    {
        id: "48",
        name: "EMOSANAL ATTYACHAR",
        movie: "Dev.D",
    },
    {
        id: "49",
        name: "MANN MERA",
        movie: "TABLE NO.21",
    },
    {
        id: "50",
        name: "SHIRT DA BUTTON",
        movie: "KYA SUPER COOL HAI HUM",
    },
];

export const songData2: SongData[] = [
    {
        id: "1",
        name: "TUJHE AKSA BEACH GHUMA DOON",
        movie: "GOD TUSSI GREAT HO",
        diff: "Easy"
    },
    {
        id: "2",
        name: "O MERI LAILA",
        movie: "LAILA MAJNU",
    },
    {
        id: "3",
        name: "SAJNI",
        movie: "LAPATA LADIES",
    },
    {
        id: "4",
        name: "AKHIYAN GULAAB ",
        movie: "TERI BAATON MEIN AISA ULJHA JIYA",
    },
    {
        id: "5",
        name: "AAOGE JAB TUM ",
        movie: "JAB WE MET",
    },
    {
        id: "6",
        name: "JASHAN E BAHARA ",
        movie: "JODHA AKBAR",
    },
    {
        id: "7",
        name: "SHAYAD",
        movie: "LOVE AAJ KAL",
    },
    {
        id: "8",
        name: "THE HUMMA SONG ",
        movie: "OK JAANU",
    },
    {
        id: "9",
        name: "SAIYAARA ",
        movie: "EK THA TIGER ",
    },
    {
        id: "10",
        name: "HUMSAFAR",
        movie: "BADRINATH KI DULHANIYA",
    },
    {
        id: "11",
        name: "HUMDARD",
        movie: "EK VILLAIN",
    },
    {
        id: "12",
        name: "TERE VAASTAE",
        movie: "ZARA HATKE ZARA BACHKE",
    },
    {
        id: "13",
        name: "TUM HEE HO BANDHU",
        movie: "COCKTAIL",
    },
    {
        id: "14",
        name: "SUIT SUIT ",
        movie: "HINDI MEDIUM",
    },
    {
        id: "15",
        name: "PYAAR HOTA KAI BAAR HAI ",
        movie: "TU JHOOTHI MAIN MAKKAAR",
    },
    {
        id: "16",
        name: "TU MERI",
        movie: "BANG BANG",
    },
    {
        id: "17",
        name: "TWIST",
        movie: "LOVE AAJ KAL",
    },
    {
        id: "18",
        name: "MANN MA EMOTION JAAGE ",
        movie: "DILWALE",
    },
    {
        id: "19",
        name: "MAI TERA BOYFRIEND",
        movie: "RAABTA",
    },
    {
        id: "20",
        name: "JAANE KYU",
        movie: "DOSTANA ",
    },
    {
        id: "21",
        name: "BESHARMI KI HEIGHT ",
        movie: "MAI TERA HERO",
    },
    {
        id: "22",
        name: "ILLEGAL WEAPON 2.O",
        movie: "STREET DANCER 3D",
    },
    {
        id: "23",
        name: "BOL NA HALKE ",
        movie: "JHOOM BARABAR JHOOM",
    },
    {
        id: "24",
        name: "PREM KI NAIYA",
        movie: "AJAB PREM KI GAJAB KAHANI",
    },
    {
        id: "25",
        name: "CHARACTER DHEELA ",
        movie: "READY",
    },
    {
        id: "26",
        name: "CHASHNI ",
        movie: "BHARAT",
    },
    {
        id: "27",
        name: "LAUNG DA LASKARA ",
        movie: "PATIALA HOUSE",
    },
    {
        id: "28",
        name: "TERE BIN ",
        movie: "SIMMBA",
    },
    {
        id: "29",
        name: "LUUT PUTT GAYA",
        movie: "DUNKI",
    },
    {
        id: "30",
        name: "MAIN DHOONDHNE KO ZAMANE MAI ",
        movie: "HEARTLESS",
    },
    {
        id: "31",
        name: "MAIN AGAR",
        movie: "TUBE LIGHT",
    },
    {
        id: "32",
        name: "JAB SE TERE NAINA ",
        movie: "SAWARIYA",
    },
    {
        id: "33",
        name: "NADIYO PAAR ",
        movie: "ROOHI",
    },
    {
        id: "34",
        name: "WHAT JHOOMKA",
        movie: "ROCKY AUR RANI KI PREM KAHANI",
    },
    {
        id: "35",
        name: "ISHQ DI BAAJIYAAN",
        movie: "SOORMA",
    },
    {
        id: "36",
        name: "CHIKNI CHAMELI",
        movie: "AGNEEPATH",
    },
    {
        id: "37",
        name: "PSYCHO SAIYAAN",
        movie: "SAAHO",
    },
    {
        id: "38",
        name: "MERE BINA",
        movie: "CROOK",
    },
    {
        id: "39",
        name: "THUMKESHWARI",
        movie: "BHEDIYA",
    },
    {
        id: "40",
        name: "DHATING NAACH ",
        movie: "PHATA POSTER NIKLA HERO",
    },
    {
        id: "41",
        name: "SAU TARAH KE ",
        movie: "DHISHOOM",
    },
    {
        id: "42",
        name: "NACHENGE SAARI RAAT",
        movie: "JUNOONIYAT",
    },
    {
        id: "43",
        name: "PARAM SUNDARI ",
        movie: "MIMI ",
    },
    {
        id: "44",
        name: "AGAR TUM SAATH HO",
        movie: "TAMASHA",
    },
    {
        id: "45",
        name: "HAULI HAULI",
        movie: "DE DE PYAAR DE",
    },
    {
        id: "46",
        name: " SAJDA",
        movie: "MY NAME IS KHAN ",
    },
    {
        id: "47",
        name: "NAJAA",
        movie: "SOORYAVANSHI",
    },
    {
        id: "48",
        name: "YAAR NA MILE",
        movie: "KICK",
    },
    {
        id: "49",
        name: "TUM TAK",
        movie: "RANJHANA",
    },
    {
        id: "50",
        name: "SOORAJ DOOBA HAI ",
        movie: "ROY",
    },
    {
        id: "51",
        name: "CHAND SIFARISH",
        movie: "FANAA",
    },
    {
        id: "52",
        name: "JEENA JEENA ",
        movie: "BADLAPUR",
    },
    {
        id: "53",
        name: "KHUDA JAANE ",
        movie: "BACHNA AE HASEENO",
    },
    {
        id: "54",
        name: "TERI ORE",
        movie: "SINGH IS KING",
    },
    {
        id: "55",
        name: "TE AMO",
        movie: "DUM MARO DUM",
    },
    {
        id: "56",
        name: "MOH MOH KE DHAAGE",
        movie: "DUM LAGA KE HAISA",
    },
    {
        id: "57",
        name: "O RANGREZ",
        movie: "BHAAG MILKA BHAAG",
    },
    {
        id: "58",
        name: "SAWARE",
        movie: "PHANTOM",
    },
    {
        id: "59",
        name: "LADKI BADI ANJANI HAI",
        movie: "KUCH KUCH TOH HOTA HAI",
    },
    {
        id: "60",
        name: "BHOLI SI SURAT",
        movie: "DIL TOH PAGAL HAI",
    },
    {
        id: "61",
        name: "DIL KYU YEH MERA",
        movie: "KITES",
    },
    {
        id: "62",
        name: "KABHI KABHI ADITI",
        movie: "JAANE TU YA JAANE NA",
    },
    {
        id: "63",
        name: "MAIN AGAR KAHOON",
        movie: "OM SHANTI OM",
    },
    {
        id: "64",
        name: "ISHQ SUFIYANA",
        movie: "THE DIRTY PICTURE",
    },
    {
        id: "65",
        name: "MUQABLA",
        movie: "STREET DANCER",
    },
    {
        id: "66",
        name: "HAR FUN MAULA",
        movie: "KOI JAANE NA",
    },
    {
        id: "67",
        name: "O JAANE JAANA",
        movie: "PYAAR KIYA TOH DARNA KYA",
    },
    {
        id: "68",
        name: "MORNI BANKE",
        movie: "BADHAI HO",
    },
    {
        id: "69",
        name: "AKH LADJAAVE",
        movie: "LOVE YAATRI",
    },
    {
        id: "70",
        name: "NAZAR NA LAG JAAYE ",
        movie: "STREE ",
    },
    {
        id: "71",
        name: "JAG GHOOMEYA ",
        movie: "SULTAN",
    },
    {
        id: "72",
        name: "DEKHTE DEKHTE",
        movie: "BATTI GUL METER CHALU",
    },
    {
        id: "73",
        name: "ZAALIMA",
        movie: "RAEES",
    },
    {
        id: "74",
        name: "TERA FITOOR",
        movie: "GENIUS",
    },
    {
        id: "75",
        name: "TERA CHEHRA",
        movie: "SANAM TERI KASAM",
    },
    {
        id: "76",
        name: "PANI DA RANG",
        movie: "VICKY DONOR",
    },
    {
        id: "77",
        name: "AINVAYI AINVAYI",
        movie: "BAND BAJA BAARAT",
    },
    {
        id: "78",
        name: "FIRST CLASS",
        movie: "KALANK",
    },
    {
        id: "79",
        name: "JHAK MAAR KE",
        movie: "DESI BOYZ",
    },
    {
        id: "80",
        name: "DEEWANA HAI DEKHO",
        movie: "KABHI KHUSHI KABHI GUM",
    },
    {
        id: "81",
        name: "SURILI ANKHIYO WALE",
        movie: "VEER",
    },
    {
        id: "82",
        name: "MATARGHASTI",
        movie: "TAMASHA",
    },
    {
        id: "83",
        name: "MERA NAAM TU",
        movie: "ZERO",
    },
    {
        id: "84",
        name: "BAAZIGAR O BAAZIGAR",
        movie: "BAAZIGAR",
    },
    {
        id: "85",
        name: "SAAT SAMUNDAR",
        movie: "VISWATMA",
    },
    {
        id: "86",
        name: "TERE MAST MAST DO NAIN",
        movie: "DABANGG",
    },
    {
        id: "87",
        name: "KABHI JO BADAL BARSE",
        movie: "JACKPOT",
    },
    {
        id: "88",
        name: "PEHLI NAZAR MAIN",
        movie: "RACE ",
    },
    {
        id: "89",
        name: "SADI GALI",
        movie: "TANU WEDS MANU",
    },
    {
        id: "90",
        name: "OH HO HO ",
        movie: "HINDI MEDIUM",
    },
    {
        id: "91",
        name: "DIL MAI BAJI GUITAR",
        movie: "APNA SAPNA MONEY MONEY",
    },
    {
        id: "92",
        name: "ZARA ZARA",
        movie: "REHNA HAI TERE DIL MAI",
    },
    {
        id: "93",
        name: "DIL NA JAANEYA",
        movie: "GOOD NEWS",
    },
    {
        id: "94",
        name: "BOL DO NA ZARA",
        movie: "AZHAR",
    },
    {
        id: "95",
        name: "EK DIL EK JAAN ",
        movie: "PADMAVAT",
    },
    {
        id: "96",
        name: "PIYA O RE PIYA",
        movie: "TERE NAAL LOVE HO GAYA",
    },
    {
        id: "97",
        name: "MANN MERA ",
        movie: "TABLE NO.21",
    },
    {
        id: "98",
        name: "HALE DIL",
        movie: "MURDER 2",
    },
    {
        id: "99",
        name: "UCHA LAMBA KAD ",
        movie: "WELCOME",
    },
    {
        id: "100",
        name: "SHIRT DA BUTTON",
        movie: "KYA SUPER COOL HAI HUM",
    },
];


songData.forEach((song) => {
    song.name = song.name.toLocaleLowerCase();
    song.movie = song.movie.toLocaleLowerCase();
    song.id = Number(song.id);
    song.disabled = false;

    if (song.id < 21) song.diff = "Easy"
    else if (song.id < 41) song.diff = "Medium"
    else song.diff = "Hard"
});
