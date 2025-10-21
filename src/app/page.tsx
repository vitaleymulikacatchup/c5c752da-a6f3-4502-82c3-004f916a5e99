"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Calendar, ChefHat, Clock, Heart, MapPin, MessageCircle, Sparkles, Star, Sunrise, TrendingUp, Users } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"bakery-logo","url":"https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Freshly sliced whole grain bread with oats and flour provides a rustic and nutritious appeal."},
  {"id":"hero-bakery","url":"https://images.pexels.com/photos/30811295/pexels-photo-30811295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Fresh pastries and sandwiches on display at a bakery in Valencia, Spain."},
  {"id":"about-baking","url":"https://images.pexels.com/photos/34363022/pexels-photo-34363022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of hands rolling dough with a pin on a flour-dusted wooden table."},
  {"id":"fresh-bread-feature","url":"https://images.pexels.com/photos/105861/pexels-photo-105861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Artistic close-up of rustic bread loaves in a basket, highlighting texture and warm tones. Perfect for food themes."},
  {"id":"pastries-feature","url":"https://images.pexels.com/photos/9242434/pexels-photo-9242434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious assortment of pastries including chocolate-filled croissants and cinnamon twists."},
  {"id":"custom-cakes-feature","url":"https://images.pexels.com/photos/29036624/pexels-photo-29036624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Charming red cake with teddy bear topper ideal for birthday celebrations."},
  {"id":"sourdough-product","url":"https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Freshly sliced whole grain bread with oats and flour provides a rustic and nutritious appeal."},
  {"id":"croissant-product","url":"https://images.pexels.com/photos/4828275/pexels-photo-4828275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A delicious golden croissant photographed on a minimalist surface, perfect for breakfast themes."},
  {"id":"chocolate-cake-product","url":"https://images.pexels.com/photos/30700682/pexels-photo-30700682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Indulge in this rich chocolate hazelnut cake topped with sweets, perfect for dessert lovers."},
  {"id":"team-baker-1","url":"https://images.pexels.com/photos/6605253/pexels-photo-6605253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling chef in apron holding pizza boxes in a Portuguese restaurant."},
  {"id":"team-baker-2","url":"https://images.pexels.com/photos/7966418/pexels-photo-7966418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Asian woman baker holding a loaf of bread with various baked goods on a table, showcasing her craftsmanship."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/5709708/pexels-photo-5709708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman enjoying a morning coffee and pastry at home, captured indoors with a warm ambiance."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/2349995/pexels-photo-2349995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Person holding a tray with freshly baked bread in an indoor setting, ready to be served."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/3985080/pexels-photo-3985080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A joyful moment of a mother and her daughter choosing pastries in a supermarket."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/4473507/pexels-photo-4473507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling barista serving a young girl at a quaint café counter with wooden decor."},
  {"id":"contact-bakery","url":"https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Inviting bakery interior showcasing a variety of fresh breads and pastries on display in a warm setting."}
];

