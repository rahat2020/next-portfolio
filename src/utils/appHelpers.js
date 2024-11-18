'use client';

export const alterredUserAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9DBm4up7xkDQKhfO1kvAAwU8Grk36ZywnngllVU&s';

export const dummyBlogThumbnail = 'https://new.axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-12-1440x720.jpg';

export const smallThumbnail = 'https://new.axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-1-300x169.jpg';

export const nuUniversity = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzq3eRXaNw_3L42QicNibFE7wJ61hjuSHPg&s"

export const gainSolution = "https://media.licdn.com/dms/image/v2/C560BAQF7RcGBjjpfLg/company-logo_100_100/company-logo_100_100/0/1674646007895/gain_solutions_ltd_logo?e=1740009600&v=beta&t=l9Fz3mV8tV2dpffc-ScfBDPNUex6TDMDTFOSFrKO4Gc"

export const getCurrentYear = new Date().getFullYear();

export const truncateText = (text, maxLength, ellipsis = '...') => {
    if (typeof text !== 'string' || typeof maxLength !== 'number') {
      console.error(
        'Invalid arguments for truncateText: text must be a string and maxLength must be a number.'
      );
      return text;
    }
  
    if (text.length <= maxLength) return text;
  
    const charsToShow = maxLength - ellipsis.length;
    return text.substring(0, charsToShow) + ellipsis;
  };

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const  checkWindow = ()=>  {
  return (typeof window !== "undefined") ? true : false;
}

export const getPlayerDimensions = (screenSize) => {
    switch (screenSize) {
      case 'xs':
        return { width: '100%', height: 'auto' };
      case 'sm':
        return { width: '300px', height: '180px' };
      case 'md':
        return { width: '330px', height: '200px' };
      case 'lg':
        return { width: '330px', height: '200px' };
      case 'xl':
        return { width: '355px', height: '200px' };
      case 'xxl':
        return { width: '415px', height: '200px' };
      default:
        return { width: '360px', height: '200px' };
    }
  };

 export const getClassName = (params) => {
    const styles = {
      React: 'bg-blue-500 text-white shadow-blue-500/50',
      'Next.js': 'bg-black text-white shadow-gray-500/50',
      'Tailwind CSS': 'bg-blue-500 text-white shadow-teal-500',
      JavaScript: 'bg-yellow text-white shadow-yellow-400/50',
      TypeScript: 'bg-blue-600 text-white shadow-blue-400/50',
      'Vue.js': 'dark:bg-gray-700 text-green shadow-green-500/50',
      Angular: 'dark:bg-gray-700 text-red shadow-red-500/50',
      'Node.js': 'dark:bg-gray-700 text-green shadow-green-600/50',
      Express: 'dark:bg-gray-700 text-gray shadow-gray-300/50',
      HTML5: 'bg-orange-500 text-white',
      CSS3: 'bg-blue-500 text-white shadow-blue-500/50',
      Python: 'dark:bg-gray-700 text-green shadow-green-400/50',
      Vercel: 'dark:bg-gray-700 text-white shadow-gray-400/50',
      Git: 'bg-red-500 text-orange shadow-orange-600/50',
      Webpack: 'dark:bg-gray-700 text-green shadow-green-500/50',
      Figma: 'dark:bg-gray-700 text-pink shadow-pink-400/50',
      Jira: 'dark:bg-gray-700 text-white shadow-blue-500/50',
      Vite: 'dark:bg-gray-700 text-purple shadow-purple-500/50',
      Postman: 'dark:bg-gray-700 text-orange shadow-orange-500/50',
      MongoDB: 'dark:bg-gray-700 text-green shadow-green-500/50',
      GraphQL: 'dark:bg-gray-700 text-pink shadow-pink-500/50',
      'REST API': "RESTful APIs bg-purple-500",
    };
  
    return styles[params] || 'dark:bg-gray-700 text-gray-500 shadow-gray-500/50';
  };