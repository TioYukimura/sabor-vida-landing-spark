import React, { useEffect } from 'react';

const Reservations = () => {
  useEffect(() => {
    const phoneNumber = "5547984563817"; // Número atualizado
    const message = "Olá! Gostaria de fazer uma reserva no Sabor e Vida.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Redirecionando para o WhatsApp...
        </h1>
        <p className="text-muted-foreground">
          Você será redirecionado para o WhatsApp para confirmar sua reserva.
        </p>
      </div>
    </div>
  );
};

export default Reservations;
