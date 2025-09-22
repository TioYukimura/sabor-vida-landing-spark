import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import picanhaImage from '@/assets/picanha-premium.jpg';
import costelaImage from '@/assets/costela-suina.jpg';
import fraldinhaImage from '@/assets/fraldinha.jpg';

const Menu = () => {
  const navigate = useNavigate();

  const menuCategories = [
    {
      title: "Cortes Premium",
      items: [
        {
          name: "Picanha Premium",
          description: "Corte nobre, suculento e macio, grelhado no ponto perfeito",
          price: "R$ 89,90",
          image: picanhaImage
        },
        {
          name: "Costela Suína Especial",
          description: "Costela suína ao molho especial da casa, lentamente grelhada",
          price: "R$ 75,90",
          image: costelaImage
        },
        {
          name: "Fraldinha Suave",
          description: "Corte macio e saboroso, temperado com ervas especiais",
          price: "R$ 68,90",
          image: fraldinhaImage
        }
      ]
    },
    {
      title: "Rodízio Tradicional",
      items: [
        {
          name: "Rodízio Clássico",
          description: "Inclui: Picanha, Alcatra, Fraldinha, Linguiça, Coração de Frango + Buffet de Saladas",
          price: "R$ 89,90"
        },
        {
          name: "Rodízio Premium",
          description: "Todos os cortes + Maminha, Costela, File Mignon + Buffet Completo + Sobremesa",
          price: "R$ 129,90"
        },
        {
          name: "Rodízio Kids",
          description: "Porções menores dos cortes principais + Buffet + Suco Natural",
          price: "R$ 45,90"
        }
      ]
    },
    {
      title: "Acompanhamentos",
      items: [
        {
          name: "Farofa da Casa",
          description: "Farofa especial com bacon e linguiça",
          price: "R$ 18,90"
        },
        {
          name: "Pão de Alho",
          description: "Pão artesanal com alho e ervas finas",
          price: "R$ 12,90"
        },
        {
          name: "Mandioca Frita",
          description: "Mandioca fresquinha frita na hora",
          price: "R$ 16,90"
        },
        {
          name: "Vinagrete Especial",
          description: "Vinagrete da casa com ingredientes frescos",
          price: "R$ 14,90"
        }
      ]
    },
    {
      title: "Bebidas",
      items: [
        {
          name: "Cerveja Artesanal",
          description: "Cerveja da casa, gelada e refrescante",
          price: "R$ 8,90"
        },
        {
          name: "Caipirinha Premium",
          description: "Cachaça premium com frutas da estação",
          price: "R$ 16,90"
        },
        {
          name: "Suco Natural",
          description: "Sucos de frutas frescas: Laranja, Limão, Caju",
          price: "R$ 9,90"
        },
        {
          name: "Refrigerante",
          description: "Coca-Cola, Guaraná, Fanta - Lata gelada",
          price: "R$ 6,90"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Menu Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-foreground mb-4">
            Nosso <span className="gradient-text">Cardápio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra os sabores únicos que fazem de cada refeição uma experiência inesquecível
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover:shadow-glow transition-all duration-300 group">
                    {item.image && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold text-foreground">
                          {item.name}
                        </CardTitle>
                        <span className="text-xl font-bold gradient-text">
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Pronto para uma experiência única?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reserve sua mesa agora e desfrute do melhor churrasco da cidade em um ambiente acolhedor e sofisticado.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 shadow-button hover:shadow-lg transition-all"
              onClick={() => navigate('/')}
            >
              Reservar Mesa
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;