export default function Home() {
  const _logoAsset = assetMap.find(a => a.id === "bakery-logo");
  const logoSrc = _logoAsset?.url ?? "/public/images/placeholder.webp";
  const logoAlt = _logoAsset?.alt ?? "Sweet Delights Bakery";

  const _heroAsset = assetMap.find(a => a.id === "hero-bakery");
  const heroImageSrc = _heroAsset?.url ?? "/public/images/placeholder.webp";
  const heroImageAlt = _heroAsset?.alt ?? "Fresh artisan breads and pastries display";

  const _aboutAsset = assetMap.find(a => a.id === "about-baking");
  const aboutImageSrc = _aboutAsset?.url ?? "/public/images/placeholder.webp";
  const aboutImageAlt = _aboutAsset?.alt ?? "Master baker working with traditional techniques";

  const _freshBreadAsset = assetMap.find(a => a.id === "fresh-bread-feature");
  const freshBreadImageSrc = _freshBreadAsset?.url ?? "/public/images/placeholder.webp";
  const freshBreadImageAlt = _freshBreadAsset?.alt ?? "Fresh artisan bread loaves";

  const _pastriesAsset = assetMap.find(a => a.id === "pastries-feature");
  const pastriesImageSrc = _pastriesAsset?.url ?? "/public/images/placeholder.webp";
  const pastriesImageAlt = _pastriesAsset?.alt ?? "Elegant French pastries display";

  const _cakesAsset = assetMap.find(a => a.id === "custom-cakes-feature");
  const cakesImageSrc = _cakesAsset?.url ?? "/public/images/placeholder.webp";
  const cakesImageAlt = _cakesAsset?.alt ?? "Custom decorated celebration cake";

  const _sourdoughAsset = assetMap.find(a => a.id === "sourdough-product");
  const sourdoughImageSrc = _sourdoughAsset?.url ?? "/public/images/placeholder.webp";
  const sourdoughImageAlt = _sourdoughAsset?.alt ?? "Classic sourdough bread";

  const _croissantAsset = assetMap.find(a => a.id === "croissant-product");
  const croissantImageSrc = _croissantAsset?.url ?? "/public/images/placeholder.webp";
  const croissantImageAlt = _croissantAsset?.alt ?? "Fresh butter croissants";

  const _chocolateAsset = assetMap.find(a => a.id === "chocolate-cake-product");
  const chocolateImageSrc = _chocolateAsset?.url ?? "/public/images/placeholder.webp";
  const chocolateImageAlt = _chocolateAsset?.alt ?? "Rich chocolate layer cake";

  const _teamBaker1Asset = assetMap.find(a => a.id === "team-baker-1");
  const teamBaker1ImageSrc = _teamBaker1Asset?.url ?? "/public/images/placeholder.webp";
  const teamBaker1ImageAlt = _teamBaker1Asset?.alt ?? "Portrait of Marie Dubois, Head Baker";

  const _teamBaker2Asset = assetMap.find(a => a.id === "team-baker-2");
  const teamBaker2ImageSrc = _teamBaker2Asset?.url ?? "/public/images/placeholder.webp";
  const teamBaker2ImageAlt = _teamBaker2Asset?.alt ?? "Portrait of Sophie Laurent, Pastry Chef";

  const _testimonial1Asset = assetMap.find(a => a.id === "testimonial-1");
  const testimonial1ImageSrc = _testimonial1Asset?.url ?? "/public/images/placeholder.webp";
  const testimonial1ImageAlt = _testimonial1Asset?.alt ?? "Sarah Johnson enjoying pastry";

  const _testimonial2Asset = assetMap.find(a => a.id === "testimonial-2");
  const testimonial2ImageSrc = _testimonial2Asset?.url ?? "/public/images/placeholder.webp";
  const testimonial2ImageAlt = _testimonial2Asset?.alt ?? "Michael Chen with bread loaf";

  const _testimonial3Asset = assetMap.find(a => a.id === "testimonial-3");
  const testimonial3ImageSrc = _testimonial3Asset?.url ?? "/public/images/placeholder.webp";
  const testimonial3ImageAlt = _testimonial3Asset?.alt ?? "Emily Rodriguez family celebration";

  const _testimonial4Asset = assetMap.find(a => a.id === "testimonial-4");
  const testimonial4ImageSrc = _testimonial4Asset?.url ?? "/public/images/placeholder.webp";
  const testimonial4ImageAlt = _testimonial4Asset?.alt ?? "David Kim in coffee shop";

  const _contactAsset = assetMap.find(a => a.id === "contact-bakery");
  const contactImageSrc = _contactAsset?.url ?? "/public/images/placeholder.webp";
  const contactImageAlt = _contactAsset?.alt ?? "Cozy bakery interior with display cases";

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          brandName="Sweet Delights"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fresh Baked Daily"
          description="Artisan breads, pastries, and custom cakes made with love and the finest ingredients. Experience the warmth of traditional baking."
          tag="Family Bakery"
          tagIcon={Heart}
          buttons={[
            {
              text: "View Menu",
              href: "product"
            },
            {
              text: "Order Online",
              href: "contact"
            }
          ]}
          imageSrc={heroImageSrc}
          imageAlt={heroImageAlt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Three generations of baking expertise brought together with passion for creating exceptional breads, pastries, and custom cakes using traditional methods and premium ingredients."
          tag="Since 1952"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Traditional Methods",
              description: "Time-honored techniques passed down through generations",
              icon: Clock
            },
            {
              title: "Premium Ingredients",
              description: "Only the finest flour, butter, and organic materials",
              icon: Star
            },
            {
              title: "Daily Fresh",
              description: "Everything baked fresh every morning before opening",
              icon: Sunrise
            }
          ]}
          imageSrc={aboutImageSrc}
          imageAlt={aboutImageAlt}
          imagePosition="left"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="What Makes Us Special"
          description="Discover the craftsmanship and care that goes into every item we create"
          tag="Our Specialties"
          tagIcon={ChefHat}
          features={[
            {
              id: "01",
              title: "Artisan Breads",
              description: "Hand-crafted sourdough, whole grain, and specialty loaves baked to perfection",
              imageSrc: freshBreadImageSrc,
              imageAlt: freshBreadImageAlt
            },
            {
              id: "02",
              title: "French Pastries",
              description: "Buttery croissants, delicate macarons, and classic French pastries",
              imageSrc: pastriesImageSrc,
              imageAlt: pastriesImageAlt
            },
            {
              id: "03",
              title: "Custom Cakes",
              description: "Beautiful celebration cakes designed for your special moments",
              imageSrc: cakesImageSrc,
              imageAlt: cakesImageAlt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Daily Selections"
          description="Fresh baked goods available daily, made with premium ingredients"
          tag="Fresh Daily"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              brand: "Sweet Delights",
              name: "Classic Sourdough Loaf",
              price: "$8.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: sourdoughImageSrc,
              imageAlt: sourdoughImageAlt
            },
            {
              id: "2",
              brand: "Sweet Delights",
              name: "Butter Croissants (6-pack)",
              price: "$12.00",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: croissantImageSrc,
              imageAlt: croissantImageAlt
            },
            {
              id: "3",
              brand: "Sweet Delights",
              name: "Chocolate Layer Cake",
              price: "$28.00",
              rating: 5,
              reviewCount: "950",
              imageSrc: chocolateImageSrc,
              imageAlt: chocolateImageAlt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievement"
          description="Numbers that showcase our commitment to quality and community"
          tag="Since 1952"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "72",
              title: "years",
              description: "Of baking excellence and tradition",
              icon: Calendar
            },
            {
              id: "2",
              value: "15K+",
              title: "customers",
              description: "Happy families served monthly",
              icon: Users
            },
            {
              id: "3",
              value: "500+",
              title: "recipes",
              description: "Traditional and modern creations",
              icon: BookOpen
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Bakers"
          description="The passionate artisans behind every delicious creation"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marie Dubois",
              role: "Head Baker",
              imageSrc: teamBaker1ImageSrc,
              imageAlt: teamBaker1ImageAlt
            },
            {
              id: "2",
              name: "Sophie Laurent",
              role: "Pastry Chef",
              imageSrc: teamBaker2ImageSrc,
              imageAlt: teamBaker2ImageAlt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real testimonials from our valued customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Food Blogger",
              testimonial: "The sourdough here is absolutely incredible. You can taste the tradition and care in every bite. This bakery is a true neighborhood gem.",
              imageSrc: testimonial1ImageSrc,
              imageAlt: testimonial1ImageAlt
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Regular Customer",
              testimonial: "I've been coming here for over 10 years. The quality never disappoints, and the staff treats you like family. Best croissants in the city!",
              imageSrc: testimonial2ImageSrc,
              imageAlt: testimonial2ImageAlt
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Customer",
              testimonial: "They made our wedding cake and it was absolutely perfect. Beautiful design and tasted even better than it looked. Highly recommend!",
              imageSrc: testimonial3ImageSrc,
              imageAlt: testimonial3ImageAlt
            },
            {
              id: "4",
              name: "David Kim",
              role: "Coffee Shop Owner",
              testimonial: "We source our pastries from Sweet Delights and our customers rave about them. Consistent quality and always fresh delivery.",
              imageSrc: testimonial4ImageSrc,
              imageAlt: testimonial4ImageAlt
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Experience Fresh Baking Daily"
          description="Stop by our bakery to enjoy fresh breads, pastries, and custom cakes. We're open early to serve you the best of what we bake each morning."
          inputPlaceholder="Enter your email for updates"
          buttonText="Stay Updated"
          termsText="Get notified about our daily specials and seasonal treats. Unsubscribe anytime."
          imageSrc={contactImageSrc}
          imageAlt={contactImageAlt}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Fresh Breads",
                  href: "products"
                },
                {
                  label: "Pastries",
                  href: "products"
                },
                {
                  label: "Custom Cakes",
                  href: "products"
                },
                {
                  label: "Seasonal Items",
                  href: "products"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Meet the Team",
                  href: "team"
                },
                {
                  label: "Baking Process",
                  href: "about"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Visit Us",
                  href: "contact"
                },
                {
                  label: "Order Online",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            }
          ]}
          logoSrc={logoSrc}
          copyrightText="© 2025 | Sweet Delights Bakery"
        />
      </div>
    </ThemeProvider>
  );
}