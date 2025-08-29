import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BEE_API_KEY = Deno.env.get('BEE_API_KEY');
    
    if (!BEE_API_KEY) {
      console.error('Missing Beefree API key');
      return new Response(
        JSON.stringify({ error: 'Beefree API key not configured' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get the HTML content from the request body
    const htmlContent = await req.text();
    console.log('Converting HTML to JSON, content length:', htmlContent.length);
    
    const response = await fetch('https://api.getbee.io/v1/conversion/html-to-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html',
        'Authorization': `Bearer ${BEE_API_KEY}`
      },
      body: htmlContent
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('HTML to JSON conversion failed:', response.status, errorText);
      throw new Error(`Failed to convert HTML to JSON: ${response.status}`);
    }

    const jsonData = await response.json();
    console.log('HTML to JSON conversion successful');
    
    return new Response(JSON.stringify(jsonData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Conversion error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to convert HTML to JSON',
        details: error.message
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});