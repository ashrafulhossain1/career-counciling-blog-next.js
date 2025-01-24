

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login?post_login_redirect_url=/protected");
    }

    return (
        <div className="w-fit md:w-11/12 mx-auto  bg-white text-black shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gray-200 p-6 flex items-center">
                <img
                    className="w-24 h-24 rounded-full mr-4"
                    src="https://i.ibb.co.com/DMRpJqg/IMG-20220410-223356.jpg"
                    alt="Profile"
                />
                <div>
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-gray-500">@john_doe</p>
                    <p className="text-gray-700 mt-2">
                        Software Developer | Tech Enthusiast | Coffee Lover
                    </p>
                </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <ul className="mt-2">
                    <li>Email: johndoe@example.com</li>
                    <li>Phone: (555) 123-4567</li>
                    <li>Location: San Francisco, CA, USA</li>
                </ul>
            </div>

            {/* Social Media Links */}
            <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold">Social Media Links</h3>
                <ul className="mt-2 space-y-1">
                    <li>
                        Twitter:
                        <a
                            href="https://twitter.com/johndoe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500">@johndoe</a>
                    </li>
                    <li>
                        LinkedIn:
                        <a
                            href="https://linkedin.com/in/johndoe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500">linkedin.com/in/johndoe</a>
                    </li>
                    <li>
                        Instagram:
                        <a
                            href="https://instagram.com/johndoe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500">@johndoe</a>
                    </li>
                </ul>
            </div>

            {/* About Me Section */}
            <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold">About Me</h3>
                <p className="mt-2">
                    Interests: Web Development, Machine Learning, Traveling, and Reading
                </p>
                <p>
                    Skills: JavaScript, React, Node.js, Python, SQL
                </p>
            </div>

            {/* Portfolio/Projects Section (Optional) */}
            <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold">Projects</h3>
                <ul className="mt-2 space-y-1">
                    <li>
                        <strong>Project 1:</strong> Personal Portfolio Website - A responsive website showcasing my work.
                    </li>
                    <li>
                        <strong>Project 2:</strong> E-Commerce App - A full-stack application for purchasing products.
                    </li>
                    <li>
                        <strong>Project 3:</strong> Blog Platform - A platform to share articles and insights on tech topics.
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <footer className="p-6 bg-gray-200 text-center">
                <p className="text-gray-600">Privacy Policy | Terms of Service</p>
            </footer>

        </div>
    );
}

