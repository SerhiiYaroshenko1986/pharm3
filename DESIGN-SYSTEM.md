# Modern Pharmacy E-Commerce UI Design System

## 🎨 Overview

A beautiful, modern pharmacy e-commerce website UI inspired by clean, minimal design principles with premium product presentation, generous whitespace, soft shadows, and elegant typography.

---

## 🎯 Brand Identity

### Website Name
**PHARMACY**

### Primary Color
- **Primary Green**: `#1EB985`
- Used for: Primary buttons, links, active states, accents

### Color Palette

```css
Primary (Green):
- primary-50:  #E8F9F3
- primary-100: #D1F3E7
- primary-200: #A3E7CF
- primary-300: #75DBB7
- primary-400: #47CF9F
- primary-500: #1EB985 (Main)
- primary-600: #18946A
- primary-700: #126F4F
- primary-800: #0C4A35
- primary-900: #06251A

Neutrals:
- neutral-50:  #FAFAFA
- neutral-100: #F5F5F5
- neutral-200: #E5E5E5
- neutral-300: #D4D4D4
- neutral-400: #A3A3A3
- neutral-500: #737373
- neutral-600: #525252
- neutral-700: #404040
- neutral-800: #262626 (Body text)
- neutral-900: #171717 (Headings)

Backgrounds:
- white / light gray backgrounds (#FAFAFA, #F5F5F5)
- Dark charcoal text (#262626)
```

---

## 📝 Typography

### Font Families
```css
Sans-serif: Inter (body text)
Display: Manrope (headings)
System fallback: system-ui, -apple-system, sans-serif
```

### Font Sizes
- **xs**: 0.75rem (12px) - Line height: 1.5
- **sm**: 0.875rem (14px) - Line height: 1.6
- **base**: 1rem (16px) - Line height: 1.7
- **lg**: 1.125rem (18px) - Line height: 1.7
- **xl**: 1.25rem (20px) - Line height: 1.6
- **2xl**: 1.5rem (24px) - Line height: 1.5
- **3xl**: 1.875rem (30px) - Line height: 1.4
- **4xl**: 2.25rem (36px) - Line height: 1.3
- **5xl**: 3rem (48px) - Line height: 1.2
- **6xl**: 3.75rem (60px) - Line height: 1.1

### Typography Usage
- Large, confident headings
- Readable body text
- Generous line-height for readability

---

## 🎭 Design Principles

### Layout
- Wide container (max-width: 1280px)
- Generous whitespace
- Airy spacing between elements
- Responsive: Mobile-first (390px, Tablet, Desktop 1440px)

### Cards & Components
- Rounded corners: 10-14px (card: 0.875rem, button: 0.625rem)
- Soft shadows:
  - `soft`: 0 2px 8px rgba(0, 0, 0, 0.04)
  - `soft-md`: 0 4px 16px rgba(0, 0, 0, 0.06)
  - `soft-lg`: 0 8px 24px rgba(0, 0, 0, 0.08)
  - `soft-xl`: 0 12px 32px rgba(0, 0, 0, 0.1)
- Subtle borders
- Smooth transitions (200ms)

---

## 🧩 Component System

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">Shop now</button>
```
- Background: `#1EB985`
- Text: white
- Hover: darker green
- Shadow on hover

#### Secondary Button
```html
<button class="btn btn-secondary">Learn more</button>
```
- Border: 2px neutral-300
- Text: neutral-700
- Hover: neutral-50 background

#### Outline Primary Button
```html
<button class="btn btn-outline-primary">Upload prescription</button>
```
- Border: 2px primary
- Text: primary
- Hover: primary-50 background

### Cards

#### Standard Card
```html
<div class="card">
  <!-- Content -->
</div>
```

#### Product Card
```html
<div class="card-product">
  <!-- Product content -->
</div>
```

### Inputs
```html
<input type="text" class="input" placeholder="Enter text">
```
- Rounded corners
- Border: neutral-300
- Focus: primary ring

### Badges
```html
<span class="badge badge-primary">NEW</span>
<span class="badge badge-success">In Stock</span>
<span class="badge badge-warning">Low Stock</span>
<span class="badge badge-danger">Out of Stock</span>
```

---

## 📄 Pages Implemented

### 1. Home Page (`/`)
- **Hero Section**: Minimal hero with headline, subtext, 2 CTAs
- **Trust Badges**: Licensed pharmacy, Secure checkout, Pharmacist support
- **Quick Actions**: 4 tiles (Refill RX, Track order, Find store, Consultation)
- **Category Grid**: Visual category cards with icons
- **Featured Products**: Premium product carousel
- **Services Section**: 4 service cards (Vaccinations, Health screening, etc.)
- **Newsletter**: Email subscription form

### 2. Shop / Category Page (`/products`)
- **Left Sidebar**: Filters (Category, Price range, Availability, Brand)
- **Product Grid**: 3-4 columns desktop, 2 columns mobile
- **Product Cards**: Image, name, rating, price, Add to cart button
- **Sorting**: By default, price (asc/desc), name
- **Empty State**: Friendly message when no products found

