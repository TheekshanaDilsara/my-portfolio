export default function About() {
    return (

        <div className="min-h-screen bg-gray-950 text-white py-20 px-6 md:px-20">
            <div className="container mx-auto max-w-7xl">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                </div>
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        About <span className="text-orange-500">Me</span>
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                </div>

                {/* Bio Section */}
                <section className="mb-20">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 text-orange-500">Who I Am</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            I'm Theekshana Dilsara, a Data Science undergraduate at SLIIT with a growing passion
                            for analytics, machine learning, and data-driven decision-making. I enjoy exploring
                            real-world datasets, building dashboards, and developing models that solve meaningful problems.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm currently expanding my skills in Python, SQL, and Power BI while working on practical
                            projects to strengthen my portfolio. My goal is to leverage data science to create impactful
                            solutions that drive business decisions and improve user experiences.
                        </p>
                    </div>
                </section>

                {/* Statistics */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-orange-500 transition-colors duration-300">
                            <div className="text-5xl font-bold text-orange-500 mb-2">6+</div>
                            <p className="text-gray-400 text-lg">Projects Completed</p>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-orange-500 transition-colors duration-300">
                            <div className="text-5xl font-bold text-orange-500 mb-2">10+</div>
                            <p className="text-gray-400 text-lg">Technologies</p>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-orange-500 transition-colors duration-300">
                            <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
                            <p className="text-gray-400 text-lg">Dedication</p>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        My <span className="text-orange-500">Education</span>
                    </h2>

                    <div className="space-y-8">
                        {/* Education Item 1 */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">BSc (Hons) in Data Science</h3>
                                    <p className="text-orange-500 font-medium mb-3">
                                        Sri Lanka Institute of Information Technology (SLIIT)
                                    </p>
                                    <p className="text-gray-400 mb-2">Currently Pursuing</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Specializing in data analytics, machine learning, statistical computing,
                                        and big data technologies. Building practical skills through hands-on projects
                                        and industry-relevant coursework.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education Item 2 */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">G.C.E. Advanced Level</h3>
                                    <p className="text-orange-500 font-medium mb-3">
                                        Dharmaraja College
                                    </p>
                                    <p className="text-gray-400 mb-2">Mathematics Stream</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Completed Advanced Level studies with focus on Mathematics, building strong
                                        analytical and problem-solving foundations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education Item 3 */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-2xl">📖</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">G.C.E. Ordinary Level</h3>
                                    <p className="text-orange-500 font-medium mb-3">
                                        Sri Chandananda Buddhist College
                                    </p>
                                    <p className="text-gray-400 mb-2">Completed</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Completed foundational education with strong academic performance across
                                        all subjects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        My <span className="text-orange-500">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Programming & Data Handling */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-xl">💻</span>
                                </div>
                                <h3 className="text-2xl font-bold">Programming & Data Handling</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Python (Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> R (Statistical Computing)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> SQL (MySQL, PostgreSQL, SQL Server)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Data Cleaning & Transformation
                                </li>
                            </ul>
                        </div>

                        {/* Data Analysis & Statistics */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-xl">📊</span>
                                </div>
                                <h3 className="text-2xl font-bold">Data Analysis & Statistics</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Exploratory Data Analysis (EDA)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Hypothesis Testing
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Probability Theory
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Statistical Analysis
                                </li>
                            </ul>
                        </div>

                        {/* Data Visualization */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-xl">📈</span>
                                </div>
                                <h3 className="text-2xl font-bold">Data Visualization & BI</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Power BI (Dashboards, DAX, Reports)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Matplotlib / Seaborn / Plotly
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Interactive Dashboards
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Data Storytelling
                                </li>
                            </ul>
                        </div>

                        {/* Software Development */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500">
                                    <span className="text-xl">🚀</span>
                                </div>
                                <h3 className="text-2xl font-bold">Software Development</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Web Development (REST APIs)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Mobile App Development
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> Database Management
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500">▸</span> NoSQL (MongoDB)
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Soft Skills */}
                <section>
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        Professional <span className="text-orange-500">Qualities</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Problem-solving', 'Analytical Thinking', 'Team Collaboration', 'Communication',
                            'Project Documentation', 'Presentation Skills', 'Adaptability', 'Attention to Detail'].map((skill, index) => (
                                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-orange-500 transition-colors duration-300">
                                    <p className="text-gray-300 font-medium">{skill}</p>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </div>
    );
}