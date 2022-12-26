import G6 from '@antv/g6';
import * as G2 from '@antv/g2/lib';
// import * as G2 from '@antv/g2';
import {
  WordCloudData,
  SkillsData,
  RelationData,
  RadarData,
} from './mock-data';
import { ThemeColor10 } from 'src/constants';

export const renderRadar = ({ container, width, height }) => {
  const chart = new G2.Chart({
    container,
    width,
    height,
  });

  // const encode = (node) => node.encode('x', 'item').encode('y', 'score');

  chart.coordinate({ type: 'polar' });
  chart
  .data(RadarData)
  .scale('x', { padding: 0.5, align: 0})
  .scale('y', { tickCount: 5 })
  // .axis('x', { grid: true })
  .axis('x', {
    // labelFill: '#fff',
    // titleFill: '#fff',
    grid: true,
    labelFill: 'black',
    titleFill: 'black',
    gridStroke: 'black',
    // gridLineWidth: 5,
    labelFontSize: 10,
    title: false,
    labelFontWeight: 'bold',
    gridStrokeOpacity: 1
    // tickOpacity: 0,
  })
  // .axis('y', { zIndex: 1, title: false })
  .axis('y', {
    zIndex: 1,
    title: false,
    labelFill: 'black',
    titleFill: 'black',
    labelFontSize: 10,
    title: false,
    labelFontWeight: 'bold',
    // tickOpacity: 0,
    grid: true,
    gridStroke: 'black',
    gridStrokeOpacity: 1
    // gridLineWidth: 5
  });

  

chart
  .area()
  .encode('x', 'item')
  .encode('y', 'score')
  .encode('shape', 'smooth')
  .style({
    fillOpacity: 0.5,
    color: "#93420A"
  });

chart.theme({ defaultColor: '#93420A' });

chart
  .line()
  .encode('x', 'item')
  .encode('y', 'score')
  .encode('shape', 'smooth')
  .style('lineWidth', 2);


  // chart.data(RadarData).coordinate({ type: 'polar' });

  // chart
  //   .area()
  //   .call(encode)
  //   .style('fillOpacity', 0.5)
  //   .scale('x', { padding: 0.5 })
  //   .axis('y', false)
  //   .scale('color', {
  //     range: ThemeColor10,
  //   })
  //   .legend('color', false);
  //   //提问：legend是什么
  // chart.line().call(encode).style('lineWidth', 2);
  // chart
  //   .line()
  //   .encode('x', 'item')
  //   .encode('y', 'score')
  //   .encode('color', 'type')
  //   .encode('shape', 'smooth')
  //   .style('lineWidth', 2);

  // chart.point().call(encode).encode('shape', 'point');

  // // @todo Fix this in G2: fail to pass options for arc axis.
  // chart.on('afterrender', () => {
  //   const { canvas } = chart.context();
  //   const labels = canvas.document.getElementsByClassName('axis-label');
  //   for (const label of labels) {
  //     label.style.fill = '#fff';
  //     label.style.fontSize = 14;
  //     label.style.fontWeight = 'bold';
  //   }
  //   const ticks = canvas.document.getElementsByClassName('axis-tick');
  //   for (const tick of ticks) {
  //     tick.style.opacity = 0;
  //   }
  // });

  chart.render();
  return chart;
};

export const renderWordCloud = ({ container, width, height }) => {
  const chart = new G2.Chart({
    container,
    width,
    height,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    layout:{
      spiral: 'circle',
    },
    wordStyle: {
      fontSize: [24, 80],
    },
    // 设置交互类型
    interactions: [
      {
        type: 'element-active',
      },
    ],
  });

  chart
    .text()
    .data({
      value: WordCloudData,
      transform: [{ type: 'wordCloud', size: [width, height] }],
    })
    .encode('x', 'x')
    .encode('y', 'y')
    .encode('text', 'name')
    .encode('color', 'name')
    .encode('rotate', 'rotate')
    .encode('fontSize', 'value')
    .encode('title', 'name')
    .encode('tooltip', (d) => d.value.toFixed(2))
    .style('textAlign', 'center')
    .scale('x', { domain: [9, width], range: [0, 1] })
    .scale('y', { domain: [0, height], range: [0, 1] })
    // .scale('color', {
    //   range: ThemeColor10,
    // })
    .scale('color', {
      range: ['#B5A488', '#D29634', '#8D7434', '#A39F58', '#8C7E5B', '#985D31', '#86653A'],
    })
    .axis(false)
    .scale('fontSize', { type: 'identity' })
    .scale('rotate', { type: 'identity' })
    .scale('tooltip', { type: 'identity' });

  // chart
  //   .wordCloud()
  //   .data({
  //     value: WordCloudData,
  //     transform: [{ type: 'wordCloud', size: [width, height] }],
  //   })
  //   .layout({
  //     spiral: 'rectangular',
  //   })
  //   .encode('text', 'name')
  //   .encode('color', 'name')
  //   .encode('fontSize', 'value')
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .scale('x', { domain: [9, width], range: [0, 1] })
  //   .scale('y', { domain: [0, height], range: [0, 1] })
  //   .scale('color', {
  //     range: ThemeColor10,
  //   });

  chart.render();
  return chart;
};

