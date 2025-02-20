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

songData.forEach((song) => {
    song.name = song.name.toLocaleLowerCase();
    song.movie = song.movie.toLocaleLowerCase();
    song.id = Number(song.id);
    song.disabled = false;

    if (song.id < 21) song.diff = "Easy"
    else if (song.id < 41) song.diff = "Medium"
    else song.diff = "Hard"
});
