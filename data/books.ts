export type Category = { slug: string; name: string; description: string; emoji: string; color: string };
export type Book = { slug: string; title: string; category: string; ages: string; pages: number; description: string; cover: string; featured?: boolean; tags: string[] };

export const categories: Category[] = [
  { slug: "animals", name: "สัตว์น่ารัก", description: "เพื่อนขนปุยและสัตว์จากทุกมุมโลก", emoji: "🐻", color: "bg-orange-100" },
  { slug: "nature", name: "ธรรมชาติ", description: "ดอกไม้ ป่าไม้ และโลกแสนสวย", emoji: "🌻", color: "bg-lime-100" },
  { slug: "vehicles", name: "ยานพาหนะ", description: "รถ เรือ และการผจญภัย", emoji: "🚗", color: "bg-sky-100" },
  { slug: "fantasy", name: "โลกแฟนตาซี", description: "เวทมนตร์ ยูนิคอร์น และความฝัน", emoji: "🦄", color: "bg-violet-100" },
];

export const books: Book[] = [
  { slug: "happy-forest-friends", title: "Happy Forest Friends", category: "animals", ages: "3–6 ปี", pages: 24, description: "ออกเดินทางสู่ป่าแสนอบอุ่นกับหมีน้อย กระต่าย และเพื่อน ๆ ผ่านภาพระบายสีเส้นใหญ่สำหรับมือเล็ก ๆ", cover: "/covers/forest.svg", featured: true, tags: ["สัตว์", "ป่า", "เริ่มต้น"] },
  { slug: "blooming-garden", title: "Blooming Garden", category: "nature", ages: "4–8 ปี", pages: 30, description: "ชวนเด็ก ๆ เติมสีสันให้สวนดอกไม้ ผีเสื้อ และแมลงตัวจิ๋วที่น่ารัก", cover: "/covers/garden.svg", featured: true, tags: ["ดอกไม้", "ธรรมชาติ", "ผ่อนคลาย"] },
  { slug: "wheels-on-the-go", title: "Wheels on the Go", category: "vehicles", ages: "3–7 ปี", pages: 20, description: "รถดับเพลิง รถไฟ เรือ และยานพาหนะหลากหลายรอให้เด็ก ๆ ออกแบบสีสัน", cover: "/covers/vehicles.svg", featured: true, tags: ["รถ", "ผจญภัย", "เส้นใหญ่"] },
  { slug: "unicorn-dreams", title: "Unicorn Dreams", category: "fantasy", ages: "5–9 ปี", pages: 28, description: "โลกแห่งยูนิคอร์น ปราสาท และดาวระยิบระยับสำหรับจินตนาการที่ไม่มีขอบเขต", cover: "/covers/unicorn.svg", featured: true, tags: ["ยูนิคอร์น", "เวทมนตร์", "แฟนตาซี"] },
  { slug: "little-ocean-explorers", title: "Little Ocean Explorers", category: "animals", ages: "4–8 ปี", pages: 26, description: "พบเพื่อนใต้ทะเลตั้งแต่ปลาวาฬจนถึงเต่าทะเลในเล่มสนุก ๆ นี้", cover: "/covers/forest.svg", tags: ["ทะเล", "สัตว์"] },
  { slug: "rainy-day-nature", title: "Rainy Day Nature", category: "nature", ages: "4–8 ปี", pages: 22, description: "เมฆ สายฝน และต้นไม้ช่วยให้วันฝนตกกลายเป็นวันสร้างสรรค์", cover: "/covers/garden.svg", tags: ["ธรรมชาติ", "ฝน"] },
];

export const getBook = (slug: string) => books.find((book) => book.slug === slug);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