export const renderSkills = ({ container, width, height }) => {
  const chart = new G2.Chart({
    paddingLeft: 70,
    paddingTop: 10,
    paddingBottom: 20,
    container,
    width,
    height,
  });

  chart.coordinate({ type: 'transpose' });

  chart
    .interval()
    .data(SkillsData)
    .encode('x', 'type')
    .encode('y', 'value')
    .encode('color', 'type')
    .encode('size', 20)
    // .scale('color', {
    //   range: ThemeColor10,
    // })
    .scale('color', {
      range: ['#D29634', '#985D31', '#86653A', '#8D7434', '#A39F58', '#8C7E5B', '#B5A488'],
    })
    .scale('y', { nice: true })
    .scale('x', { padding: 0.25 })
    .axis('x', {
      // labelFill: '#fff',
      // titleFill: '#fff',
      labelFill: 'black',
      titleFill: 'black',
      labelFontSize: 10,
      title: false,
      labelFontWeight: 'bold',
      tickOpacity: 0,
    })
    .axis('y', {
      // labelFill: '#fff',
      // titleFill: '#fff',
      labelFill: 'black',
      titleFill: 'black',
      labelFontSize: 10,
      title: false,
      tickOpacity: 0,
      tickCount: 5,
      labelFontWeight: 'bold',
    })
    .animate('enterType', 'scaleInY')
    .animate('enterDuration', 3000)
    .legend('color', false);

  chart.interaction(
    { type: 'tooltip' },
    {
      type: 'elementHighlight',
      highlightedFill: 'orange',
      unhighlightedOpacity: 0.5,
    }
    );

  chart.render().node();
  return chart;
};

export const renderRelation = ({ container }) => {
  const data = RelationData;
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;
  // const graph = new G6.TreeGraph({
  //   container,
  //   width,
  //   height,
  //   linkCenter: true,
  //   modes: {
  //     default: [
  //       {
  //         type: 'collapse-expand',
  //         onChange: function onChange(item, collapsed) {
  //           const data = item.getModel();
  //           data.collapsed = collapsed;
  //           return true;
  //         },
  //       },
  //       'drag-canvas',
  //       'zoom-canvas',
  //     ],
  //   },
  //   defaultNode: {
  //     size: 28,
  //     anchorPoints: [
  //       [0, 0.5],
  //       [1, 0.5],
  //     ],
  //   },
  //   defaultEdge: {
  //     type: 'cubic-vertical',
  //   },
  //   layout: {
  //     type: 'compactBox',
  //     direction: 'TB',
  //     getId: function getId(d) {
  //       return d.id;
  //     },
  //     getHeight: function getHeight() {
  //       return 16;
  //     },
  //     getWidth: function getWidth() {
  //       return 32;
  //     },
  //     getVGap: function getVGap() {
  //       return 80;
  //     },
  //     getHGap: function getHGap() {
  //       return 80;
  //     },
  //   },
  // });

  // graph.node(function (node) {
  //   let position = 'right';
  //   let rotate = 0;

  //   return {
  //     label: node.id,
  //     labelCfg: {
  //       position,
  //       offset: 5,
  //       style: {
  //         rotate,
  //         textAlign: 'start',
  //         fill: 'white',
  //         fontSize: 28,
  //       },
  //     },
  //   };
  // });

  const graph = new G6.Graph({
    container,
    width,
    height,
    layout: {
      type: 'force',
      preventOverlap: true,
    },
    modes: {
      default: ['drag-canvas'],
    },
    defaultNode: {
      // style:{
      //   // fill: 'lightblue',
      //   stroke: '#888',
      // },
      labelCfg: {
        style: {
          background: {
            // fill: '#ffffff',
            // fill: '#93420A',
            // stroke: 'green',
            padding: [3, 2, 3, 2],
            radius: 2,
            lineWidth: 3,
          },
          // stroke: '#93420A',
          // fill: '#93420A',
        },
      }
    },
    defaultEdge: {
      labelCfg: {
        autoRotate: true,
        style: {
          background: {
            fill: '#ffffff',
            stroke: '#000000',
            padding: [2, 2, 2, 2],
            radius: 2,
          },
        },
      }
    }
  });

  const nodes = data.nodes;
  const colors = ['#D29634', '#985D31', '#86653A', '#8D7434', '#A39F58', '#8C7E5B', '#B5A488']
  const strokes = ['#D29634', '#985D31', '#86653A', '#8D7434', '#A39F58', '#8C7E5B', '#B5A488']
  nodes.forEach((node,index) => {
    if (!node.style) node.style = {};
    node.style.fill = colors[index % colors.length];
    node.style.stroke = strokes[index % strokes.length];
    // node.x = width / 2 + 200 * (Math.random() - 0.5);
    // node.y = height / 2 + 200 * (Math.random() - 0.5);
  });

  graph.data({
    nodes,
    edges: data.edges.map(function (edge, i) {
      edge.id = 'edge' + i;
      return Object.assign({}, edge);
    }),
  });
  // graph.data(data);
  graph.render();
  graph.fitView();

  graph.on('node:dragstart', function (e) {
    graph.layout();
    refreshDragedNodePosition(e);
  });
  graph.on('node:drag', function (e) {
    const forceLayout = graph.get('layoutController').layoutMethods[0];
    forceLayout.execute();
    refreshDragedNodePosition(e);
  });
  graph.on('node:dragend', function (e) {
    e.item.get('model').fx = null;
    e.item.get('model').fy = null;
  });

  function refreshDragedNodePosition(e) {
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
  }

  if (typeof window !== 'undefined')
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return;
      if (!container || !container.scrollWidth || !container.scrollHeight)
        return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };
  return graph;
};
