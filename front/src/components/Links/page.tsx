import Image from 'next/image';
import { FC } from 'react';

const icons = [
  { src: '/github.png', alt: 'GitHub', href: 'https://github.com/FrancoGStebe' },
  { src: '/whatsapp.png', alt: 'WhatsApp', href: 'https://wa.me/542664187782' },
  { src: '/gmail.png', alt: 'Gmail', href: 'mailto:stebefranco@gmail.com' },
  { src: '/linkedin.png', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/franco-gabriel-stebe-0415a9297/' },
];

const Icons: FC = () => {
  return (
    <div className="flex space-x-4">
      {icons.map((icon) => (
        <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={60} 
            height={60} 
            className="transition-transform transform hover:scale-110 icon-hover"
          />
        </a>
      ))}
    </div>
  );
};

export default Icons;

