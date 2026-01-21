'use client'
import Image from "next/image";
import { trackLinkedIn } from '@/utils/trackLinkedIn';

const FixedButton = () => {
  //   const handleLinkedInTrack = () => {
  //   if (typeof window !== 'undefined' && window.lintrk) {
  //     window.lintrk('track', { conversion_id: 25488346 });
  //   } else {
      
  //   }
  // };

  return (
    <a
      href="https://wa.me/5491154521992?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20JR%20Digital%20Car"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[99] bottom-8 right-8 cursor-pointer 
                 transition-transform duration-200 ease-out 
                 hover:scale-[1.11]"
      onClick={()=> trackLinkedIn(25488346)}
    >
      <Image
        src="/whatsapp-fixed-button.svg"
        alt="WhatsApp-Logo"
        width={54}
        height={54}
      />
    </a>
  );
};

export default FixedButton;
