import { Icon, Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button/types';
import Layout from '@/components/Layout';

import { AuthBottomSheet } from './components';
import useButtonHandler from './hooks/useButtonHandler';

const buttons: { name: '로그인' | '회원가입'; value: 'login' | 'register'; variant: ButtonProps['variant'] }[] = [
  { name: '로그인', value: 'login', variant: 'outlined' },
  { name: '회원가입', value: 'register', variant: 'gray100' },
];

export default function Home() {
  const { bottomSheetStatus, buttonHandler } = useButtonHandler();

  return (
    <Layout>
      <div tw="flex flex-col h-full px-5 pt-[125px]">
        <div tw="flex-1 min-h-0">
          <main tw="max-h-full min-h-0 overflow-y-auto flex flex-col items-center justify-center gap-14">
            <h1 tw="text-24 leading-8 mb-4">서비스 소개 문구</h1>

            <Icon icon="LogoIcon" />

            <div tw="w-full flex flex-col gap-3">
              {buttons.map((button) => (
                <Button
                  key={button.value}
                  variant={button.variant}
                  value={button.value}
                  tw="flex-1"
                  size="big"
                  onClick={() => buttonHandler(button.value)}
                >
                  {button.name}
                </Button>
              ))}
            </div>
          </main>
        </div>
      </div>

      <AuthBottomSheet type={bottomSheetStatus} />
    </Layout>
  );
}
