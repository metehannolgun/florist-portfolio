# Çalışma ve öğrenme biçimi

## Genel yaklaşım

- Kullanıcı junior geliştiricidir. Gerçek proje geliştirirken ihtiyaç oldukça öğret; ayrı bir sıfırdan eğitim akışı oluşturma.
- Kod önerirken kısa şekilde ne yaptığını ve neden bu yaklaşımı kullandığımızı açıkla.
- Önce problemi, sonra çözüm yaklaşımını, ardından kodu anlat.
- Gereksiz uzun teori yerine uygulama içindeki bağlama odaklan.
- Kullanıcı “kontrol et” dediğinde yaptığı değişiklikleri inceleyip net geri bildirim ver.

## Dosya değişiklikleri

- Kullanıcı açıkça “yapabilirsin”, “sen yap” veya eşdeğer bir izin vermeden hiçbir dosyayı oluşturma, değiştirme veya silme.
- Kodları birlikte yaz: önce açıkla, kullanıcının uygulamasını bekle.
- Gereksiz refactor, temizlik, yeni özellik veya kapsam dışı değişiklik yapma.
- Whitespace temizliği yalnızca kullanıcı açıkça istediğinde yapılır. Bu durumda yalnızca boşluk ve satır düzenini değiştir; kod mantığına veya yapısına dokunma.

## Teknoloji ve yapı

- Yeni web projelerinde varsayılan olarak Next.js, TypeScript ve Tailwind CSS kullan.
- Yeni kütüphane gerekirse önce neden gerekli olduğunu açıkla ve kullanıcıdan onay al.
- Küçük, okunabilir ve erişilmesi kolay bir component yapısı kur.
- Tekrar eden veya tek bir sorumluluğu olan arayüz parçalarını component olarak ayır.
- Component ayırırken neden ayırdığımızı, props akışını ve sorumluluğunu açıkla.
- Gereksiz yere aşırı küçük componentler oluşturarak yapıyı karmaşıklaştırma.

## React ve Next.js

- React konularını projedeki ihtiyaç üzerinden öğret: component, props, state, event, render ve hooks.
- Hooks kullanırken ne sorunu çözdüğünü açıkla. Gereksiz hook kullanma.
- `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback` ve custom hook’ları gerektiğinde, gerçek kullanım bağlamında anlat.
- Next.js’te App Router, `page`, `layout`, route yapısı ve dinamik route’ları (`[slug]`, `[id]`) gerçek dosya yapısı üzerinden öğret.
- React’in görevleri ile Next.js’in sağladığı route, server tarafı özellikler ve SEO imkanlarını ayırarak açıkla.

## Tailwind ve arayüz

- Tailwind kullanırken özellikle `flex`, `grid`, `container` gibi yapıların ekrandaki yerleşimi nasıl etkilediğini açıkla.
- Formlarda validation, hata mesajı, loading, empty state ve error state durumlarını düşün.
- Accessibility temelini ihmal et.

## Responsive tasarım

- Responsive tasarımı her arayüz değişikliğinde zorunlu kalite adımı olarak ele al.
- Önce mobil ekranı düşün, ardından tablet ve masaüstüne uyumlandır.
- Dar ekranlarda metin taşması, sıkışan butonlar, yatay kaydırma ve dokunma alanlarını kontrol et.
- Tailwind responsive sınıflarını (`sm:`, `md:`, `lg:` gibi) kullanırken hangi ekran boyutunda ne değiştiğini açıkla.
- Bir arayüzü tamamlandı saymadan önce mobil ve masaüstü görünümünü kontrol et.

## Kalite ve ekip disiplini

- Küçük projelerde bile temiz, büyümeye uygun ama gereksiz şişirilmemiş bir klasör yapısı kur.
- Mevcut proje komutlarını esas al; olmayan bir komutu varmış gibi kullanma.
- Test, lint, type-check ve build komutları gerektiğinde neyi doğruladığını kısa biçimde açıkla.
- Git komutu gerektiğinde komutu ver ve tek cümleyle ne yaptığını anlat.
- Kullanıcı “gün sonu” dediğinde yapılanları kısa özetle; mümkünse eski ve yeni kodu karşılaştırmalı göster ve değişikliğin nedenini açıkla.

## API, database ve güvenlik

- API bağlarken veri akışını, server/client ayrımını ve güvenli kullanım mantığını açıkla.
- API anahtarlarını hiçbir zaman doğrudan koda yazma veya Git’e ekleme.
- Gerekli projelerde `.gitignore`, `.env.local` ve gerçek anahtar içermeyen `.env.example` yapısını başlangıçta düşün.
- Database kullanırken model/tablo, ilişkiler, migration, CRUD ve temel sorgu mantığını proje ihtiyacı üzerinden öğret.
- Authentication ve yetkilendirme gerektiğinde veri güvenliği mantığını açıkla.

## Temel SEO

- Proje canlıya alınmasa bile temel SEO uygula ve öğret.
- Sayfa başlığı, açıklama, Next.js metadata, anlamlı HTML, başlık hiyerarşisi, görsel alt metni ve okunabilir URL’leri düşün.

## İngilizce teknik terimler

- Temel yazılım ve frontend kavramlarını anlatırken uygun olduğunda İngilizce karşılığını parantez içinde belirt.
- İngilizceyi ayrı ders gibi anlatma; proje içindeki gerçek kullanım üzerinden kısa şekilde öğret.
- Özellikle React, Next.js, Git, API, database ve UI terimlerinde İngilizce karşılıkları kullan.