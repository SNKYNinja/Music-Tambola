"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { songData } from "./songData";

function AudioPlayer({ src }: { src: string }) {
    return (
        <audio
            src={src}
            controls
            preload="auto"
            className="border-b-4 border-slate-400 rounded-full"
        ></audio>
    );
}

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
        setAnswer(false);
        setData(newData);
    };

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                setAnswer(false);
            }
        });
    }, []);

    return (
        <>
            <h1 className="font-protest text-6xl mt-3 mb-7 text-center">
                <span className="text-indigo-600">&#9834;</span> Musical{" "}
                <span className="text-indigo-500">~</span> Tambola{" "}
                <span className="text-indigo-600">&#9834;</span>
            </h1>
            <div className="grid grid-rows-10 grid-cols-10 gap-3 m-4 text-center bold font-semibold text-slate-800 text-lg">
                {data.map((item) => (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button
                                className="bg-blue-500 border-blue-600 hover:bg-blue-500 hover:text-white text-white cursor-pointer h-16 transition-all px-6 py-2 rounded-lg border-b-[6px] outline-none hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] disabled:bg-red-500 disabled:border-red-600 disabled:cursor-not-allowed"
                                disabled={item.disabled}
                            >
                                {item.id}
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="w-[40%] max-w-screen flex justify-center items-center flex-col h-auto border-b-4 border-slate-400">
                            {showAnswer && (
                                <AlertDialogHeader className="font-fredoka text-center text-xl capitalize ">
                                    <div className="text-3xl">
                                        <span className="font-semibold">
                                            Song:
                                        </span>{" "}
                                        {item.name}
                                    </div>
                                    <div className="text-3xl">
                                        <span className="font-semibold">
                                            Movie:
                                        </span>{" "}
                                        {item.movie}
                                    </div>
                                </AlertDialogHeader>
                            )}
                            <div className="flex justify-center items-center gap-3">
                                <AudioPlayer
                                    src={`/${item.id}.mp3`}
                                ></AudioPlayer>
                                <AlertDialogCancel
                                    className="cursor-pointer h-12 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 outline-none border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:bg-blue-500 hover:text-white hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] disabled:bg-red-500 disabled:border-red-600 disabled:cursor-not-allowed"
                                    onClick={() =>
                                        handleClick(item.id as number)
                                    }
                                >
                                    Done
                                </AlertDialogCancel>
                                <button
                                    className="cursor-pointer h-12 transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 outline-none border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:bg-green-500 hover:text-white hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] disabled:bg-red-500 disabled:border-red-600 disabled:cursor-not-allowed"
                                    onClick={() => setAnswer(!showAnswer)}
                                >
                                    Answer
                                </button>
                            </div>
                        </AlertDialogContent>
                    </AlertDialog>
                ))}
            </div>
        </>
    );
}

export default App;
