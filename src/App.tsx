"use client";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface SongData {
	id: number;
	name: string;
	movie: string;
	path: string;
	disabled: boolean;
}

const songData: SongData[] = [
	{
		id: 1,
		name: "Ore Piya",
		movie: "Aja Nachle",
		path: "/1.mp3",
		disabled: false,
	},
];

function App() {
	const [data, setData] = useState(songData);
	const [showAnswer, setAnswer] = useState(false);

	const handleClick = (id: number) => {
		const newData = [...data];
		newData.map((i) => {
			if (i.id == id) {
				i.disabled = true;
			}
			return i;
		});
		setData(newData);
	};

	// const handleAnswer = () => {
	//   setAnswer(!showAnswer);
	// }

	return (
		<div className="grid grid-rows-10 grid-cols-10 gap-4 m-4 text-center bold font-semibold text-slate-800 text-lg">
			{data.map((item) => (
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<button className="btn" disabled={item.disabled}>
							{item.id}
						</button>
					</AlertDialogTrigger>
					<AlertDialogContent className="flex justify-center items-center flex-col">
						{showAnswer && (
							<AlertDialogHeader className="font-bold text-center text-xl">
								Song: {item.name}
								<br></br>Movie: {item.movie}
							</AlertDialogHeader>
						)}
						<div className="flex justify-center items-center gap-3">
							<audio src="/1.mp3" controls></audio>
							<AlertDialogCancel
								className="rounded-md bg-sky-500 hover:bg-sky-600 px-4 h-10 mt-4"
								onClick={() => handleClick(item.id)}
							>
								Done
							</AlertDialogCancel>
							<button
								className="rounded-md bg-green-500 hover:bg-green-600 px-4 h-10"
								onClick={() => setAnswer(!showAnswer)}
							>
								Answer
							</button>
						</div>
					</AlertDialogContent>
				</AlertDialog>
			))}
		</div>
	);
}

export default App;
