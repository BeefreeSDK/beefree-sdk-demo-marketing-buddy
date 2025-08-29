import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DollarSign, TrendingUp, Calendar, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const RevenueAnalytics = () => {
  const navigate = useNavigate();

  // Mock data for the last 12 months
  const monthlyData = [
    { month: 'Jan', revenue: 8500, campaigns: 3, subscribers: 1200 },
    { month: 'Feb', revenue: 12300, campaigns: 4, subscribers: 1350 },
    { month: 'Mar', revenue: 9800, campaigns: 2, subscribers: 1280 },
    { month: 'Apr', revenue: 15600, campaigns: 5, subscribers: 1420 },
    { month: 'May', revenue: 18200, campaigns: 6, subscribers: 1580 },
    { month: 'Jun', revenue: 22100, campaigns: 7, subscribers: 1720 },
    { month: 'Jul', revenue: 19800, campaigns: 5, subscribers: 1650 },
    { month: 'Aug', revenue: 25400, campaigns: 8, subscribers: 1890 },
    { month: 'Sep', revenue: 21700, campaigns: 6, subscribers: 1780 },
    { month: 'Oct', revenue: 28900, campaigns: 9, subscribers: 2010 },
    { month: 'Nov', revenue: 31200, campaigns: 10, subscribers: 2150 },
    { month: 'Dec', revenue: 34500, campaigns: 12, subscribers: 2280 }
  ];

  const totalRevenue = monthlyData.reduce((sum, month) => sum + month.revenue, 0);
  const avgMonthlyRevenue = totalRevenue / 12;
  const totalCampaigns = monthlyData.reduce((sum, month) => sum + month.campaigns, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header with Back Arrow */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gradient-buddy">Revenue Analytics</h1>
              <p className="text-sm text-muted-foreground">Last 12 months performance overview</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-buddy p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue (12 months)</p>
                <p className="text-2xl font-bold text-success">${totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="card-buddy p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Monthly Revenue</p>
                <p className="text-2xl font-bold text-primary">${Math.round(avgMonthlyRevenue).toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="card-buddy p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Calendar className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Campaigns</p>
                <p className="text-2xl font-bold text-warning">{totalCampaigns}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Revenue Trend Chart */}
        <Card className="card-buddy p-6 mb-8">
          <h3 className="text-lg font-semibold mb-6">Revenue Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Campaign Performance */}
        <Card className="card-buddy p-6">
          <h3 className="text-lg font-semibold mb-6">Campaign Performance by Month</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'campaigns' ? `${value} campaigns` : `${value.toLocaleString()} subscribers`,
                    name === 'campaigns' ? 'Campaigns' : 'Subscribers'
                  ]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Bar dataKey="campaigns" fill="hsl(var(--primary))" />
                <Bar dataKey="subscribers" fill="hsl(var(--secondary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueAnalytics;