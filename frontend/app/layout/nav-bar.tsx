import Image from "next/image";

import logo from "@/app/assets/logo.png";

export default function NavBar() {
    const menuItems = [
        {
            label: "Platform",
            code: "platform",
            href: "/"
        },
        {
            label: "Templates",
            code: "templates",
            href: "/templates"
        }
    ]
    return (
        <div id="nav-bar">
            <div className="bg-white flex item-center justify-between p-4 shadow-md">
                <div>
                    <Image src={logo} alt="logo" width={40} height={40} priority />
                </div>
                <div className="flex item-center">
                    <div className="text-2xl text-black font-bold mt-1">Taste UI</div>
                </div>

                <div className="flex item-center justify-left grow px-4">
                {
                    menuItems.map((item) => (
                        <div key={item.code} className="px-2 py-2 cursor-pointer text-gray-800 hover:text-blue-500">
                            {item.label}
                        </div>
                    ))
                }
                </div>
                

                <div>
                    <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}