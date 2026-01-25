import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CodeBackgroundAnimation = () => {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  useEffect(() => {
    const generateCodeLines = () => {
      const lines = [
        'function verifyOnChain(tx) {',
        '  const intent = new Intent();',
        '  const proof = intent.verify(tx);',
        '  return proof.isValid;',
        '}',
        '',
        'class ProofSystem {',
        '  constructor() {',
        '    this.transactions = [];',
        '  }',
        '',
        '  addAction(tx) {',
        '    this.transactions.push(tx);',
        '  }',
        '}',
        '',
        '// Verify transaction',
        'const verifier = new ProofSystem();',
        'verifier.addAction({',
        '  chain: "arc",',
        '  hash: "0x1234..."',
        '});',
      ];
      return lines;
    };

    setCodeLines(generateCodeLines());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

      {/* Code Lines */}
      <motion.div
        className="absolute inset-0 font-mono text-xs text-green-400/20 p-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="leading-6 whitespace-nowrap"
          >
            {line}
          </motion.div>
        ))}
      </motion.div>

      {/* Scanning Line */}
      <motion.div
        className="absolute left-0 top-0 w-px h-full bg-green-400/30"
        initial={{ x: -10 }}
        animate={{ x: '100%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
};

export default CodeBackgroundAnimation;