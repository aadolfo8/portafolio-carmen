import Image from "next/image";
import type { FC } from "react";
import styles from './card.module.css';

interface Props {
  image: string;
  href: string;
  alt: string;
}

const Card: FC<Props> = ({ image, href, alt }) => {
  return (
    <>
      <a
        href={href}
        className={`${styles.card} block w-full h-full transition-transform duration-300 ease-in-out hover:shadow-lg`}
      >
        <div className={styles['image-container']}>
          <Image
            src={`/${image}.webp`}
            alt={alt}
            className="w-full h-full object-contain"
            width={3000}
            height={3000}
          />
        </div>
      </a>
    </>
  );
};
export default Card;
