// DATA MASTER
        const busData = [
          // VKTR BYD SINAR JAYA
            { id: "SJM-240007", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Transjakarta_SJM-240007.jpg", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240010", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd-sjm-1.png", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240012", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Transjakarta_SJM-240012.jpg/1920px-Transjakarta_SJM-240012.jpg", desc: "VKTR BYD Tidar HF-12" },
            { id: "SJM-240020", operator: "Sinar Jaya Megah Langgeng", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd-sjm-2.jpg", desc: "VKTR BYD Tidar HF-12" },
          // VKTR BYD DAMRI
            { id: "DMR-250276", operator: "Perum DAMRI", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type:"High Floor",color: "Putih Biru", image: "images/byd-dmr-1.jpeg", desc: "VKTR BYD Tidar HF-12" },
            { id: "DMR-250287", operator: "Perum DAMRI", category: "BYD", fuel: "Listrik", karoseri: "Laksana & VKTR", type: "High Floor", color: "Putih Biru", image: "images/byd-dmr-2.jpeg", desc: "VKTR BYD Tidar HF-12" }
            , //Skywell
            { id: "DMR-230099", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-11.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230104", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-12.jpg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230114", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-1.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230121", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-2.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230122", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "/images/skywell-dmr-3.jpg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230113", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-4.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230124", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-5.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230102", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-6.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230103", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-7.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230101", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-8.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230100", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-9.png", desc: "Skywell NJL6129BEV" },
            { id: "DMR-230110", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/skywell-dmr-10.jpeg", desc: "Skywell NJL6129BEV" },
            { id: "DMR-250245", operator: "Perum DAMRI", category: "Skywell", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/1/13/DMR-250245_Transjakarta_Perum_DAMRI_Skywell_Bus.jpg", desc: "Skywell NJL6126BEV" },
            //ZHONGTONG
            { id: "DMR-0717", operator: "Perum DAMRI", category: "Zhongtong", fuel: "CNG", karoseri: "Completely Built Up", type: "Articulated", color: "Putih Biru", image: "images/zhbg-dmr-1.jpg", desc: "Zhongtong LCK6180GC" },
            //SCANIA
            { id: "TJ-0199", operator: "Transjakarta", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania-tj-1.jpg", desc: "SCANIA K320iA" },
            { id: "TJ-0200", operator: "Transjakarta", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania-tj-2.png", desc: "SCANIA K320iA" },
            { id: "DMR-250199", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/DMR-250199_Transjakarta_Perum_DAMRI_Zhongtong_Bus.jpg/1720px-DMR-250199_Transjakarta_Perum_DAMRI_Zhongtong_Bus.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240144", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhev-dmr-2.jpeg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240127", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhev-dmr-3.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "DMR-240142", operator: "Perum DAMRI", category: "Zhongtong", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/zhev-dmr-1.jpg", desc: "Zhongtong LCK6126EVG" },
            { id: "MYS-19203", operator: "Mayasari Bakti", category: "Mercedes-Benz", fuel: "Diesel", karoseri: "Laksana", type: "High Floor", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Transjakarta_Mercedes_OH1626_AT_Laksana_Cityline_2_%2851378828715%29.jpg", desc: "Mercedes-Benz OH 1626 AT" },
            { id: "MYS-18120", operator: "Mayasari Bakti", category: "SCANIA", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "scania-mys-1.jpg", desc: "Scania K310IB 6x2" },
            { id: "MB-1610", operator: "Mayasari Bakti", category: "SCANIA", fuel: "CNG", karoseri: "Laksana", type: "Articulated", color: "Putih Biru Muda", image: "images/scania-mb-1.jpg", desc:"SCANIA K320iA"},
            { id: "MYS-22334", operator: "Mayasari Bakti", category: "BYD", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/byd-mys-1.jpeg", desc: "BYD K9" },
            { id: "MYS-23366", operator: "Mayasari Bakti", category: "BYD", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/byd-mys-2.png", desc: "BYD K9" },
            //VOLVO SAF
            { id: "SAF-007", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo-saf-3.png", desc: "Volvo B11R 6x2" },
            { id: "SAF-008", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo-saf-2.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-099", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo-saf-1.jpeg", desc: "Volvo B11R 6x2" },
            { id: "SAF-003", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo-saf-3.jpeg", desc: "Volvo B11R 6x2" },
            { id: "SAF-043", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Transjakarta_Steady_Safe_Cityline_2_Laksana.jpg", desc: "Volvo B11R 6x2" },
            { id: "SAF-085", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo-saf-4.jpeg", desc: "Volvo B11R 6x2" },
            { id: "SAF-026", operator: "Steady Safe", category: "Volvo", fuel: "Diesel", karoseri: "Laksana", type: "Maxi Bus", color: "Putih Biru", image: "images/volvo-saf-5.jpg", desc: "Volvo B11R 6x2" },
            //BIANGLALA
            { id: "BMP-240379", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "High Floor", color: "Putih Biru", image: "images/sag-bmp-1.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230307", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/SAG_Golden_Dragon_XML6126JEVJ0C3%2C_Serving_Transjakarta_4C.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230315", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/sag-lt-bmp-1.jpeg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230302", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/sag-lt-bmp-2.webp", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230321", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/sag-lt-bmp-3.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230303", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/sag-lt-bmp-4.jpeg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "BMP-230304", operator: "Bianglala Metropolitan", category: "Golden Dragon", fuel: "Listrik", karoseri: "Completely Built Up", type: "Low Entry", color: "Putih Jingga", image: "images/sag-lt-bmp-5.jpg", desc: "SAG Golden Dragon XML6126JEVJ0C3" },
            { id: "JDM-230010", operator: "Jewa Dian Mitra", category: "Hino", fuel: "Diesel", karoseri: "Laksana", type: "Medium Bus", color: "Putih Jingga", image: "images/hino-jdm-1.jpg", desc: "Hino GB 150" },
            { id: "MBT-240624", operator: "Metro Baru Transport", category: "Hino", fuel: "Diesel", karoseri: "Laksana", type: "Medium Bus", color: "Putih Jingga", image: "images/hino-mbt-1.jpg", desc: "Hino GB 150" },
            { id: "SGI-240003", operator: "Sentra Glosia Indah", category: "Hino", fuel: "Diesel", karoseri: "Lie Ling", type: "Medium Bus", color: "Putih Jingga", image: "images/isuzu-sgi-1.jpg", desc: "Isuzu NQR 71" },
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
if (state.category !== 'All') parts.push(state.cat);

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
    grid.innerHTML = filtered.map(b => `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="bus-card">
                <div class="bus-img-container" onclick="openLightbox('${b.image}')">
                    <img src="${b.image}" loading="lazy">
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

                <button class="btn-dl" onclick="downloadImage('${b.image}', '${b.id}')">
                    Unduh Gambar
                </button>
            </div>
        </div>
    `).join('');

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
        function openLightbox(url) {
            document.getElementById('zoom-img').src = url;
            document.getElementById('lightbox').style.display = 'flex';
            currentZoom = 1;
            document.getElementById('zoom-img').style.transform = `scale(1)`;
            document.body.style.overflow = 'hidden';
        }
        function closeLightbox() { document.getElementById('lightbox').style.display = 'none'; document.body.style.overflow = 'auto'; }
        function zoomAction(d) {
            currentZoom = Math.max(1, Math.min(4, currentZoom + d));
            document.getElementById('zoom-img').style.transform = `scale(${currentZoom})`;
        }

        async function downloadImage(url, id) {
            const res = await fetch(url);
            const blob = await res.blob();
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `TJ-${id}.jpg`;
            a.click();
        }

        window.onload = init;
