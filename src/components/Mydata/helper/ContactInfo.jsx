'use client';

import AppModal from '@/UI/AppModal';
import Link from 'next/link';
import { useState } from 'react';
import { Clock, Mail, MapPin, Phone, Youtube } from 'react-feather';

const ContactInfo = ({ setIsModalOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const contactItems = [
    { icon: Phone, content: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    {
      icon: Mail,
      content: 'kazimdboktiar2020@gmail.com',
      href: 'mailto:kazimdboktiar2020@gmail.com'
    },
    {
      icon: MapPin,
      content: 'Mirpur - 12, Dhaka - Bangladesh',
      href: 'https://www.google.com/maps/place/Pallabi+Metro+Station/@23.8260333,90.3622514,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c143b7c7cca5:0x6bf520429a98d902!8m2!3d23.8260284!4d90.3648263!16s%2Fg%2F11l6f5zjj9?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D'
    },
    { icon: Clock, content: 'Open 24/5' },
    { icon: Youtube, content: '@rahatwebdev', href: 'https://www.youtube.com/@rahatwebdev' }
  ];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl">
      <AppModal
        isOpen={true}
        onClose={setIsModalOpen}
        customClasses="w-[48rem] bg-blue-50 rounded-md"
        title="Contact Information"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-xl">
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
                    <item.icon
                      className={`h-8 w-8 ${hoveredItem === index ? 'text-indigo-600' : 'text-indigo-400'} transition-colors duration-300`}
                    />
                  </div>
                  <div className="flex-grow">
                    {item.href ? (
                      <Link
                        href={item.href}
                        target="_blank"
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
              </div>
            ))}
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default ContactInfo;
