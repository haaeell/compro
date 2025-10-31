const products = {
        "fine-robusta": {
                name: "Fine Robusta",
                defect: "< 2 %",
                origin: "Temanggung, Central Java, Indonesia",
                process: "Natural / Dry Process",
                moisture: "12 % – 13.5 %",
                altitude: "900 – 1200 masl",
                tasty: "Bold, low acid, floral",
                desc: "Fine Robusta beans represent the top quality from Temanggung. With less than 2 % defect rate, this coffee delivers a clean cup with smooth floral notes — perfect for premium espresso blends and specialty blends.",
                images: [
                        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200",
                        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200",
                        "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200"
                ]
        },
        "robusta-grade1": {
                name: "Robusta Grade 1",
                defect: "3.3 %",
                origin: "Temanggung, Central Java, Indonesia",
                process: "Natural / Dry Process",
                moisture: "12 % – 13.5 %",
                altitude: "900 – 1200 masl",
                tasty: "Bold, low acid, floral",
                desc: "Robusta Grade 1 offers high consistency and balanced flavor. With low defect rate and deep aroma, it’s ideal for export blends with strong body and mild acidity — perfect for espresso and dark roast coffee.",
                images: [
                        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200",
                        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200",
                        "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200"
                ]
        },
        "robusta-grade2": {
                name: "Robusta Grade 2",
                defect: "8.3 % – 10 %",
                origin: "Temanggung, Central Java, Indonesia",
                process: "Natural / Dry Process",
                moisture: "12 % – 13.5 %",
                altitude: "900 – 1200 masl",
                tasty: "Bold, low acid, floral",
                desc: "Robusta Grade 2 provides an excellent balance between flavor and value. With a slightly higher defect rate, this grade maintains full-bodied richness and consistent cup quality, suitable for commercial and instant coffee production.",
                images: [
                        "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200",
                        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1200",
                        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
                ]
        },
        "robusta-grade3": {
                name: "Robusta Grade 3",
                defect: "14.6 % – 20 %",
                origin: "Temanggung, Central Java, Indonesia",
                process: "Natural / Dry Process",
                moisture: "12 % – 13.5 %",
                altitude: "900 – 1200 masl",
                tasty: "Bold, low acid, floral",
                desc: "Robusta Grade 3 is designed for industrial use, maintaining Temanggung’s characteristic strong body and earthy tones. Ideal for instant mixes and mass roasting with excellent aroma stability.",
                images: [
                        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200",
                        "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?q=80&w=1200",
                        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200"
                ]
        },
        "arabica-fullwashed": {
                name: "Arabica Fullwashed",
                defect: "< 2 %",
                origin: "Java, Indonesia",
                process: "Full Washed",
                moisture: "12 % – 13.5 %",
                altitude: "1200 – 2500 masl",
                tasty: "Fruity, floral",
                desc: "Arabica Fullwashed offers a clean, crisp cup profile with bright acidity and elegant fruit notes. Grown at high altitudes in Java, this coffee reflects the refined taste and smooth clarity of Indonesian Arabica.",
                images: [
                        "https://images.unsplash.com/photo-1559943190-1e4d38c5e2a7?q=80&w=1200",
                        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200",
                        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
                ]
        },
        "arabica-grade1": {
                name: "Arabica Grade 1 Commercial",
                defect: "3.3 %",
                origin: "Java, Indonesia",
                process: "Dry",
                moisture: "12 % – 13.5 %",
                altitude: "1200 – 2500 masl",
                tasty: "Earthy, smokey, fruity",
                desc: "Arabica Grade 1 Commercial features a full-bodied taste with earthy undertones and subtle fruity sweetness — perfect for blends requiring strong aroma and flavor consistency.",
                images: [
                        "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?q=80&w=1200",
                        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200",
                        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
                ]
        },
        "arabica-grade2": {
                name: "Arabica Grade 2 Commercial",
                defect: "8.3 % – 10 %",
                origin: "Java, Indonesia",
                process: "Dry",
                moisture: "12 % – 13.5 %",
                altitude: "1200 – 2500 masl",
                tasty: "Earthy, smokey, fruity",
                desc: "Arabica Grade 2 Commercial provides a bold yet smooth experience, balancing smokey aroma with mild fruitiness. Reliable for blended roasts offering consistent quality and aroma retention.",
                images: [
                        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200",
                        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1200",
                        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
                ]
        },
        "arabica-grade3": {
                name: "Arabica Grade 3 Commercial",
                defect: "14.3 % – 20 %",
                origin: "Java, Indonesia",
                process: "Dry",
                moisture: "12 % – 13.5 %",
                altitude: "1200 – 2500 masl",
                tasty: "Earthy, smokey, fruity",
                desc: "Arabica Grade 3 Commercial offers an affordable yet flavorful option with bold earthy tones and smokey depth. Ideal for instant and large-scale manufacturing while keeping authentic Java character.",
                images: [
                        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200",
                        "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?q=80&w=1200",
                        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200"
                ]
        }
};