import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatsCard from './StatsCard';
import RevenuePrediction from './RevenuePrediction';
import RecommendationEngine from './RecommendationEngine';
import CampaignBuilder from './CampaignBuilder';
import BuddyMascot from '@/components/BuddyMascot';
import BeefreeEditor from '@/components/EmailEditor/BeefreeEditor';
import SettingsPopup from './SettingsPopup';
import ABTestPopup from './ABTestPopup';
import SchedulePopup from './SchedulePopup';
import CalendarPopup from './CalendarPopup';
import { generateEmailTemplate } from '@/utils/emailTemplates';
import { useToast } from '@/components/ui/use-toast';
import {
  Mail,
  Users,
  TrendingUp,
  DollarSign,
  MousePointer,
  Target,
  BarChart3,
  Calendar,
  Plus,
  Edit
} from 'lucide-react';

const MarketingDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<string>('PROD-101');
  const [selectedDataFeed, setSelectedDataFeed] = useState<string>('');
  const [campaignData, setCampaignData] = useState<any>(null);
  
  // Popup states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isABTestOpen, setIsABTestOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // Email editor states
  const [initialTemplate, setInitialTemplate] = useState<any>(null);
  const [isLoadingTemplate, setIsLoadingTemplate] = useState(false);

  // Mock campaign analytics data
  const [analytics, setAnalytics] = useState({
    totalCampaigns: 24,
    totalRevenue: 127500,
    avgOpenRate: 34.5,
    avgClickRate: 8.7,
    avgConversionRate: 2.3,
    recipientCount: 15420,
    recentCampaigns: [
      { id: 1, name: 'Summer Sale 2024', revenue: 45200, openRate: 42.1, sentDate: '2024-07-15' },
      { id: 2, name: 'Product Launch', revenue: 32800, openRate: 38.9, sentDate: '2024-07-10' },
      { id: 3, name: 'Newsletter #47', revenue: 18600, openRate: 29.3, sentDate: '2024-07-05' },
    ]
  });

  useEffect(() => {
    if (selectedDataFeed) {
      // Mock campaign data when data feed is selected
      setCampaignData({
        segment: selectedDataFeed,
        recipientCount: Math.floor(Math.random() * 5000) + 1000,
        offerType: 'promotional',
        contentLength: 1200,
        featuredProducts: 3
      });
    }
  }, [selectedDataFeed]);

  const handleLaunchEditor = () => {
    navigate('/email-editor');
  };

  const handleStatsCardClick = (title: string) => {
    if (title === 'Total Revenue') {
      navigate('/revenue-analytics');
    } else if (title === 'Total Campaigns') {
      navigate('/analytics/total-campaigns');
    } else if (title === 'Avg. Open Rate') {
      navigate('/analytics/avg-open-rate');
    } else if (title === 'Total Subscribers') {
      navigate('/analytics/total-subscribers');
    }
  };

  const handleViewCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleNewCampaign = () => {
    navigate('/email-editor');
  };

  const handleViewAnalytics = () => {
    navigate('/analytics');
  };

  const handleBuildAndEditEmails = () => {
    // Load template and scroll to email editor
    loadEmailTemplate();
    setTimeout(() => {
      document.getElementById('email-design-studio')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const loadEmailTemplate = async () => {
    try {
      setIsLoadingTemplate(true);
      
      // Generate HTML template for high value customers as default
      const mockCampaignData = {
        name: 'High Value Customers',
        recipients: 1247,
        segments: ['platinum', 'gold'],
        expectedRevenue: '$45,200',
        openRate: '42.1%',
        type: 'VIP Exclusive Campaign'
      };
      
      const htmlTemplate = generateEmailTemplate('high_value_customers', mockCampaignData);
      
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

  const handleEmailSave = (pageJson: string, pageHtml: string) => {
    console.log('Email template saved:', { pageJson, pageHtml });
    toast({
      title: "Email Saved!",
      description: "Your email template has been saved successfully.",
    });
  };

  const handleEmailError = (error: any) => {
    console.error('Beefree editor error:', error);
    toast({
      title: "Editor Error", 
      description: "There was an issue with the email editor. Please try refreshing the page.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BuddyMascot variant="welcome" size="md" />
              <div>
                <h1 className="text-2xl font-bold text-gradient-buddy">Marketing Buddy</h1>
                <p className="text-sm text-muted-foreground">Your AI-powered marketing companion</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleViewCalendar}>
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
              <Button variant="outline" size="sm" onClick={handleBuildAndEditEmails}>
                <Edit className="h-4 w-4 mr-2" />
                Build and Edit Emails
              </Button>
              <Button variant="buddy" size="sm" onClick={handleNewCampaign}>
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="card-buddy bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <BuddyMascot variant="celebrating" size="lg" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Welcome back, Marketing Pro! 🚀</h2>
                  <p className="text-muted-foreground mb-4">
                    Ready to create amazing campaigns that convert? Let's boost those numbers together!
                  </p>
                  <div className="flex gap-3">
                    <Button variant="primary-gradient" size="sm" onClick={handleViewAnalytics}>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button variant="outline" size="sm">
                      <Target className="h-4 w-4 mr-2" />
                      Campaign Tips
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div onClick={() => handleStatsCardClick('Total Campaigns')} className="cursor-pointer">
            <StatsCard
              title="Total Campaigns"
              value={analytics.totalCampaigns}
              change={12.5}
              changeLabel="vs last month"
              icon={<Mail className="h-5 w-5" />}
              variant="primary"
            />
          </div>
          <div onClick={() => handleStatsCardClick('Total Revenue')} className="cursor-pointer">
            <StatsCard
              title="Total Revenue"
              value={`$${analytics.totalRevenue.toLocaleString()}`}
              change={8.3}
              changeLabel="vs last month"
              icon={<DollarSign className="h-5 w-5" />}
              variant="success"
            />
          </div>
          <div onClick={() => handleStatsCardClick('Avg. Open Rate')} className="cursor-pointer">
            <StatsCard
              title="Avg. Open Rate"
              value={`${analytics.avgOpenRate}%`}
              change={2.1}
              changeLabel="vs industry avg"
              icon={<MousePointer className="h-5 w-5" />}
              variant="warning"
            />
          </div>
          <div onClick={() => handleStatsCardClick('Total Subscribers')} className="cursor-pointer">
            <StatsCard
              title="Total Subscribers"
              value={analytics.recipientCount.toLocaleString()}
              change={15.7}
              changeLabel="this quarter"
              icon={<Users className="h-5 w-5" />}
              variant="primary"
            />
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="mb-8">
          <Card className="card-buddy">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Recent Campaign Performance</h3>
              </div>
              <div className="space-y-4">
                {analytics.recentCampaigns.map((campaign) => (
                  <div 
                    key={campaign.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-medium text-sm">{campaign.name}</h4>
                      <p className="text-xs text-muted-foreground">Sent on {campaign.sentDate}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-success">${campaign.revenue.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{campaign.openRate}% open rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Campaign Builder */}
          <div className="space-y-6">
            <CampaignBuilder 
              onLaunchEditor={handleLaunchEditor}
              onSelectDataFeed={setSelectedDataFeed}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onOpenABTest={() => setIsABTestOpen(true)}
              onOpenSchedule={() => setIsScheduleOpen(true)}
            />
          </div>

          {/* Center Column - Recommendation Engine */}
          <div className="space-y-6">
            <RecommendationEngine selectedProduct={selectedProduct} />
            
            {/* Product Selector */}
            <Card className="card-buddy p-4">
              <h4 className="font-medium text-sm mb-3">Select Product for Recommendations:</h4>
              <div className="grid grid-cols-2 gap-2">
                {['PROD-101', 'PROD-202', 'PROD-303', 'PROD-404'].map(productId => (
                  <Button
                    key={productId}
                    variant={selectedProduct === productId ? "primary-gradient" : "outline"}
                    size="sm"
                    onClick={() => setSelectedProduct(productId)}
                    className="text-xs"
                  >
                    {productId}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Revenue Prediction */}
          <div className="space-y-6">
            <RevenuePrediction campaignData={campaignData} />
          </div>
        </div>

        {/* Email Design Studio */}
        <div id="email-design-studio" className="mt-8">
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
              {initialTemplate && !isLoadingTemplate ? (
                <BeefreeEditor 
                  initialTemplate={initialTemplate}
                  onSave={handleEmailSave}
                  onError={handleEmailError}
                />
              ) : isLoadingTemplate ? (
                <div className="flex items-center justify-center h-full bg-muted/20 rounded-lg border border-dashed border-border">
                  <div className="text-center">
                    <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Preparing your email template...</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-muted/20 rounded-lg border border-dashed border-border">
                  <div className="text-center">
                    <Edit className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Click "Build and Edit Emails" to start designing</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Popups */}
      <SettingsPopup isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <ABTestPopup isOpen={isABTestOpen} onClose={() => setIsABTestOpen(false)} />
      <SchedulePopup isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      <CalendarPopup isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </div>
  );
};

export default MarketingDashboard;