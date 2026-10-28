/* ========================================================
   KHO DỮ LIỆU BÀI HỌC THỦY MẪU (水母)
   HỆ THỐNG HỌC TẬP HSK & BÀI HỌC TOÀN DIỆN
   ======================================================== */

// 1. KHO TỪ VỰNG GIẢN THỂ (HSK 1 - 6)
const scVocabData = [
  // --- BÀI 15: HSK 4 (HẠ) ---
  {
    hanzi: "弹钢琴",
    pinyin: "tán gāngqín",
    type: "Cụm động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Chơi đàn piano, đánh dương cầm",
    example: "那个一边弹钢琴一边唱歌的男孩子是谁？",
    exampleVn: "Cậu bé vừa đánh đàn piano vừa hát kia là ai vậy?"
  },
  {
    hanzi: "棒",
    pinyin: "bàng",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Giỏi, tuyệt vời, xuất sắc",
    example: "表演得真棒！",
    exampleVn: "Biểu diễn thật là tuyệt vời!"
  },
  {
    hanzi: "孙子",
    pinyin: "sūnzi",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Cháu trai (nội)",
    example: "是我孙子。去年寒假前的新年会他也表演过一次。",
    exampleVn: "Là cháu trai tôi đấy. Buổi liên hoan năm mới trước kỳ nghỉ đông năm ngoái nó cũng biểu diễn một lần."
  },
  {
    hanzi: "寒假",
    pinyin: "hánjià",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Kỳ nghỉ đông",
    example: "寒假你打算去哪儿旅游？",
    exampleVn: "Kỳ nghỉ đông bạn dự định đi đâu du lịch?"
  },
  {
    hanzi: "父亲",
    pinyin: "fùqīn",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Bố, người cha",
    example: "你就要成为一位优秀的父亲或者母亲。",
    exampleVn: "Bạn phải trở thành một người cha hoặc người mẹ ưu tú trước đã."
  },
  {
    hanzi: "闹钟",
    pinyin: "nàozhōng",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Đồng hồ báo thức",
    example: "早上闹钟响了她不醒。",
    exampleVn: "Buổi sáng chuông đồng hồ báo thức reo rồi mà nó không tỉnh."
  },
  {
    hanzi: "响",
    pinyin: "xiǎng",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Reo, vang, kêu lên",
    example: "桌子上那个一直在响的手机是谁的？",
    exampleVn: "Chiếc điện thoại đang reo liên tục trên bàn kia là của ai vậy?"
  },
  {
    hanzi: "醒",
    pinyin: "xǐng",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Thức giấc, tỉnh dậy",
    example: "我今天早上六点就醒了。",
    exampleVn: "Sáng nay 6 giờ tôi đã tỉnh giấc rồi."
  },
  {
    hanzi: "赶",
    pinyin: "gǎn",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Đuổi theo, vội vã, gấp rút",
    example: "我赶时间送她上学。",
    exampleVn: "Tôi đang vội thời gian để đưa con đi học."
  },
  {
    hanzi: "厕所",
    pinyin: "cèsuǒ",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Nhà vệ sinh",
    example: "她又急着上厕所。",
    exampleVn: "Nó lại vội vã đi nhà vệ sinh."
  },
  {
    hanzi: "批评",
    pinyin: "pīpíng",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Phê bình, chỉ trích",
    example: "每天因为这些小事批评她，弄得我俩心情都不好。",
    exampleVn: "Mỗi ngày đều vì mấy chuyện vặt vãnh này mà mắng nó, làm cho tâm trạng cả hai mẹ con đều không vui."
  },
  {
    hanzi: "弄",
    pinyin: "nòng",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Làm, làm cho",
    example: "材料都弄好了，马上给您送过去。",
    exampleVn: "Tài liệu đều đã chuẩn bị xong rồi, gửi qua cho ngài ngay đây."
  },
  {
    hanzi: "管理",
    pinyin: "guǎnlǐ",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Quản lý",
    example: "你应该让孩子学会管理时间。",
    exampleVn: "Bạn nên để trẻ học cách tự quản lý thời gian của mình."
  },
  {
    hanzi: "打针",
    pinyin: "dǎ zhēn",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Tiêm, chích thuốc",
    example: "明天又要带我儿子去医院打针，想想我就头疼。",
    exampleVn: "Ngày mai lại phải dắt con trai tôi đi bệnh viện tiêm phòng, nghĩ tới là tôi thấy đau đầu."
  },
  {
    hanzi: "护士",
    pinyin: "hùshi",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Y tá",
    example: "我就小声地和护士说我女儿很勇敢。",
    exampleVn: "Tôi liền nói nhỏ với cô y tá rằng con gái tôi rất dũng cảm."
  },
  {
    hanzi: "表扬",
    pinyin: "biǎoyáng",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Khen ngợi, biểu dương",
    example: "原来鼓励和表扬对小孩儿挺有用的。",
    exampleVn: "Hóa ra khích lệ và khen ngợi lại rất hữu ích với trẻ nhỏ."
  },
  {
    hanzi: "千万",
    pinyin: "qiānwàn",
    type: "Phó từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Nhất thiết, tuyệt đối (thường dùng khuyên ngăn)",
    example: "表扬千万不要太多，过多的表扬可能会给孩子带来压力。",
    exampleVn: "Khen ngợi tuyệt đối đừng quá nhiều, khen ngợi quá mức có thể mang lại áp lực cho trẻ."
  },
  {
    hanzi: "怀疑",
    pinyin: "huáiyí",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Nghi ngờ, hoài nghi",
    example: "还可能让孩子怀疑自己的能力，变得没有信心。",
    exampleVn: "Còn có thể làm cho trẻ nghi ngờ khả năng của bản thân, trở nên mất tự tin."
  },
  {
    hanzi: "故意",
    pinyin: "gùyì",
    type: "Phó từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Cố ý, cố tình",
    example: "有的孩子会通过哭、扔东西或者故意敲打来引起父母的注意。",
    exampleVn: "Có đứa trẻ sẽ thông qua việc khóc, ném đồ đạc hoặc cố tình gõ đập để gây sự chú ý của cha mẹ."
  },
  {
    hanzi: "敲",
    pinyin: "qiāo",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Gõ, đập",
    example: "有人在敲门，你去开一下吧。",
    exampleVn: "Có người đang gõ cửa, bạn ra mở một lát đi."
  },
  {
    hanzi: "整理",
    pinyin: "zhěnglǐ",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Dọn dẹp, chỉnh lý, sắp xếp",
    example: "陪孩子整理整理东西，弄清楚他们的问题。",
    exampleVn: "Cùng con dọn dẹp đồ đạc, làm rõ các vấn đề của con."
  },
  {
    hanzi: "合适",
    pinyin: "héshì",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Phù hợp, thích hợp",
    example: "教育孩子应该选择合适的方法。",
    exampleVn: "Giáo dục con cái nên lựa chọn những phương pháp phù hợp."
  },
  {
    hanzi: "骗",
    pinyin: "piàn",
    type: "Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Lừa dối, gạt",
    example: "最好不要为了解决问题而骗孩子。",
    exampleVn: "Tốt nhất đừng vì muốn giải quyết vấn đề trước mắt mà lừa dối con trẻ."
  },
  {
    hanzi: "儿童",
    pinyin: "értóng",
    type: "Danh từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Nhi đồng, trẻ em",
    example: "儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
    exampleVn: "Trẻ em còn thiếu khả năng phán đoán, thấy bố mẹ lừa gạt thì chúng cũng sẽ học theo cách nói dối."
  },
  {
    hanzi: "假",
    pinyin: "jiǎ",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Giả, không thật",
    example: "说假话是不好的习惯。",
    exampleVn: "Nói lời giả dối là một thói quen không tốt."
  },
  {
    hanzi: "左右",
    pinyin: "zuǒyòu",
    type: "Từ chỉ lượng",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Khoảng, chừng (đặt sau số lượng)",
    example: "七岁左右的儿童普遍好动，坐不住。",
    exampleVn: "Trẻ em tầm khoảng 7 tuổi nhìn chung rất hiếu động, ngồi không yên một chỗ."
  },
  {
    hanzi: "懒",
    pinyin: "lǎn",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Lười, lười biếng",
    example: "当孩子不明白时，不要用“懒”、“笨”批评他。",
    exampleVn: "Khi trẻ chưa hiểu bài, đừng dùng từ 'lười biếng', 'ngốc nghếch' để chỉ trích con."
  },
  {
    hanzi: "笨",
    pinyin: "bèn",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Ngốc, chậm chạp, vụng về",
    example: "没有人天生就是笨的。",
    exampleVn: "Không có ai sinh ra đã là ngốc nghếch cả."
  },
  {
    hanzi: "粗心",
    pinyin: "cūxīn",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Bất cẩn, cẩu thả, không cẩn thận",
    example: "做数学题一定要认真，千万不要粗心。",
    exampleVn: "Làm bài tập toán nhất định phải tập trung, tuyệt đối đừng bất cẩn."
  },
  {
    hanzi: "骄傲",
    pinyin: "jiāo'ào",
    type: "Tính từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Kiêu ngạo, tự mãn (hoặc tự hào)",
    example: "如果孩子比较骄傲，应该让他明白还有很多知识需要学习。",
    exampleVn: "Nếu trẻ có tính tự kiêu, nên cho con hiểu rằng vẫn còn rất nhiều kiến thức cần phải học hỏi."
  },
  {
    hanzi: "害羞",
    pinyin: "hàixiū",
    type: "Tính từ / Động từ",
    level: "HSK 4 (Hạ)",
    lesson: 15,
    meaning: "Xấu hổ, ngượng ngùng, rụt rè",
    example: "要是孩子性格有些害羞，就要经常鼓励他说出自己的看法。",
    exampleVn: "Nếu tính cách của con hơi rụt rè, xấu hổ thì phải thường xuyên khích lệ con nói ra suy nghĩ của mình."
  }
];

