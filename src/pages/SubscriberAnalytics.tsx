import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Users, UserPlus, UserMinus, Globe } from 'lucide-react';

const SubscriberAnalytics = () => {
  const navigate = useNavigate();

  // Mock subscriber data for the last 12 months
  const monthlyData = [
    { month: 'Jan', total: 12420, new: 1250, unsubscribed: 180, active: 11800 },
    { month: 'Feb', total: 13150, new: 1180, unsubscribed: 150, active: 12500 },
    { month: 'Mar', total: 13890, new: 1320, unsubscribed: 220, active: 13200 },
    { month: 'Apr', total: 14650, new: 1410, unsubscribed: 190, active: 13900 },
    { month: 'May', total: 15280, new: 1200, unsubscribed: 170, active: 14500 },
    { month: 'Jun', total: 15920, new: 1350, unsubscribed: 210, active: 15100 },
    { month: 'Jul', total: 16480, new: 1280, unsubscribed: 160, active: 15650 },
    { month: 'Aug', total: 17100, new: 1420, unsubscribed: 200, active: 16200 },
    { month: 'Sep', total: 17750, new: 1310, unsubscribed: 180, active: 16800 },
    { month: 'Oct', total: 18320, new: 1380, unsubscribed: 190, active: 17350 },
    { month: 'Nov', total: 18950, new: 1450, unsubscribed: 220, active: 17900 },
    { month: 'Dec', total: 19420, new: 1320, unsubscribed: 250, active: 18350 }
  ];

  const segmentData = [
    { name: 'Active Subscribers', value: 18350, color: 'hsl(var(--primary))' },
    { name: 'Inactive (30+ days)', value: 820, color: 'hsl(var(--warning))' },
    { name: 'Unengaged (90+ days)', value: 250, color: 'hsl(var(--destructive))' }
  ];

  const sourceData = [
    { source: 'Website Signup', subscribers: 8920, percentage: 45.9 },
    { source: 'Social Media', subscribers: 4680, percentage: 24.1 },
    { source: 'Referrals', subscribers: 2840, percentage: 14.6 },
    { source: 'Paid Ads', subscribers: 2180, percentage: 11.2 },
    { source: 'Events', subscribers: 800, percentage: 4.1 }
  ];

  const currentTotal = monthlyData[11].total;
  const yearGrowth = ((currentTotal - monthlyData[0].total) / monthlyData[0].total * 100);
  const avgMonthlyGrowth = monthlyData.reduce((sum, month) => sum + month.new, 0) / monthlyData.length;

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
              <h1 className="text-2xl font-bold">Subscriber Analytics</h1>
              <p className="text-sm text-muted-foreground">Audience growth and engagement insights</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{currentTotal.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Total Subscribers</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <UserPlus className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{avgMonthlyGrowth.toFixed(0)}</h3>
                <p className="text-sm text-muted-foreground">Avg Monthly Growth</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <UserMinus className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{yearGrowth.toFixed(1)}%</h3>
                <p className="text-sm text-muted-foreground">Year-over-Year Growth</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">94.5%</h3>
                <p className="text-sm text-muted-foreground">Active Rate</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Subscriber Growth Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Subscriber Segments</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value.toLocaleString()}`}
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Monthly New vs Unsubscribed</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="new" fill="hsl(var(--success))" />
                <Bar dataKey="unsubscribed" fill="hsl(var(--destructive))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Acquisition Sources</h3>
            <div className="space-y-4">
              {sourceData.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{source.source}</span>
                    <span className="text-sm text-muted-foreground">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {source.subscribers.toLocaleString()} subscribers
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Detailed Insights */}
        <Card className="p-6 mt-8">
          <h3 className="text-lg font-semibold mb-6">Subscriber Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Engagement Patterns</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• 68% open emails within 24 hours</p>
                <p>• 23% prefer mobile over desktop</p>
                <p>• Peak engagement: Tuesday 10 AM</p>
                <p>• 15% click-through rate average</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Demographics</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Age 25-34: 42% of subscribers</p>
                <p>• Age 35-44: 28% of subscribers</p>
                <p>• Mobile users: 67%</p>
                <p>• International: 23%</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Retention</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• 30-day retention: 85%</p>
                <p>• 90-day retention: 72%</p>
                <p>• 1-year retention: 58%</p>
                <p>• Avg. lifetime: 18 months</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubscriberAnalytics;