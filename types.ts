
export interface NarrativeResponse {
  content: string;
  metadata?: {
    intensity: number;
    tags: string[];
  };
}

export interface SiteAnalysis {
  url: string;
  elements: string[];
  stylingHints: string[];
  structureNotes: string;
}

export interface ForumPost {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}
