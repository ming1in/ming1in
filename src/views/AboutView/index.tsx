import React, { useState } from 'react';
import Button from '../../components/atoms/Button';
import Card from '../../components/atoms/Card';
import Icon from '../../components/atoms/Icon';
import { EButtonVariants } from '../../types/enums/atoms';
import { IconTypeEnum } from '../../types/enums/IconType';
import EngineerCard from './EngineerCard';

import './styles.scss';

const Lorem =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

enum EAboutFilter {
  Human = 'human',
  Engineer = 'engineer'
}

export default function AboutView(): JSX.Element {
  const [filter, setFilter] = useState(EAboutFilter.Human);

  const onClickFilter = (selectedTitle: EAboutFilter) => {
    setFilter(selectedTitle);
  };

  const isHumanFilter = filter === EAboutFilter.Human,
    isEngineerFilter = filter === EAboutFilter.Engineer;

  return (
    <div className="AboutView">
      <div className="AboutView-header">
        <div className="AboutView-avatar">
          <Icon iconType={IconTypeEnum.Memoji} />
        </div>
        <div className="AboutView-headerText">
          <h1>Who is Ming Lin</h1>
          <span>the...</span>
          <div>
            <Button
              variant={isHumanFilter ? EButtonVariants.Filled : EButtonVariants.Outlined}
              onClick={() => onClickFilter(EAboutFilter.Human)}
            >
              {EAboutFilter.Human}
            </Button>
            <Button
              variant={isEngineerFilter ? EButtonVariants.Filled : EButtonVariants.Outlined}
              onClick={() => onClickFilter(EAboutFilter.Engineer)}
            >
              {EAboutFilter.Engineer}
            </Button>
          </div>
        </div>
      </div>

      {isEngineerFilter && (
        <div className="AboutView-body">
          <Card className="AboutView-primaryBody">
            <p>{Lorem}</p>
          </Card>

          <Card className="AboutView-secondaryBody">
            <p>software engineer</p>
          </Card>
        </div>
      )}

      {isHumanFilter && (
        <div className="AboutView-body">
          <Card className="AboutView-primaryBody">
            <p>{Lorem}</p>
          </Card>

          <EngineerCard className="AboutView-secondaryBody" />
        </div>
      )}
    </div>
  );
}
