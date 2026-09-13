import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        'Home',
        'Technologies',
        'Projects',
        'About',
        'Contact'
    ];

    return (
        <header className="navbar">

            <div className="nav-inner">

                {/* Mobile Menu */}
                <button
                    className="mobile-menu"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X size={20} />
                    ) : (
                        <Menu size={20} />
                    )}
                </button>

                {/* Brand */}
                <a
                    className="brand"
                    href="#home"
                    aria-label="Dev Stack home"
                >
                    <span className="brand-mark">
                        DS
                    </span>

                    <span className="brand-name">
                        Dev Stack
                    </span>
                </a>

                {/* Navigation */}
                <nav
                    className={`nav-links ${open ? 'show' : ''
                        }`}
                >
                    {links.map((link, index) => (
                        <a
                            key={link}
                            className={
                                index === 0
                                    ? 'active'
                                    : ''
                            }
                            href={
                                index === 0
                                    ? '#home'
                                    : `#${link.toLowerCase()}`
                            }
                            onClick={() => setOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="nav-actions">

                    <button className="signin">
                        Sign In
                    </button>

                    <button className="signup">
                        Sign Up
                    </button>

                </div>

            </div>

        </header>
    );
}