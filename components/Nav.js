import Link from 'next/link';
import { useRouter } from 'next/router';

const LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        [ YOUR_NAME.exe ]
      </Link>
      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={router.pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
