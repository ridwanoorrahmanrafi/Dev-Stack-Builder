import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';

export default function App() {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 350);
            }
        };

        loadTechnologies();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <section className="technologies-section" id="technologies">
                    <div className="section-heading">
                        <h2>
                            Explore the <span>Technologies</span>
                        </h2>
                        <p>
                            Pick technologies and build your ideal development stack.
                        </p>
                    </div>

                    <div className="content-layout">
                        <div className="cards-wrapper">
                            {loading ? (
                                <div className="loading-state">
                                    <div className="spinner" />
                                    <span>Loading technologies...</span>
                                </div>
                            ) : (
                                <div className="cards-grid">
                                    {technologies.map((tech) => (
                                        <TechCard
                                            key={tech.id}
                                            tech={tech}
                                            selected={false}
                                            onAdd={() => {}}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
