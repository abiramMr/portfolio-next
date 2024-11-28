import { useLayoutEffect, useState, RefObject } from 'react';
import SplitType from 'split-type';

type SplitTypeTypes = 'lines' | 'words' | 'chars';

interface UseSplitTypeProps {
  elementRef: RefObject<HTMLElement>;
  types: SplitTypeTypes[];
}

const useSplitType = ({ elementRef, types }: UseSplitTypeProps): { split: SplitType | null } => {
  const [split, setSplit] = useState<SplitType | null>(null);

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const instance = new SplitType(elementRef.current, { types });
    setSplit(instance);

    return () => {
      instance.revert();
      setSplit(null);
    };
  }, [elementRef, types]);

  return { split };
};

export default useSplitType;