import Navbar from './Navbar';
import BookMarquee from './BookMarquee';
import { BOOKS } from '../data/books';

const CATEGORIES = [
  'Romance',
  'Short Story',
  'Memoir',
  'Classic',
  'Fantasy',
];

export default function Hero() {
  return (
    <section className="hero">
      <Navbar />
      <h1 className="hero-title">Foliom</h1>
      <div className="hero-categories">
        {CATEGORIES.map((cat) => (
          <a key={cat} href="#" className="hero-category-pill">
            {cat}
          </a>
        ))}
      </div>
      <BookMarquee books={BOOKS} speed={60} tilt={-7} />
    </section>
  );
}
