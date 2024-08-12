var lastFilter = '';

function toggleSearchList() {
    var searchList = document.getElementById("searchList");
    if (searchList.style.display === "none") {
        searchList.style.display = "block";
    }
}

function closeSearchPanel() {
    var searchList = document.getElementById("searchList");
    searchList.style.display = "none";
    searchList.innerHTML = "";
}

function filterResults() {
    var input = document.querySelector(".input__container");
    var searchList = document.getElementById("searchList");
    var filter = input.value.trim().toUpperCase();

    lastFilter = filter;

    var items = searchList.getElementsByTagName("li");

    var isInputEmpty = input.value.trim() === '';

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var textValue = item.textContent || item.innerText;
        var innerHTML = '';

        var matchIndex = textValue.toUpperCase().indexOf(lastFilter);

        if (isInputEmpty || (lastFilter !== '' && matchIndex > -1)) {
            for (var j = 0; j < textValue.length; j++) {
                if (lastFilter !== '' && matchIndex > -1 && j >= matchIndex && j < matchIndex + lastFilter.length) {
                    innerHTML += '<span class="highlight">' + textValue[j] + '</span>';
                } else {
                    innerHTML += textValue[j];
                }
            }

            item.innerHTML = innerHTML;
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }

    if (isInputEmpty) {
        searchList.style.display = "none";
        return;
    }

    toggleSearchList();
}


function redirectToPage(keyword) {
    switch (keyword) {
        case "Автомобільний Зарядний Пристрій Hoco NZ1 36W QC3.0":
            window.location.href = "./page/auto-chargers/n-z-1.html";
        break;

        case "Автомобільний Зарядний Пристрій Hoco Z46 QC3.0 18W Micro":
            window.location.href = "./page/auto-chargers/hoco-z46micro.html";
        break;

        case "Автомобільний Зарядний Пристрій Hoco Z13 LCD":
            window.location.href = "./page/auto-chargers/hoco-z-13.html";
         break;

        case "Автомобильный инвертор XO CZ011 200W":
            window.location.href = "./page/auto-chargers/c-z-011.html";
        break;

        case "Автомобільний Зарядний Пристрій Borofone BZ03 Dynasty PD/QC 58.5W":
            window.location.href = "./page/auto-chargers/b-z-03.html";
        break;

        case "Автомобільний Зарядний Пристрій Borofone BZ19 Wisdom Type C 2.4A":
            window.location.href = "./page/auto-chargers/b-z-19.html";
        break;

        case "Автомобільний Зарядний Пристрій XO CC48 Metal 2USB":
            window.location.href = "./page/auto-chargers/c-c-48.html";
        break;

        case "Автомобільний Зарядний Пристрій Hoco Z46 18W QC3.0":
            window.location.href = "./page/auto-chargers/hoco-z-46.html";
        break;

        //трансмітери

        case "FM-трансмітер Baseus T typed S-16 CCTM-E":
            window.location.href = "./page/auto-fm/s-1-6.html";
        break;

        case "FM-трансмітер Hoco E75 Bravery PD30W+QC3.0 car BT FM transmitter":
            window.location.href = "./page/auto-fm/e-75.html";
        break;

        case "FM-трансмітер Hoco E70 PD30W+QC3.0 car BT FM transmitter":
            window.location.href = "./page/auto-fm/e-70.html";
        break;

        case "FM-трансмітер Hoco E72 Alegria PD30W car BT FM transmitter":
            window.location.href = "./page/auto-fm/e-7-2.html";
        break;

        case "FM-трансмітер Baseus CCALL-RH+FM":
            window.location.href = "./page/auto-fm/c-c-a-l-l.html";
        break;

       case "FM-трансмітер XO BCC09 TF card slot+PD25W Ambient light":
            window.location.href = "./page/auto-fm/b-c-c-09.html";
        break;

        case "FM-трансмітер XO BCC03 car charger 18W QC 3.0":
            window.location.href = "./page/auto-fm/b-c-c-03.html";
        break;

        case "FM-трансмітер Borofone BC48 Broad QC3.0 car BT FM transmitter":
            window.location.href = "./page/auto-fm/b-c-48.html";
        break;

        case "FM-трансмітер Borofone BC43 Flash QC3.0 car BT FM transmitte":
            window.location.href = "./page/auto-fm/b-c-43.html";
        break;

        case "FM-трансмітер Borofone BC41 Eminency QC3.0 Car BT FM transmitter":
            window.location.href = "./page/auto-fm/b-c-41.html";
        break;

        case "FM-трансмітер Borofone BC32 Sunlight":
            window.location.href = "./page/auto-fm/b-c-32.html";
        break;

        //тримачі

        case "Автотримач Borofone BH11":
            window.location.href = "./page/auto-holder/b-h-11.html";
        break;

        case "Автотримач Borofone BH45 Magnetic Wireless 15W":
            window.location.href = "./page/auto-holder/bh-45.html";
        break;

        case "Автотримач Borofone BH71 Magnetic car holder":
            window.location.href = "./page/auto-holder/bh-71.html";
        break;

        case "Автотримач XO WX027 Wireless 15W":
            window.location.href = "./page/auto-holder/wx-027.html";
        break;

        case "Автотримач Borofone BH201 Magnetic Wireless 15W":
            window.location.href = "./page/auto-holder/bh-201.html";
        break;

        case "Автотримач Borofone BH204 Blue Charm Wireless 15W":
            window.location.href = "./page/auto-holder/bh-204.html";
        break;

        case "Автотримач Borofone BH203 Blue Charm Wireless 15W":
            window.location.href = "./page/auto-holder/bh203.html";
        break;

        case "Автотримач Baseus Metal AgeⅡ SUJS0300":
            window.location.href = "./page/auto-holder/su-j-u-0300.html";
        break;

        case "Автотримач XO CX017 Magnetic Wireless 15W":
            window.location.href = "./page/auto-holder/c-x-017.html";
        break;

        case "Автотримач XO CX018 Magnetic Wireless 15W":
            window.location.href = "./page/auto-holder/c-x-018.html";
        break;

        case "Автотримач Hoco CA56 Plus":
            window.location.href = "./page/auto-holder/ca-56.html";
        break;

        case "Автотримач Hoco CA60 Infrared Sensor Wireless 10W":
            window.location.href = "./page/auto-holder/ca-60.html";
        break;

        case "Автотримач Hoco CA105 Wireless 15W":
            window.location.href = "./page/auto-holder/ca-105.html";
        break;

        case "Автотримач Hoco CA118":
            window.location.href = "./page/auto-holder/ca-118.html";
        break;

        case "Автотримач Hoco HW1 Pro Wireless 15W":
            window.location.href = "./page/auto-holder/hw-1.html";
        break;

        case "Автотримач Hoco HW2 Wireless 15W":
            window.location.href = "./page/auto-holder/hw-2.html";
        break;

        case "Автотримач Hoco HW3 Wireless 15W":
            window.location.href = "./page/auto-holder/hw-3.html";
        break;

        case "Автомобільний Зарядний Пристрій - Автотримач LDNIO MW21-1 Wireless 15W":
            window.location.href = "./page/auto-holder/m-w-21-1.html";
        break;

        case "Автомобільний Зарядний Пристрій - Автотримач LDNIO MW21 Wireless 15W":
            window.location.href = "./page/auto-holder/mw-21.html";
        break;

        case "Автотримач Baseus Easy Control Clamp SUYK0200":
            window.location.href = "./page/auto-holder/s-u-y-k-0200.html";
        break;

        case "Автотабличка Hoco CPH19":
            window.location.href = "./page/plate/c-p-h-19.html";
        break;

        case "Автотабличка Hoco DPH01":
            window.location.href = "./page/plate/d-p-h-01.html";
        break;

        //навушники

        case "Блютуз Стерео Гарнитура Celebrat A27":
            window.location.href = "./page/headphone/bt/a-27.html";
        break;

        case "Бездротова Стерео Гарнітура XO BE35":
            window.location.href = "./page/headphone/bt/be-35.html";
        break;

        case "Бездротова Стерео Гарнітура XO BE36":
            window.location.href = "./page/headphone/bt/be-36.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO11 Maily":
            window.location.href = "./page/headphone/bt/bo-11.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO12":
            window.location.href = "./page/headphone/bt/bo-12.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO18":
            window.location.href = "./page/headphone/bt/bo-18.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO20":
            window.location.href = "./page/headphone/bt/bo-20.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO23":
            window.location.href = "./page/headphone/bt/b0-23.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO24 Black":
            window.location.href = "./page/headphone/bt/b0-24-black.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BO24 White":
            window.location.href = "./page/headphone/bt/b0-24-white.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco ESD13":
            window.location.href = "./page/headphone/bt/esd-13.html";
        break;
        
        case "Бездротова Стерео Гарнітура Hoco ESD14":
            window.location.href = "./page/headphone/bt/esd-14.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco W23":
            window.location.href = "./page/headphone/bt/w-23.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco W28":
            window.location.href = "./page/headphone/bt/w-28.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco W30":
            window.location.href = "./page/headphone/bt/w-30.html";
        break;

        case "ездротова Стерео Гарнітура Hoco W40":
            window.location.href = "./page/headphone/bt/w-40.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco W41":
            window.location.href = "./page/headphone/bt/w-41.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco W43":
            window.location.href = "./page/headphone/bt/w-43.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco W45":
            window.location.href = "./page/headphone/bt/w-45.html";
        break;

        //tws

        case "Бездротова Стерео Гарнітура Remax TWS-43":
            window.location.href = "./page/headphone/bt-tws/tws-43.html";
        break;

        case "ездротова Стерео Гарнітура Remax TWS-41":
            window.location.href = "./page/headphone/bt-tws/tws-41.html";
        break;

        case "Бездротова Стерео Гарнітура XO G1":
            window.location.href = "./page/headphone/bt-tws/g-1.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco EW31":
            window.location.href = "./page/headphone/bt-tws/ew-31.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco EW18":
            window.location.href = "./page/headphone/bt-tws/ew-18.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco EW13 Black":
            window.location.href = "./page/headphone/bt-tws/ew-13-black.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco EW13 White":
            window.location.href = "./page/headphone/bt-tws/ew-13-white.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco EW09 TWS":
            window.location.href = "./page/headphone/bt-tws/ew-09.html";
        break;

        case "Бездротова Стерео Гарнітура Hoco EW06":
            window.location.href = "./page/headphone/bt-tws/ew-06.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BW26":
            window.location.href = "./page/headphone/bt-tws/bw-26.html";
        break;

        case "Бездротова Стерео Гарнітура Borofone BW16":
            window.location.href = "./page/headphone/bt-tws/bw-16.html";
        break;

        //pc

        case "Ігрові Навушники Hoco W107 Cute Cat Ear":
            window.location.href = "./page/headphone/pc/w-107.html";
        break;

        case "Ігрові Навушники Hoco W106 Tiger":
            window.location.href = "./page/headphone/pc/w-106.html";
        break;

        case "Ігрові Навушники Hoco W104 Drift":
            window.location.href = "./page/headphone/pc/w-104.html";
        break;

        case "Ігрові Навушники Fantech MH91 Alto":
            window.location.href = "./page/headphone/pc/mh-91.html";
        break;

        case "Ігрові Навушники Fantech MH90 Sonata":
            window.location.href = "./page/headphone/pc/mh-90.html";
        break;

        case "Ігрові Навушники Fantech MH88 Trinity":
            window.location.href = "./page/headphone/pc/mh-88.html";
        break;

        case "Ігрові Навушники Jeqang JH-790":
            window.location.href = "./page/headphone/pc/jh-790.html";
        break;

        case "Ігрові Навушники Jeqang JH-760 7.1":
            window.location.href = "./page/headphone/pc/jh-760.html";
        break;

        case "Ігрові Навушники Jeqang JH-750 7.1":
            window.location.href = "./page/headphone/pc/jh-750.html";
        break;

        case "Ігрові Навушники Fantech HQ55 Portal":
            window.location.href = "./page/headphone/pc/hq-55.html";
        break;

        case "Ігрові Навушники Fantech HQ54 Mars II":
            window.location.href = "./page/headphone/pc/hq-54.html";
        break;

        case "Ігрові Навушники Fantech HQ53 Flash":
            window.location.href = "./page/headphone/pc/hq-53.html";
        break;

        case "Ігрові Навушники Fantech HG26 Alto":
            window.location.href = "./page/headphone/pc/hg-26.html";
        break;

        case "Ігрові Навушники Fantech HG25":
            window.location.href = "./page/headphone/pc/hg-25.html";
        break;

        //сумка

        case "Сумка-Органайзер для Портативних Пристроїв Hoco GM106":
            window.location.href = "./page/gadgets/bag/gm-106.html";
        break;

        case "Рюкзак для Ноутбука XO CB02 15,6":
            window.location.href = "./page/gadgets/bag/cb-02-15-6.html";
        break;

        case "Сумка для Ноутбука XO CB01 14 сіра":
            window.location.href = "./page/gadgets/bag/cb-01-14-gray.html";
        break;

        case "Сумка для Ноутбука XO CB01 14 чорна":
            window.location.href = "./page/gadgets/bag/cb-01-14-black.html";
        break;

        case "Сумка для Ноутбука XO CB01 13 сіра":
            window.location.href = "./page/gadgets/bag/cb-01-13-gray.html";
        break;

        case "Сумка для Ноутбука XO CB01 13 чорна":
            window.location.href = "./page/gadgets/bag/cb-01-13-black.html";
        break;

        //колонка

        case "Блютуз Колонка Zealot S61":
            window.location.href = "./page/gadgets/bt-speaker/s-61.html";
        break;

        case "Блютуз Колонка Zealot S55":
            window.location.href = "./page/gadgets/bt-speaker/s-55.html";
        break;

        case "Блютуз Колонка Zealot S53":
            window.location.href = "./page/gadgets/bt-speaker/s-53.html";
        break;

        case "Блютуз Колонка Zealot S49":
            window.location.href = "./page/gadgets/bt-speaker/s-49.html";
        break;

        case "Блютуз Колонка Hoco HC17":
            window.location.href = "./page/gadgets/bt-speaker/hc-17.html";
        break;

        case "Блютуз Колонка Hopestar H60":
            window.location.href = "./page/gadgets/bt-speaker/h-60.html";
        break;

        case "Блютуз Колонка Borofone BR26":
            window.location.href = "./page/gadgets/bt-speaker/br-26.html";
        break;

        case "Блютуз Колонка Borofone BR24":
            window.location.href = "./page/gadgets/bt-speaker/br-24.html";
        break;
        
        case "Блютуз Колонка Borofone BR22":
            window.location.href = "./page/gadgets/bt-speaker/br-22.html";
        break;

        case "Блютуз Колонка Borofone BR21":
            window.location.href = "./page/gadgets/bt-speaker/br-21.html";
        break;

        case "Блютуз Колонка Hopestar A41 Party":
            window.location.href = "./page/gadgets/bt-speaker/a-41.html";
        break;

        case "Блютуз Колонка Hopestar Party 110 mini":
            window.location.href = "./page/gadgets/bt-speaker/110.html";
        break;

        //лампа

        case "Лампа 3 в 1 D16 Ліхтар, Настільна, Powerbank 5000 mAh":
            window.location.href = "./page/gadgets/lamp/3-1.html";
        break;

        case "Лампа Настільна XO OZ05 1200 мАч":
            window.location.href = "./page/gadgets/lamp/o-z-05.html";
        break;

        case "Лампа Настільна XO OZ06 800 мАч":
            window.location.href = "./page/gadgets/lamp/o-z-06.html";
        break;

        case "Лампа Настільна з Підставкою Q17-3 1200 мАч":
            window.location.href = "./page/gadgets/lamp/q-17-3.html";
        break;

        case "Лампа Настільна Remax RL-E601 1200 мАч":
            window.location.href = "./page/gadgets/lamp/rl-e-601.html";
        break;

        case "Лампа Настільна Remax RL-E615 USB":
            window.location.href = "./page/gadgets/lamp/rl-e-615.html";
        break;

        case "Лампа Настільна Remax RT-E185 1200 мАч":
            window.location.href = "./page/gadgets/lamp/rt-e-185.html";
        break;

        case "Лампа Настільна Remax RT-E190 1200 мАч":
            window.location.href = "./page/gadgets/lamp/rt-e-190.html";
        break;

        case "Лампа Настільна Remax RT-E510 1200 мАч":
            window.location.href = "./page/gadgets/lamp/rt-e-510.html";
        break;

        case "Лампа Настільна Remax RT-E710 1200 мАч":
            window.location.href = "./page/gadgets/lamp/rt-e-710.html";
        break;

        case "Лампа Настільна WS-6016 USB":
            window.location.href = "./page/gadgets/lamp/ws-60-16.html";
        break;

        case "Лампа Настільна WS-702S 1200 мАч":
            window.location.href = "./page/gadgets/lamp/ws-702-s.html";
        break;

        case "Лампа Настільна WS-2020S 1800 мАч":
            window.location.href = "./page/gadgets/lamp/ws20-20-s.html";
        break;

        //мікрофони

        case "Мікрофон Петлічний Безпровідний Borofone BFK12 Twin Type-C/Lightning":
            window.location.href = "./page/gadgets/microphones/bkf-12.html";
        break;

        case "Мікрофон Петлічний Безпровідний Borofone BFK12 Type-C":
            window.location.href = "./page/gadgets/microphones/bkf-12-tupe-c.html";
        break;

        case "Мікрофон Петличний Бездротовий Hoco DI56 Twin Lightning":
            window.location.href = "./page/gadgets/microphones/dl-56-lg.html";
        break;

        case "Мікрофон Петличний Hoco L14 Lightning":
            window.location.href = "./page/gadgets/microphones/l-14.html";
        break;

        case "Мікрофон Петличний Бездротовий Hoco DI56 Twin Type-C":
            window.location.href = "./page/gadgets/microphones/dl-56.html";
        break;

        case "Мікрофон Петличний Бездротовий Hoco L15 Type-C":
            window.location.href = "./page/gadgets/microphones/l-15.html";
        break;

        case "Мікрофон Петличний Бездротовий XO MKF09B Twin Lightning":
            window.location.href = "./page/gadgets/microphones/mkf-09-b.html";
        break;

        case "Мікрофон Петличний Бездротовий XO MKF08B Lightning":
            window.location.href = "./page/gadgets/microphones/mkf-08-b.html";
        break;

        //брелок

        case "Розумний Брелок XO LP02 Bluetooth Anti-Lost":
            window.location.href = "./page/gadgets/smart-keychain/lp-02.html";
        break;

        case "Розумний Брелок XO LP01 Bluetooth Anti-Lost":
            window.location.href = "./page/gadgets/smart-keychain/lp-01.html";
        break;

        case "Розумний Брелок Hoco E91 Tiger Anti-Lost":
            window.location.href = "./page/gadgets/smart-keychain/e-91.html";
        break;

        case "Розумний Брелок Borofone BC100 Ingenioso Anti-Lost":
            window.location.href = "./page/gadgets/smart-keychain/bc-100.html";
        break;

        //стилус

        case "Стілус XO ST-05 iPad 2-Gen Wireless Charging Pen":
            window.location.href = "./page/gadgets/stylus/st-05.html";
        break;

        case "Стілус XO ST-03 Active Magnetic Capacitive Pen iPad":
            window.location.href = "./page/gadgets/stylus/st-03.html";
        break;

        case "Стілус Hoco GM108 Fast Charging iPad":
            window.location.href = "./page/gadgets/stylus/gm-108.html";
        break;

        case "Стілус Hoco GM107 Magnetic Charging iPad":
            window.location.href = "./page/gadgets/stylus/gm-107.html";
        break;

        case "Стілус Hoco GM103 Universal Capacitive Pen":
            window.location.href = "./page/gadgets/stylus/gm-103.html";
        break;

        case "Стілус Hoco GM103 Universal Capacitive Pen Black":
            window.location.href = "./page/gadgets/stylus/gm-103-black.html";
        break;

        //штативи 

        case "Штатив 2.1м Посилений":
            window.location.href = "./page/gadgets/tripod/2-1-1.html";
        break;

        case "Штатив 2.1м":
            window.location.href = "./page/gadgets/tripod/2-1.html";
        break;

        case "Штатив 3065 0.65м":
            window.location.href = "./page/gadgets/tripod/3065.html";
        break;

        case "Штатив 3110 1.1м":
            window.location.href = "./page/gadgets/tripod/3110.html";
        break;

        case "Штатив 3888 1.1м Remote":
            window.location.href = "./page/gadgets/tripod/3888.html";
        break;

        case "Монопод-Тринога Borofone BY8 Magic Fill":
            window.location.href = "./page/gadgets/tripod/by-8.html";
        break;

        case "Монопод-Тринога Borofone BY11 Happy":
            window.location.href = "./page/gadgets/tripod/by-11.html";
        break;

        case "Селфі-Штатив Hoco K17":
            window.location.href = "./page/gadgets/tripod/k-17.html";
        break;

        case "Селфі-Штатив Remax P16":
            window.location.href = "./page/gadgets/tripod/p-16.html";
        break;

        case "Настільний Стабілізатор-Підставка Q1":
            window.location.href = "./page/gadgets/tripod/q-1.html";
        break;

        case "Настільний Стабілізатор-Підставка Q2":
            window.location.href = "./page/gadgets/tripod/q-2.html";
        break;

        case "Селфі-Штатив XO SS09":
            window.location.href = "./page/gadgets/tripod/ss-09.html";
        break;
        
        case "Штатив 1.6м з Пов Головою та Кліпсами Bag":
            window.location.href = "./page/gadgets/tripod/t-1-6.html";
        break;

        case "Штатив Шарнірний на Струбцині (без зажиму)":
            window.location.href = "./page/gadgets/tripod/t-1.html";
        break;

        case "Штатив-Пантограф Пружний на Струбцині 2 Затискачі":
            window.location.href = "./page/gadgets/tripod/t-2.html";
        break;

        case "Штатив XO 2 м":
            window.location.href = "./page/gadgets/tripod/xo-2.html";
        break;

        //годинники

        case "Смарт Годинник Borofone BD2":
            window.location.href = "./page/gadgets/watch/bd-2.html";
        break;

        case "Смарт Годинник Borofone BD3 Ultra":
            window.location.href = "./page/gadgets/watch/bd-3-black.html";
        break;

        case "Смарт Годинник Borofone BD3 Ultra Orange":
            window.location.href = "./page/gadgets/watch/bd-3-orange.html";
        break;

        case "Смарт Годинник Borofone BD5":
            window.location.href = "./page/gadgets/watch/bd-5.html";
        break;

        case "Смарт Годинник XO W8 Pro":
            window.location.href = "./page/gadgets/watch/w-8-pro.html";
        break;

        case "Смарт Годинник Hoco Y12 Ultra Black":
            window.location.href = "./page/gadgets/watch/y-12-black.html";
        break;

        case "Смарт Годинник Hoco Y12 Ultra Orange":
            window.location.href = "./page/gadgets/watch/y-12-orange.html";
        break;

        case "Смарт Годинник Hoco Y16 Black":
            window.location.href = "./page/gadgets/watch/y-16-black.html";
        break;

        case "Смарт Годинник Hoco Y16 Silver":
            window.location.href = "./page/gadgets/watch/y-16-silver.html";
        break;

        case "Смарт Годинник Hoco Y19 AMOLED Black":
            window.location.href = "./page/gadgets/watch/y-19-black.html";
        break;

        case "Смарт Годинник Hoco Y19 AMOLED Gold":
            window.location.href = "./page/gadgets/watch/y-19-gold.html";
        break;

        case "Смарт Годинник Hoco Y19 AMOLED Silver":
            window.location.href = "./page/gadgets/watch/y-19-silver.html";
        break;

        //клавіатура

        case "Бездротова Клавіатура і Миша Fantech WK894":
            window.location.href = "./page/computer-peripherals/keyboard/wk-894.html";
        break;

        case "Клавіатура Ігрова Fantech ATOM MK876 Blue Switch":
            window.location.href = "./page/computer-peripherals/keyboard/mk-876.html";
        break;

        case "Клавіатура Ігрова Fantech ATOM MK876 Red Switch":
            window.location.href = "./page/computer-peripherals/keyboard/mk-876-red.html";
        break;

        case "Клавіатура Ігрова Fantech MAXFIT 61 MK857 FROST Blue Switch":
            window.location.href = "./page/computer-peripherals/keyboard/mk-857.html";
        break;

        case "Клавіатура і Миша Fantech Major KX302s":
            window.location.href = "./page/computer-peripherals/keyboard/kx-302-s.html";
        break;
        
        case "Клавіатура Ігрова XO KB-01":
            window.location.href = "./page/computer-peripherals/keyboard/kb-01.html";
        break;

        case "Клавіатура Hoco GM23":
            window.location.href = "./page/computer-peripherals/keyboard/gm-23.html";
        break;

        case "Клавіатура і Миша JEQANG JK-1905":
            window.location.href = "./page/computer-peripherals/keyboard/gk-1905.html";
        break;

        case "Клавіатура і Миша Ігрові JEQANG JK-968":
            window.location.href = "./page/computer-peripherals/keyboard/gk-968.html";
        break;

        case "Клавіатура JEQANG JK-905":
            window.location.href = "./page/computer-peripherals/keyboard/gk-905.html";
        break;

        //миша

        case "Бездротова Миша Ігрова Fantech WG12R Raigor III":
            window.location.href = "./page/computer-peripherals/mouse/wg-12-r.html";
        break;

        case "Бездротова Миша Ігрова Fantech WG12 Raigor III":
            window.location.href = "./page/computer-peripherals/mouse/wg-12.html";
        break;

        case "Бездротова Миша Ігрова Fantech WGC2 Venom II Vibe":
            window.location.href = "./page/computer-peripherals/mouse/wg-c-2.html";
        break;

        case "Бездротова Ігрова Миша Fantech WG11 Cruiser Silent Click":
            window.location.href = "./page/computer-peripherals/mouse/wg-11.html";
        break;

        case "Бездротова Миша Ігрова Fantech WG10 Raigor II":
            window.location.href = "./page/computer-peripherals/mouse/wg-10.html";
        break;

        case "Бездротова Миша Fantech W190 Silent Click":
            window.location.href = "./page/computer-peripherals/mouse/w-190.html";
        break;

        case "Wireless Миша Logitech M275":
            window.location.href = "./page/computer-peripherals/mouse/m-275.html";
        break;

        case "Wireless Миша Logitech M220":
            window.location.href = "./page/computer-peripherals/mouse/m-220.html";
        break;

        case "Бездротова Миша Hoco GM24":
            window.location.href = "./page/computer-peripherals/mouse/gm-24.html";
        break;

        case "Бездротова Миша Hoco GM21":
            window.location.href = "./page/computer-peripherals/mouse/gm-21.html";
        break;

        case "Бездротова Миша Hoco GM15":
            window.location.href = "./page/computer-peripherals/mouse/gm-15.html";
        break;

        case "Wireless Миша Logitech G306 Silence":
            window.location.href = "./page/computer-peripherals/mouse/g-306.html";
        break;

        case "Wireless Миша Logitech G304":
            window.location.href = "./page/computer-peripherals/mouse/g-304.html";
        break;

        case "Бездротова Миша Hoco DI43 Main gaming":
            window.location.href = "./page/computer-peripherals/mouse/dl-43.html";
        break;

        case "Бездротова Миша Borofone BG7":
            window.location.href = "./page/computer-peripherals/mouse/bg-7.html";
        break;

        case "Бездротова Миша Borofone BG5":
            window.location.href = "./page/computer-peripherals/mouse/bg-5.html";
        break;

        //кишеня

        case "Зовнішня кишеня 2,5 S19 USB3.1 Type C Aluminum alloy":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-19.html";
        break;

        case "Зовнішня кишеня 2,5 S14 USB3.0 Aluminum alloy":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-14.html";
        break;

        case "Зовнішня кишеня 2,5 S14 USB3.0 Drawing Aluminum alloy Silver":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-14-silver.html";
        break;

        case "Зовнішня кишеня 2,5 S10 USB3.0 Aluminum alloy Black":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-10-black.html";
        break;

        case "Зовнішня кишеня 2,5 S10 USB3.0 Aluminum alloy Blue":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-10-blue.html";
        break;

        case "Зовнішня кишеня 2,5 S10 USB3.0 Aluminum alloy Silver":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-10-silver.html";
        break;

        case "Зовнішня кишеня 2,5 S10 USB2.0 Aluminum alloy":
            window.location.href = "./page/computer-peripherals/outer-ssd/s-10-2-0.html";
        break;

        case "Зовнішня кишеня 2,5 Q5 USB2.0 Plastic (YPH-19)":
            window.location.href = "./page/computer-peripherals/outer-ssd/q-5.html";
        break;

        //колонка для пк

        case "Комп'ютерні колонки Kisonli AС-9002BT":
            window.location.href = "./page/computer-peripherals/pc-speaker/ac-900.html";
        break;

        case "Комп'ютерні колонки D-16L":
            window.location.href = "./page/computer-peripherals/outer-ssd/d-16-l.html";
        break;

        case "Комп'ютерні колонки Fantech GS202 Sonar":
            window.location.href = "./page/computer-peripherals/outer-ssd/gs-202.html";
        break;

        case "Комп'ютерні колонки Fantech GS203 Beat":
            window.location.href = "./page/computer-peripherals/outer-ssd/gs-203.html";
        break;

        case "Комп'ютерні колонки Fantech GS205 Hellscream":
            window.location.href = "./page/computer-peripherals/outer-ssd/gs-205.html";
        break;

        case "Комп'ютерна Колонка-Саундбар Kisonli i-530":
            window.location.href = "./page/computer-peripherals/outer-ssd/i-530.html";
        break;

        case "Комп'ютерні колонки Jeqang JS-880":
            window.location.href = "./page/computer-peripherals/outer-ssd/js-880.html";
        break;

        case "Комп'ютерні колонки Kisonli K200":
            window.location.href = "./page/computer-peripherals/outer-ssd/k-200.html";
        break;

        case "Комп'ютерні колонки Kisonli K500":
            window.location.href = "./page/computer-peripherals/outer-ssd/k-500.html";
        break;

        case "Комп'ютерні колонки Kisonli KS-02":
            window.location.href = "./page/computer-peripherals/outer-ssd/ks-02.html";
        break;

        case "Комп'ютерні колонки Kisonli KS-08":
            window.location.href = "./page/computer-peripherals/outer-ssd/ks-08.html";
        break;

        case "Комп'ютерні колонки Kisonli L-1010":
            window.location.href = "./page/computer-peripherals/outer-ssd/l-1010.html";
        break;

        case "Комп'ютерні колонки Kisonli L-2020":
            window.location.href = "./page/computer-peripherals/outer-ssd/l-2020.html";
        break;

        case "Комп'ютерні колонки Kisonli T-007":
            window.location.href = "./page/computer-peripherals/outer-ssd/t-007.html";
        break;

        //ssd

        case "SD Диск Apacer AS340 120GB 2.5 7mm SATAIII Standard":
            window.location.href = "./page/computer-peripherals/ssd/340-120.html";
        break;

        case "SSD Диск Apacer AS340 240GB 2.5 7mm SATAIII Standard":
            window.location.href = "./page/computer-peripherals/ssd/340-240.html";
        break;

        case "SSD Диск Apacer AS340 480GB 2.5 7mm SATAIII Standard":
            window.location.href = "./page/computer-peripherals/ssd/340-480.html";
        break;

        case "SSD Диск Kingston SSDNow A400 240GB 2.5 SATAIII 3D NAND":
            window.location.href = "./page/computer-peripherals/ssd/400-240.html";
        break;

        case "SSD Диск ADATA Ultimate SU630 240GB 2.5 7mm SATA III 3D QLC":
            window.location.href = "./page/computer-peripherals/ssd/630-240.html";
        break;

        case "SSD Диск ADATA Ultimate SU630 480GB 2.5 SATA III 3D QLC":
            window.location.href = "./page/computer-peripherals/ssd/630-480.html";
        break;

        case "SSD Диск ADATA Ultimate SU650 120GB 2.5 7mm SATAIII":
            window.location.href = "./page/computer-peripherals/ssd/650-120.html";
        break;

        case "SSD Диск Patriot Burst Elite 120GB 2.5 7mm SATAIII TLC 3D":
            window.location.href = "./page/computer-peripherals/ssd/patriot-120.html";
        break;

        case "SSD Диск Patriot Burst Elite 240GB 2.5 7mm SATAIII TLC 3D":
            window.location.href = "./page/computer-peripherals/ssd/patriot-240.html";
        break;

        case "SSD Диск Patriot Burst Elite 480GB 2.5 7mm SATAIII TLC 3D":
            window.location.href = "./page/computer-peripherals/ssd/patriot-480.html";
        break;

        case "SSD Диск Patriot Burst Elite 960GB 2.5 7mm SATAIII TLC 3D":
            window.location.href = "./page/computer-peripherals/ssd/patriot-960.html";
        break;

        //зарядні пристрої

        case "Мережевий Подовжувач XO WL21 Tower Shaped 8AC socket+3USB-A+1USB-C 2m":
            window.location.href = "./page/chargers-cables/network/wl-21.html";
        break;

        case "Мережевий Подовжувач XO WL20 20W Square Socket 4AC +USB-A+1USB-C PD/QC 2m":
            window.location.href = "./page/chargers-cables/network/wl-20.html";
        break;

        case "Мережевий Подовжувач XO WL18 6AC 2m":
            window.location.href = "./page/chargers-cables/network/wl-18.html";
        break;

        case "Мережевий Подовжувач LDNIO SEW3452 3 ports / PD / 3USB/ 1 QC 3.0 / 1 Type-C / WiFi":
            window.location.href = "./page/chargers-cables/network/sew-3452.html";
        break;

        case "Мережевий Подовжувач Hoco AC8A PD30W/QC18W/1C3A":
            window.location.href = "./page/chargers-cables/network/ac-8-a.html";
        break;

        case "Мережевий Подовжувач Hoco AC7A 1C3A":
            window.location.href = "./page/chargers-cables/network/ac-7-a.html";
        break;

        case "Мережевий Подовжувач LDNIO SE3631 6USB 3.4A / 3 Socket":
            window.location.href = "./page/chargers-cables/network/3631.html";
        break;

        case "Мережевий Подовжувач LDNIO SC3604 6USB 3.4A":
            window.location.href = "./page/chargers-cables/network/3604.html";
        break;

        case "Мережевий Подовжувач LDNIO SCW3451 3 ports / PD / 3USB / 1 QC 3.0 1 / Type-C / WiFii":
            window.location.href = "./page/chargers-cables/network/3451.html";
        break;

        case "Мережевий Подовжувач LDNIO SC3412 3 ports / PD / 3USB QC 3.0":
            window.location.href = "./page/chargers-cables/network/3412.html";
        break;



        case "Зарядний Пристрій Hoco N29 Triumph PD+QC3.0 35W Type-C to Lightning":
            window.location.href = "./page/chargers-cables/network/n-29.html";
        break;

        case "Зарядний Пристрій Hoco N23 GAN Starlight PD45W":
            window.location.href = "./page/chargers-cables/network/n-23.html";
        break;

        case "Зарядний Пристрій Hoco N10 PD 20W Type-C to Lightning 3A":
            window.location.href = "./page/chargers-cables/network/n-10.html";
        break;

        case "Зарядний Пристрій XO L102 EU Dual type-C port 35W":
            window.location.href = "./page/chargers-cables/network/l-102.html";
        break;

        case "Зарядний Пристрій XO L91EU PD 25W":
            window.location.href = "./page/chargers-cables/network/l-91.html";
        break;

        case "Зарядний Пристрій XO L91EU PD 25W Type-C to Type-C":
            window.location.href = "./page/chargers-cables/network/l-91-eu.html";
        break;

        case "Зарядний Пристрій XO L81B EU PD 20W Type-C to Lightning 3A":
            window.location.href = "./page/chargers-cables/network/l-81-b.html";
        break;

        case "Зарядний Пристрій XO L77 PD 20W":
            window.location.href = "./page/chargers-cables/network/l-77.html";
        break;

        case "Зарядний Пристрій XO L77 PD 20W Type-C to Lightning":
            window.location.href = "./page/chargers-cables/network/l-77-t-c-l.html";
        break;

        case "Зарядний Пристрій XO L40 PD Type-C to Lightning":
            window.location.href = "./page/chargers-cables/network/.html";
        break;

        case "Зарядний Пристрій XO CE06 PD 30W GaN":
            window.location.href = "./page/chargers-cables/network/ce-06.html";
        break;

        case "Мережевий Зарядний Пристрій Hoco C112A Advantage PD30W":
            window.location.href = "./page/chargers-cables/network/c-112-a.html";
        break;

        case "Зарядний Пристрій Hoco C104A Stage single port PD20W Type-C to Lightning":
            window.location.href = "./page/chargers-cables/network/c-104-a.html";
        break;

        case "Зарядний Пристрій Borofone BN9 Reacher PD/QC 35W Type-C to Lightning":
            window.location.href = "./page/chargers-cables/network/bn-9.html";
        break;

        case "Зарядний Пристрій Borofone BN3 Premium PD 20W QC3.0":
            window.location.href = "./page/chargers-cables/network/bn-3.html";
        break;

        case "Зарядний Пристрій Borofone BN3 Premium PD 20W Type-C to Lightning QC3.0":
            window.location.href = "./page/chargers-cables/network/bn-3-t-c-l.html";
        break;

        case "Зарядний Пристрій Borofone BA57A PD 20W 3А":
            window.location.href = "./page/chargers-cables/network/ba-57-a.html";
        break;

        //бездротові

        case "Бездротовий Зарядний Пристрій з MagSafe Y35 3in1 3.0A 15W":
            window.location.href = "./page/chargers-cables/network/y-35.html";
        break;

        case "Бездротовий Зарядний Пристрій XO WX030 15W 3 in 1":
            window.location.href = "./page/chargers-cables/network/wx-030.html";
        break;

        case "Бездротовий Зарядний Пристрій JJT-S37 5in1+Lamp/Alarm Clock 30W S version":
            window.location.href = "./page/chargers-cables/network/jjt-s-37.html";
        break;

        case "Бездротовий Зарядний Пристрій JJT-970 с MagSafe 4in1 25W":
            window.location.href = "./page/chargers-cables/network/jjt-970.html";
        break;

        case "Бездротовий Зарядний Пристрій XO CX007 15W Magnetic Wireless 15W":
            window.location.href = "./page/chargers-cables/network/cx-007.html";
        break;

        case "Бездротовий Зарядний Пристрій Hoco CW48 for Samsung Watch 1-5th series 2.5W":
            window.location.href = "./page/chargers-cables/network/cw-48.html";
        break;

        case "Бездротовий Зарядний Пристрій Hoco CW46 Apple Watch 1-8, SE/SE2, Ultra":
            window.location.href = "./page/chargers-cables/network/cw-46.html";
        break;

        case "Бездротовий Зарядний Пристрій Hoco CQ3 3-in-1 Magnetic 15W IP Version":
            window.location.href = "./page/chargers-cables/network/cq-3.html";
        break;

        case "Бездротовий Зарядний Пристрій Hoco CQ2 3-in-1 15W (SAM Watch)":
            window.location.href = "./page/chargers-cables/network/cq-2.html";
        break;

        case "Бездротовий Зарядний Пристрій Hoco CQ1 3-in-1 15W (for iWatch)":
            window.location.href = "./page/chargers-cables/network/cq-1.html";
        break;

        case "Бездротовий Зарядний Пристрій Borofone BQ13 (iWatch 1-8, SE/SE2/Ultra)":
            window.location.href = "./page/chargers-cables/network/bq-13.html";
        break;

        case "Бездротовий Зарядний Пристрій Borofone BQ13C (iWatch 1-8, SE/SE2/Ultra)":
            window.location.href = "./page/chargers-cables/network/bq-13-c.html";
        break;

        case "Бездротовий Зарядний Пристрій Borofone BQ20":
            window.location.href = "./page/chargers-cables/network/bq-20.html";
        break;

        //павербанки

        case "Power Bank Baseus Star-Lord 22,5W 20000 mAh":
            window.location.href = "./page/powerbank/baseus/p10022904113.html";
        break;

        case "Power Bank Baseus Airpow 20W 10000 mAh Cable USB to Type-C 30cm":
            window.location.href = "./page/powerbank/baseus/ppbd0502.html";
        break;

        case "Power Bank Baseus PPDML-I Bipow 15W 10000 mAh":
            window.location.href = "./page/powerbank/baseus/ppbd0503.html";
        break;

        case "Power Bank Baseus Magnetic Bracket Wireless Fast Charge 20W 10000 mAh":
            window.location.href = "./page/powerbank/baseus/ppbd050301.html";
        break;

        case "Power Bank Baseus Bipow 20W 10000 mAh Cable USB to Micro 25cm":
            window.location.href = "./page/powerbank/baseus/ppcx0.html";
        break;

        case "Power Bank Baseus Bipow 20W 20000 mAh Cable USB to Micro 25cm":
            window.location.href = "./page/powerbank/baseus/ppdml.html";
        break;

        case "Power Bank Baseus Bipow 15W 30000 mAh Cable USB to Micro 25cm":
            window.location.href = "./page/powerbank/baseus/ppqd.html";
        break;

        case "Power Bank OS-Baseus Star-Lord 30W 20000 mAh Cluster Black":
            window.location.href = "./page/powerbank/baseus/ppqd.html";
        break;

        //borofone

        case "Borofone BJ14A Freeway 20000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-14-a.html";
        break;

        case "Borofone BJ14B Freeway 30000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-14-b.html";
        break;

        case "Borofone BJ14 Freeway 10000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-14.html";
        break;

        case "Borofone BJ16 Cube 10000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-16.html";
        break;

        case "Borofone BJ18A Coolmy digital display 30000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-18-a.html";
        break;

        case "Borofone BJ18 Coolmy digital display 20000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-18.html";
        break;

        case "Borofone BJ19A PD20W+QC3.0 20000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-19-a.html";
        break;

        case "Borofone BJ27B Pindar 30000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-27-b.html";
        break;

        case "Borofone BJ32 Terra 22.5W fully compatible 80000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-32.html";
        break;

        case "Borofone BJ33A Creed 20000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-33-a.html";
        break;

        case "Borofone BJ33C PD30W 40000 mAh":
            window.location.href = "./page/powerbank/borofone/bj-33-c.html";
        break;

        case "Borofone DBT01 PD18W+QC3.0 40000 mAh":
            window.location.href = "./page/powerbank/borofone/dbt-01.html";
        break;

        case "Borofone DBT09 з підсвіткою 60000 мАч":
            window.location.href = "./page/powerbank/borofone/dbt-09.html";
        break;

        //hoco
        
        case "Павербанк Power Bank Hoco DB41 River magnetic Wireless charging 10000mAh":
            window.location.href = "./page/powerbank/hoco/db41.html";
        break;

        case "Павербанк Power Bank Hoco J72 Easy travel 10000 mAh":
            window.location.href = "./page/powerbank/hoco/j72.html";
        break;

        case "Павербанк Power Bank Hoco J86 Powermaster 22.5W fully compatible 40000 mAh":
            window.location.href = "./page/powerbank/hoco/j86.html";
        break;

        case "Павербанк Power Bank Hoco J86B Electric 22.5W fully compatible 60000 mAh":
            window.location.href = "./page/powerbank/hoco/j86b.html";
        break;

        case "Павербанк Power Bank Hoco J87 PD20W+QC3.0 10000 mAh":
            window.location.href = "./page/powerbank/hoco/j87.html";
        break;

        case "Павербанк Power Bank Hoco J100 High-ranking 10000 mAh":
            window.location.href = "./page/powerbank/hoco/j100.html";
        break;

        case "Павербанк Power Bank Hoco J101 Astute 22.5W fully compatible 10000 mAh":
            window.location.href = "./page/powerbank/hoco/j101.html";
        break;

        case "Павербанк Power Bank Hoco J101A Astute 22.5W fully compatible 20000 mAh":
            window.location.href = "./page/powerbank/hoco/j101a.html";
        break;

        case "Павербанк Power Bank Hoco J106 Pocket iP 5000mAh":
            window.location.href = "./page/powerbank/hoco/j106.html";
        break;

        case "Павербанк Power Bank Hoco J109 PD20W Easy Wireless Fast Charging 5000mAh":
            window.location.href = "./page/powerbank/hoco/j109.html";
        break;

        case "Павербанк Power Bank Hoco J116 Pocket with digital display iP 5000mAh":
            window.location.href = "./page/powerbank/hoco/j116.html";
        break;

        //xo

        case "Павербанк Power Bank XO PB97 65W 20000 mAh":
            window.location.href = "./page/powerbank/xo/pb97.html";
        break;

        case "Павербанк Power Bank XO PR122 Polymer Lamp Display 20000 mAh":
            window.location.href = "./page/powerbank/xo/pr122.html";
        break;

        case "Павербанк Power Bank XO PR124 Digital Display 40000 mAh":
            window.location.href = "./page/powerbank/xo/pr124.html";
        break;

        case "Павербанк Power Bank XO PR130 PD 20W QC 22.5W 40000 mAh":
            window.location.href = "./page/powerbank/xo/pr130.html";
        break;

        case "Павербанк Power Bank XO PR144 PD20W 22.5W 20000 mAh":
            window.location.href = "./page/powerbank/xo/pr144.html";
        break;

        case "Павербанк Power Bank XO PR163 with emergency lighting 20000 mAh":
            window.location.href = "./page/powerbank/xo/pr163.html";
        break;

        case "Павербанк Power Bank XO PR168 with carrying handle, emergency lighting QC22.5W/PD20W 50000 mAh":
            window.location.href = "./page/powerbank/xo/pr168.html";
        break;

        case "Павербанк Power Bank XO PR183 20000 mAh":
            window.location.href = "./page/powerbank/xo/pr183.html";
        break;

        case "Павербанк Power Bank XO PR189 PD20W+QC22.5W 30000 mAh":
            window.location.href = "./page/powerbank/xo/pr189.html";
        break;


        }
}

document.addEventListener("click", function (event) {
    var searchInput = document.querySelector(".input__container");
    var searchList = document.getElementById("searchList");

    if (!searchInput.contains(event.target) && !searchList.contains(event.target)) {
        searchList.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var searchList = document.getElementById("searchList");

    var items = [   "Автомобільний Зарядний Пристрій Hoco NZ1 36W QC3.0",
                    "Автомобільний Зарядний Пристрій Hoco Z46 QC3.0 18W Micro",
                    "Автомобільний Зарядний Пристрій Hoco Z13 LCD",
                    "Автомобильный инвертор XO CZ011 200W",
                    "Автомобільний Зарядний Пристрій Borofone BZ03 Dynasty PD/QC 58.5W",
                    "Автомобільний Зарядний Пристрій Borofone BZ19 Wisdom Type C 2.4A",
                    "Автомобільний Зарядний Пристрій XO CC48 Metal 2USB",
                    "Автомобільний Зарядний Пристрій Hoco Z46 18W QC3.0",

                    "FM-трансмітер Baseus T typed S-16 CCTM-E",
                    "FM-трансмітер Hoco E75 Bravery PD30W+QC3.0 car BT FM transmitter",
                    "FM-трансмітер Hoco E70 PD30W+QC3.0 car BT FM transmitter",
                    "FM-трансмітер Hoco E72 Alegria PD30W car BT FM transmitter",
                    "FM-трансмітер Baseus CCALL-RH+FM",
                    "FM-трансмітер XO BCC09 TF card slot+PD25W Ambient light",
                    "FM-трансмітер XO BCC03 car charger 18W QC 3.0",
                    "FM-трансмітер Borofone BC48 Broad QC3.0 car BT FM transmitter",
                    "FM-трансмітер Borofone BC43 Flash QC3.0 car BT FM transmitte",
                    "FM-трансмітер Borofone BC41 Eminency QC3.0 Car BT FM transmitter",
                    "FM-трансмітер Borofone BC32 Sunlight",

                    "Автотримач Borofone BH11",
                    "Автотримач Borofone BH45 Magnetic Wireless 15W",
                    "Автотримач Borofone BH71 Magnetic car holder",
                    "Автотримач XO WX027 Wireless 15W",
                    "Автотримач Borofone BH201 Magnetic Wireless 15W",
                    "Автотримач Borofone BH204 Blue Charm Wireless 15W",
                    "Автотримач Borofone BH203 Blue Charm Wireless 15W",
                    "Автотримач Baseus Metal AgeⅡ SUJS0300",
                    "Автотримач XO CX017 Magnetic Wireless 15W",
                    "Автотримач XO CX018 Magnetic Wireless 15W",
                    "Автотримач Hoco CA56 Plus",
                    "Автотримач Hoco CA60 Infrared Sensor Wireless 10W",
                    "Автотримач Hoco CA105 Wireless 15W",
                    "Автотримач Hoco CA118",
                    "Автотримач Hoco HW1 Pro Wireless 15W",
                    "Автотримач Hoco HW2 Wireless 15W",
                    "Автотримач Hoco HW3 Wireless 15W",
                    "Автомобільний Зарядний Пристрій - Автотримач LDNIO MW21-1 Wireless 15W",
                    "Автомобільний Зарядний Пристрій - Автотримач LDNIO MW21 Wireless 15W",
                    "Автотримач Baseus Easy Control Clamp SUYK0200",
                
                    "Автотабличка Hoco CPH19",
                    "Автотабличка Hoco DPH01",
                
                    "Блютуз Стерео Гарнитура Celebrat A27",
                    "Бездротова Стерео Гарнітура XO BE35",
                    "Бездротова Стерео Гарнітура XO BE36",
                    "Бездротова Стерео Гарнітура Borofone BO11 Maily",
                    "Бездротова Стерео Гарнітура Borofone BO12",
                    "Бездротова Стерео Гарнітура Borofone BO18",
                    "Бездротова Стерео Гарнітура Borofone BO20",
                    "Бездротова Стерео Гарнітура Borofone BO23",
                    "Бездротова Стерео Гарнітура Borofone BO24 Black",
                    "Бездротова Стерео Гарнітура Borofone BO24 White",
                    "Бездротова Стерео Гарнітура Hoco ESD13",
                    "Бездротова Стерео Гарнітура Hoco ESD14",
                    "Бездротова Стерео Гарнітура Hoco W23",
                    "Бездротова Стерео Гарнітура Hoco W28",
                    "Бездротова Стерео Гарнітура Hoco W30",
                    "Бездротова Стерео Гарнітура Hoco W40",
                    "Бездротова Стерео Гарнітура Hoco W41",
                    "Бездротова Стерео Гарнітура Hoco W43",
                    "Бездротова Стерео Гарнітура Hoco W45",
                
                    "Бездротова Стерео Гарнітура Remax TWS-43",
                    "Бездротова Стерео Гарнітура Remax TWS-41",
                    "Бездротова Стерео Гарнітура XO G1",
                    "Бездротова Стерео Гарнітура Hoco EW31",
                    "Бездротова Стерео Гарнітура Hoco EW18",
                    "Бездротова Стерео Гарнітура Hoco EW13 Black",
                    "Бездротова Стерео Гарнітура Hoco EW13 White",
                    "Бездротова Стерео Гарнітура Hoco EW09 TWS",
                    "Бездротова Стерео Гарнітура Hoco EW06",
                    "Бездротова Стерео Гарнітура Borofone BW26",
                    "Бездротова Стерео Гарнітура Borofone BW16",
                
                    "Ігрові Навушники Hoco W107 Cute Cat Ear",
                    "Ігрові Навушники Hoco W106 Tiger",
                    "Ігрові Навушники Hoco W104 Drift",
                    "Ігрові Навушники Fantech MH91 Alto",
                    "Ігрові Навушники Fantech MH90 Sonata",
                    "Ігрові Навушники Fantech MH88 Trinity",
                    "Ігрові Навушники Jeqang JH-790",
                    "Ігрові Навушники Jeqang JH-760 7.1",
                    "Ігрові Навушники Jeqang JH-750 7.1",
                    "Ігрові Навушники Fantech HQ55 Portal",
                    "Ігрові Навушники Fantech HQ54 Mars II",
                    "Ігрові Навушники Fantech HQ53 Flash",
                    "Ігрові Навушники Fantech HG26 Alto",
                    "Ігрові Навушники Fantech HG25",
                
                    "Сумка-Органайзер для Портативних Пристроїв Hoco GM106",
                    "Рюкзак для Ноутбука XO CB02 15,6",
                    "Сумка для Ноутбука XO CB01 14 сіра",
                    "Сумка для Ноутбука XO CB01 14 чорна",
                    "Сумка для Ноутбука XO CB01 13 сіра",
                    "Сумка для Ноутбука XO CB01 13 чорна",
                
                    "Блютуз Колонка Zealot S61",
                    "Блютуз Колонка Zealot S55",
                    "Блютуз Колонка Zealot S53",
                    "Блютуз Колонка Zealot S49",
                    "Блютуз Колонка Hoco HC17",
                    "Блютуз Колонка Hopestar H60",
                    "Блютуз Колонка Borofone BR26",
                    "Блютуз Колонка Borofone BR24",
                    "Блютуз Колонка Borofone BR22",
                    "Блютуз Колонка Borofone BR21",
                    "Блютуз Колонка Hopestar A41 Party",
                    "Блютуз Колонка Hopestar Party 110 mini",
                    
                    "Лампа 3 в 1 D16 Ліхтар, Настільна, Powerbank 5000 mAh",
                    "Лампа Настільна XO OZ05 1200 мАч",
                    "Лампа Настільна XO OZ06 800 мАч",
                    "Лампа Настільна з Підставкою Q17-3 1200 мАч",
                    "Лампа Настільна Remax RL-E601 1200 мАч",
                    "Лампа Настільна Remax RL-E615 USB",
                    "Лампа Настільна Remax RT-E185 1200 мАч",
                    "Лампа Настільна Remax RT-E190 1200 мАч",
                    "Лампа Настільна Remax RT-E510 1200 мАч",
                    "Лампа Настільна Remax RT-E710 1200 мАч",
                    "Лампа Настільна WS-6016 USB",
                    "Лампа Настільна WS-702S 1200 мАч",
                    "Лампа Настільна WS-2020S 1800 мАч",
                
                    "Мікрофон Петлічний Безпровідний Borofone BFK12 Twin Type-C/Lightning",
                    "Мікрофон Петлічний Безпровідний Borofone BFK12 Type-C",
                    "Мікрофон Петличний Бездротовий Hoco DI56 Twin Lightning",
                    "Мікрофон Петличний Hoco L14 Lightning",
                    "Мікрофон Петличний Бездротовий Hoco DI56 Twin Type-C",
                    "Мікрофон Петличний Бездротовий Hoco L15 Type-C",
                    "Мікрофон Петличний Бездротовий XO MKF09B Twin Lightning",
                    "Мікрофон Петличний Бездротовий XO MKF08B Lightning",
                
                    "Розумний Брелок XO LP02 Bluetooth Anti-Lost",
                    "Розумний Брелок XO LP01 Bluetooth Anti-Lost",
                    "Розумний Брелок Hoco E91 Tiger Anti-Lost",
                    "Розумний Брелок Borofone BC100 Ingenioso Anti-Lost",
                
                    "Стілус XO ST-05 iPad 2-Gen Wireless Charging Pen",
                    "Стілус XO ST-03 Active Magnetic Capacitive Pen iPad",
                    "Стілус Hoco GM108 Fast Charging iPad",
                    "Стілус Hoco GM107 Magnetic Charging iPad",
                    "Стілус Hoco GM103 Universal Capacitive Pen",
                    "Стілус Hoco GM103 Universal Capacitive Pen Black",
                
                    "Штатив 2.1м Посилений",
                    "Штатив 2.1м",
                    "Штатив 3065 0.65м",
                    "Штатив 3110 1.1м",
                    "Штатив 3888 1.1м Remote",
                    "Монопод-Тринога Borofone BY8 Magic Fill",
                    "Монопод-Тринога Borofone BY11 Happy",
                    "Селфі-Штатив Hoco K17",
                    "Селфі-Штатив Remax P16",
                    "Настільний Стабілізатор-Підставка Q1",
                    "Настільний Стабілізатор-Підставка Q2",
                    "Селфі-Штатив XO SS09",
                    "Штатив 1.6м з Пов Головою та Кліпсами Bag",
                    "Штатив Шарнірний на Струбцині (без зажиму)",
                    "Штатив-Пантограф Пружний на Струбцині 2 Затискачі",
                    "Штатив XO 2 м",
                
                    "Смарт Годинник Borofone BD2",
                    "Смарт Годинник Borofone BD3 Ultra Black",
                    "Смарт Годинник Borofone BD3 Ultra Orange",
                    "Смарт Годинник Borofone BD5",
                    "Смарт Годинник XO W8 Pro",
                    "Смарт Годинник Hoco Y12 Ultra Black",
                    "Смарт Годинник Hoco Y12 Ultra Orange",
                    "Смарт Годинник Hoco Y16 Black",
                    "Смарт Годинник Hoco Y16 Silver",
                    "Смарт Годинник Hoco Y19 AMOLED Black",
                    "Смарт Годинник Hoco Y19 AMOLED Gold",
                    "Смарт Годинник Hoco Y19 AMOLED Silver",
                
                    "Бездротова Клавіатура і Миша Fantech WK894",
                    "Клавіатура Ігрова Fantech ATOM MK876 Blue Switch",
                    "Клавіатура Ігрова Fantech ATOM MK876 Red Switch",
                    "Клавіатура Ігрова Fantech MAXFIT 61 MK857 FROST Blue Switch",
                    "Клавіатура і Миша Fantech Major KX302s",
                    "Клавіатура Ігрова XO KB-01",
                    "Клавіатура Hoco GM23",
                    "Клавіатура і Миша JEQANG JK-1905",
                    "Клавіатура і Миша Ігрові JEQANG JK-968",
                    "Клавіатура JEQANG JK-905",
                
                    "Бездротова Миша Ігрова Fantech WG12R Raigor III",
                    "Бездротова Миша Ігрова Fantech WG12 Raigor III",
                    "Бездротова Миша Ігрова Fantech WGC2 Venom II Vibe",
                    "Бездротова Ігрова Миша Fantech WG11 Cruiser Silent Click",
                    "Бездротова Миша Ігрова Fantech WG10 Raigor II",
                    "Бездротова Миша Fantech W190 Silent Click",
                    "Wireless Миша Logitech M280",
                    "Wireless Миша Logitech M275",
                    "Wireless Миша Logitech M220",
                    "Бездротова Миша Hoco GM24",
                    "Бездротова Миша Hoco GM21",
                    "Бездротова Миша Hoco GM15",
                    "Wireless Миша Logitech G306 Silence",
                    "Wireless Миша Logitech G304",
                    "Бездротова Миша Hoco DI43 Main gaming",
                    "Бездротова Миша Borofone BG7",
                    "Бездротова Миша Borofone BG5",
                
                    "Зовнішня кишеня 2,5 S19 USB3.1 Type C Aluminum alloy",
                    "Зовнішня кишеня 2,5 S14 USB3.0 Aluminum alloy",
                    "Зовнішня кишеня 2,5 S14 USB3.0 Drawing Aluminum alloy Silver",
                    "Зовнішня кишеня 2,5 S10 USB3.0 Aluminum alloy Black",
                    "Зовнішня кишеня 2,5 S10 USB3.0 Aluminum alloy Blue",
                    "Зовнішня кишеня 2,5 S10 USB3.0 Aluminum alloy Silver",
                    "Зовнішня кишеня 2,5 S10 USB2.0 Aluminum alloy",
                    "Зовнішня кишеня 2,5 Q5 USB2.0 Plastic (YPH-19)",
                
                    "Комп'ютерні колонки Kisonli AС-9002BT",
                    "Комп'ютерні колонки D-16L",
                    "Комп'ютерні колонки Fantech GS202 Sonar",
                    "Комп'ютерні колонки Fantech GS203 Beat",
                    "Комп'ютерні колонки Fantech GS205 Hellscream",
                    "Комп'ютерна Колонка-Саундбар Kisonli i-530",
                    "Комп'ютерні колонки Jeqang JS-880",
                    "Комп'ютерні колонки Kisonli K200",
                    "Комп'ютерні колонки Kisonli K500",
                    "Комп'ютерні колонки Kisonli KS-02",
                    "Комп'ютерні колонки Kisonli KS-08",
                    "Комп'ютерні колонки Kisonli L-1010",
                    "Комп'ютерні колонки Kisonli L-2020",
                    "Комп'ютерні колонки Kisonli T-007",
                
                    "SSD Диск Apacer AS340 120GB 2.5 7mm SATAIII Standard",
                    "SSD Диск Apacer AS340 240GB 2.5 7mm SATAIII Standard",
                    "SSD Диск Apacer AS340 480GB 2.5 7mm SATAIII Standard",
                    "SSD Диск Kingston SSDNow A400 240GB 2.5 SATAIII 3D NAND",
                    "SSD Диск ADATA Ultimate SU630 240GB 2.5 7mm SATA III 3D QLC",
                    "SSD Диск ADATA Ultimate SU630 480GB 2.5 SATA III 3D QLC",
                    "SSD Диск ADATA Ultimate SU650 120GB 2.5 7mm SATAIII",
                    "SSD Диск Patriot Burst Elite 120GB 2.5 7mm SATAIII TLC 3D",
                    "SSD Диск Patriot Burst Elite 240GB 2.5 7mm SATAIII TLC 3D",
                    "SSD Диск Patriot Burst Elite 480GB 2.5 7mm SATAIII TLC 3D",
                    "SSD Диск Patriot Burst Elite 960GB 2.5 7mm SATAIII TLC 3D",

                    //зарядні пристрої
                
                    "Мережевий Подовжувач XO WL21 Tower Shaped 8AC socket+3USB-A+1USB-C 2m",
                    "Мережевий Подовжувач XO WL20 20W Square Socket 4AC +USB-A+1USB-C PD/QC 2m",
                    "Мережевий Подовжувач XO WL18 6AC 2m",
                    "Мережевий Подовжувач LDNIO SEW3452 3 ports / PD / 3USB/ 1 QC 3.0 / 1 Type-C / WiFi",
                    "Мережевий Подовжувач Hoco AC8A PD30W/QC18W/1C3A",
                    "Мережевий Подовжувач Hoco AC7A 1C3A",
                    "Мережевий Подовжувач LDNIO SE3631 6USB 3.4A / 3 Socket",
                    "Мережевий Подовжувач LDNIO SC3604 6USB 3.4A",
                    "Мережевий Подовжувач LDNIO SCW3451 3 ports / PD / 3USB / 1 QC 3.0 1 / Type-C / WiFii",
                    "Мережевий Подовжувач LDNIO SC3412 3 ports / PD / 3USB QC 3.0",
                
                    "Зарядний Пристрій Hoco N29 Triumph PD+QC3.0 35W Type-C to Lightning",
                    "Зарядний Пристрій Hoco N23 GAN Starlight PD45W",
                    "Зарядний Пристрій Hoco N10 PD 20W Type-C to Lightning 3A",
                    "Зарядний Пристрій XO L102 EU Dual type-C port 35W",
                    "Зарядний Пристрій XO L91EU PD 25W",
                    "Зарядний Пристрій XO L91EU PD 25W Type-C to Type-C",
                    "Зарядний Пристрій XO L81B EU PD 20W Type-C to Lightning 3A",
                    "Зарядний Пристрій XO L77 PD 20W",
                    "Зарядний Пристрій XO L77 PD 20W Type-C to Lightning",
                    "Зарядний Пристрій XO L40 PD Type-C to Lightning",
                    "Зарядний Пристрій XO CE06 PD 30W GaN",
                    "Мережевий Зарядний Пристрій Hoco C112A Advantage PD30W",
                    "Зарядний Пристрій Hoco C104A Stage single port PD20W Type-C to Lightning",
                    "Зарядний Пристрій Borofone BN9 Reacher PD/QC 35W Type-C to Lightning",
                    "Зарядний Пристрій Borofone BN3 Premium PD 20W QC3.0",
                    "Зарядний Пристрій Borofone BN3 Premium PD 20W Type-C to Lightning QC3.0",
                    "Зарядний Пристрій Borofone BA57A PD 20W 3А",
                
                    "Бездротовий Зарядний Пристрій з MagSafe Y35 3in1 3.0A 15W",
                    "Бездротовий Зарядний Пристрій XO WX030 15W 3 in 1",
                    "Бездротовий Зарядний Пристрій JJT-S37 5in1+Lamp/Alarm Clock 30W S version",
                    "Бездротовий Зарядний Пристрій JJT-970 с MagSafe 4in1 25W",
                    "Бездротовий Зарядний Пристрій XO CX007 15W Magnetic Wireless 15W",
                    "Бездротовий Зарядний Пристрій Hoco CW48 for Samsung Watch 1-5th series 2.5W",
                    "Бездротовий Зарядний Пристрій Hoco CW46 Apple Watch 1-8, SE/SE2, Ultra",
                    "Бездротовий Зарядний Пристрій Hoco CQ3 3-in-1 Magnetic 15W IP Version",
                    "Бездротовий Зарядний Пристрій Hoco CQ2 3-in-1 15W (SAM Watch)",
                    "Бездротовий Зарядний Пристрій Hoco CQ1 3-in-1 15W (for iWatch)",
                    "Бездротовий Зарядний Пристрій Borofone BQ20",
                    "Бездротовий Зарядний Пристрій Borofone BQ13 (iWatch 1-8, SE/SE2/Ultra)",
                    "Бездротовий Зарядний Пристрій Borofone BQ13C (iWatch 1-8, SE/SE2/Ultra)",
                
                    //павербанки baseus
                    "Power Bank Baseus Star-Lord 22,5W 20000 mAh",
                    "Power Bank Baseus Airpow 20W 10000 mAh Cable USB to Type-C 30cm",
                    "Power Bank Baseus PPDML-I Bipow 15W 10000 mAh",
                    "Power Bank Baseus Magnetic Bracket Wireless Fast Charge 20W 10000 mAh",
                    "Power Bank Baseus Bipow 20W 10000 mAh Cable USB to Micro 25cm",
                    "Power Bank Baseus Bipow 20W 20000 mAh Cable USB to Micro 25cm",
                    "Power Bank Baseus Bipow 15W 30000 mAh Cable USB to Micro 25cm",
                    "Power Bank OS-Baseus Star-Lord 30W 20000 mAh Cluster Black",

                    //borofone
                
                    "Borofone BJ14A Freeway 20000 mAh",
                    "Borofone BJ14B Freeway 30000 mAh",
                    "Borofone BJ14 Freeway 10000 mAh",
                    "Borofone BJ16 Cube 10000 mAh",
                    "Borofone BJ18A Coolmy digital display 30000 mAh",
                    "Borofone BJ18 Coolmy digital display 20000 mAh",
                    "Borofone BJ19A PD20W+QC3.0 20000 mAh",
                    "Borofone BJ27B Pindar 30000 mAh",
                    "Borofone BJ32 Terra 22.5W fully compatible 80000 mAh",
                    "Borofone BJ33A Creed 20000 mAh",
                    "Borofone BJ33C PD30W 40000 mAh",
                    "Borofone DBT01 PD18W+QC3.0 40000 mAh",
                    "Borofone DBT09 з підсвіткою 60000 мАч",

                    //hoco
                
                    "Павербанк Power Bank Hoco DB41 River magnetic Wireless charging 10000mAh",
                    "Павербанк Power Bank Hoco J72 Easy travel 10000 mAh",
                    "Павербанк Power Bank Hoco J86 Powermaster 22.5W fully compatible 40000 mAh",
                    "Павербанк Power Bank Hoco J86B Electric 22.5W fully compatible 60000 mAh",
                    "Павербанк Power Bank Hoco J87 PD20W+QC3.0 10000 mAh",
                    "Павербанк Power Bank Hoco J100 High-ranking 10000 mAh",
                    "Павербанк Power Bank Hoco J101 Astute 22.5W fully compatible 10000 mAh",
                    "Павербанк Power Bank Hoco J101A Astute 22.5W fully compatible 20000 mAh",
                    "Павербанк Power Bank Hoco J106 Pocket iP 5000mAh",
                    "Павербанк Power Bank Hoco J109 PD20W Easy Wireless Fast Charging 5000mAh",
                    "Павербанк Power Bank Hoco J116 Pocket with digital display iP 5000mAh",

                    //xo
                
                    "Павербанк Power Bank XO PB97 65W 20000 mAh",
                    "Павербанк Power Bank XO PR122 Polymer Lamp Display 20000 mAh",
                    "Павербанк Power Bank XO PR124 Digital Display 40000 mAh",
                    "Павербанк Power Bank XO PR130 PD 20W QC 22.5W 40000 mAh",
                    "Павербанк Power Bank XO PR144 PD20W 22.5W 20000 mAh",
                    "Павербанк Power Bank XO PR163 with emergency lighting 20000 mAh",
                    "Павербанк Power Bank XO PR168 with carrying handle, emergency lighting QC22.5W/PD20W 50000 mAh",
                    "Павербанк Power Bank XO PR183 20000 mAh",
                    "Павербанк Power Bank XO PR189 PD20W+QC22.5W 30000 mAh",];

    items.forEach(function (itemText) {
        var li = document.createElement("li");
        li.textContent = itemText;
        li.onclick = function () {
            redirectToPage(itemText);
        };
        searchList.appendChild(li);
    });
});