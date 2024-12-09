export const getUsuarios = async () => {
  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, { 
        next: { 
          tags: ['users'], 
          revalidate: 0 
        } 
      });
      
      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error fetching users: ${response.status} ${errorText}`);
      }
      return response.json();
  } catch (error) {
      console.error('Fetch error:', error);
      throw error;
  }
};