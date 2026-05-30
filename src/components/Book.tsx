import { useMemo } from 'react';
import type { BookData } from '../data/books';

const PAGE_STEP = 1.1;
const PAGE_INSET = 8;
const SKEW = '30deg';

interface BookProps {
  book: BookData;
}

export default function Book({ book }: BookProps) {
  const depth = PAGE_STEP * (book.pageCount + 1);

  const pages = useMemo(() => {
    return Array.from({ length: book.pageCount }, (_, i) => {
      const index = i + 1;
      const t = index / book.pageCount;
      return (
        <div
          key={index}
          className="book-layer book-page"
          style={{
            transform: `translateX(${PAGE_STEP * index}px) skewY(${SKEW})`,
            zIndex: 2 + (book.pageCount - index),
            filter: `brightness(${(1 - t * 0.06).toFixed(3)})`,
            top: PAGE_INSET / 2,
            height: `calc(100% - ${PAGE_INSET}px)`,
          }}
        />
      );
    });
  }, [book.pageCount]);

  const hasVisibleTitle = book.textColor !== 'transparent';

  const coverStyle = book.coverImage
    ? {
        backgroundImage: `url(${book.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: book.cover };

  return (
    <div className="book" style={{ '--book-depth': `${depth}px` } as React.CSSProperties}>
      <div className="book-hinge" style={{ width: depth + 1, background: book.cover }} />
      <div
        className="book-layer book-back-cover"
        style={{
          background: book.cover,
          transform: `translateX(${depth}px) skewY(${SKEW})`,
        }}
      />
      {pages}
      <div
        className="book-layer book-front-cover"
        style={{ ...coverStyle, transform: `skewY(${SKEW})` }}
      >
        {hasVisibleTitle && (
          <span className="book-cover-title" style={{ color: book.textColor }}>
            {book.title}
          </span>
        )}
      </div>
    </div>
  );
}
