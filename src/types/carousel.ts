export interface CardContent {
  title: string;
  subtitle: string;
  highlightWord: string;
  body: string;
  emoji?: string;
}

export interface CarouselContent {
  theme: string;
  cards: [CardContent, CardContent, CardContent, CardContent];
}
