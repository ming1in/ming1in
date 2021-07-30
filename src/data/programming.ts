import { IconTypeEnum } from '../types/enums/IconType';
import { Filter } from '../types/enums/views';

export const ProgrammingData = [
  { name: 'Javascript', value: 95, icon: IconTypeEnum.Javascript },
  { name: 'Typescript', value: 95, icon: IconTypeEnum.Typescript },
  { name: 'Python', value: 90, icon: IconTypeEnum.Python },
  { name: 'HTML', value: 92, icon: IconTypeEnum.Html },
  { name: 'CSS', value: 92, icon: IconTypeEnum.Css },
  { name: 'SQL', value: 90, icon: IconTypeEnum.Postgresql },
  { name: 'Rails', value: 90, icon: IconTypeEnum.Rails },
  { name: 'Ruby', value: 65, icon: IconTypeEnum.Ruby },
  { name: 'C/C++', value: 40, icon: IconTypeEnum.Cpp },
  { name: 'Java', value: 40, icon: IconTypeEnum.Java },
  { name: 'Ocaml', value: 40, icon: IconTypeEnum.Ocaml },
  { name: 'React', value: 95, icon: IconTypeEnum.React }
].map((language) => ({ ...language, category: Filter.Programming }));
