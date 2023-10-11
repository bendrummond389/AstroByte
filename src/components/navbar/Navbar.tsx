import { EBGaramond, playfair } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

const NavLinks = [
  {
    text: 'Services',
    href: '/services',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
]

const Navbar = () => (
  <div className="relative z-10 flex w-full flex-col items-center justify-between px-4 py-2 md:flex-row md:px-8 md:py-5">
    <div className="mb-4 flex w-full justify-center md:mb-0 md:justify-start">
      <Image
        className="w-auto"
        src="/AstroByteText.png"
        alt="AstroByte Stylized Text"
        height={300}
        width={400}
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
    </div>

    <div className={EBGaramond.className}>
      <div className="border-text-200 bg-background-950 flex w-full justify-around rounded-full border-2 bg-opacity-80 p-4 drop-shadow-2xl md:w-auto md:justify-start">
        {NavLinks.map(({ text, href }) => (
          <Link
            key={text}
            className="text-text-200 mx-3 text-lg font-semibold hover:text-text-200 md:mx-5 md:text-2xl"
            href={href}
            style={{
              WebkitTextStroke: '0.4px black',
            }}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default Navbar
