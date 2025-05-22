"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function HireMePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            description: ''
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Work with Ismael Dayo</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        I'm available for freelance projects, collaborations, and full-time opportunities.
                        Let's create something amazing together.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">My Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">Photography</h3>
                            <p className="text-slate-600">Professional photography services for events, portraits, products, and more.</p>
                        </div>

                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">Web Development</h3>
                            <p className="text-slate-600">Custom websites built with modern technologies focused on performance and user experience.</p>
                        </div>

                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">UI/UX Design</h3>
                            <p className="text-slate-600">Intuitive and beautiful interfaces that enhance user experience and drive engagement.</p>
                        </div>

                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">Brand Strategy</h3>
                            <p className="text-slate-600">Developing cohesive brand identities that resonate with your target audience.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Me</h2>

                    {isSubmitted ? (
                        <div className="bg-slate-100 p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Thank you for your interest!</h3>
                            <p className="text-slate-600 mb-4">I'll review your project details and get back to you within 48 hours.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="photography">Photography</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                    <option value="brand-strategy">Brand Strategy</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                                        Budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    >
                                        <option value="">Select a budget range</option>
                                        <option value="less-than-1000">Less than $1,000</option>
                                        <option value="1000-5000">$1,000 - $5,000</option>
                                        <option value="5000-10000">$5,000 - $10,000</option>
                                        <option value="10000-plus">$10,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                                        Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    >
                                        <option value="">Select a timeline</option>
                                        <option value="less-than-1-month">Less than 1 month</option>
                                        <option value="1-3-months">1-3 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="6-plus-months">6+ months</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                                    Project Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition font-medium"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Footer component will be imported here */}
            <Footer />
        </div>
    );
}

// Footer component that will be used across all pages
function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Ismael Dayo</h3>
                        <p className="mb-4 text-slate-300">
                            Creating memorable experiences through design, development, and photography.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-300 hover:text-white transition">
                                <span className="sr-only">Twitter</span>
                                {/* Social icon would go here */}
                            </a>
                            <a href="#" className="text-slate-300 hover:text-white transition">
                                <span className="sr-only">Instagram</span>
                                {/* Social icon would go here */}
                            </a>
                            <a href="#" className="text-slate-300 hover:text-white transition">
                                <span className="sr-only">LinkedIn</span>
                                {/* Social icon would go here */}
                            </a>
                            <a href="#" className="text-slate-300 hover:text-white transition">
                                <span className="sr-only">GitHub</span>
                                {/* Social icon would go here */}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
                            </li>
                            <li>
                                <Link href="/portfolio-process" className="text-slate-300 hover:text-white transition">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/photography" className="text-slate-300 hover:text-white transition">Photography</Link>
                            </li>
                            <li>
                                <Link href="/blog-detail" className="text-slate-300 hover:text-white transition">Blog</Link>
                            </li>
                            <li>
                                <Link href="/hireme" className="text-slate-300 hover:text-white transition">Hire Me</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-slate-300 mr-2">Email:</span>
                                <a href="mailto:contact@ismaeldayo.com" className="text-slate-300 hover:text-white transition">
                                    contact@ismaeldayo.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-300 mr-2">Phone:</span>
                                <a href="tel:+1234567890" className="text-slate-300 hover:text-white transition">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-300 mr-2">Location:</span>
                                <span className="text-slate-300">San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

// inspiration/page.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function InspirationPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const inspirationCategories = [
        { id: 'all', name: 'All' },
        { id: 'photography', name: 'Photography' },
        { id: 'design', name: 'Design' },
        { id: 'art', name: 'Art' },
        { id: 'architecture', name: 'Architecture' },
        { id: 'nature', name: 'Nature' }
    ];

    const inspirationItems = [
        {
            id: 1,
            title: 'Minimalist Photography',
            category: 'photography',
            image: '/placeholder/inspiration/photo1.jpg',
            description: 'The beauty of simplicity captured through a minimalist lens.'
        },
        {
            id: 2,
            title: 'Modern UI Patterns',
            category: 'design',
            image: '/placeholder/inspiration/design1.jpg',
            description: 'Contemporary UI patterns that shape digital experiences.'
        },
        {
            id: 3,
            title: 'Abstract Expressions',
            category: 'art',
            image: '/placeholder/inspiration/art1.jpg',
            description: 'Exploring emotions through abstract visual language.'
        },
        {
            id: 4,
            title: 'Brutalist Buildings',
            category: 'architecture',
            image: '/placeholder/inspiration/architecture1.jpg',
            description: 'Raw concrete forms that define brutalist architecture.'
        },
        {
            id: 5,
            title: 'Mountain Landscapes',
            category: 'nature',
            image: '/placeholder/inspiration/nature1.jpg',
            description: 'Majestic mountain ranges that inspire awe and wonder.'
        },
        {
            id: 6,
            title: 'Urban Photography',
            category: 'photography',
            image: '/placeholder/inspiration/photo2.jpg',
            description: 'The rhythm and energy of urban environments captured in time.'
        },
        {
            id: 7,
            title: 'Typography Explorations',
            category: 'design',
            image: '/placeholder/inspiration/design2.jpg',
            description: 'Innovative typography that pushes the boundaries of communication.'
        },
        {
            id: 8,
            title: 'Organic Structures',
            category: 'architecture',
            image: '/placeholder/inspiration/architecture2.jpg',
            description: 'Architectural forms inspired by natural patterns and growth.'
        },
        {
            id: 9,
            title: 'Forest Serenity',
            category: 'nature',
            image: '/placeholder/inspiration/nature2.jpg',
            description: 'The peaceful atmosphere of dense forests and their intricate ecosystems.'
        }
    ];

    const filteredItems = activeFilter === 'all'
        ? inspirationItems
        : inspirationItems.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-4">My Inspiration</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        A collection of works, ideas, and moments that fuel my creativity and shape my approach to design and photography.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {inspirationCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeFilter === category.id
                                    ? 'bg-slate-700 text-white'
                                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Inspiration Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                            <div className="h-64 bg-slate-300">
                                {/* Image placeholder */}
                                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500">
                                    {item.image}
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-slate-100 text-slate-600 mb-2">
                                    {inspirationCategories.find(cat => cat.id === item.category)?.name}
                                </span>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quotes Section */}
                <div className="mt-16 bg-slate-100 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Quotes That Inspire Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <blockquote className="text-slate-700 italic">
                                "Design is not just what it looks like and feels like. Design is how it works."
                                <footer className="mt-2 text-slate-500 font-medium">— Steve Jobs</footer>
                            </blockquote>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <blockquote className="text-slate-700 italic">
                                "Photography is the story I fail to put into words."
                                <footer className="mt-2 text-slate-500 font-medium">— Destin Sparks</footer>
                            </blockquote>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <blockquote className="text-slate-700 italic">
                                "Simplicity is the ultimate sophistication."
                                <footer className="mt-2 text-slate-500 font-medium">— Leonardo da Vinci</footer>
                            </blockquote>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <blockquote className="text-slate-700 italic">
                                "Good design is obvious. Great design is transparent."
                                <footer className="mt-2 text-slate-500 font-medium">— Joe Sparano</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Reading List */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Books That Shaped My Perspective</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">The Design of Everyday Things</h3>
                            <p className="text-sm text-slate-500 mb-2">by Don Norman</p>
                            <p className="text-slate-600">A powerful primer on how design serves as the communication between object and user.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Thinking with Type</h3>
                            <p className="text-sm text-slate-500 mb-2">by Ellen Lupton</p>
                            <p className="text-slate-600">A critical guide for designers, editors, and students on typography fundamentals.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">The Photographer's Eye</h3>
                            <p className="text-sm text-slate-500 mb-2">by Michael Freeman</p>
                            <p className="text-slate-600">Understanding the art of composition that creates compelling photos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

