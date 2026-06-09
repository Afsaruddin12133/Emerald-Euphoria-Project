import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function ChatButton() {
  const handleChatClick = () => {
    // To be implemented in the future
    console.log('Chat support clicked');
  };

  return (
    <motion.button
      onClick={handleChatClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
      className="fixed cursor-pointer bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#68E203] to-[#107015] text-white hover:opacity-90 transition-all shadow-[0_0_20px_rgba(104,226,3,0.4)] hover:shadow-[0_0_30px_rgba(104,226,3,0.7)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#68E203] focus:ring-offset-2 focus:ring-offset-[#00120C]"
      aria-label="Open support chat"
    >
      <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
    </motion.button>
  );
}
