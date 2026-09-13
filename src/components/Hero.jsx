export default function Hero() {
    return (
        <section
            className="hero"
            id="home"
        >

            <div className="hero-copy">

                <h1>
                    Build Your Ideal
                    <br />

                    <span>
                        Development Stack
                    </span>
                </h1>

                <p>
                    Explore frontend, backend, database,
                    and tooling options, compare them side
                    by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="hero-actions">

                    <a
                        className="primary-btn"
                        href="#technologies"
                    >
                        Explore Technologies
                    </a>

                    <a
                        className="secondary-btn"
                        href="#about"
                    >
                        Learn More
                    </a>

                </div>

            </div>

            <div className="hero-art">

                <img
                    src="/assets/banner-stack.png"
                    alt="Development technology stack illustration"
                />

            </div>

        </section>
    );
}