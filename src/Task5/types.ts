export interface ScrollPosition {
  x: number;
  y: number;
}

export type ScrollTo = (position: Partial<ScrollPosition>) => void;

export type UseWindowScroll = [ScrollPosition, ScrollTo];
