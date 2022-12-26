// export const WordCloudData = [
//   { value: 14, name: '美猴王' },
//   { value: 8, name: '孙悟空' },
//   { value: 4, name: '弼马温' },
//   { value: 20, name: '齐天大圣' },
//   { value: 8, name: '孙行者' },
//   { value: 12, name: '斗战胜佛' },
//   { value: 6, name: '上仙' },
//   { value: 6, name: '猴哥' },
//   { value: 10, name: '大师兄' },
//   { value: 6, name: '石猴' },
//   { value: 6, name: '至尊宝' },
//   { value: 8, name: '金牌打野' },
// ];

export const WordCloudData = [
  { value: 24, name: '万里' },
  { value: 23, name: '黄金' },
  { value: 22, name: '青天' },
  { value: 29, name: '明月' },
  { value: 19, name: '青云' },
  { value: 17, name: '春风' },
  { value: 16, name: '白日' },
  { value: 15, name: '流水' },
  { value: 13, name: '浮云' },
  { value: 12, name: '桃李' },
  { value: 12, name: '天地' },
  { value: 28, name: '不见' },
  { value: 24, name: '不可' },
  { value: 14, name: '风吹' },
  { value: 11, name: '不能' },
  { value: 10, name: '不知' },
  { value: 10, name: '相思' },
  { value: 59, name: '古风' },
  { value: 32, name: '金陵' },
  { value: 23, name: '侍御' },
  { value: 22, name: '少府' },
  { value: 18, name: '友人' },
  { value: 16, name: '留别' },
  { value: 12, name: '山人' },
  { value: 12, name: '拟古' },
  { value: 9, name: '送别' },
  { value: 8, name: '行乐' },
  { value: 7, name: '怀古' },
  { value: 7, name: '赠别' },
  { value: 5, name: '从军' },
  { value: 4, name: '独坐' },
  { value: 4, name: '使君' },
  { value: 3, name: '弹琴' },
  { value: 3, name: '别离' },
  { value: 3, name: '泛舟' },
  { value: 3, name: '送客' }
];

// export const SkillsData = [
//   { type: '大圣神威', value: 6 },
//   { type: '护身咒法', value: 5 },
//   { type: '斗战冲锋', value: 4 },
//   { type: '如意金箍', value: 4 },
// ];

export const SkillsData = [
  { type: '白居易', value: 2643 },
  { type: '杜甫', value: 1151 },
  { type: '李白', value: 897 },
  { type: '齐己', value: 783 },
  { type: '刘禹锡', value: 727 },
  { type: '元稹', value: 593 },
  { type: '李商隐', value: 555 }
];

// export const RelationData = {
//   id: '唐僧',
//   children: [
//     { id: '孙悟空(我)' },
//     { id: '猪悟能', children: [{ id: '白龙马' }] },
//     { id: '沙悟净' },
//   ],
// };

export const RelationData = {
  nodes: [
    { id: 'node0', label: '李白', size: 50 },
    { id: 'node1', label: '岑夫子', size: 30 },
    { id: 'node2', label: '丹丘生', size: 30 },
    { id: 'node3', label: '高适', size: 30 },
    { id: 'node4', label: '孟浩然', size: 30 },
    { id: 'node5', label: '贺知章', size: 30 },
    { id: 'node6', label: '刘长卿', size: 30 },
    { id: 'node7', label: '王昌龄', size: 30 },
    { id: 'node8', label: '杜甫', size: 30 },
    { id: 'node9', label: '汪伦', size: 30 },
    { id: 'node10', label: '张旭', size: 30 }
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node0', target: 'node6' },
    { source: 'node0', target: 'node7' },
    { source: 'node0', target: 'node8' },
    { source: 'node0', target: 'node9' },
    { source: 'node0', target: 'node10' },
  ],
};

