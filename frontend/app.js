function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useMemo
} = React;
const MAXIANG_NIGHT_MARKET_IMAGE = '/模拟图片/夜市/image.png';
const GOVERNMENT_GATE_IMAGE = '/模拟图片/政府/image.png';
const GENERIC_SCENE_IMAGE = '/模拟图片/image.png';
const KTV_SCENE_IMAGE = '/模拟图片/KTV/image.png';
const HOSPITAL_DISTURBANCE_IMAGE = '/模拟图片/医院/医闹示例图.png';
const FIGHT_SCENE_IMAGE = '/模拟图片/打架/打架示意图.png';
const XIANG_AN_MAP_IMAGE = '/assets/xiang_an_map.png';

// --- 图标组件映射 ---
const Icon = ({
  name,
  className,
  onClick
}) => /*#__PURE__*/React.createElement("i", {
  className: `${name} ${className || ''}`,
  onClick: onClick
});
const AlertTriangle = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-alert-line"
}, p));
const Shield = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-shield-check-line"
}, p));
const Video = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-vidicon-line"
}, p));
const MapIcon = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-map-2-line"
}, p));
const Activity = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-pulse-line"
}, p));
const Users = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-group-line"
}, p));
const Car = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-car-line"
}, p));
const ShieldAlert = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-shield-keyhole-line"
}, p));
const Crosshair = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-focus-2-line"
}, p));
const Bell = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-notification-3-line"
}, p));
const PlayCircle = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-play-circle-line"
}, p));
const Live = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-live-line"
}, p));
const Grid = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-layout-grid-line"
}, p));
const BarChart3 = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-bar-chart-box-line"
}, p));
const MapPin = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-map-pin-line"
}, p));
const LayoutDashboard = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-dashboard-line"
}, p));
const Siren = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-alarm-warning-line"
}, p));
const Settings = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-settings-3-line"
}, p));
const Filter = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-filter-3-line"
}, p));
const CheckCircle = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-checkbox-circle-line"
}, p));
const XCircle = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-close-circle-line"
}, p));
const X = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-close-line"
}, p));
const AlertOctagon = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-error-warning-line"
}, p));
const School = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-school-line"
}, p));
const Footprints = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-footprint-line"
}, p));
const Maximize2 = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-fullscreen-line"
}, p));
const Minimize2 = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-fullscreen-exit-line"
}, p));
const Crop = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-crop-line"
}, p));
const ListCheck = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-list-check-2"
}, p));
const Flag = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-flag-line"
}, p));
const Plus = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-add-line"
}, p));
const Search = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-search-line"
}, p));
const Folder = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-folder-2-line"
}, p));
const Store = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-store-2-line"
}, p));
const CameraLens = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-camera-lens-line"
}, p));
const ArrowRightS = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-arrow-right-s-line"
}, p));
const ArrowDownS = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-arrow-down-s-line"
}, p));
const Network = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-node-tree"
}, p));
const Layers = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-stack-line"
}, p));
const Compass = p => /*#__PURE__*/React.createElement(Icon, _extends({
  name: "ri-compass-3-line"
}, p));
const ControlReason = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: "text-[10px] text-slate-500 ml-2",
  title: children
}, children);
const stripPriorityLabel = (text = '') => String(text).replace(/\s*\(P\d(?:-\d+)?\)/g, '').replace(/\bP0\b/g, '重点').replace(/\bP1-P3\b/g, '线索').replace(/\bP1\b/g, '线索').replace(/\bP2\b/g, '线索').replace(/\bP3\b/g, '线索').trim();
const severityText = (severity = '') => {
  if (severity === 'P0') return '重点';
  if (severity === 'P1' || severity === 'P2' || severity === 'P3') return '线索';
  return '常态';
};
const normalizeRiskLevel = (riskLevel = '') => {
  if (riskLevel === '0' || riskLevel === 'P0') return '0';
  if (riskLevel === '1' || riskLevel === 'P1') return '1';
  if (riskLevel === '2' || riskLevel === 'normal' || riskLevel === '常态') return '2';
  return '2';
};
const isLevel0Risk = riskLevel => normalizeRiskLevel(riskLevel) === '0';
const isLevel2Risk = riskLevel => normalizeRiskLevel(riskLevel) === '2';
const riskLevelDisplay = riskLevel => ({
  '0': '0级重点防区',
  '1': '1级重点防区',
  '2': '2级常态防区'
})[normalizeRiskLevel(riskLevel)];
const riskLevelToSeverity = riskLevel => isLevel0Risk(riskLevel) ? 'P0' : 'P1';
const classifyEventType = (text = '') => {
  if (/打架|打斗|冲突/.test(text)) return '打架斗殴';
  if (/拉车门|偷盗/.test(text)) return '偷盗拉车门';
  if (/涉稳|讨薪|横幅/.test(text)) return '涉稳讨薪';
  if (/医疗纠纷|医闹|医院/.test(text)) return '异常聚集';
  if (/聚集|人群|客流|密度/.test(text)) return '异常聚集';
  return '其他事件';
};
const alertDateText = (alert = {}) => alert.date || '2026-05-21';
const alertDateTimeValue = (alert = {}) => `${alertDateText(alert)} ${alert.time || '00:00:00'}`;
const formatAlertDate = (alert = {}) => {
  const date = alertDateText(alert);
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[1]}年${match[2]}月${match[3]}日` : date;
};

// --- 模拟告警数据 ---
const INITIAL_ALERTS = [{
  id: 'AL-1012',
  regionId: 'hospital',
  time: '09:42:18',
  location: '翔安医院急诊入口',
  type: '医疗纠纷异常聚集预警 (P0)',
  date: '2026-05-22',
  level: 'critical',
  severity: 'P0',
  status: 'unhandled',
  img: '医院急诊入口监控',
  conf: '97%',
  camera: 'HOSP-CAM-021',
  previewImage: HOSPITAL_DISTURBANCE_IMAGE,
  urgency: '强告警 (医疗纠纷聚集风险)',
  aiAdvice: '⚠️ 检测到医院急诊入口人员异常聚集，并命中横幅/举牌目标。\n\n建议处置：\n1. 先通过事件片段确认横幅/举牌与聚集规模，再切换当前画面复核现场是否仍在聚集；\n2. 通知院方安保与属地警力到入口外圈控场，优先保障急诊通道和救治秩序；\n3. 同步联系医患沟通/街道调解力量，避免围观扩散和冲突升级。',
  clipRange: {
    pre: 20,
    post: 35
  },
  metrics: [{
    label: '当前人数',
    value: '36',
    accent: 'text-orange-400',
    note: '超过医院入口阈值 1.8 倍'
  }, {
    label: '横幅/举牌',
    value: '命中',
    accent: 'text-red-400',
    note: '门诊雨棚下方疑似横幅'
  }, {
    label: '持续时长',
    value: '8分钟',
    accent: 'text-yellow-400',
    note: '需人工复核是否影响通行'
  }],
  crowdTags: ['HEAD_COUNT 36', 'BANNER_DETECTED'],
  behaviorSignals: [{
    label: '横幅/举牌识别',
    value: '命中',
    note: '目标检测识别到疑似横幅或举牌区域'
  }],
  sceneSummary: '医院急诊入口出现中等规模聚集，系统命中人数聚集与横幅/举牌目标；入口是否受阻、现场情绪和扩散风险需要民警结合当前画面复核。',
  sopSteps: ['确认事件片段中横幅/举牌与人员异常聚集是否属实。', '切换当前画面复核现场是否仍在聚集，并关注急诊入口通行状态。', '联动院方安保和属地警力到入口外圈控场，优先保障救治通道。', '如现场出现肢体冲突或围观扩散，升级为重点警情并同步街道调解力量。'],
  actions: ['确认入口是否受阻', '联动院方安保', '派发属地警力', '通知医患调解']
}, {
  id: 'AL-1009',
  regionId: 'gov',
  time: '10:30:15',
  location: '区政府南大门广场',
  type: '涉稳/讨薪聚集预警 (P0)',
  date: '2026-05-21',
  level: 'critical',
  severity: 'P0',
  status: 'unhandled',
  img: '区政府南门监控',
  conf: '98%',
  camera: 'GOV-CAM-01',
  previewImage: GOVERNMENT_GATE_IMAGE,
  urgency: '强告警 (群体涉稳风险)',
  aiAdvice: '⚠️ 检测到政府门口发生群体性拉横幅聚集事件！\n(命中特征: 人员聚集超45人 + 红色横幅标语)\n\n建议处置：\n1. 立即拉响内部警报，指派特警/防暴大队前往大门维持秩序；\n2. 立即上报分局指挥中心及信访部门进行先期沟通；\n3. 启动周边人脸卡口，视频追踪核心带头人员特征。'
}, {
  id: 'AL-1008',
  regionId: 'maxiang',
  time: '22:50:12',
  location: '马巷夜市十字路口',
  type: '多人异常聚集预警 (P0)',
  date: '2026-05-20',
  level: 'critical',
  severity: 'P0',
  status: 'unhandled',
  img: '夜市主干道监控',
  conf: '99%',
  camera: 'MX-CAM-094',
  previewImage: MAXIANG_NIGHT_MARKET_IMAGE,
  urgency: '强告警 (踩踏高风险)',
  aiAdvice: '⚠️ 检测到夜市核心区人群密度严重超标（当前区域 128 人，滞留时间 > 5分钟）！\n\n建议处置：\n1. 存在拥挤踩踏风险，请立即指令网格员前往现场疏导；\n2. 通知夜市管理方暂时关闭南侧入口，实行只出不进；\n3. 联动附近广播进行大客流安全提醒。',
  clipRange: {
    pre: 15,
    post: 30
  },
  metrics: [{
    label: '当前人数',
    value: '128',
    accent: 'text-red-400',
    note: '超过阈值 3.2 倍'
  }, {
    label: 'ROI 密度',
    value: '4.2人/㎡',
    accent: 'text-orange-400',
    note: '十字路口核心交汇区'
  }, {
    label: '持续时长',
    value: '5分12秒',
    accent: 'text-yellow-400',
    note: '超过滞留上限 2分12秒'
  }, {
    label: '人数增速',
    value: '+23/2分钟',
    accent: 'text-cyan-400',
    note: '客流仍在持续涌入'
  }],
  crowdTags: ['DENSITY_OVERLOAD', 'HEAD_COUNT 128', 'DWELL_TIME 5m12s', 'RISK_ZONE 南侧入口'],
  sceneSummary: '夜市十字路口形成双向对冲客流，南侧入口持续有新增人流进入，中心 ROI 内存在驻足围观与逆行穿插。',
  sopSteps: ['立即派发附近巡逻组和网格员到场，在十字路口外圈建立单向疏导带。', '通知夜市管理方关闭南侧入口，执行"只出不进"并在北侧保留分流通道。', '联动现场广播循环播报，提醒群众停止驻足、沿东侧通道有序离场。', '如 3 分钟后密度仍未回落至 2.5 人/㎡以下，升级为现场警戒并追加警力。'],
  actions: ['一键派单疏导', '关闭南侧入口', '启动现场广播', '升级大客流警戒']
}, {
  id: 'AL-1003',
  regionId: 'maxiang',
  time: '22:45:00',
  location: '马巷夜市排档B区',
  type: '聚众打斗/肢体冲突 (P0)',
  date: '2026-05-20',
  level: 'critical',
  severity: 'P0',
  status: 'unhandled',
  img: '马巷夜市监控',
  conf: '96%',
  camera: 'MX-CAM-092',
  previewImage: FIGHT_SCENE_IMAGE,
  urgency: '强告警 (现行治安违法)',
  aiAdvice: '⚠️ 检测到剧烈肢体冲突，有演变为恶性群殴风险！\n\n建议处置：\n1. 已为您匹配最近的【马巷巡逻二组】，请一键派发处警指令；\n2. 建议一键开启案发地（MX-CAM-092）的高音喇叭，进行现场喊话震慑；\n3. 持续锁定嫌疑人特征，防止流窜。',
  clipRange: {
    pre: 8,
    post: 12
  },
  fightWindow: {
    title: '5-15 秒冲突片段',
    keyFrames: ['起冲帧', '接触帧', '推搡升级帧'],
    labels: ['FIGHT_ACTION 96%', 'CONTACT_BREAKDOWN', 'ESCALATION_RISK'],
    summary: '两名主体出现正面接触后迅速升级为肢体冲突，周边人员有围观和靠近趋势。',
    nearestPolice: '马巷巡逻二组 (距案发40m)',
    nearestDisposal: '高音喇叭 / 现场喊话 / 先行控场'
  },
  metrics: [{
    label: '冲突动作',
    value: '96%',
    accent: 'text-red-400',
    note: '打斗动作识别命中'
  }, {
    label: '疑似人数',
    value: '4-6人',
    accent: 'text-orange-400',
    note: '含围观与介入人员'
  }, {
    label: '持续时长',
    value: '34秒',
    accent: 'text-yellow-400',
    note: '冲突已持续超过 30 秒'
  }, {
    label: '风险等级',
    value: 'P0',
    accent: 'text-cyan-400',
    note: '可直接进入极速复核'
  }],
  sceneSummary: '冲突集中在排档B区桌椅旁，存在推搡、挥拳、追逐和再次接触风险，建议优先做控场和隔离。',
  sopSteps: ['先确认视频中是否存在持续肢体接触与追打行为，避免误将口角识别为打斗。', '若命中，立即向马巷巡逻二组下发处警，并要求在外圈先做隔离控场。', '同步开启高音喇叭和周边摄像头联动，防止嫌疑人借人群混入离开。', '到场后回填现场控制结果，再决定是否升级为伤情/治安案件。'],
  actions: ['确认警情', '标记误报', '升级值班长复核']
}, {
  id: 'AL-1006',
  regionId: 'garage',
  time: '02:15:00',
  location: '洋唐居住区地下车库',
  type: '偷盗/拉车门线索 (P1)',
  date: '2026-05-20',
  level: 'medium',
  severity: 'P1',
  status: 'unhandled',
  img: '洋唐地库监控',
  conf: '88%',
  camera: 'YT-PKG-044',
  urgency: '疑似线索 (需人工复核)',
  aiAdvice: '检测到连续试探拉动多辆车门的异常行为链。\n请研判员复核：\n若是正常车主寻找车辆，请点击【无效线索标记】回流负样本；若属实，请【转警】并记录ReID特征。'
}];
const INITIAL_DISPOSITION_RECORDS = [{
  id: 'HD-20260517-003',
  alertId: 'AL-0908',
  reportId: 'RP-20260517-001',
  alertType: '多人异常聚集预警',
  severity: 'P0',
  regionName: '马巷夜市防区',
  location: '马巷夜市北侧入口',
  camera: 'MX-CAM-088',
  source: '聚集密度识别',
  reportedAt: '2026-05-17 19:48:22',
  handledAt: '2026-05-17 19:49:10',
  completedAt: '2026-05-17 19:56:40',
  dispositionStatus: '已解除',
  reviewStatus: '待复盘',
  handler: '马巷巡逻二组',
  commander: '情指值班长 林志斌',
  resultSummary: '处置组执行入口分流与广播提醒后，核心区域人流在 7 分钟内回落至安全阈值。',
  actions: ['关闭北侧入口', '现场广播疏导', '增派网格员'],
  evidence: ['45秒事件片段', '热力截图 2 张', '处置反馈照片 1 张'],
  metrics: [{
    label: '峰值人数',
    value: '116',
    note: '超过阈值 2.9 倍'
  }, {
    label: 'ROI 密度',
    value: '3.8人/㎡',
    note: '入口外圈聚集明显'
  }, {
    label: '处置耗时',
    value: '8分18秒',
    note: '从告警到现场恢复'
  }],
  timeline: ['19:48:22 系统触发重点聚集告警', '19:49:10 值班员确认并下发疏导指令', '19:52:30 夜市管理方关闭北侧入口', '19:56:40 现场反馈密度已恢复正常'],
  notes: '建议将北侧入口单独划为 ROI 子区域，并在节假日晚高峰前置广播。',
  tags: ['聚集疏导', '夜市大客流', '已闭环']
}, {
  id: 'HD-20260519-014',
  alertId: 'AL-0974',
  reportId: '',
  alertType: '多人异常聚集预警',
  severity: 'P0',
  regionName: '马巷夜市防区',
  location: '马巷夜市十字路口核心区',
  camera: 'MX-CAM-094',
  source: '聚集密度识别',
  reportedAt: '2026-05-19 21:12:36',
  handledAt: '2026-05-19 21:13:08',
  completedAt: '2026-05-19 21:20:42',
  dispositionStatus: '已解除',
  reviewStatus: '无需复盘',
  handler: '马巷巡逻二组',
  commander: '马巷所值班长',
  resultSummary: '十字路口夜宵客流短时叠加，巡逻组到场后打开东侧疏散口并引导人流单向通行。',
  actions: ['打开东侧疏散口', '路口单向导流', '通知商户暂停外摆加桌'],
  evidence: ['45秒事件片段', '密度热力截图', '现场疏导反馈'],
  metrics: [{
    label: '峰值人数',
    value: '92',
    note: '超过阈值 2.3 倍'
  }, {
    label: '持续时长',
    value: '8分06秒',
    note: '人流高位徘徊'
  }, {
    label: '处置耗时',
    value: '7分34秒',
    note: '从告警到恢复'
  }],
  timeline: ['21:12:36 系统触发十字路口聚集告警', '21:13:08 值班员确认并通知巡逻二组', '21:16:20 东侧疏散口打开并开始导流', '21:20:42 现场密度回落至安全阈值'],
  notes: '建议周末 20:30 后提前打开东侧疏散口，并把十字路口作为夜市高峰重点轮巡点位。',
  tags: ['异常聚集', '夜市客流', '已闭环']
}, {
  id: 'HD-20260518-008',
  alertId: 'AL-0961',
  reportId: '',
  alertType: '多人异常聚集预警',
  severity: 'P1',
  regionName: '马巷夜市防区',
  location: '马巷夜市十字路口核心区',
  camera: 'MX-CAM-094',
  source: '聚集密度识别',
  reportedAt: '2026-05-18 20:36:10',
  handledAt: '2026-05-18 20:40:22',
  completedAt: '2026-05-18 20:45:18',
  dispositionStatus: '已解除',
  reviewStatus: '无需复盘',
  handler: '马巷网格联防员',
  commander: '情指值守台',
  resultSummary: '促销摊位前形成围观滞留，网格员提醒商户收窄排队区后人流恢复通畅。',
  actions: ['网格员现场提醒', '收窄促销排队区', '广播提示勿停留围观'],
  evidence: ['30秒事件片段', '处置反馈截图'],
  metrics: [{
    label: '峰值人数',
    value: '61',
    note: '超过阈值 1.5 倍'
  }, {
    label: '持续时长',
    value: '9分08秒',
    note: '促销摊位前滞留'
  }, {
    label: '处置耗时',
    value: '4分56秒',
    note: '网格员现场完成'
  }],
  timeline: ['20:36:10 系统触发聚集线索', '20:40:22 网格员到场核查', '20:42:35 商户调整排队区', '20:45:18 现场恢复通行'],
  notes: '该点位连续两天出现客流聚集，建议在节假日提升预警等级并增加现场导流标识。',
  tags: ['异常聚集', '促销围观', '已闭环']
}, {
  id: 'HD-20260514-002',
  alertId: 'AL-0821',
  reportId: 'RP-20260514-001',
  alertType: '涉稳/讨薪聚集预警',
  severity: 'P0',
  regionName: '区政府核心圈',
  location: '区政府南大门广场',
  camera: 'GOV-CAM-01',
  source: '涉稳聚集识别',
  reportedAt: '2026-05-14 09:18:04',
  handledAt: '2026-05-14 09:19:16',
  completedAt: '2026-05-14 09:34:28',
  dispositionStatus: '已解除',
  reviewStatus: '已归档',
  handler: '情指联动专班',
  commander: '分局值班指挥长 陈耀',
  resultSummary: '现场完成劝离与信访分流，带头人员被单独引导至接待区沟通，未形成扩散。',
  actions: ['特警前置布控', '信访部门联动接待', '周边卡口跟踪'],
  evidence: ['60秒事件片段', '横幅识别截图 2 张', '现场处置记录单'],
  metrics: [{
    label: '聚集人数',
    value: '47',
    note: '横幅目标已命中'
  }, {
    label: '现场耗时',
    value: '16分24秒',
    note: '沟通分流完成'
  }, {
    label: '扩散风险',
    value: '已阻断',
    note: '未向周边道路蔓延'
  }],
  timeline: ['09:18:04 系统识别横幅与群体聚集', '09:19:16 指挥中心启动联动专班', '09:25:40 现场人员分批引导至接待区', '09:34:28 门前广场秩序恢复'],
  notes: '建议保留现有阈值，并针对节后讨薪场景补充专题策略。',
  tags: ['涉稳处置', '重点单位', '已复盘']
}, {
  id: 'HD-20260516-011',
  alertId: 'AL-0915',
  alertType: '偷盗/拉车门线索',
  severity: 'P1',
  regionName: '洋唐居住区地下车库',
  location: '洋唐居住区地下车库 B1 区',
  camera: 'YT-PKG-044',
  source: '异常行为链识别',
  reportedAt: '2026-05-16 02:15:00',
  handledAt: '2026-05-16 02:22:18',
  completedAt: '2026-05-16 02:26:40',
  dispositionStatus: '误报回流',
  reviewStatus: '无需复盘',
  handler: '夜班研判员 07',
  commander: '情指值守台',
  resultSummary: '人工复核确认系车主寻找车辆，已标记误报并回流负样本。',
  evidence: ['20秒事件片段', '人工复核备注'],
  timeline: ['02:15:00 系统触发 P1 拉车门线索告警', '02:22:18 研判员完成人工复核', '02:26:40 结果回流算法样本库'],
  notes: '后续可增加"车主停留时长 + 钥匙姿态"辅助特征。',
  tags: ['误报样本', '车库场景']
}];
const INITIAL_REVIEW_REPORTS = [{
  id: 'RP-20260517-001',
  recordId: 'HD-20260517-003',
  title: '马巷夜市北侧入口大客流聚集复盘',
  severity: 'P0',
  status: '待复盘',
  owner: '马巷所指挥室',
  stageNote: '系统自动生成初稿',
  generatedAt: '2026-05-17 20:08:12',
  location: '马巷夜市北侧入口',
  type: '多人异常聚集预警 (P0)',
  eventWindow: '2026-05-17 19:48 - 19:56',
  summary: '晚高峰叠加摊位促销导致北侧入口形成对冲客流，入口管控滞后造成短时拥堵。',
  keyFindings: ['北侧入口导流标识不足，新增客流持续涌入。', '广播联动后 3 分钟内 ROI 密度明显回落，说明现场提醒措施有效。', '现有 ROI 未完全覆盖北侧排队区，需向外扩展约 8 米。'],
  timeline: ['19:48 告警触发并推送值班席位', '19:49 值班员确认聚集风险并派单', '19:52 夜市管理方执行入口只出不进', '19:56 现场反馈恢复常态客流'],
  recommendations: ['将北侧入口新增为独立 ROI，单独配置人流密度阈值。', '节假日晚高峰提前 15 分钟启动广播提醒。', '在夜市南北入口增加网格员轮巡签到。'],
  keywords: ['ROI优化', '入口分流', '广播联动'],
  conclusion: '建议将该场景纳入夜市大客流专项策略，作为节假日模板复制。'
}, {
  id: 'RP-20260514-001',
  recordId: 'HD-20260514-002',
  title: '区政府南门涉稳聚集事件复盘',
  severity: 'P0',
  status: '已归档',
  owner: '分局情指中心',
  stageNote: '人工补充后已归档',
  generatedAt: '2026-05-14 10:02:30',
  location: '区政府南大门广场',
  type: '涉稳/讨薪聚集预警 (P0)',
  eventWindow: '2026-05-14 09:18 - 09:34',
  summary: '讨薪人员于上班时段集中聚集并举横幅，现场联动处置总体平稳，未引发外围围观扩散。',
  keyFindings: ['横幅识别与人数阈值双命中，告警定性准确。', '信访部门提前介入后，带头人员被快速分流至接待区。', '周边卡口联动耗时偏长，核心人员轨迹回传仍有优化空间。'],
  timeline: ['09:18 涉稳聚集告警触发', '09:19 特警与信访联动专班同步出动', '09:27 带头人员完成接触劝导', '09:34 门前广场秩序恢复并解除警戒'],
  recommendations: ['在政府门前保留缓冲区 ROI，提前锁定聚集中心点。', '优化重点单位周边卡口回传延迟，缩短核心人员跟踪时间。', '建立节后涉稳专题预案并纳入值班提醒。'],
  keywords: ['重点单位', '横幅识别', '卡口联动'],
  conclusion: '本次联动流程有效，但应补充门前缓冲区策略与节后专题值守安排。'
}];

// --- 完整区域字典库 ---
const ALL_REGIONS_CONFIG = {
  'gov': {
    id: 'gov',
    name: '区政府核心圈',
    type: 'alert',
    macroPos: {
      top: '55%',
      left: '35%'
    },
    microTitle: '政务核心重点防区',
    highlightQuadrant: 'A1',
    icon: ShieldAlert,
    image: GOVERNMENT_GATE_IMAGE,
    cameras: [{
      id: 'c1',
      name: 'GOV-CAM-01 (南大门全景)',
      pos: {
        top: '50%',
        left: '50%'
      },
      isAlert: true,
      label: 'P0 涉稳讨薪事件',
      isPetition: true
    }],
    police: [{
      name: '特警装甲车01',
      pos: {
        top: '55%',
        left: '55%'
      },
      isAlert: true
    }],
    caps: [{
      id: 'v2',
      title: '横幅与标语动作识别 (P0)',
      desc: '识别拉横幅等特定动作，辅助定性群体事件。',
      sources: ['外网视频', '目标检测'],
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      icon: Flag,
      hasRoi: false,
      isGathering: true
    }, {
      id: 'n3',
      title: '多人异常聚集识别 (P0)',
      desc: '识别核心区域人员滞留，避免引发踩踏伤亡。',
      sources: ['外网视频', '密度热力'],
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      icon: Users,
      hasRoi: true,
      isGathering: true
    }]
  },
  'hospital': {
    id: 'hospital',
    name: '医院急诊入口防区',
    type: 'alert',
    macroPos: {
      top: '44%',
      left: '62%'
    },
    microTitle: '医院门前医疗纠纷联防区',
    highlightQuadrant: 'B2',
    icon: ShieldAlert,
    image: HOSPITAL_DISTURBANCE_IMAGE,
    cameras: [{
      id: 'c1',
      name: 'HOSP-CAM-021 (急诊入口全景)',
      pos: {
        top: '48%',
        left: '52%'
      },
      coveragePart: '急诊入口通道',
      role: '核心点位',
      isAlert: true,
      label: 'P0 医疗纠纷聚集',
      isGathering: true
    }, {
      id: 'c2',
      name: 'HOSP-CAM-023 (门诊雨棚外场)',
      pos: {
        top: '35%',
        left: '38%'
      },
      coveragePart: '门诊雨棚外场',
      role: '补充点位',
      isAlert: false,
      label: '横幅/举牌复核',
      isGathering: true
    }],
    police: [{
      name: '新店巡防联动组',
      pos: {
        top: '55%',
        left: '60%'
      },
      isAlert: true
    }],
    caps: [{
      id: 'n3',
      title: '多人异常聚集识别 (P0)',
      desc: '识别核心区域人员滞留，避免引发踩踏伤亡。',
      sources: ['外网视频', '密度热力'],
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      icon: Users,
      hasRoi: true,
      isGathering: true
    }, {
      id: 'v2',
      title: '横幅与标语动作识别 (P0)',
      desc: '识别拉横幅等特定动作，辅助定性群体事件。',
      sources: ['外网视频', '目标检测'],
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      icon: Flag,
      hasRoi: false,
      isGathering: true
    }]
  },
  'maxiang': {
    id: 'maxiang',
    name: '马巷夜市防区',
    type: 'alert',
    macroPos: {
      top: '25%',
      left: '42%'
    },
    microTitle: '马巷镇核心防区',
    highlightQuadrant: 'C3',
    icon: Store,
    image: MAXIANG_NIGHT_MARKET_IMAGE,
    cameras: [{
      id: 'c1',
      name: 'MX-CAM-092 (排档B区全景)',
      pos: {
        top: '65%',
        left: '25%'
      },
      isAlert: true,
      label: 'P0 冲突告警节点',
      isFight: true
    }, {
      id: 'c2',
      name: 'MX-CAM-094 (十字路口球机)',
      pos: {
        top: '48%',
        left: '48%'
      },
      isAlert: true,
      label: 'P0 异常聚集点',
      isGathering: true
    }, {
      id: 'c3',
      name: '商业中心南门枪机',
      pos: {
        top: '18%',
        left: '28%'
      },
      isAlert: false
    }],
    police: [{
      name: '巡逻二组 (距案发40m)',
      pos: {
        top: '52%',
        left: '40%'
      },
      isAlert: true
    }],
    caps: [{
      id: 'n1',
      title: '打架/冲突识别 (P0)',
      desc: '发现推搡、挥拳、踢打等暴力冲突。',
      sources: ['外网视频', '动作姿态'],
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      icon: Activity,
      hasRoi: false
    }, {
      id: 'n3',
      title: '多人异常聚集识别 (P0)',
      desc: '识别核心区域人员滞留，避免引发踩踏伤亡。',
      sources: ['外网视频', '密度热力'],
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      icon: Users,
      hasRoi: true,
      isGathering: true
    }]
  },
  'garage': {
    id: 'garage',
    name: '洋唐居住区地下车库',
    type: 'alert',
    macroPos: {
      top: '65%',
      left: '45%'
    },
    microTitle: '洋唐大型社区防区',
    highlightQuadrant: 'B2',
    icon: Car,
    image: GENERIC_SCENE_IMAGE,
    cameras: [{
      id: 'c1',
      name: '地库B1层主干道',
      pos: {
        top: '20%',
        left: '60%'
      },
      isAlert: false
    }, {
      id: 'c2',
      name: '非机动车停放区',
      pos: {
        top: '35%',
        left: '75%'
      },
      isAlert: true,
      label: 'P1 拉车门线索'
    }],
    police: [],
    caps: [{
      id: 'g1',
      title: '偷盗/拉车门线索检测 (P1)',
      desc: '识别夜间沿路侧停车区连续试探行为链。',
      sources: ['外网视频', '人车关系'],
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      icon: Crosshair,
      hasRoi: true
    }]
  },
  'school': {
    id: 'school',
    name: '厦门大学翔安校区',
    type: 'normal',
    macroPos: {
      top: '62%',
      left: '70%'
    },
    microTitle: '大学城重点防区',
    highlightQuadrant: 'D4',
    icon: School,
    image: KTV_SCENE_IMAGE,
    cameras: [{
      id: 'c1',
      name: '学校西校门',
      pos: {
        top: '50%',
        left: '50%'
      },
      isAlert: false
    }],
    police: [],
    caps: [{
      id: 's1',
      title: '疑似未成年人聚集线索',
      desc: '在学校、周边网吧发现疑似聚集线索，辅助巡查。',
      sources: ['外网视频', '年龄辅助'],
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      icon: School,
      hasRoi: true
    }]
  },
  'market': {
    id: 'market',
    name: '新店农贸市场',
    type: 'normal',
    macroPos: {
      top: '48%',
      left: '30%'
    },
    microTitle: '新店商贸枢纽防区',
    highlightQuadrant: 'D4',
    icon: Store,
    image: GENERIC_SCENE_IMAGE,
    cameras: [{
      id: 'c1',
      name: '市场东门主通道',
      pos: {
        top: '45%',
        left: '65%'
      },
      isAlert: false
    }],
    police: [{
      name: '社区网格员联防组',
      pos: {
        top: '48%',
        left: '60%'
      },
      isAlert: false
    }],
    caps: [{
      id: 'm1',
      title: '小摊贩与占道经营识别',
      desc: '识别违规占道经营、乱堆物料等市容市貌问题。',
      sources: ['外网视频', '目标检测'],
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      icon: Store,
      hasRoi: true
    }]
  }
};
const REGION_TREE_DATA = [{
  id: 'street-xindian',
  name: '新店街道',
  isExpanded: true,
  children: [{
    id: 'gov',
    name: '区政府核心圈'
  }, {
    id: 'hospital',
    name: '医院急诊入口防区'
  }, {
    id: 'garage',
    name: '洋唐居住区地下车库'
  }, {
    id: 'school',
    name: '厦门大学翔安校区'
  }, {
    id: 'market',
    name: '新店农贸市场'
  }]
}, {
  id: 'street-maxiang',
  name: '马巷街道',
  isExpanded: true,
  children: [{
    id: 'maxiang',
    name: '马巷夜市防区'
  }]
}];
const REGION_STREET_OPTIONS = [{
  id: 'street-xindian',
  name: '新店街道'
}, {
  id: 'street-maxiang',
  name: '马巷街道'
}, {
  id: 'street-xiangping',
  name: '翔平街道'
}, {
  id: 'street-fengxiang',
  name: '凤翔街道'
}];
const REGION_SCENE_OPTIONS = [{
  id: 'night-market',
  name: '夜市商圈',
  icon: Store,
  microTitle: '商圈客流重点防区',
  capIds: ['n1', 'n3'],
  color: 'text-yellow-400'
}, {
  id: 'government',
  name: '重点单位',
  icon: ShieldAlert,
  microTitle: '重点单位周边防区',
  capIds: ['v2', 'n3'],
  color: 'text-red-400'
}, {
  id: 'hospital',
  name: '医院门前',
  icon: ShieldAlert,
  microTitle: '医疗纠纷联防区',
  capIds: ['n3', 'v2'],
  color: 'text-red-400'
}, {
  id: 'community',
  name: '社区车库',
  icon: Car,
  microTitle: '社区地下空间防区',
  capIds: ['g1'],
  color: 'text-emerald-400'
}, {
  id: 'campus',
  name: '校园周边',
  icon: School,
  microTitle: '校园周边秩序防区',
  capIds: ['s1'],
  color: 'text-indigo-400'
}];
const REGION_RISK_OPTIONS = [{
  id: '0',
  name: '0级重点防区',
  desc: '0级重点防区'
}, {
  id: '1',
  name: '1级重点防区',
  desc: '1级重点防区'
}, {
  id: '2',
  name: '2级常态防区',
  desc: '2级常态防区'
}];
const REGION_WIZARD_CAMERA_POOL = [{
  id: 'pool-mx-094',
  name: '马巷夜市十字路口球机',
  code: 'MX-CAM-094',
  streetId: 'street-maxiang',
  position: '十字路口核心区',
  coveragePart: '十字路口核心区',
  role: '核心点位',
  sceneType: 'night-market',
  status: 'online',
  lat: 24.6578,
  lng: 118.2491,
  pos: {
    top: '48%',
    left: '48%'
  }
}, {
  id: 'pool-mx-092',
  name: '马巷夜市排档B区全景',
  code: 'MX-CAM-092',
  streetId: 'street-maxiang',
  position: '排档B区桌椅外场',
  coveragePart: '排档外摆区',
  role: '补充点位',
  sceneType: 'night-market',
  status: 'online',
  lat: 24.6569,
  lng: 118.2468,
  pos: {
    top: '64%',
    left: '28%'
  }
}, {
  id: 'pool-mx-088',
  name: '马巷夜市北入口枪机',
  code: 'MX-CAM-088',
  streetId: 'street-maxiang',
  position: '夜市北入口',
  coveragePart: '夜市北入口',
  role: '入口点位',
  sceneType: 'night-market',
  status: 'online',
  lat: 24.6591,
  lng: 118.2474,
  pos: {
    top: '32%',
    left: '42%'
  }
}, {
  id: 'pool-gov-001',
  name: '区政府南大门全景',
  code: 'GOV-CAM-01',
  streetId: 'street-xindian',
  position: '南门广场缓冲区',
  coveragePart: '南门广场缓冲区',
  role: '核心点位',
  sceneType: 'government',
  status: 'online',
  lat: 24.6762,
  lng: 118.2683,
  pos: {
    top: '44%',
    left: '50%'
  }
}, {
  id: 'pool-hosp-021',
  name: '医院急诊入口全景',
  code: 'HOSP-CAM-021',
  streetId: 'street-xindian',
  position: '急诊入口通道',
  coveragePart: '急诊入口通道',
  role: '核心点位',
  sceneType: 'hospital',
  status: 'online',
  lat: 24.6815,
  lng: 118.2437,
  pos: {
    top: '48%',
    left: '52%'
  }
}, {
  id: 'pool-hosp-023',
  name: '医院门诊雨棚外场',
  code: 'HOSP-CAM-023',
  streetId: 'street-xindian',
  position: '门诊雨棚外场',
  coveragePart: '门诊雨棚外场',
  role: '补充点位',
  sceneType: 'hospital',
  status: 'online',
  lat: 24.6808,
  lng: 118.2424,
  pos: {
    top: '35%',
    left: '38%'
  }
}, {
  id: 'pool-yt-044',
  name: '洋唐地库非机动车区',
  code: 'YT-PKG-044',
  streetId: 'street-xindian',
  position: 'B1 非机动车停放区',
  coveragePart: 'B1 非机动车停放区',
  role: '核心点位',
  sceneType: 'community',
  status: 'online',
  lat: 24.6627,
  lng: 118.2579,
  pos: {
    top: '38%',
    left: '70%'
  }
}, {
  id: 'pool-school-001',
  name: '学校西校门慢行通道',
  code: 'SCHOOL-CAM-001',
  streetId: 'street-xindian',
  position: '校门外慢行通道',
  coveragePart: '校门外慢行通道',
  role: '核心点位',
  sceneType: 'campus',
  status: 'offline',
  lat: 24.6371,
  lng: 118.2636,
  pos: {
    top: '52%',
    left: '54%'
  }
}, {
  id: 'pool-market-001',
  name: '新店农贸市场东门通道',
  code: 'MARKET-CAM-001',
  streetId: 'street-xindian',
  position: '市场东门主通道',
  coveragePart: '市场东门主通道',
  role: '核心点位',
  sceneType: 'night-market',
  status: 'online',
  lat: 24.6587,
  lng: 118.2477,
  pos: {
    top: '42%',
    left: '62%'
  }
}];
const REGION_CAPABILITY_LIBRARY = [{
  id: 'v2',
  title: '横幅与标语动作识别 (P0)',
  desc: '识别拉横幅等特定动作，辅助定性群体事件。',
  sources: ['外网视频', '目标检测'],
  color: 'text-orange-400',
  bg: 'bg-orange-500/10',
  icon: Flag,
  hasRoi: false,
  isGathering: true
}, {
  id: 'n1',
  title: '打架/冲突识别 (P0)',
  desc: '发现推搡、挥拳、追打等暴力冲突。',
  sources: ['外网视频', '动作姿态'],
  color: 'text-red-400',
  bg: 'bg-red-500/10',
  icon: Activity,
  hasRoi: false
}, {
  id: 'n3',
  title: '多人异常聚集识别 (P0)',
  desc: '识别核心区域人员滞留，避免引发踩踏伤亡。',
  sources: ['外网视频', '密度热力'],
  color: 'text-yellow-400',
  bg: 'bg-yellow-500/10',
  icon: Users,
  hasRoi: true,
  isGathering: true
}, {
  id: 'g1',
  title: '偷盗/拉车门线索检测 (P1)',
  desc: '识别夜间沿路侧停车区连续试探行为链。',
  sources: ['外网视频', '人车关系'],
  color: 'text-emerald-400',
  bg: 'bg-emerald-500/10',
  icon: Crosshair,
  hasRoi: true
}, {
  id: 's1',
  title: '疑似未成年人聚集线索',
  desc: '在学校、周边网吧发现疑似聚集线索，辅助巡查。',
  sources: ['外网视频', '年龄辅助'],
  color: 'text-indigo-400',
  bg: 'bg-indigo-500/10',
  icon: School,
  hasRoi: true
}];
const SURVEILLANCE_FEEDS = [{
  id: 'feed-maxiang-094',
  regionId: 'maxiang',
  regionName: '马巷夜市防区',
  camera: 'MX-CAM-094',
  title: '马巷夜市十字路口球机',
  position: '十字路口核心区',
  status: 'online',
  priority: 'P0',
  mode: 'fixed',
  sceneType: 'crowd',
  image: MAXIANG_NIGHT_MARKET_IMAGE,
  hasAlert: true,
  linkedAlertId: 'AL-1008',
  tags: ['异常聚集', '夜市客流', '重点巡看'],
  summary: '十字路口人流密度持续升高，适合值守位长期驻看。'
}, {
  id: 'feed-maxiang-092',
  regionId: 'maxiang',
  regionName: '马巷夜市防区',
  camera: 'MX-CAM-092',
  title: '马巷夜市排档B区全景',
  position: '排档B区桌椅外圈',
  status: 'online',
  priority: 'P0',
  mode: 'patrol',
  sceneType: 'fight',
  image: FIGHT_SCENE_IMAGE,
  hasAlert: true,
  linkedAlertId: 'AL-1003',
  tags: ['冲突易发', '夜间值守'],
  summary: '排档区桌椅密集，适合关注冲突升级和人员围观情况。'
}, {
  id: 'feed-gov-001',
  regionId: 'gov',
  regionName: '区政府核心圈',
  camera: 'GOV-CAM-01',
  title: '区政府南大门全景',
  position: '南门广场缓冲区',
  status: 'online',
  priority: 'P0',
  mode: 'fixed',
  sceneType: 'petition',
  image: GOVERNMENT_GATE_IMAGE,
  hasAlert: true,
  linkedAlertId: 'AL-1009',
  tags: ['重点单位', '涉稳值守'],
  summary: '重点单位门前，适合对横幅、聚集和外围扩散做持续观察。'
}, {
  id: 'feed-hospital-021',
  regionId: 'hospital',
  regionName: '医院急诊入口防区',
  camera: 'HOSP-CAM-021',
  title: '医院急诊入口全景',
  position: '急诊入口通道',
  status: 'online',
  priority: 'P0',
  mode: 'fixed',
  sceneType: 'crowd',
  image: HOSPITAL_DISTURBANCE_IMAGE,
  hasAlert: true,
  linkedAlertId: 'AL-1012',
  tags: ['医疗纠纷', '异常聚集', '入口通道'],
  summary: '医院入口重点巡看点位，适合复核是否存在横幅、举牌以及入口通行受影响。'
}, {
  id: 'feed-hospital-023',
  regionId: 'hospital',
  regionName: '医院急诊入口防区',
  camera: 'HOSP-CAM-023',
  title: '医院门诊雨棚外场',
  position: '门诊雨棚外场',
  status: 'online',
  priority: 'P0',
  mode: 'patrol',
  sceneType: 'crowd',
  image: HOSPITAL_DISTURBANCE_IMAGE,
  hasAlert: false,
  linkedAlertId: '',
  tags: ['横幅复核', '外围观察'],
  summary: '补充观察门诊雨棚与外围停留人员，辅助判断围观是否扩散。'
}, {
  id: 'feed-garage-044',
  regionId: 'garage',
  regionName: '洋唐居住区地下车库',
  camera: 'YT-PKG-044',
  title: '洋唐地库非机动车停放区',
  position: 'B1非机动车停放区',
  status: 'online',
  priority: 'P1',
  mode: 'fixed',
  sceneType: 'garage',
  image: GENERIC_SCENE_IMAGE,
  hasAlert: true,
  linkedAlertId: 'AL-1006',
  tags: ['夜间线索', '拉车门'],
  summary: '适合低照度条件下做行为链巡看和线索复核。'
}, {
  id: 'feed-school-001',
  regionId: 'school',
  regionName: '厦门大学翔安校区',
  camera: 'SCHOOL-CAM-001',
  title: '学校西校门',
  position: '校门外慢行通道',
  status: 'offline',
  priority: '常态',
  mode: 'patrol',
  sceneType: 'campus',
  image: KTV_SCENE_IMAGE,
  hasAlert: false,
  linkedAlertId: '',
  tags: ['校园周界'],
  summary: '常态巡看点位，当前离线。'
}, {
  id: 'feed-market-001',
  regionId: 'market',
  regionName: '新店农贸市场',
  camera: 'MARKET-CAM-001',
  title: '市场东门主通道',
  position: '东门车辆混行区',
  status: 'online',
  priority: '常态',
  mode: 'fixed',
  sceneType: 'market',
  image: GENERIC_SCENE_IMAGE,
  hasAlert: false,
  linkedAlertId: '',
  tags: ['市容巡查'],
  summary: '常态观察点位，适合结合市容问题做日常巡看。'
}];

// ============================================================================
// 态势大屏视图 (Dashboard - 盒子布局版)
// ============================================================================
const DashboardView = ({
  activeRegions,
  regionsConfig,
  alerts,
  onAlertClick
}) => {
  const [activeRegionId, setActiveRegionId] = useState(null);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [alertSearchQuery, setAlertSearchQuery] = useState('');
  const displayRegions = Object.values(regionsConfig).filter(r => activeRegions.includes(r.id));
  const displayAlerts = alerts.filter(a => activeRegions.includes(a.regionId) && a.status === 'unhandled');
  const getAlertTask = alert => {
    const text = `${alert.type || ''} ${alert.location || ''}`;
    if (/打架|打斗|冲突/.test(text)) return {
      id: 'fight',
      label: '打架斗殴'
    };
    if (/拉车门|偷盗/.test(text)) return {
      id: 'theft',
      label: '偷盗拉车门'
    };
    if (/涉稳|讨薪/.test(text)) return {
      id: 'petition',
      label: '涉稳讨薪'
    };
    if (/医疗纠纷|医闹|医院/.test(text)) return {
      id: 'crowd',
      label: '异常聚集'
    };
    if (/聚集/.test(text)) return {
      id: 'crowd',
      label: '异常聚集'
    };
    return {
      id: 'other',
      label: '其他任务'
    };
  };
  const filteredAlerts = useMemo(() => {
    const keywords = alertSearchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return displayAlerts.filter(alert => {
      const task = getAlertTask(alert);
      const regionName = regionsConfig[alert.regionId]?.name || '';
      const searchableText = [alert.type, alert.location, alert.camera, alert.id, regionName, task.label, stripPriorityLabel(alert.type)].join(' ').toLowerCase();
      return keywords.length === 0 || keywords.every(keyword => searchableText.includes(keyword));
    }).sort((a, b) => alertDateTimeValue(b).localeCompare(alertDateTimeValue(a)));
  }, [displayAlerts, alertSearchQuery, regionsConfig]);
  const handleWheel = e => {
    if (e.deltaY < 0 && !activeRegionId && hoveredRegionId) setActiveRegionId(hoveredRegionId);else if (e.deltaY > 0 && activeRegionId) setActiveRegionId(null);
  };
  const activeRegionData = regionsConfig[activeRegionId];
  const macroRoads = [{
    id: 'r1',
    d: 'M 40 155 C 140 135, 240 120, 348 126 S 574 150, 760 136',
    width: 10,
    color: 'rgba(56,189,248,0.24)'
  }, {
    id: 'r2',
    d: 'M 108 340 C 196 304, 292 284, 390 292 S 600 342, 756 316',
    width: 8,
    color: 'rgba(34,211,238,0.2)'
  }, {
    id: 'r3',
    d: 'M 420 26 C 404 124, 398 218, 412 304 S 442 498, 464 598',
    width: 9,
    color: 'rgba(59,130,246,0.22)'
  }, {
    id: 'r4',
    d: 'M 178 64 C 214 138, 248 212, 292 286 S 386 438, 444 570',
    width: 6,
    color: 'rgba(45,212,191,0.18)'
  }, {
    id: 'r5',
    d: 'M 604 74 C 584 162, 556 238, 522 308 S 456 462, 404 586',
    width: 6,
    color: 'rgba(14,165,233,0.18)'
  }, {
    id: 'r6',
    d: 'M 84 468 C 190 430, 304 410, 438 420 S 640 458, 748 522',
    width: 7,
    color: 'rgba(251,191,36,0.12)'
  }];
  const macroZones = [{
    id: 'market-zone',
    label: '新店商贸区',
    points: '110,248 178,214 242,230 256,298 208,346 126,322',
    stroke: 'rgba(45,212,191,0.46)',
    fill: 'rgba(20,184,166,0.1)'
  }, {
    id: 'gov-zone',
    label: '政务核心圈',
    points: '210,314 286,284 344,306 350,378 286,416 216,386',
    stroke: 'rgba(248,113,113,0.52)',
    fill: 'rgba(239,68,68,0.12)'
  }, {
    id: 'hospital-zone',
    label: '医院急诊入口',
    points: '470,232 548,210 614,252 604,332 520,354 452,306',
    stroke: 'rgba(248,113,113,0.5)',
    fill: 'rgba(244,63,94,0.12)'
  }, {
    id: 'maxiang-zone',
    label: '马巷夜市',
    points: '272,102 352,88 420,126 404,198 330,220 264,176',
    stroke: 'rgba(251,146,60,0.54)',
    fill: 'rgba(249,115,22,0.14)'
  }, {
    id: 'garage-zone',
    label: '洋唐车库',
    points: '326,402 412,376 488,412 470,492 382,516 314,470',
    stroke: 'rgba(250,204,21,0.5)',
    fill: 'rgba(234,179,8,0.12)'
  }, {
    id: 'school-zone',
    label: '大学城校区',
    points: '548,334 650,316 718,364 698,470 590,492 530,414',
    stroke: 'rgba(96,165,250,0.48)',
    fill: 'rgba(59,130,246,0.12)'
  }];
  const macroLabels = [{
    id: 'hai-xiang',
    text: '海翔大道',
    top: '17%',
    left: '36%',
    rotate: '-5deg'
  }, {
    id: 'xiang-an-south',
    text: '翔安南路',
    top: '36%',
    left: '49%',
    rotate: '84deg'
  }, {
    id: 'night-market',
    text: '马巷夜市商圈',
    top: '20%',
    left: '42%',
    rotate: '0deg'
  }, {
    id: 'government',
    text: '区政府重点单元',
    top: '50%',
    left: '31%',
    rotate: '0deg'
  }, {
    id: 'hospital',
    text: '医院急诊入口',
    top: '43%',
    left: '62%',
    rotate: '0deg'
  }];
  const macroDistrictCards = displayRegions.map(region => {
    const regionAlerts = displayAlerts.filter(a => a.regionId === region.id);
    const hasP0 = regionAlerts.some(a => a.severity === 'P0');
    const statusTone = hasP0 ? 'critical' : regionAlerts.length > 0 ? 'warning' : 'normal';
    return {
      ...region,
      regionAlerts,
      statusTone
    };
  });
  const enabledCameraCount = displayRegions.reduce((sum, region) => sum + region.cameras.length, 0);
  const linkedPoliceCount = displayRegions.reduce((sum, region) => sum + region.police.length, 0);
  const p0AlertCount = displayAlerts.filter(a => a.severity === 'P0').length;
  const p1AlertCount = displayAlerts.filter(a => a.severity !== 'P0').length;
  const latestCriticalAlert = displayAlerts.filter(a => a.severity === 'P0').sort((a, b) => alertDateTimeValue(b).localeCompare(alertDateTimeValue(a)))[0];
  const latestCriticalRegion = latestCriticalAlert ? regionsConfig[latestCriticalAlert.regionId] : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full gap-4 relative overflow-hidden animate-in fade-in duration-300"
  }, displayAlerts.some(a => a.severity === 'P0') && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-1/4 flex flex-col gap-4 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm shrink-0 shadow-lg"
  }, /*#__PURE__*/React.createElement("h2", {
    className: `text-sm font-semibold flex items-center mb-4 ${displayAlerts.some(a => a.severity === 'P0') ? 'text-red-400' : 'text-cyan-400'}`
  }, /*#__PURE__*/React.createElement(BarChart3, {
    className: "w-4 h-4 mr-2"
  }), "\u4ECA\u65E5\u6001\u52BF\u6C47\u603B"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-4 rounded-xl border shadow-sm ${displayAlerts.some(a => a.severity === 'P0') ? 'bg-red-950/40 border-red-900/50 shadow-red-500/20' : 'bg-slate-800/50 border-slate-700/50'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${displayAlerts.some(a => a.severity === 'P0') ? 'text-red-300' : 'text-slate-400'} text-xs mb-1`
  }, "\u91CD\u70B9\u544A\u8B66"), /*#__PURE__*/React.createElement("div", {
    className: `text-2xl font-bold ${displayAlerts.some(a => a.severity === 'P0') ? 'text-red-500 animate-pulse' : 'text-slate-200'}`
  }, displayAlerts.filter(a => a.severity === 'P0').length)), /*#__PURE__*/React.createElement("div", {
    className: "bg-cyan-900/20 p-4 rounded-xl border border-cyan-800/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-cyan-400 text-xs mb-1"
  }, "\u5F85\u6838\u7EBF\u7D22"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-bold text-cyan-300"
  }, displayAlerts.filter(a => a.severity !== 'P0').length)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm flex-1 flex flex-col shadow-lg"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-semibold text-cyan-400 flex items-center mb-3"
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "w-4 h-4 mr-2"
  }), "\u5E03\u63A7\u9632\u533A\u5B9E\u65F6\u72B6\u6001"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-3 bg-slate-950/50 p-2 rounded border border-slate-800/50"
  }, "\u5F53\u524D\u4EC5\u663E\u793A\u5728\u3010\u7CFB\u7EDF\u914D\u7F6E - \u533A\u57DF\u914D\u7F6E\u3011\u4E2D\u5DF2\u542F\u7528\u7684\u4E1A\u52A1\u9632\u533A\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar pr-1"
  }, displayRegions.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "text-center flex flex-col items-center justify-center h-32 text-slate-500 text-xs mt-4"
  }, /*#__PURE__*/React.createElement(MapIcon, {
    className: "w-8 h-8 mb-2 opacity-30"
  }), "\u6682\u672A\u542F\u7528\u4EFB\u4F55\u9632\u533A\uFF0C\u8BF7\u524D\u5F80\u914D\u7F6E\u5F00\u542F\u3002"), displayRegions.map(region => {
    const regionAlerts = displayAlerts.filter(a => a.regionId === region.id);
    const hasP0 = regionAlerts.some(a => a.severity === 'P0');
    const hasP1 = regionAlerts.some(a => a.severity === 'P1');
    return /*#__PURE__*/React.createElement("div", {
      key: region.id,
      className: `flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors shadow-inner border
                          ${hasP0 ? 'bg-red-950/60 border-red-500/50 hover:bg-red-900/60' : hasP1 ? 'bg-orange-950/30 border-orange-900/50 hover:bg-orange-900/40' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800'}`,
      onClick: () => setActiveRegionId(region.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: `text-xs font-bold flex items-center ${hasP0 ? 'text-red-200' : hasP1 ? 'text-orange-200' : 'text-slate-300'}`
    }, /*#__PURE__*/React.createElement(region.icon, {
      className: `w-4 h-4 mr-2 opacity-80 ${hasP0 ? 'text-red-400' : hasP1 ? 'text-orange-400' : 'text-slate-400'}`
    }), region.name), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-end gap-1.5"
    }, regionAlerts.map(a => /*#__PURE__*/React.createElement("span", {
      key: a.id,
      className: `flex items-center text-[10px] px-2 py-0.5 rounded
                              ${a.severity === 'P0' ? 'text-red-400 bg-red-950 border border-red-900/50' : 'text-orange-400 bg-orange-950 border border-orange-900/50'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `w-1.5 h-1.5 rounded-full mr-1.5 ${a.severity === 'P0' ? 'bg-red-500 animate-ping' : 'bg-orange-500'}`
    }), a.type.split(' ')[0])), regionAlerts.length === 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-green-500 flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"
    }), "\u79E9\u5E8F\u5E73\u7A33")));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col gap-4 z-10 group relative",
    onWheel: handleWheel
  }, /*#__PURE__*/React.createElement("div", {
    className: `theme-dark-surface bg-[#080d19] border ${activeRegionId ? 'border-cyan-500/60 shadow-[0_0_40px_rgba(34,211,238,0.2)]' : 'border-cyan-500/30 shadow-[0_0_30px_rgba(8,145,178,0.15)]'} rounded-xl flex-1 relative overflow-hidden flex flex-col transition-colors duration-500`
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-900/95 to-transparent z-30 flex items-center justify-between px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-cyan-300 text-xs font-bold tracking-wide drop-shadow-md"
  }, /*#__PURE__*/React.createElement(MapIcon, {
    className: "w-4 h-4 mr-2"
  }), !activeRegionId ? '翔安区海翔大道与翔安南路全息布控底图' : `${activeRegionData.microTitle} - 微观战术地图`), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-slate-900/80 px-2 py-1 rounded border border-slate-700 text-[10px] text-slate-300 flex items-center shadow-sm"
  }, !activeRegionId ? /*#__PURE__*/React.createElement(Maximize2, {
    className: "w-3.5 h-3.5 mr-1"
  }) : /*#__PURE__*/React.createElement(Minimize2, {
    className: "w-3.5 h-3.5 mr-1"
  }), !activeRegionId ? '向上滚轮放大' : '向下滚轮返回全局态势'), activeRegionId && /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveRegionId(null),
    className: "bg-cyan-900/80 hover:bg-cyan-800 text-cyan-100 text-[10px] px-3 py-1 rounded border border-cyan-600 transition-colors shadow-md"
  }, "\u8FD4\u56DE\u5B8F\u89C2\u5168\u56FE"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 transition-all duration-1000 ease-in-out transform origin-center ${activeRegionId ? 'scale-[3] opacity-30 translate-y-[15%]' : 'scale-100 opacity-90'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-placeholder-wrapper z-0 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: ""
    },
    className: "w-full h-full"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full pointer-events-none z-[2]",
    viewBox: "0 0 800 600",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "macroGridDots",
    width: "28",
    height: "28",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(148,163,184,0.16)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "macroRoadGlow",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(34,211,238,0.05)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "rgba(34,211,238,0.24)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(59,130,246,0.08)"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "800",
    height: "600",
    fill: "url(#macroGridDots)",
    opacity: "0.42"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    strokeLinecap: "round"
  }, macroRoads.map(road => /*#__PURE__*/React.createElement("g", {
    key: road.id
  }, /*#__PURE__*/React.createElement("path", {
    d: road.d,
    stroke: "rgba(8,15,28,0.75)",
    strokeWidth: road.width + 6
  }), /*#__PURE__*/React.createElement("path", {
    d: road.d,
    stroke: "url(#macroRoadGlow)",
    strokeWidth: road.width + 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: road.d,
    stroke: road.color,
    strokeWidth: road.width
  }), /*#__PURE__*/React.createElement("path", {
    d: road.d,
    stroke: "rgba(186,230,253,0.34)",
    strokeWidth: "1.4",
    strokeDasharray: "10 16",
    opacity: "0.55"
  })))), /*#__PURE__*/React.createElement("g", null, macroZones.map(zone => /*#__PURE__*/React.createElement("g", {
    key: zone.id
  }, /*#__PURE__*/React.createElement("polygon", {
    points: zone.points,
    fill: zone.fill,
    stroke: zone.stroke,
    strokeWidth: "2",
    strokeDasharray: "10 6"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: zone.points,
    fill: "none",
    stroke: "rgba(255,255,255,0.05)",
    strokeWidth: "1"
  })))), /*#__PURE__*/React.createElement("g", {
    fill: "rgba(148,163,184,0.24)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "102",
    cy: "98",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "166",
    cy: "146",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "236",
    cy: "188",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "516",
    cy: "118",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "618",
    cy: "220",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "692",
    cy: "414",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "238",
    cy: "494",
    r: "2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-slate-950/40 z-10 pointer-events-none mix-blend-multiply"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-cyan-950/20 z-10 pointer-events-none mix-blend-color"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-10 pointer-events-none",
    style: {
      backgroundImage: 'linear-gradient(rgba(34,211,238,0.08) 1px,transparent 1px), linear-gradient(90deg,rgba(34,211,238,0.08) 1px,transparent 1px)',
      backgroundSize: '40px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "map-panel-noise z-[11] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "map-panel-vignette z-[12]"
  }))), !activeRegionId && latestCriticalRegion && /*#__PURE__*/React.createElement("div", {
    className: "absolute z-10 pointer-events-none",
    style: latestCriticalRegion.macroPos
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[2px] border-red-500/40 rounded-full animate-ping",
    style: {
      animationDuration: '3s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] border-[1px] border-red-500/60 rounded-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 transition-all duration-700 ease-out z-20 ${!activeRegionId ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-110 pointer-events-none'}`
  }, macroLabels.map(label => /*#__PURE__*/React.createElement("div", {
    key: label.id,
    className: "absolute pointer-events-none text-[11px] font-semibold tracking-[0.22em] text-cyan-100/55 uppercase",
    style: {
      top: label.top,
      left: label.left,
      transform: `translate(-50%, -50%) rotate(${label.rotate})`
    }
  }, label.text)), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-14 left-4 w-48 rounded-xl map-overlay-card p-3 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase tracking-[0.28em] text-cyan-400/80 mb-2"
  }, "GIS Layer"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-cyan-500/20 bg-slate-950/55 px-2.5 py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u5728\u7EBF\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold text-cyan-200"
  }, enabledCameraCount)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-blue-500/20 bg-slate-950/55 px-2.5 py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u8054\u52A8\u8B66\u529B"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold text-blue-200"
  }, linkedPoliceCount)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-red-500/20 bg-slate-950/55 px-2.5 py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u91CD\u70B9\u544A\u8B66"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold text-red-300"
  }, p0AlertCount)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-orange-500/20 bg-slate-950/55 px-2.5 py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u7EBF\u7D22\u5F85\u590D\u6838"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold text-orange-300"
  }, p1AlertCount)))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-4 top-14 w-44 rounded-xl map-overlay-card px-3 py-3 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase tracking-[0.26em] text-cyan-400/80 mb-2"
  }, "Map Legend"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-[11px] text-slate-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-red-500 mr-2 shadow-[0_0_8px_rgba(239,68,68,0.9)]"
  }), "\u91CD\u70B9\u70ED\u70B9"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u5B9E\u65F6")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-orange-400 mr-2 shadow-[0_0_8px_rgba(251,146,60,0.8)]"
  }), "\u4E00\u822C\u544A\u8B66"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u5F85\u6838")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-cyan-400 mr-2 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
  }), "\u76D1\u63A7\u70B9\u4F4D"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u5728\u7EBF")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded bg-blue-500 mr-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
  }), "\u5DE1\u903B\u529B\u91CF"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u8054\u52A8")))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-4 rounded-xl map-overlay-card px-3 py-2.5 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 text-[10px] text-slate-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[2px] bg-cyan-400/70 mr-2"
  }), "\u4E3B\u5E72\u8DEF\u7F51"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[2px] border-t border-dashed border-orange-400/70 mr-2"
  }), "\u91CD\u70B9\u9632\u533A"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u7FD4\u5B89\u533A\u91CD\u70B9\u573A\u666F\u5E03\u63A7\u793A\u610F"))), macroDistrictCards.map(region => /*#__PURE__*/React.createElement("div", {
    key: `district-${region.id}`,
    className: "map-district-label pointer-events-none",
    style: {
      top: `calc(${region.macroPos.top} + 26px)`,
      left: `calc(${region.macroPos.left} + 18px)`,
      borderColor: region.statusTone === 'critical' ? 'rgba(248,113,113,0.32)' : region.statusTone === 'warning' ? 'rgba(251,146,60,0.28)' : 'rgba(34,211,238,0.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 uppercase tracking-[0.18em]"
  }, "\u9632\u533A\u6001\u52BF"), /*#__PURE__*/React.createElement("div", {
    className: `text-[10px] font-semibold ${region.statusTone === 'critical' ? 'text-red-300' : region.statusTone === 'warning' ? 'text-orange-300' : 'text-emerald-300'}`
  }, region.regionAlerts.length > 0 ? `${region.regionAlerts.length} 条事件` : '正常')), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-xs font-semibold text-slate-100"
  }, region.name), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center gap-3 text-[10px] text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, region.cameras.length, " \u8DEF\u89C6\u9891"), /*#__PURE__*/React.createElement("span", null, region.caps.length, " \u7C7B\u7B97\u6CD5")))), displayRegions.map(region => {
    const hasAlert = displayAlerts.some(a => a.regionId === region.id);
    const hasP0 = displayAlerts.some(a => a.regionId === region.id && a.severity === 'P0');
    return /*#__PURE__*/React.createElement("div", {
      key: region.id,
      className: "absolute group cursor-pointer",
      style: region.macroPos,
      "data-map-interactive": "true",
      onClick: () => setActiveRegionId(region.id),
      onMouseEnter: () => setHoveredRegionId(region.id),
      onMouseLeave: () => setHoveredRegionId(null)
    }, hasAlert ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `w-8 h-8 ${hasP0 ? 'bg-red-600' : 'bg-orange-500'} rounded-full animate-ping absolute opacity-60 -top-1.5 -left-1.5`
    }), /*#__PURE__*/React.createElement("div", {
      className: `w-5 h-5 ${hasP0 ? 'bg-red-600' : 'bg-orange-500'} rounded-full relative z-10 border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform`
    }, /*#__PURE__*/React.createElement(AlertTriangle, {
      className: "w-2.5 h-2.5 text-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: `absolute top-8 -left-8 text-[11px] font-bold text-white ${hasP0 ? 'bg-red-600' : 'bg-orange-600'} px-2 py-1 rounded shadow-xl whitespace-nowrap z-20 border border-white/20`
    }, region.name)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "w-3.5 h-3.5 bg-cyan-400 rounded-full relative z-10 border-2 border-white shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-150 transition-transform"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-5 -left-6 text-[10px] font-bold text-cyan-100 bg-slate-900/90 px-2 py-0.5 rounded border border-cyan-800/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
    }, region.name)));
  })), /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 transition-all duration-700 ease-out z-20 ${activeRegionId ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'}`
  }, activeRegionId && /*#__PURE__*/React.createElement(React.Fragment, null, activeRegionData?.image && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: activeRegionData.image,
    alt: activeRegionData.name,
    className: "w-full h-full object-cover opacity-40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-slate-950/60"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full pointer-events-none",
    viewBox: "0 0 800 600",
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "buildingGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(15, 23, 42, 0.4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(30, 58, 138, 0.1)"
  }))), /*#__PURE__*/React.createElement("g", {
    strokeWidth: "2",
    fill: "url(#buildingGrad)"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "40,40 360,40 360,260 40,260",
    stroke: activeRegionData?.highlightQuadrant === 'A1' ? 'rgba(34,211,238,0.8)' : 'rgba(34,211,238,0.2)'
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "440,40 760,40 760,260 440,260",
    stroke: activeRegionData?.highlightQuadrant === 'B2' ? 'rgba(34,211,238,0.8)' : 'rgba(34,211,238,0.2)'
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "40,340 360,340 360,560 40,560",
    stroke: activeRegionData?.highlightQuadrant === 'C3' ? 'rgba(34,211,238,0.8)' : 'rgba(34,211,238,0.2)'
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "440,340 760,340 760,560 440,560",
    stroke: activeRegionData?.highlightQuadrant === 'D4' ? 'rgba(34,211,238,0.8)' : 'rgba(34,211,238,0.2)'
  }))), activeRegionData.cameras.map(cam => {
    const camAlerts = displayAlerts.filter(a => a.camera.includes(cam.name.split(' ')[0]));
    const hasP0 = camAlerts.some(a => a.severity === 'P0');
    const isCamAlert = camAlerts.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: cam.id,
      className: "absolute group cursor-pointer z-30 pointer-events-auto",
      style: cam.pos,
      "data-map-interactive": "true",
      onClick: isCamAlert ? () => onAlertClick(camAlerts[0]) : undefined
    }, isCamAlert ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 ${hasP0 ? 'bg-red-600/50' : 'bg-orange-500/40'} rounded-full animate-ping absolute -top-2.5 -left-2.5`
    }), /*#__PURE__*/React.createElement("div", {
      className: `w-5 h-5 ${hasP0 ? 'bg-red-600' : 'bg-orange-500'} rounded-full relative z-10 border-2 border-white flex items-center justify-center shadow-lg`
    }, /*#__PURE__*/React.createElement(Video, {
      className: "w-2.5 h-2.5 text-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: `absolute top-7 -left-12 text-[10px] font-bold text-white ${hasP0 ? 'bg-red-600' : 'bg-orange-600'} px-2 py-1 rounded shadow-lg whitespace-nowrap flex flex-col items-center border border-white/20`
    }, /*#__PURE__*/React.createElement("span", null, cam.name), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] text-white/80 font-normal"
    }, stripPriorityLabel(camAlerts[0].type)))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "w-4 h-4 bg-slate-800 rounded-full relative z-10 border-[1.5px] border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform flex items-center justify-center"
    }, /*#__PURE__*/React.createElement(Video, {
      className: "w-2 h-2 text-cyan-400 absolute top-0.5 left-0.5"
    })), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-5 -left-6 text-[10px] font-medium text-cyan-100 bg-slate-900/90 px-2 py-0.5 rounded border border-cyan-800/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
    }, cam.name)));
  }), activeRegionData?.police.map((p, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "absolute z-30 pointer-events-auto",
    style: p.pos,
    "data-map-interactive": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 bg-blue-600 rounded-md relative z-10 border-2 border-white flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,1)]"
  }, /*#__PURE__*/React.createElement(Shield, {
    className: "w-3 h-3 text-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-7 -left-8 text-[10px] font-bold text-white bg-blue-800 px-2 py-1 rounded border border-blue-400 shadow-xl whitespace-nowrap flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse border border-white/50"
  }), p.name))))))), /*#__PURE__*/React.createElement("div", {
    className: "w-1/4 flex flex-col gap-4 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/60 border border-cyan-900/50 rounded-xl p-5 backdrop-blur-sm flex-1 flex flex-col overflow-hidden shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3 gap-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-semibold text-cyan-400 flex items-center shrink-0"
  }, /*#__PURE__*/React.createElement(Bell, {
    className: "w-4 h-4 mr-2"
  }), "\u5B9E\u65F6\u9884\u8B66\u6D88\u606F\u6D41"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500 shrink-0"
  }, filteredAlerts.length, "/", displayAlerts.length)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 mb-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: alertSearchQuery,
    onChange: e => setAlertSearchQuery(e.target.value),
    placeholder: "\u641C\u573A\u666F\u6216\u5730\u70B9\uFF0C\u5982 \u5F02\u5E38\u805A\u96C6 / \u51B2\u7A81 / \u533B\u9662",
    className: "w-full bg-slate-950/80 border border-slate-700 text-slate-200 text-sm rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-cyan-500"
  }), alertSearchQuery && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAlertSearchQuery(''),
    className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200 p-1",
    title: "\u6E05\u7A7A\u641C\u7D22"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  })))), displayAlerts.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center text-slate-500"
  }, /*#__PURE__*/React.createElement(Shield, {
    className: "w-12 h-12 mb-3 opacity-30"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "\u5DF2\u542F\u7528\u9632\u533A\u76EE\u524D\u6CBB\u5B89\u5E73\u7A33")) : filteredAlerts.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center text-slate-500"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "w-10 h-10 mb-3 opacity-30"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "\u5F53\u524D\u6761\u4EF6\u4E0B\u6CA1\u6709\u5339\u914D\u9884\u8B66"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-600 mt-2"
  }, "\u53EF\u4EE5\u66F4\u6362\u573A\u666F\u6216\u5730\u70B9\u5173\u952E\u8BCD\u7EE7\u7EED\u67E5\u770B")) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto pr-1 custom-scrollbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, filteredAlerts.map((alert, index) => {
    const task = getAlertTask(alert);
    const isCritical = alert.severity === 'P0';
    return /*#__PURE__*/React.createElement("div", {
      key: alert.id,
      "data-alert-card": alert.id,
      onClick: () => onAlertClick(alert),
      className: `relative rounded-lg border cursor-pointer transition-all group shadow-sm overflow-hidden ${isCritical ? 'bg-red-950/24 border-red-500/35 hover:bg-red-900/30' : 'bg-slate-800/55 border-slate-700 hover:border-cyan-500/45 hover:bg-slate-800'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `absolute left-0 top-0 bottom-0 w-1 ${isCritical ? 'bg-red-500' : 'bg-orange-400'}`
    }), /*#__PURE__*/React.createElement("div", {
      className: "py-2.5 px-3 pl-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5 mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: `text-[10px] px-1.5 py-0.5 rounded border font-medium shrink-0 ${isCritical ? 'text-red-200 bg-red-600/15 border-red-500/35' : 'text-orange-200 bg-orange-600/15 border-orange-500/35'}`
    }, task.label), index === 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-cyan-300 bg-cyan-950/35 border border-cyan-800/40 px-1.5 py-0.5 rounded"
    }, "\u6700\u65B0"), /*#__PURE__*/React.createElement("span", {
      className: `text-[10px] shrink-0 ${isCritical ? 'text-red-300' : 'text-orange-300'}`
    }, severityText(alert.severity))), /*#__PURE__*/React.createElement("div", {
      className: `text-xs font-semibold leading-snug truncate ${isCritical ? 'text-red-200' : 'text-slate-100'}`
    }, stripPriorityLabel(alert.type)), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-[11px] text-slate-400 flex items-center min-w-0"
    }, /*#__PURE__*/React.createElement(MapPin, {
      className: "w-3.5 h-3.5 mr-1.5 shrink-0"
    }), /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, alert.location))), /*#__PURE__*/React.createElement("div", {
      className: "text-right shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono text-slate-500"
    }, formatAlertDate(alert)), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] font-mono text-slate-300"
    }, alert.time)))));
  }))))));
};

// ============================================================================
// 警情复核弹窗 (Alert Modal)
// ============================================================================
const AlertVerificationModal = ({
  alert,
  surveillanceFeeds = [],
  onClose,
  onResolve,
  onOpenRegionMonitor
}) => {
  const [mediaMode, setMediaMode] = useState('event');
  useEffect(() => {
    if (alert) setMediaMode('event');
  }, [alert?.id]);
  if (!alert) return null;
  const isCritical = alert.severity === 'P0';
  const isGathering = alert.type.includes('聚集');
  const isFight = alert.type.includes('打斗');
  const isPetition = alert.type.includes('涉稳');
  const isCrowdGathering = isGathering && !isPetition;
  const isFightReview = isFight;
  const gatheringMetrics = alert.metrics || [];
  const fightMetrics = alert.metrics || [];
  const behaviorSignals = alert.behaviorSignals || [];
  const hasBehaviorSignals = behaviorSignals.length > 0;
  const sopSteps = alert.sopSteps || [];
  const quickActions = alert.actions || [];
  const fightWindow = alert.fightWindow || {};
  const clipRange = alert.clipRange || {
    pre: 30,
    post: 30
  };
  const previewImage = alert.previewImage || '';
  const linkedFeed = surveillanceFeeds.find(feed => feed.linkedAlertId === alert.id || feed.camera === alert.camera || alert.camera?.includes(feed.camera));
  const currentImage = linkedFeed?.image || previewImage;
  const currentFeedTitle = linkedFeed?.title || alert.camera;
  const isCurrentMonitor = mediaMode === 'current';
  const confirmLabel = '确认警情';
  const panelTitle = isFightReview ? '警情复核' : isCrowdGathering ? '聚集警情复核' : '智能告警复核';
  const primaryMetrics = gatheringMetrics.length ? gatheringMetrics.slice(0, 3) : fightMetrics.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", {
    className: "alert-modal-density light-backdrop absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: `bg-slate-900 border-2 ${isCritical ? 'border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)]' : 'border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.15)]'} rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col`
  }, /*#__PURE__*/React.createElement("div", {
    className: `alert-title-bar h-12 ${isCritical ? 'bg-red-600' : 'bg-orange-950/80'} border-b border-slate-700 flex items-center justify-between px-5`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(AlertOctagon, {
    className: `w-5 h-5 ${isCritical ? 'text-white animate-pulse' : 'text-orange-400'}`
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-white font-bold text-sm tracking-wide"
  }, isCritical ? '重点警情 / 极速指令下发台' : '线索告警复核台', "\uFF1A", stripPriorityLabel(alert.type))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "text-white/70 hover:text-white hover:bg-black/20 p-1.5 rounded transition-colors"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex h-[480px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "theme-dark-surface flex-1 bg-black relative flex flex-col border-r border-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-12 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMediaMode('event'),
    className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${!isCurrentMonitor ? 'bg-red-950/50 border-red-500/50 text-red-200' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'}`
  }, "\u4E8B\u4EF6\u7247\u6BB5"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMediaMode('current'),
    className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${isCurrentMonitor ? 'bg-cyan-950/45 border-cyan-500/50 text-cyan-200' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'}`
  }, "\u5F53\u524D\u753B\u9762")), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 truncate"
  }, "\u5F53\u524D\u70B9\u4F4D\uFF1A", currentFeedTitle))), /*#__PURE__*/React.createElement("div", {
    className: `flex-1 relative flex items-center justify-center overflow-hidden bg-slate-900 img-placeholder-container ${isCrowdGathering ? 'bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.22),transparent_36%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]' : ''} ${isFightReview ? 'bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_38%),linear-gradient(135deg,#020617_0%,#111827_48%,#1f2937_100%)]' : ''}`
  }, alert.id === 'AL-1009' && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: ""
    },
    className: "absolute inset-0 w-full h-full"
  }), alert.id === 'AL-1008' && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: ""
    },
    className: "absolute inset-0 w-full h-full"
  }), alert.id === 'AL-1003' && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: ""
    },
    className: "absolute inset-0 w-full h-full"
  }), alert.id === 'AL-1006' && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: ""
    },
    className: "absolute inset-0 w-full h-full"
  }), alert.id === 'AL-1012' && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: ""
    },
    className: "absolute inset-0 w-full h-full"
  }), (isCurrentMonitor ? currentImage : previewImage) && /*#__PURE__*/React.createElement("img", {
    src: isCurrentMonitor ? currentImage : previewImage,
    alt: `${isCurrentMonitor ? currentFeedTitle : alert.location} ${isCurrentMonitor ? '当前监控画面' : '事件录像演示画面'}`,
    className: `absolute inset-0 w-full h-full object-cover ${isCurrentMonitor ? 'opacity-90 saturate-110 brightness-95' : isCrowdGathering ? 'opacity-85 mix-blend-normal saturate-[1.08] contrast-110 brightness-90' : 'opacity-75'}`
  }), isCurrentMonitor && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-40",
    style: {
      backgroundImage: 'linear-gradient(rgba(34,211,238,0.06) 1px,transparent 1px), linear-gradient(90deg,rgba(34,211,238,0.06) 1px,transparent 1px)',
      backgroundSize: '32px 32px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 to-transparent"
  })), !isCurrentMonitor && isFightReview && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/85 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[22%] top-[24%] w-[28%] h-[36%] border-[3px] border-red-500/80 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.18)] z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-7 left-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded font-bold"
  }, "FIGHT_ACTION")), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[52%] top-[28%] w-[16%] h-[28%] border-[2px] border-orange-400/70 bg-orange-500/10 z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-7 left-0 bg-orange-500 text-white text-[10px] px-2 py-1 rounded font-bold"
  }, "CONTACT")), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 right-4 flex flex-col gap-2 z-20"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-red-500/90 text-white text-[10px] px-2 py-1 rounded border border-red-300/30 font-bold tracking-wide shadow-lg"
  }, fightWindow.labels?.[0] || 'FIGHT_ACTION 96%'))), !isCurrentMonitor && isCrowdGathering && /*#__PURE__*/React.createElement(React.Fragment, null, !hasBehaviorSignals && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-60",
    style: {
      backgroundImage: 'linear-gradient(rgba(34,211,238,0.08) 1px,transparent 1px), linear-gradient(90deg,rgba(34,211,238,0.08) 1px,transparent 1px)',
      backgroundSize: '28px 28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[16%] top-[18%] right-[16%] bottom-[18%] border-2 border-red-500/80 bg-red-500/[0.08] shadow-[0_0_35px_rgba(239,68,68,0.25)] z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 border border-white/10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[48%] top-0 bottom-0 w-px bg-cyan-300/30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[50%] left-0 right-0 h-px bg-cyan-300/30"
  }), hasBehaviorSignals && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[10%] top-[26%] w-[70%] h-10 border-2 border-red-400 bg-red-500/15 z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-6 left-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded font-bold"
  }, "BANNER / PLACARD"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-slate-950/75 border border-cyan-400/40 shadow-[0_0_24px_rgba(34,211,238,0.2)] flex items-center justify-center backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement(PlayCircle, {
    className: "w-8 h-8 text-cyan-300"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-8 left-0 flex flex-wrap gap-2"
  }, alert.crowdTags?.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    className: "bg-red-500/90 text-white text-[10px] px-2 py-1 rounded border border-red-300/30 font-bold tracking-wide shadow-lg"
  }, tag))))), /*#__PURE__*/React.createElement("span", {
    className: "text-white/80 font-mono text-xs absolute top-4 left-4 z-20 bg-black/50 px-2.5 py-1 rounded border border-white/20 backdrop-blur-sm"
  }, isCurrentMonitor ? '● LIVE' : '● REC', " ", alert.camera, " ", isCurrentMonitor ? '当前画面' : '事件片段'), !isCurrentMonitor && isPetition && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[35%] left-[20%] w-[60%] h-[30%] border-[3px] border-red-500 bg-red-500/10 flex items-start justify-between p-1 animate-pulse z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-red-500 text-white text-[10px] px-1 font-bold"
  }, "BANNER_DETECTED")), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[20%] left-[10%] w-[80%] h-[60%] border-[2px] border-orange-500/60 flex items-end justify-start p-1 z-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-orange-500 text-white text-[10px] px-1 font-bold flex items-center"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-3 h-3 mr-1"
  }), " HEAD_COUNT: 45"))), !isCurrentMonitor && isFight && !isFightReview && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/4 left-1/3 w-40 h-48 border-[3px] border-red-500 bg-red-500/10 flex items-start justify-end p-1 animate-pulse z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-red-500 text-white text-[10px] px-1 font-bold"
  }, "FIGHT_ACTION: 96%"))), /*#__PURE__*/React.createElement("div", {
    className: "h-16 bg-slate-900 border-t border-slate-800 p-4 flex flex-col justify-center shrink-0"
  }, isCurrentMonitor ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-xs text-slate-500 mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "\u5F53\u524D\u70B9\u4F4D\uFF1A", currentFeedTitle), /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-300 font-bold"
  }, "\u5B9E\u65F6\u67E5\u770B\u73B0\u573A\u6001\u52BF"), /*#__PURE__*/React.createElement("span", null, linkedFeed?.regionName || '同区域点位')), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2.5 bg-slate-800 rounded-full relative overflow-hidden border border-slate-700 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 w-full bg-cyan-600/25"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-[70%] w-[2%] bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,1)] animate-pulse"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-xs text-slate-500 mb-2"
  }, /*#__PURE__*/React.createElement("span", null, isFightReview ? `-${clipRange.pre}s (事前接触追溯)` : isCrowdGathering ? `-${clipRange.pre}s (${hasBehaviorSignals ? '事前行为追溯' : '事前客流追溯'})` : '-30s (事前行为追溯)'), /*#__PURE__*/React.createElement("span", {
    className: `${isCritical ? 'text-red-400' : 'text-orange-400'} font-bold`
  }, "\u4E8B\u4EF6\u89E6\u53D1\u70B9 ", alert.time), /*#__PURE__*/React.createElement("span", null, isFightReview ? `+${clipRange.post}s (事后追打判断)` : isCrowdGathering ? `+${clipRange.post}s (${hasBehaviorSignals ? '事后态势复核' : '事后疏散判断'})` : '+30s (事后流窜判断)')), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-2.5 bg-slate-800 rounded-full relative overflow-hidden border border-slate-700 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-0 bottom-0 w-1/2 bg-cyan-600/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: `absolute left-[45%] top-0 bottom-0 w-[10%] ${isCritical ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]' : 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]'} animate-pulse`
  }))))), /*#__PURE__*/React.createElement("div", {
    className: `w-[348px] bg-white flex flex-col p-4 ${isCrowdGathering ? 'bg-cyan-50/40' : ''} ${isFightReview ? 'bg-red-50/40' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-700 pb-2.5 mb-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-slate-300"
  }, panelTitle), /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] px-2 py-0.5 rounded-full border ${isCritical ? 'bg-red-600/15 text-red-300 border-red-500/40' : 'bg-orange-600/15 text-orange-300 border-orange-500/40'}`
  }, alert.urgency)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5 flex-1 overflow-y-auto custom-scrollbar pr-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/50 p-3 rounded-lg border border-slate-700/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u544A\u8B66\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-200 flex font-medium"
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "w-4 h-4 mr-1.5 text-cyan-500 shrink-0"
  }), /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, alert.location))), /*#__PURE__*/React.createElement("div", {
    className: "text-right shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u901A\u9053"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-slate-300"
  }, alert.camera)), /*#__PURE__*/React.createElement("div", {
    className: "text-right shrink-0 border-l border-slate-700/60 pl-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u7F6E\u4FE1\u5EA6"), /*#__PURE__*/React.createElement("div", {
    className: `text-xs font-mono font-bold ${isCritical ? 'text-red-300' : 'text-orange-300'}`
  }, alert.conf)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-action": "open-region-monitor",
    onClick: () => onOpenRegionMonitor?.(alert, linkedFeed),
    className: "w-full rounded-lg border border-cyan-500/40 bg-cyan-950/35 px-3 py-2 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-900/45"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center justify-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Video, {
    className: "h-4 w-4"
  }), "\u67E5\u770B\u540C\u9632\u533A\u76D1\u63A7")), /*#__PURE__*/React.createElement("div", {
    className: `p-3 rounded-lg border ${isCritical ? 'bg-red-950/60 border-red-500/60' : 'bg-orange-950/30 border-orange-500/40'} shadow-inner`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-xs font-bold mb-2"
  }, isCritical ? /*#__PURE__*/React.createElement(ShieldAlert, {
    className: "w-4 h-4 mr-2 text-red-400"
  }) : /*#__PURE__*/React.createElement(Activity, {
    className: "w-4 h-4 mr-2 text-orange-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: isCritical ? 'text-red-400' : 'text-orange-400'
  }, "\u5904\u7F6E\u5EFA\u8BAE")), (isCrowdGathering || isFightReview) && sopSteps.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, sopSteps.slice(0, 3).map((step, index) => /*#__PURE__*/React.createElement("div", {
    key: step,
    className: "flex items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-4 h-4 rounded-full bg-red-500/20 border border-red-400/40 text-red-300 text-[10px] font-bold flex items-center justify-center mt-0.5 mr-2 shrink-0"
  }, index + 1), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 leading-relaxed font-medium"
  }, step)))) : /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 leading-relaxed whitespace-pre-line font-medium"
  }, alert.aiAdvice)), hasBehaviorSignals && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/50 p-3 rounded-lg border border-slate-700/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-xs font-bold text-red-300"
  }, /*#__PURE__*/React.createElement(Flag, {
    className: "w-4 h-4 mr-2 text-red-400"
  }), "\u7B97\u6CD5\u547D\u4E2D"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "\u4EC5\u5C55\u793A\u7B97\u6CD5\u4FA7\u53EF\u8BC6\u522B\u9879")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, behaviorSignals.map(signal => /*#__PURE__*/React.createElement("div", {
    key: signal.label,
    className: "bg-slate-950/70 border border-slate-700/60 rounded-lg px-3 py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-200"
  }, signal.label), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-red-600/15 text-red-300 border-red-500/40"
  }, signal.value)), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 leading-relaxed mt-1"
  }, signal.note))))), isFightReview && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/50 p-3 rounded-lg border border-slate-700/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-xs font-bold text-slate-200 mb-2"
  }, /*#__PURE__*/React.createElement(Shield, {
    className: "w-4 h-4 mr-2 text-cyan-400"
  }), "\u73B0\u573A\u8054\u52A8"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-xs text-slate-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2"
  }, /*#__PURE__*/React.createElement("span", null, "\u6700\u8FD1\u8B66\u529B"), /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-300 font-semibold"
  }, fightWindow.nearestPolice || '待匹配')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2"
  }, /*#__PURE__*/React.createElement("span", null, "\u53EF\u7528\u5904\u7F6E"), /*#__PURE__*/React.createElement("span", {
    className: "text-orange-300 font-semibold"
  }, fightWindow.nearestDisposal || '待联动')))), primaryMetrics.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/50 p-3 rounded-lg border border-slate-700/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-xs font-bold text-cyan-300 mb-2"
  }, /*#__PURE__*/React.createElement(BarChart3, {
    className: "w-4 h-4 mr-2 text-cyan-400"
  }), "\u5173\u952E\u6307\u6807"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2"
  }, primaryMetrics.map(metric => /*#__PURE__*/React.createElement("div", {
    key: metric.label,
    className: "bg-slate-950/70 border border-slate-700/60 rounded-lg p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1 truncate"
  }, metric.label), /*#__PURE__*/React.createElement("div", {
    className: `text-sm font-mono font-bold ${metric.accent || 'text-slate-200'}`
  }, metric.value), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1 leading-snug line-clamp-2"
  }, metric.note)))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-700 space-y-2.5 mt-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onResolve(alert.id, 'dispatched'),
    className: `w-full flex items-center justify-center font-bold py-3.5 rounded-lg text-sm transition-all shadow-lg ${isCritical ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/40' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-600/20'}`
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "w-5 h-5 mr-2"
  }), confirmLabel), /*#__PURE__*/React.createElement("button", {
    onClick: () => onResolve(alert.id, 'ignored'),
    className: "w-full flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm py-3 rounded-lg transition-all group"
  }, /*#__PURE__*/React.createElement(XCircle, {
    className: "w-4 h-4 mr-2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center"
  }, isFightReview ? '标记误报' : '标记为正常活动', " ", /*#__PURE__*/React.createElement("span", {
    className: "ml-1.5 text-[10px] text-slate-500 group-hover:text-slate-400 font-normal"
  }, "(\u56DE\u6D41\u7B97\u6CD5\u4F18\u5316)"))))))));
};

