const CONTENT = {
  "zh-Hans": {
    "ui": {
      "nav": [
        "首页",
        "隐私政策",
        "技术支持",
        "玩法说明",
        "关于游戏",
        "使用条款"
      ],
      "eyebrow": "iPad · 五子棋",
      "headline": "一盘棋，\n两个人的好时光。",
      "intro": "与身边的人轮流落子，或和离线 AI 对弈。在《{appName}》，慢慢想，轻轻落。",
      "cta": "了解怎么玩",
      "support": "联系与支持",
      "labels": [
        "同屏双人",
        "离线 AI",
        "随心命名"
      ],
      "descs": [
        "同一台 iPad，轮流走出自己的下一步。",
        "三档难度，可选择机器人的执棋颜色。",
        "为游戏、对手和棋子起喜欢的名字。"
      ],
      "language": "语言",
      "copy": "复制微信号",
      "copied": "已复制 Siri3348",
      "failed": "复制失败，请选中 Siri3348 手动复制。",
      "contact": "联系我们",
      "note": "无需安装 WeChat 即可查看或复制。点击邮箱可打开系统邮件程序；网站不会代你发送邮件。",
      "supportIntro": "遇到问题，欢迎写信告诉我们。请附上 App 设置中显示的版本号、iPad 型号、系统版本、复现步骤；截图请先遮挡个人信息。\n\n主动联系客服时，你的邮箱地址或微信账号、消息内容及你选择发送的设备信息、截图由相应邮件或微信服务处理，并由个人开发者 shi taisong 接收，仅用于回答问题、排查故障和处理隐私请求。请勿提供不必要的敏感信息。开发者保留客服通信 12 个月，到期删除；你也可提前请求删除，法律要求保留的部分除外。邮件或微信服务商自己的保存规则由其政策规定。开发者不出售客服信息，不将其用于广告或跨应用追踪；不会为上述支持用途之外向他人共享，法律要求的披露除外。",
      "faqTitle": "常见问题",
      "faq": [
        [
          "重新打开 App，棋局还在吗？",
          "当前对局不持久化。再次启动会开始新棋局；人机比分和设置保存在本机。"
        ],
        [
          "自定义名称会改变规则吗？",
          "不会。它只改变文字显示，难度、棋色和比分归属不变。"
        ],
        [
          "如何清除本机数据？",
          "设置中可恢复文字，比分区可清零当前模式比分。删除 App 会移除本机数据；系统备份需另行管理。"
        ]
      ],
      "about": "《{appName}》是一款为 iPad 设计的五子棋游戏，支持本机双人、离线 AI、五项文字自定义与八款免费主题。棋盘可缩放和平移，玩法始终由同一套规则驱动。",
      "draft": "更新日期：2026年11月19日 · 适用版本：1.0",
      "hosting": "网站托管与访问记录",
      "hostingBody": "本网站使用 GitHub Pages。GitHub 为安全目的记录并保存访问者 IP 地址，即使访问者没有登录 GitHub。本网站未添加广告、统计脚本、追踪器、登录、提交表单或第三方字体；语言由页面 URL 参数选择，不写入浏览器存储。复制微信号仅在点击时写入剪贴板。邮件由你选择的邮件服务处理。GitHub 的保存期限与权利请求方式以其隐私声明为准。",
      "hostLink": "GitHub 隐私声明",
      "contactPrivacy": "主动联系客服时，你的邮箱地址或微信账号、消息内容及你选择发送的设备信息、截图由相应邮件或微信服务处理，并由个人开发者 shi taisong 接收，仅用于回答问题、排查故障和处理隐私请求。请勿提供不必要的敏感信息。开发者保留客服通信 12 个月，到期删除；你也可提前请求删除，法律要求保留的部分除外。邮件或微信服务商自己的保存规则由其政策规定。开发者不出售客服信息，不将其用于广告或跨应用追踪；不会为上述支持用途之外向他人共享，法律要求的披露除外。",
      "footer": "游戏介绍 · 使用指南 · 技术支持",
      "pending": "其余语言正在审核，暂未开放。",
      "productName": "猫咪五子棋",
      "description": "猫咪五子棋：iPad 游戏介绍、技术支持、玩法与隐私说明。"
    },
    "help": "黑棋（黑色）与白棋（白色）轮流在空交叉点落子。横、竖或斜方向连续五枚及以上同色棋子获胜；棋盘填满且无人获胜则为平局。双人模式、切换模式或更换机器人棋色后由黑棋先手。人机对局分出胜负后，重新开始由上一局输方先手；未结束或平局重开保留该局先手。\n\n棋盘为50路，可缩放和拖动；通常初始显示15条线，像素小镇横屏为15列、16行。双人对弈由两位玩家在同一设备交替操作。人机模式为玩家对机器人。玩家落子须与任意机器人棋子的行、列距离均不超过4格，或与己方棋子在横、竖、斜方向相邻一格；没有机器人棋子时不受此范围限制。机器人在空棋盘首手落在中心。\n\n难度为初级、中级、困难；执黑、执白选择的是机器人的棋色，玩家使用另一色。选择不同棋色立即开始新棋局，重复选择同色不重开。难度在空棋局且机器人未思考时立即生效，否则在重新开始或切换模式后生效。\n\n双人悔棋撤回最后一步。人机悔棋通常撤回机器人及玩家的一组落子；若玩家刚下或刚获胜，则撤回该步。撤销获胜步骤会撤销对应的本局胜场。\n\n重新开始立即清空当前棋局并恢复默认视野，保留比分。切换模式直接开始新棋局，连续切换间隔0.5秒，两种模式比分分别保留。\n\n比分清零只清除当前模式的胜场，不删除棋子。双人比分仅在本次运行期间保存；人机比分与难度、执棋偏好会保存在本机。应用重新启动仍按原规则进入新棋局。\n\n设置与换肤不会重置正在进行的棋局。自定义文字与上次选择的皮肤保存在本机；换肤不影响落子规则。",
    "privacy": "适用范围：本政策适用于《猫咪五子棋》1.0 免费版及本支持网站。App 的发布者及客服数据负责人为个人开发者 shi taisong，联系邮箱 song775827@163.com，微信 Siri3348。App 无账号、登录、广告、内购或在线对战。所有现有游戏功能和八款皮肤免费。\n\n本版本的对局与 AI 在设备上运行，代码未包含开发者服务器通信、广告、分析、跟踪或第三方 SDK，也不申请相机、麦克风、联系人或位置权限。App 不自动向开发者或第三方传输游戏及设置数据。\n\n本机保存语言、自定义名称、皮肤、各皮肤棋盘透明度、猫咪与比分面板开关、AI 难度与执棋颜色及人机胜局，用于恢复偏好和比分。棋局和双人比分仅保留在当前运行期间；诊断模式可生成本地测试记录，不自动上传。系统备份可能包含本机数据，由设备的备份设置控制。\n\n可在设置中恢复文字、切换偏好，在比分区清零当前模式比分；删除 App（不是卸载保留数据）可清除本机沙盒，备份需另行在系统中管理。复制联系方式只在点击时写入剪贴板，不读取剪贴板。\n\n主动联系客服时，你的邮箱地址或微信账号、消息内容及你选择发送的设备信息、截图由相应邮件或微信服务处理，并由个人开发者 shi taisong 接收，仅用于回答问题、排查故障和处理隐私请求。请勿提供不必要的敏感信息。开发者保留客服通信 12 个月，到期删除；你也可提前请求删除，法律要求保留的部分除外。邮件或微信服务商自己的保存规则由其政策规定。开发者不出售客服信息，不将其用于广告或跨应用追踪；不会为上述支持用途之外向他人共享，法律要求的披露除外。\n\n根据适用法律，你可请求查阅、更正、删除所提供的个人信息或行使其他适用权利。请通过下列联系方式提出请求；开发者无法远程读取或删除仅保存在设备上的数据。\n\n保存期限与控制：本机偏好和人机比分保留至你修改、清零或删除 App 数据；当前棋局与双人比分在进程结束后不保留。卸载但保留数据不会清除偏好。开发者不提供云同步，也无法远程查看或删除本机数据。\n\n外部服务：点击网站链接会由系统浏览器访问本网站，产生下述托管访问记录；发送邮件或使用微信由你主动进行，不会因打开 App 自动建立客服记录。无需这些操作也可使用全部游戏功能。Apple 的商店、系统诊断和备份服务由 Apple 按其政策及你的设备设置处理；它们不属于本 App 自行上传的数据。\n\n用户权利：你可以通过上述联系方式申请查阅、更正、删除你提交的客服信息，或提出停止处理、撤回同意及其他适用权利请求。撤回不影响此前合法处理。没有 App 账号，因此没有账号注销流程。未成年人联系支持时请避免发送姓名、学校、地址或其他不必要个人信息，可请监护人协助。\n\n安全与更新：开发者限制客服信息访问，用于必要支持；互联网通信无法保证绝对安全。涉及数据处理的功能变化时，本页面会更新日期和政策，依法需要另行告知或取得同意时再行办理。",
    "terms": "本 App 通过 App Store 分发时采用 Apple 标准最终用户许可协议（Standard EULA）。下方链接为完整条款；本页游戏说明不替代或削减该协议及适用法律中的用户权利。\n\n《猫咪五子棋》1.0 为免费本地游戏，包含同屏双人和离线人机模式；全部现有功能与八款皮肤免费，无广告和内购，不需要账号。玩法、落子范围和先手规则见玩法说明。猫咪为游戏内动画与互动元素，不代表联网或生成式 AI 服务。\n\n偏好与人机比分保存在本机；当前棋局不作持久化或云端存档。删除 App 可能丢失本机数据。请适度游戏，勿将游戏成绩视为任何竞赛、收益或现实能力保证。\n\n请依法使用并尊重合法知识产权。应用及素材的权利归依法享有权利的主体所有；本说明不宣称开发者独占所有 AI 生成元素的著作权。疑问或问题请联系个人开发者 shi taisong。"
  },
  "en": {
    "ui": {
      "nav": [
        "Home",
        "Privacy",
        "Support",
        "How to play",
        "About",
        "Terms"
      ],
      "eyebrow": "iPad · GOMOKU",
      "headline": "One board.\nA little time together.",
      "intro": "Take turns with someone beside you, or play against offline AI. In {appName}, take your time and make your next move.",
      "cta": "Learn to play",
      "support": "Get support",
      "labels": [
        "Two players, one iPad",
        "Offline AI",
        "Names of your own"
      ],
      "descs": [
        "Share the board and take turns on the same device.",
        "Choose from three levels and select the robot's color.",
        "Personalize the game, player and piece names."
      ],
      "language": "Language",
      "copy": "Copy WeChat ID",
      "copied": "Copied Siri3348",
      "failed": "Could not copy. Select Siri3348 and copy it manually.",
      "contact": "Get in touch",
      "note": "Viewing or copying this ID does not require WeChat. The email link opens your mail app; this website does not send messages for you.",
      "supportIntro": "Tell us what went wrong. Include the version shown in app Settings, your iPad model, iPadOS version and steps to reproduce the issue. Hide personal information in screenshots.\n\nWhen you contact support, your email address or WeChat account, message and any device details or screenshots you choose to send are processed by the relevant mail or WeChat service and received by the individual developer shi taisong. They are used only to answer questions, troubleshoot and handle privacy requests. Do not send unnecessary sensitive information. The developer retains support correspondence for 12 months and then deletes it. You may request earlier deletion, except where retention is required by law. The mail and WeChat providers apply their own retention policies. The developer does not sell support information, use it for advertising or cross-app tracking, or share it outside these support purposes except as legally required.",
      "faqTitle": "Common questions",
      "faq": [
        [
          "Will my game be there when I reopen the app?",
          "The current game is not saved. Reopening starts a new game. AI scores and preferences are stored locally."
        ],
        [
          "Do custom names change the rules?",
          "No. They change display text only, not difficulty, colors or score ownership."
        ],
        [
          "How can I remove local data?",
          "Restore labels in Settings or reset the current mode’s score. Deleting the app removes local data; manage system backups separately."
        ]
      ],
      "about": "{appName} is an iPad Gomoku game with local two-player play, offline AI, five customizable labels and eight free themes. Zoom and pan the board; all themes use the same game rules.",
      "draft": "Updated: November 19, 2026 · App version: 1.0",
      "hosting": "Website hosting and access logs",
      "hostingBody": "This website uses GitHub Pages. GitHub logs and stores visitors’ IP addresses for security, even without a GitHub login. We add no advertising, analytics scripts, trackers, sign-in, submission forms or third-party fonts. Language is selected through a URL parameter, without browser storage. Copying the WeChat ID writes to the clipboard only when clicked. Your chosen mail service handles email. GitHub’s retention and rights-request practices are described in its privacy statement.",
      "hostLink": "GitHub Privacy Statement",
      "contactPrivacy": "When you contact support, your email address or WeChat account, message and any device details or screenshots you choose to send are processed by the relevant mail or WeChat service and received by the individual developer shi taisong. They are used only to answer questions, troubleshoot and handle privacy requests. Do not send unnecessary sensitive information. The developer retains support correspondence for 12 months and then deletes it. You may request earlier deletion, except where retention is required by law. The mail and WeChat providers apply their own retention policies. The developer does not sell support information, use it for advertising or cross-app tracking, or share it outside these support purposes except as legally required.",
      "footer": "Game information · Playing guide · Support",
      "pending": "Other languages are under review and are not enabled yet.",
      "productName": "Kitty Gomoku",
      "description": "Kitty Gomoku for iPad: game information, support, rules and privacy information."
    },
    "help": "Black (black) and White (white) take turns on empty intersections. Five or more consecutive stones horizontally, vertically or diagonally win; a full board without a winner is a draw. Black starts local games and games after switching mode or robot color. After a decided AI game, Restart lets the previous loser start. Restarting an unfinished game or draw keeps its starting color.\n\nThe 50-line board supports zoom and pan. The initial view normally shows 15 lines; Pixel Town landscape shows 15 columns and 16 rows. Two players share one device; AI mode is Player versus Robot. A human move must be within 4 rows AND 4 columns of any robot stone, or one step from a human stone horizontally, vertically or diagonally. This range restriction does not apply when there are no robot stones. The robot opens an empty board at the center.\n\nDifficulty options are Easy, Medium and Hard. Black and White select the ROBOT color; the human uses the other color. Changing color immediately starts a new game; selecting the same color does not restart. Difficulty applies immediately on an empty board while the robot is idle, otherwise after restart or mode change.\n\nUndo removes the last move in two-player mode. In AI mode it normally removes a pair of AI and player moves; if the player has just moved or won, it removes that move. Undoing a winning move also removes its win from the score.\n\nRestart clears the board and resets the view, keeping scores. Switching mode starts a new game immediately, with 0.5 seconds between switches. Each mode keeps its own scores.\n\nReset score clears only the current mode’s wins, without removing stones. Two-player scores last for the current app session. AI scores, difficulty and playing color are saved locally. Relaunching the app starts a new game under the existing rules.\n\nSettings and skins never reset an ongoing game. Custom labels and the last skin are saved on this device. Skins do not change the rules.",
    "privacy": "Scope: this policy covers Kitty Gomoku 1.0, the free app, and this support website. The publisher and person responsible for support data is the individual developer shi taisong, reachable at song775827@163.com or WeChat Siri3348. The app has no accounts, sign-in, ads, in-app purchases or online multiplayer. All current game features and eight skins are free.\n\nGames and AI run on your device. This build contains no developer-server communication, advertising, analytics, tracking or third-party SDKs, and requests no camera, microphone, contacts or location permissions. The app does not automatically transmit game or settings data to the developer or third parties.\n\nLanguage, custom labels, theme, per-theme board opacity, cat and score-panel visibility, AI difficulty, playing color and AI win totals are stored locally to restore preferences and scores. Games and two-player scores last only during the app session. Diagnostic modes may create local test records without uploading them. System backups may include local data, depending on device settings.\n\nRestore labels in Settings, change preferences, or reset the current mode’s scores in the score area. Deleting the app (not offloading it) removes its local sandbox; manage backups separately in system settings. Copying contact details writes to the clipboard only when tapped and does not read it.\n\nWhen you contact support, your email address or WeChat account, message and any device details or screenshots you choose to send are processed by the relevant mail or WeChat service and received by the individual developer shi taisong. They are used only to answer questions, troubleshoot and handle privacy requests. Do not send unnecessary sensitive information. The developer retains support correspondence for 12 months and then deletes it. You may request earlier deletion, except where retention is required by law. The mail and WeChat providers apply their own retention policies. The developer does not sell support information, use it for advertising or cross-app tracking, or share it outside these support purposes except as legally required.\n\nSubject to applicable law, you may request access, correction, deletion or other applicable rights regarding information you provide, using the contacts below. The developer cannot remotely access or delete data stored only on your device.\n\nRetention and control: local preferences and AI scores remain until you change or reset them or delete app data. The current board and two-player scores do not survive process termination. Offloading while keeping data does not erase preferences. The developer provides no cloud sync and cannot remotely view or delete local data.\n\nExternal services: opening a website link uses your system browser and creates the hosting records described below. Email and WeChat contact is initiated by you; opening the app does not create a support record. All game features work without these actions. Apple handles its store, system diagnostics and backup services under its policies and your device settings; these are not data uploaded by this app itself.\n\nYour rights: contact us to request access, correction or deletion of support information you supplied, to request cessation of processing or withdraw consent, or to exercise other applicable rights. Withdrawal does not affect prior lawful processing. There is no app account and therefore no account-deletion process. Minors should avoid sending names, schools, addresses or unnecessary personal information to support and may ask a guardian for help.\n\nSecurity and updates: the developer restricts access to correspondence to necessary support purposes; internet communications cannot be guaranteed absolutely secure. If data-handling features change, this page and its date will be updated. Additional notice or consent will be provided where required by applicable law.",
    "terms": "For distribution through the App Store, this app uses Apple’s Standard End User License Agreement (EULA), linked below. These game notes do not replace or reduce that agreement or your mandatory legal rights.\n\nKitty Gomoku 1.0 is a free local game offering two players on one device and offline AI. All current features and eight skins are free, with no ads, in-app purchases or account requirement. See How to play for move-range and starting-player rules. Cats are in-game animation and interaction elements, not an online or generative AI service.\n\nPreferences and AI scores are stored locally. The current board is not a persistent or cloud save. Deleting the app may lose local data. Take breaks; game results do not guarantee competition results, earnings or real-world ability.\n\nUse the app lawfully and respect lawful intellectual-property rights. Rights in the app and assets belong to their lawful holders; this notice does not claim exclusive developer copyright in every AI-generated element. Contact the individual developer shi taisong for support."
  },
  "vi": {
    "ui": {
      "nav": [
        "Trang chủ",
        "Quyền riêng tư",
        "Hỗ trợ",
        "Cách chơi",
        "Giới thiệu",
        "Điều khoản"
      ],
      "eyebrow": "iPad · CỜ NĂM QUÂN",
      "headline": "Một bàn cờ.\nThời gian bên nhau.",
      "intro": "Luân phiên đi quân cùng người bên cạnh hoặc thử sức với AI ngoại tuyến. Với {appName}, cứ thong thả suy nghĩ rồi nhẹ nhàng đặt quân.",
      "cta": "Tìm hiểu cách chơi",
      "support": "Nhận hỗ trợ",
      "labels": [
        "Hai người, một iPad",
        "AI ngoại tuyến",
        "Tên theo ý bạn"
      ],
      "descs": [
        "Cùng chia sẻ bàn cờ và thay phiên trên một thiết bị.",
        "Ba mức độ khó và tùy chọn màu quân của máy.",
        "Đặt tên riêng cho trò chơi, người chơi và quân cờ."
      ],
      "language": "Ngôn ngữ",
      "copy": "Sao chép WeChat ID",
      "copied": "Đã sao chép Siri3348",
      "failed": "Không thể sao chép. Hãy chọn Siri3348 và sao chép thủ công.",
      "contact": "Liên hệ",
      "note": "Không cần cài WeChat để xem hoặc sao chép ID. Liên kết email mở ứng dụng thư; trang web không tự gửi thư thay bạn.",
      "supportIntro": "Hãy mô tả vấn đề bạn gặp. Vui lòng ghi phiên bản trong Cài đặt của ứng dụng, mẫu iPad, phiên bản iPadOS và các bước tái hiện lỗi. Che thông tin cá nhân trong ảnh chụp màn hình.\n\nKhi liên hệ hỗ trợ, địa chỉ email hoặc tài khoản WeChat, nội dung tin nhắn và thông tin thiết bị hay ảnh chụp màn hình do bạn tự gửi được dịch vụ email hoặc WeChat xử lý và nhà phát triển cá nhân shi taisong tiếp nhận. Thông tin chỉ được dùng để trả lời, xử lý lỗi và yêu cầu về quyền riêng tư. Không gửi dữ liệu nhạy cảm không cần thiết. Nhà phát triển lưu nội dung trao đổi hỗ trợ trong 12 tháng rồi xóa. Bạn có thể yêu cầu xóa sớm hơn, trừ phần phải lưu theo pháp luật. Nhà cung cấp email và WeChat có chính sách lưu trữ riêng. Nhà phát triển không bán thông tin hỗ trợ, không dùng cho quảng cáo hoặc theo dõi giữa các ứng dụng và không chia sẻ ngoài mục đích hỗ trợ nêu trên, trừ khi pháp luật yêu cầu.",
      "faqTitle": "Câu hỏi thường gặp",
      "faq": [
        [
          "Ván cờ có còn khi mở lại ứng dụng không?",
          "Ván hiện tại không được lưu. Mở lại sẽ bắt đầu ván mới. Điểm AI và tùy chọn được lưu trên thiết bị."
        ],
        [
          "Tên tùy chỉnh có đổi luật chơi không?",
          "Không. Chỉ chữ hiển thị thay đổi; độ khó, màu quân và bên được tính điểm không đổi."
        ],
        [
          "Làm sao xóa dữ liệu trên thiết bị?",
          "Khôi phục tên trong Cài đặt hoặc xóa điểm chế độ hiện tại. Xóa ứng dụng sẽ xóa dữ liệu cục bộ; quản lý bản sao lưu hệ thống riêng."
        ]
      ],
      "about": "{appName} là trò chơi cờ năm quân trên iPad, hỗ trợ hai người cùng thiết bị, AI ngoại tuyến, năm tên tùy chỉnh và tám giao diện miễn phí. Có thể phóng to và di chuyển bàn cờ; các giao diện dùng chung luật chơi.",
      "draft": "Cập nhật: 19/11/2026 · Phiên bản: 1.0",
      "hosting": "Lưu trữ trang web và nhật ký truy cập",
      "hostingBody": "Trang web dùng GitHub Pages. GitHub ghi và lưu địa chỉ IP người truy cập vì mục đích bảo mật, kể cả khi không đăng nhập GitHub. Chúng tôi không thêm quảng cáo, mã phân tích, công cụ theo dõi, đăng nhập, biểu mẫu gửi dữ liệu hoặc phông chữ bên thứ ba. Ngôn ngữ được chọn bằng tham số URL, không lưu trong trình duyệt. Nút sao chép WeChat ID chỉ ghi vào bảng nhớ tạm khi được bấm. Dịch vụ thư bạn chọn xử lý email. Thời hạn lưu và cách thực hiện quyền của GitHub được mô tả trong tuyên bố quyền riêng tư của họ.",
      "hostLink": "Tuyên bố quyền riêng tư của GitHub",
      "contactPrivacy": "Khi liên hệ hỗ trợ, địa chỉ email hoặc tài khoản WeChat, nội dung tin nhắn và thông tin thiết bị hay ảnh chụp màn hình do bạn tự gửi được dịch vụ email hoặc WeChat xử lý và nhà phát triển cá nhân shi taisong tiếp nhận. Thông tin chỉ được dùng để trả lời, xử lý lỗi và yêu cầu về quyền riêng tư. Không gửi dữ liệu nhạy cảm không cần thiết. Nhà phát triển lưu nội dung trao đổi hỗ trợ trong 12 tháng rồi xóa. Bạn có thể yêu cầu xóa sớm hơn, trừ phần phải lưu theo pháp luật. Nhà cung cấp email và WeChat có chính sách lưu trữ riêng. Nhà phát triển không bán thông tin hỗ trợ, không dùng cho quảng cáo hoặc theo dõi giữa các ứng dụng và không chia sẻ ngoài mục đích hỗ trợ nêu trên, trừ khi pháp luật yêu cầu.",
      "footer": "Giới thiệu trò chơi · Hướng dẫn · Hỗ trợ",
      "pending": "Các ngôn ngữ khác đang được rà soát và chưa mở.",
      "productName": "Cờ caro mèo",
      "description": "Cờ caro mèo trên iPad: giới thiệu trò chơi, hỗ trợ, luật chơi và thông tin quyền riêng tư."
    },
    "help": "Đen (đen) và Trắng (trắng) luân phiên đặt quân ở giao điểm trống. Năm quân trở lên liên tiếp theo ngang, dọc hoặc chéo thắng; bàn đầy không có người thắng là hòa. Đen đi trước ở chế độ hai người, sau khi đổi chế độ hoặc màu quân máy. Sau ván đấu máy có kết quả, chơi lại thì bên thua đi trước; ván chưa kết thúc hoặc hòa giữ màu đi trước.\n\nBàn có 50 đường, hỗ trợ phóng to và kéo. Thường ban đầu hiện 15 đường; Thị trấn pixel nằm ngang hiện 15 cột, 16 hàng. Hai người dùng cùng thiết bị; đấu máy là Người chơi với Máy. Quân người chơi phải cách một quân máy tối đa 4 hàng VÀ 4 cột, hoặc liền kề một quân mình theo ngang, dọc hay chéo. Không có quân máy thì không áp dụng giới hạn này. Máy mở bàn trống tại trung tâm.\n\nĐộ khó gồm Dễ, Trung bình, Khó. Đen và Trắng chọn màu quân MÁY; người dùng màu còn lại. Đổi màu lập tức bắt đầu ván mới; chọn cùng màu không chơi lại. Độ khó áp dụng ngay khi bàn trống và máy không suy nghĩ, nếu không thì sau khi chơi lại hoặc đổi chế độ.\n\nHoàn tác trong chế độ hai người sẽ xóa nước cuối. Khi đấu máy, thường xóa một cặp nước của máy và người chơi; nếu người chơi vừa đi hoặc vừa thắng thì xóa nước đó. Hoàn tác nước thắng cũng trừ điểm thắng tương ứng.\n\nChơi lại xóa bàn cờ và khôi phục góc nhìn ban đầu, giữ nguyên điểm. Đổi chế độ sẽ bắt đầu ván mới ngay, với khoảng cách 0,5 giây giữa các lần đổi. Mỗi chế độ giữ điểm riêng.\n\nXóa điểm chỉ xóa số ván thắng của chế độ hiện tại, không xóa quân. Điểm hai người chỉ lưu trong phiên mở ứng dụng. Điểm đấu máy, độ khó và màu quân được lưu trên thiết bị. Mở lại ứng dụng sẽ bắt đầu ván mới theo quy tắc hiện có.\n\nCài đặt và đổi giao diện không làm mất ván đang chơi. Nhãn tùy chỉnh và giao diện gần nhất được lưu trên thiết bị. Giao diện không thay đổi luật chơi.",
    "privacy": "Phạm vi: chính sách áp dụng cho Cờ caro mèo phiên bản miễn phí 1.0 và trang hỗ trợ này. Nhà phát hành và người phụ trách dữ liệu hỗ trợ là nhà phát triển cá nhân shi taisong, email song775827@163.com, WeChat Siri3348. Ứng dụng không có tài khoản, đăng nhập, quảng cáo, mua trong ứng dụng hay chơi trực tuyến. Mọi tính năng hiện có và tám giao diện đều miễn phí.\n\nVán cờ và AI chạy trên thiết bị. Bản này không có giao tiếp máy chủ của nhà phát triển, quảng cáo, phân tích, theo dõi hay SDK bên thứ ba; không yêu cầu quyền camera, micrô, danh bạ hoặc vị trí. Ứng dụng không tự động truyền dữ liệu ván cờ hoặc cài đặt cho nhà phát triển hay bên thứ ba.\n\nNgôn ngữ, tên tùy chỉnh, giao diện, độ trong suốt bàn cờ theo giao diện, trạng thái hiện mèo và bảng điểm, độ khó AI, màu quân và số ván thắng với AI được lưu cục bộ để khôi phục tùy chọn và điểm. Ván cờ và điểm hai người chỉ tồn tại trong phiên chạy. Chế độ chẩn đoán có thể tạo bản ghi thử nghiệm cục bộ, không tự tải lên. Bản sao lưu hệ thống có thể chứa dữ liệu này tùy cài đặt thiết bị.\n\nCó thể khôi phục tên trong Cài đặt, đổi tùy chọn hoặc xóa điểm chế độ hiện tại tại vùng điểm. Xóa ứng dụng (không phải gỡ bỏ nhưng giữ dữ liệu) sẽ xóa vùng dữ liệu cục bộ; quản lý bản sao lưu riêng trong hệ thống. Sao chép liên hệ chỉ ghi vào bảng nhớ tạm khi chạm, không đọc bảng nhớ tạm.\n\nKhi liên hệ hỗ trợ, địa chỉ email hoặc tài khoản WeChat, nội dung tin nhắn và thông tin thiết bị hay ảnh chụp màn hình do bạn tự gửi được dịch vụ email hoặc WeChat xử lý và nhà phát triển cá nhân shi taisong tiếp nhận. Thông tin chỉ được dùng để trả lời, xử lý lỗi và yêu cầu về quyền riêng tư. Không gửi dữ liệu nhạy cảm không cần thiết. Nhà phát triển lưu nội dung trao đổi hỗ trợ trong 12 tháng rồi xóa. Bạn có thể yêu cầu xóa sớm hơn, trừ phần phải lưu theo pháp luật. Nhà cung cấp email và WeChat có chính sách lưu trữ riêng. Nhà phát triển không bán thông tin hỗ trợ, không dùng cho quảng cáo hoặc theo dõi giữa các ứng dụng và không chia sẻ ngoài mục đích hỗ trợ nêu trên, trừ khi pháp luật yêu cầu.\n\nTheo luật áp dụng, bạn có thể yêu cầu truy cập, sửa, xóa thông tin đã cung cấp hoặc thực hiện quyền khác qua liên hệ bên dưới. Nhà phát triển không thể truy cập hay xóa từ xa dữ liệu chỉ nằm trên thiết bị.\n\nThời hạn và quyền kiểm soát: tùy chọn và điểm đấu máy được giữ đến khi bạn thay đổi, xóa điểm hoặc xóa dữ liệu ứng dụng. Ván hiện tại và điểm hai người không còn sau khi tiến trình kết thúc. Gỡ bỏ ứng dụng nhưng giữ dữ liệu không xóa tùy chọn. Nhà phát triển không cung cấp đồng bộ đám mây, không thể xem hoặc xóa dữ liệu cục bộ từ xa.\n\nDịch vụ bên ngoài: mở liên kết trang web sẽ dùng trình duyệt hệ thống và tạo nhật ký lưu trữ nêu dưới đây. Bạn chủ động gửi email hoặc dùng WeChat; chỉ mở ứng dụng không tạo hồ sơ hỗ trợ. Mọi tính năng trò chơi đều hoạt động mà không cần những thao tác này. Apple xử lý cửa hàng, chẩn đoán hệ thống và sao lưu theo chính sách của Apple và cài đặt thiết bị; đây không phải dữ liệu do ứng dụng này tự tải lên.\n\nQuyền của bạn: liên hệ để yêu cầu xem, sửa, xóa thông tin hỗ trợ đã cung cấp, ngừng xử lý, rút lại sự đồng ý hoặc thực hiện các quyền khác theo luật áp dụng. Việc rút lại không ảnh hưởng đến xử lý hợp pháp trước đó. Ứng dụng không có tài khoản nên không có quy trình xóa tài khoản. Người chưa thành niên nên tránh gửi tên, trường học, địa chỉ và thông tin cá nhân không cần thiết; có thể nhờ người giám hộ hỗ trợ.\n\nBảo mật và cập nhật: nhà phát triển giới hạn quyền truy cập thông tin trao đổi vào mục đích hỗ trợ cần thiết; không thể bảo đảm an toàn tuyệt đối cho liên lạc qua internet. Khi cách xử lý dữ liệu thay đổi, trang và ngày cập nhật sẽ được sửa; sẽ thông báo thêm hoặc xin đồng ý khi pháp luật yêu cầu.",
    "terms": "Khi phân phối qua App Store, ứng dụng áp dụng Thỏa thuận cấp phép người dùng cuối tiêu chuẩn của Apple (Standard EULA), được liên kết bên dưới. Hướng dẫn trò chơi này không thay thế thỏa thuận hoặc hạn chế quyền bắt buộc của bạn theo luật.\n\nCờ caro mèo 1.0 là trò chơi cục bộ miễn phí, có hai người trên cùng thiết bị và đấu máy ngoại tuyến. Tất cả tính năng hiện có và tám giao diện miễn phí, không quảng cáo, không mua trong ứng dụng, không cần tài khoản. Xem Cách chơi để biết giới hạn nước đi và bên đi trước. Mèo là hoạt ảnh và tương tác trong trò chơi, không phải dịch vụ trực tuyến hay AI tạo sinh.\n\nTùy chọn và điểm đấu máy lưu cục bộ. Ván hiện tại không được lưu lâu dài hoặc trên đám mây. Xóa ứng dụng có thể mất dữ liệu. Hãy nghỉ giải lao; kết quả trò chơi không bảo đảm kết quả thi đấu, thu nhập hay khả năng thực tế.\n\nSử dụng hợp pháp và tôn trọng quyền sở hữu trí tuệ hợp pháp. Quyền đối với ứng dụng và tài nguyên thuộc chủ thể có quyền hợp pháp; thông báo này không khẳng định nhà phát triển có bản quyền độc quyền với mọi yếu tố do AI tạo. Liên hệ nhà phát triển cá nhân shi taisong để được hỗ trợ."
  }
};
