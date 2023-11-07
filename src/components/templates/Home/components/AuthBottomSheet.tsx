import { useDragControls, useMotionValue, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { KakaoLoginButton, NaverLoginButton } from '@/components/atoms';
import { OverlayPresenter, BottomSheet } from '@/components/molecules';

import { AuthBottomSheetProps } from '../types';

type SheetRefType = HTMLDivElement | null;

export default function AuthBottomSheet({ type }: AuthBottomSheetProps) {
  const bottomSheetWrraperRef = useRef<SheetRefType>(null);
  const bottomSheetContentRef = useRef<SheetRefType>(null);

  const [bottomSheetContentHeight, setBottomSheetContentHeight] = useState<number>();
  const [bottomSheetHeight, setBottomSheetHeight] = useState<number>();
  const [showBackDrop, setShowBackDrop] = useState(false);

  const controls = useDragControls();
  const y = useMotionValue(0);

  const closeBackDrop = useCallback((val: boolean) => {
    setShowBackDrop(val);
  }, []);

  const handleDragStart = () => {
    closeBackDrop(false);
  };

  const handleDragEnd = () => {
    closeBackDrop(false);
  };

  useEffect(() => {
    if (bottomSheetContentHeight) {
      setTimeout(() => y.set(0), 100);
    }
  }, [bottomSheetContentHeight, y]);

  if (type === 'login' || type === 'register') {
    return (
      <>
        {/* <OverlayPresenter /> */}
        <motion.div
          ref={bottomSheetWrraperRef}
          tw="w-full max-w-mobile h-fit relative [z-index: 250] pointer-events-none mx-auto"
          initial={{ opacity: 0, y: 0, scaleY: 0 }}
          animate={{
            opacity: 1,
            y: -((bottomSheetHeight || 0) - 82),
            scaleY: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <BottomSheet>
            <div tw="max-w-mobile min-w-mobile">
              <motion.div
                drag="y"
                dragControls={controls}
                dragElastic={0.2}
                dragConstraints={{ top: 0, bottom: (bottomSheetContentHeight || 0) + 60 }}
                style={{ y }}
                dragPropagation
                tw="pointer-events-auto"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <BottomSheet.Bezel />
              </motion.div>

              <motion.div tw="pointer-events-auto" style={{ y }} transition={{ duration: 0.1 }}>
                <BottomSheet.Header tw="text-center">
                  {type === 'login' ? '로그인 방법 선택' : '회원가입 방법 선택'}
                </BottomSheet.Header>
              </motion.div>

              <motion.div tw="pointer-events-auto" style={{ y }} transition={{ duration: 0.1 }}>
                <BottomSheet.Body ref={bottomSheetContentRef} tw="flex flex-col gap-4">
                  <div tw="h-12">
                    <KakaoLoginButton />
                  </div>
                  <div tw="h-12">
                    <NaverLoginButton />
                  </div>
                </BottomSheet.Body>
              </motion.div>
            </div>
          </BottomSheet>
        </motion.div>
      </>
    );
  }

  return null;
}
