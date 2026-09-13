import { Star, Check } from 'lucide-react';

export default function TechCard({
    tech,
    selected,
    onAdd
}) {
    return (
        <article className="tech-card">

            {/* Top */}
            <div className="card-top">

                <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    onError={(event) => {
                        event.currentTarget.style.display = 'none';
                    }}
                />

                <span className="badge">
                    {tech.badge}
                </span>

            </div>

            {/* Name */}
            <h3>
                {tech.name}
            </h3>

            {/* Description */}
            <p>
                {tech.description}
            </p>

            {/* Information */}
            <div className="meta">

                <span>
                    {tech.category}
                </span>

                <span>
                    {tech.difficulty}
                </span>

                <span className="rating">
                    <Star
                        size={11}
                        fill="currentColor"
                    />

                    {tech.rating}
                </span>

            </div>

            {/* Add Button */}
            <button
                className={`add-btn ${selected ? 'added' : ''
                    }`}
                disabled={selected}
                onClick={() => onAdd(tech)}
            >
                {selected ? (
                    <>
                        <Check size={15} />
                        Added to Stack
                    </>
                ) : (
                    'Add to Stack'
                )}
            </button>

        </article>
    );
}