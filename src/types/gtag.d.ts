// Google Analytics gtag types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_title?: string;
        page_location?: string;
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        send_to?: string;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export {};