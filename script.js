// Sample data - คุณสามารถเพิ่มข้อมูลสถานที่ท่องเที่ยวที่นี่
const placesData = [
    {
        id: 1,
        name: "แกรนด์แคนยอน",
        location: "บางแสน",
        category: "mountain",
        description: "ห่างจากที่พักประมาณ 12.4 กิโลเมตร",
        // rating: 4.5,
        image: "⛰️",
        imageUrl: "img/grandcanyon.jpg",
        link: "https://www.wongnai.com/attractions/347274qn-%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B9%81%E0%B8%84%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%99-%E0%B8%8A%E0%B8%A5%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5"
    },
    {
        id: 2,
        name: "หาดบางแสน",
        location: "บางแสน",
        category: "beach",
        description: "ห่างจากที่พักประมาณ 0.6 กิโลเมตร",
        // rating: 4.8,
        image: "🏖️",
        imageUrl: "img/bangsan.jpg",
        link: "https://www.wongnai.com/attractions/325894BI-%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99"
    },
    {
        id: 3,
        name: "น้ำตกชันตาเถร",
        location: "บางแสน",
        category: "mountain",
        description: "ห่างจากที่พักประมาณ 22 กิโลเมตร",
        // rating: 4.7,
        image: "⛰️",
        imageUrl: "img/asd.jpg",
        link: "https://www.wongnai.com/attractions/326593dj-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%8A%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B9%80%E0%B8%96%E0%B8%A3"
    },
    {
        id: 4,
        name: "J-Park",
        location: "บางแสน",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 22 กิโลเมตร",
        // rating: 4.6,
        image: "🏝️",
        imageUrl: "img/j-park.jpg",
        link: "https://www.wongnai.com/trips/travel-at-chonburi"
    },
    {
        id: 5,
        name: "Monster Aquarium",
        location: "พัทยา",
        category: "nature",
        description: "ห่างจากที่พักประมาณ 40 กิโลเมตร",
        // rating: 4.4,
        image: "🌲",
        imageUrl: "img/aquarium.jpg",
        link: "https://www.wongnai.com/attractions/373712sV-monster-aquarium"
    },
    {
        id: 6,
        name: "เกาะล้าน",
        location: "ชลบุรี",
        category: "beach",
        description: "ค่าเรือ 30บาท ต่อคน",
        // rating: 4.9,
        image: "🏖️",
        imageUrl: "img/1.jpg",
        link: "https://www.wongnai.com/attractions/324849Ng-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99"
    },
    {
        id: 7,
        name: "ตลาดปลาบางแสน",
        location: "บางแสน",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 3.1 กิโลเมตร",
        // rating: 4.8,
        image: "🍣",
        imageUrl: "img/2.jpg",
        link: "https://www.wongnai.com/reviews/21c39eef0a3640c6a299e0e13bbd58f6"
    },
    {
        id: 8,
        name: "FROST Magical",
        location: "พัทยา",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 42 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/frost.jpg",
        link: "https://www.facebook.com/frostpattaya/"
    },
    {
        id: 9,
        name: "เขาสามมุข",
        location: "บางแสน",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 4.1 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/3muk.jpg",
        link: "https://www.facebook.com/taekhobfah/posts/-%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%A1%E0%B8%B8%E0%B8%82-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99-%E0%B8%9F%E0%B8%B5%E0%B8%A5%E0%B8%94%E0%B8%B5%E0%B9%8A%E0%B8%94%E0%B8%B5%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B9%86-%E0%B9%84%E0%B8%9B%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88-vibe-%E0%B8%94%E0%B8%B5-%E0%B9%83%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B8%B2/1049076016582027/"
    },
    {
        id: 10,
        name: "เกาะสีชัง",
        location: "ชลบุรี",
        category: "beach",
        description: "ค่าเรือ 60บาท ต่อคน",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/3.jpg",
        link: ""
    },
    {
        id: 11,
        name: "หาดวอนนภา",
        location: "บางแสน",
        category: "beach",
        description: "ห่างจากที่พักประมาณ 2.4 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/4.jpg",
        link: "https://www.wongnai.com/reviews/404e944a67884ca0b3291b862c7cfa8b"
    },
    {
        id: 12,
        name: "Space Time Cube",
        location: "พัทยา",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 47.6 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/5.jpg",
        link: "https://www.facebook.com/StoryofEast/posts/%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%B6%E0%B9%89%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2-space-time-cube-pattaya-%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B9%82%E0%B8%A5%E0%B8%81-3d-%E0%B8%99%E0%B8%B4%E0%B8%97%E0%B8%A3%E0%B8%A3%E0%B8%A8%E0%B8%81%E0%B8%B2%E0%B8%A3-immer/1261043466051345/"
    },
    {
        id: 13,
        name: "แหลมแท่น",
        location: "บางแสน",
        category: "beach",
        description: "ห่างจากที่พักประมาณ 3.5 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/6.jpg",
        link: "https://www.wongnai.com/attractions/358655Az-%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%A1%E0%B9%81%E0%B8%97%E0%B9%88%E0%B8%99"
    },
    {
        id: 14,
        name: "ตลาดน้ำ 4 ภาค",
        location: "พัทยา",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 51.4 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/7.jpg",
        link: "https://www.wongnai.com/attractions/325714hG-%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3-4-%E0%B8%A0%E0%B8%B2%E0%B8%84"
    },
    {
        id: 15,
        name: "เกาะลอย",
        location: "บางแสน",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 16.4 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/8.jpg",
        link: "https://www.wongnai.com/attractions/347540cd-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%A5%E0%B8%AD%E0%B8%A2-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2"
    },
    {
        id: 16,
        name: "Underwater World",
        location: "พัทยา",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 49.8 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/9.jpg",
        link: "https://www.wongnai.com/reviews/66ff1b706b0244ca8d4818af3f351170"
    },
    {
        id: 17,
        name: "ศูนย์ศึกษาธรรมชาติและอนุรักษ์ป่าชายเลน",
        location: "บางแสน",
        category: "nature",
        description: "ห่างจากที่พักประมาณ 10.2 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/10.jpg",
        link: "https://www.wongnai.com/reviews/66ff1b706b0244ca8d4818af3f351170"
    },
    {
        id: 18,
        name: "อ่างเก็บน้ำบางพระ",
        location: "บางแสน",
        category: "checkin",
        description: "ห่างจากที่พักประมาณ 14 กิโลเมตร",
        // rating: 4.6,
        image: "🧊",
        imageUrl: "img/11.jpg",
        link: "https://www.wongnai.com/attractions/332003cx-%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%A3%E0%B8%B0"
    },
];

