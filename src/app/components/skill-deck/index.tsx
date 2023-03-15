import React, {FC, useState} from 'react';
import {
  useMotionValue,
  useTransform,
  useMotionTemplate,
  PanInfo,
} from 'framer-motion';
import Card, {CardType} from './card';

type InfiniteCardsProperties = {
  mainCards: CardType[];
};

const InfiniteCards: FC<InfiniteCardsProperties> = ({mainCards}) => {
  const [cards, setCards] = useState(mainCards);

  const [dragStart, setDragStart] = useState<{
    axis: string | null;
    animation: {x: number; y: number};
  }>({
    axis: null,
    animation: {x: 0, y: 0},
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const scale = useTransform(
    dragStart.axis === 'x' ? x : y,
    [-600, 0, 600],
    [0.7, 1, 0.7]
  );
  const shadowBlur = useTransform(
    dragStart.axis === 'x' ? x : y,
    [-600, 0, 600],
    [0, 25, 0]
  );
  const shadowOpacity = useTransform(
    dragStart.axis === 'x' ? x : y,
    [-600, 0, 600],
    [0, 0.09, 0]
  );
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;
  const onDirectionLock = (axis: string | null) =>
    setDragStart({...dragStart, axis: axis});

  const animateCardSwipe =
    (index: number) => (animation: {x: number; y: number}) => {
      setDragStart({...dragStart, animation});

      setTimeout(() => {
        setDragStart({axis: null, animation: {x: 0, y: 0}});
        x.set(0);
        y.set(0);
        const rest = cards;
        const initials = rest.pop();
        // @ts-ignore
        setCards([initials, ...rest]);
      }, 300);
    };

  const onDragEnd = (index: number) => (info: PanInfo) => {
    if (dragStart.axis === 'x') {
      if (info.offset.x >= 100) animateCardSwipe(index)({x: 1600, y: 0});
      else if (info.offset.x <= -100) animateCardSwipe(index)({x: -1600, y: 0});
    } else {
      if (info.offset.y >= 100) animateCardSwipe(index)({x: 0, y: 1600});
      else if (info.offset.y <= -100) animateCardSwipe(index)({x: 0, y: -1600});
    }
  };

  return (
    <div className='infinite-cards'>
      {cards.map((card, index) => {
        if (index === cards.length - 1) {
          return (
            <Card
              card={card}
              key={index}
              style={{zIndex: index, boxShadow}}
              onDirectionLock={(axis) => onDirectionLock(axis)}
              onDragEnd={(e, info) => onDragEnd(index)(info)}
              animate={dragStart.animation}
            />
          );
        } else
          return (
            <Card
              card={card}
              key={index}
              style={{
                scale,
                boxShadow,
                zIndex: index,
                top: Math.max(35 - index * 8, 8),
              }}
            />
          );
      })}
    </div>
  );
};

export default InfiniteCards;
