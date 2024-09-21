import { images } from '@/constants'
import { ImageSourcePropType } from 'react-native'

export enum ECategory {
  TRIEU_NGO,
  TRIEU_DINH,
  TRIEU_TIEN_LE,
  TRIEU_HAU_LE,
  TRIEU_LY,
  TRIEU_TRAN,
  TRIEU_HO,
  TRIEU_MAC,
  TRIEU_NGUYEN,
}

export interface IData {
  id: number
  image: any
  category: ECategory
  description: string
  title: string
  body: Array<{
    title: string
    image?: ImageSourcePropType
    content: string
  }>
}

export interface ITotalData {
  id: ECategory
  title: string
  start: number
  end: number
  image: ImageSourcePropType
  list: IData[]
}

export interface IObjectTotalData {
  [key: number]: ITotalData
}

const trieuDinhData = {
  id: ECategory.TRIEU_DINH,
  title: 'Triều Đinh',
  start: 968,
  end: 980,
  image: images.menu_dinh,
  list: [
    {
      id: 1,
      image: images.slide1,
      category: ECategory.TRIEU_DINH,
      title: 'Triều Đinh: Nền tảng xây dựng quốc gia độc lập',
      description:
        'Triều Đinh, kéo dài từ năm 968 đến năm 980, là một giai đoạn quan trọng trong lịch sử Việt Nam khi đất nước bước vào kỷ nguyên độc lập sau hàng ngàn năm chịu sự đô hộ của phong kiến Trung Quốc. Triều đại này do Đinh Bộ Lĩnh sáng lập, và dù tồn tại trong thời gian ngắn, nó đã đặt nền móng cho sự hình thành một quốc gia độc lập và mạnh mẽ.',
      body: [
        {
          title: 'Bối cảnh lịch sử',
          image: images.menu_dinh,
          content:
            'Sau khi Nhà Ngô suy yếu, đất nước rơi vào tình trạng loạn lạc, được gọi là “loạn 12 sứ quân”. Trong bối cảnh đó, Đinh Bộ Lĩnh, một người xuất thân từ vùng Hoa Lư (nay là Ninh Bình), nổi lên với tài năng quân sự và chính trị. Ông đã dẹp loạn các sứ quân, thống nhất đất nước và xưng đế vào năm 968, đặt quốc hiệu là Đại Cồ Việt, chọn Hoa Lư làm kinh đô.',
        },
        {
          title: 'Thành tựu quan trọng',
          image: images.menu1,
          content: `	1.	Xây dựng quốc gia độc lập: Đinh Bộ Lĩnh đã chấm dứt tình trạng chia cắt và thiết lập một chính quyền trung ương tập quyền, đưa đất nước thoát khỏi sự xâm lược từ phương Bắc, đặc biệt từ nhà Tống.
2.	Xây dựng bộ máy nhà nước: Dưới triều Đinh, hệ thống quan lại và quân đội được tổ chức chặt chẽ. Đinh Bộ Lĩnh xưng là Đinh Tiên Hoàng, tự khẳng định quyền lực tuyệt đối. Ông xây dựng lực lượng quân đội mạnh, chia quân thành “thập đạo” và tạo ra một triều đình có khả năng quản lý toàn bộ quốc gia.
3.	Chính sách ngoại giao khéo léo: Đinh Tiên Hoàng nhận thấy sự đe dọa từ phương Bắc nhưng không trực tiếp đối đầu mà chọn con đường ngoại giao khôn khéo. Ông duy trì mối quan hệ hòa bình với nhà Tống bằng cách xin sắc phong, vừa thể hiện sự độc lập nhưng cũng bảo đảm an ninh cho Đại Cồ Việt.
4.	Thiết lập kinh đô tại Hoa Lư: Việc chọn Hoa Lư làm kinh đô không chỉ mang tính chiến lược về mặt quân sự mà còn giúp ông kiểm soát chặt chẽ các khu vực lân cận. Đây là một vị trí khó tấn công, thuận lợi cho việc phòng thủ đất nước.`,
        },
        {
          title: 'Đinh Tiên Hoàng và sự kế thừa',
          content: `Sau khi Đinh Tiên Hoàng qua đời vào năm 979, triều Đinh bắt đầu suy yếu. Con trai của ông là Đinh Toàn kế vị khi còn rất nhỏ, dẫn đến tình trạng bất ổn trong triều đình. Lợi dụng cơ hội này, nhà Tống chuẩn bị xâm lược Đại Cồ Việt. Tuy nhiên, tướng Lê Hoàn đã lãnh đạo quân đội đánh bại nhà Tống và lên ngôi, mở ra triều đại mới – triều Tiền Lê.`,
        },
        {
          title: 'Ý nghĩa của triều Đinh',
          content: `Dù chỉ tồn tại trong hơn một thập kỷ, triều Đinh đã để lại dấu ấn sâu đậm trong lịch sử Việt Nam. Triều đại này không chỉ mở ra một giai đoạn độc lập sau hàng nghìn năm Bắc thuộc mà còn đặt nền móng cho sự phát triển của nhà nước phong kiến tập quyền. Đinh Tiên Hoàng là người khởi xướng tinh thần tự cường dân tộc, thiết lập nền tảng chính trị và quân sự để bảo vệ nền độc lập của đất nước.
Triều Đinh có thể ngắn ngủi, nhưng vai trò của nó trong việc khởi tạo một quốc gia độc lập, tự chủ, với chính quyền trung ương mạnh mẽ, đã góp phần quan trọng vào việc định hình nền móng của một nước Việt Nam phát triển sau này.`,
        },
      ],
    },
    {
      id: 2,
      image: images.slide2,
      category: ECategory.TRIEU_DINH,
      title: 'Triều Đinh: Khởi nguồn nền độc lập dân tộc',
      description:
        'Triều Đinh (968-980) là triều đại đầu tiên trong lịch sử Việt Nam đánh dấu bước ngoặt quan trọng, khi đất nước chính thức thoát khỏi ách đô hộ phương Bắc và bước vào thời kỳ độc lập tự chủ. Mặc dù tồn tại ngắn ngủi, triều đại này đã đặt nền tảng cho sự phát triển của một nhà nước tập quyền và góp phần củng cố nền độc lập cho dân tộc Việt.',
      body: [
        {
          title: 'Đinh Bộ Lĩnh và thời kỳ loạn 12 sứ quân',
          content:
            'Sau khi Ngô Quyền qua đời, nhà Ngô suy yếu, đất nước rơi vào tình trạng chia cắt, mỗi vùng lãnh thổ do một sứ quân cát cứ. Trong bối cảnh này, Đinh Bộ Lĩnh nổi lên như một anh hùng dân tộc, đánh bại các sứ quân và thống nhất đất nước vào năm 968, mở ra triều đại mới mang tên Đại Cồ Việt.',
        },
        {
          title: 'Các thành tựu của triều Đinh',
          content: `	1.	Thống nhất đất nước và lập quốc: Đinh Tiên Hoàng đã thống nhất đất nước sau nhiều năm chia cắt, đặt nền tảng cho một quốc gia độc lập.
      2.	Xây dựng nhà nước phong kiến tập quyền: Ông xây dựng mô hình nhà nước tập quyền, tổ chức bộ máy chính quyền và quân đội vững mạnh.
      3.	Chính sách ngoại giao khôn khéo: Đinh Tiên Hoàng thực hiện chính sách hòa bình với nhà Tống, duy trì an ninh quốc gia.
      4.	Chọn Hoa Lư làm kinh đô: Đây là vị trí chiến lược giúp ông củng cố quyền lực và phòng thủ đất nước.`,
        },
        {
          title: 'Sự suy yếu và kết thúc của triều Đinh',
          content: `Sau khi Đinh Tiên Hoàng và Đinh Liễn qua đời, triều Đinh rơi vào khủng hoảng. Đinh Toàn kế vị nhưng còn nhỏ, dẫn đến tình trạng bất ổn trong triều chính. Lê Hoàn đã lên ngôi và lập nên triều Tiền Lê sau khi đánh bại quân Tống.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Đinh',
          content: `Triều Đinh đã đánh dấu sự mở đầu của thời kỳ độc lập cho Việt Nam. Dù ngắn ngủi, triều đại này đã đặt nền móng cho nhà nước phong kiến tập quyền, củng cố sức mạnh quân sự và giữ vững nền độc lập non trẻ của dân tộc.`,
        },
      ],
    },
  ],
}

const trieuLyData = {
  id: ECategory.TRIEU_LY,
  title: 'Triều Lý',
  start: 1009,
  end: 1225,
  image: images.menu_ly,
  list: [
    {
      id: 3,
      category: ECategory.TRIEU_LY,
      image: images.menu_ly,
      title: 'Triều Lý: Thời kỳ ổn định và phát triển của Việt Nam',
      description:
        'Triều Lý (1009-1225) là một trong những triều đại lâu dài và phát triển nhất trong lịch sử Việt Nam. Đây là giai đoạn mà đất nước đạt được sự ổn định về chính trị, phát triển về văn hóa và mở rộng lãnh thổ. Triều đại này do Lý Công Uẩn sáng lập và được coi là một trong những thời kỳ hưng thịnh nhất của lịch sử dân tộc.',
      body: [
        {
          title: 'Bối cảnh lịch sử',
          content:
            'Sau khi triều Tiền Lê suy yếu, đất nước đứng trước nguy cơ chia cắt và khủng hoảng chính trị. Lý Công Uẩn, một quan chức có tài, đã được nhân dân và triều đình ủng hộ lên ngôi, lập ra triều Lý vào năm 1009. Đây là triều đại mang tính bước ngoặt khi đất nước thoát khỏi giai đoạn rối ren và bắt đầu bước vào thời kỳ phát triển mạnh mẽ.',
        },
        {
          title: 'Thành tựu quan trọng',
          content: `	1.	Thủ đô Thăng Long: Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư về Thăng Long, mở ra một kỷ nguyên mới với thủ đô phát triển thịnh vượng.
      2.	Tôn giáo và văn hóa: Triều Lý coi trọng Phật giáo và xây dựng nhiều công trình tôn giáo lớn như chùa Một Cột, chùa Diên Hựu, góp phần phát triển văn hóa dân tộc.
      3.	Phát triển kinh tế: Nông nghiệp được chú trọng với các biện pháp cải tiến ruộng đất, hệ thống thủy lợi, giúp đất nước trở nên giàu mạnh.
      4.	Mở rộng lãnh thổ: Triều Lý đã đánh dẹp các cuộc nổi loạn và mở rộng lãnh thổ về phía Nam, tạo nền móng cho một quốc gia thống nhất.`,
        },
        {
          title: 'Sự suy yếu và kết thúc của triều Lý',
          content: `Vào cuối thế kỷ 12, triều đình nhà Lý bắt đầu suy yếu do các cuộc tranh giành quyền lực nội bộ, cùng với đó là tình trạng tham nhũng và mất lòng dân. Điều này đã dẫn đến sự suy yếu của triều đình và mở đường cho nhà Trần lên thay thế vào năm 1225.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Lý',
          content: `Triều Lý đã tạo ra nền tảng vững chắc cho sự phát triển lâu dài của đất nước. Đây là giai đoạn Việt Nam trở nên hùng mạnh, cả về chính trị, kinh tế lẫn văn hóa. Những thành tựu của triều Lý đã để lại dấu ấn sâu đậm trong lịch sử và là tiền đề cho các triều đại sau như nhà Trần tiếp tục xây dựng và bảo vệ đất nước.`,
        },
      ],
    },
    {
      id: 4,
      image: images.menu_ly,
      category: ECategory.TRIEU_LY,
      title: 'Triều Lý: Giai đoạn phát triển và mở rộng lãnh thổ',
      description:
        'Triều Lý (1009-1225) là thời kỳ phát triển rực rỡ của đất nước Việt Nam, đặc biệt về mặt lãnh thổ và văn hóa. Đây là giai đoạn mà đất nước thoát khỏi thời kỳ phong kiến rối ren và bước vào thời kỳ thống nhất, với nhiều cải cách về hành chính và quân sự.',
      body: [
        {
          title: 'Lý Công Uẩn và sự khởi đầu của triều đại',
          content:
            'Năm 1009, Lý Công Uẩn lên ngôi vua, lập ra nhà Lý sau khi nhà Tiền Lê suy yếu. Ông đã dời đô từ Hoa Lư về Thăng Long, đánh dấu sự thay đổi lớn trong chiến lược phát triển của đất nước. Với việc dời đô, Lý Công Uẩn đã tạo ra một trung tâm kinh tế, văn hóa, và chính trị mới, góp phần thúc đẩy sự phát triển lâu dài của quốc gia.',
        },
        {
          title: 'Những cải cách nổi bật của triều Lý',
          content: `	1.	Dời đô về Thăng Long: Đây là một quyết định mang tầm chiến lược, giúp đất nước phát triển về mọi mặt. Thăng Long trở thành thủ đô hưng thịnh trong suốt hàng thế kỷ sau.
      2.	Phát triển quân đội và hành chính: Triều Lý đã thiết lập hệ thống quản lý hành chính chặt chẽ và tổ chức quân đội mạnh mẽ, giúp bảo vệ đất nước trước các cuộc xâm lược từ bên ngoài.
      3.	Coi trọng văn hóa và giáo dục: Nhiều công trình văn hóa, chùa chiền được xây dựng. Giáo dục được phát triển với việc đào tạo quan lại và phát triển các trường học.
      4.	Mở rộng lãnh thổ: Nhà Lý đã mở rộng lãnh thổ về phía Nam, đánh dấu sự mở rộng quy mô đất nước và phát triển mạnh mẽ về mặt quân sự.`,
        },
        {
          title: 'Sự suy yếu của triều Lý',
          content: `Vào thế kỷ 12, nhà Lý bắt đầu suy yếu do sự tranh giành quyền lực giữa các quan lại và tình trạng lạm dụng quyền hành. Điều này dẫn đến sự khủng hoảng chính trị, quân đội suy yếu, và đất nước rơi vào tình trạng hỗn loạn.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Lý',
          content: `Triều Lý đã mở ra một thời kỳ phát triển mạnh mẽ cho đất nước về mọi mặt, từ văn hóa, giáo dục, đến lãnh thổ. Đây cũng là giai đoạn mà nền văn minh Đại Việt bắt đầu định hình rõ ràng, đặt nền móng cho các triều đại sau phát triển.`,
        },
      ],
    },
  ],
}

export const totalData: IObjectTotalData = {
  [ECategory.TRIEU_DINH]: trieuDinhData,
  [ECategory.TRIEU_LY]: trieuLyData,
}

export const allPosts = [...trieuDinhData.list, ...trieuLyData.list]
