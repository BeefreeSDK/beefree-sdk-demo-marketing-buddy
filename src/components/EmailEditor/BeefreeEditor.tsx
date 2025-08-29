import React, { useEffect, useRef } from 'react';
import BeefreeSDK from '@beefree.io/sdk';

interface BeefreeEditorProps {
  initialTemplate?: object;
  onSave?: (pageJson: string, pageHtml: string) => void;
  onError?: (error: unknown) => void;
}

const BeefreeEditor: React.FC<BeefreeEditorProps> = ({ 
  initialTemplate, 
  onSave, 
  onError 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beeInstance = useRef<BeefreeSDK | null>(null);

  useEffect(() => {
    async function initializeEditor() {
      try {
        // Beefree SDK configuration
        const beeConfig = {
          container: 'beefree-marketing-buddy',
          language: 'en-US',
          onSave: (pageJson: string, pageHtml: string, ampHtml: string | null, templateVersion: number, language: string | null) => {
            console.log('Email saved!', { pageJson, pageHtml, ampHtml, templateVersion, language });
            onSave?.(pageJson, pageHtml);
          },
          onError: (error: unknown) => {
            console.error('Beefree Editor Error:', error);
            onError?.(error);
          }
        };

        // Get authentication token from Supabase Edge Function
        const response = await fetch('https://fwsccottnqsigsqkqejn.supabase.co/functions/v1/bee-auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid: 'marketing-buddy-user' })
        });
      
        if (!response.ok) {
          throw new Error('Failed to authenticate with Beefree');
        }

        const token = await response.json();

        // Initialize the Beefree editor
        const bee = new BeefreeSDK(token);
        beeInstance.current = bee;
        
        // Start with initial template or empty
        await bee.start(beeConfig, initialTemplate || {});
        
      } catch (error) {
        console.error('Error initializing Beefree editor:', error);
        onError?.(error);
      }
    }

    if (containerRef.current) {
      initializeEditor();
    }

    // Cleanup function
    return () => {
      // No destroy method exists on BeefreeSDK, so just clear the reference
      beeInstance.current = null;
    };
  }, [initialTemplate, onSave, onError]);

  return (
    <div
      id="beefree-marketing-buddy"
      ref={containerRef}
      className="w-full h-full"
      style={{
        minHeight: '600px',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
        backgroundColor: 'hsl(var(--background))'
      }}
    />
  );
};

export default BeefreeEditor;