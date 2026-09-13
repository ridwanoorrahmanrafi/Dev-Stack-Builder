import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
                setLoading(false);
            }
        };

        loadTechnologies();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
        </>
    );
}