// ============================================================================
// 系统配置模块
// ============================================================================
const SystemConfigView = ({
  activeRegions,
  setActiveRegions,
  regionsConfig,
  onCreateRegion,
  onAddCameraPoint
}) => {
  const [configSubView, setConfigSubView] = useState('region');
  const handleToggleRegion = regionId => {
    setActiveRegions(prev => prev.includes(regionId) ? prev.filter(id => id !== regionId) : [...prev, regionId]);
  };
  const [selectedSiteForConfig, setSelectedSiteForConfig] = useState(activeRegions[0] || 'gov');
  useEffect(() => {
    if (!activeRegions.includes(selectedSiteForConfig)) {
      setSelectedSiteForConfig(activeRegions[0] || '');
    }
  }, [activeRegions]);
  const [toggles, setToggles] = useState({
    'v2': true,
    'n1': true,
    'n3': true,
    'n4': false,
    'g1': true,
    's1': true,
    'm1': false
  });
  const [gatherCount, setGatherCount] = useState(40);
  const [gatherTime, setGatherTime] = useState(3);
  const [cameraSearchQuery, setCameraSearchQuery] = useState('');
  const [cameraStatusFilter, setCameraStatusFilter] = useState('all');
  const [selectedCameraId, setSelectedCameraId] = useState('');
  const [isCameraPointModalOpen, setIsCameraPointModalOpen] = useState(false);
  const [cameraPointDraft, setCameraPointDraft] = useState({
    name: '',
    code: '',
    regionId: activeRegions[0] || '',
    installType: '',
    direction: '',
    status: 'online',
    isCore: false,
    alertCategory: ''
  });
  const [roiModalRegionId, setRoiModalRegionId] = useState('');
  const [roiName, setRoiName] = useState('北侧排队区 ROI');
  const [roiThreshold, setRoiThreshold] = useState(40);
  const [isRegionWizardOpen, setIsRegionWizardOpen] = useState(false);
  const [regionWizardStep, setRegionWizardStep] = useState(0);
  const [regionDraft, setRegionDraft] = useState({
    name: '新建商圈联防区',
    streetId: 'street-maxiang',
    sceneType: 'night-market',
    riskLevel: '0',
    selectedCameraIds: ['pool-mx-094', 'pool-mx-092'],
    selectedCapIds: ['n3', 'n1']
  });
  const ROLE_LIBRARY = [{
    id: 'command',
    name: '指挥中心管理员',
    shortName: '指挥管理员',
    description: '管理全部防区、设备、用户与策略。',
    scope: '全局',
    permissions: ['区域配置', '摄像头配置', '预警规则', '用户管理'],
    tone: 'bg-blue-50 text-blue-700 border-blue-200'
  }, {
    id: 'duty',
    name: '值班研判员',
    shortName: '值班研判',
    description: '查看告警、复核事件和派发处置。',
    scope: '区域',
    permissions: ['监控巡看', '告警复核', '处置记录'],
    tone: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  }, {
    id: 'ops',
    name: '系统运维员',
    shortName: '系统运维',
    description: '维护设备、点位与基础配置。',
    scope: '平台',
    permissions: ['区域配置', '摄像头配置'],
    tone: 'bg-violet-50 text-violet-700 border-violet-200'
  }, {
    id: 'security',
    name: '安保专员',
    shortName: '安保专员',
    description: '查看重点防区和巡看信息。',
    scope: '防区',
    permissions: ['监控巡看', '预警提醒'],
    tone: 'bg-amber-50 text-amber-700 border-amber-200'
  }, {
    id: 'supervisor',
    name: '部门负责人',
    shortName: '部门负责人',
    description: '查看统计分析、审批和复盘。',
    scope: '部门',
    permissions: ['处置记录', '统计分析', '复盘报告'],
    tone: 'bg-sky-50 text-sky-700 border-sky-200'
  }];
  const INITIAL_USERS = [{
    id: 'user-001',
    name: '张伟',
    account: 'zhangwei',
    roleId: 'command',
    department: '指挥中心',
    status: '启用',
    phone: '13800000001',
    email: 'zhangwei@xian.gov.cn',
    lastLogin: '2026-05-26 09:12',
    remark: '系统总控账号'
  }, {
    id: 'user-002',
    name: '李娜',
    account: 'lina',
    roleId: 'duty',
    department: '安保部',
    status: '启用',
    phone: '13800000002',
    email: 'lina@xian.gov.cn',
    lastLogin: '2026-05-26 08:34',
    remark: '夜班值守'
  }, {
    id: 'user-003',
    name: '王强',
    account: 'wangqiang',
    roleId: 'ops',
    department: '技术运维',
    status: '启用',
    phone: '13800000003',
    email: 'wangqiang@xian.gov.cn',
    lastLogin: '2026-05-25 21:06',
    remark: '平台维护'
  }, {
    id: 'user-004',
    name: '赵敏',
    account: 'zhaomin',
    roleId: 'security',
    department: '安保部',
    status: '停用',
    phone: '13800000004',
    email: 'zhaomin@xian.gov.cn',
    lastLogin: '2026-05-18 17:20',
    remark: '临时停用'
  }, {
    id: 'user-005',
    name: '陈晨',
    account: 'chenchen',
    roleId: 'supervisor',
    department: '分局办公室',
    status: '启用',
    phone: '13800000005',
    email: 'chenchen@xian.gov.cn',
    lastLogin: '2026-05-26 10:03',
    remark: '部门负责人'
  }];
  const defaultUserDraft = {
    name: '',
    account: '',
    roleId: 'duty',
    department: '指挥中心',
    status: '启用',
    phone: '',
    email: '',
    remark: ''
  };
  const [users, setUsers] = useState(INITIAL_USERS);
  const [selectedUserId, setSelectedUserId] = useState(INITIAL_USERS[0]?.id || '');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState('all');
  const [userStatusFilter, setUserStatusFilter] = useState('all');
  const [selectedRoleId, setSelectedRoleId] = useState(ROLE_LIBRARY[0]?.id || 'command');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState('');
  const [userDraft, setUserDraft] = useState(defaultUserDraft);
  const getCameraDisplayName = cameraName => cameraName.replace(/\s*\(.*?\)\s*/g, '').trim();
  const getCameraCode = (cameraName, regionId, index) => {
    const match = cameraName.match(/[A-Z]{2,}(?:-[A-Z]+)?-\d+/);
    return match ? match[0] : `${regionId.toUpperCase()}-CAM-${String(index + 1).padStart(3, '0')}`;
  };
  const inferCameraStatus = (cameraName, isAlert) => {
    if (isAlert) return 'online';
    if (cameraName.includes('南门枪机') || cameraName.includes('地库B1') || cameraName.includes('学校西校门')) {
      return 'offline';
    }
    return 'online';
  };
  const inferCameraType = cameraName => {
    if (cameraName.includes('球机')) return '球机';
    if (cameraName.includes('枪机')) return '枪机';
    return '固定枪机';
  };
  const inferCameraDirection = pos => {
    const top = parseFloat(pos.top);
    const left = parseFloat(pos.left);
    if (top <= 35 && left <= 50) return '东南';
    if (top <= 35 && left > 50) return '西南';
    if (top > 35 && left <= 50) return '东北';
    return '西北';
  };
  const getCameraAbilities = (region, camera) => {
    const matchedCaps = region.caps.filter(cap => {
      if (camera.isFight) return cap.title.includes('打架') || cap.title.includes('冲突');
      if (camera.isGathering) return cap.title.includes('聚集') || cap.title.includes('举牌');
      if (camera.isPetition) return cap.title.includes('涉稳') || cap.title.includes('横幅');
      if (camera.label && camera.label.includes('拉车门')) return cap.title.includes('拉车门') || cap.title.includes('偷盗');
      return false;
    });
    return (matchedCaps.length ? matchedCaps : region.caps.slice(0, 1)).map(cap => cap.title.replace(/\s*\(P\d\)\s*/g, ''));
  };
  const sceneOption = REGION_SCENE_OPTIONS.find(item => item.id === regionDraft.sceneType) || REGION_SCENE_OPTIONS[0];
  const streetOption = REGION_STREET_OPTIONS.find(item => item.id === regionDraft.streetId) || REGION_STREET_OPTIONS[0];
  const selectedWizardCameras = REGION_WIZARD_CAMERA_POOL.filter(camera => regionDraft.selectedCameraIds.includes(camera.id));
  const selectedWizardCaps = REGION_CAPABILITY_LIBRARY.filter(cap => regionDraft.selectedCapIds.includes(cap.id));
  const hasWizardCameras = selectedWizardCameras.length > 0;
  const hasWizardCapabilities = selectedWizardCaps.length > 0;
  const getWizardCameraCandidates = (sceneType, streetId) => {
    const exactMatches = REGION_WIZARD_CAMERA_POOL.filter(camera => camera.sceneType === sceneType && camera.streetId === streetId);
    const sameStreet = REGION_WIZARD_CAMERA_POOL.filter(camera => camera.streetId === streetId && !exactMatches.some(item => item.id === camera.id));
    const sameScene = REGION_WIZARD_CAMERA_POOL.filter(camera => camera.sceneType === sceneType && !exactMatches.some(item => item.id === camera.id) && !sameStreet.some(item => item.id === camera.id));
    return [...exactMatches, ...sameStreet, ...sameScene];
  };
  const visibleCameraPool = useMemo(() => getWizardCameraCandidates(regionDraft.sceneType, regionDraft.streetId), [regionDraft.sceneType, regionDraft.streetId]);
  const sceneKeyParts = {
    'night-market': ['夜市北入口', '十字路口核心区', '排档外摆区'],
    government: ['南门广场缓冲区', '主入口通道', '外围聚集点'],
    hospital: ['急诊入口通道', '门诊雨棚外场', '院内安保岗'],
    community: ['车库出入口', 'B1 非机动车停放区', '主车道通道'],
    campus: ['校门外慢行通道', '接送等候区', '周边商铺通道']
  };
  const keyCoverageParts = sceneKeyParts[regionDraft.sceneType] || ['主入口', '核心通道', '外围观察点'];
  const selectedCoverageParts = selectedWizardCameras.map(camera => camera.coveragePart || camera.position);
  const uniqueSelectedCoverageParts = [...new Set(selectedCoverageParts)];
  const coreWizardCamera = selectedWizardCameras.find(camera => camera.role === '核心点位') || selectedWizardCameras[0];
  const wizardMapPositions = {
    'pool-mx-094': {
      top: '52%',
      left: '43%'
    },
    'pool-mx-092': {
      top: '57%',
      left: '52%'
    },
    'pool-mx-088': {
      top: '43%',
      left: '42%'
    },
    'pool-gov-001': {
      top: '56%',
      left: '41%'
    },
    'pool-hosp-021': {
      top: '33%',
      left: '54%'
    },
    'pool-hosp-023': {
      top: '18%',
      left: '39%'
    },
    'pool-yt-044': {
      top: '64%',
      left: '57%'
    },
    'pool-school-001': {
      top: '76%',
      left: '52%'
    },
    'pool-market-001': {
      top: '47%',
      left: '57%'
    }
  };
  const wizardCanGoNext = (regionWizardStep !== 1 || hasWizardCameras) && (regionWizardStep !== 2 || hasWizardCapabilities);
  const wizardSteps = ['基础信息', '地图选点', '能力绑定', '启用确认'];
  const updateRegionDraft = patch => setRegionDraft(prev => ({
    ...prev,
    ...patch
  }));
  const resetRegionWizard = () => {
    setRegionWizardStep(0);
    setRegionDraft({
      name: '新建商圈联防区',
      streetId: 'street-maxiang',
      sceneType: 'night-market',
      riskLevel: '0',
      selectedCameraIds: ['pool-mx-094', 'pool-mx-092'],
      selectedCapIds: ['n3', 'n1']
    });
  };
  const handleOpenRegionWizard = () => {
    resetRegionWizard();
    setIsRegionWizardOpen(true);
  };
  const handleStreetChange = streetId => {
    const nextCameraIds = getWizardCameraCandidates(regionDraft.sceneType, streetId).slice(0, 2).map(camera => camera.id);
    updateRegionDraft({
      streetId,
      selectedCameraIds: nextCameraIds.length ? nextCameraIds : regionDraft.selectedCameraIds
    });
  };
  const handleSceneChange = sceneType => {
    const nextScene = REGION_SCENE_OPTIONS.find(item => item.id === sceneType) || REGION_SCENE_OPTIONS[0];
    const nextCameraIds = getWizardCameraCandidates(sceneType, regionDraft.streetId).slice(0, 2).map(camera => camera.id);
    updateRegionDraft({
      sceneType,
      selectedCapIds: nextScene.capIds,
      selectedCameraIds: nextCameraIds.length ? nextCameraIds : regionDraft.selectedCameraIds
    });
  };
  const handleSelectCandidateCameras = () => {
    const exactIds = visibleCameraPool.filter(camera => camera.streetId === regionDraft.streetId && camera.sceneType === regionDraft.sceneType).map(camera => camera.id);
    const sameStreetIds = visibleCameraPool.filter(camera => camera.streetId === regionDraft.streetId).map(camera => camera.id);
    const nextIds = (exactIds.length ? exactIds : sameStreetIds.length ? sameStreetIds : visibleCameraPool.map(camera => camera.id)).slice(0, 6);
    updateRegionDraft({
      selectedCameraIds: nextIds.length ? nextIds : regionDraft.selectedCameraIds
    });
  };
  const handleToggleWizardCamera = cameraId => {
    updateRegionDraft({
      selectedCameraIds: regionDraft.selectedCameraIds.includes(cameraId) ? regionDraft.selectedCameraIds.filter(id => id !== cameraId) : [...regionDraft.selectedCameraIds, cameraId]
    });
  };
  const handleToggleWizardCap = capId => {
    updateRegionDraft({
      selectedCapIds: regionDraft.selectedCapIds.includes(capId) ? regionDraft.selectedCapIds.filter(id => id !== capId) : [...regionDraft.selectedCapIds, capId]
    });
  };
  const buildRegionFromDraft = () => {
    const stamp = Date.now().toString().slice(-5);
    const customCount = Object.keys(regionsConfig).filter(id => id.startsWith('custom-')).length + 1;
    const regionId = `custom-${customCount}-${stamp}`;
    const IconComponent = sceneOption.icon || MapPin;
    const caps = selectedWizardCaps.length ? selectedWizardCaps : REGION_CAPABILITY_LIBRARY.filter(cap => sceneOption.capIds.includes(cap.id));
    const level0 = isLevel0Risk(regionDraft.riskLevel);
    const level2 = isLevel2Risk(regionDraft.riskLevel);
    const displayRiskLevel = riskLevelDisplay(regionDraft.riskLevel);
    const cameras = selectedWizardCameras.map((camera, index) => ({
      id: `c${index + 1}`,
      name: `${camera.code} (${camera.name})`,
      code: camera.code,
      pos: camera.pos,
      coveragePart: camera.coveragePart || camera.position,
      role: index === 0 ? '核心点位' : camera.role || '补充点位',
      isAlert: index === 0 || level0,
      label: `${displayRiskLevel} ${sceneOption.name}联动点`,
      isGathering: caps.some(cap => cap.isGathering),
      isFight: caps.some(cap => cap.title.includes('打架') || cap.title.includes('冲突')),
      isPetition: caps.some(cap => cap.title.includes('横幅') || cap.title.includes('标语'))
    }));
    return {
      id: regionId,
      name: regionDraft.name.trim() || `${streetOption.name}${sceneOption.name}防区`,
      type: level2 ? 'normal' : 'alert',
      macroPos: {
        top: `${38 + customCount % 3 * 8}%`,
        left: `${54 + customCount % 2 * 10}%`
      },
      microTitle: sceneOption.microTitle,
      highlightQuadrant: 'N1',
      icon: IconComponent,
      source: 'camera-binding',
      definitionBasis: `由 ${cameras.length} 路摄像头组成防区 / 任一点位告警归属该防区 / 关联算法 ${caps.length} 个`,
      streetName: streetOption.name,
      sceneName: sceneOption.name,
      riskLevel: normalizeRiskLevel(regionDraft.riskLevel),
      cameras,
      police: [{
        name: `${streetOption.name}联动处置组`,
        pos: {
          top: '56%',
          left: '58%'
        },
        isAlert: level0
      }],
      caps
    };
  };
  const handleFinishRegionWizard = () => {
    const nextRegion = buildRegionFromDraft();
    onCreateRegion(nextRegion, selectedWizardCameras);
    setToggles(prev => nextRegion.caps.reduce((acc, cap) => ({
      ...acc,
      [cap.id]: true
    }), prev));
    setSelectedSiteForConfig(nextRegion.id);
    setIsRegionWizardOpen(false);
    resetRegionWizard();
  };
  const cameraConfigRegion = regionsConfig[selectedSiteForConfig];
  const cameraPoints = useMemo(() => {
    if (!cameraConfigRegion) return [];
    return cameraConfigRegion.cameras.map((cam, index) => ({
      id: cam.id,
      name: getCameraDisplayName(cam.name),
      code: cam.code || getCameraCode(cam.name, cameraConfigRegion.id, index),
      regionName: cameraConfigRegion.name,
      zoneName: cameraConfigRegion.microTitle,
      coveragePart: cam.coveragePart || cam.positionName || cameraConfigRegion.microTitle,
      role: cam.role || (cam.isAlert || index === 0 ? '核心点位' : '补充点位'),
      status: cam.status || inferCameraStatus(cam.name, cam.isAlert),
      installType: cam.installType || inferCameraType(cam.name),
      direction: cam.direction || inferCameraDirection(cam.pos),
      isCore: cam.isAlert || index === 0,
      protocol: 'GB28181',
      abilities: getCameraAbilities(cameraConfigRegion, cam),
      alertLabel: cam.label || '常态巡检',
      pos: cam.pos,
      raw: cam
    }));
  }, [selectedSiteForConfig, regionsConfig]);
  const filteredCameraPoints = useMemo(() => {
    const keyword = cameraSearchQuery.trim().toLowerCase();
    return cameraPoints.filter(camera => {
      const matchKeyword = !keyword || camera.name.toLowerCase().includes(keyword) || camera.code.toLowerCase().includes(keyword) || camera.alertLabel.toLowerCase().includes(keyword);
      const matchStatus = cameraStatusFilter === 'all' || camera.status === cameraStatusFilter;
      return matchKeyword && matchStatus;
    });
  }, [cameraPoints, cameraSearchQuery, cameraStatusFilter]);
  const cameraSummary = useMemo(() => ({
    total: cameraPoints.length,
    online: cameraPoints.filter(camera => camera.status === 'online').length,
    offline: cameraPoints.filter(camera => camera.status === 'offline').length,
    core: cameraPoints.filter(camera => camera.isCore).length
  }), [cameraPoints]);
  useEffect(() => {
    if (filteredCameraPoints.length === 0) {
      if (selectedCameraId) setSelectedCameraId('');
      return;
    }
    if (!filteredCameraPoints.some(camera => camera.id === selectedCameraId)) {
      setSelectedCameraId(filteredCameraPoints[0].id);
    }
  }, [filteredCameraPoints, selectedCameraId]);
  const selectedCameraPoint = filteredCameraPoints.find(camera => camera.id === selectedCameraId) || filteredCameraPoints[0] || null;
  const cameraPointRegionOptions = activeRegions.map(id => regionsConfig[id]).filter(Boolean);
  const canSubmitCameraPoint = cameraPointDraft.name.trim() && cameraPointDraft.code.trim() && cameraPointDraft.regionId;
  const getRole = roleId => ROLE_LIBRARY.find(role => role.id === roleId) || ROLE_LIBRARY[0];
  const filteredUsers = useMemo(() => {
    const keyword = userSearchQuery.trim().toLowerCase();
    return users.filter(user => {
      const role = getRole(user.roleId);
      const matchRole = userRoleFilter === 'all' || user.roleId === userRoleFilter;
      const matchStatus = userStatusFilter === 'all' || user.status === userStatusFilter;
      const matchKeyword = !keyword || user.name.toLowerCase().includes(keyword) || user.account.toLowerCase().includes(keyword) || user.department.toLowerCase().includes(keyword) || role.name.toLowerCase().includes(keyword);
      return matchRole && matchStatus && matchKeyword;
    });
  }, [users, userSearchQuery, userRoleFilter, userStatusFilter]);
  const selectedUser = users.find(user => user.id === selectedUserId) || filteredUsers[0] || users[0] || null;
  const selectedRole = ROLE_LIBRARY.find(role => role.id === selectedRoleId) || ROLE_LIBRARY[0];
  const userSummary = useMemo(() => ({
    total: users.length,
    enabled: users.filter(user => user.status === '启用').length,
    disabled: users.filter(user => user.status === '停用').length,
    departments: new Set(users.map(user => user.department)).size
  }), [users]);
  const canSubmitUser = userDraft.name.trim() && userDraft.account.trim() && userDraft.roleId && userDraft.department.trim();
  useEffect(() => {
    if (!filteredUsers.length) {
      setSelectedUserId('');
      return;
    }
    if (!filteredUsers.some(user => user.id === selectedUserId)) {
      setSelectedUserId(filteredUsers[0].id);
    }
  }, [filteredUsers, selectedUserId]);
  const resetUserDraft = () => {
    setUserDraft(defaultUserDraft);
    setEditingUserId('');
  };
  const handleOpenUserModal = (user = null) => {
    if (user) {
      setEditingUserId(user.id);
      setUserDraft({
        name: user.name,
        account: user.account,
        roleId: user.roleId,
        department: user.department,
        status: user.status,
        phone: user.phone || '',
        email: user.email || '',
        remark: user.remark || ''
      });
    } else {
      resetUserDraft();
    }
    setIsUserModalOpen(true);
  };
  const handleSubmitUser = () => {
    if (!canSubmitUser) return;
    const normalizedDraft = {
      ...userDraft,
      name: userDraft.name.trim(),
      account: userDraft.account.trim(),
      department: userDraft.department.trim(),
      phone: userDraft.phone.trim(),
      email: userDraft.email.trim(),
      remark: userDraft.remark.trim()
    };
    if (editingUserId) {
      setUsers(prev => prev.map(user => user.id === editingUserId ? {
        ...user,
        ...normalizedDraft
      } : user));
      setSelectedUserId(editingUserId);
    } else {
      const nextUser = {
        id: `user-${Date.now()}`,
        ...normalizedDraft,
        lastLogin: '尚未登录'
      };
      setUsers(prev => [nextUser, ...prev]);
      setSelectedUserId(nextUser.id);
    }
    setIsUserModalOpen(false);
    resetUserDraft();
  };
  const handleToggleUserStatus = userId => {
    setUsers(prev => prev.map(user => user.id === userId ? {
      ...user,
      status: user.status === '启用' ? '停用' : '启用'
    } : user));
  };
  const handleDeleteUser = userId => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    setSelectedUserIds(prev => prev.filter(id => id !== userId));
    if (selectedUserId === userId) setSelectedUserId('');
  };
  const handleToggleSelectUser = userId => {
    setSelectedUserIds(prev => prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]);
  };
  const handleToggleAllUsers = () => {
    const visibleIds = filteredUsers.map(user => user.id);
    const allSelected = visibleIds.length > 0 && visibleIds.every(id => selectedUserIds.includes(id));
    setSelectedUserIds(prev => allSelected ? prev.filter(id => !visibleIds.includes(id)) : [...new Set([...prev, ...visibleIds])]);
  };
  const handleBatchDisable = () => {
    if (!selectedUserIds.length) return;
    setUsers(prev => prev.map(user => selectedUserIds.includes(user.id) ? {
      ...user,
      status: '停用'
    } : user));
  };
  const handleBatchDelete = () => {
    if (!selectedUserIds.length) return;
    setUsers(prev => prev.filter(user => !selectedUserIds.includes(user.id)));
    setSelectedUserIds([]);
  };
  const resetCameraPointDraft = (regionId = selectedSiteForConfig || activeRegions[0] || '') => {
    setCameraPointDraft({
      name: '',
      code: '',
      regionId,
      installType: '',
      direction: '',
      status: 'online',
      isCore: false,
      alertCategory: ''
    });
  };
  const handleOpenCameraPointModal = () => {
    resetCameraPointDraft(selectedSiteForConfig || activeRegions[0] || '');
    setIsCameraPointModalOpen(true);
  };
  const handleSubmitCameraPoint = () => {
    if (!canSubmitCameraPoint) return;
    const nextCameraId = onAddCameraPoint?.({
      ...cameraPointDraft,
      name: cameraPointDraft.name.trim(),
      code: cameraPointDraft.code.trim(),
      installType: cameraPointDraft.installType.trim(),
      direction: cameraPointDraft.direction.trim(),
      alertCategory: cameraPointDraft.alertCategory.trim()
    });
    setSelectedSiteForConfig(cameraPointDraft.regionId);
    if (nextCameraId) setSelectedCameraId(nextCameraId);
    setIsCameraPointModalOpen(false);
    resetCameraPointDraft(cameraPointDraft.regionId);
  };
  const roiModalRegion = regionsConfig[roiModalRegionId];
  const renderRegionConfig = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-6 flex items-end justify-between gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-slate-100 mb-1.5"
    }, "\u533A\u57DF\u914D\u7F6E (\u9632\u533A\u7BA1\u7406)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "\u9632\u533A\u6309\u6444\u50CF\u5934\u70B9\u4F4D\u96C6\u5408\u5B9A\u4E49\uFF1A\u6C11\u8B66\u5728\u5730\u56FE\u4E0A\u9009\u62E9\u7EB3\u5165\u9632\u533A\u7684\u63A2\u5934\uFF0C\u4EFB\u4E00\u70B9\u4F4D\u89E6\u53D1\u544A\u8B66\u5373\u5F52\u5C5E\u4E3A\u8BE5\u9632\u533A\u9884\u8B66\u3002")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleOpenRegionWizard,
      className: "shrink-0 bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-600/20 flex items-center"
    }, /*#__PURE__*/React.createElement(Plus, {
      className: "w-4 h-4 mr-1.5"
    }), " \u5730\u56FE\u9009\u70B9\u5EFA\u9632\u533A")), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex gap-6 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-1/2 bg-slate-900/40 border border-slate-800 rounded-xl p-5 overflow-y-auto custom-scrollbar"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center"
    }, /*#__PURE__*/React.createElement(CameraLens, {
      className: "w-4 h-4 mr-2"
    }), " \u6444\u50CF\u5934\u70B9\u4F4D\u6C60"), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-cyan-900/40 bg-cyan-950/20 p-4 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-2"
    }, "\u6309\u70B9\u4F4D\u96C6\u5408\u5B9A\u4E49\u9632\u533A"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs leading-relaxed text-slate-500"
    }, "\u4ECE\u7EDF\u4E00\u76D1\u63A7\u5E73\u53F0\u540C\u6B65\u6444\u50CF\u5934\u70B9\u4F4D\uFF0C\u6C11\u8B66\u5728\u5730\u56FE\u4E0A\u9009\u62E9\u8981\u7EB3\u5165\u9632\u533A\u7684\u63A2\u5934\u3002\u540E\u7EED\u4EFB\u4E00\u70B9\u4F4D\u89E6\u53D1\u7B97\u6CD5\u544A\u8B66\uFF0C\u7CFB\u7EDF\u6309\u901A\u9053\u53F7\u81EA\u52A8\u5F52\u5C5E\u5230\u5BF9\u5E94\u4E1A\u52A1\u9632\u533A\u3002")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-800 bg-slate-950/55 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u540C\u6B65\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-slate-100"
    }, REGION_WIZARD_CAMERA_POOL.length)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-800 bg-slate-950/55 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u5728\u7EBF\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-emerald-300"
    }, REGION_WIZARD_CAMERA_POOL.filter(camera => camera.status === 'online').length)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-800 bg-slate-950/55 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u5DF2\u7EB3\u5165"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-cyan-300"
    }, activeRegions.reduce((sum, id) => sum + (regionsConfig[id]?.cameras?.length || 0), 0)))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2.5"
    }, REGION_WIZARD_CAMERA_POOL.slice(0, 6).map(camera => {
      const streetName = REGION_STREET_OPTIONS.find(option => option.id === camera.streetId)?.name || '未归属';
      const sceneName = REGION_SCENE_OPTIONS.find(option => option.id === camera.sceneType)?.name || '通用场景';
      return /*#__PURE__*/React.createElement("div", {
        key: camera.id,
        className: "rounded-xl border border-slate-800 bg-slate-950/45 p-3 flex items-center justify-between gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center min-w-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: `w-8 h-8 rounded-lg border flex items-center justify-center mr-3 shrink-0 ${camera.status === 'online' ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300' : 'bg-slate-900 border-slate-700 text-slate-500'}`
      }, /*#__PURE__*/React.createElement(Video, {
        className: "w-4 h-4"
      })), /*#__PURE__*/React.createElement("div", {
        className: "min-w-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold text-slate-200 truncate"
      }, camera.name), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] text-slate-500 mt-1"
      }, camera.code, " / ", streetName, " / ", sceneName))), /*#__PURE__*/React.createElement("span", {
        className: `text-[10px] shrink-0 rounded-md border px-2 py-1 ${camera.status === 'online' ? 'border-emerald-800/50 bg-emerald-950/30 text-emerald-300' : 'border-slate-700 bg-slate-900 text-slate-500'}`
      }, camera.status === 'online' ? '在线' : '离线'));
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleOpenRegionWizard,
      className: "mt-4 w-full rounded-xl border border-cyan-800/50 bg-cyan-950/35 px-4 py-3 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-900/45"
    }, "\u8FDB\u5165\u5730\u56FE\u9009\u70B9\u5EFA\u9632\u533A")), /*#__PURE__*/React.createElement("div", {
      className: "w-1/2 bg-slate-900/40 border border-slate-800 rounded-xl p-5 overflow-y-auto custom-scrollbar"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement(CheckCircle, {
      className: "w-4 h-4 mr-2"
    }), " \u5DF2\u542F\u7528\u7684\u4E1A\u52A1\u9632\u533A"), /*#__PURE__*/React.createElement("span", {
      className: "bg-cyan-950 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-cyan-800/50"
    }, activeRegions.length, " \u4E2A")), activeRegions.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "h-full flex flex-col items-center justify-center text-slate-500"
    }, /*#__PURE__*/React.createElement(MapIcon, {
      className: "w-10 h-10 mb-3 opacity-30"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm"
    }, "\u5C1A\u672A\u542F\u7528\u4EFB\u4F55\u9632\u533A")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, activeRegions.map(id => {
      const r = regionsConfig[id];
      if (!r) return null;
      return /*#__PURE__*/React.createElement("div", {
        key: id,
        className: "bg-slate-800/60 border border-cyan-900/30 p-4 rounded-lg flex items-center justify-between shadow-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-8 h-8 rounded bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center mr-3"
      }, /*#__PURE__*/React.createElement(r.icon, {
        className: "w-4 h-4 text-cyan-400"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold text-slate-200"
      }, r.name), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] text-slate-500 mt-0.5"
      }, "\u7EB3\u5165 ", r.cameras.length, " \u8DEF\u6444\u50CF\u5934 | ", r.caps.length, " \u79CD\u7B97\u6CD5\u80FD\u529B"), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] text-cyan-300/80 mt-1"
      }, r.definitionBasis || `由系统预置网格定义 / 关联算法 ${r.caps.length} 个`))), /*#__PURE__*/React.createElement("button", {
        onClick: () => handleToggleRegion(id),
        className: "text-slate-500 hover:text-red-400 transition-colors p-2"
      }, /*#__PURE__*/React.createElement(X, {
        className: "w-5 h-5"
      })));
    })))));
  };
  const renderCameraConfig = () => {
    const currentRegion = cameraConfigRegion;
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-6 flex items-end justify-between gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-slate-100 mb-1.5"
    }, "\u7EDF\u4E00\u6444\u50CF\u5934\u5E73\u53F0\uFF08\u793A\u610F\uFF09"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "\u8FD9\u91CC\u5C55\u793A\u7EDF\u4E00\u5E73\u53F0\u540C\u6B65\u8FC7\u6765\u7684\u8BBE\u5907\u6C60\u3001\u5728\u7EBF\u72B6\u6001\u548C\u9632\u533A\u7ED1\u5B9A\u5173\u7CFB\uFF1B\u544A\u8B66\u4E8B\u4EF6\u901A\u8FC7\u6444\u50CF\u5934\u901A\u9053\u53F7\u5F52\u5C5E\u5230\u5BF9\u5E94\u9632\u533A\u3002")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleOpenCameraPointModal,
      disabled: activeRegions.length === 0,
      className: "shrink-0 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-sm px-4 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-600/20 flex items-center"
    }, /*#__PURE__*/React.createElement(Plus, {
      className: "w-4 h-4 mr-1.5"
    }), " \u65B0\u589E\u70B9\u4F4D")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900/40 border border-slate-800 rounded-xl p-4 mb-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-end justify-between gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-end gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5E73\u53F0\u67E5\u770B\u9632\u533A"), /*#__PURE__*/React.createElement("select", {
      value: selectedSiteForConfig,
      onChange: e => setSelectedSiteForConfig(e.target.value),
      disabled: activeRegions.length === 0,
      className: "bg-slate-950 border border-slate-700 text-cyan-300 font-bold text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-56 cursor-pointer"
    }, activeRegions.length === 0 ? /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u6682\u65E0") : activeRegions.map(id => /*#__PURE__*/React.createElement("option", {
      key: id,
      value: id
    }, regionsConfig[id].name))), /*#__PURE__*/React.createElement(ControlReason, null, "\u7528\u4E8E\u5207\u6362\u67E5\u770B\u7EDF\u4E00\u5E73\u53F0\u540C\u6B65\u5230\u4E0D\u540C\u9632\u533A\u7684\u8BBE\u5907\u3002")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5173\u952E\u8BCD\u68C0\u7D22"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement(Search, {
      className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: cameraSearchQuery,
      onChange: e => setCameraSearchQuery(e.target.value),
      placeholder: "\u8BF7\u8F93\u5165\u70B9\u4F4D\u540D\u79F0\u3001\u8BBE\u5907\u7F16\u53F7\u6216\u8986\u76D6\u90E8\u4F4D",
      className: "w-72 bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement(ControlReason, null, "\u5FEB\u901F\u627E\u5230\u67D0\u4E00\u8DEF\u8BBE\u5907\u6216\u8986\u76D6\u90E8\u4F4D\uFF0C\u9002\u5408\u70B9\u4F4D\u6570\u91CF\u591A\u65F6\u4F7F\u7528\u3002")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5728\u7EBF\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
      value: cameraStatusFilter,
      onChange: e => setCameraStatusFilter(e.target.value),
      className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-40 cursor-pointer"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "\u5168\u90E8"), /*#__PURE__*/React.createElement("option", {
      value: "online"
    }, "\u5728\u7EBF"), /*#__PURE__*/React.createElement("option", {
      value: "offline"
    }, "\u79BB\u7EBF")), /*#__PURE__*/React.createElement(ControlReason, null, "\u6392\u67E5\u79BB\u7EBF\u8BBE\u5907\uFF0C\u907F\u514D\u628A\u4E0D\u53EF\u7528\u70B9\u4F4D\u8BEF\u8BA4\u4E3A\u9632\u533A\u53EF\u611F\u77E5\u3002")))), currentRegion && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-3 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-1"
    }, "\u5E73\u53F0\u8BBE\u5907"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-slate-100"
    }, cameraSummary.total)), /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-950/30 border border-emerald-900/40 rounded-lg px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-emerald-400/80 mb-1"
    }, "\u5728\u7EBF\u8BBE\u5907"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-emerald-300"
    }, cameraSummary.online)), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-1"
    }, "\u79BB\u7EBF\u8BBE\u5907"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-slate-200"
    }, cameraSummary.offline)), /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-950/30 border border-cyan-900/40 rounded-lg px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-cyan-400/80 mb-1"
    }, "\u6838\u5FC3\u503C\u5B88\u8BBE\u5907"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-cyan-300"
    }, cameraSummary.core)))), !currentRegion ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex items-center justify-center text-slate-500"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement(Video, {
      className: "w-10 h-10 mb-3 opacity-30 mx-auto"
    }), /*#__PURE__*/React.createElement("p", null, "\u8BF7\u9009\u62E9\u5DF2\u542F\u7528\u9632\u533A\u540E\u518D\u8FDB\u884C\u70B9\u4F4D\u914D\u7F6E"))) : /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 flex flex-col gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-5 shrink-0",
      style: {
        height: '360px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-slate-100 flex items-center"
    }, /*#__PURE__*/React.createElement(MapIcon, {
      className: "w-4 h-4 mr-2 text-cyan-400"
    }), "\u70B9\u4F4D\u5206\u5E03\u793A\u610F"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mt-1"
    }, "\u7528\u4E8E\u6838\u5BF9\u8BBE\u5907\u4F4D\u7F6E\u548C\u8986\u76D6\u90E8\u4F4D\uFF0C\u4E0D\u5728\u8FD9\u91CC\u8C03\u6574\u544A\u8B66\u9608\u503C")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 text-[11px] text-slate-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-cyan-400 mr-1.5"
    }), "\u5728\u7EBF"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-slate-500 mr-1.5"
    }), "\u79BB\u7EBF"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-red-500 mr-1.5"
    }), "\u5F53\u524D\u9009\u4E2D"))), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1 rounded-xl border border-slate-800 overflow-hidden",
      style: {
        backgroundColor: '#07101c',
        backgroundImage: 'linear-gradient(rgba(51, 65, 85, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.18) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-[14%] rounded-[999px] border border-cyan-900/40 bg-slate-900/20"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-x-[25%] inset-y-[22%] rounded-[999px] border-4 border-slate-700/70 bg-slate-950/40"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[36%] top-[34%] h-[32%] w-[28%] rounded-2xl border border-emerald-700/50 bg-emerald-500/10"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[50%] top-[34%] h-[32%] border-l border-emerald-600/50"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[36%] top-[50%] w-[28%] border-t border-emerald-600/50"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[43%] top-[8%] text-sm font-bold text-slate-400"
    }, currentRegion.name), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[41%] bottom-[10%] text-sm font-bold text-slate-400"
    }, "\u5357\u4FA7\u8FB9\u754C"), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[15%] top-[46%] text-sm font-bold text-slate-400"
    }, "\u897F\u4FA7\u8054\u9632\u5E26"), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-[15%] top-[46%] text-sm font-bold text-slate-400"
    }, "\u4E1C\u4FA7\u8054\u9632\u5E26"), filteredCameraPoints.map(camera => {
      const isSelected = selectedCameraPoint?.id === camera.id;
      return /*#__PURE__*/React.createElement("button", {
        key: camera.id,
        type: "button",
        onClick: () => setSelectedCameraId(camera.id),
        className: "absolute -translate-x-1/2 -translate-y-1/2 group",
        style: camera.pos
      }, /*#__PURE__*/React.createElement("div", {
        className: `absolute inset-0 rounded-full blur-md opacity-70 ${isSelected ? 'bg-red-500/50 scale-[2.2]' : camera.status === 'online' ? 'bg-cyan-400/40 scale-[1.8]' : 'bg-slate-500/30 scale-[1.6]'}`
      }), /*#__PURE__*/React.createElement("div", {
        className: `relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-red-600 border-red-200 shadow-[0_0_20px_rgba(239,68,68,0.5)]' : camera.status === 'online' ? 'bg-cyan-500 border-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]' : 'bg-slate-700 border-slate-300'}`
      }, /*#__PURE__*/React.createElement(Video, {
        className: "w-4 h-4 text-white"
      })), /*#__PURE__*/React.createElement("div", {
        className: `mt-2 px-2 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${isSelected ? 'bg-red-950/90 text-red-100 border border-red-500/40' : 'bg-slate-950/90 text-slate-300 border border-slate-700/60 group-hover:border-cyan-700/60'}`
      }, camera.name));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "w-[360px] bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-slate-100 flex items-center mb-4"
    }, /*#__PURE__*/React.createElement(CameraLens, {
      className: "w-4 h-4 mr-2 text-cyan-400"
    }), "\u8BBE\u5907\u8BE6\u60C5"), !selectedCameraPoint ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex items-center justify-center text-slate-500 text-sm"
    }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u70B9\u4F4D") : /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-950/60 border border-slate-800 rounded-xl p-4 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-base font-bold text-slate-100 mb-1"
    }, selectedCameraPoint.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mb-3"
    }, selectedCameraPoint.code), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: `px-2 py-1 rounded-md text-xs border ${selectedCameraPoint.status === 'online' ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40' : 'bg-slate-800 text-slate-300 border-slate-700'}`
    }, selectedCameraPoint.status === 'online' ? '在线' : '离线'), /*#__PURE__*/React.createElement("span", {
      className: `px-2 py-1 rounded-md text-xs border ${selectedCameraPoint.isCore ? 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40' : 'bg-slate-800 text-slate-300 border-slate-700'}`
    }, selectedCameraPoint.isCore ? '核心点位' : '普通点位'))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u6240\u5C5E\u9632\u533A"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, selectedCameraPoint.regionName)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u4E1A\u52A1\u5206\u533A"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, selectedCameraPoint.zoneName)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u8986\u76D6\u90E8\u4F4D"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, selectedCameraPoint.coveragePart)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u5B89\u88C5\u7C7B\u578B"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200"
    }, selectedCameraPoint.installType)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u671D\u5411"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200"
    }, selectedCameraPoint.direction)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u63A5\u5165\u534F\u8BAE"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200"
    }, selectedCameraPoint.protocol)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u5F53\u524D\u6807\u7B7E"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, selectedCameraPoint.alertLabel))), /*#__PURE__*/React.createElement("div", {
      className: "mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mb-2"
    }, "\u53EF\u7528\u7B97\u6CD5\u80FD\u529B"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, selectedCameraPoint.abilities.map(ability => /*#__PURE__*/React.createElement("span", {
      key: ability,
      className: "px-2 py-1 rounded-md bg-cyan-950/30 text-cyan-300 text-xs border border-cyan-900/40"
    }, ability))))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-slate-100 flex items-center"
    }, /*#__PURE__*/React.createElement(ListCheck, {
      className: "w-4 h-4 mr-2 text-cyan-400"
    }), "\u8BBE\u5907\u6E05\u5355"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mt-1"
    }, "\u70B9\u51FB\u884C\u53EF\u67E5\u770B\u8BBE\u5907\u3001\u8986\u76D6\u90E8\u4F4D\u548C\u53EF\u7528\u7B97\u6CD5\u80FD\u529B")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500"
    }, "\u5171 ", filteredCameraPoints.length, " \u6761\u8BB0\u5F55")), filteredCameraPoints.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex items-center justify-center text-slate-500 text-sm border border-dashed border-slate-800 rounded-xl"
    }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u5339\u914D\u70B9\u4F4D") : /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 overflow-auto custom-scrollbar"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-950/95 backdrop-blur-sm z-10"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "text-left text-slate-400 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u5E8F\u53F7"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u70B9\u4F4D\u540D\u79F0"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u8BBE\u5907\u7F16\u53F7"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u6240\u5C5E\u9632\u533A"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u8986\u76D6\u90E8\u4F4D"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u5728\u7EBF\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u6838\u5FC3\u70B9\u4F4D"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u53EF\u7528\u80FD\u529B"))), /*#__PURE__*/React.createElement("tbody", null, filteredCameraPoints.map((camera, index) => {
      const isSelected = selectedCameraPoint?.id === camera.id;
      return /*#__PURE__*/React.createElement("tr", {
        key: camera.id,
        onClick: () => setSelectedCameraId(camera.id),
        className: `border-b border-slate-800/80 cursor-pointer transition-colors ${isSelected ? 'bg-cyan-950/20' : 'hover:bg-slate-800/40'}`
      }, /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-400"
      }, index + 1), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-medium text-slate-100"
      }, camera.name), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-slate-500 mt-1"
      }, camera.alertLabel)), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-300 font-mono"
      }, camera.code), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-300"
      }, camera.regionName), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-300"
      }, camera.coveragePart), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: `inline-flex items-center px-2 py-1 rounded-md text-xs border ${camera.status === 'online' ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40' : 'bg-slate-800 text-slate-300 border-slate-700'}`
      }, /*#__PURE__*/React.createElement("span", {
        className: `w-1.5 h-1.5 rounded-full mr-2 ${camera.status === 'online' ? 'bg-emerald-400' : 'bg-slate-400'}`
      }), camera.status === 'online' ? '在线' : '离线')), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: `inline-flex px-2 py-1 rounded-md text-xs border ${camera.isCore ? 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40' : 'bg-slate-800 text-slate-300 border-slate-700'}`
      }, camera.isCore ? '是' : '否')), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap gap-1.5"
      }, camera.abilities.map(ability => /*#__PURE__*/React.createElement("span", {
        key: ability,
        className: "px-2 py-1 rounded-md bg-slate-950/70 text-slate-300 text-xs border border-slate-800"
      }, ability)))));
    })))))));
  };
  const renderRuleConfig = () => {
    const currentRegion = regionsConfig[selectedSiteForConfig];
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-6 flex items-end justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-slate-100 mb-1.5"
    }, "\u9884\u8B66\u89C4\u5219\u7B56\u7565\u914D\u7F6E"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "\u6309\u9632\u533A\u914D\u7F6E\u7B97\u6CD5\u542F\u505C\u3001\u544A\u8B66\u7B49\u7EA7\u3001ROI \u548C\u9608\u503C\u7B56\u7565\uFF1B\u8FD9\u91CC\u51B3\u5B9A\"\u4EC0\u4E48\u60C5\u51B5\u89E6\u53D1\u544A\u8B66\"\uFF0C\u4E0D\u7EF4\u62A4\u6444\u50CF\u5934\u8BBE\u5907\u8D44\u6599\u3002")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 bg-slate-900 p-2 rounded-lg border border-slate-700"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 text-xs font-medium pl-2"
    }, "\u7B56\u7565\u751F\u6548\u9632\u533A\uFF1A"), /*#__PURE__*/React.createElement("select", {
      value: selectedSiteForConfig,
      onChange: e => setSelectedSiteForConfig(e.target.value),
      disabled: activeRegions.length === 0,
      className: "bg-slate-950 border border-slate-600 text-cyan-300 font-bold text-sm rounded px-3 py-1.5 outline-none focus:border-cyan-500 w-56 cursor-pointer"
    }, activeRegions.length === 0 ? /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u6682\u65E0") : activeRegions.map(id => /*#__PURE__*/React.createElement("option", {
      key: id,
      value: id
    }, regionsConfig[id].name))), /*#__PURE__*/React.createElement(ControlReason, null, "\u540C\u4E00\u5957\u7B97\u6CD5\u5728\u4E0D\u540C\u9632\u533A\u9608\u503C\u4E0D\u540C\uFF0C\u9700\u8981\u5148\u786E\u5B9A\u7B56\u7565\u751F\u6548\u5BF9\u8C61\u3002"))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2"
    }, !currentRegion ? /*#__PURE__*/React.createElement("div", {
      className: "h-full flex items-center justify-center text-slate-500"
    }, /*#__PURE__*/React.createElement(Settings, {
      className: "w-10 h-10 mb-3 opacity-30 block mx-auto"
    }), /*#__PURE__*/React.createElement("p", null, "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u9632\u533A")) : currentRegion.caps.map(cap => /*#__PURE__*/React.createElement("div", {
      key: cap.id,
      className: "bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 flex flex-col shadow-sm transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start space-x-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: `mt-0.5 p-3 rounded-lg ${cap.bg} ${cap.color}`
    }, /*#__PURE__*/React.createElement(cap.icon, {
      className: "w-6 h-6"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-slate-200 font-bold text-sm mb-1.5"
    }, stripPriorityLabel(cap.title)), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400 text-xs mb-2 max-w-3xl leading-relaxed"
    }, cap.desc), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-2"
    }, "\u7B56\u7565\u5BF9\u8C61\uFF1A", currentRegion.name, " / \u611F\u77E5\u6E90\uFF1A", cap.sources.join(' / ')))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-5 shrink-0"
    }, cap.hasRoi && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setRoiModalRegionId(currentRegion.id),
      className: "text-slate-400 hover:text-cyan-400 flex flex-col items-center justify-center group/roi cursor-pointer p-1 transition-colors"
    }, /*#__PURE__*/React.createElement(Crop, {
      className: "text-xl mb-1 group-hover/roi:scale-110 transition-transform"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-medium opacity-80 group-hover/roi:opacity-100 transition-opacity whitespace-nowrap"
    }, "\u914D\u7F6E ROI \u7B56\u7565")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center ml-2 border-l border-slate-700 pl-5"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setToggles(p => ({
        ...p,
        [cap.id]: !p[cap.id]
      })),
      className: `w-14 h-7 rounded-full transition-colors duration-300 relative focus:outline-none mb-1 ${toggles[cap.id] ? 'bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-slate-700'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-5 h-5 bg-white rounded-full absolute top-[4px] transition-transform duration-300 ease-in-out shadow-md ${toggles[cap.id] ? 'left-[30px]' : 'left-[4px]'}`
    })), /*#__PURE__*/React.createElement("span", {
      className: `text-[10px] font-bold ${toggles[cap.id] ? 'text-cyan-400' : 'text-slate-500'}`
    }, toggles[cap.id] ? '策略启用' : '策略停用')))), cap.isGathering && toggles[cap.id] && /*#__PURE__*/React.createElement("div", {
      className: "mt-5 pt-5 border-t border-slate-700/50 flex flex-col gap-4 bg-slate-950/30 -mx-5 px-5 -mb-5 pb-5 rounded-b-xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-yellow-500 flex items-center mb-1"
    }, /*#__PURE__*/React.createElement(Settings, {
      className: "w-4 h-4 mr-1.5"
    }), " \u805A\u96C6\u544A\u8B66\u53CC\u9608\u503C\u7B56\u7565"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-xs text-slate-300 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "\u89E6\u53D1\u4EBA\u6570\u9608\u503C"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded"
    }, gatherCount, " \u4EBA")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "10",
      max: "200",
      step: "1",
      value: gatherCount,
      onChange: e => setGatherCount(e.target.value),
      className: "w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40"
    }), /*#__PURE__*/React.createElement(ControlReason, null, "\u51B3\u5B9A\u8FBE\u5230\u591A\u5C11\u4EBA\u540E\u624D\u8FDB\u5165\u805A\u96C6\u544A\u8B66\u5224\u5B9A\u3002"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-3 border-t border-slate-800/50 pt-2"
    }, "\u5F53 ROI \u5185\u4EBA\u6570\u8D85\u8FC7\u6B64\u503C\u540E\uFF0C\u8FDB\u5165\u6301\u7EED\u65F6\u95F4\u5224\u5B9A\u3002")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-xs text-slate-300 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "\u6301\u7EED\u65F6\u95F4\u9608\u503C"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-orange-400 font-bold bg-orange-950 px-2 py-0.5 rounded"
    }, gatherTime, " \u5206\u949F")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      max: "15",
      step: "1",
      value: gatherTime,
      onChange: e => setGatherTime(e.target.value),
      className: "w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40"
    }), /*#__PURE__*/React.createElement(ControlReason, null, "\u51B3\u5B9A\u4EBA\u7FA4\u6301\u7EED\u591A\u4E45\u624D\u89E6\u53D1\u544A\u8B66\uFF0C\u7528\u4E8E\u8FC7\u6EE4\u77ED\u65F6\u8DEF\u8FC7\u5BA2\u6D41\u3002"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-3 border-t border-slate-800/50 pt-2"
    }, "\u4EBA\u6570\u548C\u6301\u7EED\u65F6\u95F4\u540C\u65F6\u6EE1\u8DB3\u540E\u89E6\u53D1\u544A\u8B66\uFF0C\u8FC7\u6EE4\u77AC\u65F6\u5BA2\u6D41\u6CE2\u52A8\u3002"))))))));
  };
  const renderUserManagement = () => {
    const visibleIds = filteredUsers.map(user => user.id);
    const allVisibleSelected = visibleIds.length > 0 && visibleIds.every(id => selectedUserIds.includes(id));
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-5 flex items-end justify-between gap-4 shrink-0"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-slate-100 mb-1.5"
    }, "\u7528\u6237\u7BA1\u7406"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "\u7EF4\u62A4\u5E73\u53F0\u767B\u5F55\u8D26\u53F7\u3001\u6240\u5C5E\u90E8\u95E8\u3001\u89D2\u8272\u548C\u542F\u505C\u72B6\u6001\uFF1B\u540E\u7EED\u53EF\u4E0E\u7EDF\u4E00\u8EAB\u4EFD\u8BA4\u8BC1\u6216\u516C\u5B89\u5185\u7F51\u8D26\u53F7\u4F53\u7CFB\u5BF9\u63A5\u3002")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleOpenUserModal(),
      className: "bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-600/20 flex items-center"
    }, /*#__PURE__*/React.createElement(Plus, {
      className: "w-4 h-4 mr-1.5"
    }), " \u65B0\u589E\u7528\u6237"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "bg-white hover:bg-slate-50 text-slate-700 text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
    }, "\u6279\u91CF\u5BFC\u5165"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleBatchDelete,
      disabled: !selectedUserIds.length,
      className: "bg-white hover:bg-red-50 disabled:bg-slate-100 disabled:text-slate-400 text-red-600 text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
    }, "\u6279\u91CF\u5220\u9664"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-3 mb-4 shrink-0"
    }, [['用户总数', userSummary.total, 'text-slate-900', 'bg-white border-slate-200'], ['启用账号', userSummary.enabled, 'text-emerald-700', 'bg-emerald-50 border-emerald-100'], ['停用账号', userSummary.disabled, 'text-slate-600', 'bg-slate-50 border-slate-200'], ['涉及部门', userSummary.departments, 'text-cyan-700', 'bg-cyan-50 border-cyan-100']].map(([label, value, tone, shell]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      className: `${shell} border rounded-xl px-4 py-3`
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-1"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: `text-xl font-bold ${tone}`
    }, value)))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white border border-slate-200 rounded-xl p-4 mb-4 shrink-0 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-3"
    }, /*#__PURE__*/React.createElement("select", {
      value: userRoleFilter,
      onChange: e => setUserRoleFilter(e.target.value),
      className: "bg-white border border-slate-300 text-slate-700 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-44 cursor-pointer"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "\u5168\u90E8\u89D2\u8272"), ROLE_LIBRARY.map(role => /*#__PURE__*/React.createElement("option", {
      key: role.id,
      value: role.id
    }, role.name))), /*#__PURE__*/React.createElement("select", {
      value: userStatusFilter,
      onChange: e => setUserStatusFilter(e.target.value),
      className: "bg-white border border-slate-300 text-slate-700 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-36 cursor-pointer"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all"
    }, "\u5168\u90E8\u72B6\u6001"), /*#__PURE__*/React.createElement("option", {
      value: "\u542F\u7528"
    }, "\u542F\u7528"), /*#__PURE__*/React.createElement("option", {
      value: "\u505C\u7528"
    }, "\u505C\u7528")), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement(Search, {
      className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
    }), /*#__PURE__*/React.createElement("input", {
      value: userSearchQuery,
      onChange: e => setUserSearchQuery(e.target.value),
      placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D\u3001\u8D26\u53F7\u3001\u90E8\u95E8\u6216\u89D2\u8272",
      className: "w-72 bg-white border border-slate-300 text-slate-700 text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        setUserSearchQuery('');
        setUserRoleFilter('all');
        setUserStatusFilter('all');
      },
      className: "bg-white hover:bg-slate-50 text-slate-600 text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
    }, "\u91CD\u7F6E")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleBatchDisable,
      disabled: !selectedUserIds.length,
      className: "text-sm text-amber-600 hover:text-amber-700 disabled:text-slate-400 transition-colors"
    }, "\u6279\u91CF\u505C\u7528\u9009\u4E2D\u8D26\u53F7"))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 grid grid-cols-[minmax(0,1fr)_320px] gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 overflow-auto custom-scrollbar"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-50 z-10"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "text-left text-slate-600 border-b border-slate-200"
    }, /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-4 font-medium w-12"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: allVisibleSelected,
      onChange: handleToggleAllUsers
    })), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u7528\u6237\u540D"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u8D26\u53F7"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u89D2\u8272"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u90E8\u95E8"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium"
    }, "\u6700\u8FD1\u767B\u5F55"), /*#__PURE__*/React.createElement("th", {
      className: "py-3 px-3 font-medium text-right"
    }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filteredUsers.map(user => {
      const role = getRole(user.roleId);
      const selected = selectedUser?.id === user.id;
      const checked = selectedUserIds.includes(user.id);
      return /*#__PURE__*/React.createElement("tr", {
        key: user.id,
        onClick: () => setSelectedUserId(user.id),
        className: `border-b border-slate-100 cursor-pointer transition-colors ${selected ? 'bg-cyan-50/70' : 'hover:bg-slate-50'}`
      }, /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-4",
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: checked,
        onChange: () => handleToggleSelectUser(user.id)
      })), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-800 font-medium"
      }, user.name), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-600 font-mono"
      }, user.account), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: `inline-flex px-2.5 py-1 rounded-md border text-xs font-medium ${role.tone}`
      }, role.name)), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-600"
      }, user.department), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: `inline-flex items-center text-xs ${user.status === '启用' ? 'text-emerald-700' : 'text-slate-500'}`
      }, /*#__PURE__*/React.createElement("span", {
        className: `w-2 h-2 rounded-full mr-2 ${user.status === '启用' ? 'bg-emerald-500' : 'bg-slate-400'}`
      }), user.status)), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3 text-slate-500"
      }, user.lastLogin), /*#__PURE__*/React.createElement("td", {
        className: "py-3 px-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-end gap-3",
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: () => handleOpenUserModal(user),
        className: "text-blue-600 hover:text-blue-700"
      }, "\u7F16\u8F91"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: () => handleToggleUserStatus(user.id),
        className: user.status === '启用' ? 'text-amber-600 hover:text-amber-700' : 'text-blue-600 hover:text-blue-700'
      }, user.status === '启用' ? '禁用' : '启用'), /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: () => handleDeleteUser(user.id),
        className: "text-red-500 hover:text-red-600"
      }, "\u5220\u9664"))));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "h-14 px-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 shrink-0"
    }, /*#__PURE__*/React.createElement("span", null, "\u5171 ", filteredUsers.length, " \u6761\u8BB0\u5F55\uFF0C\u5DF2\u9009\u62E9 ", selectedUserIds.length, " \u6761"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "\u2039"), /*#__PURE__*/React.createElement("span", {
      className: "text-blue-600 font-bold"
    }, "1"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "\u203A"), /*#__PURE__*/React.createElement("span", {
      className: "border border-slate-200 rounded-lg px-3 py-1.5 bg-white"
    }, "10\u6761/\u9875")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm overflow-hidden flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-slate-800"
    }, "\u8D26\u53F7\u8BE6\u60C5"), selectedUser && /*#__PURE__*/React.createElement("span", {
      className: `text-xs px-2 py-1 rounded-full ${selectedUser.status === '启用' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`
    }, selectedUser.status)), !selectedUser ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex items-center justify-center text-slate-400 text-sm"
    }, "\u8BF7\u9009\u62E9\u7528\u6237") : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-50 border border-slate-200 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-slate-900"
    }, selectedUser.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mt-1"
    }, selectedUser.account)), [['角色', getRole(selectedUser.roleId).name], ['部门', selectedUser.department], ['手机号', selectedUser.phone || '未填写'], ['邮箱', selectedUser.email || '未填写'], ['最近登录', selectedUser.lastLogin], ['备注', selectedUser.remark || '无']].map(([label, value]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "flex justify-between gap-4 border-b border-slate-100 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-800 text-right"
    }, value))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mb-2"
    }, "\u6743\u9650\u6458\u8981"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, getRole(selectedUser.roleId).permissions.map(permission => /*#__PURE__*/React.createElement("span", {
      key: permission,
      className: "px-2 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs border border-cyan-100"
    }, permission))))))));
  };
  const renderRoleManagement = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-5 flex items-end justify-between gap-4 shrink-0"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-slate-100 mb-1.5"
    }, "\u89D2\u8272\u6743\u9650\u7BA1\u7406"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "\u5B9A\u4E49\u4E0D\u540C\u5C97\u4F4D\u80FD\u8BBF\u95EE\u54EA\u4E9B\u6A21\u5757\uFF0C\u907F\u514D\u503C\u73ED\u3001\u8FD0\u7EF4\u3001\u5B89\u4FDD\u7B49\u89D2\u8272\u770B\u5230\u4E0D\u76F8\u5173\u6216\u4E0D\u8BE5\u64CD\u4F5C\u7684\u529F\u80FD\u3002")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "bg-white hover:bg-slate-50 text-slate-700 text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
    }, "\u65B0\u589E\u89D2\u8272")), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 grid grid-cols-[340px_minmax(0,1fr)] gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm overflow-hidden flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-800 mb-3"
    }, "\u89D2\u8272\u5217\u8868"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 overflow-y-auto custom-scrollbar pr-1"
    }, ROLE_LIBRARY.map(role => {
      const active = selectedRoleId === role.id;
      const count = users.filter(user => user.roleId === role.id).length;
      return /*#__PURE__*/React.createElement("button", {
        key: role.id,
        type: "button",
        onClick: () => setSelectedRoleId(role.id),
        className: `w-full text-left rounded-xl border p-4 transition-colors ${active ? 'bg-cyan-50 border-cyan-200 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between gap-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold text-slate-900"
      }, role.name), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-slate-500 mt-1"
      }, role.description)), /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-1"
      }, count, " \u4EBA")), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: `px-2 py-1 rounded-md border text-xs ${role.tone}`
      }, role.scope, "\u6743\u9650"), /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-slate-400"
      }, role.permissions.length, " \u9879\u80FD\u529B")));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-4 border-b border-slate-200 flex items-center justify-between shrink-0"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-slate-900"
    }, selectedRole.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mt-1"
    }, selectedRole.description)), /*#__PURE__*/React.createElement("span", {
      className: `px-3 py-1.5 rounded-lg border text-xs font-medium ${selectedRole.tone}`
    }, selectedRole.scope, "\u6743\u9650")), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 p-5 overflow-auto custom-scrollbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3 mb-5"
    }, [['关联用户', users.filter(user => user.roleId === selectedRole.id).length, '当前角色下的账号数量'], ['权限能力', selectedRole.permissions.length, '可访问和可操作能力'], ['状态', '启用', '角色当前可被分配']].map(([label, value, note]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "rounded-xl bg-slate-50 border border-slate-200 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-1"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-slate-900"
    }, value), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-2"
    }, note)))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-200 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-900 mb-3"
    }, "\u529F\u80FD\u6743\u9650"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, ['大屏态势', '监控巡看', '告警复核', '处置记录', '区域配置', '摄像头配置', '预警规则', '用户管理', '复盘报告'].map(permission => {
      const enabled = selectedRole.permissions.includes(permission);
      return /*#__PURE__*/React.createElement("div", {
        key: permission,
        className: "flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-slate-700"
      }, permission), /*#__PURE__*/React.createElement("span", {
        className: `text-xs px-2 py-1 rounded-md ${enabled ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-400 border border-slate-200'}`
      }, enabled ? '允许' : '禁用'));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-200 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-900 mb-3"
    }, "\u6570\u636E\u8303\u56F4"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-cyan-50 border border-cyan-100 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-cyan-700 mb-1"
    }, "\u53EF\u89C1\u8303\u56F4"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-900"
    }, selectedRole.scope === '全局' ? '全区所有防区和全部设备' : selectedRole.scope === '平台' ? '平台设备与配置数据' : selectedRole.scope === '部门' ? '所属部门和下辖防区' : '授权防区范围')), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-50 border border-slate-200 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mb-2"
    }, "\u5DF2\u5206\u914D\u7528\u6237"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, users.filter(user => user.roleId === selectedRole.id).map(user => /*#__PURE__*/React.createElement("span", {
      key: user.id,
      className: "px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-700"
    }, user.name)), users.filter(user => user.roleId === selectedRole.id).length === 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400"
    }, "\u6682\u65E0\u7528\u6237"))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-amber-50 border border-amber-100 p-4 text-xs text-amber-700 leading-relaxed"
    }, "\u539F\u578B\u9636\u6BB5\u5148\u5C55\u793A\u6743\u9650\u6A21\u578B\u3002\u771F\u5B9E\u9879\u76EE\u91CC\u5EFA\u8BAE\u5BF9\u63A5\u7EDF\u4E00\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u5E76\u5C06\u201C\u6A21\u5757\u6743\u9650\u3001\u6570\u636E\u8303\u56F4\u3001\u64CD\u4F5C\u5BA1\u8BA1\u201D\u4F5C\u4E3A\u4E09\u7C7B\u6743\u9650\u5206\u522B\u7BA1\u7406\u3002"))))))));
  };
  const renderUserModal = () => {
    if (!isUserModalOpen) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-50 bg-slate-950/45 backdrop-blur-sm flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-14 border-b border-slate-200 px-5 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-900"
    }, editingUserId ? '编辑用户' : '新增用户'), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mt-0.5"
    }, "\u914D\u7F6E\u8D26\u53F7\u57FA\u7840\u4FE1\u606F\u3001\u6240\u5C5E\u89D2\u8272\u548C\u542F\u505C\u72B6\u6001")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setIsUserModalOpen(false),
      className: "text-slate-400 hover:text-slate-700 p-2"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-5 h-5"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4 p-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u7528\u6237\u540D"), /*#__PURE__*/React.createElement("input", {
      value: userDraft.name,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        name: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u8D26\u53F7"), /*#__PURE__*/React.createElement("input", {
      value: userDraft.account,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        account: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u89D2\u8272"), /*#__PURE__*/React.createElement("select", {
      value: userDraft.roleId,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        roleId: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    }, ROLE_LIBRARY.map(role => /*#__PURE__*/React.createElement("option", {
      key: role.id,
      value: role.id
    }, role.name)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u90E8\u95E8"), /*#__PURE__*/React.createElement("select", {
      value: userDraft.department,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        department: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    }, ['指挥中心', '安保部', '技术运维', '分局办公室', '马巷所', '新店街道'].map(dept => /*#__PURE__*/React.createElement("option", {
      key: dept,
      value: dept
    }, dept)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u624B\u673A\u53F7"), /*#__PURE__*/React.createElement("input", {
      value: userDraft.phone,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        phone: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u90AE\u7BB1"), /*#__PURE__*/React.createElement("input", {
      value: userDraft.email,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        email: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
      value: userDraft.status,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        status: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    }, /*#__PURE__*/React.createElement("option", {
      value: "\u542F\u7528"
    }, "\u542F\u7528"), /*#__PURE__*/React.createElement("option", {
      value: "\u505C\u7528"
    }, "\u505C\u7528"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5907\u6CE8"), /*#__PURE__*/React.createElement("input", {
      value: userDraft.remark,
      onChange: e => setUserDraft(prev => ({
        ...prev,
        remark: e.target.value
      })),
      className: "w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 text-sm outline-none focus:border-cyan-500"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "h-16 border-t border-slate-200 px-5 flex items-center justify-end gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setIsUserModalOpen(false),
      className: "px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm"
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: !canSubmitUser,
      onClick: handleSubmitUser,
      className: "px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-medium"
    }, "\u786E\u5B9A"))));
  };
  const renderRoiModal = () => {
    if (!roiModalRegion) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-12 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center text-slate-100 font-bold"
    }, /*#__PURE__*/React.createElement(Crop, {
      className: "w-4 h-4 mr-2 text-cyan-400"
    }), "ROI \u7B56\u7565\u914D\u7F6E\uFF1A", roiModalRegion.name), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setRoiModalRegionId(''),
      className: "text-slate-300 hover:text-white"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-5 h-5"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-12 gap-0 min-h-[520px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-8 p-5 bg-slate-950/60 border-r border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-4 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, "\u89C4\u5219\u4F5C\u7528\u8303\u56F4\u9884\u89C8"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500"
    }, "\u7528\u4E8E\u8BF4\u660E\u89C4\u5219\u4F5C\u7528\u5728\u54EA\u4E9B\u5173\u952E\u90E8\u4F4D\uFF0C\u5F53\u524D\u4E3A\u539F\u578B\u793A\u610F")), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2 py-1 rounded-md"
    }, "\u5F53\u524D\u9632\u533A\uFF1A", roiModalRegion.microTitle)), /*#__PURE__*/React.createElement("div", {
      className: "relative rounded-2xl border border-slate-800 overflow-hidden",
      style: {
        height: '420px',
        backgroundColor: '#07101c',
        backgroundImage: 'linear-gradient(rgba(51, 65, 85, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.18) 1px, transparent 1px)',
        backgroundSize: '26px 26px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-[12%] rounded-[999px] border border-cyan-900/40 bg-slate-900/20"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-x-[22%] inset-y-[18%] rounded-[999px] border-4 border-slate-700/70 bg-slate-950/40"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[32%] top-[28%] w-[36%] h-[40%] rounded-2xl border-2 border-red-500/70 bg-red-500/10 shadow-[0_0_25px_rgba(239,68,68,0.18)]"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[36%] top-[32%] w-[28%] h-[28%] rounded-xl border border-cyan-400/50 bg-cyan-500/10"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[41%] top-[18%] text-sm font-bold text-slate-400"
    }, roiModalRegion.name), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[34%] bottom-[10%] text-xs text-slate-400"
    }, "\u6B64\u5904\u4EE3\u8868\u89C4\u5219\u91CD\u70B9\u8BC6\u522B\u8303\u56F4"))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-4 p-5 bg-slate-900/50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "ROI \u7B56\u7565"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u7B56\u7565\u540D\u79F0"), /*#__PURE__*/React.createElement("input", {
      value: roiName,
      onChange: e => setRoiName(e.target.value),
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-200 text-sm outline-none focus:border-cyan-500"
    }), /*#__PURE__*/React.createElement(ControlReason, null, "\u7528\u4E8E\u7ED9\u89C4\u5219\u4F5C\u7528\u8303\u56F4\u547D\u540D\uFF0C\u4FBF\u4E8E\u540E\u7EED\u5728\u7B56\u7565\u5217\u8868\u4E2D\u8BC6\u522B\u3002")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-[11px] text-slate-500 mb-2"
    }, /*#__PURE__*/React.createElement("span", null, "\u89E6\u53D1\u4EBA\u6570\u9608\u503C"), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-300 font-mono"
    }, roiThreshold, " \u4EBA")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "10",
      max: "200",
      step: "5",
      value: roiThreshold,
      onChange: e => setRoiThreshold(Number(e.target.value)),
      className: "w-full"
    }), /*#__PURE__*/React.createElement(ControlReason, null, "\u7528\u4E8E\u5FEB\u901F\u8C03\u6574\u8BE5 ROI \u5185\u7684\u544A\u8B66\u89E6\u53D1\u4EBA\u6570\u3002")), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 leading-relaxed"
    }, "\u5F53\u524D\u4EC5\u63D0\u4F9B\u8F7B\u91CF\u9884\u89C8\u4E0E\u9608\u503C\u8BBE\u7F6E\uFF0C\u7528\u4E8E\u8BF4\u660E\u89C4\u5219\u7B56\u7565\u5982\u4F55\u751F\u6548\u3002"), /*#__PURE__*/React.createElement("div", {
      className: "pt-2 space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setRoiModalRegionId(''),
      className: "w-full bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium py-3 rounded-lg transition-colors shadow-lg shadow-cyan-600/20"
    }, "\u4FDD\u5B58\u7B56\u7565"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setRoiModalRegionId(''),
      className: "w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium py-3 rounded-lg border border-slate-700 transition-colors"
    }, "\u53D6\u6D88")))))));
  };
  const renderCameraPointModal = () => {
    if (!isCameraPointModalOpen) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-12 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center text-slate-100 font-bold"
    }, /*#__PURE__*/React.createElement(CameraLens, {
      className: "w-4 h-4 mr-2 text-cyan-400"
    }), "\u65B0\u589E\u70B9\u4F4D"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setIsCameraPointModalOpen(false),
      className: "text-slate-300 hover:text-white"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-5 h-5"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-12 gap-0 min-h-[520px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-8 p-5 bg-slate-950/60 border-r border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u70B9\u4F4D\u540D\u79F0"), /*#__PURE__*/React.createElement("input", {
      value: cameraPointDraft.name,
      onChange: e => setCameraPointDraft(prev => ({
        ...prev,
        name: e.target.value
      })),
      placeholder: "\u8BF7\u8F93\u5165\u70B9\u4F4D\u540D\u79F0",
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u8BBE\u5907\u7F16\u53F7"), /*#__PURE__*/React.createElement("input", {
      value: cameraPointDraft.code,
      onChange: e => setCameraPointDraft(prev => ({
        ...prev,
        code: e.target.value
      })),
      placeholder: "\u8BF7\u8F93\u5165\u8BBE\u5907\u7F16\u53F7",
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u6240\u5C5E\u533A\u57DF"), /*#__PURE__*/React.createElement("select", {
      value: cameraPointDraft.regionId,
      onChange: e => setCameraPointDraft(prev => ({
        ...prev,
        regionId: e.target.value
      })),
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u8BF7\u9009\u62E9\u6240\u5C5E\u533A\u57DF"), cameraPointRegionOptions.map(region => /*#__PURE__*/React.createElement("option", {
      key: region.id,
      value: region.id
    }, region.name)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5B89\u88C5\u7C7B\u578B"), /*#__PURE__*/React.createElement("input", {
      value: cameraPointDraft.installType,
      onChange: e => setCameraPointDraft(prev => ({
        ...prev,
        installType: e.target.value
      })),
      placeholder: "\u5982\uFF1A\u7ACB\u6746\u5F0F\u3001\u58C1\u6302\u5F0F",
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u671D\u5411"), /*#__PURE__*/React.createElement("input", {
      value: cameraPointDraft.direction,
      onChange: e => setCameraPointDraft(prev => ({
        ...prev,
        direction: e.target.value
      })),
      placeholder: "\u5982\uFF1A\u4E1C\u3001\u5357\u3001\u897F\u5317",
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5173\u8054\u9884\u8B66\u7C7B\u522B"), /*#__PURE__*/React.createElement("input", {
      value: cameraPointDraft.alertCategory,
      onChange: e => setCameraPointDraft(prev => ({
        ...prev,
        alertCategory: e.target.value
      })),
      placeholder: "\u4F8B\u5982\uFF1A\u5F02\u5E38\u805A\u96C6\u3001\u6253\u67B6\u6597\u6BB4",
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u5728\u7EBF\u72B6\u6001"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-6 text-sm"
    }, /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      checked: cameraPointDraft.status === 'online',
      onChange: () => setCameraPointDraft(prev => ({
        ...prev,
        status: 'online'
      }))
    }), "\u5728\u7EBF"), /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      checked: cameraPointDraft.status === 'offline',
      onChange: () => setCameraPointDraft(prev => ({
        ...prev,
        status: 'offline'
      }))
    }), "\u79BB\u7EBF"))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-2 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, "\u6838\u5FC3\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mt-1"
    }, "\u52FE\u9009\u540E\u4F1A\u5728\u793A\u610F\u9875\u4E2D\u7A81\u51FA\u663E\u793A")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setCameraPointDraft(prev => ({
        ...prev,
        isCore: !prev.isCore
      })),
      className: `w-14 h-7 rounded-full transition-colors duration-300 relative ${cameraPointDraft.isCore ? 'bg-cyan-500' : 'bg-slate-700'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-5 h-5 bg-white rounded-full absolute top-[4px] transition-transform duration-300 ${cameraPointDraft.isCore ? 'left-[30px]' : 'left-[4px]'}`
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-4 p-5 bg-slate-900/50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "\u65B0\u589E\u9884\u89C8"), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-800 bg-slate-950/60 p-4 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-base font-bold text-slate-100 mb-1"
    }, cameraPointDraft.name || '未命名点位'), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500"
    }, cameraPointDraft.code || '设备编号待填写'), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex flex-wrap gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-1 rounded-md text-xs border bg-slate-800 text-slate-300 border-slate-700"
    }, cameraPointDraft.status === 'online' ? '在线' : '离线'), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-1 rounded-md text-xs border bg-slate-800 text-slate-300 border-slate-700"
    }, cameraPointDraft.isCore ? '核心点位' : '普通点位'))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u6240\u5C5E\u533A\u57DF"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, regionsConfig[cameraPointDraft.regionId]?.name || '未选择')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u5B89\u88C5\u7C7B\u578B"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, cameraPointDraft.installType || '未填写')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u671D\u5411"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, cameraPointDraft.direction || '未填写')), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-4 border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u5173\u8054\u9884\u8B66\u7C7B\u522B"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-200 text-right"
    }, cameraPointDraft.alertCategory || '未填写'))), /*#__PURE__*/React.createElement("div", {
      className: "mt-5 space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleSubmitCameraPoint,
      disabled: !canSubmitCameraPoint,
      className: "w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-sm font-medium py-3 rounded-lg transition-colors shadow-lg shadow-cyan-600/20"
    }, "\u786E\u5B9A"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setIsCameraPointModalOpen(false),
      className: "w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium py-3 rounded-lg border border-slate-700 transition-colors"
    }, "\u53D6\u6D88"))))));
  };
  const renderRegionWizardModal = () => {
    if (!isRegionWizardOpen) return null;
    const StepIcon = sceneOption.icon || MapPin;
    return /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-50 bg-slate-950/82 backdrop-blur-sm flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-6xl max-h-[92vh] bg-slate-900 border border-cyan-900/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-5 shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center mr-3"
    }, /*#__PURE__*/React.createElement(Network, {
      className: "w-5 h-5 text-cyan-300"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, "\u65B0\u5EFA\u4E1A\u52A1\u9632\u533A"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500"
    }, "\u5728\u7EDF\u4E00\u5730\u56FE\u4E0A\u9009\u62E9\u6444\u50CF\u5934\u70B9\u4F4D\uFF0C\u5F62\u6210\u4E00\u4E2A\u53EF\u544A\u8B66\u3001\u53EF\u5DE1\u770B\u7684\u4E1A\u52A1\u9632\u533A"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setIsRegionWizardOpen(false),
      className: "text-slate-400 hover:text-white p-2"
    }, /*#__PURE__*/React.createElement(X, {
      className: "w-5 h-5"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "px-6 py-4 border-b border-slate-800 bg-slate-950/30 shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-3"
    }, wizardSteps.map((step, index) => /*#__PURE__*/React.createElement("div", {
      key: step,
      className: `text-left rounded-xl border px-3 py-2.5 ${regionWizardStep === index ? 'bg-cyan-950/45 border-cyan-500/60 text-cyan-200' : index < regionWizardStep ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-300' : 'bg-slate-950/50 border-slate-800 text-slate-400'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono mb-1"
    }, "STEP ", index + 1), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold"
    }, step))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar p-6"
    }, regionWizardStep === 0 && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-12 gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-7 bg-slate-950/40 border border-slate-800 rounded-2xl p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "\u57FA\u7840\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u9632\u533A\u540D\u79F0"), /*#__PURE__*/React.createElement("input", {
      value: regionDraft.name,
      onChange: e => updateRegionDraft({
        name: e.target.value
      }),
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u6240\u5C5E\u533A\u57DF"), /*#__PURE__*/React.createElement("select", {
      value: regionDraft.streetId,
      onChange: e => handleStreetChange(e.target.value),
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    }, REGION_STREET_OPTIONS.map(option => /*#__PURE__*/React.createElement("option", {
      key: option.id,
      value: option.id
    }, option.name)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u9632\u533A\u7EA7\u522B"), /*#__PURE__*/React.createElement("select", {
      value: regionDraft.riskLevel,
      onChange: e => updateRegionDraft({
        riskLevel: e.target.value
      }),
      className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none focus:border-cyan-500"
    }, REGION_RISK_OPTIONS.map(option => /*#__PURE__*/React.createElement("option", {
      key: option.id,
      value: option.id
    }, option.desc))))), /*#__PURE__*/React.createElement("div", {
      className: "mt-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u573A\u666F\u7C7B\u578B"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-4 gap-3"
    }, REGION_SCENE_OPTIONS.map(option => /*#__PURE__*/React.createElement("button", {
      key: option.id,
      type: "button",
      onClick: () => handleSceneChange(option.id),
      className: `rounded-xl border p-3 text-left transition-colors ${regionDraft.sceneType === option.id ? 'bg-cyan-950/40 border-cyan-500/60' : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'}`
    }, /*#__PURE__*/React.createElement(option.icon, {
      className: `w-5 h-5 mb-2 ${option.color}`
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, option.name), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-1"
    }, option.microTitle)))))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-5 bg-slate-950/40 border border-slate-800 rounded-2xl p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center mr-3"
    }, /*#__PURE__*/React.createElement(StepIcon, {
      className: "w-5 h-5 text-cyan-300"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, regionDraft.name || '未命名防区'), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500"
    }, streetOption.name, " / ", sceneOption.name))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-900/70 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u914D\u7F6E\u65B9\u5F0F"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-cyan-300"
    }, "\u6240\u5C5E\u533A\u57DF + \u573A\u666F\u7C7B\u578B + \u5730\u56FE\u70B9\u4F4D\u96C6\u5408"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-1"
    }, "\u9632\u533A\u4E0D\u5F3A\u4F9D\u8D56\u624B\u52A8\u753B\u8FB9\u754C\uFF0C\u4E3B\u8981\u901A\u8FC7\u6C11\u8B66\u5728\u5730\u56FE\u4E0A\u70B9\u9009\u6444\u50CF\u5934\u6765\u786E\u5B9A\u7EB3\u5165\u8303\u56F4\u3002")))), regionWizardStep === 1 && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-12 gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-8 bg-slate-950/40 border border-slate-800 rounded-2xl p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, "\u5730\u56FE\u70B9\u9009\u6444\u50CF\u5934"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mt-1"
    }, "\u5728\u5730\u56FE\u4E0A\u70B9\u51FB\u6444\u50CF\u5934\uFF0C\u5C06\u70B9\u4F4D\u7EB3\u5165\u5F53\u524D\u9632\u533A\u3002")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleSelectCandidateCameras,
      className: "text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 hover:bg-white transition-colors"
    }, "\u63A8\u8350\u70B9\u4F4D")), /*#__PURE__*/React.createElement("div", {
      className: "relative h-[470px] overflow-hidden rounded-xl border border-slate-300 bg-slate-100 shadow-inner"
    }, /*#__PURE__*/React.createElement("img", {
      src: XIANG_AN_MAP_IMAGE,
      alt: "\u7FD4\u5B89\u533A\u5730\u56FE\u793A\u610F",
      className: "absolute inset-0 h-full w-full object-cover"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-white/10"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 ring-1 ring-inset ring-white/50 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-3 top-3 rounded-md border border-slate-300 bg-white/90 px-2.5 py-1.5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500"
    }, regionDraft.name || `${streetOption.name}${sceneOption.name}防区`)), REGION_WIZARD_CAMERA_POOL.map(camera => {
      const checked = regionDraft.selectedCameraIds.includes(camera.id);
      const sameStreet = camera.streetId === regionDraft.streetId;
      const sameScene = camera.sceneType === regionDraft.sceneType;
      return /*#__PURE__*/React.createElement("button", {
        key: camera.id,
        type: "button",
        onClick: () => handleToggleWizardCamera(camera.id),
        style: wizardMapPositions[camera.id] || camera.pos,
        className: `group absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all ${checked ? 'scale-110' : sameStreet || sameScene ? 'opacity-100' : 'opacity-55 hover:opacity-100'}`
      }, /*#__PURE__*/React.createElement("span", {
        className: `relative flex h-8 w-8 items-center justify-center rounded-md border shadow-md ${checked ? 'bg-cyan-600 text-white border-cyan-700 shadow-cyan-500/30' : sameStreet || sameScene ? 'bg-white text-slate-700 border-slate-400 hover:border-cyan-500' : 'bg-white text-slate-400 border-slate-300'}`
      }, /*#__PURE__*/React.createElement(Video, {
        className: "w-4 h-4"
      }), /*#__PURE__*/React.createElement("span", {
        className: `absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-white ${camera.status === 'online' ? 'bg-emerald-500' : 'bg-slate-400'}`
      }), checked && /*#__PURE__*/React.createElement("span", {
        className: "absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white text-cyan-600 flex items-center justify-center border border-cyan-200"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-3 h-3"
      }))), /*#__PURE__*/React.createElement("span", {
        className: "pointer-events-none absolute left-1/2 top-9 hidden min-w-[128px] -translate-x-1/2 rounded-md border border-slate-300 bg-white px-2 py-1.5 text-left shadow-lg group-hover:block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "block text-[10px] font-bold text-slate-800"
      }, camera.name), /*#__PURE__*/React.createElement("span", {
        className: "mt-0.5 block text-[9px] text-slate-500"
      }, camera.code)));
    }), selectedWizardCameras.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-3 left-3 rounded-md border border-cyan-200 bg-white/90 px-2.5 py-1.5 text-[11px] text-slate-700 shadow-sm"
    }, "\u5DF2\u9009 ", selectedWizardCameras.length, " \u8DEF\u6444\u50CF\u5934")), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex items-center gap-3 text-[10px] text-slate-500"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-3 w-3 rounded-sm bg-cyan-600"
    }), "\u5DF2\u9009"), /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-3 w-3 rounded-sm border border-slate-400 bg-white"
    }), "\u53EF\u9009"), /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-2.5 w-2.5 rounded-full bg-emerald-500"
    }), "\u5728\u7EBF")), selectedWizardCameras.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 rounded-lg bg-red-950/30 border border-red-900/50 px-3 py-2 text-xs text-red-300"
    }, "\u8BF7\u81F3\u5C11\u9009\u62E9 1 \u8DEF\u6444\u50CF\u5934\u540E\u7EE7\u7EED\u3002")), /*#__PURE__*/React.createElement("div", {
      className: "col-span-4 bg-slate-950/40 border border-slate-800 rounded-2xl p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, "\u5DF2\u9009\u6444\u50CF\u5934"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mt-1"
    }, "\u8FD9\u4E9B\u70B9\u4F4D\u7EC4\u6210\u5F53\u524D\u9632\u533A\u3002")), /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-cyan-950/40 border border-cyan-800/50 px-2 py-1 text-[11px] text-cyan-300"
    }, selectedWizardCameras.length, " \u8DEF")), /*#__PURE__*/React.createElement("div", {
      className: "mb-3 rounded-xl border border-slate-800 bg-slate-950/55 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u9632\u533A\u5BF9\u8C61"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, regionDraft.name || '未命名防区'), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-[10px] text-slate-500"
    }, streetOption.name, " / ", sceneOption.name)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-800 bg-slate-950/45 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mb-2"
    }, "\u70B9\u4F4D\u6E05\u5355"), selectedWizardCameras.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "rounded-lg border border-dashed border-slate-800 px-4 py-10 text-center"
    }, /*#__PURE__*/React.createElement(CameraLens, {
      className: "w-8 h-8 text-slate-600 mx-auto mb-3"
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-300"
    }, "\u5C1A\u672A\u7EB3\u5165\u6444\u50CF\u5934"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 mt-2"
    }, "\u4ECE\u5DE6\u4FA7\u5730\u56FE\u70B9\u9009\u5373\u53EF\u3002")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 max-h-[310px] overflow-y-auto custom-scrollbar pr-1"
    }, selectedWizardCameras.map((camera, index) => /*#__PURE__*/React.createElement("div", {
      key: camera.id,
      className: "rounded-lg bg-slate-900/70 border border-slate-800 p-2.5 flex items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: `w-6 h-6 rounded-md ${index === 0 ? 'bg-cyan-600' : 'bg-slate-700'} flex items-center justify-center shrink-0`
    }, /*#__PURE__*/React.createElement(Video, {
      className: "w-3.5 h-3.5 text-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-100 truncate"
    }, camera.name)), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-1.5"
    }, camera.code, " / ", camera.coveragePart || camera.position)), /*#__PURE__*/React.createElement("div", {
      className: "text-right shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: `text-[10px] font-bold ${index === 0 ? 'text-cyan-300' : 'text-slate-400'}`
    }, index === 0 ? '主点位' : '补充'), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-1"
    }, camera.status === 'online' ? '在线' : '离线')))))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 rounded-xl border border-cyan-900/40 bg-cyan-950/20 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u544A\u8B66\u5F52\u5C5E"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-cyan-300"
    }, "\u6240\u9009\u70B9\u4F4D\u4EFB\u4E00\u8DEF\u62A5\u8B66\uFF0C\u5373\u5F52\u5C5E\u8BE5\u9632\u533A")))), regionWizardStep === 2 && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-12 gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-8 bg-slate-950/40 border border-slate-800 rounded-2xl p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "\u7ED1\u5B9A\u7B97\u6CD5\u80FD\u529B"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, REGION_CAPABILITY_LIBRARY.map(cap => {
      const checked = regionDraft.selectedCapIds.includes(cap.id);
      return /*#__PURE__*/React.createElement("button", {
        key: cap.id,
        type: "button",
        onClick: () => handleToggleWizardCap(cap.id),
        className: `rounded-xl border p-4 text-left transition-colors ${checked ? 'bg-cyan-950/35 border-cyan-500/50' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: `p-2 rounded-lg ${cap.bg} ${cap.color}`
      }, /*#__PURE__*/React.createElement(cap.icon, {
        className: "w-5 h-5"
      })), /*#__PURE__*/React.createElement("div", {
        className: "min-w-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold text-slate-100"
      }, stripPriorityLabel(cap.title)), /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] text-slate-500 leading-relaxed mt-1"
      }, cap.desc), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] text-slate-500 mt-2"
      }, "\u4F9D\u8D56\u611F\u77E5\u6E90\uFF1A", cap.sources.join(' / ')))));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-4 bg-slate-950/40 border border-slate-800 rounded-2xl p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "\u89C4\u5219\u8054\u52A8\u6458\u8981"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-900/70 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u5DF2\u9009\u7B97\u6CD5"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-cyan-300"
    }, selectedWizardCaps.length)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-900/70 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "ROI \u80FD\u529B"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-slate-200"
    }, selectedWizardCaps.some(cap => cap.hasRoi) ? '启用 ROI 围栏与阈值配置' : '无需 ROI，按行为模型触发')), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-900/70 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u544A\u8B66\u6D41\u5411"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-slate-200"
    }, isLevel0Risk(regionDraft.riskLevel) ? '大屏重点告警 + 处置台' : '研判席复核 + 巡看提醒'))))), regionWizardStep === 3 && /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-12 gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-7 bg-slate-950/40 border border-slate-800 rounded-2xl p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "\u542F\u7528\u786E\u8BA4"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, [['防区确定方式', `由民警在地图上选择的一组摄像头点位共同确定`], ['所属区域', streetOption.name], ['已纳入点位', uniqueSelectedCoverageParts.length ? uniqueSelectedCoverageParts.join('、') : '待选择摄像头后生成'], ['告警归属', `所选 ${selectedWizardCameras.length} 路摄像头中任一点位触发告警，自动归属为该防区预警`], ['算法规则', `${selectedWizardCaps.length} 种算法能力，${selectedWizardCaps.some(cap => cap.hasRoi) ? '支持 ROI 与阈值配置' : '按行为模型触发'}`], ['告警联动', isLevel0Risk(regionDraft.riskLevel) ? '进入实时预警消息流和重点警情处置' : isLevel2Risk(regionDraft.riskLevel) ? '进入常态巡看和区域监控' : '进入线索复核和监控巡看'], ['大屏展示', '启用后同步进入态势大屏防区列表、摄像头配置和规则配置']].map(([label, value]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "flex items-start gap-3 rounded-xl bg-slate-900/70 border border-slate-800 p-4"
    }, /*#__PURE__*/React.createElement(CheckCircle, {
      className: "w-5 h-5 text-cyan-300 shrink-0 mt-0.5"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400 mt-1"
    }, value)))))), /*#__PURE__*/React.createElement("div", {
      className: "col-span-5 bg-slate-950/40 border border-slate-800 rounded-2xl p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-slate-100 mb-4"
    }, "\u9632\u533A\u5361\u7247\u9884\u89C8"), /*#__PURE__*/React.createElement("div", {
      className: "rounded-2xl border border-cyan-900/50 bg-slate-900/80 p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center mr-3"
    }, /*#__PURE__*/React.createElement(StepIcon, {
      className: "w-5 h-5 text-cyan-300"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-base font-bold text-slate-100"
    }, regionDraft.name || '未命名防区'), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500"
    }, sceneOption.microTitle))), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-cyan-300/90 bg-cyan-950/30 border border-cyan-900/40 rounded-xl px-3 py-2"
    }, "\u7531 ", selectedWizardCameras.length, " \u8DEF\u6444\u50CF\u5934\u7EC4\u6210\u9632\u533A\u70B9\u4F4D\u96C6\u5408 / \u4EFB\u4E00\u70B9\u4F4D\u544A\u8B66\u5373\u5F52\u5C5E\u8BE5\u9632\u533A / \u5173\u8054\u7B97\u6CD5 ", selectedWizardCaps.length, " \u4E2A"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-950/60 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-slate-100"
    }, selectedWizardCameras.length)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-950/60 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u7B97\u6CD5"), /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-bold text-cyan-300"
    }, selectedWizardCaps.length)), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl bg-slate-950/60 border border-slate-800 p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mb-1"
    }, "\u8857\u9053"), /*#__PURE__*/React.createElement("div", {
      className: "text-base font-bold text-cyan-300"
    }, streetOption.name))))))), /*#__PURE__*/React.createElement("div", {
      className: "h-16 border-t border-slate-800 bg-slate-900 px-6 flex items-center justify-between shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => regionWizardStep === 0 ? setIsRegionWizardOpen(false) : setRegionWizardStep(prev => prev - 1),
      className: "px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm transition-colors"
    }, regionWizardStep === 0 ? '取消' : '上一步'), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, !wizardCanGoNext && /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-red-300"
    }, regionWizardStep === 1 ? '请先选择至少 1 路摄像头' : '请至少绑定 1 种算法能力'), regionWizardStep < 3 ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: !wizardCanGoNext,
      onClick: () => wizardCanGoNext && setRegionWizardStep(prev => prev + 1),
      className: `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${wizardCanGoNext ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/20' : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'}`
    }, "\u4E0B\u4E00\u6B65") : /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: !hasWizardCameras || !hasWizardCapabilities,
      onClick: handleFinishRegionWizard,
      className: `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${hasWizardCameras && hasWizardCapabilities ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/20' : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'}`
    }, "\u542F\u7528\u9632\u533A")))));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ops-density config-light flex h-full bg-[#0b1120] relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-56 bg-slate-900/80 border-r border-slate-800 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.2)] shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-14 flex items-center px-5 border-b border-slate-800/60"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white font-bold tracking-wide"
  }, "\u7CFB\u7EDF\u914D\u7F6E")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 py-3 flex flex-col gap-1 px-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfigSubView('region'),
    className: `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${configSubView === 'region' ? 'bg-cyan-600/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "w-5 h-5 mr-3"
  }), " \u533A\u57DF\u914D\u7F6E"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfigSubView('camera'),
    className: `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${configSubView === 'camera' ? 'bg-cyan-600/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`
  }, /*#__PURE__*/React.createElement(CameraLens, {
    className: "w-5 h-5 mr-3"
  }), " \u6444\u50CF\u5934\u914D\u7F6E"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfigSubView('rule'),
    className: `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${configSubView === 'rule' ? 'bg-cyan-600/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`
  }, /*#__PURE__*/React.createElement(Bell, {
    className: "w-5 h-5 mr-3"
  }), " \u9884\u8B66\u89C4\u5219\u7B56\u7565"), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 mt-3 border-t border-slate-800/70"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3 mb-2 text-[10px] text-slate-500 tracking-widest"
  }, "\u7528\u6237\u6743\u9650\u7BA1\u7406"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfigSubView('users'),
    className: `w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${configSubView === 'users' ? 'bg-cyan-600/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-5 h-5 mr-3"
  }), " \u7528\u6237\u7BA1\u7406"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfigSubView('roles'),
    className: `w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${configSubView === 'roles' ? 'bg-cyan-600/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`
  }, /*#__PURE__*/React.createElement(Shield, {
    className: "w-5 h-5 mr-3"
  }), " \u89D2\u8272\u6743\u9650\u7BA1\u7406")))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-5 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]"
  }, configSubView === 'region' && renderRegionConfig(), configSubView === 'camera' && renderCameraConfig(), configSubView === 'rule' && renderRuleConfig(), configSubView === 'users' && renderUserManagement(), configSubView === 'roles' && renderRoleManagement()), renderRoiModal(), renderCameraPointModal(), renderRegionWizardModal(), renderUserModal());
};

