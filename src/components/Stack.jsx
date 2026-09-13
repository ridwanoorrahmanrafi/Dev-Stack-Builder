import { X } from 'lucide-react';

export default function Stack({
    items,
    onRemove,
    onRemoveAll
}) {
    return (
        <aside className="stack-panel">

            {/* Header */}
            <div className="stack-head">

                <h3>
                    Your Stack
                </h3>

                <p>
                    {items.length}{' '}
                    {items.length === 1
                        ? 'Technology'
                        : 'Technologies'}{' '}
                    Selected
                </p>

            </div>

            {/* Empty State */}
            {items.length === 0 ? (

                <div className="empty-stack">

                    <p>
                        Your stack is empty
                    </p>

                    <span>
                        Add technologies from the list
                        to build your ideal stack.
                    </span>

                </div>

            ) : (

                /* Selected Technologies */
                <div className="stack-items">

                    {items.map((item) => (

                        <div
                            className="stack-item"
                            key={item.id}
                        >

                            <img
                                src={item.icon}
                                alt=""
                            />

                            <div>

                                <strong>
                                    {item.name}
                                </strong>

                                <small>
                                    {item.category}
                                </small>

                            </div>

                            <button
                                aria-label={`Remove ${item.name}`}
                                onClick={() => onRemove(item)}
                            >
                                <X size={16} />
                            </button>

                        </div>

                    ))}

                </div>
            )}

            {/* Remove All */}
            <button
                className="remove-all"
                disabled={!items.length}
                onClick={onRemoveAll}
            >
                Remove All
            </button>

        </aside>
    );
}