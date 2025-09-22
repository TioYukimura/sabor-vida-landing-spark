import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import heroImage from '@/assets/hero-churrasco.jpg';
import restaurantAmbiance from '@/assets/restaurant-ambiance.jpg';
import picanhaImage from '@/assets/picanha-premium.jpg';
import costelaImage from '@/assets/costela-suina.jpg';
import fraldinhaImage from '@/assets/fraldinha.jpg';

const Index = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      name: "Picanha Premium",
      description: "Corte nobre grelhado na perfeição, temperado com sal grosso e ervas especiais",
      price: "R$ 89,90",
      image: picanhaImage
    },
    {
      name: "Costela Suína ao Molho Especial",
      description: "Costela suculenta cozida lentamente em molho secreto da casa",
      price: "R$ 75,90",
      image: costelaImage
    },
    {
      name: "Fraldinha Suave",
      description: "Corte macio e saboroso, grelhado ao ponto ideal com temperos artesanais",
      price: "R$ 68,90",
      image: fraldinhaImage
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      rating: 5,
      comment: "Melhor churrascaria da cidade, atendimento impecável!",
      avatar: "MS"
    },
    {
      name: "João Silva",
      rating: 5,
      comment: "Sabor incomparável e ambiente acolhedor.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Experiência gastronômica única! Voltarei sempre.",
      avatar: "AC"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-foreground/80 hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">Sobre</a>
            <a href="#reservas" className="text-foreground/80 hover:text-primary transition-colors">Reservas</a>
            <a href="#contato" className="text-foreground/80 hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <img 
          src={heroImage} 
          alt="Churrasco premium Sabor e Vida" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-content container mx-auto px-6 text-center">
          <h1 className="hero-title mb-6">
            O Verdadeiro Sabor da Vida em Cada Corte
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Churrascos premium preparados com maestria para uma experiência inesquecível
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero text-xl px-12 py-6">
              Reserve sua Mesa
            </Button>
            <Button 
              className="btn-secondary text-xl px-12 py-6"
              onClick={() => navigate('/menu')}
            >
              Ver Cardápio
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left">Nossa Paixão pelo Churrasco</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                No Sabor e Vida, celebramos a tradição brasileira do churrasco com cortes premium 
                e técnicas refinadas. Nossa paixão pela perfeição culinária se reflete em cada 
                prato servido.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Proporcionamos momentos inesquecíveis, onde o sabor autêntico encontra a 
                hospitalidade genuína, criando experiências que ficam na memória.
              </p>
              <Button className="btn-hero">
                Conheça Nossa História
              </Button>
            </div>
            <div className="relative">
              <img 
                src={restaurantAmbiance} 
                alt="Ambiente acolhedor do restaurante Sabor e Vida" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="section-title gradient-text">Sabores que Falam por Si</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card key={index} className="menu-item group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Special Offer */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Experiência Completa</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Rodízio Tradicional</h3>
                <div className="text-4xl font-black gradient-text mb-4">R$ 89,90</div>
                <p className="text-muted-foreground mb-6">
                  Cortes selecionados, acompanhamentos e sobremesa
                </p>
                <Button className="btn-secondary w-full">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-lift border-primary/40">
              <CardContent className="p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Rodízio Premium</h3>
                <div className="text-4xl font-black gradient-text mb-4">R$ 129,90</div>
                <p className="text-muted-foreground mb-6">
                  Cortes especiais, acompanhamentos gourmet e sobremesa premium
                </p>
                <Button className="btn-hero w-full">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg font-semibold gradient-text">
              🎉 Desconto de 10% para reservas online!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="section-title">O que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {testimonial.avatar}
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold gradient-text">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 px-6" style={{ background: 'var(--gradient-primary)' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6">
            Reserve sua Mesa e Viva o Melhor do Churrasco!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de viver uma experiência gastronômica única
          </p>
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-12 py-6 font-bold">
            Reservar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Slogan */}
            <div className="md:col-span-2">
              <div className="text-3xl font-black gradient-text mb-4">Sabor e Vida</div>
              <p className="text-muted-foreground mb-6 text-lg">
                O Sabor que Celebra a Vida
              </p>
              <div className="flex gap-4">
                <Button size="sm" className="bg-primary/20 hover:bg-primary">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" className="bg-primary/20 hover:bg-primary">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" className="bg-primary/20 hover:bg-primary">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 gradient-text">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
                <li><a href="#reservas" className="text-muted-foreground hover:text-primary transition-colors">Reservas</a></li>
                <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 gradient-text">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Rua das Carnes, 123<br />São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">(11) 98765-4321</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Seg–Dom: 12h – 23h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Sabor e Vida. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="btn-hero w-16 h-16 rounded-full shadow-2xl float-animation">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;