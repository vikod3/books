import Book from './Book';
import type { BookData } from '../data/books';

interface BookMarqueeProps {
  books: BookData[];
  speed?: number;
  tilt?: number;
}

export default function BookMarquee({
  books,
  speed = 60,
  tilt = -7,
}: BookMarqueeProps) {
  const repeated = [...books, ...books];
  const total = repeated.length;

  return (
    <div
      className="marquee-mask"
      style={{ '--marquee-tilt': `${tilt}deg` } as React.CSSProperties}
    >
      <div className="marquee-fade">
        <div
          className="marquee-track"
          style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
        >
          {repeated.map((book, i) => (
            <div
              key={i}
              className="book-wrap"
              style={{ zIndex: total - i }}
            >
              <Book book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
