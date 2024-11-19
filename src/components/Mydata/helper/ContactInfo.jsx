'use client'

import AppModal from '@/UI/AppModal'
import Link from 'next/link'
import { useState } from 'react'
import { Clock, Globe, Mail, MapPin, Phone, Youtube } from 'react-feather'

const ContactInfo = ({ setIsModalOpen }) => {
    const [hoveredItem, setHoveredItem] = useState(null)

    const contactItems = [
        { icon: Phone, content: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: Mail, content: 'kazimdboktiar2020@gmail.com', href: 'mailto:kazimdboktiar2020@gmail.com' },
        { icon: MapPin, content: '123 Business Street, Suite 100, New York, NY 10001', href: 'https://maps.google.com/?q=123+Business+Street,+New+York,+NY+10001' },
        { icon: Clock, content: 'Open 24/5' },
        { icon: Youtube, content: '@rahatwebdev', href: 'https://www.youtube.com/@rahatwebdev' },
    ]

    return (
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl">
            <AppModal
                isOpen={true}
                onClose={setIsModalOpen}
                customClasses='w-[48rem] bg-blue-50 rounded-md'
                title="Contact Information"
            >
                <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl">
                    {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <item.icon className={`h-8 w-8 ${hoveredItem === index ? 'text-indigo-600' : 'text-indigo-400'} transition-colors duration-300`} />
                                    </div>
                                    <div className="flex-grow">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                target={item.icon === MapPin || item.icon === Globe ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className="text-gray-700 font-semibold hover:text-indigo-600 transition-colors duration-300"
                                            >
                                                {item.content}
                                            </Link>
                                        ) : (
                                            <span className="text-gray-700 font-semibold">{item.content}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 ease-in-out" />
                            </div>
                        ))}
                    </div>
                </div>
            </AppModal>
        </div>
    )
}

export default ContactInfo;