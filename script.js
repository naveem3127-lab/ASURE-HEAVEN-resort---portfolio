// Initialize Icons on load
lucide.createIcons();

// Data Configuration
const contentData = {
    day: {
        title: "Sun-Kissed Days",
        desc: "Bask in the warm glow of the tropical sun. Embrace adventure or pure relaxation by the shore.",
        mainImage: "luxury_resort_exteri_6052f0c6.jpg",
        caption: "Relax by the Shore",
        actTitle: "Endless Adventures",
        actSubtitle: "Activities",
        activities: [
            {
                img: "paragliding_over_tro_6a122b0b.jpg",
                icon: "wind",
                cat: "Adventure",
                title: "Sky High Thrills",
                desc: "Experience the thrill of paragliding over the azure ocean."
            },
            {
                img: "woman_sunbathing_on__cc19966c.jpg",
                icon: "umbrella",
                cat: "Relaxation",
                title: "Sun-Kissed Bliss",
                desc: "Unwind on our pristine private beaches with premium service."
            }
        ]
    },
    night: {
        title: "Magical Nights",
        desc: "As the sun sets, Azure Haven transforms into a vibrant wonderland of lights, music, and mystery.",
        mainImage: "luxury_resort_exteri_fe1cef0b.jpg",
        caption: "Experience the Nightlife",
        actTitle: "Unforgettable Moments",
        actSubtitle: "Entertainment",
        activities: [
            {
                img: "beach_party_with_dj__8029fa2f.jpg",
                icon: "music",
                cat: "Nightlife",
                title: "DJ Beach Parties",
                desc: "Dance the night away with world-class DJs under the stars."
            },
            {
                img: "cozy_campfire_on_bea_13fcea87.jpg",
                icon: "flame",
                cat: "Private Events",
                title: "Cozy Bonfires",
                desc: "Intimate gatherings with live acoustic music and warmth."
            }
        ]
    }
};

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-primary', 'shadow-lg');
        nav.classList.remove('py-6');
        nav.classList.add('py-4', 'bg-slate-900/90', 'backdrop-blur-md');
    } else {
        nav.classList.remove('bg-primary', 'shadow-lg', 'bg-slate-900/90', 'backdrop-blur-md', 'py-4');
        nav.classList.add('py-6');
    }
});

// Helper function to update icons reliably
function updateIcon(elementId, iconName) {
    const container = document.getElementById(elementId).parentElement;
    // Find the existing icon (svg or i)
    const existingIcon = container.querySelector('[data-lucide]') || container.querySelector('svg');
    
    if (existingIcon) {
        // Create a new i tag
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', iconName);
        newIcon.setAttribute('id', elementId);
        
        // Replace old icon with new i tag
        container.replaceChild(newIcon, existingIcon);
    }
}

// Mode Toggle Function
function setMode(mode) {
    const body = document.getElementById('body-element');
    const data = contentData[mode];

    // Toggle Dark Mode Class
    if (mode === 'night') {
        body.classList.add('dark-mode');
        document.getElementById('btn-night').classList.add('bg-primary', 'text-white', 'shadow-sm');
        document.getElementById('btn-night').classList.remove('text-gray-500');
        
        document.getElementById('btn-day').classList.remove('bg-white', 'text-primary', 'shadow-sm');
        document.getElementById('btn-day').classList.add('text-gray-500');
    } else {
        body.classList.remove('dark-mode');
        document.getElementById('btn-day').classList.add('bg-white', 'text-primary', 'shadow-sm');
        document.getElementById('btn-day').classList.remove('text-gray-500');

        document.getElementById('btn-night').classList.remove('bg-primary', 'text-white', 'shadow-sm');
        document.getElementById('btn-night').classList.add('text-gray-500');
    }

    // Update Text Content
    document.getElementById('exp-title').innerText = data.title;
    document.getElementById('exp-desc').innerText = data.desc;
    document.getElementById('main-image').src = data.mainImage;
    document.getElementById('image-caption').innerText = data.caption;
    
    document.getElementById('act-title').innerText = data.actTitle;
    document.getElementById('act-subtitle').innerText = data.actSubtitle;

    // Update Activities
    // Activity 1
    document.getElementById('act-img-1').src = data.activities[0].img;
    document.getElementById('act-cat-1').innerText = data.activities[0].cat;
    document.getElementById('act-head-1').innerText = data.activities[0].title;
    document.getElementById('act-desc-1').innerText = data.activities[0].desc;
    updateIcon('act-icon-1', data.activities[0].icon);

    // Activity 2
    document.getElementById('act-img-2').src = data.activities[1].img;
    document.getElementById('act-cat-2').innerText = data.activities[1].cat;
    document.getElementById('act-head-2').innerText = data.activities[1].title;
    document.getElementById('act-desc-2').innerText = data.activities[1].desc;
    updateIcon('act-icon-2', data.activities[1].icon);

    // Re-render icons
    lucide.createIcons();
}