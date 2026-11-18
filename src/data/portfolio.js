export const profile = {
  name: 'Muhammad Ibrahim Tahir',
  role: 'Flutter Developer & Mobile App Engineer',
  tagline: 'I BUILD MOBILE APPS THAT MAKE EVERYDAY LIFE EASIER.',
  intro: 'I design and develop thoughtful mobile experiences with Flutter, clean architecture, and dependable backend systems.',
  github: 'https://github.com/sscibrahimtahir190422-sketch',
  email: 'ibrahimtahir1144@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-ibrahim-tahir-51567a249',
};
export const projects = [
  {
    name: 'DigiKhata',
    type: 'Digital bookkeeping · Flutter app',
    description: 'A shop management app for tracking customer credit, payments, outstanding balances, inventory, and business reports.',
    tech: ['Flutter', 'Dart', 'GetX', 'Supabase'],
    github: 'https://github.com/sscibrahimtahir190422-sketch/DigiKhata-Mobile-Application',
    featured: true,
    theme: 'emerald',
    images: [`${import.meta.env.BASE_URL}projects/digikhata-dashboard.webp`, `${import.meta.env.BASE_URL}projects/digikhata-workspace.webp`, `${import.meta.env.BASE_URL}projects/digikhata-inventory.webp`, `${import.meta.env.BASE_URL}projects/digikhata-reports.webp`],
  },
  {
    name: 'Shifa Care',
    type: 'Healthcare appointments · Flutter app',
    description: 'A healthcare booking and live queue experience with doctor discovery, appointment scheduling, and clinician dashboards.',
    tech: ['Flutter', 'Dart', 'Supabase'],
    github: 'https://github.com/sscibrahimtahir190422-sketch/shifa_care',
    featured: true,
    theme: 'blue',
    images: [`${import.meta.env.BASE_URL}projects/shifa-care-doctors.webp`, `${import.meta.env.BASE_URL}projects/shifa-care-booking.webp`, `${import.meta.env.BASE_URL}projects/shifa-care-queue.webp`, `${import.meta.env.BASE_URL}projects/shifa-care-hod.webp`],
  },
  {
    name: 'Bloggers',
    type: 'Blogging platform · Flutter app',
    description: 'A mobile blogging experience for discovering posts, writing articles, and reading content.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/sscibrahimtahir190422-sketch/Blog-App--Flutter-Mobile-Application-',
    featured: false,
    theme: 'orange',
    images: [`${import.meta.env.BASE_URL}projects/bloggers-feed.webp`, `${import.meta.env.BASE_URL}projects/bloggers-create.webp`, `${import.meta.env.BASE_URL}projects/bloggers-article.webp`],
  },
  {
    name: 'COVID-19 Tracker',
    type: 'Health statistics · Flutter app',
    description: 'A statistics dashboard for exploring global and country-specific COVID-19 data with searchable country views.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/sscibrahimtahir190422-sketch/Covid-19-Tracker-App',
    featured: false,
    theme: 'teal',
    images: [`${import.meta.env.BASE_URL}projects/covid-tracker-global.webp`, `${import.meta.env.BASE_URL}projects/covid-tracker-country.webp`, `${import.meta.env.BASE_URL}projects/covid-tracker-countries.webp`],
  },
];

export const skills = ['Flutter','Dart','GetX','MVVM','Supabase','PostgreSQL','Git','GitHub','Responsive UI','REST APIs'];
