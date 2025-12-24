 Azure Haven Resort - Luxury Website

A beautiful, responsive luxury resort website featuring multi-page navigation, elegant design, and a comprehensive booking system. Built with HTML5, CSS3, and Vanilla JavaScript.

## 🌟 Features

- **5 Complete Pages** with smooth navigation
- **Multi-Step Booking Form** with date selection, guest info, and add-ons
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Day/Night Mode** toggle for enhanced user experience
- **Luxury Styling** using Tailwind CSS with gold and navy color scheme
- **Modern Components** with Lucide icons and Google Fonts (Cinzel, Playfair Display, Mulish)
- **Professional Animations** and smooth transitions throughout

## 📄 Pages Overview

### 1. **Home Page** (`index.html`)
- Hero section with tagline
- Day/Night mode toggle
- Featured activities showcase
- Quick booking widget

### 2. **Accommodations** (`rooms.html`)
- 3 luxury room types:
  - **Beach Villa** - Ocean views and private beach access
  - **Garden Room** - Lush garden surroundings
  - **Luxury Suite** - Premium amenities and service
- Room features, pricing, and amenities listing

### 3. **Dining** (`dining.html`)
- 3 curated dining experiences:
  - **Swimming Pool Dining** - Casual poolside meals
  - **Multi-Cuisine Restaurant** - Fine dining experience
  - **Beach Bar & Grill** - Beachfront casual dining
- Menu descriptions and specialty offerings

### 4. **Events** (`events.html`)
- 3 event packages:
  - **Beach Wedding & Engagement** - Perfect for celebrations
  - **Corporate Events & Team Retreats** - Professional gatherings
  - **Private Celebrations & Social Events** - Custom events
- Event details, accommodations, and pricing

### 5. **Booking** (`booking.html`)
- **Step 1**: Select check-in/check-out dates and room type
- **Step 2**: Enter guest information, payment method, and special requests
- **Step 3**: Add dining preferences and event packages
- Form validation and multi-step navigation

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Tailwind CSS (CDN)
- **JavaScript (Vanilla)** - No frameworks required
- **Lucide Icons** - Modern icon library
- **Google Fonts** - Premium typography
- **Python** - Simple HTTP server for development

## 📂 Project Structure

```
.
├── index.html          # Home page
├── rooms.html          # Accommodations page
├── dining.html         # Dining experiences page
├── events.html         # Event packages page
├── booking.html        # Multi-step booking form
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── server.py           # Development server
└── README.md           # This file
```

## 🚀 Getting Started

### Running Locally

1. Make sure you have Python installed
2. Run the development server:
   ```bash
   python server.py
   ```
3. Open your browser and go to:
   ```
   http://localhost:5000
   ```

### Navigation

- Click **"Book Now"** button on any page to go to the booking form
- Use the top navigation menu to browse:
  - HOME → ACCOMMODATIONS → DINING → EVENTS
- Mobile users can tap the menu icon for the mobile navigation

## 🎨 Design Features

- **Color Scheme**:
  - Primary: Deep Navy Blue (#1e3a5f)
  - Secondary: Gold (#d4af37)
  - Accent: Slate shades

- **Typography**:
  - **Cinzel** - Headers and titles (luxury serif)
  - **Playfair Display** - Large display text
  - **Mulish** - Body text (readable sans-serif)

- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## 📝 Form Validation

The booking form includes:
- Date validation (check-out must be after check-in)
- Required field validation
- Guest count validation
- Email format validation
- Step-by-step form progression

## 🔒 Security Notes

- This is a static website with no backend database
- Booking form data is processed client-side (for demo purposes)
- For production use, integrate with a backend service to store bookings
- Never store sensitive information in frontend code

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Customization

1. **Colors**: Search for hex codes in `style.css` and replace with your brand colors
2. **Content**: Edit text directly in the HTML files
3. **Images**: Add your resort photos to an `assets/` folder and link them
4. **Fonts**: Change Google Fonts in the `<head>` sections of HTML files
5. **Pricing**: Update room, dining, and event prices in their respective pages
