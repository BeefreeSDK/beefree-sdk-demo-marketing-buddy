import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Target, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BuddyMascot from '@/components/BuddyMascot';
import BeefreeEditor from '@/components/EmailEditor/BeefreeEditor';
import { generateEmailTemplate } from '@/utils/emailTemplates';
import { useToast } from '@/components/ui/use-toast';

const EmailEditor: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const campaignType = searchParams.get('campaign') || 'high_value_customers';
  const [campaignData, setCampaignData] = useState<any>(null);
  const [initialTemplate, setInitialTemplate] = useState<any>(null);
  const [isLoadingTemplate, setIsLoadingTemplate] = useState(true);

  // Mock campaign data based on type
  const getCampaignData = (type: string) => {
    const campaignTypes = {
      high_value_customers: {
        name: 'High Value Customers',
        recipients: 1247,
        segments: ['platinum', 'gold'],
        expectedRevenue: '$45,200',
        openRate: '42.1%',
        type: 'VIP Exclusive Campaign'
      },
      new_subscribers: {
        name: 'New Subscribers',
        recipients: 3420,
        segments: ['new', 'welcome'],
        expectedRevenue: '$18,600',
        openRate: '38.9%',
        type: 'Welcome Campaign'
      },
      inactive_users: {
        name: 'Re-engagement List',
        recipients: 892,
        segments: ['inactive', 'churned'],
        expectedRevenue: '$12,300',
        openRate: '29.3%',
        type: 'Win-Back Campaign'
      }
    };
    
    return campaignTypes[type as keyof typeof campaignTypes] || campaignTypes.high_value_customers;
  };

  useEffect(() => {
    const data = getCampaignData(campaignType);
    setCampaignData(data);
    
    // Generate and load initial template
    loadInitialTemplate(campaignType, data);
  }, [campaignType]);

  const loadInitialTemplate = async (type: string, data: any) => {
    try {
      setIsLoadingTemplate(true);
      
      // Generate HTML template
      const htmlTemplate = generateEmailTemplate(type, data);
      
      // Convert HTML to JSON using Supabase Edge Function
      const response = await fetch('https://fwsccottnqsigsqkqejn.supabase.co/functions/v1/html-to-json', {
        method: 'POST',
        headers: { 'Content-Type': 'text/html' },
        body: htmlTemplate
      });
      
      if (!response.ok) {
        throw new Error('Failed to convert template');
      }
      
      const templateJson = await response.json();
      setInitialTemplate(templateJson);
      
    } catch (error) {
      console.error('Error loading template:', error);
      toast({
        title: "Template Loading Error",
        description: "Failed to load the email template. Starting with blank template.",
        variant: "destructive"
      });
      setInitialTemplate({});
    } finally {
      setIsLoadingTemplate(false);
    }
  };

  const handleSave = (pageJson: string, pageHtml: string) => {
    console.log('Email template saved:', { pageJson, pageHtml });
    toast({
      title: "Email Saved!",
      description: "Your email template has been saved successfully.",
    });
  };

  const handleError = (error: any) => {
    console.error('Beefree editor error:', error);
    toast({
      title: "Editor Error",
      description: "There was an issue with the email editor. Please try refreshing the page.",
      variant: "destructive"
    });
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  if (!campaignData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleBackToDashboard}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <BuddyMascot variant="celebrating" size="sm" />
              <div>
                <h1 className="text-xl font-bold text-gradient-buddy">Email Editor</h1>
                <p className="text-sm text-muted-foreground">{campaignData.type}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Performance Banner */}
        <div className="mb-6">
          <Card className="card-buddy bg-gradient-to-r from-success/10 via-primary/10 to-accent/10 border-success/20">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <BuddyMascot variant="celebrating" size="md" />
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-success">
                    🎉 Your last email campaign outperformed the average email marketing campaign by 35%!
                  </h2>
                  <p className="text-muted-foreground">
                    Relive the magic by uploading that email and customizing it now with our AI-powered recommendations.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Campaign Summary */}
        <div className="mb-6">
          <Card className="card-buddy">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Campaign Summary: {campaignData.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-semibold text-lg">{campaignData.recipients.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Recipients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                  <div className="font-semibold text-lg">{campaignData.openRate}</div>
                  <div className="text-sm text-muted-foreground">Expected Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-warning" />
                  </div>
                  <div className="font-semibold text-lg">{campaignData.expectedRevenue}</div>
                  <div className="text-sm text-muted-foreground">Projected Revenue</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div className="font-semibold text-lg">{campaignData.segments.length}</div>
                  <div className="text-sm text-muted-foreground">Segments</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Email Editor */}
        <div className="mb-6">
          <Card className="card-buddy p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Email Design Studio</h3>
              {isLoadingTemplate && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                  Loading template...
                </div>
              )}
            </div>
            
            <div style={{ height: '70vh' }}>
              {!isLoadingTemplate ? (
                <BeefreeEditor 
                  initialTemplate={initialTemplate}
                  onSave={handleSave}
                  onError={handleError}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-muted/20 rounded-lg border border-dashed border-border">
                  <div className="text-center">
                    <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Preparing your email template...</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailEditor;