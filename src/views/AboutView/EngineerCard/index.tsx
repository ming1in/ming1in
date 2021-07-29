import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import { EButtonSize, EButtonVariants } from '../../../types/enums/atoms';
import Programming from './Programming';
import Skills from './Skills';

import './styles.scss';
import Tools from './Tools';

interface Props {
  className: string;
}

enum Filter {
  Programming = 'Programming',
  Skills = 'Skills',
  Tools = 'Tools'
}

export default function EngineerCard(props: Props): JSX.Element {
  const [filter, setFilter] = useState(Filter.Programming);

  const onClickFilter = (selectedTitle: Filter) => {
    setFilter(selectedTitle);
  };

  const isProgrammingFilter = filter === Filter.Programming,
    isSkillsFilter = filter === Filter.Skills,
    isToolsFilter = filter === Filter.Tools;

  return (
    <Card className={classNames(props.className, 'EngineerCard')}>
      <div className="EngineerCard-filterContainer">
        <Button
          onClick={() => onClickFilter(Filter.Programming)}
          variant={isProgrammingFilter ? EButtonVariants.Filled : EButtonVariants.Outlined}
          size={EButtonSize.Small}
        >
          Programming
        </Button>
        <Button
          onClick={() => onClickFilter(Filter.Skills)}
          variant={isSkillsFilter ? EButtonVariants.Filled : EButtonVariants.Outlined}
          size={EButtonSize.Small}
        >
          Skills
        </Button>
        <Button
          onClick={() => onClickFilter(Filter.Tools)}
          variant={isToolsFilter ? EButtonVariants.Filled : EButtonVariants.Outlined}
          size={EButtonSize.Small}
        >
          Tools
        </Button>
      </div>

      {isProgrammingFilter && <Programming />}

      {isSkillsFilter && <Skills />}

      {isToolsFilter && <Tools />}
    </Card>
  );
}
