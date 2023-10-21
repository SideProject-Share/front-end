import { ReactNode } from 'react';

export interface ButtonProps {
  /** 버튼 안의 내용 */
  children?: string | ReactNode;
  /** 클릭 했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 테마 */
  variant?: 'primary' | 'gray100' | 'gray200' | 'grayText' | 'black' | 'outlined' | 'ghost';
  /** 버튼 사이즈 */
  size?: 'medium' | 'big' | 'none';
  /** 버튼 비활성화 */
  disabled?: boolean;
  /** 로딩 여부 */
  isLoading?: boolean;
  /** 선택되었는지 여부 */
  selected?: boolean;
  value?: string | number;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
}