// ============================================================================
// 历史处置记录
// ============================================================================
const DispositionHistoryView = ({
  records,
  selectedRecordId,
  onSelectRecord
}) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [keyword, setKeyword] = useState('');
  const [recordViewMode, setRecordViewMode] = useState('records');
  const [analysisWindow, setAnalysisWindow] = useState('7d');
  const [analysisFocus, setAnalysisFocus] = useState('异常聚集');
  const filteredRecords = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return records.filter(record => {
      const matchStatus = statusFilter === 'all' || record.dispositionStatus === statusFilter;
      const matchKeyword = !q || record.alertType.toLowerCase().includes(q) || record.location.toLowerCase().includes(q) || record.regionName.toLowerCase().includes(q) || record.camera.toLowerCase().includes(q) || record.handler.toLowerCase().includes(q);
      return matchStatus && matchKeyword;
    });
  }, [records, statusFilter, keyword]);
  const analysisWindowOptions = [{
    id: '7d',
    label: '近7天'
  }, {
    id: '30d',
    label: '近30天'
  }, {
    id: 'all',
    label: '全部'
  }];
  const analysisFocusOptions = [{
    id: 'all',
    label: '全部事件'
  }, {
    id: '打架斗殴',
    label: '打架斗殴'
  }, {
    id: '涉稳讨薪',
    label: '涉稳讨薪'
  }, {
    id: '偷盗拉车门',
    label: '偷盗拉车门'
  }, {
    id: '异常聚集',
    label: '异常聚集'
  }];
  const analysisWindowLabel = analysisWindowOptions.find(option => option.id === analysisWindow)?.label || '近7天';
  const analysisFocusLabel = analysisFocusOptions.find(option => option.id === analysisFocus)?.label || analysisFocus;
  const parseRecordTs = record => new Date(record.reportedAt.replace(' ', 'T')).getTime();
  const latestRecordTs = useMemo(() => {
    if (!filteredRecords.length) return 0;
    return Math.max(...filteredRecords.map(record => parseRecordTs(record)));
  }, [filteredRecords]);
  const analysisWindowRecords = useMemo(() => {
    if (!filteredRecords.length) return [];
    if (analysisWindow === 'all') {
      return filteredRecords.slice().sort((a, b) => parseRecordTs(b) - parseRecordTs(a));
    }
    const days = analysisWindow === '30d' ? 30 : 7;
    const windowStartTs = latestRecordTs - (days - 1) * 24 * 60 * 60 * 1000;
    return filteredRecords.filter(record => parseRecordTs(record) >= windowStartTs).sort((a, b) => parseRecordTs(b) - parseRecordTs(a));
  }, [filteredRecords, analysisWindow, latestRecordTs]);
  const analysisScopedRecords = useMemo(() => {
    return analysisWindowRecords.filter(record => {
      if (analysisFocus === 'all') return true;
      return classifyEventType(record.alertType) === analysisFocus;
    });
  }, [analysisWindowRecords, analysisFocus]);
  const buildRankSeries = (list, getter) => {
    const map = list.reduce((acc, record) => {
      const key = getter(record) || '未命名';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(map).map(([label, count]) => ({
      label,
      count
    })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  };
  const analysisTrendSeries = useMemo(() => {
    const map = analysisScopedRecords.reduce((acc, record) => {
      const dateKey = record.reportedAt.slice(0, 10);
      acc[dateKey] = (acc[dateKey] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b)).map(([dateKey, count]) => ({
      label: `${dateKey.slice(5, 7)}/${dateKey.slice(8, 10)}`,
      count
    }));
  }, [analysisScopedRecords]);
  const analysisRegionSeries = useMemo(() => buildRankSeries(analysisScopedRecords, record => record.regionName), [analysisScopedRecords]);
  const analysisLocationSeries = useMemo(() => buildRankSeries(analysisScopedRecords, record => record.location), [analysisScopedRecords]);
  const analysisTypeSeries = useMemo(() => buildRankSeries(analysisWindowRecords, record => classifyEventType(record.alertType)), [analysisWindowRecords]);
  const analysisTopRegion = analysisRegionSeries[0] || null;
  const analysisTopLocation = analysisLocationSeries[0] || null;
  const analysisTopType = analysisTypeSeries[0] || null;
  const summary = useMemo(() => ({
    total: records.length,
    misreport: records.filter(record => record.dispositionStatus === '误报回流').length,
    fight: records.filter(record => classifyEventType(record.alertType) === '打架斗殴').length
  }), [records]);
  useEffect(() => {
    if (filteredRecords.length === 0) return;
    if (!filteredRecords.some(record => record.id === selectedRecordId)) {
      onSelectRecord(filteredRecords[0].id);
    }
  }, [filteredRecords, selectedRecordId, onSelectRecord]);
  const selectedRecord = filteredRecords.find(record => record.id === selectedRecordId) || filteredRecords[0] || null;
  const renderStatCard = ({
    label,
    value,
    note,
    tone = 'text-slate-100',
    shell = 'bg-slate-900/50 border-slate-800'
  }) => /*#__PURE__*/React.createElement("div", {
    className: `${shell} border rounded-xl p-3`
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-1"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: `text-lg font-bold ${tone}`
  }, value), note && /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1.5 leading-relaxed"
  }, note));
  const renderBarRows = (items, options = {}) => {
    const {
      emptyText = '当前筛选条件下暂无数据',
      color = 'bg-cyan-500',
      limit = 5
    } = options;
    const visibleItems = items.slice(0, limit);
    const maxCount = Math.max(...visibleItems.map(item => item.count), 1);
    if (!visibleItems.length) {
      return /*#__PURE__*/React.createElement("div", {
        className: "h-24 rounded-xl border border-dashed border-slate-800 flex items-center justify-center text-xs text-slate-500"
      }, emptyText);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, visibleItems.map((item, index) => /*#__PURE__*/React.createElement("div", {
      key: `${item.label}-${index}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs mb-1 gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 truncate"
    }, item.label), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-300 shrink-0"
    }, item.count, " \u8D77")), /*#__PURE__*/React.createElement("div", {
      className: "h-2 rounded-full bg-slate-800 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: `h-full rounded-full ${color}`,
      style: {
        width: `${Math.max(10, item.count / maxCount * 100)}%`
      }
    })))));
  };
  const renderTrendBars = () => {
    const maxCount = Math.max(...analysisTrendSeries.map(item => item.count), 1);
    if (!analysisTrendSeries.length) {
      return /*#__PURE__*/React.createElement("div", {
        className: "h-32 rounded-xl border border-dashed border-slate-800 flex items-center justify-center text-xs text-slate-500"
      }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u8D8B\u52BF\u6570\u636E");
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "h-36 flex items-end gap-2 border-b border-slate-800/80 pt-3"
    }, analysisTrendSeries.map(item => /*#__PURE__*/React.createElement("div", {
      key: item.label,
      className: "flex-1 min-w-0 flex flex-col items-center justify-end"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-cyan-300 mb-1.5"
    }, item.count), /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-[34px] rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.18)]",
      style: {
        height: `${Math.max(14, item.count / maxCount * 92)}px`
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 mt-1.5 whitespace-nowrap"
    }, item.label))));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ops-density flex h-full bg-[#0b1120] relative z-20 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-4 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex items-end justify-between gap-4 shrink-0"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-slate-100 mb-1.5"
  }, "\u5386\u53F2\u5904\u7F6E\u8BB0\u5F55"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "\u8FD9\u91CC\u4E3B\u8981\u770B\u8FD1\u671F\u5F02\u5E38\u4E8B\u4EF6\u7684\u7EDF\u8BA1\u5206\u5E03\u3001\u5730\u70B9\u70ED\u5EA6\u548C\u5904\u7F6E\u53F0\u8D26\uFF0C\u65B9\u4FBF\u5224\u65AD\u5F02\u5E38\u805A\u96C6\u7B49\u60C5\u51B5\u7684\u9AD8\u53D1\u533A\u57DF\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, recordViewMode === 'records' && /*#__PURE__*/React.createElement("div", {
    className: "hidden xl:flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u7D2F\u8BA1\u5904\u7F6E"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-100"
  }, summary.total), /*#__PURE__*/React.createElement("span", {
    className: "mx-1 h-4 w-px bg-slate-800"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u8BEF\u62A5\u56DE\u6D41"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-100"
  }, summary.misreport)), /*#__PURE__*/React.createElement("div", {
    className: "flex rounded-lg border border-slate-700 bg-slate-950 p-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setRecordViewMode('stats'),
    className: `px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${recordViewMode === 'stats' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`
  }, "\u7EDF\u8BA1\u5206\u6790"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setRecordViewMode('records'),
    className: `px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${recordViewMode === 'records' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`
  }, "\u5904\u7F6E\u53F0\u8D26")), recordViewMode === 'stats' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", {
    value: analysisWindow,
    onChange: e => setAnalysisWindow(e.target.value),
    className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-28 cursor-pointer"
  }, analysisWindowOptions.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.id,
    value: option.id
  }, option.label))), /*#__PURE__*/React.createElement("select", {
    value: analysisFocus,
    onChange: e => setAnalysisFocus(e.target.value),
    className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-40 cursor-pointer"
  }, analysisFocusOptions.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.id,
    value: option.id
  }, option.label)))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: keyword,
    onChange: e => setKeyword(e.target.value),
    placeholder: "\u68C0\u7D22\u5730\u70B9\u3001\u7C7B\u578B\u3001\u901A\u9053\u53F7\u3001\u5904\u7F6E\u4EBA",
    className: "w-72 bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-cyan-500"
  })), /*#__PURE__*/React.createElement("select", {
    value: statusFilter,
    onChange: e => setStatusFilter(e.target.value),
    className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-40 cursor-pointer"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), /*#__PURE__*/React.createElement("option", {
    value: "\u5DF2\u89E3\u9664"
  }, "\u5DF2\u89E3\u9664"), /*#__PURE__*/React.createElement("option", {
    value: "\u5904\u7F6E\u4E2D"
  }, "\u5904\u7F6E\u4E2D"), /*#__PURE__*/React.createElement("option", {
    value: "\u8BEF\u62A5\u56DE\u6D41"
  }, "\u8BEF\u62A5\u56DE\u6D41")))), recordViewMode === 'stats' ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, renderStatCard({
    label: '分析窗口',
    value: analysisWindowLabel,
    note: `当前聚焦：${analysisFocusLabel}`,
    tone: 'text-cyan-300',
    shell: 'bg-slate-900/50 border-slate-800'
  }), renderStatCard({
    label: '统计事件数',
    value: analysisScopedRecords.length,
    note: '按筛选条件汇总后的事件总量',
    tone: 'text-slate-100',
    shell: 'bg-slate-900/50 border-slate-800'
  }), renderStatCard({
    label: '高发区域',
    value: analysisTopRegion?.label || '--',
    note: analysisTopRegion ? `${analysisTopRegion.count} 起` : '暂无数据',
    tone: 'text-amber-300',
    shell: 'bg-amber-950/20 border-amber-900/40'
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 grid grid-cols-12 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-7 flex flex-col gap-3 min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, "\u8FD1\u671F\u53D1\u751F\u8D8B\u52BF"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u770B\u6700\u8FD1\u4E00\u6BB5\u65F6\u95F4\u5F02\u5E38\u4E8B\u4EF6\u662F\u5347\u9AD8\u8FD8\u662F\u56DE\u843D\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500"
  }, analysisTrendSeries.length, " \u4E2A\u65F6\u95F4\u70B9")), renderTrendBars()), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, "\u4E8B\u4EF6\u7C7B\u578B\u5206\u5E03"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u5F53\u524D\u7A97\u53E3\u5185\u4E0D\u540C\u4E8B\u4EF6\u7684\u5360\u6BD4\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500"
  }, analysisTypeSeries.length, " \u7C7B")), renderBarRows(analysisTypeSeries, {
    color: 'bg-cyan-500',
    limit: 5
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, "\u533A\u57DF\u9AD8\u53D1\u6392\u884C"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u770B\u5F02\u5E38\u805A\u96C6\u4E3B\u8981\u96C6\u4E2D\u5728\u54EA\u4E9B\u9632\u533A\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500"
  }, analysisRegionSeries.length, " \u4E2A\u533A\u57DF")), renderBarRows(analysisRegionSeries, {
    color: 'bg-amber-500',
    limit: 5
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-5 flex flex-col gap-3 min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, "\u5F02\u5E38\u805A\u96C6\u70ED\u533A"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u53EF\u76F4\u63A5\u770B\u5F02\u5E38\u805A\u96C6\u6700\u5E38\u53D1\u751F\u7684\u5177\u4F53\u4F4D\u7F6E\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500"
  }, analysisLocationSeries.length, " \u4E2A\u5730\u70B9")), renderBarRows(analysisLocationSeries, {
    color: 'bg-emerald-500',
    limit: 5
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl p-3 flex-1 min-h-0 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, "\u5206\u6790\u7ED3\u8BBA"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u53EF\u7528\u4E8E\u6C47\u62A5\u548C\u540E\u7EED\u6CBB\u7406\u52A8\u4F5C\u3002"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-800 bg-slate-950/60 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u6700\u9AD8\u53D1\u533A\u57DF"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100"
  }, analysisTopRegion?.label || '--'), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1"
  }, analysisTopRegion ? `${analysisTopRegion.count} 起，建议优先关注该防区的异常聚集和阈值策略。` : '暂无可分析数据')), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-800 bg-slate-950/60 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u6700\u9AD8\u53D1\u5730\u70B9"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100"
  }, analysisTopLocation?.label || '--'), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1"
  }, analysisTopLocation ? `${analysisTopLocation.count} 起，适合进一步查看该点位监控。` : '暂无可分析数据')), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-800 bg-slate-950/60 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u4E3B\u5BFC\u7C7B\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100"
  }, analysisTopType?.label || '--'), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1"
  }, analysisTopType ? `${analysisTopType.count} 起，说明近期主要关注的是这一类事件。` : '暂无可分析数据'))))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 flex gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[38%] min-w-[340px] bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-slate-200"
  }, "\u8BB0\u5F55\u5217\u8868"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, filteredRecords.length, " \u6761")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2.5"
  }, filteredRecords.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "h-full flex items-center justify-center text-slate-500 text-sm"
  }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u8BB0\u5F55") : filteredRecords.map(record => {
    const selected = record.id === selectedRecord?.id;
    const isP0 = record.severity === 'P0';
    return /*#__PURE__*/React.createElement("button", {
      key: record.id,
      type: "button",
      onClick: () => onSelectRecord(record.id),
      className: `w-full text-left rounded-xl border p-3 transition-all ${selected ? 'bg-cyan-950/30 border-cyan-700/60 shadow-[0_0_20px_rgba(8,145,178,0.12)]' : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-3 mb-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-100"
    }, stripPriorityLabel(record.alertType)), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-500 mt-1"
    }, record.regionName, " / ", record.location)), /*#__PURE__*/React.createElement("span", {
      className: `px-2 py-1 rounded-md text-[10px] font-bold border ${isP0 ? 'bg-red-950/50 text-red-300 border-red-800/50' : 'bg-orange-950/40 text-orange-300 border-orange-800/50'}`
    }, severityText(record.severity))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[11px] text-slate-400 mb-1.5"
    }, /*#__PURE__*/React.createElement("span", null, "\u5904\u7F6E\u4EBA\uFF1A", record.handler), /*#__PURE__*/React.createElement("span", null, record.handledAt)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: `px-2 py-1 rounded-md text-[10px] border ${record.dispositionStatus === '已解除' ? 'bg-emerald-950/30 text-emerald-300 border-emerald-800/40' : record.dispositionStatus === '误报回流' ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-amber-950/30 text-amber-300 border-amber-800/40'}`
    }, record.dispositionStatus)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0 bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col"
  }, !selectedRecord ? /*#__PURE__*/React.createElement("div", {
    className: "h-full flex items-center justify-center text-slate-500"
  }, "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u5904\u7F6E\u8BB0\u5F55") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-1"
  }, selectedRecord.id), /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-slate-100"
  }, stripPriorityLabel(selectedRecord.alertType)), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-400 mt-1 max-w-3xl line-clamp-2"
  }, selectedRecord.resultSummary)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-2 rounded-lg border border-slate-700 transition-colors"
  }, "\u5BFC\u51FA\u5904\u7F6E\u5355"))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 overflow-hidden p-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u544A\u8B66\u65F6\u95F4"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-slate-100"
  }, selectedRecord.reportedAt)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u5904\u7F6E\u65F6\u95F4"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-slate-100"
  }, selectedRecord.handledAt)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u5B8C\u6210\u65F6\u95F4"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-slate-100"
  }, selectedRecord.completedAt)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-1"
  }, "\u73B0\u573A\u6307\u6325"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-slate-100 truncate"
  }, selectedRecord.commander))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/40 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200 mb-3"
  }, "\u5904\u7F6E\u65F6\u95F4\u7EBF"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, selectedRecord.timeline.map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    className: "flex items-start"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-cyan-400 mt-1.5 mr-3 shrink-0"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-300 leading-relaxed"
  }, item))))))))))));
};

