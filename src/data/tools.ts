import { Filter } from '../types/enums/views';

export const ToolsData = [
  { name: 'Git', value: 100 },
  { name: 'Firebase', value: 95 },
  { name: 'MongoDB', value: 90 },
  { name: 'Google Cloud Platform', value: 90 },
  { name: 'Figma', value: 90 },
  { name: 'Jest.js', value: 90 },
  { name: 'Linux', value: 90 },
  { name: 'MacOS', value: 90 },
  { name: 'Heroku', value: 90 },
  { name: 'Jyputer Notebook', value: 90 }
].map((language) => ({ ...language, category: Filter.Tools }));