// export const RadarData = [
//   { item: '忠诚度', score: 2 },
//   { item: '佛性', score: 1 },
//   { item: '沟通能力', score: 2 },
//   { item: '心性修行', score: 1 },
//   { item: '神通', score: 5 },
// ];
export const RadarData = [
  { item: '诗歌', score: 5 },
  { item: '词赋', score: 4 },
  { item: '书法', score: 4 },
  { item: '剑术', score: 3 },
  { item: '仕途', score: 2 },
];


// export const mapData = [
//   { order: 1, oldName: '长安', todayName: '西安市', lng: 108.94, lat: 34.34 },
//   { order: 2, oldName: '西渭桥', todayName: '咸阳市', lng: 108.71, lat: 34.33 },
//   { order: 3, oldName: '武功县', todayName: '武功县', lng: 108.2, lat: 34.26 },
//   { order: 4, oldName: '岐山县', todayName: '岐山县', lng: 107.62, lat: 34.44 },
//   { order: 5, oldName: '凤翔府', todayName: '凤翔县', lng: 107.4, lat: 34.52 },
//   { order: 6, oldName: '陇州', todayName: '陇县', lng: 106.86, lat: 34.89 },
//   { order: 7, oldName: '上邽县', todayName: '天水市', lng: 105.72, lat: 34.58 },
//   { order: 8, oldName: '达渭州', todayName: '陇西县', lng: 104.63, lat: 35.0 },
//   {
//     order: 9,
//     oldName: '鸟鼠同穴山',
//     todayName: '渭源县',
//     lng: 104.22,
//     lat: 35.14,
//   },
//   {
//     order: 10,
//     oldName: '狄道县',
//     todayName: '临洮县',
//     lng: 103.86,
//     lat: 35.39,
//   },
//   { order: 11, oldName: '兰州', todayName: '兰州', lng: 103.83, lat: 36.06 },
//   { order: 12, oldName: '乌鞘岭', todayName: '乌鞘岭', lng: 102.85, lat: 37.2 },
//   { order: 13, oldName: '凉州', todayName: '武威市', lng: 102.64, lat: 37.93 },
//   { order: 14, oldName: '甘州', todayName: '张掖市', lng: 100.45, lat: 38.92 },
//   { order: 15, oldName: '肃州', todayName: '酒泉市', lng: 98.49, lat: 39.73 },
//   { order: 16, oldName: '瓜州', todayName: '瓜州县', lng: 95.78, lat: 40.52 },
//   { order: 17, oldName: '伊吾国', todayName: '哈密市', lng: 93.52, lat: 42.82 },
//   {
//     order: 17,
//     oldName: '高昌国',
//     todayName: '吐鲁番市东高昌故城',
//     lng: 89.53,
//     lat: 42.85,
//   },
// ];