// ============================================================================
// 监控巡看
// ============================================================================
const SurveillanceView = ({
  activeRegions,
  regionsConfig,
  surveillanceFeeds,
  alerts,
  onAlertClick
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState('all');
  const [selectedFeedId, setSelectedFeedId] = useState('');
  const [monitorSearchQuery, setMonitorSearchQuery] = useState('');
  const [autoPatrol, setAutoPatrol] = useState(true);
  const [expandedFeedId, setExpandedFeedId] = useState('');
  const availableFeeds = useMemo(() => {
    return surveillanceFeeds.filter(feed => activeRegions.includes(feed.regionId));
  }, [activeRegions, surveillanceFeeds]);
  const filteredFeeds = useMemo(() => {
    const keyword = monitorSearchQuery.trim().toLowerCase();
    return availableFeeds.filter(feed => {
      const matchRegion = selectedRegionId === 'all' || feed.regionId === selectedRegionId;
      const matchKeyword = !keyword || feed.title.toLowerCase().includes(keyword) || feed.position.toLowerCase().includes(keyword) || feed.camera.toLowerCase().includes(keyword) || feed.regionName.toLowerCase().includes(keyword) || feed.tags.some(tag => tag.toLowerCase().includes(keyword));
      return matchRegion && matchKeyword;
    });
  }, [availableFeeds, selectedRegionId, monitorSearchQuery]);
  useEffect(() => {
    if (!filteredFeeds.length) {
      setSelectedFeedId('');
      return;
    }
    if (!filteredFeeds.some(feed => feed.id === selectedFeedId)) {
      setSelectedFeedId(filteredFeeds[0].id);
    }
  }, [filteredFeeds, selectedFeedId]);
  useEffect(() => {
    if (!autoPatrol || filteredFeeds.length <= 1) return;
    const timer = setInterval(() => {
      setSelectedFeedId(prev => {
        const currentIndex = filteredFeeds.findIndex(feed => feed.id === prev);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % filteredFeeds.length : 0;
        return filteredFeeds[nextIndex].id;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPatrol, filteredFeeds]);
  const handleSelectFeed = (feedId, stopPatrol = true) => {
    setSelectedFeedId(feedId);
    if (stopPatrol) setAutoPatrol(false);
  };
  const selectedFeed = filteredFeeds.find(feed => feed.id === selectedFeedId) || filteredFeeds[0] || null;
  const linkedAlert = selectedFeed?.linkedAlertId ? alerts.find(alert => alert.id === selectedFeed.linkedAlertId) : null;
  const unhandledAlerts = alerts.filter(alert => alert.status === 'unhandled' && activeRegions.includes(alert.regionId));
  const expandedFeed = surveillanceFeeds.find(feed => feed.id === expandedFeedId) || null;
  const expandedAlert = expandedFeed?.linkedAlertId ? alerts.find(alert => alert.id === expandedFeed.linkedAlertId) : null;
  const secondaryFeeds = useMemo(() => {
    return filteredFeeds.filter(feed => feed.id !== selectedFeedId).slice(0, 4);
  }, [filteredFeeds, selectedFeedId]);
  const handleExpandFeed = feedId => {
    setExpandedFeedId(feedId);
    setAutoPatrol(false);
  };
  const renderFeedFrame = (feed, isPrimary = false, compact = false) => {
    if (compact) {
      const statusColor = feed.status === 'online' ? 'bg-emerald-500' : 'bg-slate-500';
      return /*#__PURE__*/React.createElement("button", {
        key: feed.id,
        type: "button",
        onClick: () => handleSelectFeed(feed.id),
        className: `theme-dark-surface relative block w-full overflow-hidden rounded-xl border text-left transition-all ${selectedFeed?.id === feed.id ? 'border-cyan-500/60 shadow-[0_0_24px_rgba(34,211,238,0.18)]' : 'border-slate-800 hover:border-slate-700'} h-[168px]`,
        style: {
          aspectRatio: '1 / 1'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "absolute inset-0 bg-[#020617]"
      }), /*#__PURE__*/React.createElement("div", {
        className: "absolute top-3 left-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "bg-black/55 border border-white/10 text-white/85 text-[11px] px-2 py-1 rounded-md font-mono flex items-center"
      }, /*#__PURE__*/React.createElement("span", {
        className: `w-2 h-2 rounded-full mr-1.5 ${statusColor} ${feed.status === 'online' ? 'animate-pulse' : ''}`
      }), "REC ", feed.camera), /*#__PURE__*/React.createElement("span", {
        className: "bg-slate-950/70 border border-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-md"
      }, feed.position)));
    }
    const alert = feed.linkedAlertId ? alerts.find(item => item.id === feed.linkedAlertId) : null;
    const statusColor = feed.status === 'online' ? 'bg-emerald-500' : 'bg-slate-500';
    const overlayTone = feed.sceneType === 'crowd' ? 'from-cyan-500/10 via-transparent to-slate-950/70' : feed.sceneType === 'fight' ? 'from-red-500/10 via-transparent to-slate-950/75' : feed.sceneType === 'petition' ? 'from-orange-500/10 via-transparent to-slate-950/75' : 'from-slate-500/10 via-transparent to-slate-950/75';
    return /*#__PURE__*/React.createElement("button", {
      key: feed.id,
      type: "button",
      onClick: () => isPrimary ? handleExpandFeed(feed.id) : handleSelectFeed(feed.id),
      className: `theme-dark-surface relative block w-full overflow-hidden rounded-xl border text-left transition-all ${selectedFeed?.id === feed.id ? 'border-cyan-500/60 shadow-[0_0_24px_rgba(34,211,238,0.18)]' : 'border-slate-800 hover:border-slate-700'} ${isPrimary ? 'h-full' : 'h-[214px]'}`,
      style: !isPrimary ? {
        aspectRatio: '1 / 1'
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]"
    }), feed.image ? /*#__PURE__*/React.createElement("img", {
      src: feed.image,
      alt: feed.title,
      className: `absolute inset-0 w-full h-full object-cover ${isPrimary ? 'opacity-90' : 'opacity-80'} ${feed.sceneType === 'crowd' ? 'brightness-95 saturate-110' : 'brightness-90'}`
    }) : /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]"
    }), /*#__PURE__*/React.createElement("div", {
      className: `absolute inset-0 bg-gradient-to-b ${overlayTone}`
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 to-transparent"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent"
    }), feed.hasAlert && alert && /*#__PURE__*/React.createElement("div", {
      className: "absolute top-3 right-12 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-md border border-red-300/30 font-bold shadow-lg"
    }, "\u544A\u8B66\u4E2D"), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-3 left-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-black/55 border border-white/10 text-white/85 text-[11px] px-2 py-1 rounded-md font-mono flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: `w-2 h-2 rounded-full mr-1.5 ${statusColor} ${feed.status === 'online' ? 'animate-pulse' : ''}`
    }), "REC ", feed.camera), /*#__PURE__*/React.createElement("span", {
      className: "bg-slate-950/70 border border-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-md"
    }, feed.mode === 'patrol' ? '轮巡位' : '常驻位')), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: e => {
        e.stopPropagation();
        handleExpandFeed(feed.id);
      },
      className: "absolute top-3 right-3 z-20 h-8 w-8 rounded-lg border border-white/10 bg-black/55 text-white/85 flex items-center justify-center hover:bg-black/70 transition-colors",
      title: "\u653E\u5927\u67E5\u770B"
    }, /*#__PURE__*/React.createElement(Maximize2, {
      className: "w-4 h-4"
    })), feed.sceneType === 'crowd' && /*#__PURE__*/React.createElement("div", {
      className: "absolute left-[14%] top-[20%] right-[14%] bottom-[20%] border-2 border-red-500/75 bg-red-500/[0.07] shadow-[0_0_30px_rgba(239,68,68,0.22)]"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute left-4 bottom-4 right-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-end justify-between gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-white text-sm font-bold"
    }, feed.title), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, feed.position)), /*#__PURE__*/React.createElement("div", {
      className: "text-right shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-cyan-300"
    }, feed.regionName), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 mt-1"
    }, feed.status === 'online' ? '在线监控' : '离线监控')))));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ops-density flex h-full bg-[#0b1120] relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[250px] bg-slate-900/80 border-r border-slate-800 flex flex-col shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-16 px-5 border-b border-slate-800/60 flex items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-white font-bold tracking-wide"
  }, "\u76D1\u63A7\u5DE1\u770B"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1"
  }, "\u503C\u5B88\u5BA4\u591A\u753B\u9762\u5DE1\u770B"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-2"
  }, "\u6309\u5730\u70B9\u67E5\u627E"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: monitorSearchQuery,
    onChange: e => setMonitorSearchQuery(e.target.value),
    placeholder: "\u641C\u5730\u70B9\u3001\u70B9\u4F4D\u3001\u901A\u9053\u53F7",
    className: "w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-cyan-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-2"
  }, "\u4F8B\u5982\uFF1A\u591C\u5E02\u3001\u5357\u95E8\u3001\u8F66\u5E93\u3001MX-CAM-094")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-2"
  }, "\u9632\u533A\u7B5B\u9009"), /*#__PURE__*/React.createElement("select", {
    value: selectedRegionId,
    onChange: e => setSelectedRegionId(e.target.value),
    className: "w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u542F\u7528\u9632\u533A"), activeRegions.map(id => /*#__PURE__*/React.createElement("option", {
    key: id,
    value: id
  }, regionsConfig[id]?.name || id)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 uppercase tracking-[0.24em] mb-3"
  }, "\u67E5\u770B\u65B9\u5F0F"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-cyan-900/40 bg-cyan-950/20 px-3 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-cyan-200"
  }, "\u533A\u57DF\u76D1\u63A7\u603B\u89C8"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-400 mt-1 leading-relaxed"
  }, "\u5DE6\u4FA7\u5148\u9009\u62E9\u9632\u533A\uFF0C\u4E2D\u95F4\u5C55\u793A\u8BE5\u533A\u57DF\u5168\u90E8\u76D1\u63A7\uFF0C\u4E00\u8DEF\u4E3B\u753B\u9762\u653E\u5927\uFF0C\u5176\u4F59\u753B\u9762\u4F5C\u4E3A\u540C\u533A\u57DF\u8865\u5145\u89C2\u5BDF\u3002"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200"
  }, "\u81EA\u52A8\u8F6E\u5DE1"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAutoPatrol(prev => !prev),
    className: `w-12 h-6 rounded-full relative transition-colors ${autoPatrol ? 'bg-cyan-500' : 'bg-slate-700'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${autoPatrol ? 'left-7' : 'left-1'}`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 leading-relaxed"
  }, "\u5F00\u542F\u540E\u6BCF 6 \u79D2\u81EA\u52A8\u5207\u6362\u4E3B\u5C4F\uFF0C\u9002\u5408\u503C\u5B88\u5BA4\u6301\u7EED\u5DE1\u770B\u91CD\u70B9\u70B9\u4F4D\u3002"), selectedFeed && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-3 border-t border-slate-800/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-2"
  }, "\u5F53\u524D\u9501\u5B9A\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-cyan-300"
  }, selectedFeed.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mt-1"
  }, autoPatrol ? '当前为自动轮巡，点击点位后会自动锁定' : '当前已锁定该点位主屏查看'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-200 mb-3"
  }, "\u70B9\u4F4D\u6E05\u5355"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-[420px] overflow-y-auto custom-scrollbar pr-1"
  }, filteredFeeds.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-dashed border-slate-800 px-3 py-6 text-center text-[11px] text-slate-500"
  }, "\u6CA1\u6709\u5339\u914D\u5230\u5BF9\u5E94\u70B9\u4F4D\uFF0C\u8BF7\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5") : filteredFeeds.map(feed => /*#__PURE__*/React.createElement("button", {
    key: feed.id,
    type: "button",
    onClick: () => handleSelectFeed(feed.id),
    className: `w-full text-left rounded-lg border px-3 py-3 transition-colors ${selectedFeed?.id === feed.id ? 'bg-cyan-950/30 border-cyan-700/60' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-slate-200 truncate"
  }, feed.camera), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 truncate mt-1"
  }, feed.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-600 truncate mt-1"
  }, feed.position)), /*#__PURE__*/React.createElement("span", {
    className: `w-2.5 h-2.5 rounded-full shrink-0 ${feed.status === 'online' ? 'bg-emerald-500' : 'bg-slate-500'}`
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0 p-5 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-full gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-1"
  }, "\u5728\u7EBF\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-bold text-emerald-300"
  }, filteredFeeds.filter(feed => feed.status === 'online').length)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-1"
  }, "\u5F53\u524D\u672A\u5904\u7F6E\u544A\u8B66"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-bold text-red-400"
  }, unhandledAlerts.length)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mb-1"
  }, "\u4E3B\u5C4F\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-cyan-300 mt-1"
  }, selectedFeed ? selectedFeed.camera : '暂无'))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 flex gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-[1.5] min-w-0 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100 flex items-center"
  }, /*#__PURE__*/React.createElement(Live, {
    className: "w-4 h-4 mr-2 text-red-400"
  }), " \u4E3B\u5C4F\u5DE1\u770B"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u5F53\u524D\u805A\u7126\u70B9\u4F4D\uFF1A", selectedFeed?.title || '暂无')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => selectedFeed && handleExpandFeed(selectedFeed.id),
    disabled: !selectedFeed,
    className: `px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${selectedFeed ? 'bg-slate-950 border-slate-700 text-slate-200 hover:bg-slate-900' : 'bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed'}`
  }, "\u653E\u5927\u67E5\u770B"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => selectedFeed?.linkedAlertId && onAlertClick(alerts.find(alert => alert.id === selectedFeed.linkedAlertId)),
    disabled: !selectedFeed?.linkedAlertId,
    className: `px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${selectedFeed?.linkedAlertId ? 'bg-red-950/40 border-red-700/50 text-red-300 hover:bg-red-900/40' : 'bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed'}`
  }, selectedFeed?.linkedAlertId ? '打开关联告警' : '暂无关联告警'))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 flex items-center justify-center"
  }, selectedFeed ? renderFeedFrame(selectedFeed, true) : /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-xl border border-dashed border-slate-800 flex items-center justify-center text-slate-500"
  }, "\u6682\u65E0\u53EF\u5DE1\u770B\u70B9\u4F4D"))), /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100 flex items-center"
  }, /*#__PURE__*/React.createElement(Grid, {
    className: "w-4 h-4 mr-2 text-cyan-400"
  }), " \u5F53\u524D\u533A\u57DF\u5176\u4ED6\u76D1\u63A7"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u70B9\u51FB\u4EFB\u610F\u5C0F\u753B\u9762\u53EF\u5207\u6362\u4E3A\u4E3B\u5C4F\uFF0C\u4FBF\u4E8E\u5728\u540C\u4E00\u533A\u57DF\u5185\u6765\u56DE\u67E5\u770B\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500"
  }, secondaryFeeds.length, " \u8DEF")), secondaryFeeds.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-dashed border-slate-800 px-4 py-8 flex items-center justify-center text-[11px] text-slate-500"
  }, "\u5F53\u524D\u533A\u57DF\u6682\u65E0\u5176\u4ED6\u76D1\u63A7\u753B\u9762") : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, secondaryFeeds.map(feed => renderFeedFrame(feed, false, true))))))), /*#__PURE__*/React.createElement("div", {
    className: "w-[320px] shrink-0 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-slate-100 mb-4"
  }, "\u70B9\u4F4D\u4E0E\u544A\u8B66\u8054\u52A8"), selectedFeed ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-2"
  }, "\u5F53\u524D\u70B9\u4F4D"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100"
  }, selectedFeed.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, selectedFeed.regionName, " / ", selectedFeed.position)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-3"
  }, "\u5173\u8054\u544A\u8B66"), linkedAlert ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onAlertClick(linkedAlert),
    className: "w-full text-left rounded-lg border border-red-700/40 bg-red-950/30 p-3 hover:bg-red-900/30 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-red-300"
  }, "\u5F53\u524D\u76D1\u63A7\u5B58\u5728\u5173\u8054\u544A\u8B66"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-400 mt-1"
  }, linkedAlert.location), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mt-3 text-[10px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, linkedAlert.time), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-1 rounded bg-red-500 text-white font-bold"
  }, "\u67E5\u770B\u8BE6\u60C5"))) : /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-500"
  }, "\u5F53\u524D\u70B9\u4F4D\u65E0\u672A\u5904\u7F6E\u544A\u8B66\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-3"
  }, "\u503C\u5B88\u5FEB\u6377\u64CD\u4F5C"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAutoPatrol(false),
    className: "w-full px-3 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
  }, "\u9501\u5B9A\u5F53\u524D\u4E3B\u5C4F"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAutoPatrol(true),
    className: "w-full px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm border border-slate-700 transition-colors"
  }, "\u6062\u590D\u81EA\u52A8\u8F6E\u5DE1"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "w-full px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm border border-slate-700 transition-colors"
  }, "\u8C03\u53D6 30 \u79D2\u524D\u56DE\u770B")))) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex items-center justify-center text-slate-500"
  }, "\u6682\u65E0\u53EF\u5DE1\u770B\u70B9\u4F4D"))))), expandedFeed && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-[70] light-backdrop bg-slate-950/88 backdrop-blur-sm flex items-center justify-center p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-6xl rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_0_60px_rgba(2,6,23,0.65)] overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-14 px-5 border-b border-slate-800 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100"
  }, expandedFeed.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, expandedFeed.regionName, " / ", expandedFeed.camera, " / ", expandedFeed.position)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setExpandedFeedId(''),
    className: "h-9 w-9 rounded-lg border border-slate-700 bg-slate-950 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 grid grid-cols-[minmax(0,1fr)_320px] gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex items-center justify-center min-h-[640px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full",
    style: {
      aspectRatio: '1 / 1',
      maxWidth: 'min(76vh, 100%)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setExpandedFeedId(''),
    className: "theme-dark-surface relative block h-full w-full overflow-hidden rounded-2xl border border-cyan-700/40 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]"
  }), expandedFeed.image ? /*#__PURE__*/React.createElement("img", {
    src: expandedFeed.image,
    alt: expandedFeed.title,
    className: "absolute inset-0 w-full h-full object-cover opacity-95"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-4 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-black/60 border border-white/10 text-white/90 text-xs px-2.5 py-1 rounded-md font-mono flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-2 h-2 rounded-full mr-1.5 ${expandedFeed.status === 'online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`
  }), "REC ", expandedFeed.camera), /*#__PURE__*/React.createElement("span", {
    className: "bg-slate-950/75 border border-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-md"
  }, expandedFeed.mode === 'patrol' ? '轮巡位' : '常驻位')), expandedFeed.hasAlert && expandedAlert && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 right-4 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-md border border-red-300/30 font-bold shadow-lg"
  }, "\u544A\u8B66\u4E2D"), expandedFeed.sceneType === 'crowd' && /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[14%] top-[20%] right-[14%] bottom-[20%] border-2 border-red-500/75 bg-red-500/[0.07] shadow-[0_0_30px_rgba(239,68,68,0.22)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-white text-base font-bold"
  }, expandedFeed.title), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 mt-1"
  }, expandedFeed.position)), /*#__PURE__*/React.createElement("div", {
    className: "text-right shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-cyan-300"
  }, expandedFeed.regionName), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-400 mt-1"
  }, expandedFeed.status === 'online' ? '在线监控' : '离线监控')))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-500 mb-2"
  }, "\u70B9\u4F4D\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-slate-100"
  }, expandedFeed.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, expandedFeed.regionName, " / ", expandedFeed.position), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-1"
  }, "\u72B6\u6001\uFF1A", expandedFeed.status === 'online' ? '在线' : '离线')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      handleSelectFeed(expandedFeed.id);
      setExpandedFeedId('');
    },
    className: "w-full px-3 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
  }, "\u8BBE\u4E3A\u4E3B\u5C4F"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => expandedAlert && onAlertClick(expandedAlert),
    disabled: !expandedAlert,
    className: `w-full px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${expandedAlert ? 'bg-red-950/40 border-red-700/50 text-red-300 hover:bg-red-900/40' : 'bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed'}`
  }, expandedAlert ? '打开关联告警' : '暂无关联告警')))))));
};
const SurveillanceViewV2 = ({
  activeRegions,
  regionsConfig,
  surveillanceFeeds,
  alerts,
  onAlertClick,
  monitorFocus
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState('');
  const [autoPatrol, setAutoPatrol] = useState(true);
  const [expandedFeedId, setExpandedFeedId] = useState('');
  const [monitorSearchQuery, setMonitorSearchQuery] = useState('');
  const [patrolIndex, setPatrolIndex] = useState(0);
  const [mainFeedIndex, setMainFeedIndex] = useState(0);
  const [patrolInterval, setPatrolInterval] = useState(10);
  const availableFeeds = useMemo(() => {
    return surveillanceFeeds.filter(feed => activeRegions.includes(feed.regionId));
  }, [activeRegions, surveillanceFeeds]);
  const selectedRegion = selectedRegionId ? regionsConfig[selectedRegionId] : null;
  const buildRegionQuadFeeds = (regionId, sourceFeeds = []) => {
    const region = regionsConfig[regionId] || {};
    if (!sourceFeeds.length) return [];
    const fallback = sourceFeeds[0];
    const positions = ['主入口全景', '核心区域近景', '外围通道', '处置联动位'];
    return Array.from({
      length: 4
    }).map((_, index) => {
      const source = sourceFeeds[index] || fallback;
      const cameraPrefix = (source.camera || `${regionId.toUpperCase()}-CAM-001`).replace(/-\d+$/, '');
      return sourceFeeds[index] ? source : {
        ...source,
        id: `${regionId}-sim-${index + 1}`,
        camera: `${cameraPrefix}-${String(index + 1).padStart(3, '0')}`,
        title: `${region.name || source.regionName || regionId}${positions[index]}`,
        position: positions[index],
        status: 'online',
        hasAlert: false,
        linkedAlertId: '',
        tags: [...(source.tags || []), '模拟补位'],
        isSimulated: true,
        image: source.image
      };
    });
  };
  const selectedRegionFeeds = useMemo(() => {
    if (!selectedRegionId) return [];
    const feeds = availableFeeds.filter(feed => feed.regionId === selectedRegionId);
    return buildRegionQuadFeeds(selectedRegionId, feeds);
  }, [availableFeeds, selectedRegionId, regionsConfig]);
  const regionPatrolGroups = useMemo(() => {
    return activeRegions.map(regionId => {
      const region = regionsConfig[regionId] || {};
      const sourceFeeds = availableFeeds.filter(feed => feed.regionId === regionId);
      if (!sourceFeeds.length) return null;
      return {
        id: regionId,
        name: region.name || regionId,
        feeds: buildRegionQuadFeeds(regionId, sourceFeeds)
      };
    }).filter(Boolean);
  }, [activeRegions, availableFeeds, regionsConfig]);
  const patrolPages = useMemo(() => {
    return regionPatrolGroups.map(group => ({
      id: group.id,
      regionId: group.id,
      name: group.name,
      feeds: group.feeds.slice(0, 4)
    }));
  }, [regionPatrolGroups]);
  const activePatrolGroup = regionPatrolGroups.length ? patrolPages[patrolIndex % Math.max(patrolPages.length, 1)] : null;
  const displayFeeds = selectedRegionId ? selectedRegionFeeds : autoPatrol && activePatrolGroup && !monitorSearchQuery.trim() ? activePatrolGroup.feeds : availableFeeds;
  useEffect(() => {
    if (!autoPatrol || selectedRegionId || patrolPages.length <= 1) return undefined;
    const timer = setInterval(() => {
      setPatrolIndex(index => (index + 1) % patrolPages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [autoPatrol, selectedRegionId, patrolPages.length]);
  useEffect(() => {
    if (!autoPatrol || !displayFeeds.length) return undefined;
    const timer = setInterval(() => {
      setMainFeedIndex(index => (index + 1) % displayFeeds.length);
    }, patrolInterval * 1000);
    return () => clearInterval(timer);
  }, [autoPatrol, displayFeeds.length, patrolInterval]);
  useEffect(() => {
    setMainFeedIndex(0);
  }, [selectedRegionId, activePatrolGroup?.id]);
  useEffect(() => {
    if (!monitorFocus) return;
    if (monitorFocus.regionId) {
      setSelectedRegionId(monitorFocus.regionId);
    }
    setAutoPatrol(false);
    setMonitorSearchQuery('');
  }, [monitorFocus?.token]);
  const filteredDisplayFeeds = useMemo(() => {
    const keyword = monitorSearchQuery.trim().toLowerCase();
    if (!keyword) return displayFeeds;
    return displayFeeds.filter(feed => {
      const text = [feed.title, feed.position, feed.camera, feed.regionName, feed.sceneType, ...(feed.tags || [])].join(' ').toLowerCase();
      return text.includes(keyword);
    });
  }, [displayFeeds, monitorSearchQuery]);
  const expandedFeed = expandedFeedId ? availableFeeds.find(feed => feed.id === expandedFeedId) || displayFeeds.find(feed => feed.id === expandedFeedId) : null;
  const expandedAlert = expandedFeed ? alerts.find(alert => alert.id === expandedFeed.linkedAlertId) || alerts.find(alert => alert.regionId === expandedFeed.regionId && alert.camera === expandedFeed.camera) : null;
  const alertForFeed = feed => alerts.find(alert => alert.id === feed.linkedAlertId) || alerts.find(alert => alert.regionId === feed.regionId && alert.camera === feed.camera);
  const startAutoPatrol = () => {
    setSelectedRegionId('');
    setAutoPatrol(true);
  };
  const closeAutoPatrol = () => {
    setSelectedRegionId('');
    setAutoPatrol(false);
  };
  const selectRegion = regionId => {
    setSelectedRegionId(regionId);
    setAutoPatrol(true);
  };
  const currentMainFeed = filteredDisplayFeeds.length ? filteredDisplayFeeds[mainFeedIndex % filteredDisplayFeeds.length] : null;
  const supplementalFeeds = currentMainFeed ? filteredDisplayFeeds.filter(feed => feed.id !== currentMainFeed.id).slice(0, 3) : [];
  const supplementalSlots = currentMainFeed ? Array.from({
    length: 3
  }).map((_, index) => supplementalFeeds[index] || currentMainFeed) : [];
  const jumpMainFeed = step => {
    if (!filteredDisplayFeeds.length) return;
    setMainFeedIndex(index => (index + step + filteredDisplayFeeds.length) % filteredDisplayFeeds.length);
  };
  useEffect(() => {
    if (!monitorFocus || !filteredDisplayFeeds.length) return;
    const targetIndex = filteredDisplayFeeds.findIndex(feed => monitorFocus.feedId && feed.id === monitorFocus.feedId || monitorFocus.camera && feed.camera === monitorFocus.camera || monitorFocus.camera && feed.camera?.includes(monitorFocus.camera) || monitorFocus.camera && monitorFocus.camera.includes(feed.camera));
    setMainFeedIndex(targetIndex >= 0 ? targetIndex : 0);
  }, [monitorFocus?.token, monitorFocus?.camera, monitorFocus?.feedId, selectedRegionId, filteredDisplayFeeds]);
  const monitorPresetByFeed = feed => {
    if (feed.id.includes('maxiang-092')) {
      return {
        objectPosition: '58% 50%',
        marker: '冲突点'
      };
    }
    if (feed.id.includes('sim-2')) {
      return {
        objectPosition: '62% 42%',
        marker: feed.position || '近景'
      };
    }
    if (feed.id.includes('sim-3')) {
      return {
        objectPosition: '35% 55%',
        marker: feed.position || '外围'
      };
    }
    if (feed.id.includes('sim-4')) {
      return {
        objectPosition: '68% 62%',
        marker: feed.position || '联动位'
      };
    }
    if (feed.id.includes('maxiang')) {
      return {
        objectPosition: '45% 45%',
        marker: '十字路口'
      };
    }
    if (feed.id.includes('hospital-023')) {
      return {
        objectPosition: '58% 48%',
        marker: '雨棚外场'
      };
    }
    if (feed.id.includes('hospital')) {
      return {
        objectPosition: '52% 48%',
        marker: '急诊入口'
      };
    }
    if (feed.id.includes('gov')) {
      return {
        objectPosition: '50% 42%',
        marker: '南门广场'
      };
    }
    if (feed.id.includes('garage')) {
      return {
        objectPosition: '50% 54%',
        marker: 'B1车道'
      };
    }
    if (feed.id.includes('school')) {
      return {
        objectPosition: '48% 48%',
        marker: '校门通道'
      };
    }
    return {
      objectPosition: '50% 50%',
      marker: '主通道'
    };
  };
  const monitorAreaLabel = feed => feed.position || feed.sceneType || feed.regionName || feed.title || '监控区域';
  const renderCctvHud = (feed, preset, isOffline = false, isPatrolFocus = false) => {
    if (isOffline) {
      return /*#__PURE__*/React.createElement("div", {
        className: "absolute inset-0 bg-black/70"
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_70px_rgba(2,6,23,0.72)]"
    }), isPatrolFocus && /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-x-0 bottom-0 h-1 overflow-hidden bg-white/10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "patrol-sweep h-full w-1/2 rounded-full bg-cyan-300/90"
    })));
  };
  const renderMonitorFrame = (feed, options = {}) => {
    const {
      isMain = false,
      isSupplement = false
    } = options;
    const feedAlert = alertForFeed(feed);
    const hasRisk = Boolean(feedAlert && feedAlert.status !== 'resolved');
    const isOffline = feed.status !== 'online';
    const preset = monitorPresetByFeed(feed);
    const isPatrolFocus = isMain && autoPatrol;
    const areaLabel = monitorAreaLabel(feed);
    return /*#__PURE__*/React.createElement("button", {
      key: feed.id,
      type: "button",
      onClick: () => {
        if (isSupplement) {
          const targetIndex = filteredDisplayFeeds.findIndex(item => item.id === feed.id || item.camera === feed.camera);
          if (targetIndex >= 0) setMainFeedIndex(targetIndex);
          return;
        }
        setExpandedFeedId(feed.id);
      },
      className: `theme-dark-surface cctv-black-frame group relative h-full w-full overflow-hidden rounded-lg border bg-black text-left shadow-sm transition duration-300 hover:border-blue-300 hover:shadow-md ${isPatrolFocus ? 'border-cyan-300 ring-1 ring-cyan-300/70 shadow-lg shadow-cyan-100' : 'border-slate-800'}`
    }, /*#__PURE__*/React.createElement("img", {
      src: feed.image,
      alt: feed.title,
      className: "absolute inset-0 h-full w-full object-cover opacity-0",
      style: {
        objectPosition: preset.objectPosition
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "cctv-black-cover absolute inset-0 bg-black"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 opacity-[0.06]",
      style: {
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
        backgroundSize: '18px 18px'
      }
    }), renderCctvHud(feed, preset, isOffline, isPatrolFocus), /*#__PURE__*/React.createElement("div", {
      className: `absolute rounded-sm bg-black/35 font-medium leading-3 text-white/70 backdrop-blur-[1px] ${isSupplement ? 'left-1 top-1 max-w-[48%] px-1 py-[1px] text-[8px]' : 'left-1.5 top-1.5 max-w-[42%] px-1.5 py-[1px] text-[9px]'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, areaLabel)), hasRisk && /*#__PURE__*/React.createElement("span", {
      className: "absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ops-density flex h-full flex-col bg-slate-100 text-slate-900"
  }, /*#__PURE__*/React.createElement("header", {
    className: "border-b border-slate-200 bg-white px-4 py-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: startAutoPatrol,
    className: `shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium transition ${autoPatrol && !selectedRegionId ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`
  }, "\u81EA\u52A8\u8F6E\u5DE1"), regionPatrolGroups.map(group => {
    const isActive = selectedRegionId === group.id || !selectedRegionId && autoPatrol && activePatrolGroup?.regionId === group.id;
    return /*#__PURE__*/React.createElement("button", {
      key: group.id,
      type: "button",
      onClick: () => selectRegion(group.id),
      className: `shrink-0 rounded-md border px-3 py-1.5 text-xs transition ${isActive ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, group.name), /*#__PURE__*/React.createElement("span", {
      className: "ml-1 text-[10px] text-slate-400"
    }, group.feeds.length, "\u8DEF"));
  }), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto flex shrink-0 items-center gap-2 text-[11px] text-slate-500"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "h-3.5 w-3.5 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: monitorSearchQuery,
    onChange: event => setMonitorSearchQuery(event.target.value),
    placeholder: "\u641C\u70B9\u4F4D",
    className: "h-7 w-36 rounded-md border border-slate-200 bg-white px-2 text-xs outline-none focus:border-blue-400"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 flex items-center justify-between text-[11px] text-slate-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "\u5F53\u524D\u8F6E\u5DE1\uFF1A", selectedRegion ? selectedRegion.name : activePatrolGroup?.name || '未开启'), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400"
  }, selectedRegion ? `${filteredDisplayFeeds.length}路` : `${patrolPages.length ? patrolIndex % patrolPages.length + 1 : 0}/${patrolPages.length}`)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: autoPatrol && !selectedRegionId ? closeAutoPatrol : startAutoPatrol,
    className: "rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50"
  }, autoPatrol && !selectedRegionId ? '关闭自动轮巡' : '恢复自动轮巡'))), /*#__PURE__*/React.createElement("section", {
    className: "min-h-0 flex-1 bg-slate-100 p-3"
  }, !displayFeeds.length ? /*#__PURE__*/React.createElement("div", {
    className: "flex h-full min-h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-sm text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100"
  }, /*#__PURE__*/React.createElement(Video, {
    className: "h-6 w-6 text-slate-400"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-base font-semibold text-slate-800"
  }, "\u5F53\u524D\u672A\u5C55\u793A\u76D1\u63A7\u753B\u9762"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-6 text-slate-500"
  }, "\u53EF\u4EE5\u5F00\u542F\u81EA\u52A8\u8F6E\u5DE1\u67E5\u770B\u5404\u9632\u533A\u56DB\u5BAB\u683C\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u9876\u90E8\u9009\u62E9\u67D0\u4E2A\u9632\u533A\u67E5\u770B\u8BE5\u533A\u57DF\u63A2\u5934\u3002"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: startAutoPatrol,
    className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(PlayCircle, {
    className: "h-4 w-4"
  }), " \u5F00\u542F\u81EA\u52A8\u5DE1\u770B"))) : !filteredDisplayFeeds.length ? /*#__PURE__*/React.createElement("div", {
    className: "flex h-full min-h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-sm text-slate-500"
  }, "\u6CA1\u6709\u5339\u914D\u7684\u70B9\u4F4D\uFF0C\u53EF\u4EE5\u8C03\u6574\u641C\u7D22\u5173\u952E\u8BCD\u3002") : currentMainFeed ? /*#__PURE__*/React.createElement("div", {
    className: "grid h-full gap-3",
    style: {
      gridTemplateColumns: 'clamp(180px, 15vw, 220px) minmax(0, 1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid h-full grid-rows-3 gap-3 overflow-hidden"
  }, supplementalSlots.map((feed, index) => /*#__PURE__*/React.createElement("div", {
    key: `${feed.id}-supp-wrap-${index}`,
    className: "w-full min-h-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm",
    style: {
      aspectRatio: '1 / 1'
    }
  }, renderMonitorFrame({
    ...feed,
    id: `${feed.id}-supp-${index}`
  }, {
    isSupplement: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-0 min-w-0 flex-col gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-0 flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full overflow-hidden rounded-lg bg-black shadow-sm",
    style: {
      width: 'min(100%, calc((100vh - 230px) * 16 / 9))',
      aspectRatio: '16 / 9'
    }
  }, renderMonitorFrame(currentMainFeed, {
    isMain: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => jumpMainFeed(-1),
    className: "rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
  }, "\u25C0 \u4E0A\u4E00\u8DEF"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAutoPatrol(value => !value),
    className: "rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
  }, autoPatrol ? '⏸ 暂停轮巡' : '▶ 继续轮巡'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => jumpMainFeed(1),
    className: "rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
  }, "\u23ED \u4E0B\u4E00\u8DEF"), /*#__PURE__*/React.createElement("select", {
    value: patrolInterval,
    onChange: event => setPatrolInterval(Number(event.target.value)),
    className: "h-8 rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: 10
  }, "\u23F1 10s"), /*#__PURE__*/React.createElement("option", {
    value: 5
  }, "\u23F1 5s"), /*#__PURE__*/React.createElement("option", {
    value: 20
  }, "\u23F1 20s"))), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 text-right text-xs text-slate-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "truncate font-semibold text-slate-800"
  }, currentMainFeed.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 font-mono text-slate-500"
  }, currentMainFeed.camera, " \xB7 ", currentMainFeed.isSimulated ? '补充点位' : currentMainFeed.mode === 'fixed' ? '核心点位' : '补充点位'))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex h-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-sm text-slate-500"
  }, "\u6CA1\u6709\u5339\u914D\u7684\u70B9\u4F4D\uFF0C\u53EF\u4EE5\u8C03\u6574\u641C\u7D22\u5173\u952E\u8BCD\u3002")), expandedFeed && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-6 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-[78vh] w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 bg-slate-950"
  }, /*#__PURE__*/React.createElement("img", {
    src: expandedFeed.image,
    alt: expandedFeed.title,
    className: "absolute inset-0 h-full w-full object-cover opacity-0",
    style: {
      objectPosition: monitorPresetByFeed(expandedFeed).objectPosition
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cctv-black-cover absolute inset-0 bg-black"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-[0.06]",
    style: {
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
      backgroundSize: '18px 18px'
    }
  }), renderCctvHud(expandedFeed, monitorPresetByFeed(expandedFeed), expandedFeed.status !== 'online')), /*#__PURE__*/React.createElement("aside", {
    className: "flex w-[320px] flex-col border-l border-slate-200 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-slate-900"
  }, "\u70B9\u4F4D\u8BE6\u60C5"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setExpandedFeedId(''),
    className: "rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
  }, /*#__PURE__*/React.createElement(X, {
    className: "h-5 w-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 overflow-y-auto p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-slate-200 bg-slate-50 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-400"
  }, "\u6240\u5C5E\u9632\u533A"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-medium text-slate-800"
  }, expandedFeed.regionName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-400"
  }, "\u5728\u7EBF\u72B6\u6001"), /*#__PURE__*/React.createElement("div", {
    className: `mt-1 font-medium ${expandedFeed.status === 'online' ? 'text-emerald-600' : 'text-slate-500'}`
  }, expandedFeed.status === 'online' ? '在线' : '离线')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-400"
  }, "\u901A\u9053\u53F7"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-mono font-medium text-slate-800"
  }, expandedFeed.camera)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-400"
  }, "\u573A\u666F"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-medium text-slate-800"
  }, expandedFeed.sceneType || '业务巡看')))), expandedAlert ? /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-red-200 bg-red-50 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm font-semibold text-red-700"
  }, /*#__PURE__*/React.createElement(Bell, {
    className: "h-4 w-4"
  }), " \u5173\u8054\u544A\u8B66"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm font-medium text-slate-900"
  }, stripPriorityLabel(expandedAlert.type)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-xs text-slate-500"
  }, expandedAlert.location, " \xB7 ", alertDateTimeValue(expandedAlert)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setExpandedFeedId('');
      onAlertClick(expandedAlert);
    },
    className: "mt-3 w-full rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
  }, "\u67E5\u770B\u544A\u8B66\u8BE6\u60C5")) : /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-500"
  }, "\u5F53\u524D\u70B9\u4F4D\u6682\u65E0\u672A\u5904\u7F6E\u544A\u8B66\u3002"))))));
};

