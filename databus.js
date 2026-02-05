// DATA MASTER
        const busData = [
            { id: "TSW-037", operator: "Trans Swadaya", category: "Mitsubishi", fuel: "Diesel", karoseri: "New Armada", type:"Medium Bus",color: "Putih Jingga", image: "images/mitsubishi/mitsubishi-tsw-2.jpg", desc: "Mitsubishi Colt FE 84G" },
            { id: "TSW-050", operator: "Trans Swadaya", category: "Mitsubishi", fuel: "Diesel", karoseri: "New Armada", type:"Medium Bus",color: "Putih Jingga", image: "images/mitsubishi/mitsubishi-tsw-1.jpg", desc: "Mitsubishi Colt FE 84G" },
            // VKTR BYD SINAR JAYA
            { id: "SJM-240004", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd/byd-sjm-4.jpg", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240007", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Transjakarta_SJM-240007.jpg", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240015", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd/byd-sjm-3.jpg", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240010", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd/byd-sjm-1.png", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240012", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Transjakarta_SJM-240012.jpg/1920px-Transjakarta_SJM-240012.jpg", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240020", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd/byd-sjm-2.jpg", desc: "VKTR BYD Tidar HF-12" },
          // VKTR BYD DAMRI
            { id: "DMR-250276", operator: "Perum DAMRI", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd/byd-dmr-1.jpeg", desc: "VKTR BYD Tidar HF-12" },
            { id: "DMR-250287", operator: "Perum DAMRI", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type: "High Floor", color: "Putih Biru", image: "images/byd/byd-dmr-2.jpeg", desc: "VKTR BYD Tidar HF-12" }
            , //Skywell
            
            { id: "DMR-230099", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: ["images/skywell/skywell-dmr-11.jpeg", "images/skywell/skywell-dmr-13.jpeg"], desc: "Skywell NJL6129BEV" },
            { id: "DMR-230100", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: ["images/skywell/skywell-dmr-9.png","images/skywell/skywell-dmr-15.jpg"], desc: "Skywell NJL6129BEV" },
            { id: "DMR-230101", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: ["images/skywell/skywell-dmr-8.png","images/skywell/skywell-dmr-14.jpg"], desc: "Skywell NJL6129BEV" },
            { id: "DMR-230102", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-6.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230103", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-7.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230104", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-12.jpg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230110", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-10.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230113", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri:"Completely Built Up ", type:"Low Entry", color:"Putih Jingga ", image:"images/skywell/skywell-dmr-4.png ", desc:"Skywell NJL6129BEV" },
            { id: "DMR-230114", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-1.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230121", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-2.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230122", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-3.jpg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230124", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-5.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230117", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell/skywell-dmr-16.jpg", desc: "Skywell NJL6129BEV (Yang pernah ditabrak)" },
            { id: "DMR-250245", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/1/13/DMR-250245_Transjakarta_Perum_DAMRI_Skywell_Bus.jpg", desc: "Skywell NJL6126BEV Batch 2" },
            { id: "DMR-240164", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/skywell/skywell-hf-dmr-1.jpg", desc: "Skywell NJL6126BEV" },
            { id: "DMR-240194", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/skywell/skywell-hf-dmr-2.jpg", desc: "Skywell NJL6126BEV" },
            //ZHONGTONG
            { id: "DMR-717", operator: "Perum DAMRI", category: "Zhongtong", fuel: "CNG", karoseri: "Completely Built Up", type: "Articulated", color: "Putih Biru", image: "images/zhongtong/zhbg-dmr-1.jpg", desc: "Zhongtong LCK6180GC" },
            //SCANIA
            { id: "TJ-199", operator: "Transjakarta", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania/scania-tj-1.jpg", desc: "SCANIA K320iA" },
            { id: "TJ-200", operator: "Transjakarta", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania/scania-tj-2.png", desc: "SCANIA K320iA" },
            { id: "TJ-232", operator: "Transjakarta", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania/scania-tj-3.jpg", desc: "SCANIA K320iA" },
            // Zhongtong Electric
            { id: "DMR-250199", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/DMR-250199_Transjakarta_Perum_DAMRI_Zhongtong_Bus.jpg/1720px-DMR-250199_Transjakarta_Perum_DAMRI_Zhongtong_Bus.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240127", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhongtong/zhev-dmr-3.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240142", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhongtong/zhev-dmr-1.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240144", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhongtong/zhev-dmr-2.jpeg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240151", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhongtong/zhev-dmr-4.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "MYS-19203", operator: "Mayasari Bakti", category: "Mercedes-Benz", fuel: "Diesel", karoseri: "Laksana", type: "High Floor", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Transjakarta_Mercedes_OH1626_AT_Laksana_Cityline_2_%2851378828715%29.jpg", desc: "Mercedes-Benz OH 1626 AT" },
            { id: "MYS-19213", operator: "Mayasari Bakti", category: "Mercedes-Benz", fuel: "Diesel", karoseri: "Laksana", type: "High Floor", color: "Putih Biru", image: "images/mercedes/mercy-mys-2.jpg", desc: "Mercedes-Benz OH 1626 AT" },
            { id: "MYS-21233", operator: "Mayasari Bakti", category: "Mercedes-Benz", fuel: "Diesel", karoseri: "Laksana", type: "High Floor", color: "Putih Biru", image: "images/mercedes/mercy-mys-1.jpg", desc: "Mercedes-Benz OH 1626 AT" },
            { id: "MYS-18120", operator: "Mayasari Bakti", category: "SCANIA", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/scania/scania-mys-1.jpg", desc: "Scania K310IB 6x2" },
            { id: "MB-1610", operator: "Mayasari Bakti", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania/scania-mb-1.jpg", desc:"SCANIA K320iA"},
            { id: "MYS-22334", operator: "Mayasari Bakti", category: "BYD", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/byd/byd-mys-1.jpeg", desc: "BYD K9" },
            { id: "MYS-23366", operator: "Mayasari Bakti", category: "BYD", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/byd/byd-mys-2.png", desc: "BYD K9" },
            //VOLVO SAF
            { id: "SAF-007", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-3.png", desc: "Volvo B11R 6x2" },
            { id: "SAF-008", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-2.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-003", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-3.jpeg", desc: "Volvo B11R 6x2" },
            { id: "SAF-008", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-8.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-009", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-13.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-012", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-6.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-014", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-9.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-026", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-5.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-028", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-7.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-039", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: ["images/volvo/volvo-saf-12.jpg","images/volvo/volvo-saf-10.jpg"], desc: "Volvo B11R 6x2" },
            { id: "SAF-043", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Transjakarta_Steady_Safe_Cityline_2_Laksana.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-085", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-4.jpeg", desc: "Volvo B11R 6x2" },
            { id: "SAF-099", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-1.jpeg", desc: "Volvo B11R 6x2" },
            { id: "SAF-101", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo/volvo-saf-11.jpg", desc: "Volvo B11R 6x2" },
            //BIANGLALA
            { id: "BMP-240379", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/goldrag/sag-bmp-1.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230307", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/SAG_Golden_Dragon_XML6126JEVJ0C3%2C_Serving_Transjakarta_4C.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230315", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/goldrag/sag-lt-bmp-1.jpeg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230302", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/goldrag/sag-lt-bmp-2.webp", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230321", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/goldrag/sag-lt-bmp-3.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230303", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/goldrag/sag-lt-bmp-4.jpeg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230304", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/goldrag/sag-lt-bmp-5.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "JDM-230010", operator: "Jewa Dian Mitra", category: "Hino", fuel: "Diesel", karoseri: "Laksana", type: "Medium Bus", color: "Putih Jingga", image: "images/hino/hino-jdm-1.jpg", desc: "Hino GB 150" },
            { id: "MBT-240624", operator: "Metro Baru Transport", category: "Hino", fuel: "Diesel", karoseri: "Laksana", type: "Medium Bus", color: "Putih Jingga", image: "images/hino/hino-mbt-1.jpg", desc: "Hino GB 150" },
            { id: "SGI-240003", operator: "Sentra Glosia Indah", category: "Isuzu", fuel: "Diesel", karoseri: "Lie Ling", type: "Medium Bus", color: "Putih Jingga", image: "images/isuzu/isuzu-sgi-1.jpg", desc: "Isuzu NQR 71" },
            { id: "SGI-240011", operator: "Sentra Glosia Indah", category: "Isuzu", fuel: "Diesel", karoseri: "Lie Ling", type: "Medium Bus", color: "Putih Jingga", image: "images/isuzu/isuzu-sgi-2.jpg", desc: "Isuzu NQR 71" },
            { id: "PKT-101", operator: "Pahala Kencana Transportation", category: "Mercedes-Benz", fuel: "Diesel", karoseri: "Laksana", type: "High Floor", color: "Putih Biru", image: "images/mercedes/mercy-pkt-1.jpg", desc: "Mercedes-Benz OH 1626 NG " },
        ];

        // LOAD SAVED STATE OR DEFAULT
        let state = JSON.parse(localStorage.getItem('tj_state')) || {
            cat: 'All', op: 'All', fuel: 'All', type: 'All', 
            search: '', sort: 'asc', theme: 'light'
        };

        function saveState() {
            localStorage.setItem('tj_state', JSON.stringify(state));
        }



        function init() {
            applyTheme();
            document.getElementById('mainSearch').value = state.search;
            document.getElementById('sortMode').value = state.sort;
            renderAll();
            
            document.getElementById('mainSearch').addEventListener('input', (e) => {
                state.search = e.target.value.toLowerCase();
                saveState();
                renderAll();
            });

            document.getElementById('sortMode').addEventListener('change', (e) => {
                state.sort = e.target.value;
                saveState();
                renderAll();
            });
        }

        function applyTheme() {
            document.documentElement.setAttribute('data-theme', state.theme);
            const btn = document.getElementById('theme-btn');
            btn.innerHTML = state.theme === 'light' 
                ? `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>`
                : `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`;
        }

        function toggleTheme() {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            saveState();
            applyTheme();
        }

function initSliders() {
    document.querySelectorAll('.bus-img-container.slider').forEach(slider => {
        let startX = 0;
        let current = 0;
        const slides = slider.querySelectorAll('img');

        if (slides.length <= 1) return;

        slider.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        slider.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            slides[current].classList.remove('active');

            current = diff > 0
                ? (current + 1) % slides.length
                : (current - 1 + slides.length) % slides.length;

            slides[current].classList.add('active');
        });
    });
}

function renderAll() {

    // 1️⃣ FILTER UTAMA (TANPA SEARCH)
    const baseFiltered = busData.filter(b => {
        const mType = state.type === 'All' || b.type === state.type;
        const mCat  = state.cat === 'All'  || b.category === state.cat;
        const mOp   = state.op === 'All'   || b.operator === state.op;
        const mFuel = state.fuel === 'All' || b.fuel === state.fuel;
        return mType && mCat && mOp && mFuel;
    });

    // 2️⃣ FILTER FINAL (DENGAN SEARCH)
    const filtered = baseFiltered.filter(b =>
        b.id.toLowerCase().includes(state.search) ||
        b.karoseri.toLowerCase().includes(state.search) ||
        b.desc.toLowerCase().includes(state.search)
    );



    // SORT
    filtered.sort((a, b) =>
        state.sort === 'asc'
            ? a.id.localeCompare(b.id)
            : b.id.localeCompare(a.id)
    );

    const countEl = document.getElementById('bus-count');

let parts = [];

if (state.fuel !== 'All') parts.push(state.fuel);
if (state.cat !== 'All') parts.push(state.cat);

let label = 'bus';

if (parts.length) {
    label = `bus ${parts.join(' ')}`;
}

if (state.op !== 'All') {
    label += ` milik ${state.op}`;
}

    countEl.innerHTML = `
        Menampilkan <b>${filtered.length}</b>
        dari <b>${baseFiltered.length}</b> ${label}
    `;

// RENDER CARD
const grid = document.getElementById('gallery-grid');

grid.innerHTML = filtered.map(b => {
    const imgs = Array.isArray(b.image) ? b.image : [b.image];

    return `
  <div class="col-12 col-md-6 col-lg-4">
        <div class="bus-card">

            <div class="bus-img-container slider" onclick="openLightbox(this)">
                ${imgs.length > 1 ? `<div class="slide-counter">Gambar 1 / ${imgs.length}</div>` : ''}
                
                ${imgs.map((img, i) => `
                    <img src="${img}"
                         class="slide ${i === 0 ? 'active' : ''}"
                         loading="lazy">
                `).join('')}
            </div>

            <div class="bus-id">${b.id}</div>
            <div class="bus-desc">${b.desc}</div>

            <div class="spec-box">
                <div class="spec-pill"><label>Tipe</label><span>${b.type}</span></div>
                <div class="spec-pill"><label>Operator</label><span>${b.operator}</span></div>
                <div class="spec-pill"><label>Karoseri</label><span>${b.karoseri}</span></div>
                <div class="spec-pill"><label>Bahan Bakar</label><span>${b.fuel}</span></div>
                <div class="spec-pill"><label>Warna</label><span>${b.color}</span></div>
            </div>

            <button class="btn-dl" onclick="downloadActiveImage(this, '${b.id}')">
                Unduh Gambar
            </button>

        </div>
    </div>
`;
}).join('');

initSliders();

    document.getElementById('empty-msg')
        .classList.toggle('d-none', filtered.length > 0);

    renderChips('type', 'type-chips', 'type');
    renderChips('category', 'cat-chips', 'cat');
    renderChips('operator', 'op-chips', 'op');
    renderChips('fuel', 'fuel-chips', 'fuel');
}

        function renderChips(dataProp, containerId, stateKey) {
            const available = ['All', ...new Set(busData.filter(b => {
                // Logic Relasional: Saring opsi berdasarkan filter AKTIF lainnya
                let match = true;
                if(stateKey !== 'type' && state.type !== 'All') match = match && b.type === state.type;
                if(stateKey !== 'cat' && state.cat !== 'All') match = match && b.category === state.cat;
                if(stateKey !== 'op' && state.op !== 'All') match = match && b.operator === state.op;
                if(stateKey !== 'fuel' && state.fuel !== 'All') match = match && b.fuel === state.fuel;
                return match;
            }).map(b => b[dataProp]))];

            document.getElementById(containerId).innerHTML = available.map(opt => `
                <button class="m3-chip ${state[stateKey] === opt ? 'active' : ''}" 
                        onclick="setFilter('${stateKey}', '${opt}')">${opt}</button>
            `).join('');
        }

        function setFilter(key, val) {
            state[key] = val;
            saveState();
            renderAll();
        }

        function resetFilters() {
            state = { cat: 'All', op: 'All', fuel: 'All', type: 'All', search: '', sort: 'asc', theme: state.theme };
            document.getElementById('mainSearch').value = '';
            saveState();
            renderAll();
        }

        // LIGHTBOX
let currentZoom = 1;
let lbPan = { x: 0, y: 0 };
let lbDragging = false;
let lbStartX = 0;
let lbStartY = 0;
let lbSlides = [];
let lbIndex = 0;
let lbBase = { width: 0, height: 0 };

function updateBaseSize(zoomImg) {
    const rect = zoomImg.getBoundingClientRect();
    // width/height at scale = 1
    lbBase.width = rect.width / Math.max(1, currentZoom);
    lbBase.height = rect.height / Math.max(1, currentZoom);
}

function onLbResize() {
    const zoomImg = document.getElementById('zoom-img');
    if (!zoomImg) return;
    // Temporarily disable transition to measure/adjust cleanly
    zoomImg.style.transition = 'none';
    updateBaseSize(zoomImg);

    const container = document.querySelector('.lb-content');
    const contRect = container.getBoundingClientRect();
    const scaledW = lbBase.width * currentZoom;
    const scaledH = lbBase.height * currentZoom;
    const maxX = Math.max(0, (scaledW - contRect.width) / 2);
    const maxY = Math.max(0, (scaledH - contRect.height) / 2);

    if (scaledW <= contRect.width) lbPan.x = 0;
    else lbPan.x = Math.max(-maxX, Math.min(maxX, lbPan.x));

    if (scaledH <= contRect.height) lbPan.y = 0;
    else lbPan.y = Math.max(-maxY, Math.min(maxY, lbPan.y));

    zoomImg.style.transform = `translate(${lbPan.x}px, ${lbPan.y}px) scale(${currentZoom})`;
    // restore transition
    setTimeout(() => { if (zoomImg) zoomImg.style.transition = 'transform 0.2s ease'; }, 30);
}

function lbKeyHandler(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbChange(-1);
    if (e.key === 'ArrowRight') lbChange(1);
    if (e.key === '+' || e.key === '=') zoomAction(0.3);
    if (e.key === '-') zoomAction(-0.3);
}


function openLightbox(container) {
    const sliderImgs = container.querySelectorAll('img');
    lbSlides = Array.from(sliderImgs).map(img => img.src);
    lbIndex = Array.from(sliderImgs).findIndex(img => img.classList.contains('active'));
    if (lbIndex === -1) lbIndex = 0;

    const zoomImg = document.getElementById('zoom-img');
    currentZoom = 1;
    lbPan = { x: 0, y: 0 };
    zoomImg.style.transformOrigin = 'center center';
    zoomImg.style.transition = 'transform 0.2s ease';
    zoomImg.style.cursor = 'grab';

    zoomImg.onload = () => {
        updateBaseSize(zoomImg);
        zoomImg.style.transform = `translate(0px, 0px) scale(${currentZoom})`;
        const counter = document.querySelector('.lb-counter');
        if (counter) {
            counter.style.display = lbSlides.length > 1 ? 'inline-block' : 'none';
            counter.innerText = `Gambar ${lbIndex + 1} / ${lbSlides.length}`;
        }
        const prevBtn = document.getElementById('lb-prev');
        const nextBtn = document.getElementById('lb-next');
        if (prevBtn && nextBtn) {
            if (lbSlides.length > 1) { prevBtn.classList.remove('d-none'); nextBtn.classList.remove('d-none'); } else { prevBtn.classList.add('d-none'); nextBtn.classList.add('d-none'); }
        }
    };

    zoomImg.src = lbSlides[lbIndex] || '';
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Attach resize handler so we re-center / re-clamp when the window changes size
    window.addEventListener('resize', onLbResize);

    // Pointer events: support single-finger pan and two-finger pinch (smooth via rAF)
    let pointers = new Map(); // id -> {x,y}
    let gestureMode = null; // 'pan'|'pinch'|null
    let pinchStartDist = 0;
    let pinchStartZoom = 1;
    let pinchAnchor = { imgX: 0, imgY: 0, screenX: 0, screenY: 0 };
    let lbPendingFrame = false;
    let lbAccDx = 0;
    let lbAccDy = 0;

    function getDist(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }

    function getMid(a, b) {
        return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    }

    function applyPendingPan() {
        lbPendingFrame = false;
        const container = document.querySelector('.lb-content');
        const contRect = container.getBoundingClientRect();
        const scaledW = lbBase.width * currentZoom;
        const scaledH = lbBase.height * currentZoom;
        const maxX = Math.max(0, (scaledW - contRect.width) / 2);
        const maxY = Math.max(0, (scaledH - contRect.height) / 2);

        let desiredX = lbPan.x + lbAccDx;
        let desiredY = lbPan.y + lbAccDy;
        if (scaledW <= contRect.width) desiredX = 0;
        if (scaledH <= contRect.height) desiredY = 0;

        lbPan.x = Math.max(-maxX, Math.min(maxX, desiredX));
        lbPan.y = Math.max(-maxY, Math.min(maxY, desiredY));
        lbAccDx = 0; lbAccDy = 0;

        zoomImg.style.transform = `translate(${lbPan.x}px, ${lbPan.y}px) scale(${currentZoom})`;
    }

    zoomImg.onpointerdown = (e) => {
        // capture pointer coords
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        try { zoomImg.setPointerCapture(e.pointerId); } catch (_) {}
        zoomImg.style.touchAction = 'none'; // handle gestures ourselves

        if (pointers.size === 1) {
            // single finger: pan only when zoomed
            if (currentZoom <= 1) {
                gestureMode = null;
                return;
            }
            gestureMode = 'pan';
            const p = pointers.values().next().value;
            lbStartX = p.x; lbStartY = p.y;
            zoomImg.style.cursor = 'grabbing';
            zoomImg.style.transition = 'none';
        } else if (pointers.size === 2) {
            // start pinch
            gestureMode = 'pinch';
            const it = pointers.values(); const a = it.next().value; const b = it.next().value;
            pinchStartDist = getDist(a, b);
            pinchStartZoom = currentZoom;

            const mid = getMid(a, b);
            const container = document.querySelector('.lb-content');
            const contRect = container.getBoundingClientRect();
            const contCenterX = contRect.left + contRect.width / 2;
            const contCenterY = contRect.top + contRect.height / 2;

            // compute image-space coordinate (relative to image center) under mid
            pinchAnchor.screenX = mid.x; pinchAnchor.screenY = mid.y;
            pinchAnchor.imgX = (mid.x - contCenterX - lbPan.x) / currentZoom;
            pinchAnchor.imgY = (mid.y - contCenterY - lbPan.y) / currentZoom;
        }

        e.preventDefault();
    };

    zoomImg.onpointermove = (e) => {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (gestureMode === 'pan' && pointers.size === 1) {
            // accumulate pan deltas and throttle
            const p = pointers.values().next().value;
            const dx = e.clientX - lbStartX;
            const dy = e.clientY - lbStartY;
            lbStartX = e.clientX; lbStartY = e.clientY;
            lbAccDx += dx; lbAccDy += dy;
            if (!lbPendingFrame) { lbPendingFrame = true; requestAnimationFrame(applyPendingPan); }
            e.preventDefault();
        } else if (gestureMode === 'pinch' && pointers.size === 2) {
            const it = pointers.values(); const a = it.next().value; const b = it.next().value;
            const dist = getDist(a, b);
            if (pinchStartDist === 0) return;
            let newZoom = pinchStartZoom * (dist / pinchStartDist);
            newZoom = Math.max(1, Math.min(4, newZoom));

            // compute new lbPan so that pinchAnchor.img stays under the same screen point
            const container = document.querySelector('.lb-content');
            const contRect = container.getBoundingClientRect();
            const contCenterX = contRect.left + contRect.width / 2;
            const contCenterY = contRect.top + contRect.height / 2;

            const mid = getMid(a, b);
            const imgX = pinchAnchor.imgX; const imgY = pinchAnchor.imgY;
            const newPanX = (mid.x - contCenterX) - imgX * newZoom;
            const newPanY = (mid.y - contCenterY) - imgY * newZoom;

            lbPan.x = newPanX; lbPan.y = newPanY; currentZoom = newZoom;
            // clamp
            const scaledW = lbBase.width * currentZoom;
            const scaledH = lbBase.height * currentZoom;
            const maxX = Math.max(0, (scaledW - contRect.width) / 2);
            const maxY = Math.max(0, (scaledH - contRect.height) / 2);
            if (scaledW <= contRect.width) lbPan.x = 0; else lbPan.x = Math.max(-maxX, Math.min(maxX, lbPan.x));
            if (scaledH <= contRect.height) lbPan.y = 0; else lbPan.y = Math.max(-maxY, Math.min(maxY, lbPan.y));

            zoomImg.style.transform = `translate(${lbPan.x}px, ${lbPan.y}px) scale(${currentZoom})`;
            e.preventDefault();
        }
    };

    zoomImg.onpointerup = (e) => {
        // remove pointer
        pointers.delete(e.pointerId);
        try { zoomImg.releasePointerCapture(e.pointerId); } catch (_) {}

        if (pointers.size === 0) {
            // end gesture
            gestureMode = null; lbDragging = false;
            zoomImg.style.cursor = 'grab';
            zoomImg.style.transition = 'transform 0.2s ease';
            zoomImg.style.touchAction = '';
            // apply pending
            if (lbPendingFrame) { /* let rAF finish */ }
            else if (lbAccDx || lbAccDy) { applyPendingPan(); }
        } else if (pointers.size === 1) {
            // if one pointer remains after pinch, switch to pan mode
            gestureMode = 'pan';
            const remaining = pointers.values().next().value;
            lbStartX = remaining.x; lbStartY = remaining.y;
            zoomImg.style.cursor = 'grabbing';
            zoomImg.style.transition = 'none';
        }

        e.preventDefault();
    };

    zoomImg.onpointercancel = (e) => { pointers.delete(e.pointerId); gestureMode = null; zoomImg.style.cursor = 'grab'; zoomImg.style.transition = 'transform 0.2s ease'; zoomImg.style.touchAction = ''; };
    zoomImg.ondragstart = () => false;

    // dblclick to reset zoom
    zoomImg.ondblclick = () => { currentZoom = 1; lbPan = { x: 0, y: 0 }; zoomImg.style.transform = `translate(0px, 0px) scale(${currentZoom})`; };

    // keyboard
    document.addEventListener('keydown', lbKeyHandler);

    // click backdrop to close
    const lb = document.getElementById('lightbox');
    lb.onclick = (e) => { if (e.target === lb) closeLightbox(); };
} 

function closeLightbox() {
    const zoomImg = document.getElementById('zoom-img');
    zoomImg.onpointerdown = zoomImg.onpointermove = zoomImg.onpointerup = zoomImg.onpointercancel = zoomImg.ondblclick = null;
    document.removeEventListener('keydown', lbKeyHandler);
    // remove resize handler
    window.removeEventListener('resize', onLbResize);
    const lb = document.getElementById('lightbox');
    lb.onclick = null;
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function zoomAction(d) {
    const zoomImg = document.getElementById('zoom-img');
    currentZoom = Math.max(1, Math.min(4, currentZoom + d));
    if (currentZoom === 1) lbPan = { x: 0, y: 0 };

    // Apply transform first so getBoundingClientRect reflects scaled size
    zoomImg.style.transform = `translate(${lbPan.x}px, ${lbPan.y}px) scale(${currentZoom})`;

    // clamp pan with new zoom
    const container = document.querySelector('.lb-content');
    const imgRect = zoomImg.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    const maxX = Math.max(0, (imgRect.width - contRect.width) / 2);
    const maxY = Math.max(0, (imgRect.height - contRect.height) / 2);
    lbPan.x = Math.max(-maxX, Math.min(maxX, lbPan.x));
    lbPan.y = Math.max(-maxY, Math.min(maxY, lbPan.y));

    zoomImg.style.transform = `translate(${lbPan.x}px, ${lbPan.y}px) scale(${currentZoom})`;
}

// Navigasi gambar di lightbox
function lbChange(dir) {
    if (!lbSlides || !lbSlides.length) return;
    lbIndex = (lbIndex + dir + lbSlides.length) % lbSlides.length;
    const zoomImg = document.getElementById('zoom-img');
    currentZoom = 1; lbPan = { x: 0, y: 0 };
    zoomImg.style.transition = 'transform 0.2s ease';
    zoomImg.onload = () => {
        updateBaseSize(zoomImg);
        zoomImg.style.transform = `translate(0px, 0px) scale(${currentZoom})`;
        const counter = document.querySelector('.lb-counter'); if (counter) counter.innerText = `Gambar ${lbIndex + 1} / ${lbSlides.length}`;
    };
    zoomImg.src = lbSlides[lbIndex];
}

// 1. Fungsi untuk mengunduh gambar yang sedang AKTIF di slider
function downloadActiveImage(btn, id) {
    // Mencari card tempat tombol berada
    const card = btn.closest('.bus-card');
    // Mencari gambar yang memiliki class 'active' di dalam card tersebut
    const activeImg = card.querySelector('.slide.active');
    
    if (activeImg && activeImg.src) {
        // Memanggil fungsi download bawaanmu
        downloadImage(activeImg.src, id);
    } else {
        alert("Gambar tidak ditemukan");
    }
}

// Fungsi utilitas untuk mengunduh gambar (menangani CORS jika perlu)
function downloadImage(src, id) {
    try {
        const filename = id ? `${id}.jpg` : 'image.jpg';
        const a = document.createElement('a');
        a.download = filename;

        // Jika link berasal dari origin yang sama atau data URI, gunakan langsung
        const srcUrl = new URL(src, location.href);
        if (src.startsWith('data:') || srcUrl.origin === location.origin) {
            a.href = src;
            document.body.appendChild(a);
            a.click();
            a.remove();
            return;
        }

        // Untuk cross-origin, fetch dulu sebagai blob lalu unduh
        fetch(src, { mode: 'cors' })
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.blob();
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                a.href = url;
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
            })
            .catch(err => {
                console.error('Download failed', err);
                alert('Gagal mengunduh gambar (CORS atau jaringan)');
            });
    } catch (err) {
        console.error(err);
        alert('Gagal memproses unduhan');
    }
}

// 2. Update fungsi initSliders agar memperbarui teks indikator (Gambar 1 / 2)
function initSliders() {
    document.querySelectorAll('.bus-img-container.slider').forEach(slider => {
        let startX = 0;
        let current = 0;
        const slides = slider.querySelectorAll('img');
        const indicator = slider.querySelector('.slide-counter'); // Ambil elemen angka

        if (slides.length <= 1) return;

        // Set indikator awal
        if (indicator) indicator.innerText = `Gambar 1 / ${slides.length}`;

        slider.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        slider.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) < 50) return;

            slides[current].classList.remove('active');

            current = diff > 0
                ? (current + 1) % slides.length
                : (current - 1 + slides.length) % slides.length;

            slides[current].classList.add('active');

            // UPDATE TEKS INDIKATOR
            if(indicator) {
                indicator.innerText = `Gambar ${current + 1} / ${slides.length}`;
            }
        });

        // Pointer-based dragging for desktop (simple)
        let pStart = 0;
        slider.addEventListener('pointerdown', e => { pStart = e.clientX; }, { passive: true });
        slider.addEventListener('pointerup', e => {
            const endX = e.clientX;
            const diff = pStart - endX;
            if (Math.abs(diff) < 50) return;

            slides[current].classList.remove('active');
            current = diff > 0
                ? (current + 1) % slides.length
                : (current - 1 + slides.length) % slides.length;
            slides[current].classList.add('active');
            if(indicator) indicator.innerText = `Gambar ${current + 1} / ${slides.length}`;
        });

    });
} 

// START APP
document.addEventListener('DOMContentLoaded', init);

