"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "K. Kruljac",
      role: "Recording Artist",
      content:
        "NXT Balkan transformed my career completely. Their production quality is unmatched, and their team truly understands the essence of Balkan music while bringing it to the global stage.",
      rating: 5,
      image: "https://cdn.discordapp.com/attachments/1329893059147862109/1385981578987180123/A9FBD321-D568-43E0-9F30-7BCB18DC45FA.jpg?ex=68595cee&is=68580b6e&hm=00582afbbb08803452c0bdc34f6dcf4ffab1e58383e2ff4eb6ef8f9015500ad8&",
    },
    {
      name: "C. Stojke",
      role: "Singer",
      content:
        "Working with NXT Balkan has been incredible. They have the perfect blend of traditional knowledge and modern innovation. My tracks have never sounded better.",
      rating: 5,
      image: "https://cdn.discordapp.com/attachments/1329893059147862109/1381014903229251738/IMG_20250606_191918_297.webp?ex=6859179a&is=6857c61a&hm=0da4fe127cbb09e5ba1768d56fac4e0aa5a29c98ef73ae188610c60c69a6be5c&",
    },
    {
      name: "M. Stefanović",
      role: "Singer-Songwriter",
      content:
        "The team at NXT Balkan doesn't just produce music – they create experiences. Their attention to detail and passion for Balkan culture is evident in every project.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "S. Stojanović",
      role: "Songwriter",
      content:
        "From recording to promotion, NXT Balkan handled everything professionally. Our album reached audiences we never thought possible. Highly recommended!",
      rating: 4,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text-alt">WHAT CLIENTS SAY</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our artists and collaborators have to say about working with
            NXT Balkan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="professional-card p-8 rounded-2xl h-full hover-card">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-white/40 mr-4" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-lg">{testimonial.content}</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
