import { Product } from './types';

export const CATEGORIES = ["All", "Cleansers", "Serums", "Moisturizers", "Treatments"];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Lumière Silk Cleanser",
    category: "Cleansers",
    price: 34,
    shortDescription: "A gentle, foaming daily cleanser that removes impurities without stripping moisture.",
    fullDescription: "Start your routine with clarity. The Lumière Silk Cleanser transforms from a gel to a luxurious foam, lifting away daily pollutants and makeup while respecting your skin's natural barrier. Infused with chamomile and white tea extracts.",
    ingredients: ["Water", "Glycerin", "Coco-Glucoside", "Chamomile Extract", "White Tea Leaf Extract"],
    rating: 4.8,
    reviewCount: 124,
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "Midnight Repair Serum",
    category: "Serums",
    price: 85,
    shortDescription: "Advanced night recovery complex to smooth fine lines and restore radiance.",
    fullDescription: "Work while you sleep. This potent yet lightweight serum penetrates deep to hydrate and repair environmental damage. Rich in antioxidants and hyaluronic acid, it leaves skin plump and dewy by morning.",
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Niacinamide", "Peptides", "Rosehip Oil"],
    rating: 4.9,
    reviewCount: 312,
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "Daily Defense Moisturizer",
    category: "Moisturizers",
    price: 48,
    shortDescription: "Lightweight hydration with invisible SPF 30 protection.",
    fullDescription: "Your daily shield. This fast-absorbing moisturizer provides lasting hydration while protecting against UV rays and blue light. Non-greasy and perfect under makeup.",
    ingredients: ["Zinc Oxide", "Squalane", "Green Tea Extract", "Aloe Vera"],
    rating: 4.7,
    reviewCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p4",
    name: "Glow Radiance Oil",
    category: "Treatments",
    price: 62,
    shortDescription: "A nutrient-rich face oil for an instant healthy glow.",
    fullDescription: "Lock in moisture and luminosity. Our signature blend of cold-pressed botanical oils helps balance sebum production while providing a breathable barrier against the elements.",
    ingredients: ["Jojoba Oil", "Marula Oil", "Vitamin C", "Bergamot"],
    rating: 5.0,
    reviewCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p5",
    name: "Hydrating Rose Mist",
    category: "Treatments",
    price: 28,
    shortDescription: "Refreshing facial mist to tone and revive tired skin.",
    fullDescription: "A midday pick-me-up. Pure organic rose water blended with witch hazel instantly soothes redness and tightens pores. Keep it in your bag for hydration on the go.",
    ingredients: ["Rose Water", "Witch Hazel", "Glycerin"],
    rating: 4.6,
    reviewCount: 204,
    imageUrl: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p6",
    name: "Peptide Eye Cream",
    category: "Moisturizers",
    price: 54,
    shortDescription: "Targeted treatment for dark circles and puffiness.",
    fullDescription: "Awaken your eyes. This rich cream targets delicate under-eye skin with caffeine and peptides to reduce puffiness and brighten dark circles over time.",
    ingredients: ["Caffeine", "Peptides", "Shea Butter", "Cucumber Extract"],
    rating: 4.5,
    reviewCount: 145,
    imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1000&auto=format&fit=crop"
  }
];