# Yapp360

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Proje Hakkında

Yapp360, kullanıcıların kolayca veri girişi yapabileceği, modern ve performanslı bir web uygulamasıdır. Next.js ile geliştirilmiş olup, hızlı ve SEO dostu bir yapıya sahiptir.

## Kurulum ve Çalıştırma

1. Depoyu klonlayın:  
   ```bash
   git clone https://github.com/ismailtekinn/yapp360.git
   cd yapp360
   ```

2. Gerekli paketleri yükleyin:  
   ```bash
   npm install
   # veya
   yarn
   # veya
   pnpm install
   ```

3. Geliştirme sunucusunu başlatın:  
   ```bash
   npm run dev
   # veya
   yarn dev
   # veya
   pnpm dev
   ```

4. Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Kullanılan Teknolojiler ve Kütüphaneler

- **Next.js:** React tabanlı framework.
- **React:** Kullanıcı arayüzü oluşturmak için.
- **TypeScript:** Daha güvenli ve okunabilir kod için.
- **Tailwind CSS:** Hızlı ve modern CSS framework.
- **Lucide-react:** İkon kütüphanesi.
- **Vercel:** Next.js uygulamasını dağıtmak için (deployment).

## Proje Yapısı ve Mimarisi

- `app/`: Next.js 13 ile gelen yeni dizin yapısı. Sayfalar, layoutlar ve route dosyaları burada bulunur.
- `components/`: Proje genelinde tekrar kullanılabilir bileşenler.
- `public/`: Statik dosyalar (resim, favicon vs.).
- `styles/`: Global stil dosyaları.
- `README.md`: Proje dökümantasyonu.

Veri akışı `useState`, `useEffect` gibi React hook'ları ile yönetilmektedir. Next.js'in sunucu taraflı rendering özelliği gerektiğinde kullanılmaktadır.

## Karşılaşılan Zorluklar ve Çözüm Yaklaşımları

- **Performans Sorunları:** Büyük veri setleri için sayfalama (pagination) sistemi geliştirildi.
- **Responsive Tasarım:** Tailwind CSS kullanılarak tüm ekran boyutlarına uyum sağlandı.
- **Kod Organizasyonu:** Bileşenler modüler şekilde ayrıldı, okunabilirlik artırıldı.
- **SEO Uyumlu Yapı:** Next.js'in SSR özellikleri aktif şekilde kullanıldı.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
