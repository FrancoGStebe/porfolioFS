import Image from 'next/image';
import { FC } from 'react';

const icons = [
  { src: '/github.png', alt: 'GitHub', href: 'https://github.com' },
  { src: '/whatsapp.png', alt: 'WhatsApp', href: 'https://wa.me' },
  { src: '/gmail.png', alt: 'Gmail', href: 'mailto:example@gmail.com' },
  { src: '/linkedin.png', alt: 'LinkedIn', href: 'https://linkedin.com' },
];

const Icons: FC = () => {
  return (
    <div className="flex space-x-4">
      {icons.map((icon) => (
        <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={60} // Ajusta el tamaño según sea necesario
            height={60} // Ajusta el tamaño según sea necesario
            className="transition-transform transform hover:scale-110 icon-hover"
          />
        </a>
      ))}
    </div>
  );
};

export default Icons;

