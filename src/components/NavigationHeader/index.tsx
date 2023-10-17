import React from 'react';
import tw from 'twin.macro';
import Icon from '../Icon';

const NavigationHeader = tw.div`flex items-center w-full h-14 border-b border-b-line-main px-5 py-4 shrink-0`;

const Text = tw.p`flex-1 min-w-0 overflow-hidden whitespace-nowrap text-ellipsis text-16 text-main-default font-medium`;

function Logo() {
  return (
    <div>
      <Icon icon="LogoIcon" />
    </div>
  );
}

function BackButton({ onClick, title }: { onClick?: () => void; title?: string }) {
  return (
    <button type="button" onClick={onClick} tw="h-full flex items-center gap-1">
      <Icon icon="CheveronLeftActiveBigIcon" />
      {title && <Text>{title}</Text>}
    </button>
  );
}

function SettingButton({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} tw="h-full flex items-center ml-auto">
      <Icon icon="SettingActiveIcon" />
    </button>
  );
}

function PinButton({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} tw="h-full flex items-center ml-auto">
      <Icon icon="PinActiveIcon" />
    </button>
  );
}

export default Object.assign(NavigationHeader, {
  Logo,
  BackButton,
  SettingButton,
  PinButton,
});
