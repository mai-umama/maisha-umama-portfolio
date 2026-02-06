import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is your process like?',
    answer:
      'My process starts with understanding your goals and vision through a discovery call. From there, I create a tailored strategy, develop initial concepts, refine based on your feedback, and deliver polished final assets. Communication and collaboration are at the heart of everything I do.',
  },
  {
    question: 'How long does a project typically take?',
    answer:
      'Timeline varies based on project scope. A brand identity typically takes 4-6 weeks, while a full website can take 6-10 weeks. I\'ll provide a detailed timeline during our initial consultation so you know exactly what to expect.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'I typically work with a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can discuss milestone-based payments. I accept bank transfers and all major payment methods.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Absolutely! I offer maintenance packages for websites and can provide ongoing brand support as needed. Many clients become long-term partners, and I love growing alongside the brands I help create.',
  },
  {
    question: 'Do you only work on digital design projects?',
    answer:
      'Not at all. I also create illustrations, sketches, and photography-based visual content depending on project needs.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background section-glow">
      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl italic text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQs
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="border-b border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4 text-primary">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-foreground/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