// DOM elements
const placesGrid = document.getElementById('placesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const emptyState = document.getElementById('emptyState');

// Filtered places
let filteredPlaces = [...placesData];

// ดึงระยะทางจาก description (กิโลเมตร)
function extractDistance(description) {
    if (!description) return Infinity; // ถ้าไม่มี description ให้เรียงท้ายสุด
    
    // หา pattern "ห่างจากที่พักประมาณ X กิโลเมตร" หรือ "ห่างจากที่พักประมาณ X.X กิโลเมตร"
    const match = description.match(/ห่างจากที่พักประมาณ\s*([\d.]+)\s*กิโลเมตร/);
    if (match) {
        return parseFloat(match[1]);
    }
    
    // ถ้าไม่มี pattern ให้เรียงท้ายสุด
    return Infinity;
}

// เรียงสถานที่ตามระยะทางจากน้อยไปมาก
function sortPlacesByDistance(places) {
    return [...places].sort((a, b) => {
        const distanceA = extractDistance(a.description);
        const distanceB = extractDistance(b.description);
        return distanceA - distanceB;
    });
}

// Initialize
function init() {
    // เรียงตามระยะทางก่อนแสดงผล
    filteredPlaces = sortPlacesByDistance(filteredPlaces);
    renderPlaces(filteredPlaces);
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleFilter);
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFilters(searchTerm, categoryFilter.value);
}

// Handle category filter
function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFilters(searchTerm, categoryFilter.value);
}

// Apply filters
function applyFilters(searchTerm, category) {
    filteredPlaces = placesData.filter(place => {
        const matchesSearch = place.name.toLowerCase().includes(searchTerm) ||
                             place.location.toLowerCase().includes(searchTerm) ||
                             place.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = category === 'all' || place.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    // เรียงตามระยะทางจากน้อยไปมาก
    filteredPlaces = sortPlacesByDistance(filteredPlaces);
    
    renderPlaces(filteredPlaces);
}

// Render places
function renderPlaces(places) {
    placesGrid.innerHTML = '';
    
    if (places.length === 0) {
        emptyState.classList.add('show');
        return;
    }
    
    emptyState.classList.remove('show');
    
    places.forEach(place => {
        const placeCard = createPlaceCard(place);
        placesGrid.appendChild(placeCard);
    });
}

// Create place card element
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    
    const categoryLabels = {
        beach: 'ชายหาด',
        mountain: 'ภูเขา',
        // temple: 'วัด',
        // city: 'เมือง',
        nature: 'ธรรมชาติ',
        checkin: 'เช็คอิน'
    };
    
    const hasImageUrl = place.imageUrl && place.imageUrl.trim() !== '';
    const href = place.link && place.link.trim() !== '' ? place.link : '#';

    card.innerHTML = `
        <a class="place-link" href="${href}">
            <div class="place-image">
                ${
                    hasImageUrl
                        ? `<img src="${escapeHtml(place.imageUrl)}" alt="${escapeHtml(place.name)}">`
                        : `<span class="place-emoji">${place.image}</span>`
                }
            </div>
            <div class="place-content">
                <div class="place-header">
                    <div>
                        <div class="place-name">${escapeHtml(place.name)}</div>
                        <span class="place-category">${categoryLabels[place.category] || place.category}</span>
                    </div>
                </div>
                <div class="place-location">
                    📍 ${escapeHtml(place.location)}
                </div>
                <div class="place-description">
                    ${escapeHtml(place.description)}
                </div>
            </div>
        </a>
    `;
    
    return card;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on page load
init();
