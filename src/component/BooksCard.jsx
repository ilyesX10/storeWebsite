import Button from './Button';

function BooksCard({url}) {
    return (
        <div className="bg-[var(--muted)] border border-[var(--border)] p-4 rounded-[var(--radius)] shadow-[var(--cards_Shadow)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
            {/* Book Cover with 2:3 Aspect Ratio */}
            <div className="w-full aspect-[2/3] overflow-hidden rounded-[var(--radius)] mb-3 bg-black/10">
                <img 
                    src={url} 
                    alt="L'étranger Book Cover" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" 
                />
            </div>

            {/* Book Info */}
            <div className="flex flex-col gap-1 mb-4">
                <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">Classic Fiction</span>
                <h2 className="text-lg font-bold text-[var(--foreground)] line-clamp-1">L'étranger</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Albert Camus</p>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]/50">
                <span className="text-sm font-bold text-[var(--primary)]">Available</span>
                <Button className="bg-[var(--secondary)] hover:opacity-90 text-white text-sm font-semibold rounded-[var(--radius)] py-2 px-5 shadow-sm">
                    Rent
                </Button>
            </div>
        </div>
    );
}

export default BooksCard;
