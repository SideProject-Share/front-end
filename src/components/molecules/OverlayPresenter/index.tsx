import tw from 'twin.macro';

import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

import { OverlayPresenterProps } from './types';

const animations = {
  none: {},
  scale: {
    scale: [0, 1],
    opacity: [0, 1],
  },
};

export default function OverlayPresenter({
  animationType = 'scale',
  position = 'center',
  dropShadow = true,
  type = 'modal',
  children,
}: OverlayPresenterProps) {
  const container = typeof window !== 'undefined' && document.getElementById('rootOverlay');

  return container && children
    ? createPortal(
        <div
          css={[
            tw`fixed top-0 left-0 flex flex-col w-full h-full z-[1000] pointer-events-auto`,
            position === 'center' && tw`items-center justify-center`,
            position === 'bottom' && tw`items-center justify-end`,
            dropShadow && tw`bg-[rgba(0,0,0,0.5)]`,
          ]}
        >
          <motion.div
            tw="h-fit"
            animate={animations[animationType]}
            css={[type === 'modal' ? tw`w-fit` : tw`w-full max-w-mobile`]}
          >
            {children}
          </motion.div>
        </div>,
        container,
      )
    : null;
}
