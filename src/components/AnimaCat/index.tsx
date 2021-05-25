import { useState } from 'react';
import { Cat, CatNotFound } from './styled';

export type CatProps = {
  mode?: string;
  page?: string;
};

export const AnimationCat = ({ mode, page }: CatProps) => {
  const [current, setCurrent] = useState(mode);

  const catClick = () => {
    setCurrent('attack');
  };
  const catMouseEnter = () => {
    setCurrent('crouch');
  };
  const catMouseLeave = () => {
    setCurrent('sit');
  };

  // animations
  const catAnimationStart = () => {
    if (mode === 'run') {
      return setCurrent('run');
    }
    setCurrent('sneak');
  };

  const catAnimationEnd = () => {
    setCurrent('sit');
  };

  return (
    <>
      {page == '404' ? (
        <CatNotFound src={`/assets/cat2/cat_sit.gif`} alt="cat" />
      ) : (
        <Cat
          onClick={catClick}
          onMouseEnter={catMouseEnter}
          onMouseLeave={catMouseLeave}
          onAnimationStart={catAnimationStart}
          onAnimationEnd={catAnimationEnd}
          src={`/assets/cat_${current}.gif`}
          alt="cat"
        />
      )}
    </>
  );
};
