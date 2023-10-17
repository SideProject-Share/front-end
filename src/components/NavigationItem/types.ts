export type NavigationTab = 'Home' | 'Search' | 'Post' | 'My';

export interface NavigationItemProps {
  tab: NavigationTab;
  active?: boolean;
}
