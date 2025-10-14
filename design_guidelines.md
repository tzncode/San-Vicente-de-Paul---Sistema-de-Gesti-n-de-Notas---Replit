# Design Guidelines: San Vicente de Paul Academic Grade Management System

## Design Approach

**Selected Approach**: Design System-Based (Material Design + Educational Platform Patterns)

**Justification**: This is a utility-focused, information-dense academic application requiring efficiency, data clarity, and institutional trust. Drawing from Material Design principles and platforms like Google Classroom and Canvas ensures familiar patterns for educational workflows.

**Key Design Principles**:
- Clarity over decoration - every element serves a functional purpose
- Data-first presentation with clear visual hierarchy
- Institutional professionalism and trustworthiness
- Consistent, predictable interactions across all user roles

## Core Design Elements

### A. Color Palette

**Light Mode**:
- Primary: 220 70% 45% (Professional blue - institutional trust)
- Primary Hover: 220 70% 38%
- Background: 0 0% 98% (Soft white)
- Surface: 0 0% 100% (Pure white for cards/panels)
- Border: 220 15% 88%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%

**Dark Mode**:
- Primary: 220 65% 55%
- Primary Hover: 220 65% 62%
- Background: 220 18% 10%
- Surface: 220 15% 14%
- Border: 220 12% 22%
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 70%

**Accent Colors** (use sparingly):
- Success: 145 65% 42% (grade approval, confirmations)
- Warning: 35 85% 55% (pending actions)
- Error: 0 72% 51% (grade failures, alerts)

### B. Typography

**Font Families**:
- Primary: 'Inter' via Google Fonts (clean, professional readability)
- Monospace: 'JetBrains Mono' (for numeric data, grades, DNI)

**Type Scale**:
- Headings: font-semibold (H1: text-3xl, H2: text-2xl, H3: text-xl)
- Body: font-normal text-base (16px base)
- Small text: text-sm (metadata, labels)
- Data/Numbers: font-medium (grades, statistics)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16 for consistent rhythm
- Component padding: p-4, p-6
- Section spacing: mb-8, mb-12
- Card gaps: gap-4, gap-6
- Form field spacing: space-y-4

**Container Strategy**:
- Dashboard main: max-w-7xl mx-auto px-4
- Forms/Details: max-w-4xl mx-auto
- Data tables: Full width within container (overflow-x-auto)

### D. Component Library

**Navigation**:
- Top navbar: Fixed header with logo, user role badge, profile dropdown
- Sidebar navigation: Collapsible menu with clear iconography (Heroicons)
- Active state: Subtle background + primary color accent

**Dashboards**:
- Card-based stat displays (3-4 column grid on desktop, stack on mobile)
- Metric cards: Large number display + label + subtle icon
- Recent activity feeds: List with timestamps and action indicators

**Data Tables**:
- Striped rows for readability (alternate subtle background)
- Sticky header on scroll
- Clear column headers with sort indicators
- Row actions: Icon buttons (edit, delete) aligned right
- Pagination: Bottom-aligned, numbered pages + prev/next

**Forms**:
- Consistent input styling: border, focus ring (primary color)
- Labels above inputs, required indicators (*)
- Helper text below inputs (text-sm text-secondary)
- Dark mode: Maintain input backgrounds distinct from surface
- Button groups: Primary action right-aligned, secondary left

**Exam & Grade Entry**:
- Student list table with inline grade inputs
- Grade input: Numeric, 0.00-10.00 validation, decimal support
- Auto-save indicator: Subtle timestamp below form
- Visual distinction between saved/unsaved states

**Modals & Overlays**:
- Center-screen modals with backdrop
- Clear close button (X) top-right
- Action buttons bottom-right (Cancel + Primary action)

**Course/Subject Cards**:
- Horizontal cards with course name, subject count, professor info
- Access code display: Monospace font, copy button
- Education level badge (Primaria/Secundaria) top-right

**Student Management**:
- CSV upload zone: Dashed border, drag-drop area
- Manual entry form: Multi-column layout (2 cols desktop)
- Student list: Table with DNI (monospace), name, course, actions

### E. Visual Hierarchy

**Dashboard Priority**:
1. Key metrics (large, prominent cards)
2. Recent activity/exams (medium emphasis)
3. Navigation and filters (subtle, functional)

**Data Density**:
- Use whitespace strategically - tables can be information-dense
- Card components: Generous padding (p-6) for breathing room
- List items: Compact (py-2) for scanability

### F. Interaction Patterns

**State Feedback**:
- Loading: Spinner with backdrop for async operations
- Success: Toast notification (top-right, auto-dismiss)
- Error: Inline field errors + toast for critical failures
- Disabled states: Reduced opacity (opacity-50) + no-cursor

**Period Closure**:
- Visual indicator when period is closed (badge + disabled inputs)
- Lock icon on closed periods in exam history

## Images

**Where to Use Images**:
- Login page: Institutional photo (school building/logo) - subtle, not dominating
- Empty states: Illustrative icons (no exams created yet, no students enrolled)
- User avatars: Initials-based colored circles (no photos needed)

**NO large hero images** - this is an application, not a marketing site. Keep visuals minimal and functional.

## Critical Implementation Notes

- All forms must have consistent dark mode input styling (visible boundaries)
- Tables must be responsive (horizontal scroll on mobile)
- Grade inputs require precise decimal handling (4,2 precision)
- Access codes must be easily copyable (click-to-copy functionality)
- Period-based restrictions must be clearly communicated visually
- Role-based UI: Show/hide admin features based on user role
- Maintain WCAG AA contrast ratios in both light and dark modes