export default function Footer() {
    return (
        <footer id="contact">

            <div className="footer-main">

                {/* Brand */}
                <div className="footer-brand">

                    <a
                        className="brand"
                        href="#home"
                    >
                        <span className="brand-mark">
                            DS
                        </span>

                        <span className="brand-name">
                            Dev Stack
                        </span>
                    </a>

                    <p>
                        Curated tools, technologies, and
                        resources for developers building
                        modern software.
                    </p>

                    <div className="socials">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

                {/* Footer Links */}
                <div className="footer-links">

                    <div>

                        <h4>
                            PRODUCT
                        </h4>

                        <a href="#home">
                            Home
                        </a>

                        <a href="#technologies">
                            Technologies
                        </a>

                        <a href="#projects">
                            Projects
                        </a>

                    </div>

                    <div>

                        <h4>
                            COMPANY
                        </h4>

                        <a href="#about">
                            About
                        </a>

                        <a href="#contact">
                            Contact
                        </a>

                        <a href="#contact">
                            Careers
                        </a>

                    </div>

                    <div>

                        <h4>
                            LEGAL
                        </h4>

                        <a href="#contact">
                            Privacy Policy
                        </a>

                        <a href="#contact">
                            Terms of Service
                        </a>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">

                <span>
                    © 2026 Dev Stack.
                    All rights reserved.
                </span>

                <div>

                    <a href="#contact">
                        Privacy
                    </a>

                    <a href="#contact">
                        Terms
                    </a>

                </div>

            </div>

        </footer>
    );
}
