import React, { forwardRef } from 'react';
import tw, { styled } from 'twin.macro';

import { resolveProps } from '@/utils';
import { ButtonProps } from './types';

const defaultStyle = tw`flex items-center justify-center h-fit rounded-sm transition-colors`;

const variants = {
  primary: tw`border-0 bg-main-default text-bg-main`,
  gray100: tw`border-0 bg-gray-100 text-bg-main`,
  gray200: tw`border-0 bg-gray-200 text-bg-main`,
  gray300: tw`border-0 bg-gray-300 text-gray-200`,
  grayText: tw`border-0 bg-grayText-100 text-white`,
  black: tw`border-0 bg-gray-black text-white`,
  outlined: tw`bg-transparent border border-line-main text-gray-100`,
  ghost: tw``,
};

const disabledStyle = tw`border-0 bg-main-disabled text-bg-main`;

const sizes = {
  medium: tw`px-4 py-3 h-10 text-14 leading-4`,
  big: tw`px-4 py-3 h-12 text-14 leading-4`,
  none: tw`text-14 leading-4`,
};

const ButtonRoot = styled.button<ButtonProps>`
  ${defaultStyle}
  ${({ variant }) => variant && variants[variant]}
  ${({ size }) => size && sizes[size]}
  ${({ disabled }) => disabled && disabledStyle}
  ${({ isLoading }) => isLoading && tw`pointer-events-none`}
`;

export default forwardRef<HTMLButtonElement, ButtonProps>((inProps, ref) => {
  const resolvedProps = resolveProps(inProps, {});

  const {
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    isLoading = false,
    selected = false,
    value,
    name,
    id,
    style,
    ...others
  } = resolvedProps;

  return (
    <ButtonRoot
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      isLoading={isLoading}
      selected={selected}
      name={name}
      value={value}
      id={id}
      style={style}
      {...others}
    >
      {isLoading && <p>로딩 중</p>}
      {!isLoading && children}
    </ButtonRoot>
  );
});
