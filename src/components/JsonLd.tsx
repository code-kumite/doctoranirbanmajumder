import { useEffect } from 'react';

interface JsonLdProps {
  schema: Record<string, any>;
}

export default function JsonLd({ schema }: JsonLdProps) {
  useEffect(() => {
    // Dynamically insert JSON-LD scripts to head for clean crawling
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
}
