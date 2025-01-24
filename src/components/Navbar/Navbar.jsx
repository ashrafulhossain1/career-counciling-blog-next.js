import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    console.log(!!user)

    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/profile'>profile</Link></li>
    </>


    // const handleSignOut = ()=>{
    //     console.log('ohh')
    // }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CouncilPro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {!!user ? <>
                    <Link href='/api/auth/logout' className="btn btn-sm bg-black hover:bg-gray-800 text-white hover:text-slate-50">
                        Sign Out
                    </Link>
                </>
                    :
                    <>
                        <Link href='/api/auth/login' className="btn btn-sm bg-black hover:bg-gray-800 text-white hover:text-slate-50">
                            Sign In
                        </Link>
                        <Link href='/api/auth/register' className="btn btn-sm bg-black hover:bg-gray-800 text-white hover:text-slate-50">
                            Sign up
                        </Link>
                    </>
                }
            </div>
        </div >
    );
};

export default Navbar;