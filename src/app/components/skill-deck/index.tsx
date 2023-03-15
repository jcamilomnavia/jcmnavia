import React, {FC, useState} from 'react';
import {
  useMotionValue,
  useTransform,
  useMotionTemplate,
  PanInfo,
} from 'framer-motion';
import Card, {CardType} from './card';
import {Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandPointer} from '@fortawesome/free-regular-svg-icons';
import {faUpDownLeftRight} from '@fortawesome/free-solid-svg-icons';

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
    [-50, 0, 50],
    [0.7, 1, 0.7]
  );
  const shadowBlur = useTransform(
    dragStart.axis === 'x' ? x : y,
    [-50, 0, 50],
    [0, 10, 0]
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
      if (info.offset.x >= 50) animateCardSwipe(index)({x: 1300, y: 0});
      else if (info.offset.x <= -50) animateCardSwipe(index)({x: -1300, y: 0});
    } else {
      if (info.offset.y >= 50) animateCardSwipe(index)({x: 0, y: 700});
      else if (info.offset.y <= -50) animateCardSwipe(index)({x: 0, y: -700});
    }
  };

  return (
    <div className='skills__infinite-cards'>
      {cards.map((card, index) => {
        const isLast = index === cards.length - 1;
        return (
          <Card
            card={card}
            key={`${card.text}`}
            style={{
              zIndex: index,
              boxShadow,
              scale: isLast ? scale : undefined,
              // top: !isLast ? Math.max(35 - index * 2, 2) : 0,
            }}
            onDirectionLock={(axis) => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(index)(info)}
            animate={
              isLast
                ? {...dragStart.animation, top: 0}
                : {top: Math.max(35 - index * 2, 2)}
            }
          />
        );
      })}
      <Row className='skills__mouse'>
        <FontAwesomeIcon
          className='skills__mouse-expand skills__mouse-icon'
          icon={faUpDownLeftRight}
        />
        <FontAwesomeIcon
          className='skills__mouse-pointer  skills__mouse-icon'
          icon={faHandPointer}
        />
      </Row>
    </div>
  );
};

export default InfiniteCards;
