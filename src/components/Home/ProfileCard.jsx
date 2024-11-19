import AppButton from "@/UI/AppButton";
import { alterredUserAvatar, gainSolution, nuUniversity } from "@/utils/appHelpers";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bell, LogIn, LogOut, MessageCircle, User } from "react-feather";
import ContactForm from "../Mydata/helper/ContactForm";
import AppDropdown from "@/UI/AppDropdown";
import ContactInfo from "../Mydata/helper/ContactInfo";
import SignInAndSignUp from "../Authentication";

const ProfileCard = () => {
    const [isModalOpen, setIsModalOpen] = useState({
        contact: false,
        contactInfo: false,
        loginCompo: false,
    });
    const [btnLabel, setBtnLabel] = useState('More');

    const handleCallback = (params) => {
        const { label } = params || {};
        setBtnLabel(label);
        setIsModalOpen((prev) => ({ ...prev, loginCompo: true }));
    }

    const dropdownData = [
        {
            id: 1,
            label: "Login",
            icon: LogIn,
            show: true
        },
        {
            id: 2,
            label: "Logout",
            icon: LogOut,
            show: true
        },
        {
            id: 2,
            label: "Profile",
            icon: User,
            show: true
        },
    ]

    return (
        <div className="w-full bg-background">
            <div className="relative">
                {/* Banner with network pattern */}
                <div className="h-[200px] w-full overflow-hidden relative bg-gradient-to-r from-blue-900 to-blue-600">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0.1'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.4'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover',
                        opacity: 0.2
                    }} />
                </div>

                {/* Profile section */}
                <div className="max-w-6xl mx-auto px-4">
                    {/* Profile photo */}
                    <div className="relative bg-transparent -mt-24 mb-4">
                        <div className="inline-block justify-center items-center rounded-full w-40 h-40 border-4 border-background">
                            <Image
                                src="/assests/rahat.jpg"
                                alt="Profile photo"
                                loading="lazy"
                                width={160}
                                height={160}
                                className="rounded-full w-40 h-40 object-cover"
                            />
                        </div>
                    </div>

                    {/* Profile info */}
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-semibold">Kazi MD. Boktair Uddin Rahat</h1>
                                <span className="text-sm text-muted-foreground">• 1st</span>
                            </div>
                            <p className="text-16 text-border-dark font-semibold">Front End Developer | React JS Developer | Javascript Developer | (Javascript Developer) - Gain Solution Ltd.</p>
                            <p className="text-border-dark font-semibold">Dhaka, Bangladesh ·{" "}
                                <span
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setIsModalOpen((prev) => ({ ...prev, contactInfo: true }))}
                                    className="text-blue-600 hover:underline">
                                    Contact info
                                </span>
                            </p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <span className="text-border-dark font-semibold">1,056 followers</span>
                                <span className="text-border-dark font-semibold">•</span>
                                <span className="text-border-dark font-semibold">500+ connections</span>
                            </div>

                            {/* Education and Experience */}
                            <div className="flex flex-col gap-2 mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <Image
                                            src={gainSolution}
                                            alt="Gain Solutions Ltd"
                                            width={32}
                                            height={32}
                                            className="rounded-full w-8 h-8 object-cover"
                                        />
                                    </div>
                                    <span className="text-border-dark font-semibold">Gain Solutions Ltd</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <Image
                                            src={nuUniversity}
                                            alt="American International University-Bangladesh"
                                            width={32}
                                            height={32}
                                            className="rounded-full w-8 h-8 object-fit"
                                        />
                                    </div>
                                    <span className="text-border-dark font-semibold">National University-Bangladesh</span>
                                </div>
                            </div>

                            {/* Mutual Connections */}
                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex -space-x-2">
                                    <Image
                                        src={alterredUserAvatar}
                                        alt="Connection 1"
                                        width={24}
                                        height={24}
                                        className="rounded-full border-2 border-background"
                                    />
                                    <Image
                                        src={alterredUserAvatar}
                                        alt="Connection 2"
                                        width={24}
                                        height={24}
                                        className="rounded-full border-2 border-background"
                                    />
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    <Link href="#" className="text-blue-600 hover:underline">Md. Lutfar Rahman, Jeromio Ghagra Calvin</Link>
                                    , <span className="text-border-dark font-semibold">and 29 other mutual connections</span>
                                </span>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2">
                            <AppButton
                                customStyles="bg-blue-600 hover:bg-blue-700 text-white"
                                icon={MessageCircle}
                                withoutHrefBtn
                                iconClasses="w-4 h-4 mr-2"
                                callback={() => setIsModalOpen((prev) => ({ ...prev, contact: true }))}
                                text="Message"
                            />
                            <AppDropdown
                                buttonLabel={btnLabel}
                                menuItems={dropdownData}
                                callback={(params) => handleCallback(params)}
                            />
                            <AppButton
                                customStyles="ml-2"
                                icon={Bell}
                                iconClasses="w-5 h-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                isModalOpen?.contact &&
                <ContactForm setIsModalOpen={setIsModalOpen} />
            }
            {
                isModalOpen?.contactInfo &&
                <ContactInfo setIsModalOpen={setIsModalOpen} />
            }
            {
                isModalOpen?.loginCompo && <SignInAndSignUp setIsModalOpen={setIsModalOpen} />
            }
        </div>
    )
}

export default ProfileCard;