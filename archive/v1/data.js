const REPORT = {
  "date": "2026-10-13",
  "scores": {
    "tian": 4,
    "accusation": 5.5
  },
  "reviewers": [
    {
      "name": "Claude",
      "group": "田方论证组",
      "t0": 4,
      "t1": 4,
      "a0": 5,
      "a1": 5,
      "reason": "坚持代码技术自洽不能完成个人归因；音频仅作有限补充。"
    },
    {
      "name": "Sonnet 5.5",
      "group": "田方论证组",
      "t0": 5,
      "t1": 4.5,
      "a0": 5,
      "a1": 5,
      "reason": "全文核对后首轮5/5；对田限制性解释更谨慎，保留对代码归因的质疑。"
    },
    {
      "name": "Grok",
      "group": "指控方论证组",
      "t0": 3,
      "t1": 3.5,
      "a0": 7,
      "a1": 6,
      "reason": "不再把核心干扰托底扩为全部手法；提高对自认与判赔报道的权重。"
    },
    {
      "name": "Opus 5.5",
      "group": "指控方论证组",
      "t0": 3,
      "t1": 3.5,
      "a0": 6,
      "a1": 5.5,
      "reason": "接受缺乏佐证不等于证伪；站外见证确认和原始归因链仍缺失。"
    }
  ],
  "debates": [
    {
      "who": "田方组 → 指控方组",
      "title": "代码说得通，为什么还不能认定？",
      "argument": "对组承认展示片段与故障现象相容。田方组指出，材料缺作者、版本、执行时间与任务日志；具名名单也未独立确认。",
      "ruling": "技术可行性与历史归因分开。指控方两位分别下调总分1分和0.5分。"
    },
    {
      "who": "指控方组 → 田方组",
      "title": "50 万和夸大传闻，能证明只是小事吗？",
      "argument": "被澄清的是传播量级；赔偿不能直接衡量全部行为。田自认干扰仍然成立。田方组接受这些理由不能洗清责任。",
      "ruling": "不把诉请落差当无责，也不据此补出未公开技术细节。"
    },
    {
      "who": "共同校正",
      "title": "未回应新增指控，不等于已经被驳倒",
      "argument": "访谈录于7月，当前网站与新增展示造假指控出现在10月。时间差限制了用沉默推断说谎的效力。",
      "ruling": "VAR内部Demo与获奖论文分开；新主张需要自己的证据链。"
    },
    {
      "who": "主审 → 全体",
      "title": "纠正误引，比制造一致更重要",
      "argument": "首轮存在把田的“其他人”省略、把自述五次写成多方确认、把转录疑点当事实的风险，已逐项纠偏。",
      "ruling": "保留四位不同分数；不把同源报道数、投票人数或热度当证据独立性。"
    }
  ],
  "claims": [
    {
      "title": "01 确实干扰过他人的训练任务",
      "grade": "strong",
      "label": "交叉印证",
      "assessment": "高置信。田自认实施干扰，公司也公开作出纪律定性；具体范围不随之自动确定。",
      "support": "田在访谈承认干扰；2024公司声明确认恶意干扰研究项目并辞退。",
      "limit": "公司原公告未公开全部技术细节；田与公司对动机和程度的表述不同。",
      "missing": "完整调查与任务级因果记录。",
      "sources": [
        "S1",
        "S3"
      ]
    },
    {
      "title": "02 只有约十天、约五次，影响范围有限",
      "grade": "open",
      "label": "尚待证明",
      "assessment": "仅有田的限制性自述，不能把次数视作已经核准。",
      "support": "访谈给出可核查的次数和范围。",
      "limit": "媒体转述公司口径及指控站的时段更广；目前无法用原始记录裁决。语音识别的疑似日期冲突未作证据。",
      "missing": "账户操作日志、逐次受影响任务与持续时间。",
      "sources": [
        "S1",
        "S2",
        "S4",
        "S6"
      ]
    },
    {
      "title": "03 为了替同事出头，而非争夺算力",
      "grade": "open",
      "label": "尚待证明",
      "assessment": "这是动机解释，尚无独立旁证；即使动机为真，也不改变未经授权干扰的问题。",
      "support": "田给出团队资源争议背景。",
      "limit": "公司的资源分配不满口径与指控方推论都不能读取人的内心；可能有混合动机。",
      "missing": "事前沟通、资源规则和独立同事陈述。",
      "sources": [
        "S1",
        "S4"
      ]
    },
    {
      "title": "04 更复杂的源码修改、后门与长期破坏",
      "grade": "partial",
      "label": "部分支持",
      "assessment": "展示性片段具有技术可解释性，但未完成历史归因；不能将全部手法视作独立核实。",
      "support": "指控站展示代码与故障叙事，公司处理和田自认提供核心行为背景。",
      "limit": "“代码能造成异常”与“该人曾运行此代码造成该异常”是不同命题。共享环境中的访问记录、属主与时间链未公开。",
      "missing": "代码原件、版本签名、完整日志、对应受影响任务。",
      "sources": [
        "S2",
        "S3",
        "S4"
      ]
    },
    {
      "title": "05 网传 8000 卡／千万美元已被公司澄清为夸大",
      "grade": "strong",
      "label": "夸大已被澄清",
      "assessment": "不能把这组流传数字当作事实底座；澄清也不等于没有实质干扰。",
      "support": "公司公开称这组网传量级严重夸大。",
      "limit": "实际受影响规模和损失金额仍未由公开原件确定。",
      "missing": "损失核算、资源记录和司法采信范围。",
      "sources": [
        "S3"
      ]
    },
    {
      "title": "06 诉讼与约 50 万元判赔报道",
      "grade": "partial",
      "label": "报道有支撑",
      "assessment": "“后来没有下文”已不准确；已有诉讼及判赔报道。二审状态按访谈及编辑说明表述，不能当作我方查到的法院实时记录。",
      "support": "2024报道诉请800万元及合理支出；2026报道出现50万元判赔。",
      "limit": "我方未读判决书。不将工资与赔偿自行相加，不称刑事没收；不从数额较低推论无责或手段轻微。",
      "missing": "案号、完整裁判与最新二审材料。",
      "sources": [
        "S4",
        "S5",
        "S1"
      ]
    },
    {
      "title": "07 曾否认、嫁祸他人，还是报警查发帖者",
      "grade": "open",
      "label": "双方说法冲突",
      "assessment": "早期报道转述与访谈存在矛盾，但未拿到足以裁决的原始发言和报警材料。",
      "support": "媒体报道内部人士说法；田给出另一解释。",
      "limit": "报道同源转述不是多份独立证言；不能把未核实的身份指认扩散成事实。",
      "missing": "当时公开原帖、笔录和上下文完整记录。",
      "sources": [
        "S1",
        "S4"
      ]
    },
    {
      "title": "08 内部 VAR 文生图 Demo 冒用 PixArt",
      "grade": "open",
      "label": "新增主张待证",
      "assessment": "本次指控站提出的另一项主张，单独评估；不能泛化成获奖论文造假。",
      "support": "网站给出具体可检验的部署叙述。",
      "limit": "未取得部署包、当时演示留档或独立验证。站方另明确不评价NeurIPS VAR论文。7月访谈未回应10月新材料，不等于撒谎。",
      "missing": "原始部署、展示日志、模型身份验证与当事人专项回应。",
      "sources": [
        "S2",
        "S9",
        "S8"
      ]
    }
  ],
  "sources": [
    {
      "id": "S1",
      "short": "访谈文字版",
      "title": "elsewhere：先发一个田柯宇的播客文字版",
      "url": "https://elsewhere.news/zh/elsewhere/posting-a-podcast-transcript-of-tian-keyu-first",
      "note": "2026-10-12。原文中文已读。受访者自述与编辑说明；明确称存在删节。"
    },
    {
      "id": "S2",
      "short": "指控站",
      "title": "2024 年模型训练攻击事件：受害者陈述与证据整理",
      "url": "https://keyu-tian-sabotage.github.io/",
      "note": "页标2026-10-12，仓库版本见下。中文全文、展示性代码与具名名单已读；原始调查日志与代码包未取得。"
    },
    {
      "id": "S3",
      "short": "公司澄清转载",
      "title": "IT之家：字节跳动回应实习生干扰模型训练事件",
      "url": "https://www.ithome.com/0/803/562.htm",
      "note": "2024-10-19。完整转载公司澄清，含公告图片；不是法院认定。"
    },
    {
      "id": "S4",
      "short": "诉讼报道",
      "title": "广州日报：字节跳动起诉攻击模型训练实习生",
      "url": "https://news.dayoo.com/finance/202411/28/171077_54753014.htm",
      "note": "2024-11-28。报道法院受理和诉请，转述11月内部通报；未取得诉状原件。"
    },
    {
      "id": "S5",
      "short": "判赔报道",
      "title": "Moneyweb 转刊 Bloomberg：Ex-ByteDance intern’s $200m AI lab",
      "url": "https://www.moneyweb.co.za/news-fast-news/ex-bytedance-interns-200m-ai-lab-takes-on-fei-fei-li/",
      "note": "2026-10-08。彭博称看过判决、报道50万元给付。我方未见裁判原文。"
    },
    {
      "id": "S6",
      "short": "原音频",
      "title": "小宇宙：elsewhere Vol.007",
      "url": "https://www.xiaoyuzhoufm.com/episode/6acd2c76e742e36efcc1fe3a",
      "note": "节目原页及元数据，6992秒；pubDate=2026-10-12T23:00:00Z，折合北京时间10/13 07:00。"
    },
    {
      "id": "S7",
      "short": "官方视频",
      "title": "B站：elsewhere 田柯宇访谈",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh",
      "note": "节目评论采样入口。评论属舆情资料，不是对指控事实的独立证实。"
    },
    {
      "id": "S8",
      "short": "获奖原始记录",
      "title": "NeurIPS 2024 Best Paper Awards",
      "url": "https://media.neurips.cc/Conferences/NeurIPS2024/NeurIPS2024_Best_Paper_Awards.pdf",
      "note": "官方获奖列表，用于核对论文获奖事实；获奖不替代行为调查。"
    },
    {
      "id": "S9",
      "short": "站方范围说明",
      "title": "GitHub Issue #1：VAR vs pixart",
      "url": "https://github.com/keyu-tian-sabotage/keyu-tian-sabotage.github.io/issues/1",
      "note": "2026-10-13。站方明确其内部文生图展示指控与NeurIPS VAR论文内容分开；仍是站方说法。"
    },
    {
      "id": "S10",
      "short": "版本记录",
      "title": "指控站 GitHub 固定版本",
      "url": "https://github.com/keyu-tian-sabotage/keyu-tian-sabotage.github.io/tree/4a1e3cb4af63ea7bd047974ed80658ebf90ac75b",
      "note": "固定本次阅读版本。GitHub提交证明网页版本，不能验证内网证据的历史真实性。"
    },
    {
      "id": "S11",
      "short": "B站复核接口",
      "title": "B站评论公开接口：排序2第1页",
      "url": "https://api.bilibili.com/x/v2/reply?type=1&oid=117430059795263&sort=2&ps=20&pn=1",
      "note": "主审于2026-10-13 15:30:48复核，接口总计数76；原始去重样本7条来自数页/排序合集，非全部评论。"
    },
    {
      "id": "S12",
      "short": "X采样入口",
      "title": "X：田柯宇，近期最新搜索",
      "url": "https://x.com/search?q=%22%E7%94%B0%E6%9F%AF%E5%AE%87%22%20since%3A2026-10-08%20until%3A2026-10-14&src=typed_query&f=live",
      "note": "当前用户登录Chrome读取；结果随账号/时间变化。逐条原帖见样本表。"
    }
  ],
  "samples": [
    {
      "id": "X01",
      "author": "Charles77xixi",
      "url": "https://x.com/Charles77xixi/status/2109907119826952390",
      "time": "2026-10-13 15:20 +08:00",
      "stance": "条件式批评",
      "reason": "以指控属实为条件，质疑其品格及融资；条件式批评",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X02",
      "author": "jakevin7",
      "url": "https://x.com/jakevin7/status/2109905576746799427",
      "time": "2026-10-13 15:14 +08:00",
      "stance": "中性转述/未表态",
      "reason": "转发指控网站并建议了解上下文，没有明确逐项认同",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X03",
      "author": "0xLogicrw",
      "url": "https://x.com/0xLogicrw/status/2109905005142777963",
      "time": "2026-10-13 15:12 +08:00",
      "stance": "中性转述/未表态",
      "reason": "全文转述双方说法，未明确站队；已打开详情",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X04",
      "author": "0xTykoo",
      "url": "https://x.com/0xTykoo/status/2109891456597205354",
      "time": "2026-10-13 14:18 +08:00",
      "stance": "中性转述/未表态",
      "reason": "转述指控并解释其暗示动机，未明确确认属实；已打开全文",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X05",
      "author": "rollrollyuan",
      "url": "https://x.com/rollrollyuan/status/2109870408086487109",
      "time": "2026-10-13 12:54 +08:00",
      "stance": "中性转述/未表态",
      "reason": "分享指控站标题与链接，转发本身不计支持",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X06",
      "author": "feiyuxiaothu",
      "url": "https://x.com/feiyuxiaothu/status/2109820886723506422",
      "time": "2026-10-13 09:37 +08:00",
      "stance": "质疑田",
      "reason": "反讽其正义动机和GPT解释；引用他人批评，不把引用再计一票",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X07",
      "author": "fan_zhengjia",
      "url": "https://x.com/fan_zhengjia/status/2109693091783626936",
      "time": "2026-10-13 01:10 +08:00",
      "stance": "排除",
      "reason": "名字带宇的AI人物玩笑，与事件立场无关",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X08",
      "author": "0xTykoo",
      "url": "https://x.com/0xTykoo/status/2109685397148320257",
      "time": "2026-10-13 00:39 +08:00",
      "stance": "中性转述/未表态",
      "reason": "明确按田自己的说法复述访谈，非背书；已打开全文",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X09",
      "author": "yongleluo",
      "url": "https://x.com/yongleluo/status/2109683260733428182",
      "time": "2026-10-13 00:31 +08:00",
      "stance": "信息不足",
      "reason": "短句急公好义可能反讽，配图未判读，不强行定向",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X10",
      "author": "0xTykoo",
      "url": "https://x.com/0xTykoo/status/2109682237952450792",
      "time": "2026-10-13 00:26 +08:00",
      "stance": "信息不足",
      "reason": "评论二审期间高调并提美国创业，语气含混",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X11",
      "author": "xiongdabang",
      "url": "https://x.com/xiongdabang/status/2109549631155671416",
      "time": "2026-10-12 15:40 +08:00",
      "stance": "信息不足",
      "reason": "融资新闻标题，没有明确支持哪方",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X12",
      "author": "Ocean_Yu1",
      "url": "https://x.com/Ocean_Yu1/status/2109467583363924028",
      "time": "2026-10-12 10:13 +08:00",
      "stance": "中性转述/未表态",
      "reason": "资讯汇总，区分估值和产品落地；已读全文",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X13",
      "author": "nbklsi",
      "url": "https://x.com/nbklsi/status/2109299992514986074",
      "time": "2026-10-11 23:08 +08:00",
      "stance": "质疑田",
      "reason": "批评踩规则后技术成为通行证；虽邀请投票仍有作者立场，已读全文",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X14",
      "author": "weichonginsight",
      "url": "https://x.com/weichonginsight/status/2109291909877547070",
      "time": "2026-10-11 22:35 +08:00",
      "stance": "质疑田",
      "reason": "认可才能但明确批评诚信并认可辞退；已读全文",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X15",
      "author": "Jjay399306Jjay",
      "url": "https://x.com/Jjay399306Jjay/status/2109274706478309660",
      "time": "2026-10-11 21:27 +08:00",
      "stance": "中性转述/未表态",
      "reason": "调侃失业与融资的反差，未对事件真假表态",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X16",
      "author": "Jjay399306Jjay",
      "url": "https://x.com/Jjay399306Jjay/status/2109273741108896172",
      "time": "2026-10-11 21:23 +08:00",
      "stance": "中性转述/未表态",
      "reason": "同一作者补充创业估值，单位为帖子而非人数",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X17",
      "author": "KarlaJohns53492",
      "url": "https://x.com/KarlaJohns53492/status/2109251627878432924",
      "time": "2026-10-11 19:55 +08:00",
      "stance": "中性转述/未表态",
      "reason": "以黑色幽默描述技术与职场，未明确认同一方；已读全文",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X18",
      "author": "gpsma2025",
      "url": "https://x.com/gpsma2025/status/2109233935603667247",
      "time": "2026-10-11 18:45 +08:00",
      "stance": "质疑田",
      "reason": "批评道德和资本；帖中终审赔800万元等与本次核查冲突，只作舆情证据",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X19",
      "author": "_luckyj888",
      "url": "https://x.com/_luckyj888/status/2109215335576641746",
      "time": "2026-10-11 17:31 +08:00",
      "stance": "中性转述/未表态",
      "reason": "肯定论文实力、等待产品，不等于支持其事件解释",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "X20",
      "author": "W2679966465",
      "url": "https://x.com/W2679966465/status/2109215272636932170",
      "time": "2026-10-11 17:31 +08:00",
      "stance": "中性转述/未表态",
      "reason": "比较年轻AI从业者并提问，未表态",
      "negative_elsewhere": false,
      "platform": "X"
    },
    {
      "id": "B01",
      "platform": "B站",
      "time": "2026-10-13 11:47:29",
      "stance": "质疑田",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply316914699377",
      "reason": "批评田将干扰行为说轻，采信更复杂的破坏说法；评论不是原始技术证据。 主评论。",
      "negative_elsewhere": false
    },
    {
      "id": "B02",
      "platform": "B站",
      "time": "2026-10-13 12:17:40",
      "stance": "中性求证",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply320554798384",
      "reason": "向上级评论索要信息源；不视作支持某方。 同一热评下的子回复。",
      "negative_elsewhere": false
    },
    {
      "id": "B03",
      "platform": "B站",
      "time": "2026-10-13 12:49:02",
      "stance": "中性求证",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply320558097936",
      "reason": "推测信息来自公司报告，未明确表态。 同一热评下的子回复。",
      "negative_elsewhere": false
    },
    {
      "id": "B04",
      "platform": "B站",
      "time": "2026-10-13 13:06:48",
      "stance": "质疑田",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply320559739056",
      "reason": "强烈谴责田并主张刑罚；这是评论者态度，不是刑事裁判。 同一热评下的子回复。",
      "negative_elsewhere": false
    },
    {
      "id": "B05",
      "platform": "B站",
      "time": "2026-10-13 13:42:50",
      "stance": "质疑田",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply320562811344",
      "reason": "质疑田自我辩解；不采用评论中的人格标签作事实。 主评论。",
      "negative_elsewhere": false
    },
    {
      "id": "B06",
      "platform": "B站",
      "time": "2026-10-13 13:45:35",
      "stance": "质疑田",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply320563049856",
      "reason": "以发生诉讼为由质疑有限干扰解释；该推理本身不能证明指控细节。 同一热评下的子回复。",
      "negative_elsewhere": false
    },
    {
      "id": "B07",
      "platform": "B站",
      "time": "2026-10-13 14:39:26",
      "stance": "质疑田",
      "url": "https://www.bilibili.com/video/BV1R9pf6SEVh#reply316929058177",
      "reason": "批评节目给田提供洗白平台，是本样本中明确针对节目的一条。 主评论。",
      "negative_elsewhere": true
    }
  ],
  "events": [
    {
      "date": "2024.03–07",
      "title": "指控方提出的较长行为时段",
      "text": "此为网站回溯叙事，不是本报告已核实的完整攻击时间线。田给出的时长较短。",
      "sources": [
        "S1",
        "S2"
      ]
    },
    {
      "date": "2024.08",
      "title": "实习关系解除",
      "text": "公司后续公告称已于8月辞退涉事实习生。",
      "sources": [
        "S3"
      ]
    },
    {
      "date": "2024.10.19",
      "title": "公司公开确认核心违纪，同时纠正夸大传闻",
      "text": "把“存在干扰”与“传播中的规模数字”区分，是本案判断的基础。",
      "sources": [
        "S3"
      ]
    },
    {
      "date": "2024.11",
      "title": "诉讼进入公开报道",
      "text": "11月28日报道法院受理、索赔及道歉请求；诉请不等于法院认可的损失。",
      "sources": [
        "S4"
      ]
    },
    {
      "date": "2024.12",
      "title": "NeurIPS 获奖",
      "text": "官方记录可核对VAR论文获奖。学术成果与职业行为分开评价。",
      "sources": [
        "S8"
      ]
    },
    {
      "date": "2026.07",
      "title": "访谈录制",
      "text": "出版方说明录制距发布已约三个月。应按当时已知材料理解回应范围。",
      "sources": [
        "S1"
      ]
    },
    {
      "date": "2026.10.08",
      "title": "判赔与创业消息见诸报道",
      "text": "彭博称看过判决，报道50万元给付。完整认定需原件。",
      "sources": [
        "S5"
      ]
    },
    {
      "date": "2026.10.12–13",
      "title": "文字版、音频与指控站进入当前讨论",
      "text": "双方材料不是对等的法庭质证；当前舆情也会不断变化。",
      "sources": [
        "S1",
        "S2",
        "S6"
      ]
    }
  ],
  "audioCoverage": "音频核查：00:00–38:00 与 1:33:00–实际结尾 1:56:32，共约61分32秒机器转录；38:00–1:33:00（节目标注为科研/创业/世界模型段）未转录。未声称已完整听完，也未把全部转录字词当作无误原话。"
};
