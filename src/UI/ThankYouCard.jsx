import React from 'react'
import { ArrowRight, CheckCircle } from 'react-feather'
import AppButton from './AppButton'

const ThankYouCard = ({ setIsModalOpen }) => {
    return (
        <div>
            <div className="h-[75vh] rounded-md flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-100 to-indigo-100 p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto">
                    <div className="text-center">
                        <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
                        <p className="text-gray-600 mb-6">
                            We've received your message and we're excited to connect with you. We will get back to you shortly.
                        </p>
                        <div className="space-y-4">
                            <p className="text-sm text-gray-500">
                                While you wait, feel free to explore more of our project or blogs section.
                            </p>
                            <AppButton
                                customStyles="justify-center items-center bg-blue-600 hover:bg-blue-700 text-white"
                                customBtnStyles="ml-2 text-white h-4 w-4 transition-transform group-hover:translate-x-1"
                                icon={ArrowRight}
                                callback={() => setIsModalOpen((prev) => ({ ...prev, contact: false }))}
                                iconClasses="w-4 h-4 mr-2"
                                href='/experience'
                                text="Back to Home"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThankYouCard