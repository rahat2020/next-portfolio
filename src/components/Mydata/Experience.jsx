import Image from 'next/image'
import { CheckSquare } from 'react-feather';

const Experience = () => {
  return (
    <div className="flex justify-start items-center py-4">
      <div className="w-[30rem] mx-8 bg-white rounded-lg shadow-md border border-gray-300">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Image
                src="https://media.licdn.com/dms/image/v2/C560BAQF7RcGBjjpfLg/company-logo_100_100/company-logo_100_100/0/1674646007895/gain_solutions_ltd_logo?e=1740009600&v=beta&t=l9Fz3mV8tV2dpffc-ScfBDPNUex6TDMDTFOSFrKO4Gc"
                alt="Gain Solutions Ltd"
                width={48}
                height={48}
                className="rounded"
              />
            </div>

            <div className="flex-grow space-y-1">
              <h3 className="font-semibold text-gray-900">Front End Developer</h3>
              <p className="text-gray-700">Gain Solutions Ltd · Full-Time</p>
              <p className="text-sm text-gray-600">Dec 2023 - Present · 1 year</p>
              <p className="text-sm text-gray-600">Dhaka, Bangladesh · On-site</p>

              <div className="space-y-2 mt-3">
                {[
                  'Developed and Implemented Software Test Plans and Strategies.',
                  'Executed Manual and Automated Tests on Web Applications, Mobile Applications, and Software.',
                  'Identified, Documented, and Tracked Software Defects.',
                  'Provided Technical Support for Software Issues and Troubleshooting.',
                  'Writing the Test Cases and Bug Reports.',
                ].map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <CheckSquare className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Software Development Life Cycle (SDLC), Software Testing Life Cycle (STLC) and +22 skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Experience;