// photography/page.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function PhotographyPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'portraits', name: 'Portraits' },
        { id: 'landscapes', name: 'Landscapes' },
        { id: 'architecture', name: 'Architecture' },
        { id: 'street', name: 'Street' },
        { id: 'abstract', name: 'Abstract' }
    ];

    const photographs = [
        {
            id: 1,
            title: 'Urban Geometry',
            category: 'architecture',
            thumbnail: '/placeholder/photography/thumb1.jpg',
            fullSize: '/placeholder/photography/full1.jpg',
            description: 'Modern architectural lines in downtown San Francisco.'
        },
        {
            id: 2,
            title: 'Mountain Solitude',
            category: 'landscapes',
            thumbnail: '/placeholder/photography/thumb2.jpg',
            fullSize: '/placeholder/photography/full2.jpg',
            description: 'Fog rolling over Sierra Nevada mountains at dawn.'
        },
        {
            id: 3,
            title: 'Portrait of Emily',
            category: 'portraits',
            thumbnail: '/placeholder/photography/thumb3.jpg',
            fullSize: '/placeholder/photography/full3.jpg',
            description: 'Environmental portrait using natural window light.'
        },
        {
            id: 4,
            title: 'Rainy Reflections',
            category: 'street',
            thumbnail: '/placeholder/photography/thumb4.jpg',
            fullSize: '/placeholder/photography/full4.jpg',
            description: 'Light reflections on wet pavement after rainfall.'
        },
        {
            id: 5,
            title: 'Shapes and Shadows',
            category: 'abstract',
            thumbnail: '/placeholder/photography/thumb5.jpg',
            fullSize: '/placeholder/photography/full5.jpg',
            description: 'Abstract composition of shadows on concrete wall.'
        },
        {
            id: 6,
            title: 'Golden Gate Fog',
            category: 'landscapes',
            thumbnail: '/placeholder/photography/thumb6.jpg',
            fullSize: '/placeholder/photography/full6.jpg',
            description: 'Golden Gate Bridge emerging from morning fog.'
        },
        {
            id: 7,
            title: 'Geometric Facades',
            category: 'architecture',
            thumbnail: '/placeholder/photography/thumb7.jpg',
            fullSize: '/placeholder/photography/full7.jpg',
            description: 'Geometric patterns in contemporary building facades.'
        },
        {
            id: 8,
            title: 'Street Vendor',
            category: 'street',
            thumbnail: '/placeholder/photography/thumb8.jpg',
            fullSize: '/placeholder/photography/full8.jpg',
            description: 'A moment of contemplation at a morning market.'
        },
        {
            id: 9,
            title: 'Artist Portrait',
            category: 'portraits',
            thumbnail: '/placeholder/photography/thumb9.jpg',
            fullSize: '/placeholder/photography/full9.jpg',
            description: 'Studio portrait of a sculptor at work.'
        },
        {
            id: 10,
            title: 'Liquid Forms',
            category: 'abstract',
            thumbnail: '/placeholder/photography/thumb10.jpg',
            fullSize: '/placeholder/photography/full10.jpg',
            description: 'Macro photography of oil and water mixing.'
        },
        {
            id: 11,
            title: 'City Nights',
            category: 'street',
            thumbnail: '/placeholder/photography/thumb11.jpg',
            fullSize: '/placeholder/photography/full11.jpg',
            description: 'Long exposure of nighttime city streets.'
        },
        {
            id: 12,
            title: 'Desert Dawn',
            category: 'landscapes',
            thumbnail: '/placeholder/photography/thumb12.jpg',
            fullSize: '/placeholder/photography/full12.jpg',
            description: 'Sunrise over sand dunes in Death Valley.'
        }
    ];

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        const filteredImages = activeCategory === 'all'
            ? photographs
            : photographs.filter(photo => photo.category === activeCategory);

        const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
        const newIndex = (currentIndex + direction + filteredImages.length) % filteredImages.length;

        setCurrentImage(filteredImages[newIndex]);
    };

    const filteredPhotographs = activeCategory === 'all'
        ? photographs
        : photographs.filter(photo => photo.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Photography Portfolio</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Capturing moments, emotions, and perspectives through my lens.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === category.id
                                    ? 'bg-slate-700 text-white'
                                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Photography Grid */}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredPhotographs.map((photo) => (
                        <div
                            key={photo.id}
                            className="relative overflow-hidden bg-slate-200 aspect-square cursor-pointer group"
                            onClick={() => openLightbox(photo)}
                        >
                            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                                {photo.thumbnail}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold">{photo.title}</h3>
                                <p className="text-slate-200 text-sm">{photo.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                    
                    
                {/* Lightbox */}

                {lightboxOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                        <div className="relative max-w-3xl w-full">
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white text-2xl"
                            >
                                &times;
                            </button>
                            <img
                                src={currentImage.fullSize}
                                alt={currentImage.title}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                                <h3 className="text-xl font-bold">{currentImage.title}</h3>
                                <p>{currentImage.description}</p>
                            </div>
                        </div>

                        {/* Navigation Arrows */}

                        <button
                            onClick={() => navigateImage(-1)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={() => navigateImage(1)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                        >
                            &#10095;
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
