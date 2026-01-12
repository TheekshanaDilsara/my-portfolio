"use client";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        // Validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration - Replace these with your actual values
            const SERVICE_ID = 'service_ukx167x';
            const TEMPLATE_ID = 'template_usb55go';
            const PUBLIC_KEY = 'jtUjjmmbYnp27OFGq';

            // Send email using EmailJS
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: SERVICE_ID,
                    template_id: TEMPLATE_ID,
                    user_id: PUBLIC_KEY,
                    template_params: {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        to_name: 'Theekshana',
                    }
                })
            });

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white py-20 px-6 md:px-20">
            <div className="container mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Get In <span className="text-orange-500">Touch</span>
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-gray-400 mb-8">
                                Feel free to reach out through any of the following channels.
                                I typically respond within 24 hours.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500 flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Email</h3>
                                    <a href="mailto:theekshanadsugathnath@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                                        theekshanadilsaras@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500 flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                                    <a href="tel:+94701973380" className="text-gray-400 hover:text-orange-500 transition-colors block">
                                        +94 70 197 3380
                                    </a>
                                    <a href="tel:+94775757740" className="text-gray-400 hover:text-orange-500 transition-colors block">
                                        +94 77 575 7740
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500 flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                                    <a
                                        href="https://www.linkedin.com/in/theekshana-sugathnath-959258311"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-orange-500 transition-colors break-all"
                                    >
                                        linkedin.com/in/theekshana-sugathnath
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500 flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">GitHub</h3>
                                    <a
                                        href="https://github.com/TheekshanaDilsara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-orange-500 transition-colors"
                                    >
                                        github.com/TheekshanaDilsara
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>

                        <div className="space-y-6">
                            {/* Status Message */}
                            {submitStatus && (
                                <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                    ? 'bg-green-500/20 border border-green-500 text-green-300'
                                    : 'bg-red-500/20 border border-red-500 text-red-300'
                                    }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            {/* Name */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full ${isSubmitting
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-orange-500 hover:bg-orange-600'
                                    } text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Whether you have a project in mind, need data analysis services, or just want to connect,
                        I'm here to help bring your ideas to life.
                    </p>
                </div>
            </div>
        </div>
    );
}