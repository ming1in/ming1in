import React, { useState } from 'react';
import Button from '../../components/atoms/Button';
import Card from '../../components/atoms/Card';
import { EButtonVariants } from '../../types/enums/atoms';
import EngineerCard from './EngineerCard';
import ProfilePicImg from '../../assets/images/profile-pic.png';
import './styles.scss';
import { Hobbies } from '../../data/hobby';
import ProgressBar from '../../components/atoms/ProgressBar';

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
          <img src={ProfilePicImg} alt="ProfilePicImg" />
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
            <p>
              As an engineer, I’ve explored multiple disciplines such as mechanical, biomedical, and software
              engineering. Through each of the disciplines, I have always loved the act of engineering more than touting
              technical skills.
            </p>
            <p>I find happiness in building beautiful products that bring people tears of joy.</p>{' '}
            <p>
              I find peace in co-working with groups of people who ramble on about their craft, fuelled solely by
              passion.
            </p>
            <p>
              I find comfort in designing large scalable systems where every aspect fits together harmoniously such that
              processes flow flawlessly.
            </p>
            <p>
              Today, I have settled on software as my ultimate engineering tool. I was drawn in by the brilliant modern
              community creating crazy tools, apps, and models. I believe that software can deliver and captivate
              people’s imaginations of the future.
            </p>
            <p>
              Given that, my moral compass leads me to be <strong>first and foremost an engineer</strong> than a coder.
            </p>
          </Card>
          <EngineerCard className="AboutView-secondaryBody" />
        </div>
      )}

      {isHumanFilter && (
        <div className="AboutView-body">
          <Card className="AboutView-primaryBody">
            <p>
              Hey, what up visitor! First of all, I’m flattered you would like to learn more about me. Depending on the
              time of the day I am either coding away on a project, working on my endless list of hobbies or going on a
              spontaneous adventure with my friends.
            </p>
            <p>
              Some of my hobbies include making specialty coffees, tending to my plants, and biking. Coffee is currently
              the king of all my hobbies as I find it therapeutic to tinker with parameters to formulate the perfect cup
              of coffee. I do not mean to gloat but I make a mean cup of pour-over with Tetsu Kasuya’s 4:6 technique. I
              am still perfecting my latte art, but mark my words one day I’ll pour a tulip.
            </p>
            <p>
              After I have my morning coffee I tend to my plants which I think are such versatile organisms. I find the
              entire field of botany so fascinating and my champion is a Pilea peperomioides or more commonly known as
              the Chinese money plant.
            </p>
            <p>
              The reason I love these hobbies is that it’s refreshing to learn about how much depth there is in fields
              that differ so much from my work as a software engineer. I love falling into deep rabbit holes and solving
              unique problems. Now I am not only Ming the engineer, but I consider myself Ming the coffee barista,
              gardener, and jack of all trades.
            </p>
            <p>
              There are so many other topics I love that would make this a 6 page essay. But I love talking about them
              all, feel free to connect with me and I would love to chat more. Thanks for visiting!
            </p>
          </Card>

          <Card className="AboutView-secondaryBody">
            <h3 className="AboutView-hobbyTitle">Hobby</h3>
            {Hobbies.map((hobby) => (
              <div key={hobby.name} className="AboutView-hobbyContainer">
                <span>{hobby.name}</span>
                <ProgressBar value={hobby.progress} color="mint" />
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
