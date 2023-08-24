import { AiFillBell, AiFillYoutube } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="p-4 bg-[#0f0f0f] flex justify-between items-center text-white">

        <Link to={"/"} className="flex items-center gap-3 text-3xl
        ">
            <AiFillYoutube className="text-red-600 text-5xl" />
            <h1>Youtube</h1>
        </Link>

        <form className="flex items-center  rounded bg-white">

            <input type="text" placeholder="Search" className="rounded px-4 py-1 text-black outline-none" />
            <button >
                <BiSearch className="text-black m-1" />
            </button>
        </form>

        <AiFillBell className="text-2xl" />
    </header>

    )
}

export default Header