export const mapData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "江油",
          "lat": 31.7759,
          "lng": "104.7370"
        },
        "geometry": {
          "coordinates": [
            104.737047387661,
            31.775928891710166
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": "42.8340",
          "lng": 75.2901,
          "name": "托克马克"
        },
        "geometry": {
          "coordinates": [
            75.29006044295409,
            42.83402234058937
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "平武",
          "lat": 32.4056,
          "lng": "104.5340"
        },
        "geometry": {
          "coordinates": [
            104.5340018542563,
            32.405586243926805
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.0336,
          "lng": 105.4681,
          "name": "剑阁"
        },
        "geometry": {
          "coordinates": [
            105.4681020001293,
            32.0336428637432
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "三台",
          "lat": 31.0955,
          "lng": 105.0917
        },
        "geometry": {
          "coordinates": [
            105.0917253188702,
            31.095543048725546
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "成都",
          "lat": 30.6583,
          "lng": 104.0629
        },
        "geometry": {
          "coordinates": [
            104.06290781597755,
            30.658348836644436
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lng": 103.4836,
          "lat": 29.6006,
          "name": "峨眉山"
        },
        "geometry": {
          "coordinates": [
            103.48356321065415,
            29.60055394255788
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 29.5524,
          "lng": 106.5523,
          "name": "重庆"
        },
        "geometry": {
          "coordinates": [
            106.55231723382138,
            29.552357469921148
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "犍为",
          "lat": 29.2121,
          "lng": 103.9451
        },
        "geometry": {
          "coordinates": [
            103.94512183730666,
            29.212081579427448
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "巫山",
          "lat": 31.0777,
          "lng": 109.8766
        },
        "geometry": {
          "coordinates": [
            109.87663196226572,
            31.0777237218406
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.6912,
          "name": "宜昌",
          "lng": 111.2836
        },
        "geometry": {
          "coordinates": [
            111.28356033125385,
            30.691151534528856
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.0438,
          "name": "江陵",
          "lng": 112.4193
        },
        "geometry": {
          "coordinates": [
            112.41926417593618,
            30.043777118204048
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 29.3623,
          "name": "岳阳",
          "lng": "113.1300"
        },
        "geometry": {
          "coordinates": [
            113.1299922495611,
            29.36233100428943
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "九江",
          "lat": 29.6624,
          "lng": 115.9509
        },
        "geometry": {
          "coordinates": [
            115.95087306774343,
            29.66237276624615
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.5724,
          "lng": 118.4934,
          "name": "当涂"
        },
        "geometry": {
          "coordinates": [
            118.49340523527405,
            31.572412441576446
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.0466,
          "name": "南京",
          "lng": 118.7801
        },
        "geometry": {
          "coordinates": [
            118.7801130187691,
            32.04661727487088
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.3971,
          "name": "扬州",
          "lng": 119.4095
        },
        "geometry": {
          "coordinates": [
            119.40951076229913,
            32.39712518399445
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "嵊州",
          "lat": 29.5625,
          "lng": 120.8294
        },
        "geometry": {
          "coordinates": [
            120.82943030305427,
            29.562475134337376
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 33.7315,
          "lng": 114.8863,
          "name": "淮阳"
        },
        "geometry": {
          "coordinates": [
            114.88630403750113,
            33.73148306822172
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.1678,
          "lng": 112.8398,
          "name": "临汝"
        },
        "geometry": {
          "coordinates": [
            112.83983834572308,
            34.1677592889144
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.0138,
          "name": "襄阳",
          "lng": 112.1228
        },
        "geometry": {
          "coordinates": [
            112.1227872153695,
            32.01381398610047
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "安陆",
          "lat": 31.2587,
          "lng": 113.6854
        },
        "geometry": {
          "coordinates": [
            113.6853587866533,
            31.258697016056686
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.5919,
          "lng": 114.3028,
          "name": "武汉"
        },
        "geometry": {
          "coordinates": [
            114.30281207750352,
            30.59185332315326
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.9332,
          "lng": 113.5674,
          "name": "应城"
        },
        "geometry": {
          "coordinates": [
            113.56737434867404,
            30.933213537762626
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 33.0009,
          "lng": "112.5350",
          "name": "南阳"
        },
        "geometry": {
          "coordinates": [
            112.53501970092987,
            33.00088018416211
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.3457,
          "lng": "108.9390",
          "name": "西安"
        },
        "geometry": {
          "coordinates": [
            108.93900694034141,
            34.34568777330021
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.2608,
          "lng": 108.2108,
          "name": "武功"
        },
        "geometry": {
          "coordinates": [
            108.21075545525429,
            34.260772278269656
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.4447,
          "lng": 107.6177,
          "name": "岐山"
        },
        "geometry": {
          "coordinates": [
            107.61772386440578,
            34.444729204112065
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 35.5826,
          "lng": 109.2616,
          "name": "黄陵"
        },
        "geometry": {
          "coordinates": [
            109.26158776542184,
            35.58262271350979
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.4125,
          "lng": 115.6522,
          "name": "商丘"
        },
        "geometry": {
          "coordinates": [
            115.65224038422394,
            34.41254375399001
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.7877,
          "lng": 113.3736,
          "name": "荥阳"
        },
        "geometry": {
          "coordinates": [
            113.37359277681361,
            34.78767891342959
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.4546,
          "lng": 113.0459,
          "name": "登封"
        },
        "geometry": {
          "coordinates": [
            113.045871081901,
            34.454581353358165
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lng": 112.4348,
          "lat": 34.6841,
          "name": "洛阳"
        },
        "geometry": {
          "coordinates": [
            112.43476326274225,
            34.68405533417274
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.6884,
          "lng": 113.3759,
          "name": "随州"
        },
        "geometry": {
          "coordinates": [
            113.37594667758901,
            31.68843598965904
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 37.8698,
          "lng": 112.5491,
          "name": "太原"
        },
        "geometry": {
          "coordinates": [
            112.54905271789619,
            37.86980726700956
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 39.0689,
          "lng": 112.9458,
          "name": "代县"
        },
        "geometry": {
          "coordinates": [
            112.94583943700246,
            39.068920973993926
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "邳州",
          "lat": 34.3412,
          "lng": 118.0091
        },
        "geometry": {
          "coordinates": [
            118.00912427340978,
            34.34119849024755
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 33.5087,
          "lng": 119.1423,
          "name": "淮安"
        },
        "geometry": {
          "coordinates": [
            119.14234476608817,
            33.50865603136482
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "溧阳",
          "lat": "31.4200",
          "lng": 119.4805
        },
        "geometry": {
          "coordinates": [
            119.48052781486831,
            31.419952790586265
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": "31.3030",
          "lng": 120.5829,
          "name": "苏州"
        },
        "geometry": {
          "coordinates": [
            120.58288342706226,
            31.30297160190372
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.2506,
          "lng": 120.2068,
          "name": "杭州"
        },
        "geometry": {
          "coordinates": [
            120.20681990501413,
            30.250611627125238
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 35.4259,
          "lng": 116.5878,
          "name": "济宁"
        },
        "geometry": {
          "coordinates": [
            116.58780052606886,
            35.42585799933853
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 36.2006,
          "lng": 117.0787,
          "name": "泰安"
        },
        "geometry": {
          "coordinates": [
            117.07868939333025,
            36.20060751241206
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.7957,
          "lng": 116.0842,
          "name": "单县"
        },
        "geometry": {
          "coordinates": [
            116.0842112234568,
            34.79567286067474
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 35.5965,
          "lng": 116.9865,
          "name": "曲阜"
        },
        "geometry": {
          "coordinates": [
            116.9864573326368,
            35.596549969377236
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.7946,
          "lng": 114.3493,
          "name": "开封"
        },
        "geometry": {
          "coordinates": [
            114.3493388270972,
            34.79457640628904
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 34.4448,
          "lng": 116.3617,
          "name": "砀山"
        },
        "geometry": {
          "coordinates": [
            116.36166214589753,
            34.44480050973414
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 36.4456,
          "lng": 115.9679,
          "name": "聊城"
        },
        "geometry": {
          "coordinates": [
            115.9679242021042,
            36.445601915001745
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 36.6529,
          "lng": 117.1186,
          "name": "济南"
        },
        "geometry": {
          "coordinates": [
            117.11857851178576,
            36.65289260721188
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.1924,
          "lng": 119.4218,
          "name": "镇江"
        },
        "geometry": {
          "coordinates": [
            119.42184816683698,
            32.1923610119141
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.4957,
          "lng": 120.3116,
          "name": "无锡"
        },
        "geometry": {
          "coordinates": [
            120.3115814193298,
            31.495680811380197
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.8968,
          "lng": 120.0851,
          "name": "湖州"
        },
        "geometry": {
          "coordinates": [
            120.08509691506583,
            30.896798892588492
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 29.1465,
          "lng": 121.0035,
          "name": "天台"
        },
        "geometry": {
          "coordinates": [
            121.00349159757405,
            29.146482664581868
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 29.8819,
          "lng": 120.6219,
          "name": "绍兴"
        },
        "geometry": {
          "coordinates": [
            120.62185096898622,
            29.881923979336946
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.7406,
          "lng": 116.5181,
          "name": "六安"
        },
        "geometry": {
          "coordinates": [
            116.51813433494328,
            31.740566058913018
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.2588,
          "lng": 117.2825,
          "name": "庐江"
        },
        "geometry": {
          "coordinates": [
            117.28250057258765,
            31.258782975454068
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 33.6264,
          "lng": 113.3675,
          "name": "叶县"
        },
        "geometry": {
          "coordinates": [
            113.36752276036174,
            33.62639785555875
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 35.5766,
          "lng": 114.5181,
          "name": "滑县"
        },
        "geometry": {
          "coordinates": [
            114.51807815533937,
            35.57661971176671
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 36.0833,
          "lng": 114.4668,
          "name": "安阳"
        },
        "geometry": {
          "coordinates": [
            114.46675949443892,
            36.08331623616483
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": "36.4830",
          "lng": 114.9455,
          "name": "广平"
        },
        "geometry": {
          "coordinates": [
            114.9454918345632,
            36.48295567102859
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 36.5911,
          "lng": 114.4851,
          "name": "邯郸"
        },
        "geometry": {
          "coordinates": [
            114.48511422143582,
            36.59105083070884
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": "37.2670",
          "lng": 111.7839,
          "name": "汾阳"
        },
        "geometry": {
          "coordinates": [
            111.78390750657309,
            37.26704530127691
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.7446,
          "lng": 118.3486,
          "name": "和县"
        },
        "geometry": {
          "coordinates": [
            118.34860171792917,
            31.74456084763031
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.9425,
          "lng": 118.7583,
          "name": "宣城"
        },
        "geometry": {
          "coordinates": [
            118.758266612272,
            30.94249235956859
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.6651,
          "lng": "117.4900",
          "name": "池州"
        },
        "geometry": {
          "coordinates": [
            117.49003165404895,
            30.66512772497873
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.6909,
          "lng": 118.4157,
          "name": "泾县"
        },
        "geometry": {
          "coordinates": [
            118.41565988473195,
            30.690892501380134
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.9158,
          "lng": 118.3307,
          "name": "南陵"
        },
        "geometry": {
          "coordinates": [
            118.33068867993677,
            30.915776435251402
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.0109,
          "lng": 119.6026,
          "name": "丹阳"
        },
        "geometry": {
          "coordinates": [
            119.60259616850232,
            32.01089401265628
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "潜山",
          "lat": "30.6410",
          "lng": 116.5773
        },
        "geometry": {
          "coordinates": [
            116.57730461497067,
            30.641012984131308
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.4592,
          "lng": 116.3204,
          "name": "太湖"
        },
        "geometry": {
          "coordinates": [
            116.32038913177291,
            30.459170683007997
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 30.2017,
          "lng": 115.0331,
          "name": "黄石"
        },
        "geometry": {
          "coordinates": [
            115.03310285123871,
            30.201732602840465
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 31.0236,
          "lng": 109.4057,
          "name": "奉节"
        },
        "geometry": {
          "coordinates": [
            109.40572291308519,
            31.023562947637885
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 26.4223,
          "lng": 111.6147,
          "name": "永州"
        },
        "geometry": {
          "coordinates": [
            111.61471815516774,
            26.4223030684157
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 28.6936,
          "lng": 112.9049,
          "name": "湘阴"
        },
        "geometry": {
          "coordinates": [
            112.90489033015308,
            28.693565967134845
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 28.5599,
          "lng": 115.9308,
          "name": "南昌"
        },
        "geometry": {
          "coordinates": [
            115.93082159732353,
            28.559887573113727
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": 32.9703,
          "lng": "117.2020",
          "name": "怀远"
        },
        "geometry": {
          "coordinates": [
            117.20199579093156,
            32.97032011323314
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "lat": "31.3500",
          "lng": 119.8176,
          "name": "宜兴"
        },
        "geometry": {
          "coordinates": [
            119.81757221544245,
            31.350029522943487
          ],
          "type": "Point"
        }
      }
    ]
  }