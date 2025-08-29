import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Mail, TrendingUp, Target } from 'lucide-react';

const CampaignAnalytics = () => {
  const navigate = useNavigate();

  // Mock campaign data for the last 12 months
  const monthlyData = [
    { month: 'Jan', campaigns: 18, successRate: 85, engagement: 42 },
    { month: 'Feb', campaigns: 22, successRate: 88, engagement: 45 },
    { month: 'Mar', campaigns: 19, successRate: 82, engagement: 38 },
    { month: 'Apr', campaigns: 25, successRate: 91, engagement: 52 },
    { month: 'May', campaigns: 21, successRate: 87, engagement: 48 },
    { month: 'Jun', campaigns: 24, successRate: 89, engagement: 51 },
    { month: 'Jul', campaigns: 26, successRate: 92, engagement: 55 },
    { month: 'Aug', campaigns: 23, successRate: 86, engagement: 47 },
    { month: 'Sep', campaigns: 28, successRate: 94, engagement: 58 },
    { month: 'Oct', campaigns: 31, successRate: 93, engagement: 56 },
    { month: 'Nov', campaigns: 29, successRate: 90, engagement: 53 },
    { month: 'Dec', campaigns: 27, successRate: 88, engagement: 49 }
  ];

  const totalCampaigns = monthlyData.reduce((sum, month) => sum + month.campaigns, 0);
  const avgSuccessRate = monthlyData.reduce((sum, month) => sum + month.successRate, 0) / monthlyData.length;
  const avgEngagement = monthlyData.reduce((sum, month) => sum + month.engagement, 0) / monthlyData.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/analytics')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Analytics
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Campaign Analytics</h1>
              <p className="text-sm text-muted-foreground">Detailed campaign performance insights</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{totalCampaigns}</h3>
                <p className="text-sm text-muted-foreground">Total Campaigns</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <Target className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{avgSuccessRate.toFixed(1)}%</h3>
                <p className="text-sm text-muted-foreground">Average Success Rate</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <TrendingUp className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{avgEngagement.toFixed(1)}%</h3>
                <p className="text-sm text-muted-foreground">Average Engagement</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Monthly Campaign Count</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="campaigns" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Success Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="successRate" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Campaigns List */}
        <Card className="p-6 mt-8">
          <h3 className="text-lg font-semibold mb-6">Recent Campaign Details</h3>
          <div className="space-y-4">
            {[
              { name: 'Summer Sale 2024', type: 'Promotional', sent: '15,000', opened: '42.1%', clicked: '8.7%', revenue: '$45,200' },
              { name: 'Product Launch Newsletter', type: 'Product', sent: '12,500', opened: '38.9%', clicked: '7.2%', revenue: '$32,800' },
              { name: 'Weekly Newsletter #47', type: 'Content', sent: '18,200', opened: '29.3%', clicked: '5.1%', revenue: '$18,600' },
              { name: 'Holiday Special Offer', type: 'Promotional', sent: '20,000', opened: '45.8%', clicked: '9.8%', revenue: '$52,400' },
              { name: 'Customer Testimonials', type: 'Social Proof', sent: '14,800', opened: '35.2%', clicked: '6.9%', revenue: '$28,900' }
            ].map((campaign, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">{campaign.name}</h4>
                  <p className="text-xs text-muted-foreground">{campaign.type}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{campaign.sent}</p>
                  <p className="text-xs text-muted-foreground">Sent</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-success">{campaign.opened}</p>
                  <p className="text-xs text-muted-foreground">Opened</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-primary">{campaign.clicked}</p>
                  <p className="text-xs text-muted-foreground">Clicked</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-warning">{campaign.revenue}</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CampaignAnalytics;