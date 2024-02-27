
const Navbar = () => {
    return (
        <div className="bg-black h-[64px] mb-12 text-white flex items-center justify-end">
            <div className="max-w-[1024px] mx-auto  flex justify-end items-end">
                <ul className="flex justify-end items-center gap-7">
                    <li>Categories</li>
                    <li>Website Builders</li>
                    <li>Todays deals</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;