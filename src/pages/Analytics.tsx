import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/Dashboard/StatsCard';
import { ArrowLeft, Mail, DollarSign, MousePointer, Users, BarChart3 } from 'lucide-react';

const Analytics = () => {
  const navigate = useNavigate();

  // Mock analytics data
  const analytics = {
    totalCampaigns: 24,
    totalRevenue: 127500,
    avgOpenRate: 34.5,
    totalSubscribers: 15420,
    campaignsByMonth: [
      { month: 'Jan', count: 18 },
      { month: 'Feb', count: 22 },
      { month: 'Mar', count: 19 },
      { month: 'Apr', count: 25 },
      { month: 'May', count: 21 },
      { month: 'Jun', count: 24 }
    ],
    revenueGrowth: 8.3,
    openRateImprovement: 2.1,
    subscriberGrowth: 15.7
  };

  const handleStatsCardClick = (type: string) => {
    navigate(`/analytics/${type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Marketing Analytics</h1>
              <p className="text-sm text-muted-foreground">Comprehensive performance overview</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Overview Stats */}
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
              change={analytics.revenueGrowth}
              changeLabel="vs last month"
              icon={<DollarSign className="h-5 w-5" />}
              variant="success"
            />
          </div>
          <div onClick={() => handleStatsCardClick('Avg Open Rate')} className="cursor-pointer">
            <StatsCard
              title="Avg. Open Rate"
              value={`${analytics.avgOpenRate}%`}
              change={analytics.openRateImprovement}
              changeLabel="vs industry avg"
              icon={<MousePointer className="h-5 w-5" />}
              variant="warning"
            />
          </div>
          <div onClick={() => handleStatsCardClick('Total Subscribers')} className="cursor-pointer">
            <StatsCard
              title="Total Subscribers"
              value={analytics.totalSubscribers.toLocaleString()}
              change={analytics.subscriberGrowth}
              changeLabel="this quarter"
              icon={<Users className="h-5 w-5" />}
              variant="primary"
            />
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Campaign Performance</h3>
            </div>
            <div className="space-y-4">
              {analytics.campaignsByMonth.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{data.month}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${(data.count / 30) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-8">{data.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-success/10">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <h3 className="text-lg font-semibold">Revenue Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Best Performing Campaign</span>
                <span className="font-semibold text-success">$45,200</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Average Revenue per Campaign</span>
                <span className="font-semibold">${(analytics.totalRevenue / analytics.totalCampaigns).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Revenue per Subscriber</span>
                <span className="font-semibold">${(analytics.totalRevenue / analytics.totalSubscribers).toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;