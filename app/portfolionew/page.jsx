'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation component

const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-gray-100 py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Ismael Dayo</div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/portfolio-new" className="hover:text-slate-300 transition-colors">Portfolio</Link>
                    <Link href="/photography" className="hover:text-slate-300 transition-colors">Photography</Link>
                    <Link href="/achievements" className="hover:text-slate-300 transition-colors">Achievements</Link>
                    <Link href="/portfolio-process" className="hover:text-slate-300 transition-colors">Process</Link>
                    <Link href="/blog-editor" className="hover:text-slate-300 transition-colors">Blog</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-100">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> */}
                    </button>
                </div>
            </div>
        </nav>
    );
};

// Footer component
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* About Section */}

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Ismael Dayo</h3>
                        <p className="mb-4">
                            Professional photographer and digital artist with a passion for capturing meaningful moments.
                        </p>
                        
                        <div className="flex space-x-3">
                            <a
                                href="https://instagram.com/ismaeldayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#E1306C]/20 hover:bg-[#E1306C] transition-colors duration-300"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                    className="brightness-90 hover:brightness-110"
                                />
                            </a>

                            <a
                                href="https://twitter.com/ismaeldayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1DA1F2]/20 hover:bg-[#1DA1F2] transition-colors duration-300"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                    alt="Twitter"
                                    width={20}
                                    height={20}
                                    className="brightness-90 hover:brightness-110"
                                />
                            </a>

                            <a
                                href="https://linkedin.com/in/ismaeldayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0077B5]/20 hover:bg-[#0077B5] transition-colors duration-300"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                                    alt="LinkedIn"
                                    width={20}
                                    height={20}
                                    className="brightness-90 hover:brightness-110"
                                />
                            </a>
                        </div>
                    </div>
                  

                    {/* Portfolio Links */}

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Portfolio</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/photography" className="hover:text-gray-100 transition-colors">
                                    Photography
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio-process" className="hover:text-gray-100 transition-colors">
                                    Creative Process
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio-new" className="hover:text-gray-100 transition-colors">
                                    Featured Work
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Blog Links */}

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Blog</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog-editor" className="hover:text-gray-100 transition-colors">
                                    Latest Articles
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-editor" className="hover:text-gray-100 transition-colors">
                                    Photography Tips
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-editor" className="hover:text-gray-100 transition-colors">
                                    Behind the Scenes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact</h3>

                        <div className="flex items-start mb-2">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                alt="Email"
                                width={20}
                                height={20}
                                className="mr-2 mt-1"
                            />
                            <a
                                href="mailto:ismaiheel4real2008@gmail.com"
                                className="hover:text-gray-100 transition-colors"
                            >
                                ismaiheel4real2008@gmail.com
                            </a>
                        </div>

                        <div className="flex items-start mb-2">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/126/126341.png"
                                alt="Phone"
                                width={20}
                                height={20}
                                className="mr-2 mt-1"
                            />
                            <a
                                href="tel:+2348032159449"
                                className="hover:text-gray-100 transition-colors"
                            >
                                +234 (80) 3215 - 9449
                            </a>
                        </div>

                        <div className="flex items-start">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
                                alt="Location"
                                width={20}
                                height={20}
                                className="mr-2 mt-1"
                            />
                            <a
                                href="https://goo.gl/maps/4cX7UpksqJErY2LdA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-100 transition-colors"
                            >
                                123, University of Ibadan, Oyo State
                            </a>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                </div>
        </footer>
    );
};

// Portfolio card component

const PortfolioCard = ({ title, category, imageUrl }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                <p className="text-sm font-medium uppercase tracking-wider text-slate-300">{category}</p>
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="rounded-full bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600">View Project</button>
                </div>
            </div>
        </div>
    );
};

// Main component

const PortfolioNew = () => {
    const portfolioItems = [
        {
            id: 1,
            title: "Urban Landscapes",
            category: "Photography",
            imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: "Natural Wonders",
            category: "Photography",
            imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            title: "Portrait Collection",
            category: "Photography",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            title: "Abstract Compositions",
            category: "Digital Art",
            imageUrl: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            title: "Corporate Branding",
            category: "Commercial",
            imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            title: "Wedding Stories",
            category: "Event Photography",
            imageUrl: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        }
    ];

    const [filter, setFilter] = useState("All");

    const categories = ["All", "Photography", "Digital Art", "Commercial", "Event Photography"];

    const filteredItems = filter === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="bg-slate-800 py-20 text-center text-white">
                <div className="container mx-auto px-6">
                    <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300">
                        A showcase of my professional work and creative projects in photography and digital art.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${filter === category
                                ? "bg-slate-700 text-white"
                                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item) => (
                        <PortfolioCard
                            key={item.id}
                            title={item.title}
                            category={item.category}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-slate-200 py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-800">Want to work together?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-slate-600">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                        <button className="rounded-full bg-slate-700 px-8 py-3 font-medium text-white transition-colors hover:bg-slate-600">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PortfolioNew;