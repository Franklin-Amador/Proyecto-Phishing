interface Persona {
    id: number;
    nombre: string;
    email: string;
    password: string;
  }

  interface PersonaCardProps {
    id: number;
    nombre: string;
    email: string;
    password: string;
  }

  interface PersonaPost{
    email: string;
    password: string;
  }
  
  interface PersonasPageProps {
    personas: Persona[];
  }
  