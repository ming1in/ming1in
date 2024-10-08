import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import { ProgrammingData } from '../../../data/programming';
import { SkillsData } from '../../../data/skills';
import { ToolsData } from '../../../data/tools';
import { EButtonSize, EButtonVariants } from '../../../types/enums/atoms';
import { Filter } from '../../../types/enums/views';
import { IHeatMapData } from '../../../types/interfaces/views';
import Heatmap from '../Heatmap';

import './styles.scss';

interface Props {
  className: string;
}

export default function EngineerCard(props: Props): JSX.Element {
  const [filter, setFilter] = useState(Filter.Programming);

  function heatMapColorforValue(value: number) {
    return `rgba(28, 28, 30, ${1 - (100 - value) / (100 - 0)})`;
  }

  const onClickFilter = (selectedTitle: Filter) => {
    setFilter(selectedTitle);
  };

  const isProgrammingFilter = filter === Filter.Programming,
    isSkillsFilter = filter === Filter.Skills,
    isToolsFilter = filter === Filter.Tools;

  const HeatmapData: IHeatMapData[] = [...ProgrammingData, ...ToolsData, ...SkillsData].filter(
    (data) => data.category === filter
  );

  const legend = new Array(10).fill(0).map((_, idx) => (idx + 1) * 10);

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

      <span className="EngineerCard-legendLabel">From a scale of 😰 to 😎</span>

      <div className="EngineerCard-legend">
        {legend.map((value, idx) => (
          <div key={idx} style={{ background: `${heatMapColorforValue(value)}` }} />
        ))}
      </div>

      <Heatmap data={HeatmapData} />
    </Card>
  );
}
