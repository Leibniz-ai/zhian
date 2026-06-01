// tmp_frontend_script.jsx
var { useState, useEffect, useMemo, useRef } = React;
var MAXIANG_NIGHT_MARKET_IMAGE = "./\u6A21\u62DF\u56FE\u7247/\u591C\u5E02/image.png";
var GOVERNMENT_GATE_IMAGE = "./\u6A21\u62DF\u56FE\u7247/\u653F\u5E9C/image.png";
var GENERIC_SCENE_IMAGE = "./\u6A21\u62DF\u56FE\u7247/image.png";
var KTV_SCENE_IMAGE = "./\u6A21\u62DF\u56FE\u7247/KTV/image.png";
var Icon = ({ name, className, onClick }) => /* @__PURE__ */ React.createElement("i", { className: `${name} ${className || ""}`, onClick });
var AlertTriangle = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-alert-line", ...p });
var Shield = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-shield-check-line", ...p });
var Video = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-vidicon-line", ...p });
var MapIcon = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-map-2-line", ...p });
var Activity = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-pulse-line", ...p });
var Users = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-group-line", ...p });
var Car = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-car-line", ...p });
var ShieldAlert = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-shield-keyhole-line", ...p });
var Crosshair = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-focus-2-line", ...p });
var Bell = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-notification-3-line", ...p });
var PlayCircle = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-play-circle-line", ...p });
var Live = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-live-line", ...p });
var Grid = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-layout-grid-line", ...p });
var BarChart3 = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-bar-chart-box-line", ...p });
var MapPin = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-map-pin-line", ...p });
var LayoutDashboard = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-dashboard-line", ...p });
var Siren = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-alarm-warning-line", ...p });
var Settings = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-settings-3-line", ...p });
var CheckCircle = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-checkbox-circle-line", ...p });
var XCircle = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-close-circle-line", ...p });
var X = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-close-line", ...p });
var AlertOctagon = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-error-warning-line", ...p });
var School = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-school-line", ...p });
var Maximize2 = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-fullscreen-line", ...p });
var Minimize2 = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-fullscreen-exit-line", ...p });
var Crop = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-crop-line", ...p });
var ListCheck = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-list-check-2", ...p });
var Flag = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-flag-line", ...p });
var Plus = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-add-line", ...p });
var Search = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-search-line", ...p });
var Folder = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-folder-2-line", ...p });
var Store = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-store-2-line", ...p });
var CameraLens = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-camera-lens-line", ...p });
var ArrowRightS = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-arrow-right-s-line", ...p });
var ArrowDownS = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-arrow-down-s-line", ...p });
var Network = (p) => /* @__PURE__ */ React.createElement(Icon, { name: "ri-node-tree", ...p });
var stripPriorityLabel = (text = "") => String(text).replace(/\s*\(P\d(?:-\d+)?\)/g, "").replace(/\bP0\b/g, "\u91CD\u70B9").replace(/\bP1-P3\b/g, "\u7EBF\u7D22").replace(/\bP1\b/g, "\u7EBF\u7D22").replace(/\bP2\b/g, "\u7EBF\u7D22").replace(/\bP3\b/g, "\u7EBF\u7D22").trim();
var severityText = (severity = "") => {
  if (severity === "P0") return "\u91CD\u70B9";
  if (severity === "P1" || severity === "P2" || severity === "P3") return "\u7EBF\u7D22";
  return "\u5E38\u6001";
};
var INITIAL_ALERTS = [
  {
    id: "AL-1009",
    regionId: "gov",
    time: "10:30:15",
    location: "\u533A\u653F\u5E9C\u5357\u5927\u95E8\u5E7F\u573A",
    type: "\u6D89\u7A33/\u8BA8\u85AA\u805A\u96C6\u9884\u8B66 (P0)",
    level: "critical",
    severity: "P0",
    status: "unhandled",
    img: "\u533A\u653F\u5E9C\u5357\u95E8\u76D1\u63A7",
    conf: "98%",
    camera: "GOV-CAM-01",
    previewImage: GOVERNMENT_GATE_IMAGE,
    urgency: "\u5F3A\u544A\u8B66 (\u7FA4\u4F53\u6D89\u7A33\u98CE\u9669)",
    aiAdvice: "\u26A0\uFE0F \u68C0\u6D4B\u5230\u653F\u5E9C\u95E8\u53E3\u53D1\u751F\u7FA4\u4F53\u6027\u62C9\u6A2A\u5E45\u805A\u96C6\u4E8B\u4EF6\uFF01\n(\u547D\u4E2D\u7279\u5F81: \u4EBA\u5458\u805A\u96C6\u8D8545\u4EBA + \u7EA2\u8272\u6A2A\u5E45\u6807\u8BED)\n\n\u5EFA\u8BAE\u5904\u7F6E\uFF1A\n1. \u7ACB\u5373\u62C9\u54CD\u5185\u90E8\u8B66\u62A5\uFF0C\u6307\u6D3E\u7279\u8B66/\u9632\u66B4\u5927\u961F\u524D\u5F80\u5927\u95E8\u7EF4\u6301\u79E9\u5E8F\uFF1B\n2. \u7ACB\u5373\u4E0A\u62A5\u5206\u5C40\u6307\u6325\u4E2D\u5FC3\u53CA\u4FE1\u8BBF\u90E8\u95E8\u8FDB\u884C\u5148\u671F\u6C9F\u901A\uFF1B\n3. \u542F\u52A8\u5468\u8FB9\u4EBA\u8138\u5361\u53E3\uFF0C\u89C6\u9891\u8FFD\u8E2A\u6838\u5FC3\u5E26\u5934\u4EBA\u5458\u7279\u5F81\u3002"
  },
  {
    id: "AL-1008",
    regionId: "maxiang",
    time: "22:50:12",
    location: "\u9A6C\u5DF7\u591C\u5E02\u5341\u5B57\u8DEF\u53E3",
    type: "\u591A\u4EBA\u5F02\u5E38\u805A\u96C6\u9884\u8B66 (P0)",
    level: "critical",
    severity: "P0",
    status: "unhandled",
    img: "\u591C\u5E02\u4E3B\u5E72\u9053\u76D1\u63A7",
    conf: "99%",
    camera: "MX-CAM-094",
    previewImage: MAXIANG_NIGHT_MARKET_IMAGE,
    urgency: "\u5F3A\u544A\u8B66 (\u8E29\u8E0F\u9AD8\u98CE\u9669)",
    aiAdvice: "\u26A0\uFE0F \u68C0\u6D4B\u5230\u591C\u5E02\u6838\u5FC3\u533A\u4EBA\u7FA4\u5BC6\u5EA6\u4E25\u91CD\u8D85\u6807\uFF08\u5F53\u524D\u533A\u57DF 128 \u4EBA\uFF0C\u6EDE\u7559\u65F6\u95F4 > 5\u5206\u949F\uFF09\uFF01\n\n\u5EFA\u8BAE\u5904\u7F6E\uFF1A\n1. \u5B58\u5728\u62E5\u6324\u8E29\u8E0F\u98CE\u9669\uFF0C\u8BF7\u7ACB\u5373\u6307\u4EE4\u7F51\u683C\u5458\u524D\u5F80\u73B0\u573A\u758F\u5BFC\uFF1B\n2. \u901A\u77E5\u591C\u5E02\u7BA1\u7406\u65B9\u6682\u65F6\u5173\u95ED\u5357\u4FA7\u5165\u53E3\uFF0C\u5B9E\u884C\u53EA\u51FA\u4E0D\u8FDB\uFF1B\n3. \u8054\u52A8\u9644\u8FD1\u5E7F\u64AD\u8FDB\u884C\u5927\u5BA2\u6D41\u5B89\u5168\u63D0\u9192\u3002",
    clipRange: { pre: 15, post: 30 },
    metrics: [
      { label: "\u5F53\u524D\u4EBA\u6570", value: "128", accent: "text-red-400", note: "\u8D85\u8FC7\u9608\u503C 3.2 \u500D" },
      { label: "ROI \u5BC6\u5EA6", value: "4.2\u4EBA/\u33A1", accent: "text-orange-400", note: "\u5341\u5B57\u8DEF\u53E3\u6838\u5FC3\u4EA4\u6C47\u533A" },
      { label: "\u6301\u7EED\u65F6\u957F", value: "5\u520612\u79D2", accent: "text-yellow-400", note: "\u8D85\u8FC7\u6EDE\u7559\u4E0A\u9650 2\u520612\u79D2" },
      { label: "\u4EBA\u6570\u589E\u901F", value: "+23/2\u5206\u949F", accent: "text-cyan-400", note: "\u5BA2\u6D41\u4ECD\u5728\u6301\u7EED\u6D8C\u5165" }
    ],
    crowdTags: ["DENSITY_OVERLOAD", "HEAD_COUNT 128", "DWELL_TIME 5m12s", "RISK_ZONE \u5357\u4FA7\u5165\u53E3"],
    sceneSummary: "\u591C\u5E02\u5341\u5B57\u8DEF\u53E3\u5F62\u6210\u53CC\u5411\u5BF9\u51B2\u5BA2\u6D41\uFF0C\u5357\u4FA7\u5165\u53E3\u6301\u7EED\u6709\u65B0\u589E\u4EBA\u6D41\u8FDB\u5165\uFF0C\u4E2D\u5FC3 ROI \u5185\u5B58\u5728\u9A7B\u8DB3\u56F4\u89C2\u4E0E\u9006\u884C\u7A7F\u63D2\u3002",
    sopSteps: [
      "\u7ACB\u5373\u6D3E\u53D1\u9644\u8FD1\u5DE1\u903B\u7EC4\u548C\u7F51\u683C\u5458\u5230\u573A\uFF0C\u5728\u5341\u5B57\u8DEF\u53E3\u5916\u5708\u5EFA\u7ACB\u5355\u5411\u758F\u5BFC\u5E26\u3002",
      "\u901A\u77E5\u591C\u5E02\u7BA1\u7406\u65B9\u5173\u95ED\u5357\u4FA7\u5165\u53E3\uFF0C\u6267\u884C\u201C\u53EA\u51FA\u4E0D\u8FDB\u201D\u5E76\u5728\u5317\u4FA7\u4FDD\u7559\u5206\u6D41\u901A\u9053\u3002",
      "\u8054\u52A8\u73B0\u573A\u5E7F\u64AD\u5FAA\u73AF\u64AD\u62A5\uFF0C\u63D0\u9192\u7FA4\u4F17\u505C\u6B62\u9A7B\u8DB3\u3001\u6CBF\u4E1C\u4FA7\u901A\u9053\u6709\u5E8F\u79BB\u573A\u3002",
      "\u5982 3 \u5206\u949F\u540E\u5BC6\u5EA6\u4ECD\u672A\u56DE\u843D\u81F3 2.5 \u4EBA/\u33A1\u4EE5\u4E0B\uFF0C\u5347\u7EA7\u4E3A\u73B0\u573A\u8B66\u6212\u5E76\u8FFD\u52A0\u8B66\u529B\u3002"
    ],
    actions: ["\u4E00\u952E\u6D3E\u5355\u758F\u5BFC", "\u5173\u95ED\u5357\u4FA7\u5165\u53E3", "\u542F\u52A8\u73B0\u573A\u5E7F\u64AD", "\u5347\u7EA7\u5927\u5BA2\u6D41\u8B66\u6212"]
  },
  {
    id: "AL-1003",
    regionId: "maxiang",
    time: "22:45:00",
    location: "\u9A6C\u5DF7\u591C\u5E02\u6392\u6863B\u533A",
    type: "\u805A\u4F17\u6253\u6597/\u80A2\u4F53\u51B2\u7A81 (P0)",
    level: "critical",
    severity: "P0",
    status: "unhandled",
    img: "\u9A6C\u5DF7\u591C\u5E02\u76D1\u63A7",
    conf: "96%",
    camera: "MX-CAM-092",
    urgency: "\u5F3A\u544A\u8B66 (\u73B0\u884C\u6CBB\u5B89\u8FDD\u6CD5)",
    aiAdvice: "\u26A0\uFE0F \u68C0\u6D4B\u5230\u5267\u70C8\u80A2\u4F53\u51B2\u7A81\uFF0C\u6709\u6F14\u53D8\u4E3A\u6076\u6027\u7FA4\u6BB4\u98CE\u9669\uFF01\n\n\u5EFA\u8BAE\u5904\u7F6E\uFF1A\n1. \u5DF2\u4E3A\u60A8\u5339\u914D\u6700\u8FD1\u7684\u3010\u9A6C\u5DF7\u5DE1\u903B\u4E8C\u7EC4\u3011\uFF0C\u8BF7\u4E00\u952E\u6D3E\u53D1\u5904\u8B66\u6307\u4EE4\uFF1B\n2. \u5EFA\u8BAE\u4E00\u952E\u5F00\u542F\u6848\u53D1\u5730\uFF08MX-CAM-092\uFF09\u7684\u9AD8\u97F3\u5587\u53ED\uFF0C\u8FDB\u884C\u73B0\u573A\u558A\u8BDD\u9707\u6151\uFF1B\n3. \u6301\u7EED\u9501\u5B9A\u5ACC\u7591\u4EBA\u7279\u5F81\uFF0C\u9632\u6B62\u6D41\u7A9C\u3002",
    clipRange: { pre: 8, post: 12 },
    fightWindow: {
      title: "5-15 \u79D2\u51B2\u7A81\u7247\u6BB5",
      keyFrames: ["\u8D77\u51B2\u5E27", "\u63A5\u89E6\u5E27", "\u63A8\u6421\u5347\u7EA7\u5E27"],
      labels: ["FIGHT_ACTION 96%", "CONTACT_BREAKDOWN", "ESCALATION_RISK"],
      summary: "\u4E24\u540D\u4E3B\u4F53\u51FA\u73B0\u6B63\u9762\u63A5\u89E6\u540E\u8FC5\u901F\u5347\u7EA7\u4E3A\u80A2\u4F53\u51B2\u7A81\uFF0C\u5468\u8FB9\u4EBA\u5458\u6709\u56F4\u89C2\u548C\u9760\u8FD1\u8D8B\u52BF\u3002",
      nearestPolice: "\u9A6C\u5DF7\u5DE1\u903B\u4E8C\u7EC4 (\u8DDD\u6848\u53D140m)",
      nearestDisposal: "\u9AD8\u97F3\u5587\u53ED / \u73B0\u573A\u558A\u8BDD / \u5148\u884C\u63A7\u573A"
    },
    metrics: [
      { label: "\u51B2\u7A81\u52A8\u4F5C", value: "96%", accent: "text-red-400", note: "\u6253\u6597\u52A8\u4F5C\u8BC6\u522B\u547D\u4E2D" },
      { label: "\u7591\u4F3C\u4EBA\u6570", value: "4-6\u4EBA", accent: "text-orange-400", note: "\u542B\u56F4\u89C2\u4E0E\u4ECB\u5165\u4EBA\u5458" },
      { label: "\u6301\u7EED\u65F6\u957F", value: "34\u79D2", accent: "text-yellow-400", note: "\u51B2\u7A81\u5DF2\u6301\u7EED\u8D85\u8FC7 30 \u79D2" },
      { label: "\u98CE\u9669\u7B49\u7EA7", value: "P0", accent: "text-cyan-400", note: "\u53EF\u76F4\u63A5\u8FDB\u5165\u6781\u901F\u590D\u6838" }
    ],
    sceneSummary: "\u51B2\u7A81\u96C6\u4E2D\u5728\u6392\u6863B\u533A\u684C\u6905\u65C1\uFF0C\u5B58\u5728\u63A8\u6421\u3001\u6325\u62F3\u3001\u8FFD\u9010\u548C\u518D\u6B21\u63A5\u89E6\u98CE\u9669\uFF0C\u5EFA\u8BAE\u4F18\u5148\u505A\u63A7\u573A\u548C\u9694\u79BB\u3002",
    sopSteps: [
      "\u5148\u786E\u8BA4\u89C6\u9891\u4E2D\u662F\u5426\u5B58\u5728\u6301\u7EED\u80A2\u4F53\u63A5\u89E6\u4E0E\u8FFD\u6253\u884C\u4E3A\uFF0C\u907F\u514D\u8BEF\u5C06\u53E3\u89D2\u8BC6\u522B\u4E3A\u6253\u6597\u3002",
      "\u82E5\u547D\u4E2D\uFF0C\u7ACB\u5373\u5411\u9A6C\u5DF7\u5DE1\u903B\u4E8C\u7EC4\u4E0B\u53D1\u5904\u8B66\uFF0C\u5E76\u8981\u6C42\u5728\u5916\u5708\u5148\u505A\u9694\u79BB\u63A7\u573A\u3002",
      "\u540C\u6B65\u5F00\u542F\u9AD8\u97F3\u5587\u53ED\u548C\u5468\u8FB9\u6444\u50CF\u5934\u8054\u52A8\uFF0C\u9632\u6B62\u5ACC\u7591\u4EBA\u501F\u4EBA\u7FA4\u6DF7\u5165\u79BB\u5F00\u3002",
      "\u5230\u573A\u540E\u56DE\u586B\u73B0\u573A\u63A7\u5236\u7ED3\u679C\uFF0C\u518D\u51B3\u5B9A\u662F\u5426\u5347\u7EA7\u4E3A\u4F24\u60C5/\u6CBB\u5B89\u6848\u4EF6\u3002"
    ],
    actions: ["\u786E\u8BA4\u5C5E\u5B9E\u5E76\u6D3E\u8B66", "\u6807\u8BB0\u8BEF\u62A5", "\u5347\u7EA7\u503C\u73ED\u957F\u590D\u6838"]
  },
  {
    id: "AL-1006",
    regionId: "garage",
    time: "02:15:00",
    location: "\u6D0B\u5510\u5C45\u4F4F\u533A\u5730\u4E0B\u8F66\u5E93",
    type: "\u5077\u76D7/\u62C9\u8F66\u95E8\u7EBF\u7D22 (P1)",
    level: "medium",
    severity: "P1",
    status: "unhandled",
    img: "\u6D0B\u5510\u5730\u5E93\u76D1\u63A7",
    conf: "88%",
    camera: "YT-PKG-044",
    urgency: "\u7591\u4F3C\u7EBF\u7D22 (\u9700\u4EBA\u5DE5\u590D\u6838)",
    aiAdvice: "\u68C0\u6D4B\u5230\u8FDE\u7EED\u8BD5\u63A2\u62C9\u52A8\u591A\u8F86\u8F66\u95E8\u7684\u5F02\u5E38\u884C\u4E3A\u94FE\u3002\n\u8BF7\u7814\u5224\u5458\u590D\u6838\uFF1A\n\u82E5\u662F\u6B63\u5E38\u8F66\u4E3B\u5BFB\u627E\u8F66\u8F86\uFF0C\u8BF7\u70B9\u51FB\u3010\u65E0\u6548\u7EBF\u7D22\u6807\u8BB0\u3011\u56DE\u6D41\u8D1F\u6837\u672C\uFF1B\u82E5\u5C5E\u5B9E\uFF0C\u8BF7\u3010\u8F6C\u8B66\u3011\u5E76\u8BB0\u5F55ReID\u7279\u5F81\u3002"
  }
];
var INITIAL_DISPOSITION_RECORDS = [
  {
    id: "HD-20260517-003",
    alertId: "AL-0908",
    reportId: "RP-20260517-001",
    alertType: "\u591A\u4EBA\u5F02\u5E38\u805A\u96C6\u9884\u8B66",
    severity: "P0",
    regionName: "\u9A6C\u5DF7\u591C\u5E02\u9632\u533A",
    location: "\u9A6C\u5DF7\u591C\u5E02\u5317\u4FA7\u5165\u53E3",
    camera: "MX-CAM-088",
    source: "\u805A\u96C6\u5BC6\u5EA6\u8BC6\u522B",
    reportedAt: "2026-05-17 19:48:22",
    handledAt: "2026-05-17 19:49:10",
    completedAt: "2026-05-17 19:56:40",
    dispositionStatus: "\u5DF2\u89E3\u9664",
    reviewStatus: "\u5F85\u590D\u76D8",
    handler: "\u9A6C\u5DF7\u5DE1\u903B\u4E8C\u7EC4",
    commander: "\u60C5\u6307\u503C\u73ED\u957F \u6797\u5FD7\u658C",
    resultSummary: "\u5904\u7F6E\u7EC4\u6267\u884C\u5165\u53E3\u5206\u6D41\u4E0E\u5E7F\u64AD\u63D0\u9192\u540E\uFF0C\u6838\u5FC3\u533A\u57DF\u4EBA\u6D41\u5728 7 \u5206\u949F\u5185\u56DE\u843D\u81F3\u5B89\u5168\u9608\u503C\u3002",
    actions: ["\u5173\u95ED\u5317\u4FA7\u5165\u53E3", "\u73B0\u573A\u5E7F\u64AD\u758F\u5BFC", "\u589E\u6D3E\u7F51\u683C\u5458"],
    evidence: ["45\u79D2\u4E8B\u4EF6\u7247\u6BB5", "\u70ED\u529B\u622A\u56FE 2 \u5F20", "\u5904\u7F6E\u53CD\u9988\u7167\u7247 1 \u5F20"],
    metrics: [
      { label: "\u5CF0\u503C\u4EBA\u6570", value: "116", note: "\u8D85\u8FC7\u9608\u503C 2.9 \u500D" },
      { label: "ROI \u5BC6\u5EA6", value: "3.8\u4EBA/\u33A1", note: "\u5165\u53E3\u5916\u5708\u805A\u96C6\u660E\u663E" },
      { label: "\u5904\u7F6E\u8017\u65F6", value: "8\u520618\u79D2", note: "\u4ECE\u544A\u8B66\u5230\u73B0\u573A\u6062\u590D" }
    ],
    timeline: [
      "19:48:22 \u7CFB\u7EDF\u89E6\u53D1\u91CD\u70B9\u805A\u96C6\u544A\u8B66",
      "19:49:10 \u503C\u73ED\u5458\u786E\u8BA4\u5E76\u4E0B\u53D1\u758F\u5BFC\u6307\u4EE4",
      "19:52:30 \u591C\u5E02\u7BA1\u7406\u65B9\u5173\u95ED\u5317\u4FA7\u5165\u53E3",
      "19:56:40 \u73B0\u573A\u53CD\u9988\u5BC6\u5EA6\u5DF2\u6062\u590D\u6B63\u5E38"
    ],
    notes: "\u5EFA\u8BAE\u5C06\u5317\u4FA7\u5165\u53E3\u5355\u72EC\u5212\u4E3A ROI \u5B50\u533A\u57DF\uFF0C\u5E76\u5728\u8282\u5047\u65E5\u665A\u9AD8\u5CF0\u524D\u7F6E\u5E7F\u64AD\u3002",
    tags: ["\u805A\u96C6\u758F\u5BFC", "\u591C\u5E02\u5927\u5BA2\u6D41", "\u5DF2\u95ED\u73AF"]
  },
  {
    id: "HD-20260514-002",
    alertId: "AL-0821",
    reportId: "RP-20260514-001",
    alertType: "\u6D89\u7A33/\u8BA8\u85AA\u805A\u96C6\u9884\u8B66",
    severity: "P0",
    regionName: "\u533A\u653F\u5E9C\u6838\u5FC3\u5708",
    location: "\u533A\u653F\u5E9C\u5357\u5927\u95E8\u5E7F\u573A",
    camera: "GOV-CAM-01",
    source: "\u6D89\u7A33\u805A\u96C6\u8BC6\u522B",
    reportedAt: "2026-05-14 09:18:04",
    handledAt: "2026-05-14 09:19:16",
    completedAt: "2026-05-14 09:34:28",
    dispositionStatus: "\u5DF2\u89E3\u9664",
    reviewStatus: "\u5DF2\u5F52\u6863",
    handler: "\u60C5\u6307\u8054\u52A8\u4E13\u73ED",
    commander: "\u5206\u5C40\u503C\u73ED\u6307\u6325\u957F \u9648\u8000",
    resultSummary: "\u73B0\u573A\u5B8C\u6210\u529D\u79BB\u4E0E\u4FE1\u8BBF\u5206\u6D41\uFF0C\u5E26\u5934\u4EBA\u5458\u88AB\u5355\u72EC\u5F15\u5BFC\u81F3\u63A5\u5F85\u533A\u6C9F\u901A\uFF0C\u672A\u5F62\u6210\u6269\u6563\u3002",
    actions: ["\u7279\u8B66\u524D\u7F6E\u5E03\u63A7", "\u4FE1\u8BBF\u90E8\u95E8\u8054\u52A8\u63A5\u5F85", "\u5468\u8FB9\u5361\u53E3\u8DDF\u8E2A"],
    evidence: ["60\u79D2\u4E8B\u4EF6\u7247\u6BB5", "\u6A2A\u5E45\u8BC6\u522B\u622A\u56FE 2 \u5F20", "\u73B0\u573A\u5904\u7F6E\u8BB0\u5F55\u5355"],
    metrics: [
      { label: "\u805A\u96C6\u4EBA\u6570", value: "47", note: "\u6A2A\u5E45\u76EE\u6807\u5DF2\u547D\u4E2D" },
      { label: "\u73B0\u573A\u8017\u65F6", value: "16\u520624\u79D2", note: "\u6C9F\u901A\u5206\u6D41\u5B8C\u6210" },
      { label: "\u6269\u6563\u98CE\u9669", value: "\u5DF2\u963B\u65AD", note: "\u672A\u5411\u5468\u8FB9\u9053\u8DEF\u8513\u5EF6" }
    ],
    timeline: [
      "09:18:04 \u7CFB\u7EDF\u8BC6\u522B\u6A2A\u5E45\u4E0E\u7FA4\u4F53\u805A\u96C6",
      "09:19:16 \u6307\u6325\u4E2D\u5FC3\u542F\u52A8\u8054\u52A8\u4E13\u73ED",
      "09:25:40 \u73B0\u573A\u4EBA\u5458\u5206\u6279\u5F15\u5BFC\u81F3\u63A5\u5F85\u533A",
      "09:34:28 \u95E8\u524D\u5E7F\u573A\u79E9\u5E8F\u6062\u590D"
    ],
    notes: "\u5EFA\u8BAE\u4FDD\u7559\u73B0\u6709\u9608\u503C\uFF0C\u5E76\u9488\u5BF9\u8282\u540E\u8BA8\u85AA\u573A\u666F\u8865\u5145\u4E13\u9898\u7B56\u7565\u3002",
    tags: ["\u6D89\u7A33\u5904\u7F6E", "\u91CD\u70B9\u5355\u4F4D", "\u5DF2\u590D\u76D8"]
  },
  {
    id: "HD-20260516-011",
    alertId: "AL-0915",
    alertType: "\u5077\u76D7/\u62C9\u8F66\u95E8\u7EBF\u7D22",
    severity: "P1",
    regionName: "\u6D0B\u5510\u5C45\u4F4F\u533A\u5730\u4E0B\u8F66\u5E93",
    location: "\u6D0B\u5510\u5C45\u4F4F\u533A\u5730\u4E0B\u8F66\u5E93 B1 \u533A",
    camera: "YT-PKG-044",
    source: "\u5F02\u5E38\u884C\u4E3A\u94FE\u8BC6\u522B",
    reportedAt: "2026-05-16 02:15:00",
    handledAt: "2026-05-16 02:22:18",
    completedAt: "2026-05-16 02:26:40",
    dispositionStatus: "\u8BEF\u62A5\u56DE\u6D41",
    reviewStatus: "\u65E0\u9700\u590D\u76D8",
    handler: "\u591C\u73ED\u7814\u5224\u5458 07",
    commander: "\u60C5\u6307\u503C\u5B88\u53F0",
    resultSummary: "\u4EBA\u5DE5\u590D\u6838\u786E\u8BA4\u7CFB\u8F66\u4E3B\u5BFB\u627E\u8F66\u8F86\uFF0C\u5DF2\u6807\u8BB0\u8BEF\u62A5\u5E76\u56DE\u6D41\u8D1F\u6837\u672C\u3002",
    evidence: ["20\u79D2\u4E8B\u4EF6\u7247\u6BB5", "\u4EBA\u5DE5\u590D\u6838\u5907\u6CE8"],
    timeline: [
      "02:15:00 \u7CFB\u7EDF\u89E6\u53D1 P1 \u62C9\u8F66\u95E8\u7EBF\u7D22\u544A\u8B66",
      "02:22:18 \u7814\u5224\u5458\u5B8C\u6210\u4EBA\u5DE5\u590D\u6838",
      "02:26:40 \u7ED3\u679C\u56DE\u6D41\u7B97\u6CD5\u6837\u672C\u5E93"
    ],
    notes: "\u540E\u7EED\u53EF\u589E\u52A0\u201C\u8F66\u4E3B\u505C\u7559\u65F6\u957F + \u94A5\u5319\u59FF\u6001\u201D\u8F85\u52A9\u7279\u5F81\u3002",
    tags: ["\u8BEF\u62A5\u6837\u672C", "\u8F66\u5E93\u573A\u666F"]
  }
];
var INITIAL_REVIEW_REPORTS = [
  {
    id: "RP-20260517-001",
    recordId: "HD-20260517-003",
    title: "\u9A6C\u5DF7\u591C\u5E02\u5317\u4FA7\u5165\u53E3\u5927\u5BA2\u6D41\u805A\u96C6\u590D\u76D8",
    severity: "P0",
    status: "\u5F85\u590D\u76D8",
    owner: "\u9A6C\u5DF7\u6240\u6307\u6325\u5BA4",
    stageNote: "\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u521D\u7A3F",
    generatedAt: "2026-05-17 20:08:12",
    location: "\u9A6C\u5DF7\u591C\u5E02\u5317\u4FA7\u5165\u53E3",
    type: "\u591A\u4EBA\u5F02\u5E38\u805A\u96C6\u9884\u8B66 (P0)",
    eventWindow: "2026-05-17 19:48 - 19:56",
    summary: "\u665A\u9AD8\u5CF0\u53E0\u52A0\u644A\u4F4D\u4FC3\u9500\u5BFC\u81F4\u5317\u4FA7\u5165\u53E3\u5F62\u6210\u5BF9\u51B2\u5BA2\u6D41\uFF0C\u5165\u53E3\u7BA1\u63A7\u6EDE\u540E\u9020\u6210\u77ED\u65F6\u62E5\u5835\u3002",
    keyFindings: [
      "\u5317\u4FA7\u5165\u53E3\u5BFC\u6D41\u6807\u8BC6\u4E0D\u8DB3\uFF0C\u65B0\u589E\u5BA2\u6D41\u6301\u7EED\u6D8C\u5165\u3002",
      "\u5E7F\u64AD\u8054\u52A8\u540E 3 \u5206\u949F\u5185 ROI \u5BC6\u5EA6\u660E\u663E\u56DE\u843D\uFF0C\u8BF4\u660E\u73B0\u573A\u63D0\u9192\u63AA\u65BD\u6709\u6548\u3002",
      "\u73B0\u6709 ROI \u672A\u5B8C\u5168\u8986\u76D6\u5317\u4FA7\u6392\u961F\u533A\uFF0C\u9700\u5411\u5916\u6269\u5C55\u7EA6 8 \u7C73\u3002"
    ],
    timeline: [
      "19:48 \u544A\u8B66\u89E6\u53D1\u5E76\u63A8\u9001\u503C\u73ED\u5E2D\u4F4D",
      "19:49 \u503C\u73ED\u5458\u786E\u8BA4\u805A\u96C6\u98CE\u9669\u5E76\u6D3E\u5355",
      "19:52 \u591C\u5E02\u7BA1\u7406\u65B9\u6267\u884C\u5165\u53E3\u53EA\u51FA\u4E0D\u8FDB",
      "19:56 \u73B0\u573A\u53CD\u9988\u6062\u590D\u5E38\u6001\u5BA2\u6D41"
    ],
    recommendations: [
      "\u5C06\u5317\u4FA7\u5165\u53E3\u65B0\u589E\u4E3A\u72EC\u7ACB ROI\uFF0C\u5355\u72EC\u914D\u7F6E\u4EBA\u6D41\u5BC6\u5EA6\u9608\u503C\u3002",
      "\u8282\u5047\u65E5\u665A\u9AD8\u5CF0\u63D0\u524D 15 \u5206\u949F\u542F\u52A8\u5E7F\u64AD\u63D0\u9192\u3002",
      "\u5728\u591C\u5E02\u5357\u5317\u5165\u53E3\u589E\u52A0\u7F51\u683C\u5458\u8F6E\u5DE1\u7B7E\u5230\u3002"
    ],
    keywords: ["ROI\u4F18\u5316", "\u5165\u53E3\u5206\u6D41", "\u5E7F\u64AD\u8054\u52A8"],
    conclusion: "\u5EFA\u8BAE\u5C06\u8BE5\u573A\u666F\u7EB3\u5165\u591C\u5E02\u5927\u5BA2\u6D41\u4E13\u9879\u7B56\u7565\uFF0C\u4F5C\u4E3A\u8282\u5047\u65E5\u6A21\u677F\u590D\u5236\u3002"
  },
  {
    id: "RP-20260514-001",
    recordId: "HD-20260514-002",
    title: "\u533A\u653F\u5E9C\u5357\u95E8\u6D89\u7A33\u805A\u96C6\u4E8B\u4EF6\u590D\u76D8",
    severity: "P0",
    status: "\u5DF2\u5F52\u6863",
    owner: "\u5206\u5C40\u60C5\u6307\u4E2D\u5FC3",
    stageNote: "\u4EBA\u5DE5\u8865\u5145\u540E\u5DF2\u5F52\u6863",
    generatedAt: "2026-05-14 10:02:30",
    location: "\u533A\u653F\u5E9C\u5357\u5927\u95E8\u5E7F\u573A",
    type: "\u6D89\u7A33/\u8BA8\u85AA\u805A\u96C6\u9884\u8B66 (P0)",
    eventWindow: "2026-05-14 09:18 - 09:34",
    summary: "\u8BA8\u85AA\u4EBA\u5458\u4E8E\u4E0A\u73ED\u65F6\u6BB5\u96C6\u4E2D\u805A\u96C6\u5E76\u4E3E\u6A2A\u5E45\uFF0C\u73B0\u573A\u8054\u52A8\u5904\u7F6E\u603B\u4F53\u5E73\u7A33\uFF0C\u672A\u5F15\u53D1\u5916\u56F4\u56F4\u89C2\u6269\u6563\u3002",
    keyFindings: [
      "\u6A2A\u5E45\u8BC6\u522B\u4E0E\u4EBA\u6570\u9608\u503C\u53CC\u547D\u4E2D\uFF0C\u544A\u8B66\u5B9A\u6027\u51C6\u786E\u3002",
      "\u4FE1\u8BBF\u90E8\u95E8\u63D0\u524D\u4ECB\u5165\u540E\uFF0C\u5E26\u5934\u4EBA\u5458\u88AB\u5FEB\u901F\u5206\u6D41\u81F3\u63A5\u5F85\u533A\u3002",
      "\u5468\u8FB9\u5361\u53E3\u8054\u52A8\u8017\u65F6\u504F\u957F\uFF0C\u6838\u5FC3\u4EBA\u5458\u8F68\u8FF9\u56DE\u4F20\u4ECD\u6709\u4F18\u5316\u7A7A\u95F4\u3002"
    ],
    timeline: [
      "09:18 \u6D89\u7A33\u805A\u96C6\u544A\u8B66\u89E6\u53D1",
      "09:19 \u7279\u8B66\u4E0E\u4FE1\u8BBF\u8054\u52A8\u4E13\u73ED\u540C\u6B65\u51FA\u52A8",
      "09:27 \u5E26\u5934\u4EBA\u5458\u5B8C\u6210\u63A5\u89E6\u529D\u5BFC",
      "09:34 \u95E8\u524D\u5E7F\u573A\u79E9\u5E8F\u6062\u590D\u5E76\u89E3\u9664\u8B66\u6212"
    ],
    recommendations: [
      "\u5728\u653F\u5E9C\u95E8\u524D\u4FDD\u7559\u7F13\u51B2\u533A ROI\uFF0C\u63D0\u524D\u9501\u5B9A\u805A\u96C6\u4E2D\u5FC3\u70B9\u3002",
      "\u4F18\u5316\u91CD\u70B9\u5355\u4F4D\u5468\u8FB9\u5361\u53E3\u56DE\u4F20\u5EF6\u8FDF\uFF0C\u7F29\u77ED\u6838\u5FC3\u4EBA\u5458\u8DDF\u8E2A\u65F6\u95F4\u3002",
      "\u5EFA\u7ACB\u8282\u540E\u6D89\u7A33\u4E13\u9898\u9884\u6848\u5E76\u7EB3\u5165\u503C\u73ED\u63D0\u9192\u3002"
    ],
    keywords: ["\u91CD\u70B9\u5355\u4F4D", "\u6A2A\u5E45\u8BC6\u522B", "\u5361\u53E3\u8054\u52A8"],
    conclusion: "\u672C\u6B21\u8054\u52A8\u6D41\u7A0B\u6709\u6548\uFF0C\u4F46\u5E94\u8865\u5145\u95E8\u524D\u7F13\u51B2\u533A\u7B56\u7565\u4E0E\u8282\u540E\u4E13\u9898\u503C\u5B88\u5B89\u6392\u3002"
  }
];
var ALL_REGIONS_CONFIG = {
  "gov": {
    id: "gov",
    name: "\u533A\u653F\u5E9C\u6838\u5FC3\u5708",
    type: "alert",
    macroPos: { top: "55%", left: "35%" },
    microTitle: "\u653F\u52A1\u6838\u5FC3\u91CD\u70B9\u9632\u533A",
    highlightQuadrant: "A1",
    icon: ShieldAlert,
    cameras: [{ id: "c1", name: "GOV-CAM-01 (\u5357\u5927\u95E8\u5168\u666F)", pos: { top: "50%", left: "50%" }, isAlert: true, label: "P0 \u6D89\u7A33\u8BA8\u85AA\u4E8B\u4EF6", isPetition: true }],
    police: [{ name: "\u7279\u8B66\u88C5\u7532\u8F6601", pos: { top: "55%", left: "55%" }, isAlert: true }],
    caps: [
      { id: "v1", title: "\u6D89\u7A33/\u7FA4\u4F53\u6027\u805A\u96C6\u8BC6\u522B (P0)", desc: "\u8BC6\u522B\u91CD\u70B9\u5355\u4F4D\u95E8\u524D\u53D1\u751F\u7684\u975E\u6B63\u5E38\u7FA4\u4F53\u6027\u805A\u96C6\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u5BC6\u5EA6"], color: "text-red-400", bg: "bg-red-500/10", icon: Users, hasRoi: true, isGathering: true },
      { id: "v2", title: "\u6A2A\u5E45\u4E0E\u6807\u8BED\u52A8\u4F5C\u8BC6\u522B (P0)", desc: "\u8BC6\u522B\u62C9\u6A2A\u5E45\u7B49\u7279\u5B9A\u52A8\u4F5C\uFF0C\u8F85\u52A9\u5B9A\u6027\u7FA4\u4F53\u4E8B\u4EF6\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u76EE\u6807\u68C0\u6D4B"], color: "text-orange-400", bg: "bg-orange-500/10", icon: Flag, hasRoi: false }
    ]
  },
  "maxiang": {
    id: "maxiang",
    name: "\u9A6C\u5DF7\u591C\u5E02\u9632\u533A",
    type: "alert",
    macroPos: { top: "25%", left: "42%" },
    microTitle: "\u9A6C\u5DF7\u9547\u6838\u5FC3\u9632\u533A",
    highlightQuadrant: "C3",
    icon: Store,
    cameras: [
      { id: "c1", name: "MX-CAM-092 (\u6392\u6863B\u533A\u5168\u666F)", pos: { top: "65%", left: "25%" }, isAlert: true, label: "P0 \u51B2\u7A81\u544A\u8B66\u8282\u70B9", isFight: true },
      { id: "c2", name: "MX-CAM-094 (\u5341\u5B57\u8DEF\u53E3\u7403\u673A)", pos: { top: "48%", left: "48%" }, isAlert: true, label: "P0 \u5F02\u5E38\u805A\u96C6\u70B9", isGathering: true },
      { id: "c3", name: "\u5546\u4E1A\u4E2D\u5FC3\u5357\u95E8\u67AA\u673A", pos: { top: "18%", left: "28%" }, isAlert: false }
    ],
    police: [{ name: "\u5DE1\u903B\u4E8C\u7EC4 (\u8DDD\u6848\u53D140m)", pos: { top: "52%", left: "40%" }, isAlert: true }],
    caps: [
      { id: "n1", title: "\u6253\u67B6/\u51B2\u7A81\u8BC6\u522B (P0)", desc: "\u53D1\u73B0\u63A8\u6421\u3001\u6325\u62F3\u3001\u8E22\u6253\u7B49\u66B4\u529B\u51B2\u7A81\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u52A8\u4F5C\u59FF\u6001"], color: "text-red-400", bg: "bg-red-500/10", icon: Activity, hasRoi: false },
      { id: "n3", title: "\u591A\u4EBA\u5F02\u5E38\u805A\u96C6\u8BC6\u522B (P0)", desc: "\u8BC6\u522B\u6838\u5FC3\u533A\u57DF\u4EBA\u5458\u6EDE\u7559\uFF0C\u907F\u514D\u5F15\u53D1\u8E29\u8E0F\u4F24\u4EA1\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u5BC6\u5EA6\u70ED\u529B"], color: "text-yellow-400", bg: "bg-yellow-500/10", icon: Users, hasRoi: true, isGathering: true }
    ]
  },
  "garage": {
    id: "garage",
    name: "\u6D0B\u5510\u5C45\u4F4F\u533A\u5730\u4E0B\u8F66\u5E93",
    type: "alert",
    macroPos: { top: "65%", left: "45%" },
    microTitle: "\u6D0B\u5510\u5927\u578B\u793E\u533A\u9632\u533A",
    highlightQuadrant: "B2",
    icon: Car,
    cameras: [
      { id: "c1", name: "\u5730\u5E93B1\u5C42\u4E3B\u5E72\u9053", pos: { top: "20%", left: "60%" }, isAlert: false },
      { id: "c2", name: "\u975E\u673A\u52A8\u8F66\u505C\u653E\u533A", pos: { top: "35%", left: "75%" }, isAlert: true, label: "P1 \u62C9\u8F66\u95E8\u7EBF\u7D22" }
    ],
    police: [],
    caps: [
      { id: "g1", title: "\u5077\u76D7/\u62C9\u8F66\u95E8\u7EBF\u7D22\u68C0\u6D4B (P1)", desc: "\u8BC6\u522B\u591C\u95F4\u6CBF\u8DEF\u4FA7\u505C\u8F66\u533A\u8FDE\u7EED\u8BD5\u63A2\u884C\u4E3A\u94FE\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u4EBA\u8F66\u5173\u7CFB"], color: "text-emerald-400", bg: "bg-emerald-500/10", icon: Crosshair, hasRoi: true }
    ]
  },
  "school": {
    id: "school",
    name: "\u53A6\u95E8\u5927\u5B66\u7FD4\u5B89\u6821\u533A",
    type: "normal",
    macroPos: { top: "62%", left: "70%" },
    microTitle: "\u5927\u5B66\u57CE\u91CD\u70B9\u9632\u533A",
    highlightQuadrant: "D4",
    icon: School,
    cameras: [{ id: "c1", name: "\u5B66\u6821\u897F\u6821\u95E8", pos: { top: "50%", left: "50%" }, isAlert: false }],
    police: [],
    caps: [
      { id: "s1", title: "\u7591\u4F3C\u672A\u6210\u5E74\u4EBA\u805A\u96C6\u7EBF\u7D22", desc: "\u5728\u5B66\u6821\u3001\u5468\u8FB9\u7F51\u5427\u53D1\u73B0\u7591\u4F3C\u805A\u96C6\u7EBF\u7D22\uFF0C\u8F85\u52A9\u5DE1\u67E5\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u5E74\u9F84\u8F85\u52A9"], color: "text-indigo-400", bg: "bg-indigo-500/10", icon: School, hasRoi: true }
    ]
  },
  "market": {
    id: "market",
    name: "\u65B0\u5E97\u519C\u8D38\u5E02\u573A",
    type: "normal",
    macroPos: { top: "48%", left: "30%" },
    microTitle: "\u65B0\u5E97\u5546\u8D38\u67A2\u7EBD\u9632\u533A",
    highlightQuadrant: "D4",
    icon: Store,
    cameras: [{ id: "c1", name: "\u5E02\u573A\u4E1C\u95E8\u4E3B\u901A\u9053", pos: { top: "45%", left: "65%" }, isAlert: false }],
    police: [{ name: "\u793E\u533A\u7F51\u683C\u5458\u8054\u9632\u7EC4", pos: { top: "48%", left: "60%" }, isAlert: false }],
    caps: [
      { id: "m1", title: "\u5C0F\u644A\u8D29\u4E0E\u5360\u9053\u7ECF\u8425\u8BC6\u522B", desc: "\u8BC6\u522B\u8FDD\u89C4\u5360\u9053\u7ECF\u8425\u3001\u4E71\u5806\u7269\u6599\u7B49\u5E02\u5BB9\u5E02\u8C8C\u95EE\u9898\u3002", sources: ["\u5916\u7F51\u89C6\u9891", "\u76EE\u6807\u68C0\u6D4B"], color: "text-blue-400", bg: "bg-blue-500/10", icon: Store, hasRoi: true }
    ]
  }
};
var REGION_TREE_DATA = [
  { id: "street-xindian", name: "\u65B0\u5E97\u8857\u9053", isExpanded: true, children: [{ id: "gov", name: "\u533A\u653F\u5E9C\u6838\u5FC3\u5708" }, { id: "garage", name: "\u6D0B\u5510\u5C45\u4F4F\u533A\u5730\u4E0B\u8F66\u5E93" }, { id: "school", name: "\u53A6\u95E8\u5927\u5B66\u7FD4\u5B89\u6821\u533A" }, { id: "market", name: "\u65B0\u5E97\u519C\u8D38\u5E02\u573A" }] },
  { id: "street-maxiang", name: "\u9A6C\u5DF7\u8857\u9053", isExpanded: true, children: [{ id: "maxiang", name: "\u9A6C\u5DF7\u591C\u5E02\u9632\u533A" }] }
];
var SURVEILLANCE_FEEDS = [
  {
    id: "feed-maxiang-094",
    regionId: "maxiang",
    regionName: "\u9A6C\u5DF7\u591C\u5E02\u9632\u533A",
    camera: "MX-CAM-094",
    title: "\u9A6C\u5DF7\u591C\u5E02\u5341\u5B57\u8DEF\u53E3\u7403\u673A",
    position: "\u5341\u5B57\u8DEF\u53E3\u6838\u5FC3\u533A",
    status: "online",
    priority: "P0",
    mode: "fixed",
    sceneType: "crowd",
    image: MAXIANG_NIGHT_MARKET_IMAGE,
    hasAlert: true,
    linkedAlertId: "AL-1008",
    tags: ["\u4EBA\u7FA4\u805A\u96C6", "\u591C\u5E02\u5BA2\u6D41", "\u91CD\u70B9\u5DE1\u770B"],
    summary: "\u5341\u5B57\u8DEF\u53E3\u4EBA\u6D41\u5BC6\u5EA6\u6301\u7EED\u5347\u9AD8\uFF0C\u9002\u5408\u503C\u5B88\u4F4D\u957F\u671F\u9A7B\u770B\u3002"
  },
  {
    id: "feed-maxiang-092",
    regionId: "maxiang",
    regionName: "\u9A6C\u5DF7\u591C\u5E02\u9632\u533A",
    camera: "MX-CAM-092",
    title: "\u9A6C\u5DF7\u591C\u5E02\u6392\u6863B\u533A\u5168\u666F",
    position: "\u6392\u6863B\u533A\u684C\u6905\u5916\u5708",
    status: "online",
    priority: "P0",
    mode: "patrol",
    sceneType: "fight",
    image: MAXIANG_NIGHT_MARKET_IMAGE,
    hasAlert: true,
    linkedAlertId: "AL-1003",
    tags: ["\u51B2\u7A81\u6613\u53D1", "\u591C\u95F4\u503C\u5B88"],
    summary: "\u6392\u6863\u533A\u684C\u6905\u5BC6\u96C6\uFF0C\u9002\u5408\u5173\u6CE8\u51B2\u7A81\u5347\u7EA7\u548C\u4EBA\u5458\u56F4\u89C2\u60C5\u51B5\u3002"
  },
  {
    id: "feed-gov-001",
    regionId: "gov",
    regionName: "\u533A\u653F\u5E9C\u6838\u5FC3\u5708",
    camera: "GOV-CAM-01",
    title: "\u533A\u653F\u5E9C\u5357\u5927\u95E8\u5168\u666F",
    position: "\u5357\u95E8\u5E7F\u573A\u7F13\u51B2\u533A",
    status: "online",
    priority: "P0",
    mode: "fixed",
    sceneType: "petition",
    image: GOVERNMENT_GATE_IMAGE,
    hasAlert: true,
    linkedAlertId: "AL-1009",
    tags: ["\u91CD\u70B9\u5355\u4F4D", "\u6D89\u7A33\u503C\u5B88"],
    summary: "\u91CD\u70B9\u5355\u4F4D\u95E8\u524D\uFF0C\u9002\u5408\u5BF9\u6A2A\u5E45\u3001\u805A\u96C6\u548C\u5916\u56F4\u6269\u6563\u505A\u6301\u7EED\u89C2\u5BDF\u3002"
  },
  {
    id: "feed-garage-044",
    regionId: "garage",
    regionName: "\u6D0B\u5510\u5C45\u4F4F\u533A\u5730\u4E0B\u8F66\u5E93",
    camera: "YT-PKG-044",
    title: "\u6D0B\u5510\u5730\u5E93\u975E\u673A\u52A8\u8F66\u505C\u653E\u533A",
    position: "B1\u975E\u673A\u52A8\u8F66\u505C\u653E\u533A",
    status: "online",
    priority: "P1",
    mode: "fixed",
    sceneType: "garage",
    image: GENERIC_SCENE_IMAGE,
    hasAlert: true,
    linkedAlertId: "AL-1006",
    tags: ["\u591C\u95F4\u7EBF\u7D22", "\u62C9\u8F66\u95E8"],
    summary: "\u9002\u5408\u4F4E\u7167\u5EA6\u6761\u4EF6\u4E0B\u505A\u884C\u4E3A\u94FE\u5DE1\u770B\u548C\u7EBF\u7D22\u590D\u6838\u3002"
  },
  {
    id: "feed-school-001",
    regionId: "school",
    regionName: "\u53A6\u95E8\u5927\u5B66\u7FD4\u5B89\u6821\u533A",
    camera: "SCHOOL-CAM-001",
    title: "\u5B66\u6821\u897F\u6821\u95E8",
    position: "\u6821\u95E8\u5916\u6162\u884C\u901A\u9053",
    status: "offline",
    priority: "\u5E38\u6001",
    mode: "patrol",
    sceneType: "campus",
    image: KTV_SCENE_IMAGE,
    hasAlert: false,
    linkedAlertId: "",
    tags: ["\u6821\u56ED\u5468\u754C"],
    summary: "\u5E38\u6001\u5DE1\u770B\u70B9\u4F4D\uFF0C\u5F53\u524D\u79BB\u7EBF\u3002"
  },
  {
    id: "feed-market-001",
    regionId: "market",
    regionName: "\u65B0\u5E97\u519C\u8D38\u5E02\u573A",
    camera: "MARKET-CAM-001",
    title: "\u5E02\u573A\u4E1C\u95E8\u4E3B\u901A\u9053",
    position: "\u4E1C\u95E8\u8F66\u8F86\u6DF7\u884C\u533A",
    status: "online",
    priority: "\u5E38\u6001",
    mode: "fixed",
    sceneType: "market",
    image: GENERIC_SCENE_IMAGE,
    hasAlert: false,
    linkedAlertId: "",
    tags: ["\u5E02\u5BB9\u5DE1\u67E5"],
    summary: "\u5E38\u6001\u89C2\u5BDF\u70B9\u4F4D\uFF0C\u9002\u5408\u7ED3\u5408\u5E02\u5BB9\u95EE\u9898\u505A\u65E5\u5E38\u5DE1\u770B\u3002"
  }
];
var DashboardView = ({ activeRegions, alerts, onAlertClick }) => {
  const [activeRegionId, setActiveRegionId] = useState(null);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [alertSearchQuery, setAlertSearchQuery] = useState("");
  const [alertSeverityFilter, setAlertSeverityFilter] = useState("all");
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isMapDragging, setIsMapDragging] = useState(false);
  const mapDragRef = useRef({ dragging: false, startX: 0, startY: 0, originX: 0, originY: 0 });
  const displayRegions = Object.values(ALL_REGIONS_CONFIG).filter((r) => activeRegions.includes(r.id));
  const displayAlerts = alerts.filter((a) => activeRegions.includes(a.regionId) && a.status === "unhandled");
  const filteredAlerts = useMemo(() => {
    const keyword = alertSearchQuery.trim().toLowerCase();
    return displayAlerts.filter((alert) => {
      const matchSeverity = alertSeverityFilter === "all" || alertSeverityFilter === "p0" && alert.severity === "P0" || alertSeverityFilter === "other" && alert.severity !== "P0";
      const matchKeyword = !keyword || alert.type.toLowerCase().includes(keyword) || alert.location.toLowerCase().includes(keyword) || alert.camera.toLowerCase().includes(keyword) || alert.id.toLowerCase().includes(keyword);
      return matchSeverity && matchKeyword;
    });
  }, [displayAlerts, alertSearchQuery, alertSeverityFilter]);
  const handleWheel = (e) => {
    if (e.deltaY < 0 && !activeRegionId && hoveredRegionId) setActiveRegionId(hoveredRegionId);
    else if (e.deltaY > 0 && activeRegionId) setActiveRegionId(null);
  };
  useEffect(() => {
    setMapOffset({ x: 0, y: 0 });
  }, [activeRegionId]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mapDragRef.current.dragging) return;
      e.preventDefault();
      const dx = e.clientX - mapDragRef.current.startX;
      const dy = e.clientY - mapDragRef.current.startY;
      setMapOffset({
        x: mapDragRef.current.originX + dx,
        y: mapDragRef.current.originY + dy
      });
    };
    const handleMouseUp = () => {
      if (!mapDragRef.current.dragging) return;
      mapDragRef.current.dragging = false;
      setIsMapDragging(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);
  const handleMapMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('[data-map-interactive="true"]')) return;
    e.preventDefault();
    e.stopPropagation();
    mapDragRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      originX: mapOffset.x,
      originY: mapOffset.y
    };
    setIsMapDragging(true);
  };
  const activeRegionData = ALL_REGIONS_CONFIG[activeRegionId];
  const macroRoads = [
    { id: "r1", d: "M 40 155 C 140 135, 240 120, 348 126 S 574 150, 760 136", width: 10, color: "rgba(56,189,248,0.24)" },
    { id: "r2", d: "M 108 340 C 196 304, 292 284, 390 292 S 600 342, 756 316", width: 8, color: "rgba(34,211,238,0.2)" },
    { id: "r3", d: "M 420 26 C 404 124, 398 218, 412 304 S 442 498, 464 598", width: 9, color: "rgba(59,130,246,0.22)" },
    { id: "r4", d: "M 178 64 C 214 138, 248 212, 292 286 S 386 438, 444 570", width: 6, color: "rgba(45,212,191,0.18)" },
    { id: "r5", d: "M 604 74 C 584 162, 556 238, 522 308 S 456 462, 404 586", width: 6, color: "rgba(14,165,233,0.18)" },
    { id: "r6", d: "M 84 468 C 190 430, 304 410, 438 420 S 640 458, 748 522", width: 7, color: "rgba(251,191,36,0.12)" }
  ];
  const macroZones = [
    { id: "market-zone", label: "\u65B0\u5E97\u5546\u8D38\u533A", points: "110,248 178,214 242,230 256,298 208,346 126,322", stroke: "rgba(45,212,191,0.46)", fill: "rgba(20,184,166,0.1)" },
    { id: "gov-zone", label: "\u653F\u52A1\u6838\u5FC3\u5708", points: "210,314 286,284 344,306 350,378 286,416 216,386", stroke: "rgba(248,113,113,0.52)", fill: "rgba(239,68,68,0.12)" },
    { id: "maxiang-zone", label: "\u9A6C\u5DF7\u591C\u5E02", points: "272,102 352,88 420,126 404,198 330,220 264,176", stroke: "rgba(251,146,60,0.54)", fill: "rgba(249,115,22,0.14)" },
    { id: "garage-zone", label: "\u6D0B\u5510\u8F66\u5E93", points: "326,402 412,376 488,412 470,492 382,516 314,470", stroke: "rgba(250,204,21,0.5)", fill: "rgba(234,179,8,0.12)" },
    { id: "school-zone", label: "\u5927\u5B66\u57CE\u6821\u533A", points: "548,334 650,316 718,364 698,470 590,492 530,414", stroke: "rgba(96,165,250,0.48)", fill: "rgba(59,130,246,0.12)" }
  ];
  const macroLabels = [
    { id: "hai-xiang", text: "\u6D77\u7FD4\u5927\u9053", top: "17%", left: "36%", rotate: "-5deg" },
    { id: "xiang-an-south", text: "\u7FD4\u5B89\u5357\u8DEF", top: "36%", left: "49%", rotate: "84deg" },
    { id: "night-market", text: "\u9A6C\u5DF7\u591C\u5E02\u5546\u5708", top: "20%", left: "42%", rotate: "0deg" },
    { id: "government", text: "\u533A\u653F\u5E9C\u91CD\u70B9\u5355\u5143", top: "50%", left: "31%", rotate: "0deg" }
  ];
  const macroDistrictCards = displayRegions.map((region) => {
    const regionAlerts = displayAlerts.filter((a) => a.regionId === region.id);
    const hasP0 = regionAlerts.some((a) => a.severity === "P0");
    const statusTone = hasP0 ? "critical" : regionAlerts.length > 0 ? "warning" : "normal";
    return { ...region, regionAlerts, statusTone };
  });
  const enabledCameraCount = displayRegions.reduce((sum, region) => sum + region.cameras.length, 0);
  const linkedPoliceCount = displayRegions.reduce((sum, region) => sum + region.police.length, 0);
  const p0AlertCount = displayAlerts.filter((a) => a.severity === "P0").length;
  const p1AlertCount = displayAlerts.filter((a) => a.severity !== "P0").length;
  return /* @__PURE__ */ React.createElement("div", { className: "flex h-full gap-4 relative overflow-hidden animate-in fade-in duration-300" }, displayAlerts.some((a) => a.severity === "P0") && /* @__PURE__ */ React.createElement("div", { className: "absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" }), /* @__PURE__ */ React.createElement("div", { className: "w-1/4 flex flex-col gap-4 z-10" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm shrink-0 shadow-lg" }, /* @__PURE__ */ React.createElement("h2", { className: `text-sm font-semibold flex items-center mb-4 ${displayAlerts.some((a) => a.severity === "P0") ? "text-red-400" : "text-cyan-400"}` }, /* @__PURE__ */ React.createElement(BarChart3, { className: "w-4 h-4 mr-2" }), "\u4ECA\u65E5\u6001\u52BF\u6C47\u603B"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-xl border shadow-sm ${displayAlerts.some((a) => a.severity === "P0") ? "bg-red-950/40 border-red-900/50 shadow-red-500/20" : "bg-slate-800/50 border-slate-700/50"}` }, /* @__PURE__ */ React.createElement("div", { className: `${displayAlerts.some((a) => a.severity === "P0") ? "text-red-300" : "text-slate-400"} text-xs mb-1` }, "\u91CD\u70B9\u544A\u8B66"), /* @__PURE__ */ React.createElement("div", { className: `text-2xl font-bold ${displayAlerts.some((a) => a.severity === "P0") ? "text-red-500 animate-pulse" : "text-slate-200"}` }, displayAlerts.filter((a) => a.severity === "P0").length)), /* @__PURE__ */ React.createElement("div", { className: "bg-cyan-900/20 p-4 rounded-xl border border-cyan-800/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-cyan-400 text-xs mb-1" }, "\u5F85\u6838\u7EBF\u7D22"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-cyan-300" }, displayAlerts.filter((a) => a.severity !== "P0").length)))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm flex-1 flex flex-col shadow-lg" }, /* @__PURE__ */ React.createElement("h2", { className: "text-sm font-semibold text-cyan-400 flex items-center mb-3" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-4 h-4 mr-2" }), "\u5E03\u63A7\u9632\u533A\u5B9E\u65F6\u72B6\u6001"), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-3 bg-slate-950/50 p-2 rounded border border-slate-800/50" }, "\u5F53\u524D\u4EC5\u663E\u793A\u5728\u3010\u7CFB\u7EDF\u914D\u7F6E - \u533A\u57DF\u914D\u7F6E\u3011\u4E2D\u5DF2\u542F\u7528\u7684\u4E1A\u52A1\u9632\u533A\u3002"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar pr-1" }, displayRegions.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "text-center flex flex-col items-center justify-center h-32 text-slate-500 text-xs mt-4" }, /* @__PURE__ */ React.createElement(MapIcon, { className: "w-8 h-8 mb-2 opacity-30" }), "\u6682\u672A\u542F\u7528\u4EFB\u4F55\u9632\u533A\uFF0C\u8BF7\u524D\u5F80\u914D\u7F6E\u5F00\u542F\u3002"), displayRegions.map((region) => {
    const regionAlerts = displayAlerts.filter((a) => a.regionId === region.id);
    const hasP0 = regionAlerts.some((a) => a.severity === "P0");
    const hasP1 = regionAlerts.some((a) => a.severity === "P1");
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: region.id,
        className: `flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors shadow-inner border
                          ${hasP0 ? "bg-red-950/60 border-red-500/50 hover:bg-red-900/60" : hasP1 ? "bg-orange-950/30 border-orange-900/50 hover:bg-orange-900/40" : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800"}`,
        onClick: () => setActiveRegionId(region.id)
      },
      /* @__PURE__ */ React.createElement("span", { className: `text-xs font-bold flex items-center ${hasP0 ? "text-red-200" : hasP1 ? "text-orange-200" : "text-slate-300"}` }, /* @__PURE__ */ React.createElement(region.icon, { className: `w-4 h-4 mr-2 opacity-80 ${hasP0 ? "text-red-400" : hasP1 ? "text-orange-400" : "text-slate-400"}` }), region.name),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-end gap-1.5" }, regionAlerts.map((a) => /* @__PURE__ */ React.createElement("span", { key: a.id, className: `flex items-center text-[10px] px-2 py-0.5 rounded
                              ${a.severity === "P0" ? "text-red-400 bg-red-950 border border-red-900/50" : "text-orange-400 bg-orange-950 border border-orange-900/50"}` }, /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full mr-1.5 ${a.severity === "P0" ? "bg-red-500 animate-ping" : "bg-orange-500"}` }), a.type.split(" ")[0])), regionAlerts.length === 0 && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-green-500 flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" }), "\u79E9\u5E8F\u5E73\u7A33"))
    );
  })))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col gap-4 z-10 group relative", onWheel: handleWheel }, /* @__PURE__ */ React.createElement("div", { className: `bg-[#080d19] border ${activeRegionId ? "border-cyan-500/60 shadow-[0_0_40px_rgba(34,211,238,0.2)]" : "border-cyan-500/30 shadow-[0_0_30px_rgba(8,145,178,0.15)]"} rounded-xl flex-1 relative overflow-hidden flex flex-col transition-colors duration-500` }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-900/95 to-transparent z-30 flex items-center justify-between px-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-cyan-300 text-xs font-bold tracking-wide drop-shadow-md" }, /* @__PURE__ */ React.createElement(MapIcon, { className: "w-4 h-4 mr-2" }), !activeRegionId ? "\u7FD4\u5B89\u533A\u6D77\u7FD4\u5927\u9053\u4E0E\u7FD4\u5B89\u5357\u8DEF\u5168\u606F\u5E03\u63A7\u5E95\u56FE" : `${activeRegionData.microTitle} - \u5FAE\u89C2\u6218\u672F\u5730\u56FE`), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("span", { className: "bg-slate-900/80 px-2 py-1 rounded border border-slate-700 text-[10px] text-slate-300 flex items-center shadow-sm" }, !activeRegionId ? /* @__PURE__ */ React.createElement(Maximize2, { className: "w-3.5 h-3.5 mr-1" }) : /* @__PURE__ */ React.createElement(Minimize2, { className: "w-3.5 h-3.5 mr-1" }), !activeRegionId ? "\u6309\u4F4F\u62D6\u52A8\u5E73\u79FB\uFF0C\u5411\u4E0A\u6EDA\u8F6E\u653E\u5927" : "\u6309\u4F4F\u62D6\u52A8\u5E73\u79FB\uFF0C\u5411\u4E0B\u6EDA\u8F6E\u8FD4\u56DE\u5168\u5C40\u6001\u52BF"), activeRegionId && /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveRegionId(null), className: "bg-cyan-900/80 hover:bg-cyan-800 text-cyan-100 text-[10px] px-3 py-1 rounded border border-cyan-600 transition-colors shadow-md" }, "\u8FD4\u56DE\u5B8F\u89C2\u5168\u56FE"))), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute inset-0 select-none",
      style: {
        transform: `translate3d(${mapOffset.x}px, ${mapOffset.y}px, 0)`,
        transition: isMapDragging ? "none" : "transform 120ms ease-out",
        cursor: isMapDragging ? "grabbing" : "grab",
        userSelect: "none"
      },
      onMouseDown: handleMapMouseDown
    },
    /* @__PURE__ */ React.createElement("div", { className: `absolute inset-0 transition-all duration-1000 ease-in-out transform origin-center ${activeRegionId ? "scale-[3] opacity-30 translate-y-[15%]" : "scale-100 opacity-90"}` }, /* @__PURE__ */ React.createElement("div", { className: "map-placeholder-wrapper z-0 pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: "" }, className: "w-full h-full" })), /* @__PURE__ */ React.createElement("svg", { className: "absolute inset-0 w-full h-full pointer-events-none z-[2]", viewBox: "0 0 800 600", preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id: "macroGridDots", width: "28", height: "28", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("circle", { cx: "2", cy: "2", r: "1", fill: "rgba(148,163,184,0.16)" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "macroRoadGlow", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "rgba(34,211,238,0.05)" }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: "rgba(34,211,238,0.24)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(59,130,246,0.08)" }))), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "0", width: "800", height: "600", fill: "url(#macroGridDots)", opacity: "0.42" }), /* @__PURE__ */ React.createElement("g", { fill: "none", strokeLinecap: "round" }, macroRoads.map((road) => /* @__PURE__ */ React.createElement("g", { key: road.id }, /* @__PURE__ */ React.createElement("path", { d: road.d, stroke: "rgba(8,15,28,0.75)", strokeWidth: road.width + 6 }), /* @__PURE__ */ React.createElement("path", { d: road.d, stroke: "url(#macroRoadGlow)", strokeWidth: road.width + 1.5 }), /* @__PURE__ */ React.createElement("path", { d: road.d, stroke: road.color, strokeWidth: road.width }), /* @__PURE__ */ React.createElement("path", { d: road.d, stroke: "rgba(186,230,253,0.34)", strokeWidth: "1.4", strokeDasharray: "10 16", opacity: "0.55" })))), /* @__PURE__ */ React.createElement("g", null, macroZones.map((zone) => /* @__PURE__ */ React.createElement("g", { key: zone.id }, /* @__PURE__ */ React.createElement("polygon", { points: zone.points, fill: zone.fill, stroke: zone.stroke, strokeWidth: "2", strokeDasharray: "10 6" }), /* @__PURE__ */ React.createElement("polygon", { points: zone.points, fill: "none", stroke: "rgba(255,255,255,0.05)", strokeWidth: "1" })))), /* @__PURE__ */ React.createElement("g", { fill: "rgba(148,163,184,0.24)" }, /* @__PURE__ */ React.createElement("circle", { cx: "102", cy: "98", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "166", cy: "146", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "236", cy: "188", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "516", cy: "118", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "618", cy: "220", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "692", cy: "414", r: "2.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "238", cy: "494", r: "2.5" }))), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-slate-950/40 z-10 pointer-events-none mix-blend-multiply" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-cyan-950/20 z-10 pointer-events-none mix-blend-color" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-10 pointer-events-none", style: { backgroundImage: "linear-gradient(rgba(34,211,238,0.08) 1px,transparent 1px), linear-gradient(90deg,rgba(34,211,238,0.08) 1px,transparent 1px)", backgroundSize: "40px 40px" } }), /* @__PURE__ */ React.createElement("div", { className: "map-panel-noise z-[11] pointer-events-none" }), /* @__PURE__ */ React.createElement("div", { className: "map-panel-vignette z-[12]" }))
  ), !activeRegionId && displayAlerts.some((a) => a.severity === "P0") && /* @__PURE__ */ React.createElement("div", { className: "absolute z-10 pointer-events-none", style: { top: "25%", left: "42%" } }, /* @__PURE__ */ React.createElement("div", { className: "absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[2px] border-red-500/40 rounded-full animate-ping", style: { animationDuration: "3s" } }), /* @__PURE__ */ React.createElement("div", { className: "absolute -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] border-[1px] border-red-500/60 rounded-full" })), /* @__PURE__ */ React.createElement("div", { className: `absolute inset-0 transition-all duration-700 ease-out z-20 ${!activeRegionId ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-110 pointer-events-none"}` }, macroLabels.map((label) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: label.id,
      className: "absolute pointer-events-none text-[11px] font-semibold tracking-[0.22em] text-cyan-100/55 uppercase",
      style: { top: label.top, left: label.left, transform: `translate(-50%, -50%) rotate(${label.rotate})` }
    },
    label.text
  )), /* @__PURE__ */ React.createElement("div", { className: "absolute top-14 left-4 w-48 rounded-xl map-overlay-card p-3 pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.28em] text-cyan-400/80 mb-2" }, "GIS Layer"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-cyan-500/20 bg-slate-950/55 px-2.5 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u5728\u7EBF\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-cyan-200" }, enabledCameraCount)), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-blue-500/20 bg-slate-950/55 px-2.5 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u8054\u52A8\u8B66\u529B"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-blue-200" }, linkedPoliceCount)), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-red-500/20 bg-slate-950/55 px-2.5 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u91CD\u70B9\u544A\u8B66"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-red-300" }, p0AlertCount)), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-orange-500/20 bg-slate-950/55 px-2.5 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u7EBF\u7D22\u5F85\u590D\u6838"), /* @__PURE__ */ React.createElement("div", { className: "text-lg font-semibold text-orange-300" }, p1AlertCount)))), /* @__PURE__ */ React.createElement("div", { className: "absolute right-4 top-14 w-44 rounded-xl map-overlay-card px-3 py-3 pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.26em] text-cyan-400/80 mb-2" }, "Map Legend"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-[11px] text-slate-300" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-red-500 mr-2 shadow-[0_0_8px_rgba(239,68,68,0.9)]" }), "\u91CD\u70B9\u70ED\u70B9"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u5B9E\u65F6")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-orange-400 mr-2 shadow-[0_0_8px_rgba(251,146,60,0.8)]" }), "\u4E00\u822C\u544A\u8B66"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u5F85\u6838")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-cyan-400 mr-2 shadow-[0_0_8px_rgba(34,211,238,0.8)]" }), "\u76D1\u63A7\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u5728\u7EBF")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded bg-blue-500 mr-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]" }), "\u5DE1\u903B\u529B\u91CF"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u8054\u52A8")))), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-4 left-4 rounded-xl map-overlay-card px-3 py-2.5 pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 text-[10px] text-slate-300" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-8 h-[2px] bg-cyan-400/70 mr-2" }), "\u4E3B\u5E72\u8DEF\u7F51"), /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-8 h-[2px] border-t border-dashed border-orange-400/70 mr-2" }), "\u91CD\u70B9\u9632\u533A"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u7FD4\u5B89\u533A\u91CD\u70B9\u573A\u666F\u5E03\u63A7\u793A\u610F"))), macroDistrictCards.map((region) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: `district-${region.id}`,
      className: "map-district-label pointer-events-none",
      style: {
        top: `calc(${region.macroPos.top} + 26px)`,
        left: `calc(${region.macroPos.left} + 18px)`,
        borderColor: region.statusTone === "critical" ? "rgba(248,113,113,0.32)" : region.statusTone === "warning" ? "rgba(251,146,60,0.28)" : "rgba(34,211,238,0.2)"
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 uppercase tracking-[0.18em]" }, "\u9632\u533A\u6001\u52BF"), /* @__PURE__ */ React.createElement("div", { className: `text-[10px] font-semibold ${region.statusTone === "critical" ? "text-red-300" : region.statusTone === "warning" ? "text-orange-300" : "text-emerald-300"}` }, region.regionAlerts.length > 0 ? `${region.regionAlerts.length} \u6761\u4E8B\u4EF6` : "\u6B63\u5E38")),
    /* @__PURE__ */ React.createElement("div", { className: "mt-1 text-xs font-semibold text-slate-100" }, region.name),
    /* @__PURE__ */ React.createElement("div", { className: "mt-1 flex items-center gap-3 text-[10px] text-slate-400" }, /* @__PURE__ */ React.createElement("span", null, region.cameras.length, " \u8DEF\u89C6\u9891"), /* @__PURE__ */ React.createElement("span", null, region.caps.length, " \u7C7B\u7B97\u6CD5"))
  )), displayRegions.map((region) => {
    const hasAlert = displayAlerts.some((a) => a.regionId === region.id);
    const hasP0 = displayAlerts.some((a) => a.regionId === region.id && a.severity === "P0");
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: region.id,
        className: "absolute group cursor-pointer",
        style: region.macroPos,
        "data-map-interactive": "true",
        onClick: () => setActiveRegionId(region.id),
        onMouseEnter: () => setHoveredRegionId(region.id),
        onMouseLeave: () => setHoveredRegionId(null)
      },
      hasAlert ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `w-8 h-8 ${hasP0 ? "bg-red-600" : "bg-orange-500"} rounded-full animate-ping absolute opacity-60 -top-1.5 -left-1.5` }), /* @__PURE__ */ React.createElement("div", { className: `w-5 h-5 ${hasP0 ? "bg-red-600" : "bg-orange-500"} rounded-full relative z-10 border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform` }, /* @__PURE__ */ React.createElement(AlertTriangle, { className: "w-2.5 h-2.5 text-white" })), /* @__PURE__ */ React.createElement("div", { className: `absolute top-8 -left-8 text-[11px] font-bold text-white ${hasP0 ? "bg-red-600" : "bg-orange-600"} px-2 py-1 rounded shadow-xl whitespace-nowrap z-20 border border-white/20` }, region.name)) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "w-3.5 h-3.5 bg-cyan-400 rounded-full relative z-10 border-2 border-white shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-150 transition-transform" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-5 -left-6 text-[10px] font-bold text-cyan-100 bg-slate-900/90 px-2 py-0.5 rounded border border-cyan-800/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" }, region.name))
    );
  })), /* @__PURE__ */ React.createElement("div", { className: `absolute inset-0 transition-all duration-700 ease-out z-20 ${activeRegionId ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"}` }, activeRegionId && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: "0 0 800 600", preserveAspectRatio: "xMidYMid slice" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "buildingGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "rgba(15, 23, 42, 0.4)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(30, 58, 138, 0.1)" }))), /* @__PURE__ */ React.createElement("g", { strokeWidth: "2", fill: "url(#buildingGrad)" }, /* @__PURE__ */ React.createElement("polygon", { points: "40,40 360,40 360,260 40,260", stroke: activeRegionData?.highlightQuadrant === "A1" ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.2)" }), /* @__PURE__ */ React.createElement("polygon", { points: "440,40 760,40 760,260 440,260", stroke: activeRegionData?.highlightQuadrant === "B2" ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.2)" }), /* @__PURE__ */ React.createElement("polygon", { points: "40,340 360,340 360,560 40,560", stroke: activeRegionData?.highlightQuadrant === "C3" ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.2)" }), /* @__PURE__ */ React.createElement("polygon", { points: "440,340 760,340 760,560 440,560", stroke: activeRegionData?.highlightQuadrant === "D4" ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.2)" }))), activeRegionData.cameras.map((cam) => {
    const camAlerts = displayAlerts.filter((a) => a.camera.includes(cam.name.split(" ")[0]));
    const hasP0 = camAlerts.some((a) => a.severity === "P0");
    const isCamAlert = camAlerts.length > 0;
    return /* @__PURE__ */ React.createElement("div", { key: cam.id, className: "absolute group cursor-pointer z-30 pointer-events-auto", style: cam.pos, "data-map-interactive": "true", onClick: isCamAlert ? () => onAlertClick(camAlerts[0]) : void 0 }, isCamAlert ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `w-10 h-10 ${hasP0 ? "bg-red-600/50" : "bg-orange-500/40"} rounded-full animate-ping absolute -top-2.5 -left-2.5` }), /* @__PURE__ */ React.createElement("div", { className: `w-5 h-5 ${hasP0 ? "bg-red-600" : "bg-orange-500"} rounded-full relative z-10 border-2 border-white flex items-center justify-center shadow-lg` }, /* @__PURE__ */ React.createElement(Video, { className: "w-2.5 h-2.5 text-white" })), /* @__PURE__ */ React.createElement("div", { className: `absolute top-7 -left-12 text-[10px] font-bold text-white ${hasP0 ? "bg-red-600" : "bg-orange-600"} px-2 py-1 rounded shadow-lg whitespace-nowrap flex flex-col items-center border border-white/20` }, /* @__PURE__ */ React.createElement("span", null, cam.name), /* @__PURE__ */ React.createElement("span", { className: "text-[9px] text-white/80 font-normal" }, stripPriorityLabel(camAlerts[0].type)))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "w-4 h-4 bg-slate-800 rounded-full relative z-10 border-[1.5px] border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Video, { className: "w-2 h-2 text-cyan-400 absolute top-0.5 left-0.5" })), /* @__PURE__ */ React.createElement("div", { className: "absolute top-5 -left-6 text-[10px] font-medium text-cyan-100 bg-slate-900/90 px-2 py-0.5 rounded border border-cyan-800/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" }, cam.name)));
  }), activeRegionData?.police.map((p, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "absolute z-30 pointer-events-auto", style: p.pos, "data-map-interactive": "true" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 bg-blue-600 rounded-md relative z-10 border-2 border-white flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,1)]" }, /* @__PURE__ */ React.createElement(Shield, { className: "w-3 h-3 text-white" })), /* @__PURE__ */ React.createElement("div", { className: "absolute top-7 -left-8 text-[10px] font-bold text-white bg-blue-800 px-2 py-1 rounded border border-blue-400 shadow-xl whitespace-nowrap flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse border border-white/50" }), p.name))))))), /* @__PURE__ */ React.createElement("div", { className: "w-1/4 flex flex-col gap-4 z-10" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/60 border border-cyan-900/50 rounded-xl p-5 backdrop-blur-sm flex-1 flex flex-col overflow-hidden shadow-lg" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-3 gap-3" }, /* @__PURE__ */ React.createElement("h2", { className: "text-sm font-semibold text-cyan-400 flex items-center shrink-0" }, /* @__PURE__ */ React.createElement(Bell, { className: "w-4 h-4 mr-2" }), "\u5B9E\u65F6\u667A\u80FD\u9884\u8B66\u6D41"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500 shrink-0" }, filteredAlerts.length, "/", displayAlerts.length)), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 mb-4 shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: alertSearchQuery,
      onChange: (e) => setAlertSearchQuery(e.target.value),
      placeholder: "\u641C\u5730\u70B9\u3001\u7C7B\u578B\u3001\u901A\u9053\u53F7",
      className: "w-full bg-slate-950/80 border border-slate-700 text-slate-200 text-sm rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-cyan-500"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setAlertSeverityFilter("all"),
      className: `px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-colors ${alertSeverityFilter === "all" ? "bg-cyan-900/40 text-cyan-300 border-cyan-700/60" : "bg-slate-950 border-slate-700 text-slate-400 hover:text-white"}`
    },
    "\u5168\u90E8"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setAlertSeverityFilter("p0"),
      className: `px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-colors ${alertSeverityFilter === "p0" ? "bg-red-950/40 text-red-300 border-red-700/60" : "bg-slate-950 border-slate-700 text-slate-400 hover:text-white"}`
    },
    "\u91CD\u70B9"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setAlertSeverityFilter("other"),
      className: `px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-colors ${alertSeverityFilter === "other" ? "bg-orange-950/40 text-orange-300 border-orange-700/60" : "bg-slate-950 border-slate-700 text-slate-400 hover:text-white"}`
    },
    "\u7EBF\u7D22"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setAlertSearchQuery("");
        setAlertSeverityFilter("all");
      },
      className: "ml-auto px-3 py-1.5 rounded-lg text-[11px] font-medium border bg-slate-950 border-slate-700 text-slate-400 hover:text-white transition-colors"
    },
    "\u6E05\u7A7A"
  ))), displayAlerts.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col items-center justify-center text-slate-500" }, /* @__PURE__ */ React.createElement(Shield, { className: "w-12 h-12 mb-3 opacity-30" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm" }, "\u5DF2\u542F\u7528\u9632\u533A\u76EE\u524D\u6CBB\u5B89\u5E73\u7A33")) : filteredAlerts.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col items-center justify-center text-slate-500" }, /* @__PURE__ */ React.createElement(Search, { className: "w-10 h-10 mb-3 opacity-30" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm" }, "\u6CA1\u6709\u5339\u914D\u5230\u5BF9\u5E94\u9884\u8B66"), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-slate-600 mt-2" }, "\u8BD5\u8BD5\u66F4\u6362\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6")) : /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar" }, filteredAlerts.map((alert) => /* @__PURE__ */ React.createElement("div", { key: alert.id, onClick: () => onAlertClick(alert), className: `p-3 rounded-xl border cursor-pointer transition-all group shadow-sm ${alert.severity === "P0" ? "bg-red-950/40 border-red-500/60 hover:bg-red-900/60" : "bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800"}` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("span", { className: `font-bold text-xs ${alert.severity === "P0" ? "text-red-400" : "text-orange-400"}` }, stripPriorityLabel(alert.type)), /* @__PURE__ */ React.createElement("span", { className: "text-slate-500 text-[10px] font-mono group-hover:text-white transition-colors" }, alert.time)), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-400 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center truncate" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-3.5 h-3.5 mr-1 shrink-0" }), alert.location), /* @__PURE__ */ React.createElement("span", { className: `text-white px-2 py-0.5 rounded ml-2 shrink-0 text-[10px] font-bold ${alert.severity === "P0" ? "bg-red-600 animate-pulse border border-red-400/50" : "bg-orange-600 border border-orange-400/50"}` }, severityText(alert.severity)))))))));
};
var AlertVerificationModal = ({ alert, onClose, onResolve }) => {
  if (!alert) return null;
  const isCritical = alert.severity === "P0";
  const isGathering = alert.type.includes("\u805A\u96C6");
  const isFight = alert.type.includes("\u6253\u6597");
  const isPetition = alert.type.includes("\u6D89\u7A33");
  const isCrowdGathering = isGathering && !isPetition;
  const isFightReview = isFight;
  const gatheringMetrics = alert.metrics || [];
  const fightMetrics = alert.metrics || [];
  const sopSteps = alert.sopSteps || [];
  const quickActions = alert.actions || [];
  const fightWindow = alert.fightWindow || {};
  const clipRange = alert.clipRange || { pre: 30, post: 30 };
  const previewImage = alert.previewImage || "";
  const confirmLabel = isFightReview ? "\u786E\u8BA4\u5C5E\u5B9E\u5E76\u6D3E\u8B66" : isCrowdGathering ? "\u786E\u8BA4\u805A\u96C6\u98CE\u9669\uFF0C\u7ACB\u5373\u6D3E\u5355\u758F\u5BFC" : isCritical ? "\u786E\u8BA4\u4E3A\u7A81\u53D1\u8B66\u60C5\uFF0C\u7ACB\u5373\u6D3E\u8B66\u963B\u65AD" : "\u786E\u8BA4\u4E3A\u6709\u6548\u7EBF\u7D22\uFF0C\u6D41\u8F6C\u8B66\u5355";
  return /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200" }, /* @__PURE__ */ React.createElement("div", { className: `bg-slate-900 border-2 ${isCritical ? "border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)]" : "border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.15)]"} rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col` }, /* @__PURE__ */ React.createElement("div", { className: `h-12 ${isCritical ? "bg-red-600" : "bg-orange-950/80"} border-b border-slate-700 flex items-center justify-between px-5` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(AlertOctagon, { className: `w-5 h-5 ${isCritical ? "text-white animate-pulse" : "text-orange-400"}` }), /* @__PURE__ */ React.createElement("h3", { className: "text-white font-bold text-base tracking-wide" }, isCritical ? "\u91CD\u70B9\u8B66\u60C5 / \u6781\u901F\u6307\u4EE4\u4E0B\u53D1\u53F0" : "\u7EBF\u7D22\u544A\u8B66\u590D\u6838\u53F0", "\uFF1A", stripPriorityLabel(alert.type))), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "text-white/70 hover:text-white hover:bg-black/20 p-1.5 rounded transition-colors" }, /* @__PURE__ */ React.createElement(X, { className: "w-5 h-5" }))), /* @__PURE__ */ React.createElement("div", { className: "flex h-[480px]" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 bg-black relative flex flex-col border-r border-slate-700" }, /* @__PURE__ */ React.createElement("div", { className: `flex-1 relative flex items-center justify-center overflow-hidden bg-slate-900 img-placeholder-container ${isCrowdGathering ? "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.22),transparent_36%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" : ""} ${isFightReview ? "bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_38%),linear-gradient(135deg,#020617_0%,#111827_48%,#1f2937_100%)]" : ""}` }, alert.id === "AL-1009" && /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: "" }, className: "absolute inset-0 w-full h-full" }), alert.id === "AL-1008" && /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: "" }, className: "absolute inset-0 w-full h-full" }), alert.id === "AL-1003" && /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: "" }, className: "absolute inset-0 w-full h-full" }), alert.id === "AL-1006" && /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: "" }, className: "absolute inset-0 w-full h-full" }), previewImage && /* @__PURE__ */ React.createElement(
    "img",
    {
      src: previewImage,
      alt: `${alert.location} \u5B9E\u65F6\u5F55\u50CF\u6F14\u793A\u753B\u9762`,
      className: `absolute inset-0 w-full h-full object-cover ${isCrowdGathering ? "opacity-85 mix-blend-normal saturate-[1.08] contrast-110 brightness-90" : "opacity-75"}`
    }
  ), isFightReview && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/85 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute left-[22%] top-[24%] w-[28%] h-[36%] border-[3px] border-red-500/80 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.18)] z-10" }, /* @__PURE__ */ React.createElement("span", { className: "absolute -top-7 left-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded font-bold" }, "FIGHT_ACTION")), /* @__PURE__ */ React.createElement("div", { className: "absolute left-[52%] top-[28%] w-[16%] h-[28%] border-[2px] border-orange-400/70 bg-orange-500/10 z-10" }, /* @__PURE__ */ React.createElement("span", { className: "absolute -top-7 left-0 bg-orange-500 text-white text-[10px] px-2 py-1 rounded font-bold" }, "CONTACT")), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 flex flex-col gap-2 z-20" }, /* @__PURE__ */ React.createElement("span", { className: "bg-red-500/90 text-white text-[10px] px-2 py-1 rounded border border-red-300/30 font-bold tracking-wide shadow-lg" }, fightWindow.labels?.[0] || "FIGHT_ACTION 96%")), /* @__PURE__ */ React.createElement("div", { className: "absolute right-5 bottom-5 w-[260px] bg-slate-950/85 border border-red-500/30 rounded-xl p-3 backdrop-blur-sm shadow-2xl z-20" }, /* @__PURE__ */ React.createElement("div", { className: "text-red-300 text-xs font-bold flex items-center mb-2" }, /* @__PURE__ */ React.createElement(PlayCircle, { className: "w-4 h-4 mr-1.5" }), " \u77ED\u89C6\u9891\u56DE\u653E"), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-300 leading-relaxed" }, fightWindow.summary || alert.sceneSummary))), isCrowdGathering && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute inset-0 opacity-60",
      style: {
        backgroundImage: "linear-gradient(rgba(34,211,238,0.08) 1px,transparent 1px), linear-gradient(90deg,rgba(34,211,238,0.08) 1px,transparent 1px)",
        backgroundSize: "28px 28px"
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "absolute left-[16%] top-[18%] right-[16%] bottom-[18%] border-2 border-red-500/80 bg-red-500/[0.08] shadow-[0_0_35px_rgba(239,68,68,0.25)] z-10" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 border border-white/10" }), /* @__PURE__ */ React.createElement("div", { className: "absolute left-[48%] top-0 bottom-0 w-px bg-cyan-300/30" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-[50%] left-0 right-0 h-px bg-cyan-300/30" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 rounded-full bg-slate-950/75 border border-cyan-400/40 shadow-[0_0_24px_rgba(34,211,238,0.2)] flex items-center justify-center backdrop-blur-sm" }, /* @__PURE__ */ React.createElement(PlayCircle, { className: "w-8 h-8 text-cyan-300" }))), /* @__PURE__ */ React.createElement("div", { className: "absolute -top-8 left-0 flex flex-wrap gap-2" }, alert.crowdTags?.map((tag) => /* @__PURE__ */ React.createElement("span", { key: tag, className: "bg-red-500/90 text-white text-[10px] px-2 py-1 rounded border border-red-300/30 font-bold tracking-wide shadow-lg" }, tag))), /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 bottom-3 bg-slate-950/80 border border-cyan-500/30 rounded-lg px-3 py-2 text-[11px] text-cyan-100 shadow-lg max-w-[220px]" }, /* @__PURE__ */ React.createElement("div", { className: "text-cyan-400 font-semibold mb-1 flex items-center" }, /* @__PURE__ */ React.createElement(Users, { className: "w-3.5 h-3.5 mr-1.5" }), " AI \u573A\u666F\u5224\u65AD"), /* @__PURE__ */ React.createElement("div", { className: "text-slate-300 leading-relaxed" }, alert.sceneSummary))), /* @__PURE__ */ React.createElement("div", { className: "absolute left-5 bottom-5 right-5 z-20" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/75 border border-slate-700/80 rounded-xl p-3 backdrop-blur-sm shadow-2xl" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between text-[10px] text-slate-400 mb-2" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(PlayCircle, { className: "w-3.5 h-3.5 mr-1 text-cyan-400" }), "\u4E8B\u4EF6\u7247\u6BB5\u56DE\u4F20"), /* @__PURE__ */ React.createElement("span", null, "\u7247\u6BB5\u65F6\u957F ", clipRange.pre + clipRange.post, "s")), /* @__PURE__ */ React.createElement("div", { className: "w-full h-2 bg-slate-800 rounded-full relative overflow-hidden border border-slate-700" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-0 w-[38%] bg-cyan-500/35" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-[38%] w-[12%] bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.95)] animate-pulse" }), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-[50%] right-0 bg-slate-700/70" })), /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono" }, /* @__PURE__ */ React.createElement("span", null, "-", clipRange.pre, "s \u4E8B\u524D\u8FFD\u6EAF"), /* @__PURE__ */ React.createElement("span", { className: "text-red-400 font-bold" }, "\u89E6\u53D1\u70B9 ", alert.time), /* @__PURE__ */ React.createElement("span", null, "+", clipRange.post, "s \u4E8B\u540E\u8DDF\u8E2A"))))), /* @__PURE__ */ React.createElement("span", { className: "text-white/80 font-mono text-xs absolute top-4 left-4 z-20 bg-black/50 px-2.5 py-1 rounded border border-white/20 backdrop-blur-sm" }, "\u25CF REC ", alert.camera, " \u5B9E\u65F6\u5F55\u50CF"), isPetition && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "absolute top-[35%] left-[20%] w-[60%] h-[30%] border-[3px] border-red-500 bg-red-500/10 flex items-start justify-between p-1 animate-pulse z-10" }, /* @__PURE__ */ React.createElement("span", { className: "bg-red-500 text-white text-[10px] px-1 font-bold" }, "BANNER_DETECTED")), /* @__PURE__ */ React.createElement("div", { className: "absolute top-[20%] left-[10%] w-[80%] h-[60%] border-[2px] border-orange-500/60 flex items-end justify-start p-1 z-10 pointer-events-none" }, /* @__PURE__ */ React.createElement("span", { className: "bg-orange-500 text-white text-[10px] px-1 font-bold flex items-center" }, /* @__PURE__ */ React.createElement(Users, { className: "w-3 h-3 mr-1" }), " HEAD_COUNT: 45"))), isFight && !isFightReview && /* @__PURE__ */ React.createElement("div", { className: "absolute top-1/4 left-1/3 w-40 h-48 border-[3px] border-red-500 bg-red-500/10 flex items-start justify-end p-1 animate-pulse z-10" }, /* @__PURE__ */ React.createElement("span", { className: "bg-red-500 text-white text-[10px] px-1 font-bold" }, "FIGHT_ACTION: 96%"))), /* @__PURE__ */ React.createElement("div", { className: "h-16 bg-slate-900 border-t border-slate-800 p-4 flex flex-col justify-center shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs text-slate-500 mb-2" }, /* @__PURE__ */ React.createElement("span", null, isFightReview ? `-${clipRange.pre}s (\u4E8B\u524D\u63A5\u89E6\u8FFD\u6EAF)` : isCrowdGathering ? `-${clipRange.pre}s (\u4E8B\u524D\u5BA2\u6D41\u8FFD\u6EAF)` : "-30s (\u4E8B\u524D\u884C\u4E3A\u8FFD\u6EAF)"), /* @__PURE__ */ React.createElement("span", { className: `${isCritical ? "text-red-400" : "text-orange-400"} font-bold` }, "\u4E8B\u4EF6\u89E6\u53D1\u70B9 ", alert.time), /* @__PURE__ */ React.createElement("span", null, isFightReview ? `+${clipRange.post}s (\u4E8B\u540E\u8FFD\u6253\u5224\u65AD)` : isCrowdGathering ? `+${clipRange.post}s (\u4E8B\u540E\u758F\u6563\u5224\u65AD)` : "+30s (\u4E8B\u540E\u6D41\u7A9C\u5224\u65AD)")), /* @__PURE__ */ React.createElement("div", { className: "w-full h-2.5 bg-slate-800 rounded-full relative overflow-hidden border border-slate-700 shadow-inner" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1/2 bg-cyan-600/40" }), /* @__PURE__ */ React.createElement("div", { className: `absolute left-[45%] top-0 bottom-0 w-[10%] ${isCritical ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]" : "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]"} animate-pulse` })))), /* @__PURE__ */ React.createElement("div", { className: `w-[360px] bg-slate-800 flex flex-col p-6 ${isCrowdGathering ? "bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))]" : ""} ${isFightReview ? "bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(31,41,55,0.96))]" : ""}` }, /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-bold text-slate-300 border-b border-slate-700 pb-3 mb-4" }, isFightReview ? "\u6253\u67B6\u6597\u6BB4\u6781\u901F\u590D\u6838\u53F0" : isCrowdGathering ? "\u805A\u96C6\u98CE\u9669\u667A\u80FD\u5904\u7F6E\u53F0" : "AI \u667A\u80FD\u8F85\u52A9\u7814\u5224\u62A5\u544A"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1.5 uppercase tracking-wider" }, "\u7CFB\u7EDF\u7F6E\u4FE1\u5EA6"), /* @__PURE__ */ React.createElement("div", { className: `text-2xl font-mono font-bold ${isCritical ? "text-red-400" : "text-orange-400"}` }, alert.conf)), /* @__PURE__ */ React.createElement("div", { className: "flex-1 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1.5 uppercase tracking-wider" }, "\u544A\u8B66\u5B9A\u7EA7"), /* @__PURE__ */ React.createElement("div", { className: `text-sm font-bold mt-1 px-2.5 py-1 rounded inline-block ${isCritical ? "bg-red-600 text-white animate-pulse" : "bg-orange-900/50 text-orange-400 border border-orange-800"}` }, alert.urgency))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/50 p-3 rounded-lg border border-slate-700/50" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1.5 uppercase tracking-wider" }, "\u5B9A\u4F4D\u4FE1\u606F"), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-200 flex font-medium" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-4 h-4 mr-1.5 text-cyan-500 shrink-0" }), " ", alert.location)), isFightReview && /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/50 p-4 rounded-xl border border-slate-700/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-sm font-bold text-slate-200 mb-3" }, /* @__PURE__ */ React.createElement(Shield, { className: "w-4 h-4 mr-2 text-cyan-400" }), "\u73B0\u573A\u8054\u52A8\u4FE1\u606F"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-sm text-slate-300" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("span", null, "\u6700\u8FD1\u8B66\u529B"), /* @__PURE__ */ React.createElement("span", { className: "text-cyan-300 font-semibold" }, fightWindow.nearestPolice || "\u5F85\u5339\u914D")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2" }, /* @__PURE__ */ React.createElement("span", null, "\u53EF\u7528\u5904\u7F6E"), /* @__PURE__ */ React.createElement("span", { className: "text-orange-300 font-semibold" }, fightWindow.nearestDisposal || "\u5F85\u8054\u52A8")))), isCrowdGathering && gatheringMetrics.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/50 p-4 rounded-xl border border-slate-700/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-sm font-bold text-cyan-300 mb-3" }, /* @__PURE__ */ React.createElement(BarChart3, { className: "w-4 h-4 mr-2 text-cyan-400" }), "\u91CF\u5316\u6307\u6807"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, gatheringMetrics.map((metric) => /* @__PURE__ */ React.createElement("div", { key: metric.label, className: "bg-slate-950/70 border border-slate-700/60 rounded-lg p-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, metric.label), /* @__PURE__ */ React.createElement("div", { className: `text-base font-mono font-bold ${metric.accent || "text-slate-200"}` }, metric.value), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-1 leading-relaxed" }, metric.note))))), isCrowdGathering && quickActions.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/50 p-4 rounded-xl border border-slate-700/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-sm font-bold text-slate-200 mb-3" }, /* @__PURE__ */ React.createElement(Siren, { className: "w-4 h-4 mr-2 text-orange-400" }), "\u5FEB\u6377\u5904\u7F6E\u52A8\u4F5C"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, quickActions.map((action) => /* @__PURE__ */ React.createElement("button", { key: action, className: "px-3 py-2 text-xs font-medium rounded-lg border border-cyan-700/50 bg-cyan-950/30 text-cyan-200 hover:bg-cyan-900/40 transition-colors" }, action)))), /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-xl border ${isCritical ? "bg-red-950/60 border-red-500/60" : "bg-orange-950/30 border-orange-500/40"} shadow-inner` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-sm font-bold mb-3 pb-3 border-b border-white/10" }, isCritical ? /* @__PURE__ */ React.createElement(ShieldAlert, { className: "w-4 h-4 mr-2 text-red-400" }) : /* @__PURE__ */ React.createElement(Activity, { className: "w-4 h-4 mr-2 text-orange-400" }), /* @__PURE__ */ React.createElement("span", { className: isCritical ? "text-red-400" : "text-orange-400" }, "\u7CFB\u7EDF\u7814\u5224\u4E0E\u5904\u7F6E\u5EFA\u8BAE (SOP)")), (isCrowdGathering || isFightReview) && sopSteps.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2.5" }, sopSteps.map((step, index) => /* @__PURE__ */ React.createElement("div", { key: step, className: "flex items-start" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 rounded-full bg-red-500/20 border border-red-400/40 text-red-300 text-[11px] font-bold flex items-center justify-center mt-0.5 mr-2 shrink-0" }, index + 1), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-300 leading-relaxed font-medium" }, step)))) : /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-300 leading-relaxed whitespace-pre-line font-medium" }, alert.aiAdvice))), /* @__PURE__ */ React.createElement("div", { className: "pt-5 border-t border-slate-700 space-y-3 mt-4" }, /* @__PURE__ */ React.createElement("button", { onClick: () => onResolve(alert.id, "dispatched"), className: `w-full flex items-center justify-center font-bold py-3.5 rounded-lg text-sm transition-all shadow-lg ${isCritical ? "bg-red-600 hover:bg-red-500 text-white shadow-red-600/40" : "bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-600/20"}` }, /* @__PURE__ */ React.createElement(CheckCircle, { className: "w-5 h-5 mr-2" }), confirmLabel), /* @__PURE__ */ React.createElement("button", { onClick: () => onResolve(alert.id, "ignored"), className: "w-full flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm py-3 rounded-lg transition-all group" }, /* @__PURE__ */ React.createElement(XCircle, { className: "w-4 h-4 mr-2" }), /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, isFightReview ? "\u6807\u8BB0\u8BEF\u62A5" : "\u6807\u8BB0\u4E3A\u6B63\u5E38\u6D3B\u52A8", " ", /* @__PURE__ */ React.createElement("span", { className: "ml-1.5 text-[10px] text-slate-500 group-hover:text-slate-400 font-normal" }, "(\u56DE\u6D41\u7B97\u6CD5\u4F18\u5316)"))))))));
};
var SystemConfigView = ({ activeRegions, setActiveRegions }) => {
  const [configSubView, setConfigSubView] = useState("region");
  const [searchRegionQuery, setSearchRegionQuery] = useState("");
  const handleToggleRegion = (regionId) => {
    setActiveRegions((prev) => prev.includes(regionId) ? prev.filter((id) => id !== regionId) : [...prev, regionId]);
  };
  const [selectedSiteForConfig, setSelectedSiteForConfig] = useState(activeRegions[0] || "gov");
  useEffect(() => {
    if (!activeRegions.includes(selectedSiteForConfig)) {
      setSelectedSiteForConfig(activeRegions[0] || "");
    }
  }, [activeRegions]);
  const [toggles, setToggles] = useState({ "v1": true, "v2": true, "n1": true, "n3": true, "n4": false, "g1": true, "s1": true, "m1": false });
  const [gatherCount, setGatherCount] = useState(40);
  const [gatherTime, setGatherTime] = useState(3);
  const [cameraSearchQuery, setCameraSearchQuery] = useState("");
  const [cameraStatusFilter, setCameraStatusFilter] = useState("all");
  const [selectedCameraId, setSelectedCameraId] = useState("");
  const [roiModalRegionId, setRoiModalRegionId] = useState("");
  const [roiName, setRoiName] = useState("\u5317\u4FA7\u6392\u961F\u533A ROI");
  const [roiThreshold, setRoiThreshold] = useState(40);
  const getCameraDisplayName = (cameraName) => cameraName.replace(/\s*\(.*?\)\s*/g, "").trim();
  const getCameraCode = (cameraName, regionId, index) => {
    const match = cameraName.match(/[A-Z]{2,}(?:-[A-Z]+)?-\d+/);
    return match ? match[0] : `${regionId.toUpperCase()}-CAM-${String(index + 1).padStart(3, "0")}`;
  };
  const inferCameraStatus = (cameraName, isAlert) => {
    if (isAlert) return "online";
    if (cameraName.includes("\u5357\u95E8\u67AA\u673A") || cameraName.includes("\u5730\u5E93B1") || cameraName.includes("\u5B66\u6821\u897F\u6821\u95E8")) {
      return "offline";
    }
    return "online";
  };
  const inferCameraType = (cameraName) => {
    if (cameraName.includes("\u7403\u673A")) return "\u7403\u673A";
    if (cameraName.includes("\u67AA\u673A")) return "\u67AA\u673A";
    return "\u56FA\u5B9A\u67AA\u673A";
  };
  const inferCameraDirection = (pos) => {
    const top = parseFloat(pos.top);
    const left = parseFloat(pos.left);
    if (top <= 35 && left <= 50) return "\u4E1C\u5357";
    if (top <= 35 && left > 50) return "\u897F\u5357";
    if (top > 35 && left <= 50) return "\u4E1C\u5317";
    return "\u897F\u5317";
  };
  const getCameraAbilities = (region, camera) => {
    const matchedCaps = region.caps.filter((cap) => {
      if (camera.isFight) return cap.title.includes("\u6253\u67B6") || cap.title.includes("\u51B2\u7A81");
      if (camera.isGathering) return cap.title.includes("\u805A\u96C6");
      if (camera.isPetition) return cap.title.includes("\u6D89\u7A33") || cap.title.includes("\u6A2A\u5E45");
      if (camera.label && camera.label.includes("\u62C9\u8F66\u95E8")) return cap.title.includes("\u62C9\u8F66\u95E8") || cap.title.includes("\u5077\u76D7");
      return false;
    });
    return (matchedCaps.length ? matchedCaps : region.caps.slice(0, 1)).map((cap) => cap.title.replace(/\s*\(P\d\)\s*/g, ""));
  };
  const cameraConfigRegion = ALL_REGIONS_CONFIG[selectedSiteForConfig];
  const cameraPoints = useMemo(() => {
    if (!cameraConfigRegion) return [];
    return cameraConfigRegion.cameras.map((cam, index) => ({
      id: cam.id,
      name: getCameraDisplayName(cam.name),
      code: getCameraCode(cam.name, cameraConfigRegion.id, index),
      regionName: cameraConfigRegion.name,
      zoneName: cameraConfigRegion.microTitle,
      status: inferCameraStatus(cam.name, cam.isAlert),
      installType: inferCameraType(cam.name),
      direction: inferCameraDirection(cam.pos),
      isCore: cam.isAlert || index === 0,
      protocol: "GB28181",
      abilities: getCameraAbilities(cameraConfigRegion, cam),
      alertLabel: cam.label || "\u5E38\u6001\u5DE1\u68C0",
      pos: cam.pos,
      raw: cam
    }));
  }, [selectedSiteForConfig]);
  const filteredCameraPoints = useMemo(() => {
    const keyword = cameraSearchQuery.trim().toLowerCase();
    return cameraPoints.filter((camera) => {
      const matchKeyword = !keyword || camera.name.toLowerCase().includes(keyword) || camera.code.toLowerCase().includes(keyword) || camera.alertLabel.toLowerCase().includes(keyword);
      const matchStatus = cameraStatusFilter === "all" || camera.status === cameraStatusFilter;
      return matchKeyword && matchStatus;
    });
  }, [cameraPoints, cameraSearchQuery, cameraStatusFilter]);
  const cameraSummary = useMemo(() => ({
    total: cameraPoints.length,
    online: cameraPoints.filter((camera) => camera.status === "online").length,
    offline: cameraPoints.filter((camera) => camera.status === "offline").length,
    core: cameraPoints.filter((camera) => camera.isCore).length
  }), [cameraPoints]);
  useEffect(() => {
    if (filteredCameraPoints.length === 0) {
      if (selectedCameraId) setSelectedCameraId("");
      return;
    }
    if (!filteredCameraPoints.some((camera) => camera.id === selectedCameraId)) {
      setSelectedCameraId(filteredCameraPoints[0].id);
    }
  }, [filteredCameraPoints, selectedCameraId]);
  const selectedCameraPoint = filteredCameraPoints.find((camera) => camera.id === selectedCameraId) || filteredCameraPoints[0] || null;
  const handleResetCameraFilters = () => {
    setCameraSearchQuery("");
    setCameraStatusFilter("all");
  };
  const roiModalRegion = ALL_REGIONS_CONFIG[roiModalRegionId];
  const renderRegionConfig = () => {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full animate-in fade-in duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold text-slate-100 mb-2" }, "\u533A\u57DF\u914D\u7F6E (\u9632\u533A\u7BA1\u7406)"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-500" }, "\u4ECE\u5168\u533A\u6D77\u91CF\u8857\u9053\u4E0E\u7F51\u683C\u4E2D\uFF0C\u52FE\u9009\u9700\u8981\u542F\u7528\u5E95\u5C42AI\u7B97\u6CD5\u5E03\u63A7\u7684\u91CD\u70B9\u4E1A\u52A1\u9632\u533A\u3002\u5F00\u542F\u540E\u5C06\u540C\u6B65\u5C55\u793A\u5728\u6001\u52BF\u5927\u5C4F\u3002")), /* @__PURE__ */ React.createElement("div", { className: "relative mb-6" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u533A\u57DF\u6216\u8857\u9053\u540D\u79F0\u68C0\u7D22\u540E\u53F0\u6570\u636E...",
        value: searchRegionQuery,
        onChange: (e) => setSearchRegionQuery(e.target.value),
        className: "w-full bg-slate-900/50 border border-slate-700 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-3 outline-none focus:border-cyan-500 transition-colors shadow-inner"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex gap-6 overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "w-1/2 bg-slate-900/40 border border-slate-800 rounded-xl p-5 overflow-y-auto custom-scrollbar" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center" }, /* @__PURE__ */ React.createElement(Network, { className: "w-4 h-4 mr-2" }), " \u5168\u533A\u8857\u9053\u4E0E\u7F51\u683C\u6811"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, REGION_TREE_DATA.map((street) => /* @__PURE__ */ React.createElement("div", { key: street.id, className: "border-b border-slate-800/50 pb-3 last:border-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-slate-300 font-medium mb-2" }, street.isExpanded ? /* @__PURE__ */ React.createElement(ArrowDownS, { className: "w-4 h-4 mr-1 text-slate-500" }) : /* @__PURE__ */ React.createElement(ArrowRightS, { className: "w-4 h-4 mr-1 text-slate-500" }), /* @__PURE__ */ React.createElement(Folder, { className: "w-4 h-4 mr-2 text-cyan-500/70" }), street.name), /* @__PURE__ */ React.createElement("div", { className: "pl-7 space-y-1.5" }, street.children.filter((c) => c.name.includes(searchRegionQuery)).map((region) => {
      const isConfigured = !!ALL_REGIONS_CONFIG[region.id];
      const isActive = activeRegions.includes(region.id);
      return /* @__PURE__ */ React.createElement("div", { key: region.id, className: "flex items-center justify-between p-2 rounded hover:bg-slate-800/50 transition-colors" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-slate-400" }, region.name), isConfigured ? /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => handleToggleRegion(region.id),
          className: `px-3 py-1 rounded text-xs font-medium transition-colors border ${isActive ? "bg-cyan-900/40 text-cyan-400 border-cyan-700/50 hover:bg-cyan-900/60" : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"}`
        },
        isActive ? "\u5DF2\u542F\u7528" : "\u542F\u7528"
      ) : /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-600 bg-slate-900 px-2 py-1 rounded border border-slate-800" }, "\u6682\u65E0\u8BBE\u5907"));
    })))))), /* @__PURE__ */ React.createElement("div", { className: "w-1/2 bg-slate-900/40 border border-slate-800 rounded-xl p-5 overflow-y-auto custom-scrollbar" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(CheckCircle, { className: "w-4 h-4 mr-2" }), " \u5DF2\u542F\u7528\u7684\u4E1A\u52A1\u9632\u533A"), /* @__PURE__ */ React.createElement("span", { className: "bg-cyan-950 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-cyan-800/50" }, activeRegions.length, " \u4E2A")), activeRegions.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "h-full flex flex-col items-center justify-center text-slate-500" }, /* @__PURE__ */ React.createElement(MapIcon, { className: "w-10 h-10 mb-3 opacity-30" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm" }, "\u5C1A\u672A\u542F\u7528\u4EFB\u4F55\u9632\u533A")) : /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, activeRegions.map((id) => {
      const r = ALL_REGIONS_CONFIG[id];
      if (!r) return null;
      return /* @__PURE__ */ React.createElement("div", { key: id, className: "bg-slate-800/60 border border-cyan-900/30 p-4 rounded-lg flex items-center justify-between shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 rounded bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center mr-3" }, /* @__PURE__ */ React.createElement(r.icon, { className: "w-4 h-4 text-cyan-400" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200" }, r.name), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-0.5" }, "\u5305\u542B ", r.cameras.length, " \u8DEF\u76D1\u63A7\u901A\u9053 | ", r.caps.length, " \u79CD\u7B97\u6CD5\u80FD\u529B"))), /* @__PURE__ */ React.createElement("button", { onClick: () => handleToggleRegion(id), className: "text-slate-500 hover:text-red-400 transition-colors p-2" }, /* @__PURE__ */ React.createElement(X, { className: "w-5 h-5" })));
    })))));
  };
  const renderCameraConfig = () => {
    const currentRegion = cameraConfigRegion;
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold text-slate-100 mb-2" }, "\u6444\u50CF\u5934\u70B9\u4F4D\u914D\u7F6E"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-500" }, "\u5C06\u5DF2\u542F\u7528\u9632\u533A\u4E0B\u7684\u6444\u50CF\u5934\u70B9\u4F4D\u4EE5\u793A\u610F\u56FE\u3001\u8BE6\u60C5\u548C\u6E05\u5355\u8054\u52A8\u65B9\u5F0F\u7EDF\u4E00\u7BA1\u7406\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u5B9A\u4F4D\u3001\u7B5B\u9009\u4E0E\u7EF4\u62A4\u3002")), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/40 border border-slate-800 rounded-xl p-4 mb-5 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-end justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-end gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, "\u9632\u533A\u7B5B\u9009"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: selectedSiteForConfig,
        onChange: (e) => setSelectedSiteForConfig(e.target.value),
        disabled: activeRegions.length === 0,
        className: "bg-slate-950 border border-slate-700 text-cyan-300 font-bold text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-56 cursor-pointer"
      },
      activeRegions.length === 0 ? /* @__PURE__ */ React.createElement("option", { value: "" }, "\u6682\u65E0") : activeRegions.map((id) => /* @__PURE__ */ React.createElement("option", { key: id, value: id }, ALL_REGIONS_CONFIG[id].name))
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, "\u5173\u952E\u8BCD\u68C0\u7D22"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: cameraSearchQuery,
        onChange: (e) => setCameraSearchQuery(e.target.value),
        placeholder: "\u8BF7\u8F93\u5165\u70B9\u4F4D\u540D\u79F0\u6216\u8BBE\u5907\u7F16\u53F7",
        className: "w-72 bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-cyan-500"
      }
    ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, "\u5728\u7EBF\u72B6\u6001"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: cameraStatusFilter,
        onChange: (e) => setCameraStatusFilter(e.target.value),
        className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-40 cursor-pointer"
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "\u5168\u90E8"),
      /* @__PURE__ */ React.createElement("option", { value: "online" }, "\u5728\u7EBF"),
      /* @__PURE__ */ React.createElement("option", { value: "offline" }, "\u79BB\u7EBF")
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          if (filteredCameraPoints.length > 0) {
            setSelectedCameraId(filteredCameraPoints[0].id);
          }
        },
        className: "bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-600/20"
      },
      "\u67E5\u8BE2"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: handleResetCameraFilters,
        className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-4 py-2.5 rounded-lg font-medium border border-slate-700 transition-colors"
      },
      "\u91CD\u7F6E"
    ), /* @__PURE__ */ React.createElement("button", { type: "button", className: "bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-300 text-sm px-4 py-2.5 rounded-lg font-medium border border-cyan-800/50 transition-colors" }, /* @__PURE__ */ React.createElement(Plus, { className: "w-4 h-4 mr-1.5 inline-block" }), "\u65B0\u589E\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "bg-slate-950 hover:bg-slate-900 text-slate-200 text-sm px-4 py-2.5 rounded-lg font-medium border border-slate-700 transition-colors" }, "\u4FDD\u5B58\u914D\u7F6E"))), currentRegion && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-3 mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u5F53\u524D\u9632\u533A\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-slate-100" }, cameraSummary.total)), /* @__PURE__ */ React.createElement("div", { className: "bg-emerald-950/30 border border-emerald-900/40 rounded-lg px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-emerald-400/80 mb-1" }, "\u5728\u7EBF\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-emerald-300" }, cameraSummary.online)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u79BB\u7EBF\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-slate-200" }, cameraSummary.offline)), /* @__PURE__ */ React.createElement("div", { className: "bg-cyan-950/30 border border-cyan-900/40 rounded-lg px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-cyan-400/80 mb-1" }, "\u6838\u5FC3\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-cyan-300" }, cameraSummary.core)))), !currentRegion ? /* @__PURE__ */ React.createElement("div", { className: "flex-1 bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex items-center justify-center text-slate-500" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement(Video, { className: "w-10 h-10 mb-3 opacity-30 mx-auto" }), /* @__PURE__ */ React.createElement("p", null, "\u8BF7\u9009\u62E9\u5DF2\u542F\u7528\u9632\u533A\u540E\u518D\u8FDB\u884C\u70B9\u4F4D\u914D\u7F6E"))) : /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 flex flex-col gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-5 shrink-0", style: { height: "360px" } }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-100 flex items-center" }, /* @__PURE__ */ React.createElement(MapIcon, { className: "w-4 h-4 mr-2 text-cyan-400" }), "\u70B9\u4F4D\u793A\u610F\u56FE"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-500 mt-1" }, currentRegion.microTitle, " \xB7 \u5F53\u524D\u663E\u793A ", filteredCameraPoints.length, " \u4E2A\u70B9\u4F4D")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-[11px] text-slate-400" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-cyan-400 mr-1.5" }), "\u5728\u7EBF"), /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-slate-500 mr-1.5" }), "\u79BB\u7EBF"), /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-red-500 mr-1.5" }), "\u5F53\u524D\u9009\u4E2D"))), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "relative flex-1 rounded-xl border border-slate-800 overflow-hidden",
        style: {
          backgroundColor: "#07101c",
          backgroundImage: "linear-gradient(rgba(51, 65, 85, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-[14%] rounded-[999px] border border-cyan-900/40 bg-slate-900/20" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-[25%] inset-y-[22%] rounded-[999px] border-4 border-slate-700/70 bg-slate-950/40" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[36%] top-[34%] h-[32%] w-[28%] rounded-2xl border border-emerald-700/50 bg-emerald-500/10" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[50%] top-[34%] h-[32%] border-l border-emerald-600/50" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[36%] top-[50%] w-[28%] border-t border-emerald-600/50" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[43%] top-[8%] text-sm font-bold text-slate-400" }, currentRegion.name),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[41%] bottom-[10%] text-sm font-bold text-slate-400" }, "\u5357\u4FA7\u8FB9\u754C"),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[15%] top-[46%] text-sm font-bold text-slate-400" }, "\u897F\u4FA7\u8054\u9632\u5E26"),
      /* @__PURE__ */ React.createElement("div", { className: "absolute right-[15%] top-[46%] text-sm font-bold text-slate-400" }, "\u4E1C\u4FA7\u8054\u9632\u5E26"),
      filteredCameraPoints.map((camera) => {
        const isSelected = selectedCameraPoint?.id === camera.id;
        return /* @__PURE__ */ React.createElement(
          "button",
          {
            key: camera.id,
            type: "button",
            onClick: () => setSelectedCameraId(camera.id),
            className: "absolute -translate-x-1/2 -translate-y-1/2 group",
            style: camera.pos
          },
          /* @__PURE__ */ React.createElement("div", { className: `absolute inset-0 rounded-full blur-md opacity-70 ${isSelected ? "bg-red-500/50 scale-[2.2]" : camera.status === "online" ? "bg-cyan-400/40 scale-[1.8]" : "bg-slate-500/30 scale-[1.6]"}` }),
          /* @__PURE__ */ React.createElement("div", { className: `relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "bg-red-600 border-red-200 shadow-[0_0_20px_rgba(239,68,68,0.5)]" : camera.status === "online" ? "bg-cyan-500 border-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]" : "bg-slate-700 border-slate-300"}` }, /* @__PURE__ */ React.createElement(Video, { className: "w-4 h-4 text-white" })),
          /* @__PURE__ */ React.createElement("div", { className: `mt-2 px-2 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${isSelected ? "bg-red-950/90 text-red-100 border border-red-500/40" : "bg-slate-950/90 text-slate-300 border border-slate-700/60 group-hover:border-cyan-700/60"}` }, camera.name)
        );
      }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute right-4 bottom-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "w-9 h-9 rounded-lg bg-slate-950/90 border border-slate-700 text-slate-300 hover:text-white transition-colors" }, "+"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "w-9 h-9 rounded-lg bg-slate-950/90 border border-slate-700 text-slate-300 hover:text-white transition-colors" }, "-"))
    )), /* @__PURE__ */ React.createElement("div", { className: "w-[360px] bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-100 flex items-center mb-4" }, /* @__PURE__ */ React.createElement(CameraLens, { className: "w-4 h-4 mr-2 text-cyan-400" }), "\u70B9\u4F4D\u8BE6\u60C5"), !selectedCameraPoint ? /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center justify-center text-slate-500 text-sm" }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u70B9\u4F4D") : /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/60 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-lg font-bold text-slate-100 mb-1" }, selectedCameraPoint.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-500 mb-3" }, selectedCameraPoint.code), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-md text-xs border ${selectedCameraPoint.status === "online" ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/40" : "bg-slate-800 text-slate-300 border-slate-700"}` }, selectedCameraPoint.status === "online" ? "\u5728\u7EBF" : "\u79BB\u7EBF"), /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-md text-xs border ${selectedCameraPoint.isCore ? "bg-cyan-950/40 text-cyan-300 border-cyan-800/40" : "bg-slate-800 text-slate-300 border-slate-700"}` }, selectedCameraPoint.isCore ? "\u6838\u5FC3\u70B9\u4F4D" : "\u666E\u901A\u70B9\u4F4D"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between gap-4 border-b border-slate-800 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u6240\u5C5E\u9632\u533A"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-200 text-right" }, selectedCameraPoint.regionName)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between gap-4 border-b border-slate-800 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u6218\u672F\u5206\u533A"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-200 text-right" }, selectedCameraPoint.zoneName)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between gap-4 border-b border-slate-800 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u5B89\u88C5\u7C7B\u578B"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-200" }, selectedCameraPoint.installType)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between gap-4 border-b border-slate-800 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u671D\u5411"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-200" }, selectedCameraPoint.direction)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between gap-4 border-b border-slate-800 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u63A5\u5165\u534F\u8BAE"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-200" }, selectedCameraPoint.protocol)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between gap-4 border-b border-slate-800 pb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, "\u5F53\u524D\u6807\u7B7E"), /* @__PURE__ */ React.createElement("span", { className: "text-slate-200 text-right" }, selectedCameraPoint.alertLabel))), /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-500 mb-2" }, "\u5173\u8054\u9884\u8B66\u80FD\u529B"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, selectedCameraPoint.abilities.map((ability) => /* @__PURE__ */ React.createElement("span", { key: ability, className: "px-2 py-1 rounded-md bg-cyan-950/30 text-cyan-300 text-xs border border-cyan-900/40" }, ability)))), /* @__PURE__ */ React.createElement("div", { className: "mt-auto pt-5 space-y-3" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "w-full bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium py-3 rounded-lg transition-colors shadow-lg shadow-cyan-600/20" }, "\u7F16\u8F91\u70B9\u4F4D\u4FE1\u606F"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm py-2.5 rounded-lg border border-slate-700 transition-colors" }, "\u67E5\u770B\u89C6\u9891"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm py-2.5 rounded-lg border border-slate-700 transition-colors" }, "\u5220\u9664\u70B9\u4F4D")))))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-100 flex items-center" }, /* @__PURE__ */ React.createElement(ListCheck, { className: "w-4 h-4 mr-2 text-cyan-400" }), "\u70B9\u4F4D\u6E05\u5355"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-500 mt-1" }, "\u70B9\u51FB\u884C\u53EF\u4E0E\u4E0A\u65B9\u70B9\u4F4D\u793A\u610F\u56FE\u548C\u8BE6\u60C5\u9762\u677F\u8054\u52A8")), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-500" }, "\u5171 ", filteredCameraPoints.length, " \u6761\u8BB0\u5F55")), filteredCameraPoints.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center justify-center text-slate-500 text-sm border border-dashed border-slate-800 rounded-xl" }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u5339\u914D\u70B9\u4F4D") : /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 overflow-auto custom-scrollbar" }, /* @__PURE__ */ React.createElement("table", { className: "w-full text-sm" }, /* @__PURE__ */ React.createElement("thead", { className: "sticky top-0 bg-slate-950/95 backdrop-blur-sm z-10" }, /* @__PURE__ */ React.createElement("tr", { className: "text-left text-slate-400 border-b border-slate-800" }, /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u5E8F\u53F7"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u70B9\u4F4D\u540D\u79F0"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u8BBE\u5907\u7F16\u53F7"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u6240\u5C5E\u9632\u533A"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u5728\u7EBF\u72B6\u6001"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u6838\u5FC3\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium" }, "\u5173\u8054\u80FD\u529B"), /* @__PURE__ */ React.createElement("th", { className: "py-3 px-3 font-medium text-right" }, "\u64CD\u4F5C"))), /* @__PURE__ */ React.createElement("tbody", null, filteredCameraPoints.map((camera, index) => {
      const isSelected = selectedCameraPoint?.id === camera.id;
      return /* @__PURE__ */ React.createElement(
        "tr",
        {
          key: camera.id,
          onClick: () => setSelectedCameraId(camera.id),
          className: `border-b border-slate-800/80 cursor-pointer transition-colors ${isSelected ? "bg-cyan-950/20" : "hover:bg-slate-800/40"}`
        },
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3 text-slate-400" }, index + 1),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3" }, /* @__PURE__ */ React.createElement("div", { className: "font-medium text-slate-100" }, camera.name), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-500 mt-1" }, camera.alertLabel)),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3 text-slate-300 font-mono" }, camera.code),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3 text-slate-300" }, camera.regionName),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3" }, /* @__PURE__ */ React.createElement("span", { className: `inline-flex items-center px-2 py-1 rounded-md text-xs border ${camera.status === "online" ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/40" : "bg-slate-800 text-slate-300 border-slate-700"}` }, /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full mr-2 ${camera.status === "online" ? "bg-emerald-400" : "bg-slate-400"}` }), camera.status === "online" ? "\u5728\u7EBF" : "\u79BB\u7EBF")),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3" }, /* @__PURE__ */ React.createElement("span", { className: `inline-flex px-2 py-1 rounded-md text-xs border ${camera.isCore ? "bg-cyan-950/40 text-cyan-300 border-cyan-800/40" : "bg-slate-800 text-slate-300 border-slate-700"}` }, camera.isCore ? "\u662F" : "\u5426")),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" }, camera.abilities.map((ability) => /* @__PURE__ */ React.createElement("span", { key: ability, className: "px-2 py-1 rounded-md bg-slate-950/70 text-slate-300 text-xs border border-slate-800" }, ability)))),
        /* @__PURE__ */ React.createElement("td", { className: "py-3 px-3 text-right whitespace-nowrap" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "text-cyan-300 hover:text-cyan-200 transition-colors mr-3" }, "\u67E5\u770B"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "text-cyan-300 hover:text-cyan-200 transition-colors mr-3" }, "\u7F16\u8F91"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "text-red-300 hover:text-red-200 transition-colors" }, "\u5220\u9664"))
      );
    })))))));
  };
  const renderRuleConfig = () => {
    const currentRegion = ALL_REGIONS_CONFIG[selectedSiteForConfig];
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full animate-in fade-in duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex items-end justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold text-slate-100 mb-2" }, "\u9884\u8B66\u89C4\u5219\u4E0E\u9632\u8BEF\u62A5\u914D\u7F6E"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-500" }, "\u4E3A\u7279\u5B9A\u533A\u57DF\u4E0B\u7684\u7B97\u6CD5\u6A21\u578B\u914D\u7F6E\u72EC\u7ACB\u9608\u503C\u4E0E ROI \u7535\u5B50\u56F4\u680F\uFF0C\u63D0\u5347\u5B9E\u6218\u51C6\u786E\u7387\u3002")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3 bg-slate-900 p-2 rounded-lg border border-slate-700" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-xs font-medium pl-2" }, "\u9632\u533A\u7B5B\u9009\uFF1A"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: selectedSiteForConfig,
        onChange: (e) => setSelectedSiteForConfig(e.target.value),
        disabled: activeRegions.length === 0,
        className: "bg-slate-950 border border-slate-600 text-cyan-300 font-bold text-sm rounded px-3 py-1.5 outline-none focus:border-cyan-500 w-56 cursor-pointer"
      },
      activeRegions.length === 0 ? /* @__PURE__ */ React.createElement("option", { value: "" }, "\u6682\u65E0") : activeRegions.map((id) => /* @__PURE__ */ React.createElement("option", { key: id, value: id }, ALL_REGIONS_CONFIG[id].name))
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2" }, !currentRegion ? /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center justify-center text-slate-500" }, /* @__PURE__ */ React.createElement(Settings, { className: "w-10 h-10 mb-3 opacity-30 block mx-auto" }), /* @__PURE__ */ React.createElement("p", null, "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u9632\u533A")) : currentRegion.caps.map((cap) => /* @__PURE__ */ React.createElement("div", { key: cap.id, className: "bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 flex flex-col shadow-sm transition-colors" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start space-x-4" }, /* @__PURE__ */ React.createElement("div", { className: `mt-0.5 p-3 rounded-lg ${cap.bg} ${cap.color}` }, /* @__PURE__ */ React.createElement(cap.icon, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-slate-200 font-bold text-sm mb-1.5" }, cap.title), /* @__PURE__ */ React.createElement("p", { className: "text-slate-400 text-xs mb-2 max-w-3xl leading-relaxed" }, cap.desc), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u4F9D\u8D56\u611F\u77E5\u6E90: ", cap.sources.join(" / ")))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-5 shrink-0" }, cap.hasRoi && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setRoiModalRegionId(currentRegion.id),
        className: "text-slate-400 hover:text-cyan-400 flex flex-col items-center justify-center group/roi cursor-pointer p-1 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Crop, { className: "text-xl mb-1 group-hover/roi:scale-110 transition-transform" }),
      /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-medium opacity-80 group-hover/roi:opacity-100 transition-opacity whitespace-nowrap" }, "\u753B\u5236 ROI \u56F4\u680F")
    ), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center ml-2 border-l border-slate-700 pl-5" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setToggles((p) => ({ ...p, [cap.id]: !p[cap.id] })),
        className: `w-14 h-7 rounded-full transition-colors duration-300 relative focus:outline-none mb-1 ${toggles[cap.id] ? "bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]" : "bg-slate-700"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: `w-5 h-5 bg-white rounded-full absolute top-[4px] transition-transform duration-300 ease-in-out shadow-md ${toggles[cap.id] ? "left-[30px]" : "left-[4px]"}` })
    ), /* @__PURE__ */ React.createElement("span", { className: `text-[10px] font-bold ${toggles[cap.id] ? "text-cyan-400" : "text-slate-500"}` }, toggles[cap.id] ? "\u8FD0\u884C\u4E2D" : "\u5DF2\u505C\u7528")))), cap.isGathering && toggles[cap.id] && /* @__PURE__ */ React.createElement("div", { className: "mt-5 pt-5 border-t border-slate-700/50 flex flex-col gap-4 bg-slate-950/30 -mx-5 px-5 -mb-5 pb-5 rounded-b-xl" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-yellow-500 flex items-center mb-1" }, /* @__PURE__ */ React.createElement(Settings, { className: "w-4 h-4 mr-1.5" }), " \u805A\u96C6\u9632\u8BEF\u62A5\u53CC\u9608\u503C\u8C03\u53C2 (\u53C2\u6570\u9700\u4E1A\u52A1\u5927\u961F\u8BC4\u4F30\u5B9A\u7EA7)"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-inner" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs text-slate-300 mb-4" }, /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, "\u9632\u533A\u5185\u805A\u96C6\u4EBA\u6570\u4E0A\u9650"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded" }, gatherCount, " \u4EBA")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        min: "10",
        max: "200",
        step: "1",
        value: gatherCount,
        onChange: (e) => setGatherCount(e.target.value),
        className: "w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-3 border-t border-slate-800/50 pt-2" }, "\u4EC5\u5F53\u753B\u5B9A ROI \u5185\u4EBA\u5934\u6570\u8D85\u51FA\u6B64\u503C\u65F6\u5F00\u59CB\u8BFB\u79D2\u3002")), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-inner" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-xs text-slate-300 mb-4" }, /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, "\u6301\u7EED\u6EDE\u7559/\u62E5\u5835\u65F6\u957F\u4E0A\u9650"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-orange-400 font-bold bg-orange-950 px-2 py-0.5 rounded" }, gatherTime, " \u5206\u949F")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        min: "1",
        max: "15",
        step: "1",
        value: gatherTime,
        onChange: (e) => setGatherTime(e.target.value),
        className: "w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-3 border-t border-slate-800/50 pt-2" }, "\u4EBA\u7FA4\u8FBE\u6807\u4E14\u6EDE\u7559\u8D85\u8FC7\u6B64\u65F6\u95F4\u624D\u89E6\u53D1\u6700\u7EC8\u544A\u8B66\uFF0C\u8FC7\u6EE4\u77AC\u95F4\u5BA2\u6D41\u5CF0\u503C\u3002"))))))));
  };
  const renderRoiModal = () => {
    if (!roiModalRegion) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-12 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-slate-100 font-bold" }, /* @__PURE__ */ React.createElement(Crop, { className: "w-4 h-4 mr-2 text-cyan-400" }), "ROI \u56F4\u680F\u7ED8\u5236\uFF1A", roiModalRegion.name), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setRoiModalRegionId(""), className: "text-slate-300 hover:text-white" }, /* @__PURE__ */ React.createElement(X, { className: "w-5 h-5" }))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-12 gap-0 min-h-[520px]" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-8 p-5 bg-slate-950/60 border-r border-slate-800" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100" }, "\u533A\u57DF\u9884\u89C8"), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-500" }, "\u5148\u7528\u9884\u89C8\u56FE\u9009\u62E9\u91CD\u70B9\u533A\u57DF\uFF0C\u540E\u7EED\u53EF\u5347\u7EA7\u4E3A\u62D6\u62FD\u753B\u6846")), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2 py-1 rounded-md" }, "\u5F53\u524D\u9632\u533A\uFF1A", roiModalRegion.microTitle)), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "relative rounded-2xl border border-slate-800 overflow-hidden",
        style: {
          height: "420px",
          backgroundColor: "#07101c",
          backgroundImage: "linear-gradient(rgba(51, 65, 85, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px"
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-[12%] rounded-[999px] border border-cyan-900/40 bg-slate-900/20" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-[22%] inset-y-[18%] rounded-[999px] border-4 border-slate-700/70 bg-slate-950/40" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[32%] top-[28%] w-[36%] h-[40%] rounded-2xl border-2 border-red-500/70 bg-red-500/10 shadow-[0_0_25px_rgba(239,68,68,0.18)]" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[36%] top-[32%] w-[28%] h-[28%] rounded-xl border border-cyan-400/50 bg-cyan-500/10" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[41%] top-[18%] text-sm font-bold text-slate-400" }, roiModalRegion.name),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-[34%] bottom-[10%] text-xs text-slate-400" }, "\u53EF\u5C06\u6B64\u533A\u57DF\u4F5C\u4E3A\u91CD\u70B9\u8BC6\u522B ROI")
    )), /* @__PURE__ */ React.createElement("div", { className: "col-span-4 p-5 bg-slate-900/50" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100 mb-4" }, "ROI \u8BBE\u7F6E"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, "ROI \u540D\u79F0"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: roiName,
        onChange: (e) => setRoiName(e.target.value),
        className: "w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-200 text-sm outline-none focus:border-cyan-500"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between text-[11px] text-slate-500 mb-2" }, /* @__PURE__ */ React.createElement("span", null, "\u4EBA\u6570\u9608\u503C"), /* @__PURE__ */ React.createElement("span", { className: "text-cyan-300 font-mono" }, roiThreshold, " \u4EBA")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        min: "10",
        max: "200",
        step: "5",
        value: roiThreshold,
        onChange: (e) => setRoiThreshold(Number(e.target.value)),
        className: "w-full"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 leading-relaxed" }, "\u5F53\u524D\u4EC5\u63D0\u4F9B\u8F7B\u91CF\u9884\u89C8\u4E0E\u9608\u503C\u8BBE\u7F6E\uFF0C\u540E\u7EED\u53EF\u63A5\u771F\u5B9E\u62D6\u62FD\u753B\u6846\u548C\u591A ROI \u7BA1\u7406\u3002"), /* @__PURE__ */ React.createElement("div", { className: "pt-2 space-y-3" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "w-full bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium py-3 rounded-lg transition-colors shadow-lg shadow-cyan-600/20" }, "\u4FDD\u5B58 ROI"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setRoiModalRegionId(""), className: "w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium py-3 rounded-lg border border-slate-700 transition-colors" }, "\u53D6\u6D88")))))));
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex h-full bg-[#0b1120] relative z-20" }, /* @__PURE__ */ React.createElement("div", { className: "w-60 bg-slate-900/80 border-r border-slate-800 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.2)] shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "h-16 flex items-center px-6 border-b border-slate-800/60" }, /* @__PURE__ */ React.createElement("h2", { className: "text-white font-bold tracking-wide" }, "\u7CFB\u7EDF\u914D\u7F6E")), /* @__PURE__ */ React.createElement("div", { className: "flex-1 py-4 flex flex-col gap-1 px-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setConfigSubView("region"),
      className: `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${configSubView === "region" ? "bg-cyan-600/20 text-cyan-400" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`
    },
    /* @__PURE__ */ React.createElement(MapPin, { className: "w-5 h-5 mr-3" }),
    " \u533A\u57DF\u914D\u7F6E"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setConfigSubView("camera"),
      className: `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${configSubView === "camera" ? "bg-cyan-600/20 text-cyan-400" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`
    },
    /* @__PURE__ */ React.createElement(CameraLens, { className: "w-5 h-5 mr-3" }),
    " \u6444\u50CF\u5934\u70B9\u4F4D\u914D\u7F6E"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setConfigSubView("rule"),
      className: `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${configSubView === "rule" ? "bg-cyan-600/20 text-cyan-400" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`
    },
    /* @__PURE__ */ React.createElement(Bell, { className: "w-5 h-5 mr-3" }),
    " \u9884\u8B66\u89C4\u5219\u914D\u7F6E"
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 p-6 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]" }, configSubView === "region" && renderRegionConfig(), configSubView === "camera" && renderCameraConfig(), configSubView === "rule" && renderRuleConfig()), renderRoiModal());
};
var DispositionHistoryView = ({ records, selectedRecordId, onSelectRecord, onOpenReport }) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [keyword, setKeyword] = useState("");
  const filteredRecords = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return records.filter((record) => {
      const matchStatus = statusFilter === "all" || record.dispositionStatus === statusFilter;
      const matchKeyword = !q || record.alertType.toLowerCase().includes(q) || record.location.toLowerCase().includes(q) || record.regionName.toLowerCase().includes(q) || record.handler.toLowerCase().includes(q);
      return matchStatus && matchKeyword;
    });
  }, [records, statusFilter, keyword]);
  const summary = useMemo(() => ({
    total: records.length,
    closed: records.filter((record) => record.dispositionStatus === "\u5DF2\u89E3\u9664").length,
    pendingReview: records.filter((record) => record.reviewStatus === "\u5F85\u590D\u76D8").length,
    misreport: records.filter((record) => record.dispositionStatus === "\u8BEF\u62A5\u56DE\u6D41").length
  }), [records]);
  useEffect(() => {
    if (filteredRecords.length === 0) return;
    if (!filteredRecords.some((record) => record.id === selectedRecordId)) {
      onSelectRecord(filteredRecords[0].id);
    }
  }, [filteredRecords, selectedRecordId, onSelectRecord]);
  const selectedRecord = filteredRecords.find((record) => record.id === selectedRecordId) || filteredRecords[0] || null;
  return /* @__PURE__ */ React.createElement("div", { className: "flex h-full bg-[#0b1120] relative z-20" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 p-6 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex items-end justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold text-slate-100 mb-2" }, "\u5386\u53F2\u5904\u7F6E\u8BB0\u5F55"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-500" }, "\u6C89\u6DC0\u6BCF\u6761\u544A\u8B66\u4ECE\u89E6\u53D1\u3001\u786E\u8BA4\u3001\u6D3E\u5355\u5230\u89E3\u9664\u7684\u5168\u8FC7\u7A0B\uFF0C\u4FBF\u4E8E\u67E5\u8BE2\u95ED\u73AF\u548C\u540E\u7EED\u590D\u76D8\u3002")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: keyword,
      onChange: (e) => setKeyword(e.target.value),
      placeholder: "\u68C0\u7D22\u5730\u70B9\u3001\u7C7B\u578B\u3001\u5904\u7F6E\u4EBA",
      className: "w-72 bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-cyan-500"
    }
  )), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: statusFilter,
      onChange: (e) => setStatusFilter(e.target.value),
      className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-40 cursor-pointer"
    },
    /* @__PURE__ */ React.createElement("option", { value: "all" }, "\u5168\u90E8\u72B6\u6001"),
    /* @__PURE__ */ React.createElement("option", { value: "\u5DF2\u89E3\u9664" }, "\u5DF2\u89E3\u9664"),
    /* @__PURE__ */ React.createElement("option", { value: "\u5904\u7F6E\u4E2D" }, "\u5904\u7F6E\u4E2D"),
    /* @__PURE__ */ React.createElement("option", { value: "\u8BEF\u62A5\u56DE\u6D41" }, "\u8BEF\u62A5\u56DE\u6D41")
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-3 mb-5" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u7D2F\u8BA1\u5904\u7F6E"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-slate-100" }, summary.total)), /* @__PURE__ */ React.createElement("div", { className: "bg-emerald-950/30 border border-emerald-900/40 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-emerald-400/80 mb-1" }, "\u5DF2\u95ED\u73AF"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-emerald-300" }, summary.closed)), /* @__PURE__ */ React.createElement("div", { className: "bg-amber-950/30 border border-amber-900/40 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-amber-400/80 mb-1" }, "\u5F85\u590D\u76D8"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-amber-300" }, summary.pendingReview)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u8BEF\u62A5\u56DE\u6D41"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-slate-100" }, summary.misreport))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 flex gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "w-[42%] min-w-[360px] bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "px-5 py-4 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-200" }, "\u8BB0\u5F55\u5217\u8868"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500" }, filteredRecords.length, " \u6761")), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3" }, filteredRecords.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center justify-center text-slate-500 text-sm" }, "\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u8BB0\u5F55") : filteredRecords.map((record) => {
    const selected = record.id === selectedRecord?.id;
    const isP0 = record.severity === "P0";
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: record.id,
        type: "button",
        onClick: () => onSelectRecord(record.id),
        className: `w-full text-left rounded-xl border p-4 transition-all ${selected ? "bg-cyan-950/30 border-cyan-700/60 shadow-[0_0_20px_rgba(8,145,178,0.12)]" : "bg-slate-950/40 border-slate-800 hover:border-slate-700"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between gap-3 mb-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100" }, stripPriorityLabel(record.alertType)), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, record.regionName, " / ", record.location)), /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-md text-[10px] font-bold border ${isP0 ? "bg-red-950/50 text-red-300 border-red-800/50" : "bg-orange-950/40 text-orange-300 border-orange-800/50"}` }, severityText(record.severity))),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between text-[11px] text-slate-400 mb-2" }, /* @__PURE__ */ React.createElement("span", null, "\u5904\u7F6E\u4EBA\uFF1A", record.handler), /* @__PURE__ */ React.createElement("span", null, record.handledAt)),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-md text-[10px] border ${record.dispositionStatus === "\u5DF2\u89E3\u9664" ? "bg-emerald-950/30 text-emerald-300 border-emerald-800/40" : record.dispositionStatus === "\u8BEF\u62A5\u56DE\u6D41" ? "bg-slate-800 text-slate-300 border-slate-700" : "bg-amber-950/30 text-amber-300 border-amber-800/40"}` }, record.dispositionStatus), /* @__PURE__ */ React.createElement("span", { className: `text-[10px] ${record.reviewStatus === "\u5F85\u590D\u76D8" ? "text-amber-400" : "text-slate-500"}` }, record.reviewStatus))
    );
  }))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0 bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col" }, !selectedRecord ? /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center justify-center text-slate-500" }, "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u5904\u7F6E\u8BB0\u5F55") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "px-6 py-5 border-b border-slate-800 flex items-start justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, selectedRecord.id), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-slate-100" }, stripPriorityLabel(selectedRecord.alertType)), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-400 mt-2 max-w-3xl" }, selectedRecord.resultSummary)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 shrink-0" }, selectedRecord.reportId && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => onOpenReport(selectedRecord.reportId),
      className: "bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2.5 rounded-lg font-medium shadow-lg shadow-cyan-600/20 transition-colors"
    },
    "\u67E5\u770B\u590D\u76D8\u62A5\u544A"
  ), /* @__PURE__ */ React.createElement("button", { type: "button", className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-4 py-2.5 rounded-lg border border-slate-700 transition-colors" }, "\u5BFC\u51FA\u5904\u7F6E\u5355"))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-6 space-y-5" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u544A\u8B66\u65F6\u95F4"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, selectedRecord.reportedAt)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u5904\u7F6E\u65F6\u95F4"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, selectedRecord.handledAt)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u5B8C\u6210\u65F6\u95F4"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, selectedRecord.completedAt)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u73B0\u573A\u6307\u6325"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, selectedRecord.commander))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "col-span-2 bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u5904\u7F6E\u65F6\u95F4\u7EBF"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, selectedRecord.timeline.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, className: "flex items-start" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-cyan-400 mt-1.5 mr-3 shrink-0" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm text-slate-300 leading-relaxed" }, item))))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u8BC1\u636E\u7559\u75D5"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, selectedRecord.evidence.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, className: "px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300" }, item))))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-3" }, "\u590D\u76D8\u5907\u6CE8"), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-300 leading-relaxed" }, selectedRecord.notes)))))))));
};
var ReviewReportsView = ({ reports, selectedReportId, onSelectReport }) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredReports = useMemo(() => {
    return reports.filter((report) => statusFilter === "all" || report.status === statusFilter);
  }, [reports, statusFilter]);
  useEffect(() => {
    if (filteredReports.length === 0) return;
    if (!filteredReports.some((report) => report.id === selectedReportId)) {
      onSelectReport(filteredReports[0].id);
    }
  }, [filteredReports, selectedReportId, onSelectReport]);
  const selectedReport = filteredReports.find((report) => report.id === selectedReportId) || filteredReports[0] || null;
  return /* @__PURE__ */ React.createElement("div", { className: "flex h-full bg-[#0b1120] relative z-20" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 p-6 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full min-h-0 animate-in fade-in duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6 flex items-end justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold text-slate-100 mb-2" }, "\u590D\u76D8\u62A5\u544A"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-500" }, "\u9488\u5BF9\u91CD\u70B9\u4E8B\u4EF6\u81EA\u52A8\u6C89\u6DC0\u590D\u76D8\u521D\u7A3F\uFF0C\u652F\u6301\u4EBA\u5DE5\u8865\u5145\u53D1\u73B0\u3001\u7B56\u7565\u5EFA\u8BAE\u548C\u7ECF\u9A8C\u5F52\u6863\u3002")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
    "select",
    {
      value: statusFilter,
      onChange: (e) => setStatusFilter(e.target.value),
      className: "bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500 w-40 cursor-pointer"
    },
    /* @__PURE__ */ React.createElement("option", { value: "all" }, "\u5168\u90E8\u72B6\u6001"),
    /* @__PURE__ */ React.createElement("option", { value: "\u5F85\u590D\u76D8" }, "\u5F85\u590D\u76D8"),
    /* @__PURE__ */ React.createElement("option", { value: "\u5DF2\u5F52\u6863" }, "\u5DF2\u5F52\u6863")
  ), /* @__PURE__ */ React.createElement("button", { type: "button", className: "bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2.5 rounded-lg font-medium shadow-lg shadow-cyan-600/20 transition-colors" }, "\u5BFC\u51FA\u590D\u76D8 PDF"))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 flex gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "w-[38%] min-w-[340px] bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "px-5 py-4 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-200" }, "\u62A5\u544A\u6E05\u5355"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500" }, filteredReports.length, " \u4EFD")), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3" }, filteredReports.map((report) => {
    const selected = report.id === selectedReport?.id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: report.id,
        type: "button",
        onClick: () => onSelectReport(report.id),
        className: `w-full text-left rounded-xl border p-4 transition-all ${selected ? "bg-cyan-950/30 border-cyan-700/60 shadow-[0_0_20px_rgba(8,145,178,0.12)]" : "bg-slate-950/40 border-slate-800 hover:border-slate-700"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between gap-3 mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100 leading-relaxed" }, report.title), /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-md text-[10px] border ${report.status === "\u5F85\u590D\u76D8" ? "bg-amber-950/30 text-amber-300 border-amber-800/40" : "bg-emerald-950/30 text-emerald-300 border-emerald-800/40"}` }, report.status)),
      /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, report.location),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between text-[11px] text-slate-400" }, /* @__PURE__ */ React.createElement("span", null, report.owner), /* @__PURE__ */ React.createElement("span", null, report.generatedAt))
    );
  }))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0 bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col" }, !selectedReport ? /* @__PURE__ */ React.createElement("div", { className: "h-full flex items-center justify-center text-slate-500" }, "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u590D\u76D8\u62A5\u544A") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "px-6 py-5 border-b border-slate-800" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, selectedReport.id, " / ", selectedReport.stageNote), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-slate-100" }, selectedReport.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-400 mt-2 max-w-3xl" }, selectedReport.summary)), /* @__PURE__ */ React.createElement("div", { className: "text-right shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500" }, "\u4E8B\u4EF6\u7A97\u53E3"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100 mt-1" }, selectedReport.eventWindow)))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-6 space-y-5" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u4E8B\u4EF6\u7C7B\u578B"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, stripPriorityLabel(selectedReport.type))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u5730\u70B9"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, selectedReport.location)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u8D23\u4EFB\u5355\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-slate-100" }, selectedReport.owner)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-1" }, "\u4E25\u91CD\u7B49\u7EA7"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-semibold text-red-300" }, severityText(selectedReport.severity)))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u5173\u952E\u53D1\u73B0"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, selectedReport.keyFindings.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, className: "flex items-start" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-red-400 mt-1.5 mr-3 shrink-0" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm text-slate-300 leading-relaxed" }, item))))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u4E8B\u4EF6\u65F6\u95F4\u7EBF"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, selectedReport.timeline.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, className: "flex items-start" }, /* @__PURE__ */ React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-cyan-400 mt-1.5 mr-3 shrink-0" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm text-slate-300 leading-relaxed" }, item)))))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u4F18\u5316\u5EFA\u8BAE"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-4" }, selectedReport.recommendations.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, className: "bg-slate-900/70 border border-slate-800 rounded-lg p-4 text-sm text-slate-300 leading-relaxed" }, item)))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u5173\u952E\u8BCD"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, selectedReport.keywords.map((item) => /* @__PURE__ */ React.createElement("span", { key: item, className: "px-3 py-2 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-cyan-200 text-sm" }, item)))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/40 border border-slate-800 rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-4" }, "\u590D\u76D8\u7ED3\u8BBA"), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-300 leading-relaxed" }, selectedReport.conclusion))))))))));
};
var SurveillanceView = ({ activeRegions, alerts, onAlertClick }) => {
  const [selectedRegionId, setSelectedRegionId] = useState("all");
  const [selectedFeedId, setSelectedFeedId] = useState("");
  const [monitorSearchQuery, setMonitorSearchQuery] = useState("");
  const [autoPatrol, setAutoPatrol] = useState(true);
  const [expandedFeedId, setExpandedFeedId] = useState("");
  const availableFeeds = useMemo(() => {
    return SURVEILLANCE_FEEDS.filter((feed) => activeRegions.includes(feed.regionId));
  }, [activeRegions]);
  const filteredFeeds = useMemo(() => {
    const keyword = monitorSearchQuery.trim().toLowerCase();
    return availableFeeds.filter((feed) => {
      const matchRegion = selectedRegionId === "all" || feed.regionId === selectedRegionId;
      const matchKeyword = !keyword || feed.title.toLowerCase().includes(keyword) || feed.position.toLowerCase().includes(keyword) || feed.camera.toLowerCase().includes(keyword) || feed.regionName.toLowerCase().includes(keyword) || feed.tags.some((tag) => tag.toLowerCase().includes(keyword));
      return matchRegion && matchKeyword;
    });
  }, [availableFeeds, selectedRegionId, monitorSearchQuery]);
  useEffect(() => {
    if (!filteredFeeds.length) {
      setSelectedFeedId("");
      return;
    }
    if (!filteredFeeds.some((feed) => feed.id === selectedFeedId)) {
      setSelectedFeedId(filteredFeeds[0].id);
    }
  }, [filteredFeeds, selectedFeedId]);
  useEffect(() => {
    if (!autoPatrol || filteredFeeds.length <= 1) return;
    const timer = setInterval(() => {
      setSelectedFeedId((prev) => {
        const currentIndex = filteredFeeds.findIndex((feed) => feed.id === prev);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % filteredFeeds.length : 0;
        return filteredFeeds[nextIndex].id;
      });
    }, 6e3);
    return () => clearInterval(timer);
  }, [autoPatrol, filteredFeeds]);
  const handleSelectFeed = (feedId, stopPatrol = true) => {
    setSelectedFeedId(feedId);
    if (stopPatrol) setAutoPatrol(false);
  };
  const selectedFeed = filteredFeeds.find((feed) => feed.id === selectedFeedId) || filteredFeeds[0] || null;
  const linkedAlert = selectedFeed?.linkedAlertId ? alerts.find((alert) => alert.id === selectedFeed.linkedAlertId) : null;
  const unhandledAlerts = alerts.filter((alert) => alert.status === "unhandled" && activeRegions.includes(alert.regionId));
  const expandedFeed = SURVEILLANCE_FEEDS.find((feed) => feed.id === expandedFeedId) || null;
  const expandedAlert = expandedFeed?.linkedAlertId ? alerts.find((alert) => alert.id === expandedFeed.linkedAlertId) : null;
  const secondaryFeeds = useMemo(() => {
    return filteredFeeds.filter((feed) => feed.id !== selectedFeedId).slice(0, 4);
  }, [filteredFeeds, selectedFeedId]);
  const handleExpandFeed = (feedId) => {
    setExpandedFeedId(feedId);
    setAutoPatrol(false);
  };
  const renderFeedFrame = (feed, isPrimary = false, compact = false) => {
    const alert = feed.linkedAlertId ? alerts.find((item) => item.id === feed.linkedAlertId) : null;
    const statusColor = feed.status === "online" ? "bg-emerald-500" : "bg-slate-500";
    const overlayTone = feed.sceneType === "crowd" ? "from-cyan-500/10 via-transparent to-slate-950/70" : feed.sceneType === "fight" ? "from-red-500/10 via-transparent to-slate-950/75" : feed.sceneType === "petition" ? "from-orange-500/10 via-transparent to-slate-950/75" : "from-slate-500/10 via-transparent to-slate-950/75";
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: feed.id,
        type: "button",
        onClick: () => isPrimary ? handleExpandFeed(feed.id) : handleSelectFeed(feed.id),
        className: `relative block w-full overflow-hidden rounded-xl border text-left transition-all ${selectedFeed?.id === feed.id ? "border-cyan-500/60 shadow-[0_0_24px_rgba(34,211,238,0.18)]" : "border-slate-800 hover:border-slate-700"} ${isPrimary ? "h-full" : compact ? "h-[168px]" : "h-[214px]"}`,
        style: !isPrimary ? { aspectRatio: "1 / 1" } : void 0
      },
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]" }),
      feed.image ? /* @__PURE__ */ React.createElement("img", { src: feed.image, alt: feed.title, className: `absolute inset-0 w-full h-full object-cover ${isPrimary ? "opacity-90" : "opacity-80"} ${feed.sceneType === "crowd" ? "brightness-95 saturate-110" : "brightness-90"}` }) : /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" }),
      /* @__PURE__ */ React.createElement("div", { className: `absolute inset-0 bg-gradient-to-b ${overlayTone}` }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 to-transparent" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent" }),
      feed.hasAlert && alert && /* @__PURE__ */ React.createElement("div", { className: "absolute top-3 right-12 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-md border border-red-300/30 font-bold shadow-lg" }, "\u544A\u8B66\u4E2D"),
      /* @__PURE__ */ React.createElement("div", { className: "absolute top-3 left-3 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "bg-black/55 border border-white/10 text-white/85 text-[11px] px-2 py-1 rounded-md font-mono flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: `w-2 h-2 rounded-full mr-1.5 ${statusColor} ${feed.status === "online" ? "animate-pulse" : ""}` }), "REC ", feed.camera), /* @__PURE__ */ React.createElement("span", { className: "bg-slate-950/70 border border-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-md" }, feed.mode === "patrol" ? "\u8F6E\u5DE1\u4F4D" : "\u5E38\u9A7B\u4F4D")),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          onClick: (e) => {
            e.stopPropagation();
            handleExpandFeed(feed.id);
          },
          className: "absolute top-3 right-3 z-20 h-8 w-8 rounded-lg border border-white/10 bg-black/55 text-white/85 flex items-center justify-center hover:bg-black/70 transition-colors",
          title: "\u653E\u5927\u67E5\u770B"
        },
        /* @__PURE__ */ React.createElement(Maximize2, { className: "w-4 h-4" })
      ),
      feed.sceneType === "crowd" && /* @__PURE__ */ React.createElement("div", { className: "absolute left-[14%] top-[20%] right-[14%] bottom-[20%] border-2 border-red-500/75 bg-red-500/[0.07] shadow-[0_0_30px_rgba(239,68,68,0.22)]" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute left-4 bottom-4 right-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-white text-sm font-bold" }, feed.title), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-300 mt-1" }, feed.position)), /* @__PURE__ */ React.createElement("div", { className: "text-right shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-cyan-300" }, feed.regionName), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 mt-1" }, feed.status === "online" ? "\u5728\u7EBF\u76D1\u63A7" : "\u79BB\u7EBF\u76D1\u63A7"))))
    );
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex h-full bg-[#0b1120] relative z-20" }, /* @__PURE__ */ React.createElement("div", { className: "w-[250px] bg-slate-900/80 border-r border-slate-800 flex flex-col shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "h-16 px-5 border-b border-slate-800/60 flex items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-white font-bold tracking-wide" }, "\u76D1\u63A7\u5DE1\u770B"), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-1" }, "\u503C\u5B88\u5BA4\u591A\u753B\u9762\u5DE1\u770B"))), /* @__PURE__ */ React.createElement("div", { className: "p-4 space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, "\u6309\u5730\u70B9\u67E5\u627E"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" }), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: monitorSearchQuery,
      onChange: (e) => setMonitorSearchQuery(e.target.value),
      placeholder: "\u641C\u5730\u70B9\u3001\u70B9\u4F4D\u3001\u901A\u9053\u53F7",
      className: "w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-cyan-500"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-2" }, "\u4F8B\u5982\uFF1A\u591C\u5E02\u3001\u5357\u95E8\u3001\u8F66\u5E93\u3001MX-CAM-094")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-2" }, "\u9632\u533A\u7B5B\u9009"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: selectedRegionId,
      onChange: (e) => setSelectedRegionId(e.target.value),
      className: "w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2.5 outline-none focus:border-cyan-500"
    },
    /* @__PURE__ */ React.createElement("option", { value: "all" }, "\u5168\u90E8\u542F\u7528\u9632\u533A"),
    activeRegions.map((id) => /* @__PURE__ */ React.createElement("option", { key: id, value: id }, ALL_REGIONS_CONFIG[id]?.name || id))
  )), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 uppercase tracking-[0.24em] mb-3" }, "\u67E5\u770B\u65B9\u5F0F"), /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-cyan-900/40 bg-cyan-950/20 px-3 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-cyan-200" }, "\u533A\u57DF\u76D1\u63A7\u603B\u89C8"), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-400 mt-1 leading-relaxed" }, "\u5DE6\u4FA7\u5148\u9009\u62E9\u9632\u533A\uFF0C\u4E2D\u95F4\u5C55\u793A\u8BE5\u533A\u57DF\u5168\u90E8\u76D1\u63A7\uFF0C\u4E00\u8DEF\u4E3B\u753B\u9762\u653E\u5927\uFF0C\u5176\u4F59\u753B\u9762\u4F5C\u4E3A\u540C\u533A\u57DF\u8865\u5145\u89C2\u5BDF\u3002"))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200" }, "\u81EA\u52A8\u8F6E\u5DE1"), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setAutoPatrol((prev) => !prev),
      className: `w-12 h-6 rounded-full relative transition-colors ${autoPatrol ? "bg-cyan-500" : "bg-slate-700"}`
    },
    /* @__PURE__ */ React.createElement("span", { className: `absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${autoPatrol ? "left-7" : "left-1"}` })
  )), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 leading-relaxed" }, "\u5F00\u542F\u540E\u6BCF 6 \u79D2\u81EA\u52A8\u5207\u6362\u4E3B\u5C4F\uFF0C\u9002\u5408\u503C\u5B88\u5BA4\u6301\u7EED\u5DE1\u770B\u91CD\u70B9\u70B9\u4F4D\u3002"), selectedFeed && /* @__PURE__ */ React.createElement("div", { className: "mt-3 pt-3 border-t border-slate-800/80" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u5F53\u524D\u9501\u5B9A\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-cyan-300" }, selectedFeed.title), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mt-1" }, autoPatrol ? "\u5F53\u524D\u4E3A\u81EA\u52A8\u8F6E\u5DE1\uFF0C\u70B9\u51FB\u70B9\u4F4D\u540E\u4F1A\u81EA\u52A8\u9501\u5B9A" : "\u5F53\u524D\u5DF2\u9501\u5B9A\u8BE5\u70B9\u4F4D\u4E3B\u5C4F\u67E5\u770B"))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-200 mb-3" }, "\u70B9\u4F4D\u6E05\u5355"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 max-h-[420px] overflow-y-auto custom-scrollbar pr-1" }, filteredFeeds.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "rounded-lg border border-dashed border-slate-800 px-3 py-6 text-center text-[11px] text-slate-500" }, "\u6CA1\u6709\u5339\u914D\u5230\u5BF9\u5E94\u70B9\u4F4D\uFF0C\u8BF7\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5") : filteredFeeds.map((feed) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: feed.id,
      type: "button",
      onClick: () => handleSelectFeed(feed.id),
      className: `w-full text-left rounded-lg border px-3 py-3 transition-colors ${selectedFeed?.id === feed.id ? "bg-cyan-950/30 border-cyan-700/60" : "bg-slate-900/60 border-slate-800 hover:border-slate-700"}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-slate-200 truncate" }, feed.camera), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 truncate mt-1" }, feed.title), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-600 truncate mt-1" }, feed.position)), /* @__PURE__ */ React.createElement("span", { className: `w-2.5 h-2.5 rounded-full shrink-0 ${feed.status === "online" ? "bg-emerald-500" : "bg-slate-500"}` }))
  )))))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0 p-5 overflow-hidden bg-gradient-to-br from-slate-950 to-[#0b1120]" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-full gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0 flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-3 shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u5728\u7EBF\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-emerald-300" }, filteredFeeds.filter((feed) => feed.status === "online").length)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u5F53\u524D\u672A\u5904\u7F6E\u544A\u8B66"), /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-bold text-red-400" }, unhandledAlerts.length)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mb-1" }, "\u4E3B\u5C4F\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-cyan-300 mt-1" }, selectedFeed ? selectedFeed.camera : "\u6682\u65E0"))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 flex gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex-[1.5] min-w-0 flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100 flex items-center" }, /* @__PURE__ */ React.createElement(Live, { className: "w-4 h-4 mr-2 text-red-400" }), " \u4E3B\u5C4F\u5DE1\u770B"), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, "\u5F53\u524D\u805A\u7126\u70B9\u4F4D\uFF1A", selectedFeed?.title || "\u6682\u65E0")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => selectedFeed && handleExpandFeed(selectedFeed.id),
      disabled: !selectedFeed,
      className: `px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${selectedFeed ? "bg-slate-950 border-slate-700 text-slate-200 hover:bg-slate-900" : "bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed"}`
    },
    "\u653E\u5927\u67E5\u770B"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => selectedFeed?.linkedAlertId && onAlertClick(alerts.find((alert) => alert.id === selectedFeed.linkedAlertId)),
      disabled: !selectedFeed?.linkedAlertId,
      className: `px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${selectedFeed?.linkedAlertId ? "bg-red-950/40 border-red-700/50 text-red-300 hover:bg-red-900/40" : "bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed"}`
    },
    selectedFeed?.linkedAlertId ? "\u6253\u5F00\u5173\u8054\u544A\u8B66" : "\u6682\u65E0\u5173\u8054\u544A\u8B66"
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-h-0 flex items-center justify-center" }, selectedFeed ? renderFeedFrame(selectedFeed, true) : /* @__PURE__ */ React.createElement("div", { className: "h-full rounded-xl border border-dashed border-slate-800 flex items-center justify-center text-slate-500" }, "\u6682\u65E0\u53EF\u5DE1\u770B\u70B9\u4F4D"))), /* @__PURE__ */ React.createElement("div", { className: "shrink-0 bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100 flex items-center" }, /* @__PURE__ */ React.createElement(Grid, { className: "w-4 h-4 mr-2 text-cyan-400" }), " \u5F53\u524D\u533A\u57DF\u5176\u4ED6\u76D1\u63A7"), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, "\u70B9\u51FB\u4EFB\u610F\u5C0F\u753B\u9762\u53EF\u5207\u6362\u4E3A\u4E3B\u5C4F\uFF0C\u4FBF\u4E8E\u5728\u540C\u4E00\u533A\u57DF\u5185\u6765\u56DE\u67E5\u770B\u3002")), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500" }, secondaryFeeds.length, " \u8DEF")), secondaryFeeds.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-dashed border-slate-800 px-4 py-8 flex items-center justify-center text-[11px] text-slate-500" }, "\u5F53\u524D\u533A\u57DF\u6682\u65E0\u5176\u4ED6\u76D1\u63A7\u753B\u9762") : /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-3" }, secondaryFeeds.map((feed) => renderFeedFrame(feed, false, true))))))), /* @__PURE__ */ React.createElement("div", { className: "w-[320px] shrink-0 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col" }, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold text-slate-100 mb-4" }, "\u70B9\u4F4D\u4E0E\u544A\u8B66\u8054\u52A8"), selectedFeed ? /* @__PURE__ */ React.createElement("div", { className: "space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-1" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u5F53\u524D\u70B9\u4F4D"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100" }, selectedFeed.title), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, selectedFeed.regionName, " / ", selectedFeed.position)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u503C\u5B88\u6807\u7B7E"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, selectedFeed.tags.map((tag) => /* @__PURE__ */ React.createElement("span", { key: tag, className: "px-2.5 py-1 rounded-md bg-cyan-950/30 border border-cyan-800/40 text-cyan-200 text-[11px]" }, tag)))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u5DE1\u770B\u6458\u8981"), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-300 leading-relaxed" }, selectedFeed.summary)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-3" }, "\u5173\u8054\u544A\u8B66"), linkedAlert ? /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => onAlertClick(linkedAlert),
      className: "w-full text-left rounded-lg border border-red-700/40 bg-red-950/30 p-3 hover:bg-red-900/30 transition-colors"
    },
    /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-red-300" }, "\u5F53\u524D\u76D1\u63A7\u5B58\u5728\u5173\u8054\u544A\u8B66"),
    /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-400 mt-1" }, linkedAlert.location),
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mt-3 text-[10px]" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-500" }, linkedAlert.time), /* @__PURE__ */ React.createElement("span", { className: "px-2 py-1 rounded bg-red-500 text-white font-bold" }, "\u67E5\u770B\u8BE6\u60C5"))
  ) : /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-500" }, "\u5F53\u524D\u70B9\u4F4D\u65E0\u672A\u5904\u7F6E\u544A\u8B66\u3002")), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-3" }, "\u503C\u5B88\u5FEB\u6377\u64CD\u4F5C"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setAutoPatrol(false),
      className: "w-full px-3 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
    },
    "\u9501\u5B9A\u5F53\u524D\u4E3B\u5C4F"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setAutoPatrol(true),
      className: "w-full px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm border border-slate-700 transition-colors"
    },
    "\u6062\u590D\u81EA\u52A8\u8F6E\u5DE1"
  ), /* @__PURE__ */ React.createElement("button", { type: "button", className: "w-full px-3 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm border border-slate-700 transition-colors" }, "\u8C03\u53D6 30 \u79D2\u524D\u56DE\u770B")))) : /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center justify-center text-slate-500" }, "\u6682\u65E0\u53EF\u5DE1\u770B\u70B9\u4F4D"))))), expandedFeed && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-[70] bg-slate-950/88 backdrop-blur-sm flex items-center justify-center p-6" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-6xl rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_0_60px_rgba(2,6,23,0.65)] overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-14 px-5 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100" }, expandedFeed.title), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, expandedFeed.regionName, " / ", expandedFeed.camera, " / ", expandedFeed.position)), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setExpandedFeedId(""),
      className: "h-9 w-9 rounded-lg border border-slate-700 bg-slate-950 text-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
    },
    /* @__PURE__ */ React.createElement(X, { className: "w-4 h-4" })
  )), /* @__PURE__ */ React.createElement("div", { className: "p-5 grid grid-cols-[minmax(0,1fr)_320px] gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex items-center justify-center min-h-[640px]" }, /* @__PURE__ */ React.createElement("div", { className: "w-full", style: { aspectRatio: "1 / 1", maxWidth: "min(76vh, 100%)" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setExpandedFeedId(""),
      className: "relative block h-full w-full overflow-hidden rounded-2xl border border-cyan-700/40 text-left"
    },
    /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]" }),
    expandedFeed.image ? /* @__PURE__ */ React.createElement("img", { src: expandedFeed.image, alt: expandedFeed.title, className: "absolute inset-0 w-full h-full object-cover opacity-95" }) : /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" }),
    /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" }),
    /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 left-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "bg-black/60 border border-white/10 text-white/90 text-xs px-2.5 py-1 rounded-md font-mono flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: `w-2 h-2 rounded-full mr-1.5 ${expandedFeed.status === "online" ? "bg-emerald-500 animate-pulse" : "bg-slate-500"}` }), "REC ", expandedFeed.camera), /* @__PURE__ */ React.createElement("span", { className: "bg-slate-950/75 border border-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-md" }, expandedFeed.mode === "patrol" ? "\u8F6E\u5DE1\u4F4D" : "\u5E38\u9A7B\u4F4D")),
    expandedFeed.hasAlert && expandedAlert && /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-md border border-red-300/30 font-bold shadow-lg" }, "\u544A\u8B66\u4E2D"),
    expandedFeed.sceneType === "crowd" && /* @__PURE__ */ React.createElement("div", { className: "absolute left-[14%] top-[20%] right-[14%] bottom-[20%] border-2 border-red-500/75 bg-red-500/[0.07] shadow-[0_0_30px_rgba(239,68,68,0.22)]" }),
    /* @__PURE__ */ React.createElement("div", { className: "absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-white text-base font-bold" }, expandedFeed.title), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-300 mt-1" }, expandedFeed.position)), /* @__PURE__ */ React.createElement("div", { className: "text-right shrink-0" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-cyan-300" }, expandedFeed.regionName), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-400 mt-1" }, expandedFeed.status === "online" ? "\u5728\u7EBF\u76D1\u63A7" : "\u79BB\u7EBF\u76D1\u63A7")))
  ))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u70B9\u4F4D\u4FE1\u606F"), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-bold text-slate-100" }, expandedFeed.title), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, expandedFeed.regionName, " / ", expandedFeed.position), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-1" }, "\u72B6\u6001\uFF1A", expandedFeed.status === "online" ? "\u5728\u7EBF" : "\u79BB\u7EBF")), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u503C\u5B88\u6807\u7B7E"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, expandedFeed.tags.map((tag) => /* @__PURE__ */ React.createElement("span", { key: tag, className: "px-2.5 py-1 rounded-md bg-cyan-950/30 border border-cyan-800/40 text-cyan-200 text-[11px]" }, tag)))), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-950/50 border border-slate-800 rounded-xl p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 mb-2" }, "\u5DE1\u770B\u6458\u8981"), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-slate-300 leading-relaxed" }, expandedFeed.summary)), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        handleSelectFeed(expandedFeed.id);
        setExpandedFeedId("");
      },
      className: "w-full px-3 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
    },
    "\u8BBE\u4E3A\u4E3B\u5C4F"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => expandedAlert && onAlertClick(expandedAlert),
      disabled: !expandedAlert,
      className: `w-full px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${expandedAlert ? "bg-red-950/40 border-red-700/50 text-red-300 hover:bg-red-900/40" : "bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed"}`
    },
    expandedAlert ? "\u6253\u5F00\u5173\u8054\u544A\u8B66" : "\u6682\u65E0\u5173\u8054\u544A\u8B66"
  )))))));
};
function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [currentTime, setCurrentTime] = useState(/* @__PURE__ */ new Date());
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [activeAlert, setActiveAlert] = useState(null);
  const [dispositionRecords, setDispositionRecords] = useState(INITIAL_DISPOSITION_RECORDS);
  const [reviewReports, setReviewReports] = useState(INITIAL_REVIEW_REPORTS);
  const [selectedRecordId, setSelectedRecordId] = useState(INITIAL_DISPOSITION_RECORDS[0]?.id || "");
  const [selectedReportId, setSelectedReportId] = useState(INITIAL_REVIEW_REPORTS[0]?.id || "");
  const [activeRegions, setActiveRegions] = useState(["gov", "maxiang"]);
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(timer);
  }, []);
  const buildDispositionRecordFromAlert = (alert, newStatus) => {
    const stamp = /* @__PURE__ */ new Date();
    const pad = (value) => String(value).padStart(2, "0");
    const datePart = `${stamp.getFullYear()}${pad(stamp.getMonth() + 1)}${pad(stamp.getDate())}`;
    const timePart = `${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())} ${pad(stamp.getHours())}:${pad(stamp.getMinutes())}:${pad(stamp.getSeconds())}`;
    const regionName = ALL_REGIONS_CONFIG[alert.regionId]?.name || "\u672A\u5F52\u7C7B\u9632\u533A";
    const isP0 = alert.severity === "P0";
    const isGathering = alert.type.includes("\u805A\u96C6") && !alert.type.includes("\u6D89\u7A33");
    const isFight = alert.type.includes("\u6253\u6597");
    const reportId = newStatus === "dispatched" && isP0 ? `RP-${datePart}-${alert.id.slice(-3)}` : "";
    const isReviewed = newStatus === "reviewing";
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
      source: isGathering ? "\u805A\u96C6\u5BC6\u5EA6\u8BC6\u522B" : alert.type.includes("\u6D89\u7A33") ? "\u6D89\u7A33\u805A\u96C6\u8BC6\u522B" : isFight ? "\u51B2\u7A81\u884C\u4E3A\u8BC6\u522B" : "\u667A\u80FD\u7814\u5224\u5F15\u64CE",
      reportedAt: `${datePart.slice(0, 4)}-${datePart.slice(4, 6)}-${datePart.slice(6, 8)} ${alert.time}`,
      handledAt: timePart,
      completedAt: newStatus === "ignored" ? timePart : "",
      dispositionStatus: newStatus === "dispatched" ? "\u5904\u7F6E\u4E2D" : newStatus === "reviewing" ? "\u5F85\u4EBA\u5DE5\u590D\u6838" : "\u8BEF\u62A5\u56DE\u6D41",
      reviewStatus: newStatus === "dispatched" && isP0 ? "\u5F85\u590D\u76D8" : newStatus === "reviewing" ? "\u5F85\u4EBA\u5DE5\u590D\u6838" : "\u65E0\u9700\u590D\u76D8",
      handler: isFight ? "\u9A6C\u5DF7\u5DE1\u903B\u4E8C\u7EC4" : isGathering ? "\u9A6C\u5DF7\u5DE1\u903B\u4E8C\u7EC4" : alert.type.includes("\u6D89\u7A33") ? "\u60C5\u6307\u8054\u52A8\u4E13\u73ED" : "\u503C\u73ED\u7814\u5224\u5458",
      commander: isP0 ? "\u5206\u5C40\u503C\u73ED\u6307\u6325\u957F" : "\u60C5\u6307\u503C\u5B88\u53F0",
      resultSummary: newStatus === "dispatched" ? `\u5DF2\u6839\u636E ${alert.type} \u751F\u6210\u5904\u7F6E\u8BB0\u5F55\uFF0C\u7B49\u5F85\u73B0\u573A\u53CD\u9988\u4E0E\u89E3\u9664\u7ED3\u679C\u56DE\u586B\u3002` : newStatus === "reviewing" ? `\u8BE5\u6761 ${alert.type} \u5DF2\u8F6C\u4EBA\u5DE5\u590D\u6838\uFF0C\u7531\u7814\u5224\u5E2D\u7EE7\u7EED\u5224\u5B9A\u662F\u5426\u6D3E\u8B66\u3002` : `\u8BE5\u6761 ${alert.type} \u5DF2\u786E\u8BA4\u4E3A\u65E0\u6548\u7EBF\u7D22\uFF0C\u8BB0\u5F55\u5DF2\u56DE\u6D41\u7528\u4E8E\u7B97\u6CD5\u4F18\u5316\u3002`,
      actions: newStatus === "dispatched" ? alert.actions && alert.actions.length ? alert.actions.slice(0, 3) : ["\u6D3E\u53D1\u73B0\u573A\u5904\u7F6E", "\u901A\u77E5\u5C5E\u5730\u8054\u52A8", "\u7B49\u5F85\u53CD\u9988\u56DE\u4F20"] : newStatus === "reviewing" ? ["\u4EBA\u5DE5\u590D\u6838\u89C6\u9891", "\u8865\u5145\u5173\u952E\u5E27\u5224\u5B9A", "\u518D\u51B3\u5B9A\u662F\u5426\u6D3E\u8B66"] : ["\u4EBA\u5DE5\u590D\u6838", "\u6807\u8BB0\u6B63\u5E38\u6D3B\u52A8", "\u56DE\u6D41\u8D1F\u6837\u672C"],
      evidence: [
        `${(alert.clipRange?.pre || 15) + (alert.clipRange?.post || 30)}\u79D2\u4E8B\u4EF6\u7247\u6BB5`,
        `${alert.camera} \u544A\u8B66\u622A\u56FE`,
        newStatus === "dispatched" ? "\u5F85\u4E0A\u4F20\u5904\u7F6E\u53CD\u9988\u6750\u6599" : newStatus === "reviewing" ? "\u4EBA\u5DE5\u590D\u6838\u4E2D" : "\u4EBA\u5DE5\u590D\u6838\u7ED3\u8BBA"
      ],
      metrics: alert.metrics && alert.metrics.length ? alert.metrics.slice(0, 3).map((metric) => ({ label: metric.label, value: metric.value, note: metric.note })) : [
        { label: "\u7CFB\u7EDF\u7F6E\u4FE1\u5EA6", value: alert.conf, note: "\u6765\u6E90\u4E8E\u6A21\u578B\u8F93\u51FA" },
        { label: "\u544A\u8B66\u7B49\u7EA7", value: alert.severity, note: alert.urgency },
        { label: "\u5904\u7406\u72B6\u6001", value: newStatus === "dispatched" ? "\u5DF2\u6D3E\u5355" : "\u5DF2\u5FFD\u7565", note: "\u5F85\u540E\u7EED\u95ED\u73AF\u66F4\u65B0" }
      ],
      timeline: newStatus === "dispatched" ? [
        `${alert.time} \u7CFB\u7EDF\u89E6\u53D1 ${alert.type}`,
        `${timePart.slice(11)} \u503C\u73ED\u5458\u786E\u8BA4\u5E76\u4E0B\u53D1\u5904\u7F6E`,
        "\u5F85\u73B0\u573A\u53CD\u9988\u5904\u7F6E\u7ED3\u679C"
      ] : newStatus === "reviewing" ? [
        `${alert.time} \u7CFB\u7EDF\u89E6\u53D1 ${alert.type}`,
        `${timePart.slice(11)} \u8FDB\u5165\u4EBA\u5DE5\u590D\u6838\u961F\u5217`,
        "\u7B49\u5F85\u7814\u5224\u5E2D\u786E\u8BA4"
      ] : [
        `${alert.time} \u7CFB\u7EDF\u89E6\u53D1 ${alert.type}`,
        `${timePart.slice(11)} \u4EBA\u5DE5\u590D\u6838\u786E\u8BA4\u4E3A\u6B63\u5E38\u6D3B\u52A8`,
        "\u5DF2\u56DE\u6D41\u7B97\u6CD5\u6837\u672C\u5E93"
      ],
      notes: newStatus === "dispatched" ? "\u8BE5\u8BB0\u5F55\u7531\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\uFF0C\u5EFA\u8BAE\u5728\u73B0\u573A\u53CD\u9988\u540E\u8865\u5145\u5B8C\u6210\u65F6\u523B\u4E0E\u6548\u679C\u8BC4\u4F30\u3002" : newStatus === "reviewing" ? "\u8BE5\u8BB0\u5F55\u5DF2\u8F6C\u4EBA\u5DE5\u590D\u6838\uFF0C\u5EFA\u8BAE\u7ED3\u5408\u5173\u952E\u5E27\u548C\u89C6\u9891\u7247\u6BB5\u7EE7\u7EED\u5224\u5B9A\u3002" : "\u5EFA\u8BAE\u4FDD\u7559\u8BE5\u6837\u672C\u7528\u4E8E\u540E\u7EED\u9608\u503C\u4E0E\u7279\u5F81\u4F18\u5316\u3002",
      tags: newStatus === "dispatched" ? [alert.severity, "\u81EA\u52A8\u751F\u6210", isGathering ? "\u805A\u96C6\u573A\u666F" : "\u91CD\u70B9\u544A\u8B66"] : newStatus === "reviewing" ? ["\u4EBA\u5DE5\u590D\u6838", "\u6253\u6597\u573A\u666F", fightWindow.title || "\u5FEB\u901F\u5904\u7F6E"] : ["\u8BEF\u62A5\u56DE\u6D41", "\u81EA\u52A8\u751F\u6210"]
    };
  };
  const buildReviewReportFromRecord = (record) => ({
    id: record.reportId,
    recordId: record.id,
    title: `${record.location}\u4E8B\u4EF6\u590D\u76D8`,
    severity: record.severity,
    status: "\u5F85\u590D\u76D8",
    owner: record.regionName,
    stageNote: "\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u521D\u7A3F",
    generatedAt: record.handledAt,
    location: record.location,
    type: record.alertType,
    eventWindow: `${record.reportedAt} - \u5F85\u8865\u5145\u89E3\u9664\u65F6\u95F4`,
    summary: `\u7CFB\u7EDF\u5DF2\u4F9D\u636E ${stripPriorityLabel(record.alertType)} \u81EA\u52A8\u751F\u6210\u590D\u76D8\u521D\u7A3F\uFF0C\u5F85\u5904\u7F6E\u5B8C\u6210\u540E\u8865\u5145\u73B0\u573A\u53CD\u9988\u3001\u8054\u52A8\u6548\u679C\u548C\u7B56\u7565\u4FEE\u6B63\u9879\u3002`,
    keyFindings: [
      "\u5F53\u524D\u62A5\u544A\u57FA\u4E8E\u544A\u8B66\u6307\u6807\u548C\u5904\u7F6E\u52A8\u4F5C\u81EA\u52A8\u751F\u6210\u3002",
      "\u5EFA\u8BAE\u8865\u5145\u73B0\u573A\u53CD\u9988\u540E\u518D\u786E\u8BA4\u5904\u7F6E\u6709\u6548\u6027\u4E0E\u98CE\u9669\u56DE\u843D\u60C5\u51B5\u3002",
      "\u53EF\u6839\u636E\u672C\u6B21\u7ED3\u8BBA\u7EE7\u7EED\u4F18\u5316 ROI\u3001\u9608\u503C\u548C\u73B0\u573A\u8054\u52A8\u6D41\u7A0B\u3002"
    ],
    timeline: record.timeline,
    recommendations: [
      "\u8865\u5145\u5904\u7F6E\u5B8C\u6210\u65F6\u95F4\u548C\u73B0\u573A\u6062\u590D\u6307\u6807\u3002",
      "\u786E\u8BA4\u662F\u5426\u9700\u8981\u8C03\u6574\u8BE5\u573A\u666F\u7684 ROI \u6216\u4EBA\u6D41\u9608\u503C\u3002",
      "\u5C06\u6709\u6548\u7ECF\u9A8C\u7EB3\u5165\u540C\u7C7B\u573A\u666F\u4E13\u9879\u9884\u6848\u3002"
    ],
    keywords: [record.severity, record.regionName, "\u81EA\u52A8\u590D\u76D8\u521D\u7A3F"],
    conclusion: "\u5F85\u73B0\u573A\u95ED\u73AF\u4FE1\u606F\u8865\u5145\u540E\u5F62\u6210\u6B63\u5F0F\u590D\u76D8\u7ED3\u8BBA\u3002"
  });
  const openReportById = (reportId) => {
    setSelectedReportId(reportId);
    setCurrentView("reports");
  };
  const handleResolveAlert = (id, newStatus) => {
    const resolvedAlert = alerts.find((a) => a.id === id);
    if (!resolvedAlert) return;
    const nextAlerts = alerts.map((a) => a.id === id ? { ...a, status: newStatus } : a);
    const nextRecord = buildDispositionRecordFromAlert(resolvedAlert, newStatus);
    const nextRecords = [nextRecord, ...dispositionRecords.filter((record) => record.id !== nextRecord.id)];
    setAlerts(nextAlerts);
    setDispositionRecords(nextRecords);
    setSelectedRecordId(nextRecord.id);
    if (nextRecord.reportId) {
      const nextReport = buildReviewReportFromRecord(nextRecord);
      const nextReports = [nextReport, ...reviewReports.filter((report) => report.id !== nextReport.id)];
      setReviewReports(nextReports);
      setSelectedReportId(nextReport.id);
    }
    setActiveAlert(null);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "h-screen w-full bg-[#0f172a] text-slate-200 font-sans flex overflow-hidden" }, /* @__PURE__ */ React.createElement("nav", { className: "w-16 bg-[#0f172a] border-r border-slate-800 flex flex-col items-center py-4 shrink-0 z-40 relative shadow-[4px_0_24px_rgba(0,0,0,0.5)]" }, /* @__PURE__ */ React.createElement("div", { className: "bg-red-900/40 p-1.5 rounded-lg border border-red-500/50 mb-8 shadow-[0_0_15px_rgba(239,68,68,0.4)]" }, /* @__PURE__ */ React.createElement(Shield, { className: "w-5 h-5 text-red-400" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col gap-4 w-full px-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setCurrentView("dashboard"), className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === "dashboard" ? "bg-cyan-900/40 text-cyan-400 border border-cyan-500/50 shadow-inner" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}` }, /* @__PURE__ */ React.createElement(LayoutDashboard, { className: "w-5 h-5 mb-1" }), /* @__PURE__ */ React.createElement("span", { className: "text-[9px]" }, "\u5927\u5C4F\u6001\u52BF")), /* @__PURE__ */ React.createElement("button", { onClick: () => setCurrentView("surveillance"), className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === "surveillance" ? "bg-cyan-900/40 text-cyan-400 border border-cyan-500/50 shadow-inner" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}` }, /* @__PURE__ */ React.createElement(Video, { className: "w-5 h-5 mb-1" }), /* @__PURE__ */ React.createElement("span", { className: "text-[9px]" }, "\u76D1\u63A7\u5DE1\u770B")), /* @__PURE__ */ React.createElement("button", { onClick: () => setCurrentView("records"), className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === "records" ? "bg-cyan-900/40 text-cyan-400 border border-cyan-500/50 shadow-inner" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}` }, /* @__PURE__ */ React.createElement(ListCheck, { className: "w-5 h-5 mb-1" }), /* @__PURE__ */ React.createElement("span", { className: "text-[9px]" }, "\u5904\u7F6E\u8BB0\u5F55")), /* @__PURE__ */ React.createElement("button", { onClick: () => setCurrentView("reports"), className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all ${currentView === "reports" ? "bg-cyan-900/40 text-cyan-400 border border-cyan-500/50 shadow-inner" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}` }, /* @__PURE__ */ React.createElement(BarChart3, { className: "w-5 h-5 mb-1" }), /* @__PURE__ */ React.createElement("span", { className: "text-[9px]" }, "\u590D\u76D8\u62A5\u544A")), /* @__PURE__ */ React.createElement("button", { onClick: () => setCurrentView("config"), className: `w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all mt-auto ${currentView === "config" ? "bg-cyan-900/40 text-cyan-400 border border-cyan-500/50 shadow-inner" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}` }, /* @__PURE__ */ React.createElement(Settings, { className: "w-5 h-5 mb-1" }), /* @__PURE__ */ React.createElement("span", { className: "text-[9px]" }, "\u7CFB\u7EDF\u914D\u7F6E")))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col overflow-hidden relative" }, (currentView === "dashboard" || currentView === "surveillance" || currentView === "records" || currentView === "reports") && /* @__PURE__ */ React.createElement("header", { className: "h-14 border-b border-slate-800/80 bg-[#0f172a]/90 backdrop-blur-sm flex items-center justify-between px-6 z-10 shrink-0" }, /* @__PURE__ */ React.createElement("h1", { className: "text-lg font-bold flex items-center tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" }, /* @__PURE__ */ React.createElement("span", { className: "text-red-400" }, "\u7FD4\u5B89\u533A\u793E\u4F1A\u9762\u6CBB\u5B89\u9632\u63A7\u667A\u80FD\u611F\u77E5\u7CFB\u7EDF"), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-cyan-500/70 ml-4 font-normal tracking-normal border border-cyan-800/50 bg-cyan-950/40 px-2 py-0.5 rounded backdrop-blur-sm" }, currentView === "dashboard" ? `${activeRegions.length} \u91CD\u70B9\u9632\u533A\u8FD0\u884C\u4E2D` : currentView === "surveillance" ? `${SURVEILLANCE_FEEDS.filter((feed) => activeRegions.includes(feed.regionId) && feed.status === "online").length} \u8DEF\u5728\u7EBF\u5DE1\u770B` : currentView === "records" ? `${dispositionRecords.length} \u6761\u5904\u7F6E\u8BB0\u5F55` : `${reviewReports.length} \u4EFD\u590D\u76D8\u62A5\u544A`)), /* @__PURE__ */ React.createElement("div", { className: "text-red-400 font-mono text-base tracking-widest flex items-center drop-shadow-md" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 bg-red-500 rounded-full mr-3 animate-ping shadow-[0_0_5px_red]" }), currentTime.toLocaleTimeString("zh-CN", { hour12: false }))), /* @__PURE__ */ React.createElement("main", { className: `flex-1 overflow-hidden relative ${currentView === "dashboard" ? "p-5" : ""}` }, currentView === "dashboard" && /* @__PURE__ */ React.createElement(DashboardView, { activeRegions, alerts, onAlertClick: setActiveAlert }), currentView === "surveillance" && /* @__PURE__ */ React.createElement(SurveillanceView, { activeRegions, alerts, onAlertClick: setActiveAlert }), currentView === "records" && /* @__PURE__ */ React.createElement(
    DispositionHistoryView,
    {
      records: dispositionRecords,
      selectedRecordId,
      onSelectRecord: setSelectedRecordId,
      onOpenReport: openReportById
    }
  ), currentView === "reports" && /* @__PURE__ */ React.createElement(
    ReviewReportsView,
    {
      reports: reviewReports,
      selectedReportId,
      onSelectReport: setSelectedReportId
    }
  ), currentView === "config" && /* @__PURE__ */ React.createElement(SystemConfigView, { activeRegions, setActiveRegions }), /* @__PURE__ */ React.createElement(AlertVerificationModal, { alert: activeAlert, onClose: () => setActiveAlert(null), onResolve: handleResolveAlert }))));
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(App, null));
