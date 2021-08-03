import { Filter } from '../types/enums/views';

export const SkillsData = [
  { name: 'Agile & Scrum', value: 100 },
  { name: 'UI/UX Design', value: 95 },
  { name: 'Test Driven Dev', value: 90 },
  { name: 'Story Telling', value: 90 },
  { name: 'Product Development', value: 90 },
  { name: 'Systems Design', value: 90 },
  { name: 'Leadership', value: 90 }
].map((language) => ({ ...language, category: Filter.Skills }));
