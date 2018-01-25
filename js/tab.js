let title = ['新闻', '贴吧', '文库'];
let content = [
    '习近平主席2017年1月17日发表的题为《共担时代责任 共促全球发展》的主旨演讲，赢得国际社会广泛赞誉，各国领导人纷纷“点赞”。近日，论坛有关负责人评价说，习主席的那次演讲提振了人们对未来经济发展的信心。',
    '【活动】Word天，许愿这种事落到吧友头上竟然变成这样……13如果让你来定一个小目标,你想要多少钱,来做什么？ 百万富翁昨天正式上线之后，Baby在这里https://tieba.baidu',
    '报考者务必携带的考试文具包括黑色字迹的钢笔或签字笔、2B铅笔和橡皮。报考者必须用2B铅笔在指定位置上填涂准考证号，并在答题卡上作答。在试题本或其他位置作答一律无效。'];
class Tab {
    constructor (title, content) {
        this.title = title;
        this.content = content;
        this.init();
    }
    init () {
        this.createWrap();
    }
    createWrap () {
        let wrap = document.createElement('div');
        let title = this.createTitle();
        let content = this.createContent();
        wrap.className = 'wrap';
        document.body.appendChild(wrap);
        wrap.appendChild(title);
        wrap.appendChild(content);
        this.addEvent();
    }
    createTitle () {
        let ul = document.createElement('ul');
        this.title.map((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        });
        return ul;
    }
    createContent () {
        let ol = document.createElement('ol');
        this.content.map((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ol.appendChild(li);
        });
        return ol;
    }
    addEvent () {
        let tlis = document.querySelectorAll('ul li');
        let clis = document.querySelectorAll('ol li');
        tlis[0].className = 'bg';
        [...tlis].map((item, index) => {
            item.addEventListener('click', (event) => {
                [...tlis].map((item, index) => {
                    item.className = '';
                });
                [...clis].map((item, index) => {
                    item.style.display = 'none';
                });
                item.className = 'bg';
                clis[index].style.display = 'block';
            });
        });
    }
}
new Tab(title, content);