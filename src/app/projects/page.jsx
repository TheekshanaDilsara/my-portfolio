"use client";

import { useState } from 'react';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Customer Behavior Analysis Dashboard",
            type: "Individual Project",
            category: "Data Science",
            description:
                "Analyzed customer shopping behavior using transactional data from 3,900 purchases across multiple product categories. Built a comprehensive Power BI dashboard for visual insights into purchase patterns, trends, and customer preferences.",
            longDescription:
                "In-depth analysis of real customer purchase behavior using 3,900+ transactions. Created an interactive Power BI dashboard including:\n• Product category affinity\n• Gender & category-based patterns\n• Custom DAX measures for advanced insights \n• Trend analysis over time\n• Visualizations: bar charts, pie charts, slicers, and more\n• Actionable insights for marketing & sales strategies",
            technologies: ["Power BI", "Python", "Data Analysis", "SQL"],
            icon: "📊",
            color: "orange",
            githubUrl: "https://github.com/TheekshanaDilsara/Customer_behavior_analysis",
            videoUrl: "/videos/customer_dashboard-demo.mp4",
        },
        {
            id: 2,
            title: "AURA - Online Shopping Platform",
            type: "Group Project",
            category: "Web Development",
            description:
                "Developed an e-commerce clothing platform focusing on customer interactions. Implemented features for browsing products and user account management with seamless database integration.",
            longDescription:
                "Full-stack e-commerce website for clothing retail.\nFeatures include:\n• Product catalog \n• User authentication & profile\n• Responsive design",
            technologies: ["Web Development", "Database Design", "Full Stack"],
            icon: "🛍️",
            color: "blue",
            githubUrl: "https://github.com/TheekshanaDilsara/AURA-Shopping-Platform",
            videoUrl: "/videos/aura-demo.mp4",
        },
        {
            id: 3,
            title: "CatchMe - Bus Ticket Reservation",
            type: "Group Project",
            category: "Web Development",
            description:
                "Built a comprehensive user account management system for booking bus tickets online. Features included user registration, Account details edit, Delete Account, and profile management with smooth database workflows.",
            longDescription:
                "Online bus ticket booking platform.\nKey features:\n• User registration & login\n• User profile with account management\n• Admin panel for bus & schedule management",
            technologies: ["Web Development", "Database", "User Management"],
            icon: "🚌",
            color: "green",
            githubUrl: "https://github.com/TheekshanaDilsara/CatchMe-BusTicket-reservation-system",
            videoUrl: "/videos/catchme-demo.mp4",
        },
        {
            id: 4,
            title: "ElderCare - Elder Home Management",
            type: "Group Project",
            category: "Web Development",
            description:
                "Designed a comprehensive system for elder care management covering elder, staff, operator, and guardian accounts. Implemented innovative elder registration by operators and integrated a chatbot for assistance.",
            longDescription:
                "Management system for elderly care homes with multiple user roles:\n• Elder registration & profile\n• Staff scheduling & staff account managemnt\n• Guardian monitoring portal\n• Operator dashboard\n• Integrated AI chatbot for quick queries with auto reply feature\n• Elder Registration tracking and e-mail notifications for the elder account updates\n•Innovative chatbot with a friendly chatroom for the user with admin or a operator",
            technologies: ["Web Development", "Chatbot", "Database", "AI Integration"],
            icon: "🏥",
            color: "purple",
            githubUrl: "https://github.com/TheekshanaDilsara/ElderCare-Elder-Home-System",
            videoUrl: "/videos/eldercare-demo.mp4",
        },

        {
            id: 5,
            title: "DriveMate - Vehicle Maintenance App",
            type: "Individual Project",
            category: "Mobile Development",
            description:
                "Developed a mobile application using Android Studio for managing vehicle maintenance. Features included vehicle registration, service bookings, maintenance tracking, and comprehensive report generation.",
            longDescription:
                "Android app for personal vehicle maintenance management.\nMain features:\n• Add & manage multiple vehicles\n• Record services & expenses\n• Set service reminders\n• Track mileage & maintain e records\n• Simple & clean Material Design UI",
            technologies: ["Android Studio", "Mobile Development", "Java"],
            icon: "🚗",
            color: "red",
            githubUrl: "https://github.com/TheekshanaDilsara/DriveMate-MobileAppliacation",
            videoUrl: "/videos/drivemate-demo.mp4",
        },
        {
            id: 6,
            title: "FitPro+ - Fitness Tracking App",
            type: "Individual Project",
            category: "Mobile Development",
            description:
                "Built a fitness app in Android Studio for tracking habits and fitness routines. Users can add, update, or remove habits, set time reminders, and track progress with widgets for improved health accountability.",
            longDescription:
                "Habit & fitness tracker for Android.\nHighlights:\n• Create custom habits & routines\n• Set daily/weekly -time based reminders\n• Progress statistics & streaks\n• Home screen widgets\n• Simple data export\n• Dark mode support for better usability at night time \n• User-friendly Material Design UI \n• Mood Journal to track your daily mood and feelings",
            technologies: ["Android Studio", "Mobile Development", "Widgets"],
            icon: "💪",
            color: "cyan",
            githubUrl: "https://github.com/TheekshanaDilsara/FitPro-_Fitness-and-Habbit-Tracker",
            videoUrl: "/videos/fitpro-demo.mp4",
        },
    ];

    const categories = ['All Projects', 'Data Science', 'Web Development', 'Mobile Development'];

    const filteredProjects = activeFilter === 'All Projects'
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    const getColorClasses = (color) => {
        const colors = {
            orange: "border-orange-500 hover:bg-orange-500/10",
            blue: "border-blue-500 hover:bg-blue-500/10",
            green: "border-green-500 hover:bg-green-500/10",
            purple: "border-purple-500 hover:bg-purple-500/10",
            red: "border-red-500 hover:bg-red-500/10",
            cyan: "border-cyan-500 hover:bg-cyan-500/10",
        };
        return colors[color] || colors.orange;
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white py-20 px-6 md:px-20">
            <div className="container mx-auto max-w-7xl">
                <div className="absolute -top-10-left-2 w-12 h-12 bg-orange-500/8 rounded-full backdrop-blur-sm border border-orange-500/5 animate-pulse "></div>
                <div className="absolute -bottom-1 -right-2 w-20 h-20 bg-orange-500/10 rounded-lg backdrop-blur-sm border border-orange-500/10 animate-pulse"></div>
                <div className="absolute -bottom-18 -left-1 w-16 h-16 bg-orange-500/5 rounded-full backdrop-blur-sm border border-orange-500/8 animate-pulse"></div>

                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        My <span className="text-orange-500">Projects</span>
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of projects showcasing my skills in data science, web development, and mobile application development
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeFilter === category
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-900 border border-gray-800 text-gray-300 hover:border-orange-500'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`bg-gray-900 border ${getColorClasses(project.color)} rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105`}
                        >
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-16 h-16 bg-${project.color}-500/20 rounded-lg flex items-center justify-center text-3xl border border-${project.color}-500`}>
                                        {project.icon}
                                    </div>
                                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-orange-500 text-sm font-medium mb-4">{project.category}</p>

                                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        View Details
                                    </button>

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-gray-700 hover:border-orange-500 text-gray-300 rounded-lg transition-colors flex items-center justify-center"
                                            title="View on GitHub"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ──── MODAL ──────────────────────────────────────────────── */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-5 text-gray-400 hover:text-white text-3xl font-bold"
                                onClick={() => setSelectedProject(null)}
                            >
                                ×
                            </button>

                            <div className="p-6 md:p-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-gray-400 mb-6">
                                    {selectedProject.type} • {selectedProject.category}
                                </p>

                                {/* VIDEO */}
                                {selectedProject.videoUrl ? (
                                    <div className="mb-8 rounded-xl overflow-hidden border border-gray-700 shadow-2xl bg-black">
                                        <video
                                            controls
                                            className="w-full h-auto aspect-video"
                                            autoPlay={true}
                                            loop={true}
                                            muted={true}
                                            poster={selectedProject.poster || null}
                                        >
                                            <source src={selectedProject.videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ) : (
                                    <div className="mb-8 bg-gray-800 rounded-xl p-10 text-center text-gray-400 border border-gray-700">
                                        <p className="text-lg">No demo video available yet</p>
                                    </div>
                                )}

                                {/* LONG DESCRIPTION */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-3 text-orange-300">Project Overview</h3>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {selectedProject.longDescription || selectedProject.description}
                                    </p>
                                </div>

                                {/* TECHNOLOGIES */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-3 text-orange-300">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* GITHUB */}
                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors text-gray-200 hover:text-white"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Source Code on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom Stats */}
                {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">{filteredProjects.length}</div>
                        <p className="text-gray-400">
                            {activeFilter === 'All Projects' ? 'Total Projects' : `${activeFilter} Projects`}
                        </p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">4</div>
                        <p className="text-gray-400">Group Projects</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">2</div>
                        <p className="text-gray-400">Individual Projects</p>
                    </div>
                </div> */}

                {/* CTA */}
                <div className="mt-20 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
}