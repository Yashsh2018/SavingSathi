const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.savingsathi.com/api/v1';

export const blogAPI = {
  fetchBlogPosts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/extraData/blogs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },
};




