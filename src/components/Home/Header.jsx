'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import { ArrowLeft, ArrowRight, Download, Send } from 'react-feather';
import AppButton from '@/UI/AppButton';


const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        '/https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg',
        'https://www.shutterstock.com/image-photo/demo-text-message-magnifying-glass-600nw-2491336635.jpg',
        '/https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg',
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    }

    return (
        <header className="bg-gradient-to-r from-primary to-primary-foreground text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-16 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            John Doe
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200">
                            Crafting digital experiences that inspire and innovate
                        </p>
                        <p className="text-lg md:text-xl font-semibold">
                            Senior Frontend Developer
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <AppButton
                                icon={Send}
                                customStyles="bg-white text-primary hover:bg-gray-100"
                                iconClasses="mr-2 h-4 w-4"
                                text="Hire Me"
                            />
                            <AppButton
                                variant="outline"
                                icon={Download}
                                text="Download CV"
                                customStyles="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                            />

                        </div>
                    </div>
                    <div className="relative h-[400px] w-full max-w-[300px] mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=400&width=300"
                                alt="Developer"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src={slides[currentSlide]}
                                alt={`Work demo ${currentSlide + 1}`}
                                width={300}
                                height={400}
                                className="rounded-lg shadow-lg transition-opacity duration-500"
                            />
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-lg"
                            aria-label="Previous slide"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-lg"
                            aria-label="Next slide"
                        >
                            <ArrowRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;