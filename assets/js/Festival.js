/**
 * Created by Return on 04/07/2017.
 */

function Festival_Judgment(Cur_month, Cur_day) {
    var Title, Info;
    switch (Cur_month){
        case 1:
            switch (Cur_day) {
                case 1:
                    Title = "元旦";
                    Info = "除夕前要大掃除<br>在門口掛草繩<br>插上桔子<br>門前擺松、竹、梅取意吉利<br>除夕晚上全家團聚吃過年面<br>半夜聽“除夕鐘聲”守歲<br>元旦早上吃年糕湯（稱“雜煮”）<br>日本的新年是日本人一年中最重要的節日之一<br>あけましておめでとうございます";
                    break;
                case 9:
                    Title = "成人の日";
                    Info = "慶祝年滿20歲的青年男女成人自立<br>有各市、鎮、村的行政機關舉行成人儀式的典禮<br>此節2000年（平成12年）前為1月15日";
                    break;
                case 11:
                    Title = "鏡開きの日";
                    Info = "日本人新年期間會在家的神壇前供奉新年裝飾品<br>關東習慣在這天（關西則是15日）將供奉品取出<br>這儀式叫「鏡開」<br>並且取下吃「鏡餅」<br>「鏡開」時不能用刀等有刃的道具<br>一般用木槌敲開象徵吉利<br>一家團圓通常會煮紅豆湯配鏡餅吃";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 2:
            switch (Cur_day) {
                case 2:
                    Title = "節分";
                    Info = "日本在節分之日有許多傳統的活動<br>例如在自家門玄關前以及到神社舉行撒豆驅魔儀式<br>邊撒邊喊：「鬼出去，福進來」<br>使用的豆子是蒸過的大豆<br>除了撒豆子也要記得在屋內吃下與自已歲數相同的豆子數量<br>保佑整年無病無災";
                    break;
                case 11:
                    Title = "建国記念日";
                    Info = "根據日本神話<br>神武天皇於公元前660年2月11日建國<br>故憲法上將這一天定為建國紀念日";
                    break;
                case 14:
                    Title = "バレンタイン";
                    Info = "情人節又叫聖瓦倫丁節或聖華倫泰節<br>即每年的2月14日<br>是西方國家的傳統節日之一<br>這是一個關於愛、浪漫以及花、巧克力、賀卡的節日<br>男女在這一天互送禮物用以表達愛意或友好";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 3:
            switch (Cur_day) {
                case 3:
                    Title = "桃花节";
                    Info = "因每年3月3日在祭壇上擺供用土、紙等製成的外飾服裝的偶人而得名<br>過偶人節最早源於古代日本人流放偶人的習俗<br>所謂流放偶人<br>即給燒製成的泥娃娃穿上紅色紙服<br>連同祭品一起放在稻草筏上<br>讓其順水漂流而去<br>據說這是為讓偶人把人身上的污垢臟物順水帶走<br>以消災滅禍";
                    break;
                case 20:
                    Title = "春分の日";
                    Info = "掃墓、祭拜祖先的日子";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 4:
            switch (Cur_day) {
                case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
                Title = "お花見";
                Info = "賞櫻源於奈良時代開始的花祭、花會、花宴和花舞等<br>從平安時代起賞櫻作為京都宮廷貴族的一種娛樂而流行<br>武士時代的足利義滿和豐臣秀吉等將軍都酷愛賞櫻<br>遂使賞櫻亦成為武士的愛好<br>在江戶時代商人階級興起之後<br>賞櫻逐漸擴展到庶民之中<br>成為人們春季遊樂的活動之一";
                break;
                case 29:
                    Title = "昭和の日";
                    Info = "昭和天皇裕仁的生日<br>其在位時已是國家法定節日<br>裕仁死後改為現稱<br>仍被保留為國家法定節日<br>此節在1989年（平成元年）前為天皇誕生日<br>1989年（平成元年）—2006年（平成18年）為綠の日<br>2007年（平成19年）至今為昭和の日";
                    break;
                case 30:
                    Title = "ゴールデンウイーク";
                    Info = "日本“黃金周”從四月末到五月<br>依次相鄰的幾個節日分別是<br>昭和之日(4月29)<br>憲法紀念日(5月3日)<br>綠化節(5月4日)<br>和5月5日的兒童節——確切地說是男孩節<br>而這一天也是日本的端午節<br>很多公司都會在那期間暫停營業<br>讓員工可以休足一周<br>很多日本人也會藉此機會到海外旅行";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 5:
            switch (Cur_day) {
                case 1: case 2:
                Title = "ゴールデンウイーク";
                Info = "日本“黃金周”從四月末到五月<br>依次相鄰的幾個節日分別是<br>昭和之日(4月29)<br>憲法紀念日(5月3日)<br>綠化節(5月4日)<br>和5月5日的兒童節——確切地說是男孩節<br>而這一天也是日本的端午節<br>很多公司都會在那期間暫停營業<br>讓員工可以休足一周<br>很多日本人也會藉此機會到海外旅行";
                break;
                case 3:
                    Title = "憲法記念日";
                    Info = "1947年5月3日日本現行憲法開始實施<br>遂把這一天定為紀念日";
                    break;
                case 4:
                    Title = "绿の日";
                    Info = "此節在1988年—2006年為國民休息日（國民の休日）<br>只是為了增加國民休息日而添加<br>後來為號召國民綠化改名為綠化節";
                    break;
                case 5:
                    Title = "子供の日";
                    Info = "端午節也在這一天<br>慶祝小孩成長祈求幸福之日<br>其具體表現形式是有男孩的家庭在戶外用高竿懸掛鯉魚旗<br>並擺放武士人偶";
                    break;
                case 14:
                    Title = "母の日";
                    Info = "母親節是為了慰勞平日勞苦的母親<br>對母親表示感謝的日子<br>在日本和美國是5月的第2個星期日<br>而它的起源在世界各地都有所不同<br>日期也不盡相同<br>日本最開始有母親節的習慣<br>是來自明治末期<br>大概在1915開始在教堂里慶祝母親節<br>從那之後慢慢的延續開來";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 7:
            switch (Cur_day) {
                case 7:
                    Title = "乞巧";
                    Info = "七夕節始於聖武天皇天平六年<br>這一天人們把寫有詩歌、心愿的色紙系在竹竿上<br>這天許下的願將會得以實現<br>今天在日本許多地方都慶祝七夕<br>最著名的地方是京都府的北野天滿宮<br>香川縣的金刀吡羅宮<br>神奈川縣的平冢市<br>富山縣的高崗市<br>另外仙台七夕的慶祝在日本其它地方為七夕之後一個月<br>也就是8月7日<br>這更接近按照陰曆本來應該是七夕的日子";
                    break;
                case 17:
                    Title = "海の日";
                    Info = "日本四面環海<br>為了感謝得自海洋的恩典<br>並祈禱能成為國運昌隆的海洋國家而制訂<br>此節在2003年（平成15年）前的日期為7月20日";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 8:
            switch (Cur_day) {
                case 11:
                    Title = "山の日";
                    Info = "日本政黨議員在參議院正式會議上投票贊成通過改正節日案<br>確定於2016年起將8月11日定為“山之日”<br>有海節怎麼會沒有山節呢？";
                    break;
                case 12: case 13: case 14: case 15: case 16: case 17:
                Title = "盂兰盆节";
                Info = "印度佛教儀式中佛教徒為了追薦祖先舉行“盂蘭盆會”<br>佛經中《盂蘭盆經》以修孝順勵佛弟子的旨意<br>合乎中國追先悼遠的俗信<br>於是益加普及<br>中國從梁代開始照此仿行相沿成中元節<br>不過後來除設齋供僧外<br>還增加了拜懺、放焰口等活動";
                break;
                case 25:
                    Title = "泡麵紀念日";
                    Info = "1958年的這天<br>是日清食品公司宣稱全世界第一個雞肉拉麵（泡麵）發售的日子<br>這期間日清食品公司會開放工廠參觀<br>以及讓參訪者實際自己做泡麵等活動";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 9:
            switch (Cur_day) {
                case 1:
                    Title = "防災の日";
                    Info = "紀念關東大地震<br>加強防災意識";
                    break;
                case 18:
                    Title = "敬老の日";
                    Info = "以尊敬老人、感謝老人為宗旨<br>在1966年補制的節日<br>此節在2003年（平成15年）前的日期為9月15日";
                    break;
                case 23:
                    Title = "秋分の日";
                    Info = "和春分一樣<br>要掃墓及祭拜祖先靈位";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 10:
            switch (Cur_day) {
                case 9:
                    Title = "体育の日";
                    Info = "紀念1964年在東京舉行的奧林匹克運動會開幕式的日子<br>此節在2000年（平成12年）前的日期為10月10日";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 11:
            switch (Cur_day) {
                case 3:
                    Title = "文化の日";
                    Info = "1954年以前是為紀念明治天皇誕辰而設立的節日<br>1964年11月3日日本公布新憲法<br>因此將這一天改為文化節<br>用以提倡熱愛自由平等<br>促進文化事業的社會原則";
                    break;
                case 15:
                    Title = "七五三";
                    Info = "家有7歲女孩和5歲男孩和3歲的小孩<br>必定讓孩子穿上鮮艷的和服<br>去參拜神社<br>願神靈保佑孩子健康和順利成長<br>孩子們都要吃「赤豆飯」<br>還要吃「千歲糖」<br>這是專為慶賀「七五三」而做的紅色或白色的棒形糖果<br>希望孩子吃了可以活潑健壯、長生不老";
                    break;
                case 23:
                    Title = "勤労感謝の日";
                    Info = "此時正值收穫的季節<br>為了表示對收穫的謝意<br>制定了以感謝勞動為宗旨的節日";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        case 12:
            switch (Cur_day) {
                case 15:
                    Title = "年賀状特別回収開始日";
                    Info = "日本有寫年賀卡的習慣<br>寄給親朋好友以及公司客戶<br>包含感謝整年的照顧<br>與接下來一年也請多多指教的意義";
                    break;
                case 23:
                    Title = "天皇誕生日";
                    Info = "明仁天皇於1933年12月23日出生<br>由於明仁尚在人世<br>依日本禮儀決不可以「年號（平成）+天皇」稱呼之<br>應稱為今上天皇<br>（有很多寫平成天皇是錯誤的說法）";
                    break;
                case 24: case 25:
                Title = "クリスマス";
                Info = "聖誕節（Christmas）又稱耶誕節<br>耶穌誕辰，譯名為“基督彌撒”<br>彌撒是教會的一種禮拜儀式<br>聖誕節是一個宗教節<br>因為把它當作耶穌的誕辰來慶祝<br>故名“耶誕節”";
                break;
                case 31:
                    Title = "大晦日";
                    Info = "除夕晚上日本人稱之為“除夜”<br>除夜時他們祈求神靈托福<br>送走煩惱的舊年<br>迎來美好的新年<br>稱之為“初詣”<br>除夕午夜各處城鄉廟宇分別敲鐘108下<br>以此驅除邪惡<br>日本人則靜坐聆聽“除夜之鐘”<br>鐘聲停歇就意味新年的來到<br>人們便離座上床睡覺<br>希望得一好夢";
                    break;
                default:
                    Title = "不被了解的怪人";
                    Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
                    break;
            }
            break;
        default:
            Title = "不被了解的怪人";
            Info = "置身人群中<br>你只需要被淹沒 享受 沉默<br>退到人群後<br>你只需給予雙手 微笑 等候";
            break;
    }
    $(".Info_Header").html(Title);
    $(".Info_container").html(Info);
}
