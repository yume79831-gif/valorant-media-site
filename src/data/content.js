import content from "../../data/content.json";

export const articles = Array.isArray(content.articles) ? content.articles : [];
export const highlights = Array.isArray(content.highlights) ? content.highlights : [];
export const strategies = Array.isArray(content.strategies) ? content.strategies : [];