### 3. Product Details Page (`/product/:id`)
- **Product Gallery**: Large image area
- **Product Info**: Name, generic name, strength, form, pack size
- **Pricing**: Current price, original price, savings badge
- **Stock & Delivery**: Availability status, delivery ETA
- **Quantity Selector**: +/- buttons
- **CTAs**: Add to cart (primary), Ask pharmacist (secondary), Wishlist
- **Tabs**: Overview, Directions, Ingredients, Warnings, Side effects, Storage
- **Trust Icons**: Licensed, Free returns, Fast shipping
- **Medical Disclaimer**: Legal notice

### 4. Cart (`/cart`)
- **Product List**: Images, names, quantities, prices
- **Quantity Controls**: +/- buttons per item
- **Order Summary**: Sticky sidebar with totals
- **Trust Badges**: Secure checkout, Free returns, Fast delivery
- **Empty State**: Friendly illustration and CTA

### 5. Checkout (`/checkout`)
- **Progress Indicator**: 3 steps (Shipping → Payment → Confirm)
- **Shipping Form**: Name, address, contact info
- **Payment Methods**: Card, PayPal with icons
- **Order Summary**: Sticky sidebar
- **Secure Badges**: Trust indicators

### 6. Prescription Upload (`/prescriptions`)
- **4-Step Flow**: Upload → Verify → Delivery → Confirm
- **Drag & Drop**: File upload with preview
- **Security Notice**: Privacy and HIPAA compliance
- **Form Fields**: Patient name, prescription number, notes
- **Success State**: Confirmation with next steps
- **FAQ Section**: Common questions

### 7. Store Locator (`/locations`)
(Can be implemented using existing locations component with modern styling)

### 8. Account (`/account`)
(Can implement: Orders, Refills, Saved items, Profile settings)

---

## 🎨 Header Component

### Structure
- **Fixed position** at top
- **Left**: Logo (PHARMACY with green icon)
- **Center**: Prominent search bar (Desktop only)
- **Right**: Account, Wishlist, Cart with badge
- **Navigation Row** (Desktop): Shop, Prescriptions, Services, Deals, Health Hub, Store Locator
- **Mobile Menu**: Hamburger menu with full navigation

### Features
- Sticky header
- Search bar with icon
- Cart badge shows item count in primary color
- Responsive: Mobile hamburger menu

---

## 🦶 Footer Component

### Structure
- **5 Columns**: Brand, Shop, Help, Company, Social
- **Trust Badges**: Licensed pharmacy, Secure checkout
- **Medical Disclaimer**: Legal notice
- **Links**: Organized sitemap
- **Social Icons**: Facebook, Twitter, Instagram

---

## 🎯 Accessibility

- **WCAG AA contrast** compliance
- **Clear focus states** on interactive elements
- **Keyboard navigation** support
- **Semantic HTML** structure
- **Alt text** for images
- **Screen reader** friendly

---

## 📱 Responsive Design

### Breakpoints
```css
Mobile: 390px (base)
Tablet: 768px (md)
Desktop: 1024px (lg)
Large Desktop: 1280px (xl)
```

### Mobile Features
- 2-column product grid
- Hamburger menu
- Stacked layouts
- Touch-friendly button sizes (min 44x44px)
- Mobile search in dropdown

---

## 🚀 Usage

### Installing Dependencies
```bash
npm install
```

### Running Development Server
```bash
npm start
```

### Building for Production
```bash
npm run build
```

---

## 🎨 Custom Tailwind Classes

All custom classes are defined in `src/styles.css`:

```css
/* Buttons */
.btn
.btn-primary
.btn-secondary
.btn-outline-primary
.btn-text

/* Cards */
.card
.card-product

/* Inputs */
.input

/* Container */
.container-custom

/* Badges */
.badge
.badge-primary
.badge-success
.badge-warning
.badge-danger
```

---

## 📦 Component Files Structure

```
src/app/
├── components/
│   ├── header-component/        # Main header navigation
│   ├── footer-component/        # Footer with sitemap
│   ├── hero-component/          # Homepage hero section
│   ├── categories-component/    # Category grid
│   ├── featured-products/       # Product carousel
│   ├── services/               # Services section
│   ├── newsletter/             # Newsletter signup
│   └── cart/                   # Shopping cart
│
├── pages/
│   ├── main/                   # Home page
│   ├── products/               # Product listing
│   ├── product-detail/         # Product details
│   ├── checkout/               # Checkout flow
│   └── prescription/           # Prescription upload
│
└── services/
    ├── cart.service.ts         # Cart management
    ├── product.service.ts      # Product data
    └── pharmacy-product.service.ts
```

---

## 🎯 Key Features

✅ Clean, minimal modern design
✅ Primary brand color: #1EB985
✅ Inter & Manrope typography
✅ Soft shadows and rounded cards
✅ Responsive mobile-first design
✅ Premium product presentation
✅ Trust badges and security indicators
✅ Accessible (WCAG AA)
✅ Component-based architecture
✅ Tailwind CSS utilities
✅ Standalone Angular components

---

## 📝 Notes

- Design inspired by modern e-commerce best practices
- Focus on trust and professionalism for pharmacy context
- Medical disclaimers included where appropriate
- HIPAA compliance messaging for prescription uploads
- Empty states for better UX
- Loading states for async operations

---

## 🔄 Future Enhancements

- Product reviews section
- Wishlist functionality
- Advanced filtering
- Product comparison
- Live chat with pharmacist
- Refill reminders
- Mobile app (PWA)
- Multi-language support
- Dark mode

---

**© 2026 PHARMACY. All rights reserved.**
