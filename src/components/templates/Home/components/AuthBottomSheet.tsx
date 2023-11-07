import { useDragControls, useMotionValue, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { KakaoLoginButton, NaverLoginButton } from '@/components/atoms';
import { OverlayPresenter, BottomSheet } from '@/components/molecules';

import { AuthBottomSheetProps } from '../types';

type SheetRefType = HTMLDivElement | null;

const AuthBottomSheet = React.memo(({ type }: AuthBottomSheetProps) => {
  const sheetRef = useRef<SheetRefType>(null);
  const bodyRef = useRef<SheetRefType>(null);

  const [sheetHeight, setSheetHeight] = useState<number>();
  const [bodyHeight, setBodyHeight] = useState<number>();

  const controls = useDragControls();
  const y = useMotionValue(0);

  const handleDragStart = () => {};

  const handleDragEnd = () => {};

  useEffect(() => {
    if (bodyHeight) {
      setTimeout(() => y.set(0), 100);
    }
  }, [bodyHeight, y]);

  useEffect(() => {
    if (bodyRef?.current) {
      setBodyHeight(bodyRef.current.offsetHeight);
    }

    if (sheetRef?.current) {
      setSheetHeight(sheetRef.current.offsetHeight);
    }
  }, [sheetRef, bodyRef]);

  if (type === 'login' || type === 'register') {
    return (
      <>
        <OverlayPresenter position="bottom" type="bottomSheet">
          <motion.div
            ref={sheetRef}
            tw="w-full h-fit relative [z-index: 250] pointer-events-none mx-auto"
            initial={{ opacity: 0, y: 0, scaleY: 0 }}
            animate={{
              opacity: 1,
              y: -((sheetHeight || 0) - 70),
              scaleY: 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <BottomSheet>
              <motion.div
                drag="y"
                dragControls={controls}
                dragElastic={0.2}
                dragConstraints={{ top: 0, bottom: bodyHeight || 0 }}
                style={{ y }}
                dragPropagation
                tw="pointer-events-auto"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <BottomSheet.Bezel />
              </motion.div>

              <motion.div tw="pointer-events-auto bg-white" style={{ y }} transition={{ duration: 0.3 }}>
                <BottomSheet.Header>{type === 'login' ? '로그인 방법 선택' : '회원가입 방법 선택'}</BottomSheet.Header>
                <BottomSheet.Body ref={bodyRef} tw="flex flex-col gap-4 pb-[70px]">
                  <div tw="h-12">
                    <KakaoLoginButton />
                  </div>
                  <div tw="h-12">
                    <NaverLoginButton />
                  </div>
                </BottomSheet.Body>
                <div tw="[min-height: 70px]" />
              </motion.div>
            </BottomSheet>
          </motion.div>
        </OverlayPresenter>
      </>
    );
  }

  return null;
});

export default AuthBottomSheet;
