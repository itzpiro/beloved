'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, HeartIcon, X } from 'lucide-react'
import StoryPage from './StoryPage'
import { TimeCounter } from './TimeCounter'
import { FlipWords } from './ui/flip-words'

export default function MainContent() {
    const [currentPage, setCurrentPage] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 5))
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0))

    const pages = [
        // Cover Page
        <StoryPage key="cover" backgroundColor="bg-gradient-to-br from-rose-200 to-purple-200">
            <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-44 h-44 mb-8 rounded-full overflow-hidden shadow-md"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1767986552377-efeca5e44e58?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Heart icon"
                        priority={true}
                        width={176}
                        height={176}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 relative z-10">
                    Our Special Story
                </h1>
                <div className="text-2xl md:text-3xl text-purple-700 mb-8 relative z-10">
                    Hey Cutiepie, you are<br />my<FlipWords words={['Manchii',"Buddu" ,'Sleep manager', 'paglu', 'vc partner','Jiddi', 'Tooti bachhi']} className="text-nowrap" />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-pink-600 transition-colors duration-300"
                    onClick={nextPage}
                >
                    Open Our Story
                </motion.button>
            </div>
        </StoryPage>,

        // Our Journey Page
        <StoryPage key="journey" backgroundColor="bg-gradient-to-br from-blue-200 to-green-200">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">Our Journey</h2>
            <div className="space-y-4 flex-1 overflow-y-auto overflow-x-hidden rounded-xl custom-scrollbar">
                {[
                    { date: 'AUGUST , 2025', event: 'Our Journey Began', emoji: '❤️' },
                    { date: '14 Jan , 2026', event: 'First Movie Together On Tele VC', emoji: '🎬' },
                    { date: 'WAITING', event: 'First VC ', emoji: '🤗' },
                    { date: '6 OCT...', event: 'The new beginning ', emoji: '✈️' },
                    { date: 'HEHEHE', event: 'First Fight & Patch-up', emoji: '💬' },
                    { date: 'IKYK', event: 'First Christmas Together', emoji: '🎄' },
                ]
                    .map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md"
                        >
                            <span className="text-3xl">{item.emoji}</span>
                            <div className='relative z-10'>
                                <p className="font-medium text-gray-800">{item.event}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </StoryPage>,

        // Time Together Page
        <StoryPage key="time" backgroundColor="bg-gradient-to-br from-pink-200 to-purple-200">
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 relative z-10">Our Time Together</h2>
                <div className="w-full max-w-md space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <TimeCounter
                            startDate="2025-09-02"
                            label="As Friends"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <TimeCounter
                            startDate="2025-11-03"
                            label="As Confidant Friends"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <HeartIcon className="w-16 h-16 text-rose-500 mx-auto" />
                </motion.div>
                <motion.p
                    className="text-lg md:text-xl text-blue-600 mt-5 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Every moment with you is a treasure!
                </motion.p>
            </div>
        </StoryPage>,

        // Photo Gallery Page
        <StoryPage key="gallery" backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-100">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6 relative z-10">Memorable Moments</h2>
            <div className="flex-1 rounded-2xl overflow-y-auto overflow-x-hidden custom-scrollbar">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 rounded-2xl">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(i)}
                        >
                            {/* If you want to show your pics then you can save your pics in public/images folder like this 1.jpg, 2.jpg, 3.jpg then replace the src to this - /images/${i}.jpg */}
                            <Image
                                src={`/images/${i}.jpg`}
                                alt={`Gallery image ${i}`}
                                width={330}
                                height={270}
                                className="rounded-2xl object-cover h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </StoryPage>,

        // Letter page
        <StoryPage key="letter" backgroundColor="bg-gradient-to-br from-blue-200 to-gray-200">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">A Special Message</h2>
            <div className="bg-white rounded-xl p-6 shadow-md overflow-y-auto flex-1 custom-scrollbar">
                <div className="relative z-10">
                    <div className="text-gray-700 text-lg leading-relaxed mb-4">
                        <p>Whising Uh.. a Happy Birthday! I don’t even know where to begin because there are so many things I want to say today. First of all, I truly wish that this new year of your life brings uh.. happiness, success, and beautiful moments that you will always remember.every conversation, and every memory we've shared has built a story(shit thoda out of the track ho gya ..)... Life changes people sometimes, BUT sometimes people changes Life..  , I hope those changes lead uh.. toward something even better and brighter. You deserve good things, and I hope you always keep moving forward with confidence and strength. May you succeed in everything you work for, and may your GOAL slowly turn into reality.And of course, today is your day, so enjoy it fully. Play your favorite songs, dance like nobody’s watching — "DJ wale TABU , volume thoda aur badha do!" Celebrate every little moment because uhh.. truly deserve happiness. Manchii always remember to stay (+)Ve and focus on yourself.And think less... Sometimes people bring negativity into our lives, but the best thing we can do is forget those negative people and keep moving forward. Uhh.. have a very kind heart, sometimes even too good for this world, and that’s something really special about uhh... Never lose that goodness. Always keep smiling, keep shining, and keep becoming a better version of yourself every day. Once again, happy birthday — may this year bring uhh.. endless happiness, success, and reasons to smile.
💐</p>
                    </div>
                    <p className="text-right text-rose-600 font-semibold">
                        #OFF ,<br />
                        Seer ⚡️
                    </p>
                </div>
            </div>
        </StoryPage>,

        // Final Page
        <StoryPage key="final" backgroundColor="bg-gradient-to-br from-pink-100 to-blue-200">
            <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-4xl font-bold text-pink-600 mb-6 relative z-10">Moments Still Waiting ....</h2>
                <p className="text-xl text-blue-700 mb-8 relative z-10">
                The best part of every day is knowing you’re in it.
                </p>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-6xl mb-8"
                >
                    ❤️
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-rose-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-rose-600 transition-colors duration-300"
                    onClick={() => setCurrentPage(0)}
                >
                    Start Over
                </motion.button>
            </div>
        </StoryPage>
    ]

    return (
        <div className="relative w-full h-screen ">
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-4xl h-[78vh] bg-white rounded-3xl shadow-question-card overflow-hidden relative flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute"
                    >
                        <HeartIcon size={200} className='fill-pink-100 stroke-none' />
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {pages[currentPage]}
                    </AnimatePresence>
                </div>
            </div>

            {currentPage > 0 && (
                <button
                    onClick={prevPage}
                    className="fixed left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
                >
                    <ChevronLeft className="text-pink-600" />
                </button>
            )}

            {currentPage < pages.length - 1 && (
                <button
                    onClick={nextPage}
                    className="fixed right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
                >
                    <ChevronRight className="text-pink-600" />
                </button>
            )}

            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="fixed left-1/2 top-4 transform -translate-x-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
                    >
                        <X className="text-pink-500" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.2 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="bg-pink-50 p-4 rounded-3xl shadow-2xl max-w-fit w-full h-max overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* When showing your own pics replace image src with this - /images/${selectedImage}.jpg */}
                        <Image
                            src={`/images/${i}.jpg`}
                            width={300}
                            height={250}
                            className="rounded-2xl w-auto h-auto"
                        />
                        <p className="mt-4 text-center text-gray-700">Moment {selectedImage}</p>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

