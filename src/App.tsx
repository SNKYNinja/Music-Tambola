"use client"

import { AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogHeader } from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"
import { songData } from "./songData"
import { motion, AnimatePresence } from "framer-motion"

function AudioPlayer({ src }: { src: string }) {
    return (
        <motion.audio
            src={src}
            controls
            preload="auto"
            className="border-b-4 border-slate-400 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        ></motion.audio>
    )
}

function App() {
    const [data, setData] = useState(songData)
    const [showAnswer, setAnswer] = useState(false)
    const [openDialogId, setOpenDialogId] = useState<number | string | null>(null)

    const handleClick = (id: number) => {
        const newData = [...data]
        newData.map((i) => {
            if (i.id == id) {
                i.disabled = true
            }
            return i
        })
        setAnswer(false)
        setData(newData)
        setOpenDialogId(null) // Close the dialog
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setAnswer(false)
                setOpenDialogId(null) // Close the dialog
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-500 border-green-600 hover:bg-green-500"
            case "Medium":
                return "bg-yellow-500 border-yellow-600 hover:bg-yellow-500"
            case "Hard":
                return "bg-red-500 border-red-600 hover:bg-red-500"
            default:
                return "bg-blue-500 border-blue-600 hover:bg-blue-500"
        }
    }

    return (
        <>
            <div className="fixed top-4 left-4 z-10">
                <img src="/vit_logo.png" alt="Left Logo" width={150} height={100} />
            </div>
            <div className="fixed top-4 right-4 z-10">
                <img src="/ramanujan.png" alt="Right Logo" width={200} height={100} />
            </div>
            <motion.h1
                className="font-raleway text-6xl mt-3 mb-7 text-center font-semibold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-indigo-600">&#9834;</span> Musical Tambola 2.0{" "}
                <span className="text-indigo-600">&#9834;</span>
            </motion.h1>
            <motion.div
                className="grid grid-rows-10 grid-cols-5 gap-3 m-4 text-center bold font-semibold text-slate-800 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <AnimatePresence>
                    {data.map((item, index) => (
                        <AlertDialog key={item.id} open={openDialogId === item.id} onOpenChange={(isOpen) => setOpenDialogId(isOpen ? item.id : null)}>
                            <AlertDialogTrigger asChild>
                                <motion.button
                                    className={`${getDifficultyColor(item.diff!)} text-white cursor-pointer h-16 transition-all px-6 py-2 rounded-lg border-b-[6px] outline-none hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] disabled:bg-gray-400 disabled:border-gray-500 disabled:cursor-not-allowed`}
                                    disabled={item.disabled}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {index + 1}
                                </motion.button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="w-[40%] max-w-screen flex justify-center items-center flex-col h-auto border-b-4 border-slate-400">
                                <AnimatePresence>
                                    {showAnswer && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <AlertDialogHeader className="font-fredoka text-center text-xl capitalize ">
                                                <div className="text-3xl">
                                                    <span className="font-semibold">Song:</span> {item.name}
                                                </div>
                                                <div className="text-3xl">
                                                    <span className="font-semibold">Movie:</span> {item.movie}
                                                </div>
                                            </AlertDialogHeader>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="flex justify-center items-center gap-3">
                                    <AudioPlayer src={`/${item.id}.mp3`}></AudioPlayer>
                                    <motion.button
                                        className="cursor-pointer h-12 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 outline-none border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:bg-blue-500 hover:text-white hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] disabled:bg-gray-400 disabled:border-gray-500 disabled:cursor-not-allowed"
                                        onClick={() => handleClick(item.id as number)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Done
                                    </motion.button>
                                    <motion.button
                                        className="cursor-pointer h-12 transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 outline-none border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:bg-green-500 hover:text-white hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] disabled:bg-gray-400 disabled:border-gray-500 disabled:cursor-not-allowed"
                                        onClick={() => setAnswer(!showAnswer)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Answer
                                    </motion.button>
                                </div>
                            </AlertDialogContent>
                        </AlertDialog>
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default App
