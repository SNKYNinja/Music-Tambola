interface SongData {
	id: number;
	name: string;
	movie: string;
	path: string;
	disabled: boolean;
}

export const songData: SongData[] = [
	{
		id: 1,
		name: "Ore Piya",
		movie: "Aja Nachle",
		path: `/1.mp3`,
		disabled: false,
	},
	{
		id: 2,
		name: "Ladki Badi Anjani Hai",
		movie: "Kuch Kuch Hota Hai",
		path: "/2.mp3",
		disabled: false,
	},
	{
		id: 3,
		name: "Bholi Si Surat",
		movie: "Dil To Pagal Hai",
		path: "/3.mp3",
		disabled: false,
	},
	{
		id: 4,
		name: "Dil Kyu Yeh Mera",
		movie: "Kites",
		path: "/4.mp3",
		disabled: false,
	},
	{
		id: 5,
		name: "Janam Janam",
		movie: "Dilwale",
		path: "/5.mp3",
		disabled: false,
	},
	{
		id: 6,
		name: "Moh Moh Ke Dhage",
		movie: "Dum Laga Ke Haisha",
		path: "/6.mp3",
		disabled: false,
	},
	{
		id: 7,
		name: "Senorita",
		movie: "Zindagi Na Milegi Dobara",
		path: "/7.mp3",
		disabled: false,
	},
	{
		id: 8,
		name: "Long Drive Pe Chal",
		movie: "Khiladi 786",
		path: "/8.mp3",
		disabled: false,
	},
	{
		id: 9,
		name: "Tum Hi Ho",
		movie: "Aashiqui 2",
		path: "/9.mp3",
		disabled: false,
	},
	{
		id: 10,
		name: "Afghan Jalebi",
		movie: "Phantom",
		path: "/10.mp3",
		disabled: false,
	},
];
