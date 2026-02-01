'use client';

import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This platform changed how we build products. We shipped 3x faster.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow"
    },
    {
      quote: "The best investment we made for our startup. Incredible ROI.",
      author: "Marcus Johnson",
      role: "Founder",
      company: "GrowthLabs"
    },
    {
      quote: "Simple, powerful, and exactly what we needed. Highly recommend.",
      author: "Emily Rodriguez",
      role: "Product Lead",
      company: "InnovateCo"
    }
  ];

  return (
    <section style={{ padding: '64px 24px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#111827',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          Loved by teams worldwide
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
