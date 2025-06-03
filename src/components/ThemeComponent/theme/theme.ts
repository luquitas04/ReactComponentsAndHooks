export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    sidebar: {
      background: string;
      text: string;
      hover: string;
    };
  };
}

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    background: '#ffffff',
    text: '#1f2937',
    sidebar: {
      background: '#f3f4f6',
      text: '#111827',
      hover: '#e5e7eb'
    }
  }
};

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    background: '#1e1e1e',
    text: '#f9fafb',
    sidebar: {
      background: '#111827',
      text: '#f3f4f6',
      hover: '#374151'
    }
  }
};