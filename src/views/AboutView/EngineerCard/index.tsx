import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import ProgressBar from '../../../components/atoms/ProgressBar';
import { EButtonSize, EButtonVariants } from '../../../types/enums/atoms';

import './styles.scss';

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
    isToolFilter = filter === Filter.Tools;

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
          variant={isToolFilter ? EButtonVariants.Filled : EButtonVariants.Outlined}
          size={EButtonSize.Small}
        >
          Tools
        </Button>
      </div>

      {isProgrammingFilter && (
        <div>
          <h3>Languages</h3>
          <p>Javascript </p>
          <ProgressBar value={50} />

          <h3>Frameworks</h3>
          <p>React ○ Rails</p>
          <h3>Database</h3>
          <p>Firebase ○ MongoDB</p>
        </div>
      )}

      {isSkillsFilter && (
        <div>
          <h3>Skills</h3>
        </div>
      )}

      {isToolFilter && (
        <>
          <h3>Tools</h3>
          <p>Git ○ ○ GCP ○ Figma ○ Jest ○ Linux ○ MacOS ○ Jupyter ○ Heroku</p>
        </>
      )}
    </Card>
  );
}