// 2. KHO TỪ VỰNG PHỒN THỂ (10 CHỦ ĐỀ)
const tcVocabData = [
  {
    hanzi: "認識",
    pinyin: "rènshì",
    type: "Động từ",
    topic: 1,
    meaning: "Quen biết, làm quen",
    example: "很高興能認識你！",
    exampleVn: "Rất vui được quen biết bạn!"
  }
];

// 3. KHO BÀI TẬP TRẮC NGHIỆM ĐA NĂNG & CÓ AUDIO
const quizData = [
  {
    section: "sc",
    tag: "HSK 4 (Hạ) • Bài 15",
    question: "选词填空：两个人相处，最重要的是互相______与信任。",
    audio: "",
    options: ["A. 复杂 (fùzá)", "B. 理解 (lǐjiě)", "C. 批评 (pīpíng)", "D. 偶尔 (ǒu'ěr)"],
    correctIndex: 1,
    explain: "Chính xác! 理解 (lǐjiě) mang nghĩa thấu hiểu lẫn nhau."
  },
  {
    section: "sc",
    tag: "HSK 4 (Hạ) • Bài 15",
    question: "选词填空（千方/千万/一定）：表扬孩子______不要太多，过多的表扬可能会带来压力。",
    audio: "",
    options: ["A. 千方", "B. 千万", "C. 一定", "D. 肯定"],
    correctIndex: 1,
    explain: "Đúng! Phó từ '千万' kết hợp dạng phủ định '千万不要' để thể hiện lời khuyên răn thiết tha."
  },
  {
    section: "sc",
    tag: "HSK 4 (Hạ) • Bài 15",
    question: "选词填空：七岁______的儿童普遍好动，坐不住。",
    audio: "",
    options: ["A. 左右", "B. 上下", "C. 大概", "D. 也许"],
    correctIndex: 0,
    explain: "Chính xác! '左右' đứng ngay sau từ chỉ số lượng '七岁' biểu thị con số xấp xỉ khoảng 7 tuổi."
  },
  {
    section: "sc",
    tag: "HSK 4 (Hạ) • Bài 15",
    question: "根据课文判断：当孩子性格有些害羞时，家长应该怎么做？",
    audio: "",
    options: ["A. 用“笨”、“粗心”批评他", "B. 经常替他做决定", "C. 经常鼓励他说出自己的看法", "D. 不让他跟别的小朋友玩"],
    correctIndex: 2,
    explain: "Chính xác! Bài khóa khuyên: 要是孩子性格有些害羞，就要经常鼓励他说出自己的看法."
  }
];
