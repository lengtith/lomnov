// src/utils/types/models/property.ts

export interface LocalizedContent {
  content: string;
  language: string;
}

export interface Property {
  cognitoSub: string,
  title?: LocalizedContent[];
  description?: LocalizedContent[];
  thumbnail: string;
  images: string[];
  urlmap?: string;
  address?: LocalizedContent[];
  location: LocalizedContent[],
  price?: number;
  category: LocalizedContent[],
  transition: LocalizedContent[],
  detail?: Record<string, any>;  // Flexible key-value pairs
  status?: boolean;
}