export function trackLinkedIn(conversionId: number) {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: conversionId });
  } else {
    console.warn('LinkedIn Insight Tag no está funcionando correctamente para registar este evento');
  }
}
