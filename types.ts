
export type ChapterId = 'chapter1' | 'chapter2' | 'chapter3' | 'chapter4' | 'chapter5' | 'chapter6';

export interface Chapter {
  id: ChapterId;
  title: string;
}

export interface TeamMember {
  name: string;
  description: string;
  imgSrc: string;
  alt: string;
}
