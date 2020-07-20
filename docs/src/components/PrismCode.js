import React, {useEffect, useRef} from 'react';
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx';

export const PrismCode = ({code}) => {
  const ref = useRef();

  const highlight = () => {
    if (ref && ref.current) {
      console.log(ref.current)
      Prism.highlightElement(ref.current);
    }
  }

  useEffect(() => {
    highlight();
  })

  return (
    <pre>
      <code ref={ref} className="language-jsx">
        {code.trim()}
      </code>
    </pre>
  );
};
