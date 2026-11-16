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
      "intro": "与身边的人轮流落子，或和离线 AI 对弈。在《头头❤️秋秋》，慢慢想，轻轻落。",
      "cta": "了解怎么玩",
      "support": "联系与支持",
      "labels": [
        "同屏双人",
        "离线 AI",
        "随心命名"
      ],
      "descs": [
        "同一台 iPad，轮流走出自己的下一步。",
        "三档难度，自由选择执黑或执白。",
        "为游戏、对手和棋子起喜欢的名字。"
      ],
      "language": "语言",
      "copy": "复制微信号",
      "copied": "已复制 Siri3348",
      "failed": "复制失败，请选中 Siri3348 手动复制。",
      "contact": "联系我们",
      "note": "无需安装 WeChat 即可查看或复制。点击邮箱可打开系统邮件程序；网站不会代你发送邮件。",
      "supportIntro": "遇到问题，欢迎写信告诉我们。请附上 App 设置中显示的版本号、iPad 型号、系统版本、复现步骤；截图请先遮挡个人信息。",
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
      "about": "《头头❤️秋秋》是一款为 iPad 设计的五子棋游戏，支持本机双人、离线 AI、十项文字自定义与七款主题。棋盘可缩放和平移，玩法始终由同一套规则驱动。",
      "draft": "法律内容为审核草案，尚未完成适用法律与法律译文核验；不表示已满足上架要求。",
      "hosting": "网站托管与访问记录",
      "hostingBody": "本网站使用 GitHub Pages。GitHub 为安全目的记录并保存访问者 IP 地址，即使访问者没有登录 GitHub。本网站未添加广告、统计脚本、追踪器、登录、提交表单或第三方字体；语言由页面 URL 参数选择，不写入浏览器存储。复制微信号仅在点击时写入剪贴板。邮件由你选择的邮件服务处理。GitHub 的保存期限与权利请求方式以其隐私声明为准。",
      "hostLink": "GitHub 隐私声明",
      "contactPrivacy": "如果你主动发邮件或通过 WeChat 联系，相应服务会处理你提交的内容，开发者会收到你的消息。请只提供解决问题所需信息；涉及通信记录的访问、更正或删除，可通过下列联系方式提出请求。具体适用要求仍需在正式发布前核验。",
      "footer": "游戏介绍 · 使用指南 · 技术支持",
      "pending": "其余语言正在审核，暂未开放。"
    },
    "help": "黑棋（黑色）先手，白棋（白色）后手，双方轮流在空交叉点落子。横、竖或斜方向连续五枚及以上同色棋子获胜；棋盘填满且无人获胜则为平局。\n\n棋盘为50路，可缩放和拖动；默认显示15路视野。双人对弈由两位玩家交替操作。人机对战由玩家与机器人轮流落子；人机模式的落子需在已有棋子5格内，机器人首手选择中心。\n\n人机选项一行显示初级、中级、困难和执黑、执白。执黑为黑色先手，执白为白色后手。空棋局且机器人未思考时设置立即生效；已开局或思考时的修改在重新开始或切换模式后生效。\n\n双人悔棋撤回最后一步。人机悔棋通常撤回机器人及玩家的一组落子；若玩家刚下或刚获胜，则撤回该步。撤销获胜步骤会撤销对应的本局胜场。\n\n重新开始立即清空当前棋局并恢复默认视野，保留比分。对局中切换模式会先确认，确认后开始新棋局，两种模式比分分别保留。\n\n比分清零只清除当前模式的胜场，不删除棋子。双人比分仅在本次运行期间保存；人机比分与难度、执棋偏好会保存在本机。应用重新启动仍按原规则进入新棋局。\n\n设置与换肤不会重置正在进行的棋局。自定义文字与上次选择的皮肤保存在本机；换肤不影响落子规则。",
    "privacy": "本版本的对局与 AI 在设备上运行，代码未包含开发者服务器通信、广告、分析、跟踪或第三方 SDK，也不申请相机、麦克风、联系人或位置权限。App 不自动向开发者或第三方传输游戏及设置数据。\n\n本机保存语言、自定义名称、皮肤、AI 难度与执棋颜色及人机胜局，用于恢复偏好和比分。棋局和双人比分仅保留在当前运行期间；诊断模式可生成本地测试记录，不自动上传。系统备份可能包含本机数据，由设备的备份设置控制。\n\n可在设置中恢复文字、切换偏好，在比分区清零当前模式比分；删除 App（不是卸载保留数据）可清除本机沙盒，备份需另行在系统中管理。复制联系方式只在点击时写入剪贴板，不读取剪贴板。\n\n如果你主动发邮件或通过 WeChat 联系，相应服务会处理你提交的内容，开发者会收到你的消息。请只提供解决问题所需信息；涉及通信记录的访问、更正或删除，可通过下列联系方式提出请求。具体适用要求仍需在正式发布前核验。\n\n根据适用法律，你可请求查阅、更正、删除所提供的个人信息或行使其他适用权利。请通过下列联系方式提出请求；开发者无法远程读取或删除仅保存在设备上的数据。",
    "terms": "本 App 提供本机双人和离线 AI 五子棋。请依法使用，尊重他人合法权益，不利用应用进行违法活动。\n\n文字自定义只改变显示；规则见玩法说明。偏好与部分比分保存在本机，对局不作为云端存档，删除 App 可能丢失本机数据。请适度游戏。\n\n应用及素材的权利归实际合法权利人所有，本草案不对尚未确认的主体作出声明。任何条款均不排除适用法律赋予用户的强制性权利。功能或条款变化时应更新说明。疑问请联系开发者。"
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
      "intro": "Take turns with someone beside you, or play against offline AI. In 头头❤️秋秋, take your time and make your next move.",
      "cta": "Learn to play",
      "support": "Get support",
      "labels": [
        "Two players, one iPad",
        "Offline AI",
        "Names of your own"
      ],
      "descs": [
        "Share the board and take turns on the same device.",
        "Choose from three levels and play black or white.",
        "Personalize the game, player and piece names."
      ],
      "language": "Language",
      "copy": "Copy WeChat ID",
      "copied": "Copied Siri3348",
      "failed": "Could not copy. Select Siri3348 and copy it manually.",
      "contact": "Get in touch",
      "note": "Viewing or copying this ID does not require WeChat. The email link opens your mail app; this website does not send messages for you.",
      "supportIntro": "Tell us what went wrong. Include the version shown in app Settings, your iPad model, iPadOS version and steps to reproduce the issue. Hide personal information in screenshots.",
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
      "about": "头头❤️秋秋 is an iPad Gomoku game with local two-player play, offline AI, ten customizable labels and seven themes. Zoom and pan the board; all themes use the same game rules.",
      "draft": "Legal content is a review draft. Applicable-law and legal-translation reviews are not complete; publication does not imply App Store readiness.",
      "hosting": "Website hosting and access logs",
      "hostingBody": "This website uses GitHub Pages. GitHub logs and stores visitors’ IP addresses for security, even without a GitHub login. We add no advertising, analytics scripts, trackers, sign-in, submission forms or third-party fonts. Language is selected through a URL parameter, without browser storage. Copying the WeChat ID writes to the clipboard only when clicked. Your chosen mail service handles email. GitHub’s retention and rights-request practices are described in its privacy statement.",
      "hostLink": "GitHub Privacy Statement",
      "contactPrivacy": "If you email us or contact us on WeChat, those services process your submission and the developer receives your message. Provide only what is needed to resolve the issue. You may request access, correction or deletion of correspondence using the contacts below. Specific applicable requirements still need review before formal release.",
      "footer": "Game information · Playing guide · Support",
      "pending": "Other languages are under review and are not enabled yet."
    },
    "help": "Black (black) moves first; White (white) follows. Take turns placing a stone on an empty intersection. Five or more stones in a horizontal, vertical or diagonal line win. A full board without a winner is a draw.\n\nThe board has 50 lines and supports zooming and panning; the initial view shows 15 lines. Two players take turns locally. In AI mode, Player plays Bot. Moves must be within five cells of an existing stone; the AI opens at the center.\n\nThe single options row contains Easy, Med, Hard, Black and White. Black means black/first; White means white/second. Settings apply immediately to an empty board when the AI is idle. During a game or AI thinking, they apply after restarting or switching mode.\n\nUndo removes the last move in two-player mode. In AI mode it normally removes a pair of AI and player moves; if the player has just moved or won, it removes that move. Undoing a winning move also removes its win from the score.\n\nRestart clears the board and resets the view, keeping scores. Switching mode during a game requires confirmation and starts a new game. Each mode keeps its own scores.\n\nReset score clears only the current mode’s wins, without removing stones. Two-player scores last for the current app session. AI scores, difficulty and playing color are saved locally. Relaunching the app starts a new game under the existing rules.\n\nSettings and skins never reset an ongoing game. Custom labels and the last skin are saved on this device. Skins do not change the rules.",
    "privacy": "Games and AI run on your device. This build contains no developer-server communication, advertising, analytics, tracking or third-party SDKs, and requests no camera, microphone, contacts or location permissions. The app does not automatically transmit game or settings data to the developer or third parties.\n\nLanguage, custom labels, theme, AI difficulty, playing color and AI win totals are stored locally to restore preferences and scores. Games and two-player scores last only during the app session. Diagnostic modes may create local test records without uploading them. System backups may include local data, depending on device settings.\n\nRestore labels in Settings, change preferences, or reset the current mode’s scores in the score area. Deleting the app (not offloading it) removes its local sandbox; manage backups separately in system settings. Copying contact details writes to the clipboard only when tapped and does not read it.\n\nIf you email us or contact us on WeChat, those services process your submission and the developer receives your message. Provide only what is needed to resolve the issue. You may request access, correction or deletion of correspondence using the contacts below. Specific applicable requirements still need review before formal release.\n\nSubject to applicable law, you may request access, correction, deletion or other applicable rights regarding information you provide, using the contacts below. The developer cannot remotely access or delete data stored only on your device.",
    "terms": "This app offers local two-player and offline AI Gomoku. Use it lawfully, respect others’ legal rights and do not use it for unlawful activities.\n\nCustom labels change only the display; see How to play for the rules. Preferences and some scores are stored locally. Games are not cloud saves; deleting the app may lose local data. Take regular breaks.\n\nRights in the app and its assets belong to their lawful holders; this draft makes no claim about unconfirmed entities. These terms do not exclude mandatory rights under applicable law. Update this notice when features or terms change. Contact the developer with questions."
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
      "intro": "Luân phiên đi quân cùng người bên cạnh hoặc thử sức với AI ngoại tuyến. Với 头头❤️秋秋, cứ thong thả suy nghĩ rồi nhẹ nhàng đặt quân.",
      "cta": "Tìm hiểu cách chơi",
      "support": "Nhận hỗ trợ",
      "labels": [
        "Hai người, một iPad",
        "AI ngoại tuyến",
        "Tên theo ý bạn"
      ],
      "descs": [
        "Cùng chia sẻ bàn cờ và thay phiên trên một thiết bị.",
        "Ba mức độ khó, tùy chọn quân đen hoặc trắng.",
        "Đặt tên riêng cho trò chơi, người chơi và quân cờ."
      ],
      "language": "Ngôn ngữ",
      "copy": "Sao chép WeChat ID",
      "copied": "Đã sao chép Siri3348",
      "failed": "Không thể sao chép. Hãy chọn Siri3348 và sao chép thủ công.",
      "contact": "Liên hệ",
      "note": "Không cần cài WeChat để xem hoặc sao chép ID. Liên kết email mở ứng dụng thư; trang web không tự gửi thư thay bạn.",
      "supportIntro": "Hãy mô tả vấn đề bạn gặp. Vui lòng ghi phiên bản trong Cài đặt của ứng dụng, mẫu iPad, phiên bản iPadOS và các bước tái hiện lỗi. Che thông tin cá nhân trong ảnh chụp màn hình.",
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
      "about": "头头❤️秋秋 là trò chơi cờ năm quân trên iPad, hỗ trợ hai người cùng thiết bị, AI ngoại tuyến, mười tên tùy chỉnh và bảy giao diện. Có thể phóng to và di chuyển bàn cờ; các giao diện dùng chung luật chơi.",
      "draft": "Nội dung pháp lý là bản dự thảo. Chưa hoàn tất thẩm định luật áp dụng và bản dịch pháp lý; việc công bố không đồng nghĩa đã đủ điều kiện lên App Store.",
      "hosting": "Lưu trữ trang web và nhật ký truy cập",
      "hostingBody": "Trang web dùng GitHub Pages. GitHub ghi và lưu địa chỉ IP người truy cập vì mục đích bảo mật, kể cả khi không đăng nhập GitHub. Chúng tôi không thêm quảng cáo, mã phân tích, công cụ theo dõi, đăng nhập, biểu mẫu gửi dữ liệu hoặc phông chữ bên thứ ba. Ngôn ngữ được chọn bằng tham số URL, không lưu trong trình duyệt. Nút sao chép WeChat ID chỉ ghi vào bảng nhớ tạm khi được bấm. Dịch vụ thư bạn chọn xử lý email. Thời hạn lưu và cách thực hiện quyền của GitHub được mô tả trong tuyên bố quyền riêng tư của họ.",
      "hostLink": "Tuyên bố quyền riêng tư của GitHub",
      "contactPrivacy": "Nếu gửi email hoặc liên hệ qua WeChat, các dịch vụ đó xử lý nội dung gửi và nhà phát triển nhận tin nhắn. Chỉ cung cấp thông tin cần thiết để giải quyết vấn đề. Có thể yêu cầu truy cập, sửa hoặc xóa nội dung trao đổi qua liên hệ bên dưới. Các yêu cầu cụ thể cần được thẩm định trước khi phát hành chính thức.",
      "footer": "Giới thiệu trò chơi · Hướng dẫn · Hỗ trợ",
      "pending": "Các ngôn ngữ khác đang được rà soát và chưa mở."
    },
    "help": "Quân đen (quân đen) đi trước, Quân trắng (quân trắng) đi sau. Luân phiên đặt quân tại giao điểm trống. Năm quân trở lên cùng màu liên tiếp theo hàng ngang, dọc hoặc chéo sẽ thắng. Bàn đầy mà chưa có người thắng là hòa.\n\nBàn cờ có 50 đường, có thể phóng to và kéo; ban đầu hiển thị 15 đường. Chế độ hai người chơi luân phiên trên cùng thiết bị. Khi đấu máy, Người chơi chơi với Máy. Nước đi phải nằm trong phạm vi 5 ô từ quân đã đặt; máy đi đầu tại trung tâm.\n\nMột hàng tùy chọn gồm Dễ, Vừa, Khó, Đen và Trắng. Đen là quân đen/đi trước; Trắng là quân trắng/đi sau. Thiết lập có hiệu lực ngay khi bàn trống và máy không suy nghĩ. Nếu ván đã bắt đầu hoặc máy đang suy nghĩ, thay đổi áp dụng khi chơi lại hoặc đổi chế độ.\n\nHoàn tác trong chế độ hai người sẽ xóa nước cuối. Khi đấu máy, thường xóa một cặp nước của máy và người chơi; nếu người chơi vừa đi hoặc vừa thắng thì xóa nước đó. Hoàn tác nước thắng cũng trừ điểm thắng tương ứng.\n\nChơi lại xóa bàn cờ và khôi phục góc nhìn ban đầu, giữ nguyên điểm. Đổi chế độ giữa ván cần xác nhận và bắt đầu ván mới. Mỗi chế độ giữ điểm riêng.\n\nXóa điểm chỉ xóa số ván thắng của chế độ hiện tại, không xóa quân. Điểm hai người chỉ lưu trong phiên mở ứng dụng. Điểm đấu máy, độ khó và màu quân được lưu trên thiết bị. Mở lại ứng dụng sẽ bắt đầu ván mới theo quy tắc hiện có.\n\nCài đặt và đổi giao diện không làm mất ván đang chơi. Nhãn tùy chỉnh và giao diện gần nhất được lưu trên thiết bị. Giao diện không thay đổi luật chơi.",
    "privacy": "Ván cờ và AI chạy trên thiết bị. Bản này không có giao tiếp máy chủ của nhà phát triển, quảng cáo, phân tích, theo dõi hay SDK bên thứ ba; không yêu cầu quyền camera, micrô, danh bạ hoặc vị trí. Ứng dụng không tự động truyền dữ liệu ván cờ hoặc cài đặt cho nhà phát triển hay bên thứ ba.\n\nNgôn ngữ, tên tùy chỉnh, giao diện, độ khó AI, màu quân và số ván thắng với AI được lưu cục bộ để khôi phục tùy chọn và điểm. Ván cờ và điểm hai người chỉ tồn tại trong phiên chạy. Chế độ chẩn đoán có thể tạo bản ghi thử nghiệm cục bộ, không tự tải lên. Bản sao lưu hệ thống có thể chứa dữ liệu này tùy cài đặt thiết bị.\n\nCó thể khôi phục tên trong Cài đặt, đổi tùy chọn hoặc xóa điểm chế độ hiện tại tại vùng điểm. Xóa ứng dụng (không phải gỡ bỏ nhưng giữ dữ liệu) sẽ xóa vùng dữ liệu cục bộ; quản lý bản sao lưu riêng trong hệ thống. Sao chép liên hệ chỉ ghi vào bảng nhớ tạm khi chạm, không đọc bảng nhớ tạm.\n\nNếu gửi email hoặc liên hệ qua WeChat, các dịch vụ đó xử lý nội dung gửi và nhà phát triển nhận tin nhắn. Chỉ cung cấp thông tin cần thiết để giải quyết vấn đề. Có thể yêu cầu truy cập, sửa hoặc xóa nội dung trao đổi qua liên hệ bên dưới. Các yêu cầu cụ thể cần được thẩm định trước khi phát hành chính thức.\n\nTheo luật áp dụng, bạn có thể yêu cầu truy cập, sửa, xóa thông tin đã cung cấp hoặc thực hiện quyền khác qua liên hệ bên dưới. Nhà phát triển không thể truy cập hay xóa từ xa dữ liệu chỉ nằm trên thiết bị.",
    "terms": "Ứng dụng cung cấp cờ năm quân cho hai người trên cùng thiết bị và AI ngoại tuyến. Hãy sử dụng hợp pháp, tôn trọng quyền hợp pháp của người khác và không dùng cho hoạt động trái pháp luật.\n\nTên tùy chỉnh chỉ đổi cách hiển thị; xem Hướng dẫn chơi để biết luật. Tùy chọn và một số điểm được lưu cục bộ. Ván cờ không được lưu trên đám mây; xóa ứng dụng có thể làm mất dữ liệu cục bộ. Hãy nghỉ giải lao thường xuyên.\n\nQuyền đối với ứng dụng và tài nguyên thuộc chủ thể hợp pháp; bản dự thảo không khẳng định chủ thể chưa được xác nhận. Điều khoản không loại trừ quyền bắt buộc theo luật áp dụng. Cần cập nhật khi chức năng hoặc điều khoản thay đổi. Liên hệ nhà phát triển nếu có thắc mắc."
  }
};
