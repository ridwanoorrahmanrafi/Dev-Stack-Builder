import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Stack from './components/Stack';
import Footer from './components/Footer';

export default function App() {
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load technology data from JSON
    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                const response = await fetch('/data/technologies.json');

                if (!response.ok) {
                    throw new Error('Could not load technology data');
                }

                const data = await response.json();

                setTechnologies(data);
            } catch (error) {
                setTechnologies([]);

                toast.error(
                    'Unable to load technology data. Please refresh the page.'
                );
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 350);
            }
        };

        loadTechnologies();
    }, []);

    // Add technology
    const addToStack = (tech) => {
        // Prevent duplicate technology
        if (stack.some((item) => item.id === tech.id)) {
            toast.warning(`${tech.name} is already in your stack.`);
            return;
        }

        setStack((previousStack) => [
            ...previousStack,
            tech
        ]);

        toast.success(`${tech.name} added to your stack.`);
    };

    // Remove one technology
    const removeFromStack = (tech) => {
        setStack((previousStack) =>
            previousStack.filter((item) => item.id !== tech.id)
        );

        toast.info(`${tech.name} removed from your stack.`);
    };

    // Remove everything
    const removeAll = () => {
        if (stack.length === 0) {
            return;
        }

        setStack([]);

        toast.info('All technologies removed from your stack.');
    };

    return (
        <>
            <Navbar />

            <main>
                <Hero />

                {/* Technologies */}
                <section
                    className="technologies-section"
                    id="technologies"
                >
                    <div className="section-heading">
                        <h2>
                            Explore the <span>Technologies</span>
                        </h2>

                        <p>
                            Pick technologies and build your ideal development stack.
                        </p>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="loading">
                            <span className="spinner"></span>
                            <p>Loading technologies...</p>
                        </div>
                    ) : (
                        <div className="workspace">

                            {/* Technology Cards */}
                            <div className="tech-grid">
                                {technologies.map((tech) => (
                                    <TechCard
                                        key={tech.id}
                                        tech={tech}
                                        selected={stack.some(
                                            (item) => item.id === tech.id
                                        )}
                                        onAdd={addToStack}
                                    />
                                ))}
                            </div>

                            {/* Your Stack */}
                            <Stack
                                items={stack}
                                onRemove={removeFromStack}
                                onRemoveAll={removeAll}
                            />

                        </div>
                    )}
                </section>

                {/* Projects */}
                <section
                    className="simple-anchor"
                    id="projects"
                >
                    <div>
                        <span className="eyebrow">
                            PROJECTS
                        </span>

                        <h2>
                            Build with the right tools.
                        </h2>

                        <p>
                            Compare technologies, create a focused stack,
                            and start your next project with confidence.
                        </p>
                    </div>
                </section>

                {/* About */}
                <section
                    className="simple-anchor"
                    id="about"
                >
                    <div>
                        <span className="eyebrow">
                            ABOUT
                        </span>

                        <h2>
                            A practical guide for modern developers.
                        </h2>

                        <p>
                            Dev Stack brings popular development
                            technologies into one simple place so you
                            can discover and organize the tools that
                            fit your workflow.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={2200}
                hideProgressBar
            />
        </>
    );
}