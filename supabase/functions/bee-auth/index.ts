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
    const { uid } = await req.json();
    
    const BEE_CLIENT_ID = Deno.env.get('BEE_CLIENT_ID');
    const BEE_CLIENT_SECRET = Deno.env.get('BEE_CLIENT_SECRET');
    
    if (!BEE_CLIENT_ID || !BEE_CLIENT_SECRET) {
      console.error('Missing Beefree credentials');
      return new Response(
        JSON.stringify({ error: 'Beefree credentials not configured' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Authenticating with Beefree for user:', uid);
    
    const response = await fetch('https://auth.getbee.io/loginV2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: BEE_CLIENT_ID,
        client_secret: BEE_CLIENT_SECRET,
        uid: uid || 'marketing-buddy-user'
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Beefree auth failed:', response.status, errorText);
      throw new Error(`Failed to authenticate with Beefree: ${response.status}`);
    }

    const tokenData = await response.json();
    console.log('Beefree authentication successful');
    
    return new Response(JSON.stringify(tokenData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Auth error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to authenticate with Beefree',
        details: error.message
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});