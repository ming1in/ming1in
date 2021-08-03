import { IconTypeEnum } from '../types/enums/IconType';
import { Filter } from '../types/enums/views';

export const ToolsData = [
  { name: 'Git', value: 100, icon: IconTypeEnum.Github },
  { name: 'Firebase', value: 95, icon: IconTypeEnum.Firebase },
  { name: 'MongoDB', value: 90, icon: IconTypeEnum.MongoDb },
  { name: 'Google Cloud', value: 90, icon: IconTypeEnum.GoogleCloud },
  { name: 'Figma', value: 90, icon: IconTypeEnum.Figma },
  { name: 'Jest.js', value: 90, icon: IconTypeEnum.Jest },
  { name: 'Linux', value: 90, icon: IconTypeEnum.Linux },
  { name: 'MacOS', value: 90, icon: IconTypeEnum.Apple },
  { name: 'Heroku', value: 90, icon: IconTypeEnum.Heroku },
  { name: 'Jupyter Notebook', value: 90, icon: IconTypeEnum.Jupyter }
].map((language) => ({ ...language, category: Filter.Tools }));
