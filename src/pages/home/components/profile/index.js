import { Card } from 'src/components/card';
// import Image from 'src/assets/avatar.jpg';
import Image from 'src/assets/avatar2.jpg';
import { NarrativeTextVis } from '@antv/narrative-text-vis';
import styles from './style.module.scss';

export const Profile = ({
  title,
  cardImage,
  showTitle = true,
  titleImage,
  titleStyle,
  cardStyle = {},
}) => {
  // const spec = {
  //   sections: [
  //     {
  //       paragraphs: [
  //         {
  //           type: 'normal',
  //           phrases: [
  //             {
  //               type: 'text',
  //               value: '我是孙悟空。我出生于石头中，自幼学习神通。熟练掌握 ',
  //             },
  //             {
  //               type: 'entity',
  //               value: '72',
  //               metadata: {
  //                 entityType: 'metric_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: ' 变、火眼金睛等技能，筋斗云最远记录 ',
  //             },
  //             {
  //               type: 'entity',
  //               value: '10w8k',
  //               metadata: {
  //                 entityType: 'metric_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value:
  //                 ' 里。曾受如来佛祖玉皇大帝观音菩萨指派，任西天取经特派使者，历经 ',
  //             },
  //             {
  //               type: 'entity',
  //               value: '81',
  //               metadata: {
  //                 entityType: 'metric_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: ' 难，遭遇妖怪 ',
  //             },
  //             {
  //               type: 'entity',
  //               value: '44',
  //               metadata: {
  //                 entityType: 'metric_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: ' 个，消灭 ',
  //             },
  //             {
  //               type: 'entity',
  //               value: '21',
  //               metadata: {
  //                 entityType: 'metric_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: ' 个(歼灭率 ',
  //             },
  //             {
  //               type: 'entity',
  //               value: '47.7%',
  //               metadata: {
  //                 entityType: 'proportion',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: ')，最终护送唐僧取得真经。我的历史荣誉包括「',
  //             },
  //             {
  //               type: 'entity',
  //               value: '花果山水帘洞美猴王',
  //               metadata: {
  //                 entityType: 'dim_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: '」、「',
  //             },
  //             {
  //               type: 'entity',
  //               value: '齐天大圣',
  //               metadata: {
  //                 entityType: 'dim_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: '」等，现已获得大雷音寺编制「',
  //             },
  //             {
  //               type: 'entity',
  //               value: '斗战胜佛',
  //               metadata: {
  //                 entityType: 'dim_value',
  //               },
  //             },
  //             {
  //               type: 'text',
  //               value: '」。',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  const spec = {
    sections: [
      {
        paragraphs: [
          {
            type: 'normal',
            phrases: [
              {
                type: 'text',
                value: '李白（',
              },
              {
                type: 'entity',
                value: '701',
                metadata: {
                  entityType: 'metric_value',
                },
              },
              {
                type: 'text',
                value: ' 年5月19日－ ',
              },
              {
                type: 'entity',
                value: '762',
                metadata: {
                  entityType: 'metric_value',
                },
              },
              {
                type: 'text',
                value:
                  ' 年11月30日），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人誉为 ',
              },
              {
                type: 'entity',
                value: '“诗仙”',
                metadata: {
                  entityType: 'dim_value',
                },
              },
              {
                type: 'text',
                value: ' 与杜甫并称为 ',
              },
              {
                type: 'entity',
                value: '李杜”',
                metadata: {
                  entityType: 'dim_value',
                },
              },
              {
                type: 'text',
                value: ' 。杜甫曾经这样评价过李白的文章： ',
              },
              {
                type: 'entity',
                value: '“笔落惊风雨，诗成泣鬼神”',
                metadata: {
                  entityType: 'dim_value',
                },
              }
            ],
          },
        ],
      },
    ],
  };

  return (
    <Card
      title={title}
      cardImage={cardImage}
      showTitle={showTitle}
      titleImage={titleImage}
      titleStyle={titleStyle}
      style={cardStyle}
    >
      <div className={styles.profile}>
        <img src={Image} alt="" />
        <NarrativeTextVis spec={spec} />
      </div>
    </Card>
  );
};