// ============================================================================
// 顶级入口组件 (App)
// ============================================================================
function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [activeAlert, setActiveAlert] = useState(null);
  const [dispositionRecords, setDispositionRecords] = useState(INITIAL_DISPOSITION_RECORDS);
  const [reviewReports, setReviewReports] = useState(INITIAL_REVIEW_REPORTS);
  const [selectedRecordId, setSelectedRecordId] = useState(INITIAL_DISPOSITION_RECORDS[0]?.id || '');
  const [selectedReportId, setSelectedReportId] = useState(INITIAL_REVIEW_REPORTS[0]?.id || '');
  const [regionsConfig, setRegionsConfig] = useState(ALL_REGIONS_CONFIG);
  const [customSurveillanceFeeds, setCustomSurveillanceFeeds] = useState([]);
  const [activeRegions, setActiveRegions] = useState(['hospital', 'gov', 'maxiang']);
  const [monitorFocus, setMonitorFocus] = useState(null);
  const surveillanceFeeds = useMemo(() => [...SURVEILLANCE_FEEDS, ...customSurveillanceFeeds], [customSurveillanceFeeds]);
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const buildFeedsFromRegion = (region, selectedCameras = []) => region.cameras.map((camera, index) => {
    const sourceCamera = selectedCameras[index] || {};
    const cameraCode = camera.name.match(/[A-Z]{2,}(?:-[A-Z]+)?-\d+/)?.[0] || `${region.id.toUpperCase()}-CAM-${String(index + 1).padStart(3, '0')}`;
    const riskLevel = normalizeRiskLevel(region.riskLevel);
    return {
      id: `feed-${region.id}-${index + 1}`,
      regionId: region.id,
      regionName: region.name,
      camera: cameraCode,
      title: sourceCamera.name || camera.name.replace(/\s*\(.*?\)\s*/g, ''),
      position: sourceCamera.coveragePart || sourceCamera.position || region.microTitle,
      status: sourceCamera.status || 'online',
      priority: riskLevelDisplay(riskLevel),
      mode: index === 0 ? 'fixed' : 'patrol',
      sceneType: region.sceneName?.includes('重点单位') ? 'petition' : region.sceneName?.includes('车库') ? 'garage' : region.sceneName?.includes('校园') ? 'campus' : 'crowd',
      image: region.sceneName?.includes('夜市') ? MAXIANG_NIGHT_MARKET_IMAGE : region.sceneName?.includes('重点单位') ? GOVERNMENT_GATE_IMAGE : GENERIC_SCENE_IMAGE,
      hasAlert: false,
      linkedAlertId: '',
      tags: [region.sceneName || '业务防区', region.streetName || '属地网格', index === 0 ? '核心点位' : '补充观察'],
      summary: `${region.name}已按业务对象和摄像头覆盖完成定义，纳入区域监控总览。`
    };
  });
  const buildAlertFromRegion = (region, selectedCameras = []) => {
    const riskLevel = normalizeRiskLevel(region.riskLevel);
    if (riskLevel === '2') return null;
    const stamp = new Date();
    const pad = value => String(value).padStart(2, '0');
    const primaryCamera = selectedCameras[0] || {};
    const cameraCode = region.cameras[0]?.name.match(/[A-Z]{2,}(?:-[A-Z]+)?-\d+/)?.[0] || `${region.id.toUpperCase()}-CAM-001`;
    const severity = riskLevelToSeverity(riskLevel);
    const isP0 = severity === 'P0';
    return {
      id: `AL-${region.id.toUpperCase()}-${pad(stamp.getHours())}${pad(stamp.getMinutes())}`,
      regionId: region.id,
      date: `${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}`,
      time: `${pad(stamp.getHours())}:${pad(stamp.getMinutes())}:${pad(stamp.getSeconds())}`,
      location: primaryCamera.coveragePart || primaryCamera.position || region.name,
      type: `${region.sceneName || '业务防区'}布控启用提示 (${isP0 ? 'P0' : 'P1'})`,
      level: isP0 ? 'critical' : 'medium',
      severity: isP0 ? 'P0' : 'P1',
      status: 'unhandled',
      img: `${region.name}布控预览`,
      conf: '92%',
      camera: cameraCode,
      previewImage: region.sceneName?.includes('夜市') ? MAXIANG_NIGHT_MARKET_IMAGE : region.sceneName?.includes('重点单位') ? GOVERNMENT_GATE_IMAGE : GENERIC_SCENE_IMAGE,
      urgency: isP0 ? '新防区重点布控已启用' : '新防区线索布控已启用',
      aiAdvice: `已完成【${region.name}】业务防区定义，并同步启用 ${region.caps.length} 种算法能力。该防区由 ${region.cameras.length} 路摄像头点位组成，任一点位触发告警都会归属为该防区预警。建议值班员在大屏确认防区状态，并进入规则配置检查 ROI 与阈值。`,
      clipRange: {
        pre: 10,
        post: 20
      },
      metrics: [{
        label: '纳入点位',
        value: `${region.cameras.length}路`,
        accent: 'text-cyan-400',
        note: '点位集合定义防区'
      }, {
        label: '算法能力',
        value: `${region.caps.length}种`,
        accent: 'text-yellow-400',
        note: '已进入规则配置'
      }],
      sceneSummary: `新建业务防区已进入实战闭环：点位集合、算法规则、告警归属和大屏展示已同步。`,
      actions: ['查看防区状态', '进入规则配置', '打开监控巡看']
    };
  };
  const handleCreateRegion = (region, selectedCameras = []) => {
    setRegionsConfig(prev => ({
      ...prev,
      [region.id]: region
    }));
    setCustomSurveillanceFeeds(prev => [...prev, ...buildFeedsFromRegion(region, selectedCameras)]);
    const nextAlert = buildAlertFromRegion(region, selectedCameras);
    if (nextAlert) {
      setAlerts(prev => [nextAlert, ...prev]);
    }
    setActiveRegions(prev => prev.includes(region.id) ? prev : [...prev, region.id]);
  };
  const handleAddCameraPoint = draft => {
    const region = regionsConfig[draft.regionId];
    if (!region) return;
    const nextIndex = region.cameras.length + 1;
    const cameraCode = draft.code.trim();
    const pointName = draft.name.trim();
    const nextCamera = {
      id: `c${nextIndex}`,
      name: `${cameraCode} (${pointName})`,
      code: cameraCode,
      pos: {
        top: `${28 + nextIndex * 9 % 52}%`,
        left: `${28 + nextIndex * 13 % 48}%`
      },
      coveragePart: draft.alertCategory.trim() || region.microTitle || '新增覆盖部位',
      positionName: draft.alertCategory.trim() || region.microTitle || '新增覆盖部位',
      role: draft.isCore ? '核心点位' : '补充点位',
      isAlert: draft.isCore,
      label: draft.alertCategory.trim() ? `${draft.alertCategory.trim()} 关联点` : '新增点位',
      status: draft.status,
      installType: draft.installType || '未填写',
      direction: draft.direction || '未填写',
      isGathering: draft.alertCategory.includes('聚集'),
      isFight: draft.alertCategory.includes('打架'),
      isPetition: draft.alertCategory.includes('涉稳') || draft.alertCategory.includes('横幅')
    };
    const updatedRegion = {
      ...region,
      cameras: [...region.cameras, nextCamera]
    };
    setRegionsConfig(prev => ({
      ...prev,
      [draft.regionId]: updatedRegion
    }));
    setCustomSurveillanceFeeds(prev => {
      const feed = {
        id: `feed-${draft.regionId}-${nextCamera.id}-${Date.now()}`,
        regionId: draft.regionId,
        regionName: region.name,
        camera: cameraCode,
        title: pointName,
        position: nextCamera.coveragePart,
        status: draft.status,
        priority: riskLevelDisplay(region.riskLevel),
        mode: draft.isCore ? 'fixed' : 'patrol',
        sceneType: draft.alertCategory.includes('打架') ? 'fight' : draft.alertCategory.includes('涉稳') ? 'petition' : draft.alertCategory.includes('拉车门') ? 'garage' : 'crowd',
        image: region.name.includes('夜市') ? MAXIANG_NIGHT_MARKET_IMAGE : region.name.includes('政府') ? GOVERNMENT_GATE_IMAGE : GENERIC_SCENE_IMAGE,
        hasAlert: false,
        linkedAlertId: '',
        tags: [draft.alertCategory || '新增点位', draft.isCore ? '核心点位' : '补充观察'],
        summary: `${pointName} 已由统一摄像头平台新增，纳入 ${region.name} 监控巡看。`
      };
      return [...prev, feed];
    });
    return nextCamera.id;
  };
  const handleOpenRegionMonitor = (alert, linkedFeed) => {
    if (!alert) return;
    const regionId = linkedFeed?.regionId || alert.regionId || '';
    const camera = linkedFeed?.camera || alert.camera || '';
    if (regionId) {
      setActiveRegions(prev => prev.includes(regionId) ? prev : [...prev, regionId]);
    }
    setMonitorFocus({
      token: Date.now(),
      regionId,
      camera,
      feedId: linkedFeed?.id || '',
      alertId: alert.id
    });
    setActiveAlert(null);
    setCurrentView('surveillance');
  };
  const buildDispositionRecordFromAlert = (alert, newStatus) => {
    const stamp = new Date();
    const pad = value => String(value).padStart(2, '0');
    const datePart = `${stamp.getFullYear()}${pad(stamp.getMonth() + 1)}${pad(stamp.getDate())}`;
    const timePart = `${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())} ${pad(stamp.getHours())}:${pad(stamp.getMinutes())}:${pad(stamp.getSeconds())}`;
    const regionName = regionsConfig[alert.regionId]?.name || '未归类防区';
    const isP0 = alert.severity === 'P0';
    const isGathering = alert.type.includes('聚集') && !alert.type.includes('涉稳');
    const isCompositeGathering = Boolean(alert.behaviorSignals?.length);
    const isFight = alert.type.includes('打斗');
    const reportId = newStatus === 'dispatched' && isP0 ? `RP-${datePart}-${alert.id.slice(-3)}` : '';
    const isReviewed = newStatus === 'reviewing';
    const fightWindow = alert.fightWindow || {};
    return {
      id: `HD-${datePart}-${alert.id.slice(-3)}`,
      alertId: alert.id,
      reportId,
      alertType: alert.type,
      severity: alert.severity,
      regionName,
      location: alert.location,
      camera: alert.camera,
      source: isCompositeGathering ? '复合异常聚集识别' : isGathering ? '聚集密度识别' : alert.type.includes('涉稳') ? '涉稳聚集识别' : isFight ? '冲突行为识别' : '智能研判引擎',
      reportedAt: `${datePart.slice(0, 4)}-${datePart.slice(4, 6)}-${datePart.slice(6, 8)} ${alert.time}`,
      handledAt: timePart,
      completedAt: newStatus === 'ignored' ? timePart : '',
      dispositionStatus: newStatus === 'dispatched' ? '处置中' : newStatus === 'reviewing' ? '待人工复核' : '误报回流',
      reviewStatus: newStatus === 'dispatched' && isP0 ? '待复盘' : newStatus === 'reviewing' ? '待人工复核' : '无需复盘',
      handler: isCompositeGathering ? '新店巡防联动组' : isFight ? '马巷巡逻二组' : isGathering ? '马巷巡逻二组' : alert.type.includes('涉稳') ? '情指联动专班' : '值班研判员',
      commander: isP0 ? '分局值班指挥长' : '情指值守台',
      resultSummary: newStatus === 'dispatched' ? `已根据 ${alert.type} 生成处置记录，等待现场反馈与解除结果回填。` : newStatus === 'reviewing' ? `该条 ${alert.type} 已转人工复核，由研判席继续判定是否派警。` : `该条 ${alert.type} 已确认为无效线索，记录已回流用于算法优化。`,
      actions: newStatus === 'dispatched' ? alert.actions && alert.actions.length ? alert.actions.slice(0, 3) : ['派发现场处置', '通知属地联动', '等待反馈回传'] : newStatus === 'reviewing' ? ['人工复核视频', '补充关键帧判定', '再决定是否派警'] : ['人工复核', '标记正常活动', '回流负样本'],
      evidence: [`${(alert.clipRange?.pre || 15) + (alert.clipRange?.post || 30)}秒事件片段`, `${alert.camera} 告警截图`, newStatus === 'dispatched' ? '待上传处置反馈材料' : newStatus === 'reviewing' ? '人工复核中' : '人工复核结论'],
      metrics: alert.metrics && alert.metrics.length ? alert.metrics.slice(0, 3).map(metric => ({
        label: metric.label,
        value: metric.value,
        note: metric.note
      })) : [{
        label: '系统置信度',
        value: alert.conf,
        note: '来源于模型输出'
      }, {
        label: '告警等级',
        value: alert.severity,
        note: alert.urgency
      }, {
        label: '处理状态',
        value: newStatus === 'dispatched' ? '已派单' : '已忽略',
        note: '待后续闭环更新'
      }],
      timeline: newStatus === 'dispatched' ? [`${alert.time} 系统触发 ${alert.type}`, `${timePart.slice(11)} 值班员确认并下发处置`, '待现场反馈处置结果'] : newStatus === 'reviewing' ? [`${alert.time} 系统触发 ${alert.type}`, `${timePart.slice(11)} 进入人工复核队列`, '等待研判席确认'] : [`${alert.time} 系统触发 ${alert.type}`, `${timePart.slice(11)} 人工复核确认为正常活动`, '已回流算法样本库'],
      notes: newStatus === 'dispatched' ? '该记录由系统自动生成，建议在现场反馈后补充完成时刻与效果评估。' : newStatus === 'reviewing' ? '该记录已转人工复核，建议结合关键帧和视频片段继续判定。' : '建议保留该样本用于后续阈值与特征优化。',
      tags: newStatus === 'dispatched' ? [alert.severity, '自动生成', isCompositeGathering ? '复合异常聚集' : isGathering ? '聚集场景' : '重点告警'] : newStatus === 'reviewing' ? ['人工复核', '打斗场景', fightWindow.title || '快速处置'] : ['误报回流', '自动生成']
    };
  };
  const buildReviewReportFromRecord = record => ({
    id: record.reportId,
    recordId: record.id,
    title: `${record.location}事件复盘`,
    severity: record.severity,
    status: '待复盘',
    owner: record.regionName,
    stageNote: '系统自动生成初稿',
    generatedAt: record.handledAt,
    location: record.location,
    type: record.alertType,
    eventWindow: `${record.reportedAt} - 待补充解除时间`,
    summary: `系统已依据 ${stripPriorityLabel(record.alertType)} 自动生成复盘初稿，待处置完成后补充现场反馈、联动效果和策略修正项。`,
    keyFindings: ['当前报告基于告警指标和处置动作自动生成。', '建议补充现场反馈后再确认处置有效性与风险回落情况。', '可根据本次结论继续优化 ROI、阈值和现场联动流程。'],
    timeline: record.timeline,
    recommendations: ['补充处置完成时间和现场恢复指标。', '确认是否需要调整该场景的 ROI 或人流阈值。', '将有效经验纳入同类场景专项预案。'],
    keywords: [record.severity, record.regionName, '自动复盘初稿'],
    conclusion: '待现场闭环信息补充后形成正式复盘结论。'
  });
  const handleResolveAlert = (id, newStatus) => {
    const resolvedAlert = alerts.find(a => a.id === id);
    if (!resolvedAlert) return;
    const nextAlerts = alerts.map(a => a.id === id ? {
      ...a,
      status: newStatus
    } : a);
    const nextRecord = buildDispositionRecordFromAlert(resolvedAlert, newStatus);
    const nextRecords = [nextRecord, ...dispositionRecords.filter(record => record.id !== nextRecord.id)];
    setAlerts(nextAlerts);
    setDispositionRecords(nextRecords);
    setSelectedRecordId(nextRecord.id);
    if (nextRecord.reportId) {
      const nextReport = buildReviewReportFromRecord(nextRecord);
      const nextReports = [nextReport, ...reviewReports.filter(report => report.id !== nextReport.id)];
      setReviewReports(nextReports);
      setSelectedReportId(nextReport.id);
    }
    setActiveAlert(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "config-light h-screen w-full bg-[#eef3f8] text-slate-800 font-sans flex overflow-hidden"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "w-16 bg-white border-r border-slate-200 flex flex-col items-center py-4 shrink-0 z-40 relative shadow-[4px_0_18px_rgba(15,23,42,0.08)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 p-1.5 rounded-lg border border-red-200 mb-8 shadow-sm"
  }, /*#__PURE__*/React.createElement(Shield, {
    className: "w-5 h-5 text-red-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col gap-4 w-full px-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('dashboard'),
    className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === 'dashboard' ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-inner' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`
  }, /*#__PURE__*/React.createElement(LayoutDashboard, {
    className: "w-5 h-5 mb-1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px]"
  }, "\u5927\u5C4F\u6001\u52BF")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMonitorFocus(null);
      setCurrentView('surveillance');
    },
    className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === 'surveillance' ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-inner' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`
  }, /*#__PURE__*/React.createElement(Video, {
    className: "w-5 h-5 mb-1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px]"
  }, "\u76D1\u63A7\u5DE1\u770B")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('records'),
    className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === 'records' ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-inner' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`
  }, /*#__PURE__*/React.createElement(ListCheck, {
    className: "w-5 h-5 mb-1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px]"
  }, "\u5904\u7F6E\u8BB0\u5F55")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('config'),
    className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all mt-auto ${currentView === 'config' ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-inner' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "w-5 h-5 mb-1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px]"
  }, "\u7CFB\u7EDF\u914D\u7F6E")))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col overflow-hidden relative"
  }, (currentView === 'dashboard' || currentView === 'surveillance' || currentView === 'records') && /*#__PURE__*/React.createElement("header", {
    className: "h-14 border-b border-slate-200 bg-white backdrop-blur-sm flex items-center justify-between px-6 z-10 shrink-0 shadow-sm"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-bold flex items-center tracking-widest"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-red-700"
  }, "\u7FD4\u5B89\u533A\u793E\u4F1A\u9762\u6CBB\u5B89\u9632\u63A7\u667A\u80FD\u611F\u77E5\u7CFB\u7EDF"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-cyan-700 ml-4 font-normal tracking-normal border border-cyan-200 bg-cyan-50 px-2 py-0.5 rounded"
  }, currentView === 'dashboard' ? `${activeRegions.length} 重点防区运行中` : currentView === 'surveillance' ? `${surveillanceFeeds.filter(feed => activeRegions.includes(feed.regionId) && feed.status === 'online').length} 路在线巡看` : `${dispositionRecords.length} 条处置记录`)), /*#__PURE__*/React.createElement("div", {
    className: "text-red-700 font-mono text-base tracking-widest flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 bg-red-500 rounded-full mr-3 animate-ping"
  }), currentTime.toLocaleTimeString('zh-CN', {
    hour12: false
  }))), /*#__PURE__*/React.createElement("main", {
    className: `flex-1 overflow-hidden relative ${currentView === 'dashboard' ? 'p-5' : ''}`
  }, currentView === 'dashboard' && /*#__PURE__*/React.createElement(DashboardView, {
    activeRegions: activeRegions,
    regionsConfig: regionsConfig,
    alerts: alerts,
    onAlertClick: setActiveAlert
  }), currentView === 'surveillance' && /*#__PURE__*/React.createElement(SurveillanceViewV2, {
    activeRegions: activeRegions,
    regionsConfig: regionsConfig,
    surveillanceFeeds: surveillanceFeeds,
    alerts: alerts,
    onAlertClick: setActiveAlert,
    monitorFocus: monitorFocus
  }), currentView === 'records' && /*#__PURE__*/React.createElement(DispositionHistoryView, {
    records: dispositionRecords,
    selectedRecordId: selectedRecordId,
    onSelectRecord: setSelectedRecordId
  }), currentView === 'config' && /*#__PURE__*/React.createElement(SystemConfigView, {
    activeRegions: activeRegions,
    setActiveRegions: setActiveRegions,
    regionsConfig: regionsConfig,
    onCreateRegion: handleCreateRegion,
    onAddCameraPoint: handleAddCameraPoint
  }), /*#__PURE__*/React.createElement(AlertVerificationModal, {
    alert: activeAlert,
    surveillanceFeeds: surveillanceFeeds,
    onClose: () => setActiveAlert(null),
    onResolve: handleResolveAlert,
    onOpenRegionMonitor: handleOpenRegionMonitor
  }))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
