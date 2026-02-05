// ข้อมูลสถานที่ท่องเที่ยว (ควรให้ตรงกับหน้า index)
const placesData = [
    {
        id: 1,
        name: "หาดป่าตอง",
        location: "ภูเก็ต",
        category: "beach",
        description: "หาดทรายขาวสวยงาม น้ำทะเลใสเหมาะสำหรับการเล่นน้ำและทำกิจกรรมทางน้ำต่างๆ",
        image: "🏖️",
        link: "https://www.wongnai.com/attractions/347274qn-%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B9%81%E0%B8%84%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%99-%E0%B8%8A%E0%B8%A5%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5",
        images: [
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 2,
        name: "ดอยอินทนนท์",
        location: "เชียงใหม่",
        category: "mountain",
        description: "ยอดเขาสูงสุดของประเทศไทย มีอากาศเย็นสบายและธรรมชาติที่สวยงาม",
        image: "⛰️",
        link: "",
        images: [
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 3,
        name: "วัดพระศรีรัตนศาสดาราม",
        location: "กรุงเทพมหานคร",
        category: "temple",
        description: "วัดที่สวยงามและสำคัญที่สุดของประเทศไทย ภายในมีพระพุทธมหามณีรัตนปฏิมากร",
        image: "🛕",
        link: "",
        images: [
            "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/4666859/pexels-photo-4666859.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 4,
        name: "เกาะสมุย",
        location: "สุราษฎร์ธานี",
        category: "beach",
        description: "เกาะสวยงามที่มีหาดทรายขาว น้ำทะเลใส และรีสอร์ทหรูมากมาย",
        image: "🏝️",
        link: "",
        images: [
            "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 5,
        name: "อุทยานแห่งชาติเขาใหญ่",
        location: "นครราชสีมา",
        category: "nature",
        description: "อุทยานแห่งชาติที่มีธรรมชาติอุดมสมบูรณ์ มีสัตว์ป่าและน้ำตกสวยงาม",
        image: "🌲",
        link: "",
        images: [
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 6,
        name: "วัดร่องขุ่น",
        location: "เชียงราย",
        category: "temple",
        description: "วัดศิลปะร่วมสมัยที่สวยงามแปลกตา สร้างโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์",
        image: "🏯",
        link: "",
        images: [
            "https://images.pexels.com/photos/2758994/pexels-photo-2758994.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/279260/pexels-photo-279260.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 7,
        name: "เกาะพีพี",
        location: "กระบี่",
        category: "beach",
        description: "เกาะสวยงามที่มีชื่อเสียงระดับโลก น้ำทะเลใสเหมือนแก้ว",
        image: "🏖️",
        link: "",
        images: [
            "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    },
    {
        id: 8,
        name: "ดอยสุเทพ",
        location: "เชียงใหม่",
        category: "mountain",
        description: "ภูเขาที่มีวัดพระธาตุดอยสุเทพตั้งอยู่ มีวิวเมืองเชียงใหม่ที่สวยงาม",
        image: "⛰️",
        link: "",
        images: [
            "https://images.pexels.com/photos/3889898/pexels-photo-3889898.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
    }
];

// อ่าน query parameter id
function getPlaceIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);
    return isNaN(id) ? null : id;
}

function initDetailPage() {
    const detailSection = document.getElementById("detailSection");
    const notFoundSection = document.getElementById("notFoundSection");

    const placeId = getPlaceIdFromUrl();
    const place = placesData.find(p => p.id === placeId);

    if (!place) {
        if (detailSection) detailSection.style.display = "none";
        if (notFoundSection) notFoundSection.style.display = "block";
        return;
    }

    if (detailSection) detailSection.style.display = "block";
    if (notFoundSection) notFoundSection.style.display = "none";

    renderPlaceDetail(place);
}

function renderPlaceDetail(place) {
    const detailTitle = document.getElementById("detailTitle");
    const detailSubtitle = document.getElementById("detailSubtitle");
    const placeName = document.getElementById("placeName");
    const placeLocation = document.getElementById("placeLocation");
    const placeDescription = document.getElementById("placeDescription");
    const externalLink = document.getElementById("externalLink");
    const mainImage = document.getElementById("mainImage");
    const mainImageFallback = document.getElementById("mainImageFallback");
    const thumbnailList = document.getElementById("thumbnailList");

    if (detailTitle) detailTitle.textContent = place.name;
    if (detailSubtitle) detailSubtitle.textContent = "ดูรูปภาพและข้อมูลเพิ่มเติมของ " + place.name;
    if (placeName) placeName.textContent = place.name;
    if (placeLocation) placeLocation.textContent = "📍 " + place.location;
    if (placeDescription) placeDescription.textContent = place.description;

    // ตั้งค่า a href จาก detail.js (ให้คุณแก้ลิงก์เองได้)
    if (externalLink) {
        externalLink.href = place.link || "";
    }

    const images = (place.images && place.images.length > 0) ? place.images : [];

    if (images.length > 0) {
        mainImage.src = images[0];
        mainImage.alt = place.name;
        mainImage.style.display = "block";
        mainImageFallback.style.display = "none";
    } else {
        mainImage.src = "";
        mainImage.alt = "";
        mainImage.style.display = "none";
        mainImageFallback.textContent = place.image || "📷";
        mainImageFallback.style.display = "flex";
    }

    if (thumbnailList) {
        thumbnailList.innerHTML = "";

        images.forEach((url, index) => {
            const thumb = document.createElement("button");
            thumb.className = "detail-thumbnail";
            thumb.type = "button";

            const img = document.createElement("img");
            img.src = url;
            img.alt = place.name + " รูปที่ " + (index + 1);

            thumb.appendChild(img);

            thumb.addEventListener("click", () => {
                mainImage.src = url;
                mainImage.alt = place.name + " รูปที่ " + (index + 1);
            });

            thumbnailList.appendChild(thumb);
        });
    }
}

document.addEventListener("DOMContentLoaded", initDetailPage);

