import { BottomNavigation, Layout, NavigationHeader } from '@/components';

export default function Home() {
  return (
    <>
      <Layout bottomNav={<BottomNavigation selectedTab="Home" />}>
        <div tw="flex flex-col h-full">
          <NavigationHeader>
            <NavigationHeader.Logo />
            <NavigationHeader.SettingButton />
          </NavigationHeader>

          <div tw="flex-1 min-h-0">
            <main tw="max-h-full min-h-0 overflow-y-auto">
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
              <p>hi</p>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
